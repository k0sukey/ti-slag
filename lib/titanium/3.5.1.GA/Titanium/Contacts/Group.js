var crypto = require('crypto');
function Group(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'apiName',
			'bubbleParent',
			'name',
			'recordId',
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
		throw new Error('Ti.Contacts.Group.apiName is read only property');
	}
	this.apiName = 'Ti.Contacts.Group';
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if ([
			'ios',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.name = undefined;
	} else {
		this.name = __SLAG_PROPERTIES.name || '';
	}
	if ([
			'ios',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.recordId = undefined;
	} else {
		this.recordId = __SLAG_PROPERTIES.recordId || 0;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Group.prototype.add = function () {
	if ([
			'ios',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Group.prototype.addEventListener = function () {
	if ([
			'ios',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Group.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Group.prototype.fireEvent = function () {
	if ([
			'ios',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Group.prototype.getApiName = function () {
	if ([
			'ios',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Group.prototype.getBubbleParent = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Group.prototype.getName = function () {
	if ([
			'ios',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.name;
};
Group.prototype.getRecordId = function () {
	if ([
			'ios',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.recordId;
};
Group.prototype.members = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return [];
};
Group.prototype.remove = function () {
	if ([
			'ios',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Group.prototype.removeEventListener = function () {
	if ([
			'ios',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Group.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Group.prototype.setName = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.name = __SLAG__PROPERTY;
};
Group.prototype.setRecordId = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.recordId = __SLAG__PROPERTY;
};
Group.prototype.sortedMembers = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return [];
};
module.exports = function (properties) {
	return new Group(properties);
};