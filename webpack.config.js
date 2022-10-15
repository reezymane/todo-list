const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    factories: './src/factories.js',
    functions: './src/functions.js',
    generalProject: './src/generalProject.js',
    newProject: './src/newProject.js',
    newTodo: './src/newTodo.js'
  },
  devServer: {
    static: './dist',
  },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};