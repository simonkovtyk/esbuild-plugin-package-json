<div align="center">

<img width="196" src="https://raw.githubusercontent.com/simonkovtyk/esbuild-plugin-package-json/d7d77d5766ef9ef97f157c2d221d61a7d3cef51c/docs/esbuild-favicon.svg" />

<h1>package.json Plugin</h1>

<p>Prepares the package.json by removing all unnecessary fields and<br/>copying it to the output folder of esbuild.</p>

![NPM Downloads](https://img.shields.io/npm/dw/esbuild-plugin-package-json)
![NPM License](https://img.shields.io/npm/l/esbuild-plugin-package-json)
![GitHub package.json version](https://img.shields.io/npm/v/esbuild-plugin-package-json)
![TypeScript types](https://img.shields.io/badge/TypeScript_types-included-blue)

<br />

Add a ⭐ to this repository — *it motivates me a lot!*

</div>

## ⚡️ Getting started

Simply install this package with your package manager.

````shell
npm install -D esbuild-plugin-package-json
````

<details>
<summary>📦 other package manager</summary>

Here are examples for installing the package with other package manager.

> 💾 **yarn**
> ````shell
> yarn add -D esbuild-plugin-package-json
> ````

> 💾 **pnpm**
> ````shell
> pnpm install -D esbuild-plugin-package-json
> ````

</details>

Looks good so far 🔥 — now you have installed the latest version!

## 💡 Introduction

While a package is a relase candidat, there are a few fields, that may are considered as a security vulnerability or are just not needed in the published package.

The following fields can be safely removed:
````json5
{
  "scripts": {
    // something here...
  },
  "devDependencies": {
    // something here...
  }
}
````

## 🔧 Usage

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

## License

The MIT License (MIT) - Please have a look at the [License](https://github.com/simonkovtyk/esbuild-plugin-package-json/blob/main/LICENSE) file for more details.

## Contributing

Want to contribute to an open-source project on GitHub but unsure where to start? Check out this comprehensive step-by-step guide on how to contribute effectively!

From forking the repository to creating pull requests, this guide walks you through every stage of the process, helping you make a successful contribution to this GitHub project. Start collaborating, learn new skills, and make an
impact on this project!

[See here](https://github.com/simonkovtyk/esbuild-plugin-package-json/blob/main/docs/guides/HOW_TO_CONTRIBUTE.md) for the contribute guide at GitHub.

<hr>

GitHub [@simonkovtyk](https://github.com/simonkovtyk)
