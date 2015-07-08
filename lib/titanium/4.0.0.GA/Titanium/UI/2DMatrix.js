function TwoDMatrix(properties) {
	properties = properties || {};
	this.a = properties.a || 0;
	this.apiName = 'Ti.UI.2DMatrix';
	this.b = properties.b || 0;
	this.bubbleParent = properties.bubbleParent || true;
	this.c = properties.c || 0;
	this.d = properties.d || 0;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.tx = properties.tx || 0;
	this.ty = properties.ty || 0;
	return this;
}
TwoDMatrix.prototype.addEventListener = function () {
};
TwoDMatrix.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
TwoDMatrix.prototype.fireEvent = function () {
};
TwoDMatrix.prototype.getA = function () {
	return 0;
};
TwoDMatrix.prototype.getApiName = function () {
	return '';
};
TwoDMatrix.prototype.getB = function () {
	return 0;
};
TwoDMatrix.prototype.getBubbleParent = function () {
	return true;
};
TwoDMatrix.prototype.getC = function () {
	return 0;
};
TwoDMatrix.prototype.getD = function () {
	return 0;
};
TwoDMatrix.prototype.getLifecycleContainer = function () {
	return {};
};
TwoDMatrix.prototype.getTx = function () {
	return 0;
};
TwoDMatrix.prototype.getTy = function () {
	return 0;
};
TwoDMatrix.prototype.invert = function () {
	return {};
};
TwoDMatrix.prototype.multiply = function () {
	return {};
};
TwoDMatrix.prototype.removeEventListener = function () {
};
TwoDMatrix.prototype.rotate = function () {
	return {};
};
TwoDMatrix.prototype.scale = function () {
	return {};
};
TwoDMatrix.prototype.setA = function () {
};
TwoDMatrix.prototype.setB = function () {
};
TwoDMatrix.prototype.setBubbleParent = function () {
};
TwoDMatrix.prototype.setC = function () {
};
TwoDMatrix.prototype.setD = function () {
};
TwoDMatrix.prototype.setLifecycleContainer = function () {
};
TwoDMatrix.prototype.setTx = function () {
};
TwoDMatrix.prototype.setTy = function () {
};
TwoDMatrix.prototype.translate = function () {
	return {};
};
module.exports = function (properties) {
	return new TwoDMatrix(properties);
};