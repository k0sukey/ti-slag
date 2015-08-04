var crypto = require('crypto');
function iPhone(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
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
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT) {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT) {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iPhone.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPhone';
	if (__SLAG__properties.MODAL_PRESENTATION_CURRENT_CONTEXT) {
		throw new Error('Ti.UI.iPhone.MODAL_PRESENTATION_CURRENT_CONTEXT is read only property');
	}
	this.MODAL_PRESENTATION_CURRENT_CONTEXT = 0;
	if (__SLAG__properties.MODAL_PRESENTATION_FORMSHEET) {
		throw new Error('Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET is read only property');
	}
	this.MODAL_PRESENTATION_FORMSHEET = 0;
	if (__SLAG__properties.MODAL_PRESENTATION_FULLSCREEN) {
		throw new Error('Ti.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN is read only property');
	}
	this.MODAL_PRESENTATION_FULLSCREEN = 0;
	if (__SLAG__properties.MODAL_PRESENTATION_PAGESHEET) {
		throw new Error('Ti.UI.iPhone.MODAL_PRESENTATION_PAGESHEET is read only property');
	}
	this.MODAL_PRESENTATION_PAGESHEET = 0;
	if (__SLAG__properties.MODAL_TRANSITION_STYLE_COVER_VERTICAL) {
		throw new Error('Ti.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL is read only property');
	}
	this.MODAL_TRANSITION_STYLE_COVER_VERTICAL = 0;
	if (__SLAG__properties.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE) {
		throw new Error('Ti.UI.iPhone.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE is read only property');
	}
	this.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE = 0;
	if (__SLAG__properties.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL) {
		throw new Error('Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL is read only property');
	}
	this.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL = 0;
	if (__SLAG__properties.MODAL_TRANSITION_STYLE_PARTIAL_CURL) {
		throw new Error('Ti.UI.iPhone.MODAL_TRANSITION_STYLE_PARTIAL_CURL is read only property');
	}
	this.MODAL_TRANSITION_STYLE_PARTIAL_CURL = 0;
	this.appBadge = __SLAG__properties.appBadge || 0;
	this.appSupportsShakeToEdit = __SLAG__properties.appSupportsShakeToEdit || true;
	if (__SLAG__properties.statusBarHidden) {
		throw new Error('Ti.UI.iPhone.statusBarHidden is read only property');
	}
	this.statusBarHidden = true;
	if (__SLAG__properties.statusBarStyle) {
		throw new Error('Ti.UI.iPhone.statusBarStyle is read only property');
	}
	this.statusBarStyle = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
iPhone.prototype.addEventListener = function () {
};
iPhone.prototype.removeEventListener = function () {
};
iPhone.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
iPhone.prototype.fireEvent = function () {
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
	return this.bubbleParent;
};
iPhone.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
iPhone.prototype.getApiName = function () {
	return this.apiName;
};
iPhone.prototype.getAppBadge = function () {
	return this.appBadge;
};
iPhone.prototype.setAppBadge = function (property) {
	this.appBadge = property;
};
iPhone.prototype.getAppSupportsShakeToEdit = function () {
	return this.appSupportsShakeToEdit;
};
iPhone.prototype.setAppSupportsShakeToEdit = function (property) {
	this.appSupportsShakeToEdit = property;
};
iPhone.prototype.getStatusBarHidden = function () {
	return this.statusBarHidden;
};
iPhone.prototype.getStatusBarStyle = function () {
	return this.statusBarStyle;
};
module.exports = function (properties) {
	return new iPhone(properties);
};