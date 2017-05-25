var crypto = require('crypto');
function Notification(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'audioStreamType',
			'category',
			'contentIntent',
			'contentText',
			'contentTitle',
			'contentView',
			'defaults',
			'deleteIntent',
			'flags',
			'icon',
			'largeIcon',
			'ledARGB',
			'ledOffMS',
			'ledOnMS',
			'number',
			'priority',
			'sound',
			'style',
			'tickerText',
			'visibility',
			'when',
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
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Android.Notification.apiName is read only property');
	}
	this.apiName = 'Ti.Android.Notification';
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.audioStreamType = undefined;
	} else {
		this.audioStreamType = __SLAG_PROPERTIES.audioStreamType || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.category = undefined;
	} else {
		this.category = __SLAG_PROPERTIES.category || '';
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.contentIntent = undefined;
	} else {
		this.contentIntent = __SLAG_PROPERTIES.contentIntent || {};
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.contentText = undefined;
	} else {
		this.contentText = __SLAG_PROPERTIES.contentText || '';
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.contentTitle = undefined;
	} else {
		this.contentTitle = __SLAG_PROPERTIES.contentTitle || '';
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.contentView = undefined;
	} else {
		this.contentView = __SLAG_PROPERTIES.contentView || {};
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.defaults = undefined;
	} else {
		this.defaults = __SLAG_PROPERTIES.defaults || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.deleteIntent = undefined;
	} else {
		this.deleteIntent = __SLAG_PROPERTIES.deleteIntent || {};
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.flags = undefined;
	} else {
		this.flags = __SLAG_PROPERTIES.flags || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.icon = undefined;
	} else {
		this.icon = __SLAG_PROPERTIES.icon || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.largeIcon = undefined;
	} else {
		this.largeIcon = __SLAG_PROPERTIES.largeIcon || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ledARGB = undefined;
	} else {
		this.ledARGB = __SLAG_PROPERTIES.ledARGB || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ledOffMS = undefined;
	} else {
		this.ledOffMS = __SLAG_PROPERTIES.ledOffMS || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ledOnMS = undefined;
	} else {
		this.ledOnMS = __SLAG_PROPERTIES.ledOnMS || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.number = undefined;
	} else {
		this.number = __SLAG_PROPERTIES.number || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.priority = undefined;
	} else {
		this.priority = __SLAG_PROPERTIES.priority || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.sound = undefined;
	} else {
		this.sound = __SLAG_PROPERTIES.sound || '';
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.style = undefined;
	} else {
		this.style = __SLAG_PROPERTIES.style || {};
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tickerText = undefined;
	} else {
		this.tickerText = __SLAG_PROPERTIES.tickerText || '';
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.visibility = undefined;
	} else {
		this.visibility = __SLAG_PROPERTIES.visibility || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.when = undefined;
	} else {
		this.when = __SLAG_PROPERTIES.when || new Date();
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Notification.prototype.addEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Notification.prototype.removeEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Notification.prototype.fireEvent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Notification.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Notification.prototype.setLatestEventInfo = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Notification.prototype.getBubbleParent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Notification.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Notification.prototype.getApiName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Notification.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Notification.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
Notification.prototype.getAudioStreamType = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.audioStreamType;
};
Notification.prototype.setAudioStreamType = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.audioStreamType = __SLAG__PROPERTY;
};
Notification.prototype.getCategory = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.category;
};
Notification.prototype.setCategory = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.category = __SLAG__PROPERTY;
};
Notification.prototype.getContentIntent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.contentIntent;
};
Notification.prototype.setContentIntent = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.contentIntent = __SLAG__PROPERTY;
};
Notification.prototype.getContentText = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.contentText;
};
Notification.prototype.setContentText = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.contentText = __SLAG__PROPERTY;
};
Notification.prototype.getContentTitle = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.contentTitle;
};
Notification.prototype.setContentTitle = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.contentTitle = __SLAG__PROPERTY;
};
Notification.prototype.setContentView = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.contentView = __SLAG__PROPERTY;
};
Notification.prototype.getDefaults = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.defaults;
};
Notification.prototype.setDefaults = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.defaults = __SLAG__PROPERTY;
};
Notification.prototype.getDeleteIntent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.deleteIntent;
};
Notification.prototype.setDeleteIntent = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.deleteIntent = __SLAG__PROPERTY;
};
Notification.prototype.getFlags = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.flags;
};
Notification.prototype.setFlags = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.flags = __SLAG__PROPERTY;
};
Notification.prototype.getIcon = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.icon;
};
Notification.prototype.setIcon = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.icon = __SLAG__PROPERTY;
};
Notification.prototype.getLargeIcon = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.largeIcon;
};
Notification.prototype.setLargeIcon = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.largeIcon = __SLAG__PROPERTY;
};
Notification.prototype.getLedARGB = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.ledARGB;
};
Notification.prototype.setLedARGB = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.ledARGB = __SLAG__PROPERTY;
};
Notification.prototype.getLedOffMS = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.ledOffMS;
};
Notification.prototype.setLedOffMS = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.ledOffMS = __SLAG__PROPERTY;
};
Notification.prototype.getLedOnMS = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.ledOnMS;
};
Notification.prototype.setLedOnMS = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.ledOnMS = __SLAG__PROPERTY;
};
Notification.prototype.getNumber = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.number;
};
Notification.prototype.setNumber = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.number = __SLAG__PROPERTY;
};
Notification.prototype.getPriority = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.priority;
};
Notification.prototype.setPriority = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.priority = __SLAG__PROPERTY;
};
Notification.prototype.getSound = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.sound;
};
Notification.prototype.setSound = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.sound = __SLAG__PROPERTY;
};
Notification.prototype.getStyle = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.style;
};
Notification.prototype.setStyle = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.style = __SLAG__PROPERTY;
};
Notification.prototype.getTickerText = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tickerText;
};
Notification.prototype.setTickerText = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tickerText = __SLAG__PROPERTY;
};
Notification.prototype.getVisibility = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.visibility;
};
Notification.prototype.setVisibility = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.visibility = __SLAG__PROPERTY;
};
Notification.prototype.getWhen = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.when;
};
Notification.prototype.setWhen = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.when = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new Notification(properties);
};