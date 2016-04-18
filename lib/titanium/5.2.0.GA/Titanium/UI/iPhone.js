var crypto = require('crypto');
function iPhone(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'MODAL_PRESENTATION_CURRENT_CONTEXT',
			'MODAL_PRESENTATION_FORMSHEET',
			'MODAL_PRESENTATION_FULLSCREEN',
			'MODAL_PRESENTATION_PAGESHEET',
			'MODAL_TRANSITION_STYLE_COVER_VERTICAL',
			'MODAL_TRANSITION_STYLE_CROSS_DISSOLVE',
			'MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL',
			'MODAL_TRANSITION_STYLE_PARTIAL_CURL',
			'appBadge',
			'appSupportsShakeToEdit',
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
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.iPhone.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPhone';
	if (__SLAG_PROPERTIES.MODAL_PRESENTATION_CURRENT_CONTEXT) {
		throw new Error('Ti.UI.iPhone.MODAL_PRESENTATION_CURRENT_CONTEXT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MODAL_PRESENTATION_CURRENT_CONTEXT = undefined;
	} else {
		this.MODAL_PRESENTATION_CURRENT_CONTEXT = 0;
	}
	if (__SLAG_PROPERTIES.MODAL_PRESENTATION_FORMSHEET) {
		throw new Error('Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MODAL_PRESENTATION_FORMSHEET = undefined;
	} else {
		this.MODAL_PRESENTATION_FORMSHEET = 0;
	}
	if (__SLAG_PROPERTIES.MODAL_PRESENTATION_FULLSCREEN) {
		throw new Error('Ti.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MODAL_PRESENTATION_FULLSCREEN = undefined;
	} else {
		this.MODAL_PRESENTATION_FULLSCREEN = 0;
	}
	if (__SLAG_PROPERTIES.MODAL_PRESENTATION_PAGESHEET) {
		throw new Error('Ti.UI.iPhone.MODAL_PRESENTATION_PAGESHEET is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MODAL_PRESENTATION_PAGESHEET = undefined;
	} else {
		this.MODAL_PRESENTATION_PAGESHEET = 0;
	}
	if (__SLAG_PROPERTIES.MODAL_TRANSITION_STYLE_COVER_VERTICAL) {
		throw new Error('Ti.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MODAL_TRANSITION_STYLE_COVER_VERTICAL = undefined;
	} else {
		this.MODAL_TRANSITION_STYLE_COVER_VERTICAL = 0;
	}
	if (__SLAG_PROPERTIES.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE) {
		throw new Error('Ti.UI.iPhone.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE = undefined;
	} else {
		this.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE = 0;
	}
	if (__SLAG_PROPERTIES.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL) {
		throw new Error('Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL = undefined;
	} else {
		this.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL = 0;
	}
	if (__SLAG_PROPERTIES.MODAL_TRANSITION_STYLE_PARTIAL_CURL) {
		throw new Error('Ti.UI.iPhone.MODAL_TRANSITION_STYLE_PARTIAL_CURL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MODAL_TRANSITION_STYLE_PARTIAL_CURL = undefined;
	} else {
		this.MODAL_TRANSITION_STYLE_PARTIAL_CURL = 0;
	}
	if (__SLAG_PROPERTIES.appBadge) {
		throw new Error('Ti.UI.iPhone.appBadge was deprecated, since 6.0.0');
	}
	if (__SLAG_PROPERTIES.appSupportsShakeToEdit) {
		throw new Error('Ti.UI.iPhone.appSupportsShakeToEdit was deprecated, since 6.0.0');
	}
	if (__SLAG_PROPERTIES.statusBarHidden) {
		throw new Error('Ti.UI.iPhone.statusBarHidden was deprecated, since 3.1.3');
	}
	if (__SLAG_PROPERTIES.statusBarStyle) {
		throw new Error('Ti.UI.iPhone.statusBarStyle was deprecated, since 3.1.3');
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
iPhone.prototype.addEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
iPhone.prototype.removeEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
iPhone.prototype.fireEvent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
iPhone.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
iPhone.prototype.hideStatusBar = function () {
	throw new Error('Ti.UI.iPhone.hideStatusBar was deprecated, since 3.1.3');
};
iPhone.prototype.showStatusBar = function () {
	throw new Error('Ti.UI.iPhone.showStatusBar was deprecated, since 3.1.3');
};
iPhone.prototype.createNavigationGroup = function () {
	throw new Error('Ti.UI.iPhone.createNavigationGroup was deprecated, since 3.1.3');
};
iPhone.prototype.getBubbleParent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
iPhone.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
iPhone.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
iPhone.prototype.getAppBadge = function () {
	throw new Error('Ti.UI.iPhone.getAppBadge was deprecated, since 6.0.0');
};
iPhone.prototype.setAppBadge = function () {
	throw new Error('Ti.UI.iPhone.setAppBadge was deprecated, since 6.0.0');
};
iPhone.prototype.getAppSupportsShakeToEdit = function () {
	throw new Error('Ti.UI.iPhone.getAppSupportsShakeToEdit was deprecated, since 6.0.0');
};
iPhone.prototype.setAppSupportsShakeToEdit = function () {
	throw new Error('Ti.UI.iPhone.setAppSupportsShakeToEdit was deprecated, since 6.0.0');
};
iPhone.prototype.getStatusBarHidden = function () {
	throw new Error('Ti.UI.iPhone.getStatusBarHidden was deprecated, since 3.1.3');
};
iPhone.prototype.getStatusBarStyle = function () {
	throw new Error('Ti.UI.iPhone.getStatusBarStyle was deprecated, since 3.1.3');
};
module.exports = function (properties) {
	return new iPhone(properties);
};