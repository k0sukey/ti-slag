var crypto = require('crypto');
function Properties(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
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
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.App.Properties.apiName is read only property');
	}
	this.apiName = 'Ti.App.Properties';
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	this.__SLAG_SIMULATE_PROPERTIES = {};
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Properties.prototype.addEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Properties.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Properties.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Properties.prototype.fireEvent = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Properties.prototype.getBool = function (__SLAG_PROPERTY, __SLAG_DEFAULT) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	if (this.__SLAG_SIMULATE_PROPERTIES.hasOwnProperty(__SLAG_PROPERTY)) {
		return this.__SLAG_SIMULATE_PROPERTIES[__SLAG_PROPERTY];
	} else {
		return __SLAG_DEFAULT || null;
	}
};
Properties.prototype.getDouble = function (__SLAG_PROPERTY, __SLAG_DEFAULT) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	if (this.__SLAG_SIMULATE_PROPERTIES.hasOwnProperty(__SLAG_PROPERTY)) {
		return this.__SLAG_SIMULATE_PROPERTIES[__SLAG_PROPERTY];
	} else {
		return __SLAG_DEFAULT || null;
	}
};
Properties.prototype.getInt = function (__SLAG_PROPERTY, __SLAG_DEFAULT) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	if (this.__SLAG_SIMULATE_PROPERTIES.hasOwnProperty(__SLAG_PROPERTY)) {
		return this.__SLAG_SIMULATE_PROPERTIES[__SLAG_PROPERTY];
	} else {
		return __SLAG_DEFAULT || null;
	}
};
Properties.prototype.getList = function (__SLAG_PROPERTY, __SLAG_DEFAULT) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	if (this.__SLAG_SIMULATE_PROPERTIES.hasOwnProperty(__SLAG_PROPERTY)) {
		return this.__SLAG_SIMULATE_PROPERTIES[__SLAG_PROPERTY];
	} else {
		return __SLAG_DEFAULT || null;
	}
};
Properties.prototype.getObject = function (__SLAG_PROPERTY, __SLAG_DEFAULT) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	if (this.__SLAG_SIMULATE_PROPERTIES.hasOwnProperty(__SLAG_PROPERTY)) {
		return this.__SLAG_SIMULATE_PROPERTIES[__SLAG_PROPERTY];
	} else {
		return __SLAG_DEFAULT || null;
	}
};
Properties.prototype.getString = function (__SLAG_PROPERTY, __SLAG_DEFAULT) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	if (this.__SLAG_SIMULATE_PROPERTIES.hasOwnProperty(__SLAG_PROPERTY)) {
		return this.__SLAG_SIMULATE_PROPERTIES[__SLAG_PROPERTY];
	} else {
		return __SLAG_DEFAULT || null;
	}
};
Properties.prototype.hasProperty = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	if (this.__SLAG_SIMULATE_PROPERTIES.hasOwnProperty(__SLAG_PROPERTY)) {
		return true;
	} else {
		return false;
	}
};
Properties.prototype.listProperties = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return Object.keys(this.__SLAG_SIMULATE_PROPERTIES);
};
Properties.prototype.removeProperty = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	delete this.__SLAG_SIMULATE_PROPERTIES[__SLAG_PROPERTY];
};
Properties.prototype.setBool = function (__SLAG_PROPERTY, __SLAG_VALUE) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.__SLAG_SIMULATE_PROPERTIES[__SLAG_PROPERTY] = __SLAG_VALUE;
};
Properties.prototype.setDouble = function (__SLAG_PROPERTY, __SLAG_VALUE) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.__SLAG_SIMULATE_PROPERTIES[__SLAG_PROPERTY] = __SLAG_VALUE;
};
Properties.prototype.setInt = function (__SLAG_PROPERTY, __SLAG_VALUE) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.__SLAG_SIMULATE_PROPERTIES[__SLAG_PROPERTY] = __SLAG_VALUE;
};
Properties.prototype.setList = function (__SLAG_PROPERTY, __SLAG_VALUE) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.__SLAG_SIMULATE_PROPERTIES[__SLAG_PROPERTY] = __SLAG_VALUE;
};
Properties.prototype.setObject = function (__SLAG_PROPERTY, __SLAG_VALUE) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.__SLAG_SIMULATE_PROPERTIES[__SLAG_PROPERTY] = __SLAG_VALUE;
};
Properties.prototype.setString = function (__SLAG_PROPERTY, __SLAG_VALUE) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.__SLAG_SIMULATE_PROPERTIES[__SLAG_PROPERTY] = __SLAG_VALUE;
};
Properties.prototype.getBubbleParent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Properties.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Properties.prototype.getApiName = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Properties.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Properties.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new Properties(properties);
};