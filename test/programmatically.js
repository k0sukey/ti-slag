var path = require('path'),
	slag = require('../');

slag(path.join(__dirname, 'Resources', 'app.js'), '4.0.0.GA', 'ios', {});