var crypto = require('crypto');
function Gesture(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'orientation',
			'landscape',
			'portrait',
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
		throw new Error('Ti.Gesture.apiName is read only property');
	}
	this.apiName = 'Ti.Gesture';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.orientation) {
		throw new Error('Ti.Gesture.orientation is read only property');
	}
	this.orientation = 0;
	if (__SLAG__properties.landscape) {
		throw new Error('Ti.Gesture.landscape is read only property');
	}
	this.landscape = true;
	if (__SLAG__properties.portrait) {
		throw new Error('Ti.Gesture.portrait is read only property');
	}
	this.portrait = true;
	this.id = __SLAG__properties.id || '';
	return this;
}
Gesture.prototype.addEventListener = function () {
};
Gesture.prototype.removeEventListener = function () {
};
Gesture.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Gesture.prototype.fireEvent = function () {
};
Gesture.prototype.getLandscape = function () {
	return this.landscape;
};
Gesture.prototype.getPortrait = function () {
	return this.portrait;
};
Gesture.prototype.isLandscape = function () {
	return true;
};
Gesture.prototype.isPortrait = function () {
	return true;
};
Gesture.prototype.isFaceUp = function () {
	return true;
};
Gesture.prototype.isFaceDown = function () {
	return true;
};
Gesture.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Gesture.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Gesture.prototype.getApiName = function () {
	return this.apiName;
};
Gesture.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Gesture.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Gesture.prototype.getOrientation = function () {
	return this.orientation;
};
module.exports = function (properties) {
	return new Gesture(properties);
};