var crypto = require('crypto');
function EmailDialog(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'elevation',
			'previewContext',
			'rotation',
			'rotationX',
			'rotationY',
			'scaleX',
			'scaleY',
			'translationX',
			'translationY',
			'translationZ',
			'transitionName',
			'CANCELLED',
			'FAILED',
			'SAVED',
			'SENT',
			'barColor',
			'bccRecipients',
			'ccRecipients',
			'html',
			'messageBody',
			'subject',
			'toRecipients',
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
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.EmailDialog.apiName is read only property');
	}
	this.apiName = 'Ti.UI.EmailDialog';
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.elevation = undefined;
	} else {
		this.elevation = __SLAG_PROPERTIES.elevation || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.previewContext = undefined;
	} else {
		this.previewContext = __SLAG_PROPERTIES.previewContext || {};
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.rotation = undefined;
	} else {
		this.rotation = __SLAG_PROPERTIES.rotation || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.rotationX = undefined;
	} else {
		this.rotationX = __SLAG_PROPERTIES.rotationX || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.rotationY = undefined;
	} else {
		this.rotationY = __SLAG_PROPERTIES.rotationY || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.scaleX = undefined;
	} else {
		this.scaleX = __SLAG_PROPERTIES.scaleX || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.scaleY = undefined;
	} else {
		this.scaleY = __SLAG_PROPERTIES.scaleY || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.translationX = undefined;
	} else {
		this.translationX = __SLAG_PROPERTIES.translationX || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.translationY = undefined;
	} else {
		this.translationY = __SLAG_PROPERTIES.translationY || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.translationZ = undefined;
	} else {
		this.translationZ = __SLAG_PROPERTIES.translationZ || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.transitionName = undefined;
	} else {
		this.transitionName = __SLAG_PROPERTIES.transitionName || '';
	}
	if (__SLAG_PROPERTIES.CANCELLED) {
		throw new Error('Ti.UI.EmailDialog.CANCELLED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CANCELLED = undefined;
	} else {
		this.CANCELLED = 0;
	}
	if (__SLAG_PROPERTIES.FAILED) {
		throw new Error('Ti.UI.EmailDialog.FAILED is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FAILED = undefined;
	} else {
		this.FAILED = 0;
	}
	if (__SLAG_PROPERTIES.SAVED) {
		throw new Error('Ti.UI.EmailDialog.SAVED is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SAVED = undefined;
	} else {
		this.SAVED = 0;
	}
	if (__SLAG_PROPERTIES.SENT) {
		throw new Error('Ti.UI.EmailDialog.SENT is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SENT = undefined;
	} else {
		this.SENT = 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.barColor = undefined;
	} else {
		this.barColor = __SLAG_PROPERTIES.barColor || '';
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bccRecipients = undefined;
	} else {
		this.bccRecipients = __SLAG_PROPERTIES.bccRecipients || '';
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ccRecipients = undefined;
	} else {
		this.ccRecipients = __SLAG_PROPERTIES.ccRecipients || '';
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.html = undefined;
	} else {
		this.html = __SLAG_PROPERTIES.html || true;
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.messageBody = undefined;
	} else {
		this.messageBody = __SLAG_PROPERTIES.messageBody || '';
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.subject = undefined;
	} else {
		this.subject = __SLAG_PROPERTIES.subject || '';
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.toRecipients = undefined;
	} else {
		this.toRecipients = __SLAG_PROPERTIES.toRecipients || '';
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
EmailDialog.prototype.addEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
EmailDialog.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
EmailDialog.prototype.fireEvent = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
EmailDialog.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
EmailDialog.prototype.finishLayout = function () {
	throw new Error('Ti.UI.EmailDialog.finishLayout was deprecated, since 3.0.0');
};
EmailDialog.prototype.hide = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
EmailDialog.prototype.insertAt = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
EmailDialog.prototype.replaceAt = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
EmailDialog.prototype.show = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
EmailDialog.prototype.startLayout = function () {
	throw new Error('Ti.UI.EmailDialog.startLayout was deprecated, since 3.0.0');
};
EmailDialog.prototype.updateLayout = function () {
	throw new Error('Ti.UI.EmailDialog.updateLayout was deprecated, since 3.0.0');
};
EmailDialog.prototype.addAttachment = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
EmailDialog.prototype.isSupported = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
EmailDialog.prototype.open = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
EmailDialog.prototype.getBubbleParent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
EmailDialog.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
EmailDialog.prototype.getApiName = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
EmailDialog.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
EmailDialog.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
EmailDialog.prototype.getElevation = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.elevation;
};
EmailDialog.prototype.setElevation = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.elevation = __SLAG__PROPERTY;
};
EmailDialog.prototype.getPreviewContext = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.previewContext;
};
EmailDialog.prototype.setPreviewContext = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.previewContext = __SLAG__PROPERTY;
};
EmailDialog.prototype.getRotation = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rotation;
};
EmailDialog.prototype.setRotation = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.rotation = __SLAG__PROPERTY;
};
EmailDialog.prototype.getRotationX = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rotationX;
};
EmailDialog.prototype.setRotationX = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.rotationX = __SLAG__PROPERTY;
};
EmailDialog.prototype.getRotationY = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rotationY;
};
EmailDialog.prototype.setRotationY = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.rotationY = __SLAG__PROPERTY;
};
EmailDialog.prototype.getScaleX = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.scaleX;
};
EmailDialog.prototype.setScaleX = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.scaleX = __SLAG__PROPERTY;
};
EmailDialog.prototype.getScaleY = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.scaleY;
};
EmailDialog.prototype.setScaleY = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.scaleY = __SLAG__PROPERTY;
};
EmailDialog.prototype.getTranslationX = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.translationX;
};
EmailDialog.prototype.setTranslationX = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.translationX = __SLAG__PROPERTY;
};
EmailDialog.prototype.getTranslationY = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.translationY;
};
EmailDialog.prototype.setTranslationY = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.translationY = __SLAG__PROPERTY;
};
EmailDialog.prototype.getTranslationZ = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.translationZ;
};
EmailDialog.prototype.setTranslationZ = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.translationZ = __SLAG__PROPERTY;
};
EmailDialog.prototype.getTransitionName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.transitionName;
};
EmailDialog.prototype.setTransitionName = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.transitionName = __SLAG__PROPERTY;
};
EmailDialog.prototype.getBarColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.barColor;
};
EmailDialog.prototype.setBarColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.barColor = __SLAG__PROPERTY;
};
EmailDialog.prototype.getBccRecipients = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bccRecipients;
};
EmailDialog.prototype.setBccRecipients = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bccRecipients = __SLAG__PROPERTY;
};
EmailDialog.prototype.getCcRecipients = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.ccRecipients;
};
EmailDialog.prototype.setCcRecipients = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.ccRecipients = __SLAG__PROPERTY;
};
EmailDialog.prototype.getHtml = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.html;
};
EmailDialog.prototype.setHtml = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.html = __SLAG__PROPERTY;
};
EmailDialog.prototype.getMessageBody = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.messageBody;
};
EmailDialog.prototype.setMessageBody = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.messageBody = __SLAG__PROPERTY;
};
EmailDialog.prototype.getSubject = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.subject;
};
EmailDialog.prototype.setSubject = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.subject = __SLAG__PROPERTY;
};
EmailDialog.prototype.getToRecipients = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.toRecipients;
};
EmailDialog.prototype.setToRecipients = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.toRecipients = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new EmailDialog(properties);
};