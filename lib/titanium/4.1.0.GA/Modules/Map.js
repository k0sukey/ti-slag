var crypto = require('crypto');
function Map(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
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
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT) {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT) {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG__properties.apiName) {
		throw new Error('Modules.Map.apiName is read only property');
	}
	this.apiName = 'Modules.Map';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.ANNOTATION_DRAG_STATE_START) {
		throw new Error('Modules.Map.ANNOTATION_DRAG_STATE_START is read only property');
	}
	this.ANNOTATION_DRAG_STATE_START = 0;
	if (__SLAG__properties.ANNOTATION_DRAG_STATE_END) {
		throw new Error('Modules.Map.ANNOTATION_DRAG_STATE_END is read only property');
	}
	this.ANNOTATION_DRAG_STATE_END = 0;
	if (__SLAG__properties.ANNOTATION_GREEN) {
		throw new Error('Modules.Map.ANNOTATION_GREEN is read only property');
	}
	this.ANNOTATION_GREEN = 0;
	if (__SLAG__properties.ANNOTATION_BLUE) {
		throw new Error('Modules.Map.ANNOTATION_BLUE is read only property');
	}
	this.ANNOTATION_BLUE = 0;
	if (__SLAG__properties.ANNOTATION_AZURE) {
		throw new Error('Modules.Map.ANNOTATION_AZURE is read only property');
	}
	this.ANNOTATION_AZURE = 0;
	if (__SLAG__properties.ANNOTATION_CYAN) {
		throw new Error('Modules.Map.ANNOTATION_CYAN is read only property');
	}
	this.ANNOTATION_CYAN = 0;
	if (__SLAG__properties.ANNOTATION_MAGENTA) {
		throw new Error('Modules.Map.ANNOTATION_MAGENTA is read only property');
	}
	this.ANNOTATION_MAGENTA = 0;
	if (__SLAG__properties.ANNOTATION_ORANGE) {
		throw new Error('Modules.Map.ANNOTATION_ORANGE is read only property');
	}
	this.ANNOTATION_ORANGE = 0;
	if (__SLAG__properties.ANNOTATION_PURPLE) {
		throw new Error('Modules.Map.ANNOTATION_PURPLE is read only property');
	}
	this.ANNOTATION_PURPLE = 0;
	if (__SLAG__properties.ANNOTATION_ROSE) {
		throw new Error('Modules.Map.ANNOTATION_ROSE is read only property');
	}
	this.ANNOTATION_ROSE = 0;
	if (__SLAG__properties.ANNOTATION_YELLOW) {
		throw new Error('Modules.Map.ANNOTATION_YELLOW is read only property');
	}
	this.ANNOTATION_YELLOW = 0;
	if (__SLAG__properties.ANNOTATION_VIOLET) {
		throw new Error('Modules.Map.ANNOTATION_VIOLET is read only property');
	}
	this.ANNOTATION_VIOLET = 0;
	if (__SLAG__properties.ANNOTATION_RED) {
		throw new Error('Modules.Map.ANNOTATION_RED is read only property');
	}
	this.ANNOTATION_RED = 0;
	if (__SLAG__properties.SATELLITE_TYPE) {
		throw new Error('Modules.Map.SATELLITE_TYPE is read only property');
	}
	this.SATELLITE_TYPE = 0;
	if (__SLAG__properties.NORMAL_TYPE) {
		throw new Error('Modules.Map.NORMAL_TYPE is read only property');
	}
	this.NORMAL_TYPE = 0;
	if (__SLAG__properties.TERRAIN_TYPE) {
		throw new Error('Modules.Map.TERRAIN_TYPE is read only property');
	}
	this.TERRAIN_TYPE = 0;
	if (__SLAG__properties.HYBRID_TYPE) {
		throw new Error('Modules.Map.HYBRID_TYPE is read only property');
	}
	this.HYBRID_TYPE = 0;
	if (__SLAG__properties.SUCCESS) {
		throw new Error('Modules.Map.SUCCESS is read only property');
	}
	this.SUCCESS = 0;
	if (__SLAG__properties.SERVICE_MISSING) {
		throw new Error('Modules.Map.SERVICE_MISSING is read only property');
	}
	this.SERVICE_MISSING = 0;
	if (__SLAG__properties.SERVICE_VERSION_UPDATE_REQUIRED) {
		throw new Error('Modules.Map.SERVICE_VERSION_UPDATE_REQUIRED is read only property');
	}
	this.SERVICE_VERSION_UPDATE_REQUIRED = 0;
	if (__SLAG__properties.SERVICE_DISABLED) {
		throw new Error('Modules.Map.SERVICE_DISABLED is read only property');
	}
	this.SERVICE_DISABLED = 0;
	if (__SLAG__properties.SERVICE_INVALID) {
		throw new Error('Modules.Map.SERVICE_INVALID is read only property');
	}
	this.SERVICE_INVALID = 0;
	if (__SLAG__properties.OVERLAY_LEVEL_ABOVE_LABELS) {
		throw new Error('Modules.Map.OVERLAY_LEVEL_ABOVE_LABELS is read only property');
	}
	this.OVERLAY_LEVEL_ABOVE_LABELS = 0;
	if (__SLAG__properties.OVERLAY_LEVEL_ABOVE_ROADS) {
		throw new Error('Modules.Map.OVERLAY_LEVEL_ABOVE_ROADS is read only property');
	}
	this.OVERLAY_LEVEL_ABOVE_ROADS = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Map.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Map.prototype.isGooglePlayServicesAvailable = function () {
	return 0;
};
Map.prototype.createAnnotation = function (params) {
	var Annotation = require('./Map/Annotation');
	return Annotation(params);
};
Map.prototype.createCamera = function (params) {
	var Camera = require('./Map/Camera');
	return Camera(params);
};
Map.prototype.createCircle = function (params) {
	var Circle = require('./Map/Circle');
	return Circle(params);
};
Map.prototype.getApiName = function () {
	return this.apiName;
};
Map.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Map.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Map.prototype.createPolygon = function (params) {
	var Polygon = require('./Map/Polygon');
	return Polygon(params);
};
Map.prototype.createPolyline = function (params) {
	var Polyline = require('./Map/Polyline');
	return Polyline(params);
};
Map.prototype.createRoute = function (params) {
	var Route = require('./Map/Route');
	return Route(params);
};
Map.prototype.createView = function (params) {
	var View = require('./Map/View');
	return View(params);
};
module.exports = function (properties) {
	return new Map(properties);
};