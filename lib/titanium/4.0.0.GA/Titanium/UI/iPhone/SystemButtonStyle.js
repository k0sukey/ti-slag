var crypto = require('crypto');
function SystemButtonStyle(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'BAR',
			'BORDERED',
			'DONE',
			'PLAIN',
			'apiName',
			'bubbleParent',
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
	if (__SLAG_PROPERTIES.BAR) {
		throw new Error('Ti.UI.iPhone.SystemButtonStyle.BAR is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BAR = undefined;
	} else {
		this.BAR = 0;
	}
	if (__SLAG_PROPERTIES.BORDERED) {
		throw new Error('Ti.UI.iPhone.SystemButtonStyle.BORDERED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BORDERED = undefined;
	} else {
		this.BORDERED = 0;
	}
	if (__SLAG_PROPERTIES.DONE) {
		throw new Error('Ti.UI.iPhone.SystemButtonStyle.DONE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DONE = undefined;
	} else {
		this.DONE = 0;
	}
	if (__SLAG_PROPERTIES.PLAIN) {
		throw new Error('Ti.UI.iPhone.SystemButtonStyle.PLAIN is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PLAIN = undefined;
	} else {
		this.PLAIN = 0;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.iPhone.SystemButtonStyle.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPhone.SystemButtonStyle';
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
SystemButtonStyle.prototype.addEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
SystemButtonStyle.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
SystemButtonStyle.prototype.fireEvent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
SystemButtonStyle.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
SystemButtonStyle.prototype.getBubbleParent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
SystemButtonStyle.prototype.removeEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
SystemButtonStyle.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new SystemButtonStyle(properties);
};