# 🚀 PLUTOBOOK
[![npm version](https://badge.fury.io/js/plutobook.svg)](https://badge.fury.io/js/plutobook)

### This is a browser-based interactive code-editing notebook that supports both front-end web code (JS/JSX/HTML) and markdown for convenient code documentation.

#### You can write code and see it transpiled, bundled, and executed instantly in the preview windows.


## 🌑 Features
- Lightning fast in-browser JSX transpilation and code bundling utilizing [esbuild](https://github.com/evanw/esbuild)
- Built in support for **all** NPM package imports (client-side packages) thanks to [unpkg](https://unpkg.com/)
- Your code is rendered instantly in built in `<iframe />` preview windows
- Special built in `show(replace_me)` function to display items onto the preview window (supports React components, JSX, HTML elements, JS variables)
- Beautiful user-interface, utilizing Monaco Editor (the same one VSCode uses!) as a code editor
- Interconnected code between different cells! Your variables defined in one cell can be accessed by any other.



## 🌎 Getting started

Open up the directory where you want to save your file at and run `npx plutobook serve yourFileName.js`

Notes: Files are by default served to a port of 4005, you can change this by adding an additional parameter `npx plutobook serve yourFileName.js --port=NUM` and replacing NUM



## 🔭 Images
... to be added

