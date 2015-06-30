function iPad(properties) {
	properties = properties || {};
	this.POPOVER_ARROW_DIRECTION_ANY = properties.POPOVER_ARROW_DIRECTION_ANY || undefined;
	this.POPOVER_ARROW_DIRECTION_DOWN = properties.POPOVER_ARROW_DIRECTION_DOWN || undefined;
	this.POPOVER_ARROW_DIRECTION_LEFT = properties.POPOVER_ARROW_DIRECTION_LEFT || undefined;
	this.POPOVER_ARROW_DIRECTION_RIGHT = properties.POPOVER_ARROW_DIRECTION_RIGHT || undefined;
	this.POPOVER_ARROW_DIRECTION_UNKNOWN = properties.POPOVER_ARROW_DIRECTION_UNKNOWN || undefined;
	this.POPOVER_ARROW_DIRECTION_UP = properties.POPOVER_ARROW_DIRECTION_UP || undefined;
	this.apiName = 'Titanium.UI.iPad';
	this.bubbleParent = properties.bubbleParent || undefined;
	return this;
}
iPad.prototype.addEventListener = function () {
};
iPad.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
iPad.prototype.createDocumentViewer = function (params) {
	var DocumentViewer = require('./iPad/DocumentViewer');
	return DocumentViewer(params);
};
iPad.prototype.createPopover = function (params) {
	var Popover = require('./iPad/Popover');
	return Popover(params);
};
iPad.prototype.createSplitWindow = function (params) {
	var SplitWindow = require('./iPad/SplitWindow');
	return SplitWindow(params);
};
iPad.prototype.fireEvent = function () {
};
iPad.prototype.getApiName = function () {
	return this.apiName;
};
iPad.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
iPad.prototype.removeEventListener = function () {
};
iPad.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new iPad(properties);
};