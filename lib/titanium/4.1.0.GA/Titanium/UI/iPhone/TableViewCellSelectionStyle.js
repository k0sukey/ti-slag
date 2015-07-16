function TableViewCellSelectionStyle(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iPhone.TableViewCellSelectionStyle';
	this.BLUE = properties.BLUE || 0;
	this.GRAY = properties.GRAY || 0;
	this.NONE = properties.NONE || 0;
	return this;
}
TableViewCellSelectionStyle.prototype.addEventListener = function () {
};
TableViewCellSelectionStyle.prototype.removeEventListener = function () {
};
TableViewCellSelectionStyle.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
TableViewCellSelectionStyle.prototype.fireEvent = function () {
};
TableViewCellSelectionStyle.prototype.getBubbleParent = function () {
	return true;
};
TableViewCellSelectionStyle.prototype.setBubbleParent = function () {
};
TableViewCellSelectionStyle.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new TableViewCellSelectionStyle(properties);
};