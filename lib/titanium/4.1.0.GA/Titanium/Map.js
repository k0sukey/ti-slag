function Map(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Map';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.ANNOTATION_DRAG_STATE_NONE = properties.ANNOTATION_DRAG_STATE_NONE || 0;
	this.ANNOTATION_DRAG_STATE_START = properties.ANNOTATION_DRAG_STATE_START || 0;
	this.ANNOTATION_DRAG_STATE_DRAG = properties.ANNOTATION_DRAG_STATE_DRAG || 0;
	this.ANNOTATION_DRAG_STATE_CANCEL = properties.ANNOTATION_DRAG_STATE_CANCEL || 0;
	this.ANNOTATION_DRAG_STATE_END = properties.ANNOTATION_DRAG_STATE_END || 0;
	this.ANNOTATION_GREEN = properties.ANNOTATION_GREEN || 0;
	this.ANNOTATION_PURPLE = properties.ANNOTATION_PURPLE || 0;
	this.ANNOTATION_RED = properties.ANNOTATION_RED || 0;
	this.HYBRID_TYPE = properties.HYBRID_TYPE || 0;
	this.SATELLITE_TYPE = properties.SATELLITE_TYPE || 0;
	this.STANDARD_TYPE = properties.STANDARD_TYPE || 0;
	this.TERRAIN_TYPE = properties.TERRAIN_TYPE || 0;
	return this;
}
Map.prototype.addEventListener = function () {
};
Map.prototype.removeEventListener = function () {
};
Map.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Map.prototype.fireEvent = function () {
};
Map.prototype.createAnnotation = function () {
	throw new Error('Ti.Map.createAnnotation was deprecated, since 3.2.0');
};
Map.prototype.getBubbleParent = function () {
	return true;
};
Map.prototype.setBubbleParent = function () {
};
Map.prototype.getApiName = function () {
	return '';
};
Map.prototype.getLifecycleContainer = function () {
	return {};
};
Map.prototype.setLifecycleContainer = function () {
};
Map.prototype.createView = function () {
	throw new Error('Ti.Map.createView was deprecated, since 3.2.0');
};
module.exports = function (properties) {
	return new Map(properties);
};