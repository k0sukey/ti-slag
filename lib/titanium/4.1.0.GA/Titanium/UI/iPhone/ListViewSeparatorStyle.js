function ListViewSeparatorStyle(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iPhone.ListViewSeparatorStyle';
	this.NONE = properties.NONE || 0;
	this.SINGLE_LINE = properties.SINGLE_LINE || 0;
	return this;
}
ListViewSeparatorStyle.prototype.addEventListener = function () {
};
ListViewSeparatorStyle.prototype.removeEventListener = function () {
};
ListViewSeparatorStyle.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ListViewSeparatorStyle.prototype.fireEvent = function () {
};
ListViewSeparatorStyle.prototype.getBubbleParent = function () {
	return true;
};
ListViewSeparatorStyle.prototype.setBubbleParent = function () {
};
ListViewSeparatorStyle.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new ListViewSeparatorStyle(properties);
};