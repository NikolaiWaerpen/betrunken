module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            tailwind: "./tailwind.js",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
