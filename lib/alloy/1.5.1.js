var _ = require('lodash'),
	path = require('path');

module.exports = function(alloy){
	return _.extend(require(path.join(alloy, '/Alloy'))(), {
		builtins: _.extend(require(path.join(alloy, 'Alloy', 'builtins'))(), {
			animation: require(path.join(alloy, 'Alloy', 'builtins', 'animation'))(),
			dialogs: require(path.join(alloy, 'Alloy', 'builtins', 'dialogs'))(),
			measurement: require(path.join(alloy, 'Alloy', 'builtins', 'measurement'))(),
			moment: require(path.join(alloy, 'Alloy', 'builtins', 'moment'))(),
			sha1: require(path.join(alloy, 'Alloy', 'builtins', 'sha1'))(),
			social: require(path.join(alloy, 'Alloy', 'builtins', 'social'))(),
			string: require(path.join(alloy, 'Alloy', 'builtins', 'string'))()
		}),
		Collections: require(path.join(alloy, 'Alloy', 'Collections'))(),
		Controller: _.extend(require(path.join(alloy, 'Alloy', 'Controller'))(), {
			UI: require(path.join(alloy, 'Alloy', 'Controller', 'UI'))(),			
		}),
		Models: require(path.join(alloy, 'Alloy', 'Models'))(),
		Widget: require(path.join(alloy, 'Alloy', 'Widget'))(),
		widgets: require(path.join(alloy, 'Alloy', 'widgets'))()
	});
};