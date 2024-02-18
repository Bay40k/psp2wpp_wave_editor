const path = require('path');

module.exports = {
  entry: './src/react/index.js', // Pointing to React entry point
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    fallback: { 
      "path": false // Only necessary if 'path' is used in renderer code
    },
  },
  // Add other configurations as needed
};