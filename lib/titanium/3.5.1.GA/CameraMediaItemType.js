var crypto = require('crypto');
function CameraMediaItemType(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'code',
			'cropRect',
			'error',
			'media',
			'mediaType',
			'success',
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
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.code = undefined;
	} else {
		this.code = __SLAG_PROPERTIES.code || 0;
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.cropRect = undefined;
	} else {
		this.cropRect = __SLAG_PROPERTIES.cropRect || {};
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.error = undefined;
	} else {
		this.error = __SLAG_PROPERTIES.error || '';
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.media = undefined;
	} else {
		this.media = __SLAG_PROPERTIES.media || {};
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.mediaType = undefined;
	} else {
		this.mediaType = __SLAG_PROPERTIES.mediaType || '';
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.success = undefined;
	} else {
		this.success = __SLAG_PROPERTIES.success || true;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new CameraMediaItemType(properties);
};