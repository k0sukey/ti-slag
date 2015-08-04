var crypto = require('crypto');
function CoreMotionActivity(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'stationary',
			'walking',
			'running',
			'automotive',
			'unknown',
			'startDate',
			'confidence',
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
	if (__SLAG__properties.stationary) {
		throw new Error('CoreMotionActivity.stationary is read only property');
	}
	this.stationary = true;
	if (__SLAG__properties.walking) {
		throw new Error('CoreMotionActivity.walking is read only property');
	}
	this.walking = true;
	if (__SLAG__properties.running) {
		throw new Error('CoreMotionActivity.running is read only property');
	}
	this.running = true;
	if (__SLAG__properties.automotive) {
		throw new Error('CoreMotionActivity.automotive is read only property');
	}
	this.automotive = true;
	if (__SLAG__properties.unknown) {
		throw new Error('CoreMotionActivity.unknown is read only property');
	}
	this.unknown = true;
	if (__SLAG__properties.startDate) {
		throw new Error('CoreMotionActivity.startDate is read only property');
	}
	this.startDate = new Date();
	if (__SLAG__properties.confidence) {
		throw new Error('CoreMotionActivity.confidence is read only property');
	}
	this.confidence = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
module.exports = function (properties) {
	return new CoreMotionActivity(properties);
};