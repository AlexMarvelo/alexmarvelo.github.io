/* eslint no-underscore-dangle: 0 */

const path = require('path');

exports.modifyWebpackConfig = ({ config }) => {
	const modifiedConfig = config;
	config._config.resolve.modulesDirectories.push(path.join(__dirname, 'src'));
	return modifiedConfig;
};
