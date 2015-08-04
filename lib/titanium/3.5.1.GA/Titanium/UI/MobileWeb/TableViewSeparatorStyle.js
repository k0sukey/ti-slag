var crypto = require('crypto');
function TableViewSeparatorStyle(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'NONE',
			'SINGLE_LINE',
			'apiName',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG__properties.NONE) {
		throw new Error('Ti.UI.MobileWeb.TableViewSeparatorStyle.NONE is read only property');
	}
	this.NONE = 0;
	if (__SLAG__properties.SINGLE_LINE) {
		throw new Error('Ti.UI.MobileWeb.TableViewSeparatorStyle.SINGLE_LINE is read only property');
	}
	this.SINGLE_LINE = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.MobileWeb.TableViewSeparatorStyle.apiName is read only property');
	}
	this.apiName = 'Ti.UI.MobileWeb.TableViewSeparatorStyle';
	this.id = __SLAG__properties.id || '';
	return this;
}
TableViewSeparatorStyle.prototype.addEventListener = function () {
};
TableViewSeparatorStyle.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
TableViewSeparatorStyle.prototype.fireEvent = function () {
};
TableViewSeparatorStyle.prototype.getApiName = function () {
	return this.apiName;
};
TableViewSeparatorStyle.prototype.removeEventListener = function () {
};
module.exports = function (properties) {
	return new TableViewSeparatorStyle(properties);
};