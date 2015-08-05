var crypto = require('crypto');
function iPhone(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'MODAL_PRESENTATION_CURRENT_CONTEXT',
			'MODAL_PRESENTATION_FORMSHEET',
			'MODAL_PRESENTATION_FULLSCREEN',
			'MODAL_PRESENTATION_PAGESHEET',
			'MODAL_TRANSITION_STYLE_COVER_VERTICAL',
			'MODAL_TRANSITION_STYLE_CROSS_DISSOLVE',
			'MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL',
			'MODAL_TRANSITION_STYLE_PARTIAL_CURL',
			'apiName',
			'appBadge',
			'appSupportsShakeToEdit',
			'bubbleParent',
			'statusBarHidden',
			'statusBarStyle',
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
	if (__SLAG_PROPERTIES.MODAL_PRESENTATION_CURRENT_CONTEXT) {
		throw new Error('Ti.UI.iPhone.MODAL_PRESENTATION_CURRENT_CONTEXT is read only property');
	}
	this.MODAL_PRESENTATION_CURRENT_CONTEXT = 0;
	if (__SLAG_PROPERTIES.MODAL_PRESENTATION_FORMSHEET) {
		throw new Error('Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET is read only property');
	}
	this.MODAL_PRESENTATION_FORMSHEET = 0;
	if (__SLAG_PROPERTIES.MODAL_PRESENTATION_FULLSCREEN) {
		throw new Error('Ti.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN is read only property');
	}
	this.MODAL_PRESENTATION_FULLSCREEN = 0;
	if (__SLAG_PROPERTIES.MODAL_PRESENTATION_PAGESHEET) {
		throw new Error('Ti.UI.iPhone.MODAL_PRESENTATION_PAGESHEET is read only property');
	}
	this.MODAL_PRESENTATION_PAGESHEET = 0;
	if (__SLAG_PROPERTIES.MODAL_TRANSITION_STYLE_COVER_VERTICAL) {
		throw new Error('Ti.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL is read only property');
	}
	this.MODAL_TRANSITION_STYLE_COVER_VERTICAL = 0;
	if (__SLAG_PROPERTIES.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE) {
		throw new Error('Ti.UI.iPhone.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE is read only property');
	}
	this.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE = 0;
	if (__SLAG_PROPERTIES.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL) {
		throw new Error('Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL is read only property');
	}
	this.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL = 0;
	if (__SLAG_PROPERTIES.MODAL_TRANSITION_STYLE_PARTIAL_CURL) {
		throw new Error('Ti.UI.iPhone.MODAL_TRANSITION_STYLE_PARTIAL_CURL is read only property');
	}
	this.MODAL_TRANSITION_STYLE_PARTIAL_CURL = 0;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.iPhone.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPhone';
	this.appBadge = __SLAG_PROPERTIES.appBadge || 0;
	this.appSupportsShakeToEdit = __SLAG_PROPERTIES.appSupportsShakeToEdit || true;
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	if (__SLAG_PROPERTIES.statusBarHidden) {
		throw new Error('Ti.UI.iPhone.statusBarHidden is read only property');
	}
	this.statusBarHidden = true;
	if (__SLAG_PROPERTIES.statusBarStyle) {
		throw new Error('Ti.UI.iPhone.statusBarStyle is read only property');
	}
	this.statusBarStyle = 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
iPhone.prototype.addEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
iPhone.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
iPhone.prototype.createNavigationGroup = function () {
	throw new Error('Ti.UI.iPhone.createNavigationGroup was deprecated, since 3.1.3');
};
iPhone.prototype.fireEvent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
iPhone.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
iPhone.prototype.getAppBadge = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.appBadge;
};
iPhone.prototype.getAppSupportsShakeToEdit = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.appSupportsShakeToEdit;
};
iPhone.prototype.getBubbleParent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
iPhone.prototype.getStatusBarHidden = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.statusBarHidden;
};
iPhone.prototype.getStatusBarStyle = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.statusBarStyle;
};
iPhone.prototype.hideStatusBar = function () {
	throw new Error('Ti.UI.iPhone.hideStatusBar was deprecated, since 3.1.3');
};
iPhone.prototype.removeEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
iPhone.prototype.setAppBadge = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.appBadge = __SLAG__PROPERTY;
};
iPhone.prototype.setAppSupportsShakeToEdit = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.appSupportsShakeToEdit = __SLAG__PROPERTY;
};
iPhone.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
iPhone.prototype.showStatusBar = function () {
	throw new Error('Ti.UI.iPhone.showStatusBar was deprecated, since 3.1.3');
};
module.exports = function (properties) {
	return new iPhone(properties);
};