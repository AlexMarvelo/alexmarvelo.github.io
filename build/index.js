const fs = require('fs');
const path = require('path');
const compilePug = require('./build-templates');
const compileLess = require('./build-styles');
const compileJs = require('./build-scripts');


const tasks = {
	less: ({ logMessage }) => new Promise((resolve, reject) => {
		compileLess({
			src: 'style.less',
			dist: 'style.css',
			callback: () => {
				if (logMessage) console.log(logMessage);
				resolve();
			},
			errCallback: (err) => {
				reject(err);
			}
		});
	}),

	pug: ({ logMessage }) => new Promise((resolve, reject) => {
		compilePug({
			src: 'index.pug',
			dist: 'index.html',
			callback: () => {
				if (logMessage) console.log(logMessage);
				resolve();
			},
			errCallback: (err) => {
				reject(err);
			}
		});
	}),

	js: ({ logMessage }) => new Promise((resolve, reject) => {
		compileJs({
			src: 'app.js',
			dist: 'app.bundle.js',
			callback: () => {
				if (logMessage) console.log(logMessage);
				resolve();
			},
			errCallback: (err) => {
				reject(err);
			}
		});
	}),

	watch: (target) => {
		console.log(`- files are watching: ${target ? target : 'all'}`);
		switch (target) {
		case 'less':
			fs.watch(path.join(__dirname, '../less'), {
				recursive: true
			}, () => {
				tasks.less({ logMessage: '... styles recompiled' });
			});
			break;

		case 'pug':
			fs.watch(path.join(__dirname, '../templates'), {
				recursive: true
			}, () => {
				tasks.pug({ logMessage: '... templates recompiled' });
			});
			break;

		case 'js':
			fs.watch(path.join(__dirname, '../js'), {
				recursive: true
			}, () => {
				tasks.js({ logMessage: '... scripts recompiled' });
			});
			break;
		default:
			console.log('adasd');
		}
	}
};


new Promise((resolve) => { resolve(); })
.then(() => tasks.pug({ logMessage: '- templates compiled' }))
.then(() => tasks.less({ logMessage: '- styles compiled' }))
.then(() => tasks.js({ logMessage: '- scripts compiled' }))
.then(() => tasks.watch('js'))
.catch((err) => {
	console.error(err);
});
