var crypto = require('crypto');
function PhotoGalleryOptionsType(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'allowEditing',
			'animated',
			'arrowDirection',
			'autohide',
			'cancel',
			'error',
			'mediaTypes',
			'popoverView',
			'success',
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
	this.allowEditing = __SLAG__properties.allowEditing || true;
	this.animated = __SLAG__properties.animated || true;
	this.arrowDirection = __SLAG__properties.arrowDirection || 0;
	this.autohide = __SLAG__properties.autohide || true;
	this.cancel = __SLAG__properties.cancel || {};
	this.error = __SLAG__properties.error || {};
	this.mediaTypes = __SLAG__properties.mediaTypes || '';
	this.popoverView = __SLAG__properties.popoverView || {};
	this.success = __SLAG__properties.success || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
module.exports = function (properties) {
	return new PhotoGalleryOptionsType(properties);
};