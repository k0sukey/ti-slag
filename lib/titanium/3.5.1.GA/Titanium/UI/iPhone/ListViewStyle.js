function ListViewStyle(properties) {
	properties = properties || {};
	this.GROUPED = properties.GROUPED || undefined;
	this.PLAIN = properties.PLAIN || undefined;
	this.apiName = 'Ti.UI.iPhone.ListViewStyle';
	return this;
}
ListViewStyle.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new ListViewStyle(properties);
};