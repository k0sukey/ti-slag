var crypto = require('crypto');
function Map(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'ANNOTATION_DRAG_STATE_NONE',
			'ANNOTATION_DRAG_STATE_START',
			'ANNOTATION_DRAG_STATE_DRAG',
			'ANNOTATION_DRAG_STATE_CANCEL',
			'ANNOTATION_DRAG_STATE_END',
			'ANNOTATION_GREEN',
			'ANNOTATION_PURPLE',
			'ANNOTATION_RED',
			'HYBRID_TYPE',
			'SATELLITE_TYPE',
			'STANDARD_TYPE',
			'TERRAIN_TYPE',
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
		throw new Error('Ti.Map.apiName is read only property');
	}
	this.apiName = 'Ti.Map';
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if (__SLAG_PROPERTIES.ANNOTATION_DRAG_STATE_NONE) {
		throw new Error('Ti.Map.ANNOTATION_DRAG_STATE_NONE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANNOTATION_DRAG_STATE_NONE = undefined;
	} else {
		this.ANNOTATION_DRAG_STATE_NONE = 0;
	}
	if (__SLAG_PROPERTIES.ANNOTATION_DRAG_STATE_START) {
		throw new Error('Ti.Map.ANNOTATION_DRAG_STATE_START is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANNOTATION_DRAG_STATE_START = undefined;
	} else {
		this.ANNOTATION_DRAG_STATE_START = 0;
	}
	if (__SLAG_PROPERTIES.ANNOTATION_DRAG_STATE_DRAG) {
		throw new Error('Ti.Map.ANNOTATION_DRAG_STATE_DRAG is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANNOTATION_DRAG_STATE_DRAG = undefined;
	} else {
		this.ANNOTATION_DRAG_STATE_DRAG = 0;
	}
	if (__SLAG_PROPERTIES.ANNOTATION_DRAG_STATE_CANCEL) {
		throw new Error('Ti.Map.ANNOTATION_DRAG_STATE_CANCEL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANNOTATION_DRAG_STATE_CANCEL = undefined;
	} else {
		this.ANNOTATION_DRAG_STATE_CANCEL = 0;
	}
	if (__SLAG_PROPERTIES.ANNOTATION_DRAG_STATE_END) {
		throw new Error('Ti.Map.ANNOTATION_DRAG_STATE_END is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANNOTATION_DRAG_STATE_END = undefined;
	} else {
		this.ANNOTATION_DRAG_STATE_END = 0;
	}
	if (__SLAG_PROPERTIES.ANNOTATION_GREEN) {
		throw new Error('Ti.Map.ANNOTATION_GREEN is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANNOTATION_GREEN = undefined;
	} else {
		this.ANNOTATION_GREEN = 0;
	}
	if (__SLAG_PROPERTIES.ANNOTATION_PURPLE) {
		throw new Error('Ti.Map.ANNOTATION_PURPLE is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANNOTATION_PURPLE = undefined;
	} else {
		this.ANNOTATION_PURPLE = 0;
	}
	if (__SLAG_PROPERTIES.ANNOTATION_RED) {
		throw new Error('Ti.Map.ANNOTATION_RED is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANNOTATION_RED = undefined;
	} else {
		this.ANNOTATION_RED = 0;
	}
	if (__SLAG_PROPERTIES.HYBRID_TYPE) {
		throw new Error('Ti.Map.HYBRID_TYPE is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.HYBRID_TYPE = undefined;
	} else {
		this.HYBRID_TYPE = 0;
	}
	if (__SLAG_PROPERTIES.SATELLITE_TYPE) {
		throw new Error('Ti.Map.SATELLITE_TYPE is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SATELLITE_TYPE = undefined;
	} else {
		this.SATELLITE_TYPE = 0;
	}
	if (__SLAG_PROPERTIES.STANDARD_TYPE) {
		throw new Error('Ti.Map.STANDARD_TYPE is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STANDARD_TYPE = undefined;
	} else {
		this.STANDARD_TYPE = 0;
	}
	if (__SLAG_PROPERTIES.TERRAIN_TYPE) {
		throw new Error('Ti.Map.TERRAIN_TYPE is read only property');
	}
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TERRAIN_TYPE = undefined;
	} else {
		this.TERRAIN_TYPE = 0;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Map.prototype.addEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Map.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Map.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Map.prototype.fireEvent = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Map.prototype.createAnnotation = function () {
	throw new Error('Ti.Map.createAnnotation was deprecated, since 3.2.0');
};
Map.prototype.getBubbleParent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Map.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Map.prototype.getApiName = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Map.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Map.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
Map.prototype.createView = function () {
	throw new Error('Ti.Map.createView was deprecated, since 3.2.0');
};
module.exports = function (properties) {
	return new Map(properties);
};