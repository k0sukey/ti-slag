function ActivityIndicator(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.ActivityIndicator';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.bottom = properties.bottom || 0;
	this.height = properties.height || '';
	this.left = properties.left || 0;
	this.right = properties.right || 0;
	this.top = properties.top || 0;
	this.width = properties.width || '';
	this.color = properties.color || '';
	this.font = properties.font || {};
	this.message = properties.message || '';
	this.messageid = properties.messageid || '';
	this.style = properties.style || 0;
	this.indicatorColor = properties.indicatorColor || '';
	this.indicatorDiameter = properties.indicatorDiameter || '';
	return this;
}
ActivityIndicator.prototype.addEventListener = function () {
};
ActivityIndicator.prototype.removeEventListener = function () {
};
ActivityIndicator.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ActivityIndicator.prototype.fireEvent = function () {
};
ActivityIndicator.prototype.finishLayout = function () {
	throw new Error('Ti.UI.ActivityIndicator.finishLayout was deprecated, since 3.0.0');
};
ActivityIndicator.prototype.startLayout = function () {
	throw new Error('Ti.UI.ActivityIndicator.startLayout was deprecated, since 3.0.0');
};
ActivityIndicator.prototype.updateLayout = function () {
	throw new Error('Ti.UI.ActivityIndicator.updateLayout was deprecated, since 3.0.0');
};
ActivityIndicator.prototype.add = function () {
};
ActivityIndicator.prototype.hide = function () {
};
ActivityIndicator.prototype.remove = function () {
};
ActivityIndicator.prototype.show = function () {
};
ActivityIndicator.prototype.getBubbleParent = function () {
	return true;
};
ActivityIndicator.prototype.setBubbleParent = function () {
};
ActivityIndicator.prototype.getApiName = function () {
	return '';
};
ActivityIndicator.prototype.getLifecycleContainer = function () {
	return {};
};
ActivityIndicator.prototype.setLifecycleContainer = function () {
};
ActivityIndicator.prototype.getBottom = function () {
	return '';
};
ActivityIndicator.prototype.setBottom = function () {
};
ActivityIndicator.prototype.getHeight = function () {
	return '';
};
ActivityIndicator.prototype.setHeight = function () {
};
ActivityIndicator.prototype.getLeft = function () {
	return '';
};
ActivityIndicator.prototype.setLeft = function () {
};
ActivityIndicator.prototype.getRight = function () {
	return '';
};
ActivityIndicator.prototype.setRight = function () {
};
ActivityIndicator.prototype.getTop = function () {
	return '';
};
ActivityIndicator.prototype.setTop = function () {
};
ActivityIndicator.prototype.getWidth = function () {
	return '';
};
ActivityIndicator.prototype.setWidth = function () {
};
ActivityIndicator.prototype.getColor = function () {
	return '';
};
ActivityIndicator.prototype.setColor = function () {
};
ActivityIndicator.prototype.getFont = function () {
	return {};
};
ActivityIndicator.prototype.setFont = function () {
};
ActivityIndicator.prototype.getMessage = function () {
	return '';
};
ActivityIndicator.prototype.setMessage = function () {
};
ActivityIndicator.prototype.getMessageid = function () {
	return '';
};
ActivityIndicator.prototype.setMessageid = function () {
};
ActivityIndicator.prototype.getStyle = function () {
	return 0;
};
ActivityIndicator.prototype.setStyle = function () {
};
ActivityIndicator.prototype.getIndicatorColor = function () {
	return '';
};
ActivityIndicator.prototype.setIndicatorColor = function () {
};
ActivityIndicator.prototype.getIndicatorDiameter = function () {
	return '';
};
ActivityIndicator.prototype.setIndicatorDiameter = function () {
};
module.exports = function (properties) {
	return new ActivityIndicator(properties);
};