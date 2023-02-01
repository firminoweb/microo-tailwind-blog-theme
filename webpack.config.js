const path = require('path');

module.exports = {
    mode: 'production',
    devServer: {
        static: {
          directory: path.join(__dirname),
        },
        compress: true,
        port: 9000,
      },
    entry: {
        main: './src/js/microo.js',
    },
    output: {
        path: path.resolve(__dirname, './assets/js'),
        filename: "microo.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    optimization: {
        minimizer: [
            (compiler) => {
              const TerserPlugin = require('terser-webpack-plugin');
              new TerserPlugin({
                terserOptions: {
                  compress: true,
                }
              }).apply(compiler);
            },
        ]
    },
}