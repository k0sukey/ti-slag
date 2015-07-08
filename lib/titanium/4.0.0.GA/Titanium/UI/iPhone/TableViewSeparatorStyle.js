function TableViewSeparatorStyle(properties) {
	properties = properties || {};
	this.NONE = properties.NONE || 0;
	this.SINGLE_LINE = properties.SINGLE_LINE || 0;
	this.apiName = 'Ti.UI.iPhone.TableViewSeparatorStyle';
	this.bubbleParent = properties.bubbleParent || true;
	return this;
}
TableViewSeparatorStyle.prototype.addEventListener = function () {
};
TableViewSeparatorStyle.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
TableViewSeparatorStyle.prototype.fireEvent = function () {
};
TableViewSeparatorStyle.prototype.getApiName = function () {
	return '';
};
TableViewSeparatorStyle.prototype.getBubbleParent = function () {
	return true;
};
TableViewSeparatorStyle.prototype.removeEventListener = function () {
};
TableViewSeparatorStyle.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new TableViewSeparatorStyle(properties);
};