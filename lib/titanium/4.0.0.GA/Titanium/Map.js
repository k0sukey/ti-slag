function Map(properties) {
	properties = properties || {};
	this.ANNOTATION_DRAG_STATE_CANCEL = properties.ANNOTATION_DRAG_STATE_CANCEL || undefined;
	this.ANNOTATION_DRAG_STATE_DRAG = properties.ANNOTATION_DRAG_STATE_DRAG || undefined;
	this.ANNOTATION_DRAG_STATE_END = properties.ANNOTATION_DRAG_STATE_END || undefined;
	this.ANNOTATION_DRAG_STATE_NONE = properties.ANNOTATION_DRAG_STATE_NONE || undefined;
	this.ANNOTATION_DRAG_STATE_START = properties.ANNOTATION_DRAG_STATE_START || undefined;
	this.ANNOTATION_GREEN = properties.ANNOTATION_GREEN || undefined;
	this.ANNOTATION_PURPLE = properties.ANNOTATION_PURPLE || undefined;
	this.ANNOTATION_RED = properties.ANNOTATION_RED || undefined;
	this.HYBRID_TYPE = properties.HYBRID_TYPE || undefined;
	this.SATELLITE_TYPE = properties.SATELLITE_TYPE || undefined;
	this.STANDARD_TYPE = properties.STANDARD_TYPE || undefined;
	this.TERRAIN_TYPE = properties.TERRAIN_TYPE || undefined;
	this.apiName = 'Ti.Map';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	return this;
}
Map.prototype.addEventListener = function () {
};
Map.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
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
	return '';
};
Map.prototype.getBubbleParent = function () {
	return true;
};
Map.prototype.getLifecycleContainer = function () {
	return {};
};
Map.prototype.removeEventListener = function () {
};
Map.prototype.setBubbleParent = function () {
};
Map.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Map(properties);
};