function DisplayCaps(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Platform.DisplayCaps';
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
	return '';
};
DisplayCaps.prototype.getBubbleParent = function () {
	return true;
};
DisplayCaps.prototype.getDensity = function () {
	return '';
};
DisplayCaps.prototype.getDpi = function () {
	return 0;
};
DisplayCaps.prototype.getLifecycleContainer = function () {
	return {};
};
DisplayCaps.prototype.getLogicalDensityFactor = function () {
	return 0;
};
DisplayCaps.prototype.getPlatformHeight = function () {
	return 0;
};
DisplayCaps.prototype.getPlatformWidth = function () {
	return 0;
};
DisplayCaps.prototype.getXdpi = function () {
	return 0;
};
DisplayCaps.prototype.getYdpi = function () {
	return 0;
};
DisplayCaps.prototype.removeEventListener = function () {
};
DisplayCaps.prototype.setBubbleParent = function () {
};
DisplayCaps.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new DisplayCaps(properties);
};