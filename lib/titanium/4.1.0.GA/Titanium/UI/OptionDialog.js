var crypto = require('crypto');
function OptionDialog(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'androidView',
			'buttonNames',
			'cancel',
			'destructive',
			'options',
			'opaquebackground',
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
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.OptionDialog.apiName is read only property');
	}
	this.apiName = 'Ti.UI.OptionDialog';
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if ([
			'android',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.androidView = undefined;
	} else {
		this.androidView = __SLAG_PROPERTIES.androidView || {};
	}
	if ([
			'android',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.buttonNames = undefined;
	} else {
		this.buttonNames = __SLAG_PROPERTIES.buttonNames || '';
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.cancel = undefined;
	} else {
		this.cancel = __SLAG_PROPERTIES.cancel || 0;
	}
	if ([
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.destructive = undefined;
	} else {
		this.destructive = __SLAG_PROPERTIES.destructive || 0;
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.options = undefined;
	} else {
		this.options = __SLAG_PROPERTIES.options || '';
	}
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.opaquebackground = undefined;
	} else {
		this.opaquebackground = __SLAG_PROPERTIES.opaquebackground || true;
	}
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.persistent = undefined;
	} else {
		this.persistent = __SLAG_PROPERTIES.persistent || true;
	}
	if ([
			'android',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.selectedIndex = undefined;
	} else {
		this.selectedIndex = __SLAG_PROPERTIES.selectedIndex || 0;
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.title = undefined;
	} else {
		this.title = __SLAG_PROPERTIES.title || '';
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
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
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
OptionDialog.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
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
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
OptionDialog.prototype.finishLayout = function () {
	throw new Error('Ti.UI.OptionDialog.finishLayout was deprecated, since 3.0.0');
};
OptionDialog.prototype.startLayout = function () {
	throw new Error('Ti.UI.OptionDialog.startLayout was deprecated, since 3.0.0');
};
OptionDialog.prototype.updateLayout = function () {
	throw new Error('Ti.UI.OptionDialog.updateLayout was deprecated, since 3.0.0');
};
OptionDialog.prototype.hide = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
OptionDialog.prototype.show = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
OptionDialog.prototype.getBubbleParent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
OptionDialog.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
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
OptionDialog.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
OptionDialog.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
OptionDialog.prototype.getAndroidView = function () {
	if ([
			'android',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.androidView;
};
OptionDialog.prototype.setAndroidView = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.androidView = __SLAG__PROPERTY;
};
OptionDialog.prototype.getButtonNames = function () {
	if ([
			'android',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.buttonNames;
};
OptionDialog.prototype.setButtonNames = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.buttonNames = __SLAG__PROPERTY;
};
OptionDialog.prototype.getCancel = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.cancel;
};
OptionDialog.prototype.setCancel = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.cancel = __SLAG__PROPERTY;
};
OptionDialog.prototype.getDestructive = function () {
	if ([
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.destructive;
};
OptionDialog.prototype.setDestructive = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.destructive = __SLAG__PROPERTY;
};
OptionDialog.prototype.getOptions = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.options;
};
OptionDialog.prototype.setOptions = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.options = __SLAG__PROPERTY;
};
OptionDialog.prototype.getOpaquebackground = function () {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.opaquebackground;
};
OptionDialog.prototype.setOpaquebackground = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.opaquebackground = __SLAG__PROPERTY;
};
OptionDialog.prototype.getPersistent = function () {
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.persistent;
};
OptionDialog.prototype.setPersistent = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.persistent = __SLAG__PROPERTY;
};
OptionDialog.prototype.getSelectedIndex = function () {
	if ([
			'android',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.selectedIndex;
};
OptionDialog.prototype.setSelectedIndex = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.selectedIndex = __SLAG__PROPERTY;
};
OptionDialog.prototype.getTitle = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.title;
};
OptionDialog.prototype.setTitle = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.title = __SLAG__PROPERTY;
};
OptionDialog.prototype.getTitleid = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.titleid;
};
OptionDialog.prototype.setTitleid = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.titleid = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new OptionDialog(properties);
};