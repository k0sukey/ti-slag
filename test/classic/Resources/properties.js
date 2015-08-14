exports.hasntProperty = {
	string: Ti.App.Properties.hasProperty('string'),
	bool: Ti.App.Properties.hasProperty('bool'),
	int: Ti.App.Properties.hasProperty('int'),
	double: Ti.App.Properties.hasProperty('double'),
	list: Ti.App.Properties.hasProperty('list'),
	object: Ti.App.Properties.hasProperty('object'),
};

exports.default = {
	string: Ti.App.Properties.getString('string', null),
	bool: Ti.App.Properties.getBool('bool', null),
	int: Ti.App.Properties.getInt('int', null),
	double: Ti.App.Properties.getDouble('double', null),
	list: Ti.App.Properties.getList('list', null),
	object: Ti.App.Properties.getObject('object', null),
};

Ti.App.Properties.setString('string', 'string');
Ti.App.Properties.setBool('bool', true);
Ti.App.Properties.setInt('int', 1);
Ti.App.Properties.setDouble('double', 3.14);
Ti.App.Properties.setList('list', [ 'list' ]);
Ti.App.Properties.setObject('object', { object: 'object' });

exports.hasProperty = {
	string: Ti.App.Properties.hasProperty('string'),
	bool: Ti.App.Properties.hasProperty('bool'),
	int: Ti.App.Properties.hasProperty('int'),
	double: Ti.App.Properties.hasProperty('double'),
	list: Ti.App.Properties.hasProperty('list'),
	object: Ti.App.Properties.hasProperty('object'),
};

exports.getProperty = {
	string: Ti.App.Properties.getString('string', null),
	bool: Ti.App.Properties.getBool('bool', null),
	int: Ti.App.Properties.getInt('int', null),
	double: Ti.App.Properties.getDouble('double', null),
	list: Ti.App.Properties.getList('list', null),
	object: Ti.App.Properties.getObject('object', null),
};

exports.listProperties = Ti.App.Properties.listProperties();

Ti.App.Properties.removeProperty('string');
Ti.App.Properties.removeProperty('bool');
Ti.App.Properties.removeProperty('int');
Ti.App.Properties.removeProperty('double');
Ti.App.Properties.removeProperty('list');
Ti.App.Properties.removeProperty('object');

exports.removeProperty = {
	string: Ti.App.Properties.hasProperty('string'),
	bool: Ti.App.Properties.hasProperty('bool'),
	int: Ti.App.Properties.hasProperty('int'),
	double: Ti.App.Properties.hasProperty('double'),
	list: Ti.App.Properties.hasProperty('list'),
	object: Ti.App.Properties.hasProperty('object'),
};