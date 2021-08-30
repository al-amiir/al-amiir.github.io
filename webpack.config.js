const path = require("path");

module.exports = {
  mode: "development",
  entry: { main: "./src/index.js", vendor: "./src/vendor.js" },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./assets/js"),
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // exclude: /node_modules/,
        include: [path.resolve(__dirname, "app")],
        exclude: [path.resolve(__dirname, "app/demo-files")],
        use: {
          loader: "babel-loader",
          // the loader which should be applied, it'll be resolved relative to the context
          options: {
            presets: ["es2015"],
          },
        },
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader?url=false",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
