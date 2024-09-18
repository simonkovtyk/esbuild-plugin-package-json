import NPMCliPackageJson from "@npmcli/package-json";
import { OnEndResult, OnStartResult, Plugin, PluginBuild } from "esbuild";
import fs from "node:fs";
import { shouldRemoveFields } from "./constants/fields.constant";
import { PACKAGE_JSON_FILENAME } from "./constants/file.constant";
import { Messages } from "./enums/message.enum";
import { resolveOutDir } from "./helpers/out.helper";
import { EsbuildOptionPaths, Lifecycle, Options, PathOverrides } from "./types/options.type";
import PackageJson from "@npmcli/package-json";

const handler = (lifecycle: Lifecycle, options: EsbuildOptionPaths & PathOverrides): () => Promise<(typeof lifecycle extends "onStart" ? OnStartResult : OnEndResult) | null> => {
  return async () => {
    const packageJson: NPMCliPackageJson = await PackageJson.load(options.overridePackageJson ?? process.cwd());

    const packageJsonContent = packageJson.content;

    shouldRemoveFields.forEach((shouldRemoveField: string): void => {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete packageJsonContent[shouldRemoveField];
    });

    const resolvedOutDir: string = resolveOutDir(options);

    if (!fs.existsSync(resolvedOutDir)) {
      fs.mkdirSync(resolvedOutDir, { recursive: true });
    }

    const resolvedOutFile = `${resolvedOutDir}/${PACKAGE_JSON_FILENAME}`;

    try {
      fs.writeFileSync(
        resolvedOutFile,
        JSON.stringify(packageJsonContent, null, 2)
      );
    }
    catch {
      return {
        errors: [
          {
            text: Messages.PACKAGE_JSON_WRITE
          }
        ]
      };
    }

    return null;
  };
};

const packageJsonPlugin = (options?: Options | undefined): Plugin => ({
  name: "esbuild-plugin-package-json",
  setup: (build: PluginBuild) => {
    const lifecycle: Lifecycle = options?.lifecycle ?? "onEnd";

    const resolvePathOptions: EsbuildOptionPaths & PathOverrides = {
      overrideOut: options?.overrideOut,
      overridePackageJson: options?.overridePackageJson,
      outBase: build.initialOptions.outbase,
      outDir: build.initialOptions.outdir,
      outFile: build.initialOptions.outfile
    };

    const handlerRef = handler(lifecycle, resolvePathOptions);

    switch (lifecycle) {
      case "onStart":
        build.onStart(handlerRef);
        break;
      case "onEnd":
        build.onEnd(handlerRef);
        break;
    }
  }
});

export {
  packageJsonPlugin
};
