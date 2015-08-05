var crypto = require('crypto');
function CameraOptionsType(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'allowEditing',
			'animated',
			'arrowDirection',
			'autohide',
			'autorotate',
			'cancel',
			'error',
			'inPopOver',
			'mediaTypes',
			'overlay',
			'popoverView',
			'saveToPhotoGallery',
			'showControls',
			'success',
			'transform',
			'videoMaximumDuration',
			'videoQuality',
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
	this.allowEditing = __SLAG_PROPERTIES.allowEditing || true;
	this.animated = __SLAG_PROPERTIES.animated || true;
	this.arrowDirection = __SLAG_PROPERTIES.arrowDirection || 0;
	this.autohide = __SLAG_PROPERTIES.autohide || true;
	this.autorotate = __SLAG_PROPERTIES.autorotate || true;
	this.cancel = __SLAG_PROPERTIES.cancel || {};
	this.error = __SLAG_PROPERTIES.error || {};
	this.inPopOver = __SLAG_PROPERTIES.inPopOver || true;
	this.mediaTypes = __SLAG_PROPERTIES.mediaTypes || '';
	this.overlay = __SLAG_PROPERTIES.overlay || {};
	this.popoverView = __SLAG_PROPERTIES.popoverView || {};
	this.saveToPhotoGallery = __SLAG_PROPERTIES.saveToPhotoGallery || true;
	this.showControls = __SLAG_PROPERTIES.showControls || true;
	this.success = __SLAG_PROPERTIES.success || {};
	this.transform = __SLAG_PROPERTIES.transform || {};
	this.videoMaximumDuration = __SLAG_PROPERTIES.videoMaximumDuration || 0;
	this.videoQuality = __SLAG_PROPERTIES.videoQuality || 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new CameraOptionsType(properties);
};