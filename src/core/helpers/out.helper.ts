import path from "node:path";
import process from "node:process";
import { EsbuildOptionPaths, PathOverrides } from "../types/options.type";

// Prefer out dir before out file
const resolveOutDir = (options: EsbuildOptionPaths & PathOverrides): string => {
	if (options.overrideOut !== undefined)
		return path.join(process.cwd(), options.overrideOut);

	const outBase: string = options.outBase ?? ".";

	return path.join(
		process.cwd(),
		outBase,
		options.outDir ?? options.outFile === undefined
		? "dist"
		: path.parse(options.outFile).dir
	);
}

export {
	resolveOutDir
}
