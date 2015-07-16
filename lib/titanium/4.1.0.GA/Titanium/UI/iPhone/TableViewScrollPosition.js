function TableViewScrollPosition(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iPhone.TableViewScrollPosition';
	this.BOTTOM = properties.BOTTOM || 0;
	this.MIDDLE = properties.MIDDLE || 0;
	this.NONE = properties.NONE || 0;
	this.TOP = properties.TOP || 0;
	return this;
}
TableViewScrollPosition.prototype.addEventListener = function () {
};
TableViewScrollPosition.prototype.removeEventListener = function () {
};
TableViewScrollPosition.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
TableViewScrollPosition.prototype.fireEvent = function () {
};
TableViewScrollPosition.prototype.getBubbleParent = function () {
	return true;
};
TableViewScrollPosition.prototype.setBubbleParent = function () {
};
TableViewScrollPosition.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new TableViewScrollPosition(properties);
};