var crypto = require('crypto');
function CameraOptionsType(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'success',
			'error',
			'cancel',
			'autohide',
			'animated',
			'saveToPhotoGallery',
			'allowEditing',
			'mediaTypes',
			'videoMaximumDuration',
			'videoQuality',
			'showControls',
			'overlay',
			'transform',
			'inPopOver',
			'popoverView',
			'arrowDirection',
			'autorotate',
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
	this.saveToPhotoGallery = __SLAG_PROPERTIES.saveToPhotoGallery || true;
	this.allowEditing = __SLAG_PROPERTIES.allowEditing || true;
	this.mediaTypes = __SLAG_PROPERTIES.mediaTypes || '';
	this.videoMaximumDuration = __SLAG_PROPERTIES.videoMaximumDuration || 0;
	this.videoQuality = __SLAG_PROPERTIES.videoQuality || 0;
	this.showControls = __SLAG_PROPERTIES.showControls || true;
	this.overlay = __SLAG_PROPERTIES.overlay || {};
	this.transform = __SLAG_PROPERTIES.transform || {};
	this.inPopOver = __SLAG_PROPERTIES.inPopOver || true;
	this.popoverView = __SLAG_PROPERTIES.popoverView || {};
	this.arrowDirection = __SLAG_PROPERTIES.arrowDirection || 0;
	this.autorotate = __SLAG_PROPERTIES.autorotate || true;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new CameraOptionsType(properties);
};