const path = require('path');

module.exports = {
  entry: './app.js',
  mode: 'development',
  output: {
    filename: 'bundle.umd.min.js',
    library: 'Mongodb', // Sostituisci con il nome della tua libreria
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this',
  },
  stats: {
    errorDetails: true,
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "fs": false,
      "https": require.resolve("https-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "querystring": require.resolve("querystring-es3"),
      "crypto": require.resolve("crypto-browserify"),
      "async_hooks": false, // or require.resolve("async_hooks")
      "stream": require.resolve("stream-browserify"),
      "http": require.resolve('stream-http'),
      "net": require.resolve('net'),
      "util": require.resolve("util/"),
      "url": require.resolve("url/"),
      "buffer": require.resolve("buffer/"),
      "assert": require.resolve('assert'),
    },
  },
};

