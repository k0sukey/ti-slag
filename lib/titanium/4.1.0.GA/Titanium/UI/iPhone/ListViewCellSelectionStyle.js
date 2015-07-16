function ListViewCellSelectionStyle(properties) {
	properties = properties || {};
	this.apiName = 'Ti.UI.iPhone.ListViewCellSelectionStyle';
	this.BLUE = properties.BLUE || 0;
	this.GRAY = properties.GRAY || 0;
	this.NONE = properties.NONE || 0;
	return this;
}
ListViewCellSelectionStyle.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new ListViewCellSelectionStyle(properties);
};