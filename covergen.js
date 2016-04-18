var _ = require('lodash'),
	fs = require('fs'),
	path = require('path');

var jsca = JSON.parse(fs.readFileSync(process.argv[2]).toString()),
	iOS = [],
	Android = [],
	properties = [];

_.each(_.map(jsca.types, function(item){
	if (item.name.indexOf('Titanium.UI') === 0) {
		return {
			name: item.name,
			properties: item.properties
		};
	} else {
		return {
			name: '',
			properties: []
		};
	}
}).sort(function(a, b){
	if (a.name > b.name) {
		return 1;
	}

	if (a.name < b.name) {
		return -1;
	}

	return 0;
}), function(item){
	_.each(item.properties, function(property){
		if (_.indexOf(properties, property.name) === -1) {
			properties.push(property.name);
		}
	});
});
properties.sort();
console.log(properties);
process.exit(1);


_.each(_.map(jsca.types, function(item){
	return {
		name: item.name,
		functions: item.functions
	}
}).sort(function(a, b){
	if (a.name > b.name) {		
		return 1;
	}

	if (a.name < b.name) {
		return -1;
	}

	return 0;
}), function(item){
	if (item.name.indexOf('Ti') === 0) {
		if (item.name === 'Titanium.Analytics' ||
			item.name === 'Titanium.App.iOS.BackgroundService' ||
			item.name === 'Titanium.App.iOS.UserNotificationAction' ||
			item.name === 'Titanium.App.iOS.UserNotificationCategory') {
			return;
		}

		_.each(item.functions, function(func){
			if (func.name === 'include' ||
				func.name === 'createProxy') {
				return;
			}

			var platforms = _.map(func.userAgents, function(platform){
				return platform.platform;
			});

			if (platforms.indexOf('iphone') !== -1 ||
				platforms.indexOf('ipad') !== -1) {
iOS.push('console.log(\'' +item.name + '.' + func.name + '();\')');
				iOS.push(item.name + '.' + func.name + '();');
			}

			if (platforms.indexOf('android') !== -1) {
Android.push('console.log(\'' +item.name + '.' + func.name + '();\')');
				Android.push(item.name + '.' + func.name + '();');
			}
		});
	}
});

fs.writeFileSync(path.join(__dirname, 'test', 'coverage', 'ios.js'), iOS.join('\n'));
fs.writeFileSync(path.join(__dirname, 'test', 'coverage', 'android.js'), Android.join('\n'));