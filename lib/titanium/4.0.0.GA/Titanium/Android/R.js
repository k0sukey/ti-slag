function R(properties) {
	properties = properties || {};
	this.anim = properties.anim || undefined;
	this.apiName = 'Ti.Android.R';
	this.array = properties.array || undefined;
	this.attr = properties.attr || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.color = properties.color || undefined;
	this.dimen = properties.dimen || undefined;
	this.drawable = properties.drawable || undefined;
	this.id = properties.id || undefined;
	this.integer = properties.integer || undefined;
	this.layout = properties.layout || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.string = properties.string || undefined;
	this.style = properties.style || undefined;
	this.styleable = properties.styleable || undefined;
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