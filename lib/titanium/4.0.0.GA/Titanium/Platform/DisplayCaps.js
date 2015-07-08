function DisplayCaps(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Platform.DisplayCaps';
	this.bubbleParent = properties.bubbleParent || true;
	this.density = properties.density || '';
	this.dpi = properties.dpi || 0;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.logicalDensityFactor = properties.logicalDensityFactor || 0;
	this.platformHeight = properties.platformHeight || 0;
	this.platformWidth = properties.platformWidth || 0;
	this.xdpi = properties.xdpi || 0;
	this.ydpi = properties.ydpi || 0;
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