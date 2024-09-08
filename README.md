# esbuild plugin for package.json

Prepares the package.json by removing all unnecessary fields and copying it to the out folder of esbuild, so the built package can be published directly.

* Supports newest esbuild version
* Uses NPM's package.json discovery
* Uses esbuild config to determine the outg folder
* Type-declarations (d.ts) included

## How It Works

1. Parses the package.json from the project root.
2. Deletes all unnecessary fields.
3. Determines the out-folder by using the existing esbuild configuration.

This plugin prefers an ``outdir`` over an ``outfile``, but if only a ``outfile`` is provided, the plugin will choose the directory of the ``outfile`` as output directory for the package.json instead.\
The ``outbase`` is used as an prefix for the ``outdir`` or ``outfile`` and it can be leaved as empty, if it is not needed.

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
  overwriteOutBase?: string | undefined,
  overwriteOutDir?: string | undefined,
  overwriteOutFile?: string | undefined
);
````

Each overwrite will overwrite the specific esbuild configuration.

[See here for more details about the out configuration of esbuild.](https://esbuild.github.io/api/#outbase)

### Lifecycle

You can configure at which lifecycle of esbuild, where the plugin will be called.

````typescript
packageJsonPlugin(
  [...]
  lifecycle: "onStart" | "onEnd" | "onDispose" | undefined
);
````

[See here for more about the esbuild lifecycles.](https://esbuild.github.io/plugins/#concepts)

## Usage

### Installation

The plugin can be installed by any package manger.

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

[Get to the respository at GitHub.](https://github.com/simonkovtyk/esbuild-plugin-package-json)

<hr>

GitHub [@simonkovtyk](https://github.com/simonkovtyk)
