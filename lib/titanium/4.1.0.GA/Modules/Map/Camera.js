var crypto = require('crypto');
function Camera(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'altitude',
			'centerCoordinate',
			'heading',
			'pitch',
			'eyeCoordinate',
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
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Modules.Map.Camera.apiName is read only property');
	}
	this.apiName = 'Modules.Map.Camera';
	this.altitude = __SLAG__properties.altitude || 0;
	this.centerCoordinate = __SLAG__properties.centerCoordinate || {
		x: 0,
		y: 0
	};
	this.heading = __SLAG__properties.heading || 0;
	this.pitch = __SLAG__properties.pitch || 0;
	this.eyeCoordinate = __SLAG__properties.eyeCoordinate || {
		x: 0,
		y: 0
	};
	this.id = __SLAG__properties.id || '';
	return this;
}
Camera.prototype.addEventListener = function () {
};
Camera.prototype.removeEventListener = function () {
};
Camera.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Camera.prototype.fireEvent = function () {
};
Camera.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Camera.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Camera.prototype.getApiName = function () {
	return this.apiName;
};
Camera.prototype.getAltitude = function () {
	return this.altitude;
};
Camera.prototype.setAltitude = function (property) {
	this.altitude = property;
};
Camera.prototype.getCenterCoordinate = function () {
	return this.centerCoordinate;
};
Camera.prototype.setCenterCoordinate = function (property) {
	this.centerCoordinate = property;
};
Camera.prototype.getHeading = function () {
	return this.heading;
};
Camera.prototype.setHeading = function (property) {
	this.heading = property;
};
Camera.prototype.getPitch = function () {
	return this.pitch;
};
Camera.prototype.setPitch = function (property) {
	this.pitch = property;
};
Camera.prototype.getEyeCoordinate = function () {
	return this.eyeCoordinate;
};
Camera.prototype.setEyeCoordinate = function (property) {
	this.eyeCoordinate = property;
};
module.exports = function (properties) {
	return new Camera(properties);
};