function TwoDMatrix(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.2DMatrix';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.a = properties.a || 0;
	this.b = properties.b || 0;
	this.c = properties.c || 0;
	this.d = properties.d || 0;
	this.tx = properties.tx || 0;
	this.ty = properties.ty || 0;
	return this;
}
TwoDMatrix.prototype.addEventListener = function () {
};
TwoDMatrix.prototype.removeEventListener = function () {
};
TwoDMatrix.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
TwoDMatrix.prototype.fireEvent = function () {
};
TwoDMatrix.prototype.invert = function () {
	return {};
};
TwoDMatrix.prototype.multiply = function () {
	return {};
};
TwoDMatrix.prototype.rotate = function () {
	return {};
};
TwoDMatrix.prototype.scale = function () {
	return {};
};
TwoDMatrix.prototype.translate = function () {
	return {};
};
TwoDMatrix.prototype.getBubbleParent = function () {
	return true;
};
TwoDMatrix.prototype.setBubbleParent = function () {
};
TwoDMatrix.prototype.getApiName = function () {
	return '';
};
TwoDMatrix.prototype.getLifecycleContainer = function () {
	return {};
};
TwoDMatrix.prototype.setLifecycleContainer = function () {
};
TwoDMatrix.prototype.getA = function () {
	return 0;
};
TwoDMatrix.prototype.setA = function () {
};
TwoDMatrix.prototype.getB = function () {
	return 0;
};
TwoDMatrix.prototype.setB = function () {
};
TwoDMatrix.prototype.getC = function () {
	return 0;
};
TwoDMatrix.prototype.setC = function () {
};
TwoDMatrix.prototype.getD = function () {
	return 0;
};
TwoDMatrix.prototype.setD = function () {
};
TwoDMatrix.prototype.getTx = function () {
	return 0;
};
TwoDMatrix.prototype.setTx = function () {
};
TwoDMatrix.prototype.getTy = function () {
	return 0;
};
TwoDMatrix.prototype.setTy = function () {
};
module.exports = function (properties) {
	return new TwoDMatrix(properties);
};