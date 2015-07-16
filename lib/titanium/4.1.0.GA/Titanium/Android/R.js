function R(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Android.R';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.anim = properties.anim || {};
	this.array = properties.array || {};
	this.attr = properties.attr || {};
	this.color = properties.color || {};
	this.dimen = properties.dimen || {};
	this.drawable = properties.drawable || {};
	this.id = properties.id || {};
	this.integer = properties.integer || {};
	this.layout = properties.layout || {};
	this.string = properties.string || {};
	this.style = properties.style || {};
	this.styleable = properties.styleable || {};
	return this;
}
R.prototype.addEventListener = function () {
};
R.prototype.removeEventListener = function () {
};
R.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
R.prototype.fireEvent = function () {
};
R.prototype.getBubbleParent = function () {
	return true;
};
R.prototype.setBubbleParent = function () {
};
R.prototype.getApiName = function () {
	return '';
};
R.prototype.getLifecycleContainer = function () {
	return {};
};
R.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new R(properties);
};