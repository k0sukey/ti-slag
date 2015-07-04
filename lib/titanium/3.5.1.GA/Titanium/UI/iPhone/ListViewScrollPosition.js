function ListViewScrollPosition(properties) {
	properties = properties || {};
	this.BOTTOM = properties.BOTTOM || undefined;
	this.MIDDLE = properties.MIDDLE || undefined;
	this.NONE = properties.NONE || undefined;
	this.TOP = properties.TOP || undefined;
	this.apiName = 'Ti.UI.iPhone.ListViewScrollPosition';
	return this;
}
ListViewScrollPosition.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new ListViewScrollPosition(properties);
};