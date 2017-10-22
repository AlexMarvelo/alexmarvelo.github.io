const fs = require('fs');
const path = require('path');
const browserify = require('browserify')();


const compileJs = ({ src, dist, callback = () => {}, errCallback = () => {} }) => {
	browserify.add(path.join(__dirname, '../js', src), {
		basedir: path.join(__dirname, '../js'),
	});
	const writeStream = fs.createWriteStream(path.join(__dirname, '../js', dist));
	// writeStream.on('close', () => {
	// 	callback();
	// });
	writeStream.on('error', () => {
		errCallback();
	});
	browserify.bundle().pipe(writeStream).on('close', () => {
		callback();
	});
};


module.exports = compileJs;
