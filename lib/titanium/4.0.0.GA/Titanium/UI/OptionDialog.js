var crypto = require('crypto');
function OptionDialog(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'androidView',
			'apiName',
			'bubbleParent',
			'buttonNames',
			'cancel',
			'destructive',
			'lifecycleContainer',
			'opaquebackground',
			'options',
			'persistent',
			'selectedIndex',
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
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.androidView = undefined;
	} else {
		this.androidView = __SLAG_PROPERTIES.androidView || {};
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.OptionDialog.apiName is read only property');
	}
	this.apiName = 'Ti.UI.OptionDialog';
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.buttonNames = undefined;
	} else {
		this.buttonNames = __SLAG_PROPERTIES.buttonNames || '';
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.cancel = undefined;
	} else {
		this.cancel = __SLAG_PROPERTIES.cancel || 0;
	}
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.destructive = undefined;
	} else {
		this.destructive = __SLAG_PROPERTIES.destructive || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.opaquebackground = undefined;
	} else {
		this.opaquebackground = __SLAG_PROPERTIES.opaquebackground || true;
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.options = undefined;
	} else {
		this.options = __SLAG_PROPERTIES.options || '';
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.persistent = undefined;
	} else {
		this.persistent = __SLAG_PROPERTIES.persistent || true;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.selectedIndex = undefined;
	} else {
		this.selectedIndex = __SLAG_PROPERTIES.selectedIndex || 0;
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.title = undefined;
	} else {
		this.title = __SLAG_PROPERTIES.title || '';
	}
	if ([
			'android',
			'blackberry',
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
OptionDialog.prototype.addEventListener = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
OptionDialog.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
OptionDialog.prototype.fireEvent = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
OptionDialog.prototype.getAndroidView = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.androidView;
};
OptionDialog.prototype.getApiName = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
OptionDialog.prototype.getBubbleParent = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
OptionDialog.prototype.getButtonNames = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.buttonNames;
};
OptionDialog.prototype.getCancel = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.cancel;
};
OptionDialog.prototype.getDestructive = function () {
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.destructive;
};
OptionDialog.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
OptionDialog.prototype.getOpaquebackground = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.opaquebackground;
};
OptionDialog.prototype.getOptions = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.options;
};
OptionDialog.prototype.getPersistent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.persistent;
};
OptionDialog.prototype.getSelectedIndex = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.selectedIndex;
};
OptionDialog.prototype.getTitle = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.title;
};
OptionDialog.prototype.getTitleid = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.titleid;
};
OptionDialog.prototype.hide = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
OptionDialog.prototype.removeEventListener = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
OptionDialog.prototype.setAndroidView = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.androidView = __SLAG__PROPERTY;
};
OptionDialog.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
OptionDialog.prototype.setCancel = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.cancel = __SLAG__PROPERTY;
};
OptionDialog.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
OptionDialog.prototype.setOpaquebackground = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.opaquebackground = __SLAG__PROPERTY;
};
OptionDialog.prototype.setPersistent = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.persistent = __SLAG__PROPERTY;
};
OptionDialog.prototype.setTitle = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.title = __SLAG__PROPERTY;
};
OptionDialog.prototype.setTitleid = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.titleid = __SLAG__PROPERTY;
};
OptionDialog.prototype.show = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
module.exports = function (properties) {
	return new OptionDialog(properties);
};