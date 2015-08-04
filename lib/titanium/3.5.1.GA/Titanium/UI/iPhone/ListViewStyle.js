var crypto = require('crypto');
function ListViewStyle(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'GROUPED',
			'PLAIN',
			'apiName',
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
	if (__SLAG__properties.GROUPED) {
		throw new Error('Ti.UI.iPhone.ListViewStyle.GROUPED is read only property');
	}
	this.GROUPED = 0;
	if (__SLAG__properties.PLAIN) {
		throw new Error('Ti.UI.iPhone.ListViewStyle.PLAIN is read only property');
	}
	this.PLAIN = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iPhone.ListViewStyle.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPhone.ListViewStyle';
	this.id = __SLAG__properties.id || '';
	return this;
}
ListViewStyle.prototype.getApiName = function () {
	return this.apiName;
};
module.exports = function (properties) {
	return new ListViewStyle(properties);
};