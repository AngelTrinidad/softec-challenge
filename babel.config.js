module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
          '@app': ['./src/app'],
          '@(.+)': './src/\\1',
          '@constants': ['./src/utils/constants'],
          '@interfaces': ['./src/interfaces'],
          '@screens': ['./src/screens'],
          '@navigation': ['./src/navigation'],
          '@utils': ['./src/utils'],
          '@hooks': ['./src/hooks'],
          '@contexts': ['./src/contexts'],
          '@components': ['./src/components'],
          '@config': ['./src/config'],
          '@api': ['./src/api'],
        },
      },
    ],
  ],
};
