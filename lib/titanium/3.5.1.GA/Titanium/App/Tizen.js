var crypto = require('crypto');
function Tizen(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'apiName',
			'categories',
			'iconPath',
			'id',
			'installDate',
			'name',
			'show',
			'size',
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
		throw new Error('Ti.App.Tizen.apiName is read only property');
	}
	this.apiName = 'Ti.App.Tizen';
	if (__SLAG_PROPERTIES.categories) {
		throw new Error('Ti.App.Tizen.categories is read only property');
	}
	this.categories = '';
	if (__SLAG_PROPERTIES.iconPath) {
		throw new Error('Ti.App.Tizen.iconPath is read only property');
	}
	this.iconPath = '';
	if (__SLAG_PROPERTIES.id) {
		throw new Error('Ti.App.Tizen.id is read only property');
	}
	this.id = '';
	if (__SLAG_PROPERTIES.installDate) {
		throw new Error('Ti.App.Tizen.installDate is read only property');
	}
	this.installDate = new Date();
	if (__SLAG_PROPERTIES.name) {
		throw new Error('Ti.App.Tizen.name is read only property');
	}
	this.name = '';
	if (__SLAG_PROPERTIES.show) {
		throw new Error('Ti.App.Tizen.show is read only property');
	}
	this.show = true;
	if (__SLAG_PROPERTIES.size) {
		throw new Error('Ti.App.Tizen.size is read only property');
	}
	this.size = 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Tizen.prototype.addEventListener = function () {
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Tizen.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Tizen.prototype.exit = function () {
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Tizen.prototype.fireEvent = function () {
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Tizen.prototype.getApiName = function () {
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Tizen.prototype.getCategories = function () {
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.categories;
};
Tizen.prototype.getIconPath = function () {
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.iconPath;
};
Tizen.prototype.getId = function () {
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.id;
};
Tizen.prototype.getInstallDate = function () {
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.installDate;
};
Tizen.prototype.getName = function () {
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.name;
};
Tizen.prototype.getShow = function () {
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.show;
};
Tizen.prototype.getSize = function () {
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.size;
};
Tizen.prototype.hide = function () {
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Tizen.prototype.removeEventListener = function () {
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
module.exports = function (properties) {
	return new Tizen(properties);
};