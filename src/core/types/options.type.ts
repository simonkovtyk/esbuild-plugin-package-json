type Lifecycle = "onStart" | "onEnd";

type PathOverrides = {
	overrideOut?: string | undefined,
	overridePackageJson?: string | undefined
}

type Options = {
	lifecycle?: Lifecycle | undefined
} & PathOverrides

type EsbuildOptionPaths = {
	outDir?: string | undefined,
	outFile?: string | undefined,
	outBase?: string | undefined
};

export type {
	PathOverrides,
	EsbuildOptionPaths,
	Lifecycle,
	Options
}
