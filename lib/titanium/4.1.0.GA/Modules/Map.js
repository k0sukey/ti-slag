var crypto = require('crypto');
function Map(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'apiName',
			'lifecycleContainer',
			'ANNOTATION_DRAG_STATE_START',
			'ANNOTATION_DRAG_STATE_END',
			'ANNOTATION_GREEN',
			'ANNOTATION_BLUE',
			'ANNOTATION_AZURE',
			'ANNOTATION_CYAN',
			'ANNOTATION_MAGENTA',
			'ANNOTATION_ORANGE',
			'ANNOTATION_PURPLE',
			'ANNOTATION_ROSE',
			'ANNOTATION_YELLOW',
			'ANNOTATION_VIOLET',
			'ANNOTATION_RED',
			'SATELLITE_TYPE',
			'NORMAL_TYPE',
			'TERRAIN_TYPE',
			'HYBRID_TYPE',
			'SUCCESS',
			'SERVICE_MISSING',
			'SERVICE_VERSION_UPDATE_REQUIRED',
			'SERVICE_DISABLED',
			'SERVICE_INVALID',
			'OVERLAY_LEVEL_ABOVE_LABELS',
			'OVERLAY_LEVEL_ABOVE_ROADS',
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
		throw new Error('Modules.Map.apiName is read only property');
	}
	this.apiName = 'Modules.Map';
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if (__SLAG_PROPERTIES.ANNOTATION_DRAG_STATE_START) {
		throw new Error('Modules.Map.ANNOTATION_DRAG_STATE_START is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANNOTATION_DRAG_STATE_START = undefined;
	} else {
		this.ANNOTATION_DRAG_STATE_START = 0;
	}
	if (__SLAG_PROPERTIES.ANNOTATION_DRAG_STATE_END) {
		throw new Error('Modules.Map.ANNOTATION_DRAG_STATE_END is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANNOTATION_DRAG_STATE_END = undefined;
	} else {
		this.ANNOTATION_DRAG_STATE_END = 0;
	}
	if (__SLAG_PROPERTIES.ANNOTATION_GREEN) {
		throw new Error('Modules.Map.ANNOTATION_GREEN is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANNOTATION_GREEN = undefined;
	} else {
		this.ANNOTATION_GREEN = 0;
	}
	if (__SLAG_PROPERTIES.ANNOTATION_BLUE) {
		throw new Error('Modules.Map.ANNOTATION_BLUE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANNOTATION_BLUE = undefined;
	} else {
		this.ANNOTATION_BLUE = 0;
	}
	if (__SLAG_PROPERTIES.ANNOTATION_AZURE) {
		throw new Error('Modules.Map.ANNOTATION_AZURE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANNOTATION_AZURE = undefined;
	} else {
		this.ANNOTATION_AZURE = 0;
	}
	if (__SLAG_PROPERTIES.ANNOTATION_CYAN) {
		throw new Error('Modules.Map.ANNOTATION_CYAN is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANNOTATION_CYAN = undefined;
	} else {
		this.ANNOTATION_CYAN = 0;
	}
	if (__SLAG_PROPERTIES.ANNOTATION_MAGENTA) {
		throw new Error('Modules.Map.ANNOTATION_MAGENTA is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANNOTATION_MAGENTA = undefined;
	} else {
		this.ANNOTATION_MAGENTA = 0;
	}
	if (__SLAG_PROPERTIES.ANNOTATION_ORANGE) {
		throw new Error('Modules.Map.ANNOTATION_ORANGE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANNOTATION_ORANGE = undefined;
	} else {
		this.ANNOTATION_ORANGE = 0;
	}
	if (__SLAG_PROPERTIES.ANNOTATION_PURPLE) {
		throw new Error('Modules.Map.ANNOTATION_PURPLE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANNOTATION_PURPLE = undefined;
	} else {
		this.ANNOTATION_PURPLE = 0;
	}
	if (__SLAG_PROPERTIES.ANNOTATION_ROSE) {
		throw new Error('Modules.Map.ANNOTATION_ROSE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANNOTATION_ROSE = undefined;
	} else {
		this.ANNOTATION_ROSE = 0;
	}
	if (__SLAG_PROPERTIES.ANNOTATION_YELLOW) {
		throw new Error('Modules.Map.ANNOTATION_YELLOW is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANNOTATION_YELLOW = undefined;
	} else {
		this.ANNOTATION_YELLOW = 0;
	}
	if (__SLAG_PROPERTIES.ANNOTATION_VIOLET) {
		throw new Error('Modules.Map.ANNOTATION_VIOLET is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANNOTATION_VIOLET = undefined;
	} else {
		this.ANNOTATION_VIOLET = 0;
	}
	if (__SLAG_PROPERTIES.ANNOTATION_RED) {
		throw new Error('Modules.Map.ANNOTATION_RED is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ANNOTATION_RED = undefined;
	} else {
		this.ANNOTATION_RED = 0;
	}
	if (__SLAG_PROPERTIES.SATELLITE_TYPE) {
		throw new Error('Modules.Map.SATELLITE_TYPE is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SATELLITE_TYPE = undefined;
	} else {
		this.SATELLITE_TYPE = 0;
	}
	if (__SLAG_PROPERTIES.NORMAL_TYPE) {
		throw new Error('Modules.Map.NORMAL_TYPE is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.NORMAL_TYPE = undefined;
	} else {
		this.NORMAL_TYPE = 0;
	}
	if (__SLAG_PROPERTIES.TERRAIN_TYPE) {
		throw new Error('Modules.Map.TERRAIN_TYPE is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TERRAIN_TYPE = undefined;
	} else {
		this.TERRAIN_TYPE = 0;
	}
	if (__SLAG_PROPERTIES.HYBRID_TYPE) {
		throw new Error('Modules.Map.HYBRID_TYPE is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.HYBRID_TYPE = undefined;
	} else {
		this.HYBRID_TYPE = 0;
	}
	if (__SLAG_PROPERTIES.SUCCESS) {
		throw new Error('Modules.Map.SUCCESS is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SUCCESS = undefined;
	} else {
		this.SUCCESS = 0;
	}
	if (__SLAG_PROPERTIES.SERVICE_MISSING) {
		throw new Error('Modules.Map.SERVICE_MISSING is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SERVICE_MISSING = undefined;
	} else {
		this.SERVICE_MISSING = 0;
	}
	if (__SLAG_PROPERTIES.SERVICE_VERSION_UPDATE_REQUIRED) {
		throw new Error('Modules.Map.SERVICE_VERSION_UPDATE_REQUIRED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SERVICE_VERSION_UPDATE_REQUIRED = undefined;
	} else {
		this.SERVICE_VERSION_UPDATE_REQUIRED = 0;
	}
	if (__SLAG_PROPERTIES.SERVICE_DISABLED) {
		throw new Error('Modules.Map.SERVICE_DISABLED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SERVICE_DISABLED = undefined;
	} else {
		this.SERVICE_DISABLED = 0;
	}
	if (__SLAG_PROPERTIES.SERVICE_INVALID) {
		throw new Error('Modules.Map.SERVICE_INVALID is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SERVICE_INVALID = undefined;
	} else {
		this.SERVICE_INVALID = 0;
	}
	if (__SLAG_PROPERTIES.OVERLAY_LEVEL_ABOVE_LABELS) {
		throw new Error('Modules.Map.OVERLAY_LEVEL_ABOVE_LABELS is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.OVERLAY_LEVEL_ABOVE_LABELS = undefined;
	} else {
		this.OVERLAY_LEVEL_ABOVE_LABELS = 0;
	}
	if (__SLAG_PROPERTIES.OVERLAY_LEVEL_ABOVE_ROADS) {
		throw new Error('Modules.Map.OVERLAY_LEVEL_ABOVE_ROADS is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.OVERLAY_LEVEL_ABOVE_ROADS = undefined;
	} else {
		this.OVERLAY_LEVEL_ABOVE_ROADS = 0;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Map.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Map.prototype.isGooglePlayServicesAvailable = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return 0;
};
Map.prototype.createAnnotation = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Annotation = require('./Map/Annotation');
	return Annotation(__SLAG_PROPERTY);
};
Map.prototype.createCamera = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Camera = require('./Map/Camera');
	return Camera(__SLAG_PROPERTY);
};
Map.prototype.createCircle = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Circle = require('./Map/Circle');
	return Circle(__SLAG_PROPERTY);
};
Map.prototype.getApiName = function () {
	if ([
			'android',
			'ios'
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
Map.prototype.createPolygon = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Polygon = require('./Map/Polygon');
	return Polygon(__SLAG_PROPERTY);
};
Map.prototype.createPolyline = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Polyline = require('./Map/Polyline');
	return Polyline(__SLAG_PROPERTY);
};
Map.prototype.createRoute = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Route = require('./Map/Route');
	return Route(__SLAG_PROPERTY);
};
Map.prototype.createView = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var View = require('./Map/View');
	return View(__SLAG_PROPERTY);
};
module.exports = function (properties) {
	return new Map(properties);
};