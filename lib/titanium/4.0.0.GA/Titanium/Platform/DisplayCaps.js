function DisplayCaps(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Platform.DisplayCaps';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.density = properties.density || undefined;
	this.dpi = properties.dpi || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.logicalDensityFactor = properties.logicalDensityFactor || undefined;
	this.platformHeight = properties.platformHeight || undefined;
	this.platformWidth = properties.platformWidth || undefined;
	this.xdpi = properties.xdpi || undefined;
	this.ydpi = properties.ydpi || undefined;
	return this;
}
DisplayCaps.prototype.addEventListener = function () {
};
DisplayCaps.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
DisplayCaps.prototype.fireEvent = function () {
};
DisplayCaps.prototype.getApiName = function () {
	return this.apiName;
};
DisplayCaps.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
DisplayCaps.prototype.getDensity = function () {
	return this.density;
};
DisplayCaps.prototype.getDpi = function () {
	return this.dpi;
};
DisplayCaps.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
DisplayCaps.prototype.getLogicalDensityFactor = function () {
	return this.logicalDensityFactor;
};
DisplayCaps.prototype.getPlatformHeight = function () {
	return this.platformHeight;
};
DisplayCaps.prototype.getPlatformWidth = function () {
	return this.platformWidth;
};
DisplayCaps.prototype.getXdpi = function () {
	return this.xdpi;
};
DisplayCaps.prototype.getYdpi = function () {
	return this.ydpi;
};
DisplayCaps.prototype.removeEventListener = function () {
};
DisplayCaps.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
DisplayCaps.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new DisplayCaps(properties);
};