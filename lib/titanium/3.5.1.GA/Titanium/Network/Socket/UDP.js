var crypto = require('crypto');
function UDP(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'apiName',
			'data',
			'error',
			'port',
			'started',
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
		throw new Error('Ti.Network.Socket.UDP.apiName is read only property');
	}
	this.apiName = 'Ti.Network.Socket.UDP';
	this.data = __SLAG_PROPERTIES.data || {};
	this.error = __SLAG_PROPERTIES.error || {};
	this.port = __SLAG_PROPERTIES.port || 0;
	this.started = __SLAG_PROPERTIES.started || undefined;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
UDP.prototype.addEventListener = function () {
	if (['blackberry'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UDP.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
UDP.prototype.close = function () {
	if (['blackberry'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UDP.prototype.fireEvent = function () {
	if (['blackberry'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UDP.prototype.getApiName = function () {
	if (['blackberry'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
UDP.prototype.getData = function () {
	if (['blackberry'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.data;
};
UDP.prototype.getError = function () {
	if (['blackberry'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.error;
};
UDP.prototype.getPort = function () {
	if (['blackberry'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.port;
};
UDP.prototype.getStarted = function () {
	if (['blackberry'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.started;
};
UDP.prototype.isReadable = function () {
	if (['blackberry'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
UDP.prototype.isWriteable = function () {
	if (['blackberry'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
UDP.prototype.read = function () {
	if (['blackberry'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return 0;
};
UDP.prototype.removeEventListener = function () {
	if (['blackberry'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UDP.prototype.sendBytes = function () {
	if (['blackberry'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UDP.prototype.sendString = function () {
	if (['blackberry'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UDP.prototype.setData = function (__SLAG__PROPERTY) {
	if (['blackberry'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.data = __SLAG__PROPERTY;
};
UDP.prototype.setError = function (__SLAG__PROPERTY) {
	if (['blackberry'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.error = __SLAG__PROPERTY;
};
UDP.prototype.setPort = function (__SLAG__PROPERTY) {
	if (['blackberry'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.port = __SLAG__PROPERTY;
};
UDP.prototype.setStarted = function (__SLAG__PROPERTY) {
	if (['blackberry'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.started = __SLAG__PROPERTY;
};
UDP.prototype.start = function () {
	if (['blackberry'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UDP.prototype.stop = function () {
	if (['blackberry'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UDP.prototype.write = function () {
	if (['blackberry'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return 0;
};
module.exports = function (properties) {
	return new UDP(properties);
};