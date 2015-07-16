function TableViewSeparatorStyle(properties) {
	properties = properties || {};
	this.apiName = 'Ti.UI.MobileWeb.TableViewSeparatorStyle';
	this.NONE = properties.NONE || 0;
	this.SINGLE_LINE = properties.SINGLE_LINE || 0;
	return this;
}
TableViewSeparatorStyle.prototype.addEventListener = function () {
};
TableViewSeparatorStyle.prototype.removeEventListener = function () {
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
module.exports = function (properties) {
	return new TableViewSeparatorStyle(properties);
};