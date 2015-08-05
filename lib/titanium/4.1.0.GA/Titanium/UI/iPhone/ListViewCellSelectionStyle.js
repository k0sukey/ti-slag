var crypto = require('crypto');
function ListViewCellSelectionStyle(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'apiName',
			'BLUE',
			'GRAY',
			'NONE',
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
		throw new Error('Ti.UI.iPhone.ListViewCellSelectionStyle.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPhone.ListViewCellSelectionStyle';
	if (__SLAG_PROPERTIES.BLUE) {
		throw new Error('Ti.UI.iPhone.ListViewCellSelectionStyle.BLUE is read only property');
	}
	this.BLUE = 0;
	if (__SLAG_PROPERTIES.GRAY) {
		throw new Error('Ti.UI.iPhone.ListViewCellSelectionStyle.GRAY is read only property');
	}
	this.GRAY = 0;
	if (__SLAG_PROPERTIES.NONE) {
		throw new Error('Ti.UI.iPhone.ListViewCellSelectionStyle.NONE is read only property');
	}
	this.NONE = 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
ListViewCellSelectionStyle.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
module.exports = function (properties) {
	return new ListViewCellSelectionStyle(properties);
};