var crypto = require('crypto');
function RefreshControl(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'title',
			'tintColor',
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
		throw new Error('Ti.UI.RefreshControl.apiName is read only property');
	}
	this.apiName = 'Ti.UI.RefreshControl';
	this.title = __SLAG__properties.title || '';
	this.tintColor = __SLAG__properties.tintColor || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
RefreshControl.prototype.addEventListener = function () {
};
RefreshControl.prototype.removeEventListener = function () {
};
RefreshControl.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
RefreshControl.prototype.fireEvent = function () {
};
RefreshControl.prototype.beginRefreshing = function () {
};
RefreshControl.prototype.endRefreshing = function () {
};
RefreshControl.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
RefreshControl.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
RefreshControl.prototype.getApiName = function () {
	return this.apiName;
};
RefreshControl.prototype.getTitle = function () {
	return this.title;
};
RefreshControl.prototype.setTitle = function (property) {
	this.title = property;
};
RefreshControl.prototype.getTintColor = function () {
	return this.tintColor;
};
RefreshControl.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
module.exports = function (properties) {
	return new RefreshControl(properties);
};