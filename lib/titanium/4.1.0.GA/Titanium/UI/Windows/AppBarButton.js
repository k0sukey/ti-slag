var crypto = require('crypto');
function AppBarButton(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'icon',
			'touchEnabled',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT) {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT) {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.icon = __SLAG__properties.icon || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
AppBarButton.prototype.addEventListener = function () {
};
AppBarButton.prototype.removeEventListener = function () {
};
AppBarButton.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
AppBarButton.prototype.fireEvent = function () {
};
AppBarButton.prototype.getIcon = function () {
	return this.icon;
};
AppBarButton.prototype.setIcon = function (property) {
	this.icon = property;
};
AppBarButton.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
AppBarButton.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
module.exports = function (properties) {
	return new AppBarButton(properties);
};