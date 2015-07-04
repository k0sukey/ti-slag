function TableViewStyle(properties) {
	properties = properties || {};
	this.GROUPED = properties.GROUPED || undefined;
	this.PLAIN = properties.PLAIN || undefined;
	this.apiName = 'Ti.UI.iPhone.TableViewStyle';
	this.bubbleParent = properties.bubbleParent || undefined;
	return this;
}
TableViewStyle.prototype.addEventListener = function () {
};
TableViewStyle.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
TableViewStyle.prototype.fireEvent = function () {
};
TableViewStyle.prototype.getApiName = function () {
	return '';
};
TableViewStyle.prototype.getBubbleParent = function () {
	return true;
};
TableViewStyle.prototype.removeEventListener = function () {
};
TableViewStyle.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new TableViewStyle(properties);
};