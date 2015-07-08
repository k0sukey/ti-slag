function ListViewScrollPosition(properties) {
	properties = properties || {};
	this.BOTTOM = properties.BOTTOM || 0;
	this.MIDDLE = properties.MIDDLE || 0;
	this.NONE = properties.NONE || 0;
	this.TOP = properties.TOP || 0;
	this.apiName = 'Ti.UI.iPhone.ListViewScrollPosition';
	return this;
}
ListViewScrollPosition.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new ListViewScrollPosition(properties);
};