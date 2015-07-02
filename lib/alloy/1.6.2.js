var _ = require('lodash'),
	path = require('path');

module.exports = function(alloy){
	return _.extend({
		builtins: _.extend(require(path.join(alloy, 'Alloy', 'builtins'))(), {
			ActionBar: require(path.join(alloy, 'Alloy', 'builtins', 'animation'))(),
			Activity: require(path.join(alloy, 'Alloy', 'builtins', 'dialogs'))(),
			BroadcastReceiver: require(path.join(alloy, 'Alloy', 'builtins', 'measurement'))(),
			Intent: require(path.join(alloy, 'Alloy', 'builtins', 'moment'))(),
			Menu: require(path.join(alloy, 'Alloy', 'builtins', 'sha1'))(),
			MenuItem: require(path.join(alloy, 'Alloy', 'builtins', 'social'))(),
			Notification: require(path.join(alloy, 'Alloy', 'builtins', 'string'))()
		}),
		Collections: require(path.join(alloy, 'Alloy', 'Collections'))(),
		Controller: _.extend(require(path.join(alloy, 'Alloy', 'Controller'))(), {
			Properties: require(path.join(alloy, 'Alloy', 'Controller', 'UI'))(),			
		}),
		Models: require(path.join(alloy, 'Alloy', 'Models'))(),
		Widget: require(path.join(alloy, 'Alloy', 'Widget'))(),
		widgets: require(path.join(alloy, 'Alloy', 'widgets'))()
	}, require(path.join(alloy, '/Alloy'))());
};