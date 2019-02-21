This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
















{
  "name": "react-starter",
  "version": "1.0.0",
  "description": "A basic template that consists of the essential elements that are required to start building a React application",
  "scripts": {
    "build": "webpack",
    "build:dev": "npm run build -- --env.env=dev",
    "build:dev:watch": "npm run build:dev -- --watch",
    "build:dev:bundleanalyze": "npm run build:dev -- --env.addons=bundleanalyze",
    "serve:dev": "webpack-dev-server --env.env=dev --hot",
    "serve:dev:dashboard": "webpack-dashboard -- webpack-dev-server --hot --env.env=dev --env.addons=dashboard",
    "build:prod": "npm run build -- -p --env.env=prod",
    "build:prod:watch": "npm run build:prod -- --watch",
    "build:prod:bundleanalyze": "npm run build:prod -- --env.addons=bundleanalyze",
    "serve:prod": "npm run build:prod && live-server ./public",
    "lint": "eslint .; exit 0",
    "lint:fix": "eslint . --fix; exit 0",
    "start": "npm run serve:dev",
    "test": "echo \"No tests available\"; exit 0"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/drminnaar/react-starter.git"
  },
  "license": "MIT",
  "babel": {
    "presets": [
      "env",
      "react"
    ]
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.3",
    "babel-eslint": "^8.2.3",
    "babel-loader": "^7.1.4",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "clean-webpack-plugin": "^0.1.19",
    "css-loader": "^0.28.11",
    "eslint": "^4.19.1",
    "eslint-loader": "^2.0.0",
    "eslint-plugin-react": "^7.8.2",
    "extract-text-webpack-plugin": "^4.0.0-beta.0",
    "file-loader": "^1.1.11",
    "html-webpack-plugin": "^3.2.0",
    "live-server": "^1.2.0",
    "node-sass": "^4.9.0",
    "sass-loader": "^7.0.1",
    "style-loader": "^0.21.0",
    "uglifyjs-webpack-plugin": "^1.2.5",
    "url-loader": "^1.0.1",
    "webpack": "^4.9.1",
    "webpack-bundle-analyzer": "^2.13.1",
    "webpack-cli": "^2.1.4",
    "webpack-dashboard": "^2.0.0",
    "webpack-dev-server": "^3.1.4",
    "webpack-merge": "^4.1.2"
  },
  "dependencies": {
    "normalize.css": "^8.0.0",
    "react": "^16.4.0",
    "react-dom": "^16.4.0"
  }
}

