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
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.allowEditing = undefined;
	} else {
		this.allowEditing = __SLAG_PROPERTIES.allowEditing || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.animated = undefined;
	} else {
		this.animated = __SLAG_PROPERTIES.animated || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.arrowDirection = undefined;
	} else {
		this.arrowDirection = __SLAG_PROPERTIES.arrowDirection || 0;
	}
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.autohide = undefined;
	} else {
		this.autohide = __SLAG_PROPERTIES.autohide || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.autorotate = undefined;
	} else {
		this.autorotate = __SLAG_PROPERTIES.autorotate || true;
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.cancel = undefined;
	} else {
		this.cancel = __SLAG_PROPERTIES.cancel || {};
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
		this.error = __SLAG_PROPERTIES.error || {};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.inPopOver = undefined;
	} else {
		this.inPopOver = __SLAG_PROPERTIES.inPopOver || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.mediaTypes = undefined;
	} else {
		this.mediaTypes = __SLAG_PROPERTIES.mediaTypes || '';
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.overlay = undefined;
	} else {
		this.overlay = __SLAG_PROPERTIES.overlay || {};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.popoverView = undefined;
	} else {
		this.popoverView = __SLAG_PROPERTIES.popoverView || {};
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.saveToPhotoGallery = undefined;
	} else {
		this.saveToPhotoGallery = __SLAG_PROPERTIES.saveToPhotoGallery || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.showControls = undefined;
	} else {
		this.showControls = __SLAG_PROPERTIES.showControls || true;
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
		this.success = __SLAG_PROPERTIES.success || {};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.transform = undefined;
	} else {
		this.transform = __SLAG_PROPERTIES.transform || {};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.videoMaximumDuration = undefined;
	} else {
		this.videoMaximumDuration = __SLAG_PROPERTIES.videoMaximumDuration || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.videoQuality = undefined;
	} else {
		this.videoQuality = __SLAG_PROPERTIES.videoQuality || 0;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new CameraOptionsType(properties);
};