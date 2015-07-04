function TableViewScrollPosition(properties) {
	properties = properties || {};
	this.BOTTOM = properties.BOTTOM || undefined;
	this.MIDDLE = properties.MIDDLE || undefined;
	this.NONE = properties.NONE || undefined;
	this.TOP = properties.TOP || undefined;
	this.apiName = 'Ti.UI.iPhone.TableViewScrollPosition';
	this.bubbleParent = properties.bubbleParent || undefined;
	return this;
}
TableViewScrollPosition.prototype.addEventListener = function () {
};
TableViewScrollPosition.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
TableViewScrollPosition.prototype.fireEvent = function () {
};
TableViewScrollPosition.prototype.getApiName = function () {
	return '';
};
TableViewScrollPosition.prototype.getBubbleParent = function () {
	return true;
};
TableViewScrollPosition.prototype.removeEventListener = function () {
};
TableViewScrollPosition.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new TableViewScrollPosition(properties);
};