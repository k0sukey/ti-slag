function Popover(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.UI.iPad.Popover';
	this.arrowDirection = properties.arrowDirection || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.contentView = properties.contentView || undefined;
	this.height = properties.height || undefined;
	this.leftNavButton = properties.leftNavButton || undefined;
	this.passthroughViews = properties.passthroughViews || undefined;
	this.rightNavButton = properties.rightNavButton || undefined;
	this.title = properties.title || undefined;
	this.width = properties.width || undefined;
	return this;
}
Popover.prototype.add = function () {
};
Popover.prototype.addEventListener = function () {
};
Popover.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Popover.prototype.fireEvent = function () {
};
Popover.prototype.getApiName = function () {
	return this.apiName;
};
Popover.prototype.getArrowDirection = function () {
	return this.arrowDirection;
};
Popover.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Popover.prototype.getContentView = function () {
	return this.contentView;
};
Popover.prototype.getHeight = function () {
	return this.height;
};
Popover.prototype.getPassthroughViews = function () {
	return this.passthroughViews;
};
Popover.prototype.getTitle = function () {
	return this.title;
};
Popover.prototype.getWidth = function () {
	return this.width;
};
Popover.prototype.hide = function () {
};
Popover.prototype.remove = function () {
};
Popover.prototype.removeEventListener = function () {
};
Popover.prototype.setArrowDirection = function (property) {
	this.arrowDirection = property;
};
Popover.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Popover.prototype.setContentView = function (property) {
	this.contentView = property;
};
Popover.prototype.setHeight = function (property) {
	this.height = property;
};
Popover.prototype.setLeftNavButton = function (property) {
	this.leftNavButton = property;
};
Popover.prototype.setPassthroughViews = function (property) {
	this.passthroughViews = property;
};
Popover.prototype.setRightNavButton = function (property) {
	this.rightNavButton = property;
};
Popover.prototype.setTitle = function (property) {
	this.title = property;
};
Popover.prototype.setWidth = function (property) {
	this.width = property;
};
Popover.prototype.show = function () {
};
module.exports = function (properties) {
	return new Popover(properties);
};