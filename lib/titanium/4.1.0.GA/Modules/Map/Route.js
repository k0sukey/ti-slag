var crypto = require('crypto');
function Route(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'points',
			'color',
			'width',
			'level',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Modules.Map.Route.apiName is read only property');
	}
	this.apiName = 'Modules.Map.Route';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.points = __SLAG__properties.points || {
		x: 0,
		y: 0
	};
	this.color = __SLAG__properties.color || '';
	this.width = __SLAG__properties.width || 0;
	this.level = __SLAG__properties.level || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Route.prototype.addEventListener = function () {
};
Route.prototype.removeEventListener = function () {
};
Route.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Route.prototype.fireEvent = function () {
};
Route.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Route.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Route.prototype.getApiName = function () {
	return this.apiName;
};
Route.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Route.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Route.prototype.getPoints = function () {
	return this.points;
};
Route.prototype.setPoints = function (property) {
	this.points = property;
};
Route.prototype.getColor = function () {
	return this.color;
};
Route.prototype.setColor = function (property) {
	this.color = property;
};
Route.prototype.getWidth = function () {
	return this.width;
};
Route.prototype.setWidth = function (property) {
	this.width = property;
};
Route.prototype.getLevel = function () {
	return this.level;
};
Route.prototype.setLevel = function (property) {
	this.level = property;
};
module.exports = function (properties) {
	return new Route(properties);
};