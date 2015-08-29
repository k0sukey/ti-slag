var crypto = require('crypto');
function CoreMotionActivity(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'stationary',
			'walking',
			'running',
			'automotive',
			'unknown',
			'startDate',
			'confidence',
			'id'
		];
	if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG_NAME in __SLAG_PROPERTIES) {
			if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) {
				throw new Error('Use user custom property ' + __SLAG_NAME);
			}
		}
	} else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG_PROPERTIES.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG_PROPERTIES.stationary) {
		throw new Error('CoreMotionActivity.stationary is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.stationary = undefined;
	} else {
		this.stationary = true;
	}
	if (__SLAG_PROPERTIES.walking) {
		throw new Error('CoreMotionActivity.walking is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.walking = undefined;
	} else {
		this.walking = true;
	}
	if (__SLAG_PROPERTIES.running) {
		throw new Error('CoreMotionActivity.running is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.running = undefined;
	} else {
		this.running = true;
	}
	if (__SLAG_PROPERTIES.automotive) {
		throw new Error('CoreMotionActivity.automotive is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.automotive = undefined;
	} else {
		this.automotive = true;
	}
	if (__SLAG_PROPERTIES.unknown) {
		throw new Error('CoreMotionActivity.unknown is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.unknown = undefined;
	} else {
		this.unknown = true;
	}
	if (__SLAG_PROPERTIES.startDate) {
		throw new Error('CoreMotionActivity.startDate is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.startDate = undefined;
	} else {
		this.startDate = new Date();
	}
	if (__SLAG_PROPERTIES.confidence) {
		throw new Error('CoreMotionActivity.confidence is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.confidence = undefined;
	} else {
		this.confidence = 0;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new CoreMotionActivity(properties);
};