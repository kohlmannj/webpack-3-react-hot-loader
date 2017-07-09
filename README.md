# webpack-3-react-hot-loader
_A minimal example of setting up Webpack 3 and react-hot-loader together_

## Getting Started
1. Install this project's dependencies by running the command `yarn` (or `npm install`)
2. Now run the command `yarn start` (or `npm start`) to start [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)
3. Open `http://localhost:8080` in a web browser
4. Try editing `src/components/App.jsx` (make sure you [adjust your text editor](https://webpack.js.org/guides/development/#adjusting-your-text-editor))

## How do I know it's working?
In your browser's Console, you should see messages like this when updating App.jsx:
```
[WDS] App hot update...
index.js:41996 [HMR] Checking for updates on the server...
index.js:41996 [HMR] Updated modules:
index.js:41996 [HMR]  - ./components/App.jsx
index.js:41996 [HMR] App is up to date.
```

## Notes
- webpack-dev-server can be finicky, so I've opted to use `webpack-dev-server --hot` to automatically insert some of the configuration necessary to make things work

## For More Info
- [Webpack Guides - Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement/)
- [Webpack - Development - Adjusting Your Text Editor](https://webpack.js.org/guides/development/#adjusting-your-text-editor)
- [React Hot Loader - Instructions for Webpack 2](https://github.com/gaearon/react-hot-loader/tree/next/docs#webpack-2)
