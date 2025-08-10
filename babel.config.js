module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], // atau 'module:metro-react-native-babel-preset' jika non-Expo
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@services': './src/services',
            '@pages': './src/pages',
          },
        },
      ],
    ],
  };
};