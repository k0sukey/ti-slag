var crypto = require('crypto');
function openWindowParams(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'activityEnterAnimation',
			'activityExitAnimation',
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
	this.activityEnterAnimation = __SLAG__properties.activityEnterAnimation || 0;
	this.activityExitAnimation = __SLAG__properties.activityExitAnimation || 0;
	this.animated = __SLAG__properties.animated || true;
	this.bottom = __SLAG__properties.bottom || 0;
	this.fullscreen = __SLAG__properties.fullscreen || true;
	this.height = __SLAG__properties.height || 0;
	this.left = __SLAG__properties.left || 0;
	this.modal = __SLAG__properties.modal || true;
	this.modalStyle = __SLAG__properties.modalStyle || 0;
	this.modalTransitionStyle = __SLAG__properties.modalTransitionStyle || 0;
	this.navBarHidden = __SLAG__properties.navBarHidden || true;
	this.right = __SLAG__properties.right || 0;
	this.top = __SLAG__properties.top || 0;
	this.transition = __SLAG__properties.transition || 0;
	this.width = __SLAG__properties.width || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
module.exports = function (properties) {
	return new openWindowParams(properties);
};