const fs = require('fs');
const path = require('path');
const pug = require('pug');


const compilePug = ({ src, dist, callback = () => {}, errCallback = () => {} }) => {
	let html = pug.renderFile(path.join(__dirname, '../templates', src));
	fs.writeFile(path.join(__dirname, '../', dist), html, (err) => {
		if (err) return errCallback(err);
		callback();
	});
};


module.exports = compilePug;
