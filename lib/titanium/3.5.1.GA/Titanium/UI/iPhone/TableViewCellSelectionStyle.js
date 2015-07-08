function TableViewCellSelectionStyle(properties) {
	properties = properties || {};
	this.BLUE = properties.BLUE || 0;
	this.GRAY = properties.GRAY || 0;
	this.NONE = properties.NONE || 0;
	this.apiName = 'Ti.UI.iPhone.TableViewCellSelectionStyle';
	this.bubbleParent = properties.bubbleParent || true;
	return this;
}
TableViewCellSelectionStyle.prototype.addEventListener = function () {
};
TableViewCellSelectionStyle.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
TableViewCellSelectionStyle.prototype.fireEvent = function () {
};
TableViewCellSelectionStyle.prototype.getApiName = function () {
	return '';
};
TableViewCellSelectionStyle.prototype.getBubbleParent = function () {
	return true;
};
TableViewCellSelectionStyle.prototype.removeEventListener = function () {
};
TableViewCellSelectionStyle.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new TableViewCellSelectionStyle(properties);
};