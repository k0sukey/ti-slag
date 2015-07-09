function DisplayCaps(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Platform.DisplayCaps';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.density = properties.density || '';
	this.dpi = properties.dpi || 0;
	this.logicalDensityFactor = properties.logicalDensityFactor || 0;
	this.platformHeight = properties.platformHeight || 0;
	this.platformWidth = properties.platformWidth || 0;
	this.xdpi = properties.xdpi || 0;
	this.ydpi = properties.ydpi || 0;
	return this;
}
DisplayCaps.prototype.addEventListener = function () {
};
DisplayCaps.prototype.removeEventListener = function () {
};
DisplayCaps.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
DisplayCaps.prototype.fireEvent = function () {
};
DisplayCaps.prototype.getBubbleParent = function () {
	return {};
};
DisplayCaps.prototype.setBubbleParent = function () {
};
DisplayCaps.prototype.getApiName = function () {
	return {};
};
DisplayCaps.prototype.getLifecycleContainer = function () {
	return {};
};
DisplayCaps.prototype.setLifecycleContainer = function () {
};
DisplayCaps.prototype.getDensity = function () {
	return {};
};
DisplayCaps.prototype.getDpi = function () {
	return {};
};
DisplayCaps.prototype.getLogicalDensityFactor = function () {
	return {};
};
DisplayCaps.prototype.getPlatformHeight = function () {
	return {};
};
DisplayCaps.prototype.getPlatformWidth = function () {
	return {};
};
DisplayCaps.prototype.getXdpi = function () {
	return {};
};
DisplayCaps.prototype.getYdpi = function () {
	return {};
};
module.exports = function (properties) {
	return new DisplayCaps(properties);
};