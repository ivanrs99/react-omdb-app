webpack: administrador del frontend para compilar archivos js, css, html...
@babel/core: traduce codigo js, hay que decir que versión de js
@babel/preset-env: para versión actual de js
@babel/preset-react: para jsx de react
babel-loader: integrar babel en webpack

npm i webpack@4 webpack-cli@3 @babel/core @babel/preset-env @babel/preset-react babel-loader
npm i html-webpack-plugin (para que mande los html al dist)
npm i react react-dom
npm i webpack-dev-server
npm i bootswatch (otra versión de bootstrap / npm i bootstrap si prefiero bootstrap normal)
npm i css-loader style-loader (convertir css en js y cargarlo en el proyecto)

npm i eslint eslint-loader eslint-plugin-react (revisa codigo / loader incorpora a webpack)
npm i prop-types
npm i dotenv-webpack (carga variables de entorno y da la posibilidad de acceder desde el proyecto)