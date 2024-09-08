type Lifecycle = "onStart" | "onEnd" | "onDispose";

type PathOverrides = {
	overrideOutBase?: string | undefined,
	overrideOutDir?: string | undefined,
	overrideOutFile?: string | undefined,
	pathToPackageJson?: string | undefined
}

type Options = {
	lifecycle?: Lifecycle | undefined
} & PathOverrides

type ResolvePathOptions = {
	outBase?: string | undefined,
	outDir?: string | undefined,
	outFile?: string | undefined
} & PathOverrides;

export type {
	ResolvePathOptions,
	Lifecycle,
	Options
}
