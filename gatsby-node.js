/* eslint no-underscore-dangle: 0 */
const path = require('path');
const loaderUtils = require('loader-utils');


exports.modifyWebpackConfig = ({ config }) => {
	const modifiedConfig = config;

	// Add 'src' folder to the js-scope
	config._config.resolve.modulesDirectories.push(path.join(__dirname, 'src'));

	// Add 'src' folder to the sass-scope
	const sassModulesLoader = modifiedConfig._loaders.sassModules;
	if (sassModulesLoader) {
		if (sassModulesLoader.config.loaders) {
			sassModulesLoader.config.loaders = sassModulesLoader.config.loaders
				.map((loader) => {
					if (typeof loader === 'string') {
						const regexp = new RegExp(/^sass\?[!s]*/);
						if (loader.match(regexp)) {
							const options = loaderUtils.parseQuery(loader.replace(regexp, '?'));
							options.includePaths = [
								path.join(__dirname, 'src'),
							];
							const modifiedLoader = `sass?${JSON.stringify(options)}`;
							return modifiedLoader;
						}
						return loader;
					}
					return loader;
				});
		}
		if (sassModulesLoader.config.loader) {
			const modifiedLoader = sassModulesLoader.config.loader;
			const regexp = new RegExp(/!sass\?{.*?}/);
			const match = modifiedLoader.match(regexp);
			if (modifiedLoader.match(regexp)) {
				const optionsRegexp = new RegExp(/^!sass\?[!s]*/);
				const options = loaderUtils.parseQuery(match[0].replace(optionsRegexp, '?'));
				options.includePaths = [
					path.join(__dirname, 'src'),
				];
				sassModulesLoader.config.loader = modifiedLoader.replace(regexp, `!sass?${JSON.stringify(options)}`);
			}
		}
	}

	return modifiedConfig;
};
