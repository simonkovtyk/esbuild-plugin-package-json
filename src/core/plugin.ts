import { Plugin, PluginBuild } from "esbuild";
import fs from "node:fs";
import { shouldRemoveFields } from "../constants/fields.constant";
import { PACKAGE_JSON_FILENAME } from "../constants/file.constant";
import { resolveOutDir } from "../helpers/out.helper";
import { HandlerOptions, Lifecycle, Options } from "../types/options.type";
import PackageJson from "@npmcli/package-json";

const handler = (options: HandlerOptions) => {
	return async () => {
		const packageJson = await PackageJson.load(options.pathToPackageJson ?? process.cwd());

		const packageJsonContent = packageJson.content;

		shouldRemoveFields.forEach((shouldRemoveField: string): void => {
			delete packageJsonContent[shouldRemoveField];
		});

		const resolvedOutDir = resolveOutDir(options);

		if (!fs.existsSync(resolvedOutDir)) {
			fs.mkdirSync(resolvedOutDir, { recursive: true });
		}

		const resolvedOutFile = `${ resolvedOutDir }/${ PACKAGE_JSON_FILENAME }`;

		fs.writeFileSync(
			resolvedOutFile,
			JSON.stringify(packageJsonContent, null, 2)
		);
	}
}

const packageJsonPlugin = (options: Options): Plugin => ({
	name: "esbuild-plugin-package-json",
	setup: (build: PluginBuild) => {
		const lifecycle: Lifecycle = options.lifecycle ?? "onEnd";

		const handlerRef = handler(options);

		switch (lifecycle) {
			case "onStart":
				build.onStart(handlerRef);
				break;
			case "onEnd":
				build.onEnd(handlerRef);
				break;
			case "onDispose":
				build.onDispose(handlerRef);
				break;
		}
	}
})

export {
	packageJsonPlugin
}
