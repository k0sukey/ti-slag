var crypto = require('crypto');
function TableViewCellSelectionStyle(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'BLUE',
			'GRAY',
			'NONE',
			'apiName',
			'bubbleParent',
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
	if (__SLAG__properties.BLUE) {
		throw new Error('Ti.UI.iPhone.TableViewCellSelectionStyle.BLUE is read only property');
	}
	this.BLUE = 0;
	if (__SLAG__properties.GRAY) {
		throw new Error('Ti.UI.iPhone.TableViewCellSelectionStyle.GRAY is read only property');
	}
	this.GRAY = 0;
	if (__SLAG__properties.NONE) {
		throw new Error('Ti.UI.iPhone.TableViewCellSelectionStyle.NONE is read only property');
	}
	this.NONE = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iPhone.TableViewCellSelectionStyle.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPhone.TableViewCellSelectionStyle';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
TableViewCellSelectionStyle.prototype.addEventListener = function () {
};
TableViewCellSelectionStyle.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
TableViewCellSelectionStyle.prototype.fireEvent = function () {
};
TableViewCellSelectionStyle.prototype.getApiName = function () {
	return this.apiName;
};
TableViewCellSelectionStyle.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
TableViewCellSelectionStyle.prototype.removeEventListener = function () {
};
TableViewCellSelectionStyle.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new TableViewCellSelectionStyle(properties);
};