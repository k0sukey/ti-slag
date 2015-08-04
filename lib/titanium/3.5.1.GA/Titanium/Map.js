var crypto = require('crypto');
function Map(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'ANNOTATION_DRAG_STATE_CANCEL',
			'ANNOTATION_DRAG_STATE_DRAG',
			'ANNOTATION_DRAG_STATE_END',
			'ANNOTATION_DRAG_STATE_NONE',
			'ANNOTATION_DRAG_STATE_START',
			'ANNOTATION_GREEN',
			'ANNOTATION_PURPLE',
			'ANNOTATION_RED',
			'HYBRID_TYPE',
			'SATELLITE_TYPE',
			'STANDARD_TYPE',
			'TERRAIN_TYPE',
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
	if (__SLAG__properties.ANNOTATION_DRAG_STATE_CANCEL) {
		throw new Error('Ti.Map.ANNOTATION_DRAG_STATE_CANCEL is read only property');
	}
	this.ANNOTATION_DRAG_STATE_CANCEL = 0;
	if (__SLAG__properties.ANNOTATION_DRAG_STATE_DRAG) {
		throw new Error('Ti.Map.ANNOTATION_DRAG_STATE_DRAG is read only property');
	}
	this.ANNOTATION_DRAG_STATE_DRAG = 0;
	if (__SLAG__properties.ANNOTATION_DRAG_STATE_END) {
		throw new Error('Ti.Map.ANNOTATION_DRAG_STATE_END is read only property');
	}
	this.ANNOTATION_DRAG_STATE_END = 0;
	if (__SLAG__properties.ANNOTATION_DRAG_STATE_NONE) {
		throw new Error('Ti.Map.ANNOTATION_DRAG_STATE_NONE is read only property');
	}
	this.ANNOTATION_DRAG_STATE_NONE = 0;
	if (__SLAG__properties.ANNOTATION_DRAG_STATE_START) {
		throw new Error('Ti.Map.ANNOTATION_DRAG_STATE_START is read only property');
	}
	this.ANNOTATION_DRAG_STATE_START = 0;
	if (__SLAG__properties.ANNOTATION_GREEN) {
		throw new Error('Ti.Map.ANNOTATION_GREEN is read only property');
	}
	this.ANNOTATION_GREEN = 0;
	if (__SLAG__properties.ANNOTATION_PURPLE) {
		throw new Error('Ti.Map.ANNOTATION_PURPLE is read only property');
	}
	this.ANNOTATION_PURPLE = 0;
	if (__SLAG__properties.ANNOTATION_RED) {
		throw new Error('Ti.Map.ANNOTATION_RED is read only property');
	}
	this.ANNOTATION_RED = 0;
	if (__SLAG__properties.HYBRID_TYPE) {
		throw new Error('Ti.Map.HYBRID_TYPE is read only property');
	}
	this.HYBRID_TYPE = 0;
	if (__SLAG__properties.SATELLITE_TYPE) {
		throw new Error('Ti.Map.SATELLITE_TYPE is read only property');
	}
	this.SATELLITE_TYPE = 0;
	if (__SLAG__properties.STANDARD_TYPE) {
		throw new Error('Ti.Map.STANDARD_TYPE is read only property');
	}
	this.STANDARD_TYPE = 0;
	if (__SLAG__properties.TERRAIN_TYPE) {
		throw new Error('Ti.Map.TERRAIN_TYPE is read only property');
	}
	this.TERRAIN_TYPE = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Map.apiName is read only property');
	}
	this.apiName = 'Ti.Map';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
Map.prototype.addEventListener = function () {
};
Map.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Map.prototype.createAnnotation = function () {
	throw new Error('Ti.Map.createAnnotation was deprecated, since 3.2.0');
};
Map.prototype.createView = function () {
	throw new Error('Ti.Map.createView was deprecated, since 3.2.0');
};
Map.prototype.fireEvent = function () {
};
Map.prototype.getApiName = function () {
	return this.apiName;
};
Map.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Map.prototype.removeEventListener = function () {
};
Map.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new Map(properties);
};