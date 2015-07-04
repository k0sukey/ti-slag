function ListViewSeparatorStyle(properties) {
	properties = properties || {};
	this.NONE = properties.NONE || undefined;
	this.SINGLE_LINE = properties.SINGLE_LINE || undefined;
	this.apiName = 'Ti.UI.iPhone.ListViewSeparatorStyle';
	this.bubbleParent = properties.bubbleParent || undefined;
	return this;
}
ListViewSeparatorStyle.prototype.addEventListener = function () {
};
ListViewSeparatorStyle.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ListViewSeparatorStyle.prototype.fireEvent = function () {
};
ListViewSeparatorStyle.prototype.getApiName = function () {
	return '';
};
ListViewSeparatorStyle.prototype.getBubbleParent = function () {
	return true;
};
ListViewSeparatorStyle.prototype.removeEventListener = function () {
};
ListViewSeparatorStyle.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new ListViewSeparatorStyle(properties);
};