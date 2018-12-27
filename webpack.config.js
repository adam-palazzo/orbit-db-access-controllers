'use strict'

const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    libraryTarget: 'var',
    library: 'AccessControllers',
    filename: 'odb-access-controllers.min.js'
  },
  target: 'web',
  devtool: 'sourcemap',
  node: {
    console: false,
    Buffer: true
  },
  plugins: [
  ],
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '../node_modules')
    ]
  },
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '../node_modules')
    ],
    moduleExtensions: ['-loader']
  }
}