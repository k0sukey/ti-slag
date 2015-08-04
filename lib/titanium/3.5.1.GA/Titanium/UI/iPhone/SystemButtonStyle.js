var crypto = require('crypto');
function SystemButtonStyle(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'BAR',
			'BORDERED',
			'DONE',
			'PLAIN',
			'apiName',
			'bubbleParent',
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
	if (__SLAG__properties.BAR) {
		throw new Error('Ti.UI.iPhone.SystemButtonStyle.BAR is read only property');
	}
	this.BAR = 0;
	if (__SLAG__properties.BORDERED) {
		throw new Error('Ti.UI.iPhone.SystemButtonStyle.BORDERED is read only property');
	}
	this.BORDERED = 0;
	if (__SLAG__properties.DONE) {
		throw new Error('Ti.UI.iPhone.SystemButtonStyle.DONE is read only property');
	}
	this.DONE = 0;
	if (__SLAG__properties.PLAIN) {
		throw new Error('Ti.UI.iPhone.SystemButtonStyle.PLAIN is read only property');
	}
	this.PLAIN = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iPhone.SystemButtonStyle.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPhone.SystemButtonStyle';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
SystemButtonStyle.prototype.addEventListener = function () {
};
SystemButtonStyle.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
SystemButtonStyle.prototype.fireEvent = function () {
};
SystemButtonStyle.prototype.getApiName = function () {
	return this.apiName;
};
SystemButtonStyle.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
SystemButtonStyle.prototype.removeEventListener = function () {
};
SystemButtonStyle.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new SystemButtonStyle(properties);
};