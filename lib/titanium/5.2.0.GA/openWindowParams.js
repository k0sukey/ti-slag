var crypto = require('crypto');
function openWindowParams(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'animated',
			'bottom',
			'fullscreen',
			'height',
			'left',
			'modal',
			'modalStyle',
			'modalTransitionStyle',
			'navBarHidden',
			'right',
			'top',
			'transition',
			'width',
			'activityEnterAnimation',
			'activityExitAnimation',
			'activityExitTransition',
			'activityEnterTransition',
			'activityReturnTransition',
			'activityReenterTransition',
			'activitySharedElementExitTransition',
			'activitySharedElementEnterTransition',
			'activitySharedElementReturnTransition',
			'activitySharedElementReenterTransition',
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
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.animated = undefined;
	} else {
		this.animated = __SLAG_PROPERTIES.animated || true;
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bottom = undefined;
	} else {
		this.bottom = __SLAG_PROPERTIES.bottom || 0;
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.fullscreen = undefined;
	} else {
		this.fullscreen = __SLAG_PROPERTIES.fullscreen || true;
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.height = undefined;
	} else {
		this.height = __SLAG_PROPERTIES.height || 0;
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.left = undefined;
	} else {
		this.left = __SLAG_PROPERTIES.left || 0;
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.modal = undefined;
	} else {
		this.modal = __SLAG_PROPERTIES.modal || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.modalStyle = undefined;
	} else {
		this.modalStyle = __SLAG_PROPERTIES.modalStyle || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.modalTransitionStyle = undefined;
	} else {
		this.modalTransitionStyle = __SLAG_PROPERTIES.modalTransitionStyle || 0;
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.navBarHidden = undefined;
	} else {
		this.navBarHidden = __SLAG_PROPERTIES.navBarHidden || true;
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.right = undefined;
	} else {
		this.right = __SLAG_PROPERTIES.right || 0;
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.top = undefined;
	} else {
		this.top = __SLAG_PROPERTIES.top || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.transition = undefined;
	} else {
		this.transition = __SLAG_PROPERTIES.transition || 0;
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.width = undefined;
	} else {
		this.width = __SLAG_PROPERTIES.width || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activityEnterAnimation = undefined;
	} else {
		this.activityEnterAnimation = __SLAG_PROPERTIES.activityEnterAnimation || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activityExitAnimation = undefined;
	} else {
		this.activityExitAnimation = __SLAG_PROPERTIES.activityExitAnimation || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activityExitTransition = undefined;
	} else {
		this.activityExitTransition = __SLAG_PROPERTIES.activityExitTransition || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activityEnterTransition = undefined;
	} else {
		this.activityEnterTransition = __SLAG_PROPERTIES.activityEnterTransition || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activityReturnTransition = undefined;
	} else {
		this.activityReturnTransition = __SLAG_PROPERTIES.activityReturnTransition || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activityReenterTransition = undefined;
	} else {
		this.activityReenterTransition = __SLAG_PROPERTIES.activityReenterTransition || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activitySharedElementExitTransition = undefined;
	} else {
		this.activitySharedElementExitTransition = __SLAG_PROPERTIES.activitySharedElementExitTransition || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activitySharedElementEnterTransition = undefined;
	} else {
		this.activitySharedElementEnterTransition = __SLAG_PROPERTIES.activitySharedElementEnterTransition || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activitySharedElementReturnTransition = undefined;
	} else {
		this.activitySharedElementReturnTransition = __SLAG_PROPERTIES.activitySharedElementReturnTransition || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activitySharedElementReenterTransition = undefined;
	} else {
		this.activitySharedElementReenterTransition = __SLAG_PROPERTIES.activitySharedElementReenterTransition || 0;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new openWindowParams(properties);
};