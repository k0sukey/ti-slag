var crypto = require('crypto');
function Tizen(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
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
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.App.Tizen.apiName is read only property');
	}
	this.apiName = 'Ti.App.Tizen';
	if (__SLAG__properties.categories) {
		throw new Error('Ti.App.Tizen.categories is read only property');
	}
	this.categories = '';
	if (__SLAG__properties.iconPath) {
		throw new Error('Ti.App.Tizen.iconPath is read only property');
	}
	this.iconPath = '';
	if (__SLAG__properties.id) {
		throw new Error('Ti.App.Tizen.id is read only property');
	}
	this.id = '';
	if (__SLAG__properties.installDate) {
		throw new Error('Ti.App.Tizen.installDate is read only property');
	}
	this.installDate = new Date();
	if (__SLAG__properties.name) {
		throw new Error('Ti.App.Tizen.name is read only property');
	}
	this.name = '';
	if (__SLAG__properties.show) {
		throw new Error('Ti.App.Tizen.show is read only property');
	}
	this.show = true;
	if (__SLAG__properties.size) {
		throw new Error('Ti.App.Tizen.size is read only property');
	}
	this.size = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Tizen.prototype.addEventListener = function () {
};
Tizen.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Tizen.prototype.exit = function () {
};
Tizen.prototype.fireEvent = function () {
};
Tizen.prototype.getApiName = function () {
	return this.apiName;
};
Tizen.prototype.getCategories = function () {
	return this.categories;
};
Tizen.prototype.getIconPath = function () {
	return this.iconPath;
};
Tizen.prototype.getId = function () {
	return this.id;
};
Tizen.prototype.getInstallDate = function () {
	return this.installDate;
};
Tizen.prototype.getName = function () {
	return this.name;
};
Tizen.prototype.getShow = function () {
	return this.show;
};
Tizen.prototype.getSize = function () {
	return this.size;
};
Tizen.prototype.hide = function () {
};
Tizen.prototype.removeEventListener = function () {
};
module.exports = function (properties) {
	return new Tizen(properties);
};