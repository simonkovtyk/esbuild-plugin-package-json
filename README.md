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

## How it works

1. Parses the package.json from the project root.
2. Deletes all unnecessary fields.
3. Determines the out-folder by using the existing esbuild configuration.
4. Writes the new package.json to this dir.

## Usage
```typescript
packageJsonPlugin(options);
```

This function needs to be called inside the esbuild configuration in order to use this plugin. It will provide the plugin inside the build process of esbuild.

<details>
<summary>Show an example of the integration</summary>

````typescript
esbuild.build({
  // some configuration...
  plugins: [
    packageJsonPlugin();
    // more plugins here...
  ]
})
````

</details>

<details>
<summary>Show an example of the configuration</summary>

````typescript
packageJsonPlugin({
  // configure here
});
````
</details>

### Properties

#### ``lifecycle``

> Default: ``onEnd``

An string with either the value ``onStart`` or ``onEnd``.

<details>
<summary>Show an example</summary>

````typescript
packageJsonPlugin({
  lifecycle: "onStart"
});
````
</details>

[See here](https://esbuild.github.io/plugins/#concepts) for more about esbuild lifecycles.

#### ``overrideOut``

> Default: ``undefined`` (esbuild's output directory)

A ``string``, that specifies the output directory for the package.json.

<details>
<summary>Show an example</summary>

````typescript
packageJsonPlugin({
  overrideOut: "dist" // any directory allowed
});
````

</details>

#### ``overridePackageJson``

> Default: ``undefined`` (npm default)

You can override the start directory for the package.json search, if a ``string`` is provided here.

<details>
<summary>Show an example</summary>

````typescript
packageJsonPlugin({
  overridePackageJson: "libs/my-lib" // any directory allowed
});
````

</details>

### Returns

Type: ``Plugin``

An instance of this plugin, that will be used by esbuild automatically.

## Installation

The plugin can be installed by any package manager.

### npm

````shell
npm install esbuild-plugin-package-json
````

### yarn

````shell
yarn install esbuild-plugin-package-json
````

### pnpm

````shell
pnpm install esbuild-plugin-package-json
````

## License

The MIT License (MIT) - Please have a look at the LICENSE file for more details.

## Contributing

Feel free to contribute to this project.\
You can fork this project and create a new pull request for contributing.

[See here for GitHub.](https://github.com/simonkovtyk/esbuild-plugin-package-json)

<hr>

GitHub [@simonkovtyk](https://github.com/simonkovtyk)
