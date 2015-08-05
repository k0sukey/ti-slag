var crypto = require('crypto');
function openWindowParams(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
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
	this.animated = __SLAG_PROPERTIES.animated || true;
	this.bottom = __SLAG_PROPERTIES.bottom || 0;
	this.fullscreen = __SLAG_PROPERTIES.fullscreen || true;
	this.height = __SLAG_PROPERTIES.height || 0;
	this.left = __SLAG_PROPERTIES.left || 0;
	this.modal = __SLAG_PROPERTIES.modal || true;
	this.modalStyle = __SLAG_PROPERTIES.modalStyle || 0;
	this.modalTransitionStyle = __SLAG_PROPERTIES.modalTransitionStyle || 0;
	this.navBarHidden = __SLAG_PROPERTIES.navBarHidden || true;
	this.right = __SLAG_PROPERTIES.right || 0;
	this.top = __SLAG_PROPERTIES.top || 0;
	this.transition = __SLAG_PROPERTIES.transition || 0;
	this.width = __SLAG_PROPERTIES.width || 0;
	this.activityEnterAnimation = __SLAG_PROPERTIES.activityEnterAnimation || 0;
	this.activityExitAnimation = __SLAG_PROPERTIES.activityExitAnimation || 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new openWindowParams(properties);
};