"use strict";

const path = require("path");

module.exports = {
  entry: "./src/index.ts",

  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/build/",
    filename: "project.bundle.js"
  },

  module: {
    rules: [
      {
        test: [ /\.vert$/, /\.frag$/ ],
        use: "raw-loader"
      },
      {
        test: /\.tsx?$/,
        use: [{
          loader: "awesome-typescript-loader",
        }],
      }
    ]
  },

  resolve: {
    extensions: [".ts", ".js"],
  }
};
