import path from "node:path";
import process from "node:process";
import { ResolvePathOptions } from "../types/options.type";

// Prefer out dir before out file
const resolveOutDir = (options: ResolvePathOptions): string => {
	const explicitOutBase: string | undefined = options.overwriteOutBase ?? options.outBase;

	const outBase = explicitOutBase
									? path.join(process.cwd(), explicitOutBase)
									: process.cwd();

	const explicitOutDir: string | undefined = options.overwriteOutDir ?? options.outDir;

	if (explicitOutDir !== undefined) {
		return path.join(outBase, explicitOutDir);
	}

	const explicitOutFile: string | undefined = options.overwriteOutFile ?? options.outFile;

	if (explicitOutFile !== undefined) {
		const dirOfOutFile = path.parse(explicitOutFile).dir;

		return path.join(explicitOutFile, dirOfOutFile);
	}

	return path.join(outBase, "dist")
}

export {
	resolveOutDir
}
