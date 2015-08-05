var crypto = require('crypto');
function MusicLibraryOptionsType(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'success',
			'error',
			'cancel',
			'autohide',
			'animated',
			'mediaTypes',
			'allowMultipleSelections',
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
	this.success = __SLAG_PROPERTIES.success || {};
	this.error = __SLAG_PROPERTIES.error || {};
	this.cancel = __SLAG_PROPERTIES.cancel || {};
	this.autohide = __SLAG_PROPERTIES.autohide || true;
	this.animated = __SLAG_PROPERTIES.animated || true;
	this.mediaTypes = __SLAG_PROPERTIES.mediaTypes || 0;
	this.allowMultipleSelections = __SLAG_PROPERTIES.allowMultipleSelections || true;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new MusicLibraryOptionsType(properties);
};