function Intent(properties) {
	properties = properties || {};
	this.action = properties.action || '';
	this.apiName = 'Ti.Android.Intent';
	this.bubbleParent = properties.bubbleParent || true;
	this.className = properties.className || '';
	this.data = properties.data || '';
	this.flags = properties.flags || 0;
	this.packageName = properties.packageName || '';
	this.type = properties.type || '';
	this.url = properties.url || '';
	return this;
}
Intent.prototype.addCategory = function () {
};
Intent.prototype.addEventListener = function () {
};
Intent.prototype.addFlags = function () {
};
Intent.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Intent.prototype.fireEvent = function () {
};
Intent.prototype.getAction = function () {
	return '';
};
Intent.prototype.getApiName = function () {
	return '';
};
Intent.prototype.getBlobExtra = function () {
	return {};
};
Intent.prototype.getBooleanExtra = function () {
	return true;
};
Intent.prototype.getBubbleParent = function () {
	return true;
};
Intent.prototype.getClassName = function () {
	return '';
};
Intent.prototype.getData = function () {
	return '';
};
Intent.prototype.getDoubleExtra = function () {
	return 0;
};
Intent.prototype.getFlags = function () {
	return 0;
};
Intent.prototype.getIntExtra = function () {
	return 0;
};
Intent.prototype.getLongExtra = function () {
	return 0;
};
Intent.prototype.getPackageName = function () {
	return '';
};
Intent.prototype.getStringExtra = function () {
	return '';
};
Intent.prototype.getType = function () {
	return '';
};
Intent.prototype.getUrl = function () {
	return '';
};
Intent.prototype.hasExtra = function () {
	return true;
};
Intent.prototype.putExtra = function () {
};
Intent.prototype.putExtraUri = function () {
};
Intent.prototype.removeEventListener = function () {
};
Intent.prototype.setBubbleParent = function () {
};
Intent.prototype.setFlags = function () {
};
module.exports = function (properties) {
	return new Intent(properties);
};