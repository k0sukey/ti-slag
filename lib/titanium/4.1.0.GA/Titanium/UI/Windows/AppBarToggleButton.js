var crypto = require('crypto');
function AppBarToggleButton(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'checked',
			'icon',
			'touchEnabled',
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
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.checked = undefined;
	} else {
		this.checked = __SLAG_PROPERTIES.checked || true;
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.icon = undefined;
	} else {
		this.icon = __SLAG_PROPERTIES.icon || 0;
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.touchEnabled = undefined;
	} else {
		this.touchEnabled = __SLAG_PROPERTIES.touchEnabled || true;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
AppBarToggleButton.prototype.addEventListener = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AppBarToggleButton.prototype.removeEventListener = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AppBarToggleButton.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
AppBarToggleButton.prototype.fireEvent = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AppBarToggleButton.prototype.getChecked = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.checked;
};
AppBarToggleButton.prototype.setChecked = function (__SLAG__PROPERTY) {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.checked = __SLAG__PROPERTY;
};
AppBarToggleButton.prototype.getIcon = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.icon;
};
AppBarToggleButton.prototype.setIcon = function (__SLAG__PROPERTY) {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.icon = __SLAG__PROPERTY;
};
AppBarToggleButton.prototype.getTouchEnabled = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.touchEnabled;
};
AppBarToggleButton.prototype.setTouchEnabled = function (__SLAG__PROPERTY) {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.touchEnabled = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new AppBarToggleButton(properties);
};