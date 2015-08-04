var crypto = require('crypto');
function TwoDMatrix(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'a',
			'apiName',
			'b',
			'bubbleParent',
			'c',
			'd',
			'lifecycleContainer',
			'tx',
			'ty',
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
	this.a = __SLAG__properties.a || 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.2DMatrix.apiName is read only property');
	}
	this.apiName = 'Ti.UI.2DMatrix';
	this.b = __SLAG__properties.b || 0;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.c = __SLAG__properties.c || 0;
	this.d = __SLAG__properties.d || 0;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.tx = __SLAG__properties.tx || 0;
	this.ty = __SLAG__properties.ty || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
TwoDMatrix.prototype.addEventListener = function () {
};
TwoDMatrix.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
TwoDMatrix.prototype.fireEvent = function () {
};
TwoDMatrix.prototype.getA = function () {
	return this.a;
};
TwoDMatrix.prototype.getApiName = function () {
	return this.apiName;
};
TwoDMatrix.prototype.getB = function () {
	return this.b;
};
TwoDMatrix.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
TwoDMatrix.prototype.getC = function () {
	return this.c;
};
TwoDMatrix.prototype.getD = function () {
	return this.d;
};
TwoDMatrix.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
TwoDMatrix.prototype.getTx = function () {
	return this.tx;
};
TwoDMatrix.prototype.getTy = function () {
	return this.ty;
};
TwoDMatrix.prototype.invert = function () {
	return {};
};
TwoDMatrix.prototype.multiply = function () {
	return {};
};
TwoDMatrix.prototype.removeEventListener = function () {
};
TwoDMatrix.prototype.rotate = function () {
	return {};
};
TwoDMatrix.prototype.scale = function () {
	return {};
};
TwoDMatrix.prototype.setA = function (property) {
	this.a = property;
};
TwoDMatrix.prototype.setB = function (property) {
	this.b = property;
};
TwoDMatrix.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
TwoDMatrix.prototype.setC = function (property) {
	this.c = property;
};
TwoDMatrix.prototype.setD = function (property) {
	this.d = property;
};
TwoDMatrix.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
TwoDMatrix.prototype.setTx = function (property) {
	this.tx = property;
};
TwoDMatrix.prototype.setTy = function (property) {
	this.ty = property;
};
TwoDMatrix.prototype.translate = function () {
	return {};
};
module.exports = function (properties) {
	return new TwoDMatrix(properties);
};