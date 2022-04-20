const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    polyfills: "./src/polyfills.ts", // add this
    main: "./src/app.ts", //change this
  },
  //   devtool: "source-map",
  //   devServer: {
  //     historyApiFallback: true,
  //   },
  //   resolve: {
  //     extensions: [".js", ".ts"],
  //   },
  output: {
    path: path.resolve(__dirname, "dist"), // output directory
    filename: "[name].js", // name of the generated bundle
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
      scriptLoading: "blocking",
    }),
  ],
};
