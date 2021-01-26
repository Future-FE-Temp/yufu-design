const path = require("path");

exports.onCreateWebpackConfig = (args) => {
  args.actions.setWebpackConfig({
    resolve: {
      alias: {
        "@yffed/core": path.resolve(__dirname, "../../../packages/core/src"), // 配置去获取源文件
        "@yffed/icons": path.resolve(__dirname, "../../../packages/icons/src"),
      },
    },
  });
};