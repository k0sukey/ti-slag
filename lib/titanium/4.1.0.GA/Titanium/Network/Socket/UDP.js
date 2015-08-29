var crypto = require('crypto');
function UDP(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'port',
			'started',
			'data',
			'error',
			'port',
			'started',
			'data',
			'error',
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
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.port = undefined;
	} else {
		this.port = __SLAG_PROPERTIES.port || '';
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.started = undefined;
	} else {
		this.started = __SLAG_PROPERTIES.started || '';
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.data = undefined;
	} else {
		this.data = __SLAG_PROPERTIES.data || '';
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.error = undefined;
	} else {
		this.error = __SLAG_PROPERTIES.error || '';
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.port = undefined;
	} else {
		this.port = __SLAG_PROPERTIES.port || 0;
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.started = undefined;
	} else {
		this.started = __SLAG_PROPERTIES.started || undefined;
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.data = undefined;
	} else {
		this.data = __SLAG_PROPERTIES.data || {};
	}
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.error = undefined;
	} else {
		this.error = __SLAG_PROPERTIES.error || {};
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
UDP.prototype.addEventListener = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UDP.prototype.removeEventListener = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UDP.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
UDP.prototype.fireEvent = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UDP.prototype.start = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UDP.prototype.stop = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UDP.prototype.sendString = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UDP.prototype.sendBytes = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UDP.prototype.getPort = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.port;
};
UDP.prototype.setPort = function (__SLAG__PROPERTY) {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.port = __SLAG__PROPERTY;
};
UDP.prototype.getStarted = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.started;
};
UDP.prototype.setStarted = function (__SLAG__PROPERTY) {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.started = __SLAG__PROPERTY;
};
UDP.prototype.getData = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.data;
};
UDP.prototype.setData = function (__SLAG__PROPERTY) {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.data = __SLAG__PROPERTY;
};
UDP.prototype.getError = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.error;
};
UDP.prototype.setError = function (__SLAG__PROPERTY) {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.error = __SLAG__PROPERTY;
};
UDP.prototype.start = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UDP.prototype.stop = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UDP.prototype.sendString = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UDP.prototype.sendBytes = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UDP.prototype.getPort = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.port;
};
UDP.prototype.setPort = function (__SLAG__PROPERTY) {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.port = __SLAG__PROPERTY;
};
UDP.prototype.getStarted = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.started;
};
UDP.prototype.setStarted = function (__SLAG__PROPERTY) {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.started = __SLAG__PROPERTY;
};
UDP.prototype.getData = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.data;
};
UDP.prototype.setData = function (__SLAG__PROPERTY) {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.data = __SLAG__PROPERTY;
};
UDP.prototype.getError = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.error;
};
UDP.prototype.setError = function (__SLAG__PROPERTY) {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.error = __SLAG__PROPERTY;
};
UDP.prototype.getPort = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.port;
};
UDP.prototype.setPort = function (__SLAG__PROPERTY) {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.port = __SLAG__PROPERTY;
};
UDP.prototype.getStarted = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.started;
};
UDP.prototype.setStarted = function (__SLAG__PROPERTY) {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.started = __SLAG__PROPERTY;
};
UDP.prototype.getData = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.data;
};
UDP.prototype.setData = function (__SLAG__PROPERTY) {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.data = __SLAG__PROPERTY;
};
UDP.prototype.getError = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.error;
};
module.exports = function (properties) {
	return new UDP(properties);
};