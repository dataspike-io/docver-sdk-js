// eslint-disable-next-line @typescript-eslint/no-var-requires
const GeneratePackageJsonPlugin = require('generate-package-json-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const FileManagerPlugin = require('filemanager-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json');

let { version } = packageJson;

const packageVersion = process.env.PACKAGE_VERSION;

if (packageVersion) {
  version = packageVersion;
}

module.exports = {
  entry: './main.js',
  mode: 'production',
  plugins: [
    new GeneratePackageJsonPlugin({ ...packageJson, version }),
    new FileManagerPlugin({
      events: {
        onEnd: {
          delete: [
            {
              source: path.resolve(__dirname, './dist/main.js'),
            },
          ],
        },
      },
    }),
  ],
};
