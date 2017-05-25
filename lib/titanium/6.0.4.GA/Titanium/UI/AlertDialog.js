var crypto = require('crypto');
function AlertDialog(__SLAG_PROPERTIES) {
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
			'androidView',
			'buttonNames',
			'cancel',
			'canceledOnTouchOutside',
			'destructive',
			'preferred',
			'keyboardType',
			'keyboardAppearance',
			'loginPlaceholder',
			'loginHintText',
			'loginReturnKeyType',
			'loginKeyboardType',
			'message',
			'messageid',
			'ok',
			'okid',
			'passwordPlaceholder',
			'passwordHintText',
			'passwordReturnKeyType',
			'passwordKeyboardType',
			'placeholder',
			'hintText',
			'persistent',
			'returnKeyType',
			'style',
			'title',
			'titleid',
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
		throw new Error('Ti.UI.AlertDialog.apiName is read only property');
	}
	this.apiName = 'Ti.UI.AlertDialog';
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
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.androidView = undefined;
	} else {
		this.androidView = __SLAG_PROPERTIES.androidView || {};
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.buttonNames = undefined;
	} else {
		this.buttonNames = __SLAG_PROPERTIES.buttonNames || '';
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.cancel = undefined;
	} else {
		this.cancel = __SLAG_PROPERTIES.cancel || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.canceledOnTouchOutside = undefined;
	} else {
		this.canceledOnTouchOutside = __SLAG_PROPERTIES.canceledOnTouchOutside || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.destructive = undefined;
	} else {
		this.destructive = __SLAG_PROPERTIES.destructive || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.preferred = undefined;
	} else {
		this.preferred = __SLAG_PROPERTIES.preferred || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.keyboardType = undefined;
	} else {
		this.keyboardType = __SLAG_PROPERTIES.keyboardType || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.keyboardAppearance = undefined;
	} else {
		this.keyboardAppearance = __SLAG_PROPERTIES.keyboardAppearance || 0;
	}
	if (__SLAG_PROPERTIES.loginPlaceholder) {
		throw new Error('Ti.UI.AlertDialog.loginPlaceholder was deprecated, since 5.4.0');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.loginHintText = undefined;
	} else {
		this.loginHintText = __SLAG_PROPERTIES.loginHintText || '';
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.loginReturnKeyType = undefined;
	} else {
		this.loginReturnKeyType = __SLAG_PROPERTIES.loginReturnKeyType || 0;
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.loginKeyboardType = undefined;
	} else {
		this.loginKeyboardType = __SLAG_PROPERTIES.loginKeyboardType || 0;
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.message = undefined;
	} else {
		this.message = __SLAG_PROPERTIES.message || '';
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.messageid = undefined;
	} else {
		this.messageid = __SLAG_PROPERTIES.messageid || '';
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ok = undefined;
	} else {
		this.ok = __SLAG_PROPERTIES.ok || '';
	}
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.okid = undefined;
	} else {
		this.okid = __SLAG_PROPERTIES.okid || '';
	}
	if (__SLAG_PROPERTIES.passwordPlaceholder) {
		throw new Error('Ti.UI.AlertDialog.passwordPlaceholder was deprecated, since 5.4.0');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.passwordHintText = undefined;
	} else {
		this.passwordHintText = __SLAG_PROPERTIES.passwordHintText || '';
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.passwordReturnKeyType = undefined;
	} else {
		this.passwordReturnKeyType = __SLAG_PROPERTIES.passwordReturnKeyType || 0;
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.passwordKeyboardType = undefined;
	} else {
		this.passwordKeyboardType = __SLAG_PROPERTIES.passwordKeyboardType || 0;
	}
	if (__SLAG_PROPERTIES.placeholder) {
		throw new Error('Ti.UI.AlertDialog.placeholder was deprecated, since 5.4.0');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.hintText = undefined;
	} else {
		this.hintText = __SLAG_PROPERTIES.hintText || '';
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.persistent = undefined;
	} else {
		this.persistent = __SLAG_PROPERTIES.persistent || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.returnKeyType = undefined;
	} else {
		this.returnKeyType = __SLAG_PROPERTIES.returnKeyType || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.style = undefined;
	} else {
		this.style = __SLAG_PROPERTIES.style || 0;
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.title = undefined;
	} else {
		this.title = __SLAG_PROPERTIES.title || '';
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.titleid = undefined;
	} else {
		this.titleid = __SLAG_PROPERTIES.titleid || '';
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
AlertDialog.prototype.addEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AlertDialog.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AlertDialog.prototype.fireEvent = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AlertDialog.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
AlertDialog.prototype.finishLayout = function () {
	throw new Error('Ti.UI.AlertDialog.finishLayout was deprecated, since 3.0.0');
};
AlertDialog.prototype.hide = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AlertDialog.prototype.insertAt = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AlertDialog.prototype.replaceAt = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AlertDialog.prototype.show = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AlertDialog.prototype.startLayout = function () {
	throw new Error('Ti.UI.AlertDialog.startLayout was deprecated, since 3.0.0');
};
AlertDialog.prototype.updateLayout = function () {
	throw new Error('Ti.UI.AlertDialog.updateLayout was deprecated, since 3.0.0');
};
AlertDialog.prototype.getBubbleParent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
AlertDialog.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
AlertDialog.prototype.getApiName = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
AlertDialog.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
AlertDialog.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
AlertDialog.prototype.getElevation = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.elevation;
};
AlertDialog.prototype.setElevation = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.elevation = __SLAG__PROPERTY;
};
AlertDialog.prototype.getPreviewContext = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.previewContext;
};
AlertDialog.prototype.setPreviewContext = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.previewContext = __SLAG__PROPERTY;
};
AlertDialog.prototype.getRotation = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rotation;
};
AlertDialog.prototype.setRotation = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.rotation = __SLAG__PROPERTY;
};
AlertDialog.prototype.getRotationX = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rotationX;
};
AlertDialog.prototype.setRotationX = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.rotationX = __SLAG__PROPERTY;
};
AlertDialog.prototype.getRotationY = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rotationY;
};
AlertDialog.prototype.setRotationY = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.rotationY = __SLAG__PROPERTY;
};
AlertDialog.prototype.getScaleX = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.scaleX;
};
AlertDialog.prototype.setScaleX = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.scaleX = __SLAG__PROPERTY;
};
AlertDialog.prototype.getScaleY = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.scaleY;
};
AlertDialog.prototype.setScaleY = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.scaleY = __SLAG__PROPERTY;
};
AlertDialog.prototype.getTranslationX = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.translationX;
};
AlertDialog.prototype.setTranslationX = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.translationX = __SLAG__PROPERTY;
};
AlertDialog.prototype.getTranslationY = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.translationY;
};
AlertDialog.prototype.setTranslationY = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.translationY = __SLAG__PROPERTY;
};
AlertDialog.prototype.getTranslationZ = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.translationZ;
};
AlertDialog.prototype.setTranslationZ = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.translationZ = __SLAG__PROPERTY;
};
AlertDialog.prototype.getTransitionName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.transitionName;
};
AlertDialog.prototype.setTransitionName = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.transitionName = __SLAG__PROPERTY;
};
AlertDialog.prototype.getButtonNames = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.buttonNames;
};
AlertDialog.prototype.setButtonNames = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.buttonNames = __SLAG__PROPERTY;
};
AlertDialog.prototype.getCancel = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.cancel;
};
AlertDialog.prototype.setCancel = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.cancel = __SLAG__PROPERTY;
};
AlertDialog.prototype.getCanceledOnTouchOutside = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.canceledOnTouchOutside;
};
AlertDialog.prototype.setCanceledOnTouchOutside = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.canceledOnTouchOutside = __SLAG__PROPERTY;
};
AlertDialog.prototype.getDestructive = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.destructive;
};
AlertDialog.prototype.setDestructive = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.destructive = __SLAG__PROPERTY;
};
AlertDialog.prototype.getPreferred = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.preferred;
};
AlertDialog.prototype.setPreferred = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.preferred = __SLAG__PROPERTY;
};
AlertDialog.prototype.getKeyboardType = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.keyboardType;
};
AlertDialog.prototype.setKeyboardType = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.keyboardType = __SLAG__PROPERTY;
};
AlertDialog.prototype.getKeyboardAppearance = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.keyboardAppearance;
};
AlertDialog.prototype.setKeyboardAppearance = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.keyboardAppearance = __SLAG__PROPERTY;
};
AlertDialog.prototype.getLoginPlaceholder = function () {
	throw new Error('Ti.UI.AlertDialog.getLoginPlaceholder was deprecated, since 5.4.0');
};
AlertDialog.prototype.setLoginPlaceholder = function () {
	throw new Error('Ti.UI.AlertDialog.setLoginPlaceholder was deprecated, since 5.4.0');
};
AlertDialog.prototype.getLoginHintText = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.loginHintText;
};
AlertDialog.prototype.setLoginHintText = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.loginHintText = __SLAG__PROPERTY;
};
AlertDialog.prototype.getLoginReturnKeyType = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.loginReturnKeyType;
};
AlertDialog.prototype.setLoginReturnKeyType = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.loginReturnKeyType = __SLAG__PROPERTY;
};
AlertDialog.prototype.getLoginKeyboardType = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.loginKeyboardType;
};
AlertDialog.prototype.setLoginKeyboardType = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.loginKeyboardType = __SLAG__PROPERTY;
};
AlertDialog.prototype.getMessage = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.message;
};
AlertDialog.prototype.setMessage = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.message = __SLAG__PROPERTY;
};
AlertDialog.prototype.getMessageid = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.messageid;
};
AlertDialog.prototype.setMessageid = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.messageid = __SLAG__PROPERTY;
};
AlertDialog.prototype.getOk = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.ok;
};
AlertDialog.prototype.setOk = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.ok = __SLAG__PROPERTY;
};
AlertDialog.prototype.getOkid = function () {
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.okid;
};
AlertDialog.prototype.setOkid = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.okid = __SLAG__PROPERTY;
};
AlertDialog.prototype.getPasswordPlaceholder = function () {
	throw new Error('Ti.UI.AlertDialog.getPasswordPlaceholder was deprecated, since 5.4.0');
};
AlertDialog.prototype.setPasswordPlaceholder = function () {
	throw new Error('Ti.UI.AlertDialog.setPasswordPlaceholder was deprecated, since 5.4.0');
};
AlertDialog.prototype.getPasswordHintText = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.passwordHintText;
};
AlertDialog.prototype.setPasswordHintText = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.passwordHintText = __SLAG__PROPERTY;
};
AlertDialog.prototype.getPasswordReturnKeyType = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.passwordReturnKeyType;
};
AlertDialog.prototype.setPasswordReturnKeyType = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.passwordReturnKeyType = __SLAG__PROPERTY;
};
AlertDialog.prototype.getPasswordKeyboardType = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.passwordKeyboardType;
};
AlertDialog.prototype.setPasswordKeyboardType = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.passwordKeyboardType = __SLAG__PROPERTY;
};
AlertDialog.prototype.getPlaceholder = function () {
	throw new Error('Ti.UI.AlertDialog.getPlaceholder was deprecated, since 5.4.0');
};
AlertDialog.prototype.setPlaceholder = function () {
	throw new Error('Ti.UI.AlertDialog.setPlaceholder was deprecated, since 5.4.0');
};
AlertDialog.prototype.getHintText = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.hintText;
};
AlertDialog.prototype.setHintText = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.hintText = __SLAG__PROPERTY;
};
AlertDialog.prototype.getPersistent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.persistent;
};
AlertDialog.prototype.setPersistent = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.persistent = __SLAG__PROPERTY;
};
AlertDialog.prototype.getReturnKeyType = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.returnKeyType;
};
AlertDialog.prototype.setReturnKeyType = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.returnKeyType = __SLAG__PROPERTY;
};
AlertDialog.prototype.getStyle = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.style;
};
AlertDialog.prototype.setStyle = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.style = __SLAG__PROPERTY;
};
AlertDialog.prototype.getTitle = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.title;
};
AlertDialog.prototype.setTitle = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.title = __SLAG__PROPERTY;
};
AlertDialog.prototype.getTitleid = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.titleid;
};
AlertDialog.prototype.setTitleid = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.titleid = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new AlertDialog(properties);
};