var crypto = require('crypto');
function TableViewSeparatorStyle(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'apiName',
			'NONE',
			'SINGLE_LINE',
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
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.MobileWeb.TableViewSeparatorStyle.apiName is read only property');
	}
	this.apiName = 'Ti.UI.MobileWeb.TableViewSeparatorStyle';
	if (__SLAG_PROPERTIES.NONE) {
		throw new Error('Ti.UI.MobileWeb.TableViewSeparatorStyle.NONE is read only property');
	}
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.NONE = undefined;
	} else {
		this.NONE = 0;
	}
	if (__SLAG_PROPERTIES.SINGLE_LINE) {
		throw new Error('Ti.UI.MobileWeb.TableViewSeparatorStyle.SINGLE_LINE is read only property');
	}
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SINGLE_LINE = undefined;
	} else {
		this.SINGLE_LINE = 0;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
TableViewSeparatorStyle.prototype.addEventListener = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TableViewSeparatorStyle.prototype.removeEventListener = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TableViewSeparatorStyle.prototype.fireEvent = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TableViewSeparatorStyle.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
TableViewSeparatorStyle.prototype.getApiName = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
module.exports = function (properties) {
	return new TableViewSeparatorStyle(properties);
};