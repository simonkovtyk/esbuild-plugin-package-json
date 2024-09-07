type Lifecycle = "onStart" | "onEnd" | "onDispose";

type PathOverwrites = {
	overwriteOutBase?: string | undefined,
	overwriteOutDir?: string | undefined,
	overwriteOutFile?: string | undefined
}

type Options = {
	lifecycle?: Lifecycle | undefined
} & PathOverwrites

type HandlerOptions = {
	pathToPackageJson?: string | undefined
											} & PathOverwrites

type ResolvePathOptions = {
	outDir?: string | undefined,
	outFile?: string | undefined,
	outBase?: string | undefined
} & PathOverwrites

export type {
	ResolvePathOptions,
	Lifecycle,
	Options,
	HandlerOptions
}
