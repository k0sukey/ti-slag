function R(properties) {
	properties = properties || {};
	this.anim = properties.anim || {};
	this.apiName = 'Ti.Android.R';
	this.array = properties.array || {};
	this.attr = properties.attr || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.color = properties.color || {};
	this.dimen = properties.dimen || {};
	this.drawable = properties.drawable || {};
	this.id = properties.id || {};
	this.integer = properties.integer || {};
	this.layout = properties.layout || {};
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.string = properties.string || {};
	this.style = properties.style || {};
	this.styleable = properties.styleable || {};
	return this;
}
R.prototype.addEventListener = function () {
};
R.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
R.prototype.fireEvent = function () {
};
R.prototype.getApiName = function () {
	return '';
};
R.prototype.getBubbleParent = function () {
	return true;
};
R.prototype.getLifecycleContainer = function () {
	return {};
};
R.prototype.removeEventListener = function () {
};
R.prototype.setBubbleParent = function () {
};
R.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new R(properties);
};