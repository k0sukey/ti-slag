var crypto = require('crypto');
function MusicLibraryOptionsType(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'allowMultipleSelections',
			'animated',
			'autohide',
			'cancel',
			'error',
			'mediaTypes',
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
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.allowMultipleSelections = undefined;
	} else {
		this.allowMultipleSelections = __SLAG_PROPERTIES.allowMultipleSelections || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.animated = undefined;
	} else {
		this.animated = __SLAG_PROPERTIES.animated || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.autohide = undefined;
	} else {
		this.autohide = __SLAG_PROPERTIES.autohide || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.cancel = undefined;
	} else {
		this.cancel = __SLAG_PROPERTIES.cancel || {};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.error = undefined;
	} else {
		this.error = __SLAG_PROPERTIES.error || {};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.mediaTypes = undefined;
	} else {
		this.mediaTypes = __SLAG_PROPERTIES.mediaTypes || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.success = undefined;
	} else {
		this.success = __SLAG_PROPERTIES.success || {};
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new MusicLibraryOptionsType(properties);
};