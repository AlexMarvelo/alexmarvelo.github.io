const fs = require('fs');
const path = require('path');
const less = require('less');


const compileLess = ({ src, dist, callback = () => {}, errCallback = () => {} }) => {
	const sourceFile = path.join(__dirname, '../less', src);
	const styles = fs.readFileSync(sourceFile).toString();
	less.render(styles,
		{
			paths: ['../less'],
			filename: path.resolve(sourceFile),
			compress: false
		})
		.then((output) => {
			fs.writeFile(path.join(__dirname, '../css', dist), output.css, (err) => {
				if (err) return errCallback(err);
				callback();
			});
		})
		.catch((e) => {
			errCallback(e);
		});
};


module.exports = compileLess;
