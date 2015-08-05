var crypto = require('crypto');
function ProgressIndicator(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'cancelable',
			'canceledOnTouchOutside',
			'message',
			'messageid',
			'min',
			'max',
			'location',
			'type',
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
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.Android.ProgressIndicator.apiName is read only property');
	}
	this.apiName = 'Ti.UI.Android.ProgressIndicator';
	this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	this.cancelable = __SLAG_PROPERTIES.cancelable || true;
	this.canceledOnTouchOutside = __SLAG_PROPERTIES.canceledOnTouchOutside || true;
	this.message = __SLAG_PROPERTIES.message || '';
	this.messageid = __SLAG_PROPERTIES.messageid || '';
	this.min = __SLAG_PROPERTIES.min || 0;
	this.max = __SLAG_PROPERTIES.max || 0;
	this.location = __SLAG_PROPERTIES.location || 0;
	this.type = __SLAG_PROPERTIES.type || 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
ProgressIndicator.prototype.addEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
ProgressIndicator.prototype.removeEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
ProgressIndicator.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
ProgressIndicator.prototype.fireEvent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
ProgressIndicator.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Android.ProgressIndicator.finishLayout was deprecated, since 3.0.0');
};
ProgressIndicator.prototype.startLayout = function () {
	throw new Error('Ti.UI.Android.ProgressIndicator.startLayout was deprecated, since 3.0.0');
};
ProgressIndicator.prototype.updateLayout = function () {
	throw new Error('Ti.UI.Android.ProgressIndicator.updateLayout was deprecated, since 3.0.0');
};
ProgressIndicator.prototype.hide = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
ProgressIndicator.prototype.show = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
ProgressIndicator.prototype.getBubbleParent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
ProgressIndicator.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
ProgressIndicator.prototype.getApiName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
ProgressIndicator.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
ProgressIndicator.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
ProgressIndicator.prototype.getCancelable = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.cancelable;
};
ProgressIndicator.prototype.setCancelable = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.cancelable = __SLAG__PROPERTY;
};
ProgressIndicator.prototype.getCanceledOnTouchOutside = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.canceledOnTouchOutside;
};
ProgressIndicator.prototype.setCanceledOnTouchOutside = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.canceledOnTouchOutside = __SLAG__PROPERTY;
};
ProgressIndicator.prototype.getMessage = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.message;
};
ProgressIndicator.prototype.setMessage = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.message = __SLAG__PROPERTY;
};
ProgressIndicator.prototype.getMessageid = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.messageid;
};
ProgressIndicator.prototype.setMessageid = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.messageid = __SLAG__PROPERTY;
};
ProgressIndicator.prototype.getMin = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.min;
};
ProgressIndicator.prototype.setMin = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.min = __SLAG__PROPERTY;
};
ProgressIndicator.prototype.getMax = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.max;
};
ProgressIndicator.prototype.setMax = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.max = __SLAG__PROPERTY;
};
ProgressIndicator.prototype.getLocation = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.location;
};
ProgressIndicator.prototype.setLocation = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.location = __SLAG__PROPERTY;
};
ProgressIndicator.prototype.getType = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.type;
};
ProgressIndicator.prototype.setType = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.type = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new ProgressIndicator(properties);
};