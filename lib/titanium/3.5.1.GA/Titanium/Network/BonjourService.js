var crypto = require('crypto');
function BonjourService(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'apiName',
			'bubbleParent',
			'domain',
			'isLocal',
			'name',
			'socket',
			'type',
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
		throw new Error('Ti.Network.BonjourService.apiName is read only property');
	}
	this.apiName = 'Ti.Network.BonjourService';
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.domain = undefined;
	} else {
		this.domain = __SLAG_PROPERTIES.domain || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.isLocal = undefined;
	} else {
		this.isLocal = __SLAG_PROPERTIES.isLocal || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.name = undefined;
	} else {
		this.name = __SLAG_PROPERTIES.name || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.socket = undefined;
	} else {
		this.socket = __SLAG_PROPERTIES.socket || {};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.type = undefined;
	} else {
		this.type = __SLAG_PROPERTIES.type || '';
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
BonjourService.prototype.addEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
BonjourService.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
BonjourService.prototype.fireEvent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
BonjourService.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
BonjourService.prototype.getBubbleParent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
BonjourService.prototype.getDomain = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.domain;
};
BonjourService.prototype.getIsLocal = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.isLocal;
};
BonjourService.prototype.getName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.name;
};
BonjourService.prototype.getSocket = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.socket;
};
BonjourService.prototype.getType = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.type;
};
BonjourService.prototype.publish = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
BonjourService.prototype.removeEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
BonjourService.prototype.resolve = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
BonjourService.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
BonjourService.prototype.setDomain = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.domain = __SLAG__PROPERTY;
};
BonjourService.prototype.setIsLocal = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.isLocal = __SLAG__PROPERTY;
};
BonjourService.prototype.setName = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.name = __SLAG__PROPERTY;
};
BonjourService.prototype.setSocket = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.socket = __SLAG__PROPERTY;
};
BonjourService.prototype.setType = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.type = __SLAG__PROPERTY;
};
BonjourService.prototype.stop = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
module.exports = function (properties) {
	return new BonjourService(properties);
};