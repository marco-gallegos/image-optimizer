
<p align="center">
  <img src="logo.png" width="150px">
</p>
<h1 align="center">Image Optimizer</h1>
<p align="center">
  <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/antonreshetov/image-optimizer">
  <img alt="GitHub All Releases" src="https://img.shields.io/github/downloads/antonreshetov/image-optimizer/total">
  <img alt="GitHub" src="https://img.shields.io/github/license/antonreshetov/image-optimizer">
</p>
<p align="center">
  <strong>Built with Electron, Vue & Vite.</strong>
</p>

A free and open source tool for optimizing images and vector graphics.

<p align="center">
  <img src="demo.gif">
</p>


## Core libs

- [mozjpeg](https://github.com/mozilla/mozjpeg)
- [pngquant](https://pngquant.org)
- [cwebp](https://developers.google.com/speed/webp/docs/cwebp)
- [gifsicle](https://www.lcdf.org/gifsicle/)
- [SVGO](https://github.com/svg/svgo)

## Download and Installation on macOS

Go to [Releases](https://github.com/antonreshetov/image-optimizer/releases) get the latest build, download and install.

## Development

```bash
# install dependencies
yarn
# serve with hot reload
yarn dev
```

## Build

```bash
# build application for production
yarn build
```

## Next updates

- electron
  - target is 22.3.24 because on this version electron has high vulnerabilities
- [ ] node version to 20
- packages versions
  - electron -> should work at least on 29.x
  - cwebp-bin -> is stuck en current because we are using cjs as build
- "skipLibCheck": true is potentially overkill, should just exclude node_modules folder?

## Related

- [Electron Vue Vite Boilerplate](https://github.com/antonreshetov/electron-vue-vite-boilerplate)

Copyright (c) 2021-present, Anton Reshetov.
