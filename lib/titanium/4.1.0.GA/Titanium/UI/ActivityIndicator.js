var crypto = require('crypto');
function ActivityIndicator(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'bottom',
			'height',
			'left',
			'right',
			'top',
			'width',
			'color',
			'font',
			'message',
			'messageid',
			'style',
			'indicatorColor',
			'indicatorDiameter',
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
		throw new Error('Ti.UI.ActivityIndicator.apiName is read only property');
	}
	this.apiName = 'Ti.UI.ActivityIndicator';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.bottom = __SLAG__properties.bottom || 0;
	this.height = __SLAG__properties.height || '';
	this.left = __SLAG__properties.left || 0;
	this.right = __SLAG__properties.right || 0;
	this.top = __SLAG__properties.top || 0;
	this.width = __SLAG__properties.width || '';
	this.color = __SLAG__properties.color || '';
	this.font = __SLAG__properties.font || {};
	this.message = __SLAG__properties.message || '';
	this.messageid = __SLAG__properties.messageid || '';
	this.style = __SLAG__properties.style || 0;
	this.indicatorColor = __SLAG__properties.indicatorColor || '';
	this.indicatorDiameter = __SLAG__properties.indicatorDiameter || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
ActivityIndicator.prototype.addEventListener = function () {
};
ActivityIndicator.prototype.removeEventListener = function () {
};
ActivityIndicator.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
ActivityIndicator.prototype.fireEvent = function () {
};
ActivityIndicator.prototype.finishLayout = function () {
	throw new Error('Ti.UI.ActivityIndicator.finishLayout was deprecated, since 3.0.0');
};
ActivityIndicator.prototype.startLayout = function () {
	throw new Error('Ti.UI.ActivityIndicator.startLayout was deprecated, since 3.0.0');
};
ActivityIndicator.prototype.updateLayout = function () {
	throw new Error('Ti.UI.ActivityIndicator.updateLayout was deprecated, since 3.0.0');
};
ActivityIndicator.prototype.add = function () {
};
ActivityIndicator.prototype.hide = function () {
};
ActivityIndicator.prototype.remove = function () {
};
ActivityIndicator.prototype.show = function () {
};
ActivityIndicator.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ActivityIndicator.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
ActivityIndicator.prototype.getApiName = function () {
	return this.apiName;
};
ActivityIndicator.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
ActivityIndicator.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
ActivityIndicator.prototype.getBottom = function () {
	return this.bottom;
};
ActivityIndicator.prototype.setBottom = function (property) {
	this.bottom = property;
};
ActivityIndicator.prototype.getHeight = function () {
	return this.height;
};
ActivityIndicator.prototype.setHeight = function (property) {
	this.height = property;
};
ActivityIndicator.prototype.getLeft = function () {
	return this.left;
};
ActivityIndicator.prototype.setLeft = function (property) {
	this.left = property;
};
ActivityIndicator.prototype.getRight = function () {
	return this.right;
};
ActivityIndicator.prototype.setRight = function (property) {
	this.right = property;
};
ActivityIndicator.prototype.getTop = function () {
	return this.top;
};
ActivityIndicator.prototype.setTop = function (property) {
	this.top = property;
};
ActivityIndicator.prototype.getWidth = function () {
	return this.width;
};
ActivityIndicator.prototype.setWidth = function (property) {
	this.width = property;
};
ActivityIndicator.prototype.getColor = function () {
	return this.color;
};
ActivityIndicator.prototype.setColor = function (property) {
	this.color = property;
};
ActivityIndicator.prototype.getFont = function () {
	return this.font;
};
ActivityIndicator.prototype.setFont = function (property) {
	this.font = property;
};
ActivityIndicator.prototype.getMessage = function () {
	return this.message;
};
ActivityIndicator.prototype.setMessage = function (property) {
	this.message = property;
};
ActivityIndicator.prototype.getMessageid = function () {
	return this.messageid;
};
ActivityIndicator.prototype.setMessageid = function (property) {
	this.messageid = property;
};
ActivityIndicator.prototype.getStyle = function () {
	return this.style;
};
ActivityIndicator.prototype.setStyle = function (property) {
	this.style = property;
};
ActivityIndicator.prototype.getIndicatorColor = function () {
	return this.indicatorColor;
};
ActivityIndicator.prototype.setIndicatorColor = function (property) {
	this.indicatorColor = property;
};
ActivityIndicator.prototype.getIndicatorDiameter = function () {
	return this.indicatorDiameter;
};
ActivityIndicator.prototype.setIndicatorDiameter = function (property) {
	this.indicatorDiameter = property;
};
module.exports = function (properties) {
	return new ActivityIndicator(properties);
};