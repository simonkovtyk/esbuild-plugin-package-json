type Lifecycle = "onStart" | "onEnd";

interface PathOverrides {
  overrideOut?: string | undefined;
  overridePackageJson?: string | undefined;
}

interface Options extends PathOverrides {
  lifecycle?: Lifecycle | undefined;
}

interface EsbuildOptionPaths {
  outDir?: string | undefined;
  outFile?: string | undefined;
  outBase?: string | undefined;
}

export type {
  PathOverrides,
  EsbuildOptionPaths,
  Lifecycle,
  Options
};
