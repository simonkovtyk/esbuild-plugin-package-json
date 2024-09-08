# esbuild plugin for package.json

![NPM Downloads](https://img.shields.io/npm/dw/esbuild-plugin-package-json) ![NPM License](https://img.shields.io/npm/l/esbuild-plugin-package-json)

Prepares the package.json by removing all unnecessary fields and copying it to the out-folder of esbuild, so the built package can be published directly.

* Supports newest esbuild version
* Uses NPM's package.json discovery
* Uses esbuild config to determine the out folder
* Type declarations (d.ts) included

## Unnecessary fields

While a package should be published, there are a few fields, that may are considered as a security vulnerability or are just not needed in the published package.

Following fields will be removed:
- devDependencies
- scripts

## How It Works

1. Parses the package.json from the project root.
2. Deletes all unnecessary fields.
3. Determines the out-folder by using the existing esbuild configuration.
4. Writes the new package.json to this dir.

This plugin prefers an ``outdir`` over an ``outfile``, but if only an ``outfile`` is provided, the plugin will choose the directory of the ``outfile`` as output directory for the package.json instead.\
The ``outbase`` is used as a prefix for the ``outdir`` or ``outfile`` and it can be left as empty, if it is not needed.

## Options

### Parsing the package.json file

The default behavior is, that this package will use NPM's package.json resolution.\
Otherwise it may be helpful, to overwrite the path to the package.json manually:

```typescript
packageJsonPlugin(
  [...]
  pathToPackageJson?: string | undefined
);
```

The path to the custom package.json can be customized by using the ``pathToPackageJson`` key.

### Output directory

This plugin will use the esbuild configuration to determine the output directory for the package.json.\
Sometimes it can be helpful to overwrite the output directory.

````typescript
packageJsonPlugin(
  [...]
  overrideOutBase?: string | undefined,
  overrideOutDir?: string | undefined,
  overrideOutFile?: string | undefined
);
````

Each overwrite will overwrite the specific esbuild configuration.

[See here for more details about the out configuration of esbuild.](https://esbuild.github.io/api/#outbase)

### Lifecycle

You can configure at which lifecycle of esbuild the plugin will be called.

````typescript
packageJsonPlugin(
  [...]
  lifecycle: "onStart" | "onEnd" | "onDispose" | undefined
);
````

[See here for more about the esbuild lifecycles.](https://esbuild.github.io/plugins/#concepts)

## Usage

### Installation

The plugin can be installed by any package manager.

<details><summary><b>Show instructions</b></summary>

> npm \
> ``npm install esbuild-plugin-package-json``

> yarn \
> ``yarn install esbuild-plugin-package-json``

> pnpm \
> ``pnpm install esbuild-plugin-package-json``

</details>

### Integration

The easy way to integrate this plugin in esbuild.

<details><summary><b>Show instructions</b></summary>

````typescript
await esbuild.build({
  [...]
  plugins: [
    packageJsonPlugin(...)
  ]
})
````

[See here for more about the esbuild plugin integration.](https://esbuild.github.io/plugins/#using-plugins)

</details>

## License

The MIT License (MIT) - Please have a look at the LICENSE file for more details.

## Contributing

Feel free to contribute to this project.\
You can fork this project and create a new pull request for contributing.

[Get to the repository at GitHub.](https://github.com/simonkovtyk/esbuild-plugin-package-json)

<hr>

GitHub [@simonkovtyk](https://github.com/simonkovtyk)
