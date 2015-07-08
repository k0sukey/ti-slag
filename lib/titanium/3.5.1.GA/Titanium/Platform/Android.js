function Android(properties) {
	properties = properties || {};
	this.API_LEVEL = properties.API_LEVEL || 0;
	this.PHYSICAL_SIZE_CATEGORY_LARGE = properties.PHYSICAL_SIZE_CATEGORY_LARGE || 0;
	this.PHYSICAL_SIZE_CATEGORY_NORMAL = properties.PHYSICAL_SIZE_CATEGORY_NORMAL || 0;
	this.PHYSICAL_SIZE_CATEGORY_SMALL = properties.PHYSICAL_SIZE_CATEGORY_SMALL || 0;
	this.PHYSICAL_SIZE_CATEGORY_UNDEFINED = properties.PHYSICAL_SIZE_CATEGORY_UNDEFINED || 0;
	this.PHYSICAL_SIZE_CATEGORY_XLARGE = properties.PHYSICAL_SIZE_CATEGORY_XLARGE || 0;
	this.apiName = 'Ti.Platform.Android';
	this.bubbleParent = properties.bubbleParent || true;
	this.physicalSizeCategory = properties.physicalSizeCategory || 0;
	return this;
}
Android.prototype.addEventListener = function () {
};
Android.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Android.prototype.fireEvent = function () {
};
Android.prototype.getApiName = function () {
	return '';
};
Android.prototype.getBubbleParent = function () {
	return true;
};
Android.prototype.getPhysicalSizeCategory = function () {
	return 0;
};
Android.prototype.removeEventListener = function () {
};
Android.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new Android(properties);
};