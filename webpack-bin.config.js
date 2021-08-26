const path = require('path');

module.exports = {
  mode: 'production',
  target: 'node14',
  entry: './bin-src/register.js',
  externalsPresets: { node: true },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'bin'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  optimization: {
    minimize: true,
  },
  node: {
    global: false,
  },
};
