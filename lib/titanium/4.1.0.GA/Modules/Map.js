function Map(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Map';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.ANNOTATION_DRAG_STATE_START = properties.ANNOTATION_DRAG_STATE_START || 0;
	this.ANNOTATION_DRAG_STATE_END = properties.ANNOTATION_DRAG_STATE_END || 0;
	this.ANNOTATION_GREEN = properties.ANNOTATION_GREEN || 0;
	this.ANNOTATION_BLUE = properties.ANNOTATION_BLUE || 0;
	this.ANNOTATION_AZURE = properties.ANNOTATION_AZURE || 0;
	this.ANNOTATION_CYAN = properties.ANNOTATION_CYAN || 0;
	this.ANNOTATION_MAGENTA = properties.ANNOTATION_MAGENTA || 0;
	this.ANNOTATION_ORANGE = properties.ANNOTATION_ORANGE || 0;
	this.ANNOTATION_PURPLE = properties.ANNOTATION_PURPLE || 0;
	this.ANNOTATION_ROSE = properties.ANNOTATION_ROSE || 0;
	this.ANNOTATION_YELLOW = properties.ANNOTATION_YELLOW || 0;
	this.ANNOTATION_VIOLET = properties.ANNOTATION_VIOLET || 0;
	this.ANNOTATION_RED = properties.ANNOTATION_RED || 0;
	this.SATELLITE_TYPE = properties.SATELLITE_TYPE || 0;
	this.NORMAL_TYPE = properties.NORMAL_TYPE || 0;
	this.TERRAIN_TYPE = properties.TERRAIN_TYPE || 0;
	this.HYBRID_TYPE = properties.HYBRID_TYPE || 0;
	this.SUCCESS = properties.SUCCESS || 0;
	this.SERVICE_MISSING = properties.SERVICE_MISSING || 0;
	this.SERVICE_VERSION_UPDATE_REQUIRED = properties.SERVICE_VERSION_UPDATE_REQUIRED || 0;
	this.SERVICE_DISABLED = properties.SERVICE_DISABLED || 0;
	this.SERVICE_INVALID = properties.SERVICE_INVALID || 0;
	this.OVERLAY_LEVEL_ABOVE_LABELS = properties.OVERLAY_LEVEL_ABOVE_LABELS || 0;
	this.OVERLAY_LEVEL_ABOVE_ROADS = properties.OVERLAY_LEVEL_ABOVE_ROADS || 0;
	return this;
}
Map.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
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
	return '';
};
Map.prototype.getLifecycleContainer = function () {
	return {};
};
Map.prototype.setLifecycleContainer = function () {
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