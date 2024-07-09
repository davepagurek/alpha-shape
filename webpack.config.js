const path = require('path');

module.exports = (env, argv) => {
  const mode = argv.mode ?? 'production'
  const config = {
    entry: './alpha.js',
    output: {
      filename: 'alphashape.js',
      path: path.resolve(__dirname, 'build'),
      libraryTarget: 'umd',
      library: 'alphashape',
    },
    context: path.resolve(__dirname),
    mode,
    resolve: {
      extensions: ['.js']
    },
  };

  if (mode === 'development') {
    config.devtool = 'inline-source-map'
  }
  return config;
};
