function ActivityIndicator(properties) {
	properties = properties || {};
	this.apiName = 'Ti.UI.ActivityIndicator';
	this.bottom = properties.bottom || 0;
	this.bubbleParent = properties.bubbleParent || true;
	this.color = properties.color || '';
	this.font = properties.font || {};
	this.height = properties.height || '';
	this.indicatorColor = properties.indicatorColor || '';
	this.indicatorDiameter = properties.indicatorDiameter || '';
	this.left = properties.left || 0;
	this.message = properties.message || '';
	this.messageid = properties.messageid || '';
	this.right = properties.right || 0;
	this.style = properties.style || 0;
	this.top = properties.top || 0;
	this.width = properties.width || '';
	return this;
}
ActivityIndicator.prototype.add = function () {
};
ActivityIndicator.prototype.addEventListener = function () {
};
ActivityIndicator.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ActivityIndicator.prototype.fireEvent = function () {
};
ActivityIndicator.prototype.getApiName = function () {
	return '';
};
ActivityIndicator.prototype.getBottom = function () {
	return 0;
};
ActivityIndicator.prototype.getBubbleParent = function () {
	return true;
};
ActivityIndicator.prototype.getColor = function () {
	return '';
};
ActivityIndicator.prototype.getFont = function () {
	return {};
};
ActivityIndicator.prototype.getHeight = function () {
	return '';
};
ActivityIndicator.prototype.getIndicatorColor = function () {
	return '';
};
ActivityIndicator.prototype.getIndicatorDiameter = function () {
	return '';
};
ActivityIndicator.prototype.getLeft = function () {
	return 0;
};
ActivityIndicator.prototype.getMessage = function () {
	return '';
};
ActivityIndicator.prototype.getMessageid = function () {
	return '';
};
ActivityIndicator.prototype.getRight = function () {
	return 0;
};
ActivityIndicator.prototype.getStyle = function () {
	return 0;
};
ActivityIndicator.prototype.getTop = function () {
	return 0;
};
ActivityIndicator.prototype.getWidth = function () {
	return '';
};
ActivityIndicator.prototype.hide = function () {
};
ActivityIndicator.prototype.remove = function () {
};
ActivityIndicator.prototype.removeEventListener = function () {
};
ActivityIndicator.prototype.setBottom = function () {
};
ActivityIndicator.prototype.setBubbleParent = function () {
};
ActivityIndicator.prototype.setColor = function () {
};
ActivityIndicator.prototype.setFont = function () {
};
ActivityIndicator.prototype.setHeight = function () {
};
ActivityIndicator.prototype.setIndicatorColor = function () {
};
ActivityIndicator.prototype.setIndicatorDiameter = function () {
};
ActivityIndicator.prototype.setLeft = function () {
};
ActivityIndicator.prototype.setMessage = function () {
};
ActivityIndicator.prototype.setMessageid = function () {
};
ActivityIndicator.prototype.setRight = function () {
};
ActivityIndicator.prototype.setStyle = function () {
};
ActivityIndicator.prototype.setTop = function () {
};
ActivityIndicator.prototype.setWidth = function () {
};
ActivityIndicator.prototype.show = function () {
};
module.exports = function (properties) {
	return new ActivityIndicator(properties);
};