function TableViewStyle(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iPhone.TableViewStyle';
	this.GROUPED = properties.GROUPED || 0;
	this.PLAIN = properties.PLAIN || 0;
	return this;
}
TableViewStyle.prototype.addEventListener = function () {
};
TableViewStyle.prototype.removeEventListener = function () {
};
TableViewStyle.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
TableViewStyle.prototype.fireEvent = function () {
};
TableViewStyle.prototype.getBubbleParent = function () {
	return true;
};
TableViewStyle.prototype.setBubbleParent = function () {
};
TableViewStyle.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new TableViewStyle(properties);
};