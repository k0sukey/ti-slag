function ListViewStyle(properties) {
	properties = properties || {};
	this.GROUPED = properties.GROUPED || 0;
	this.PLAIN = properties.PLAIN || 0;
	this.apiName = 'Ti.UI.iPhone.ListViewStyle';
	return this;
}
ListViewStyle.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new ListViewStyle(properties);
};