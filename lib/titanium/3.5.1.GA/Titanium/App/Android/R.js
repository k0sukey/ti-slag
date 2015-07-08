function R(properties) {
	properties = properties || {};
	this.apiName = 'Ti.App.Android.R';
	this.bubbleParent = properties.bubbleParent || true;
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
R.prototype.removeEventListener = function () {
};
R.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new R(properties);
};