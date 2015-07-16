function TagTechnology(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Nfc.TagTechnology';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.tag = properties.tag || {};
	return this;
}
TagTechnology.prototype.isValid = function () {
	return true;
};
TagTechnology.prototype.close = function () {
};
TagTechnology.prototype.connect = function () {
};
TagTechnology.prototype.isConnected = function () {
	return true;
};
TagTechnology.prototype.getApiName = function () {
	return '';
};
TagTechnology.prototype.getLifecycleContainer = function () {
	return {};
};
TagTechnology.prototype.setLifecycleContainer = function () {
};
TagTechnology.prototype.getTag = function () {
	return {};
};
TagTechnology.prototype.setTag = function () {
};
module.exports = function (properties) {
	return new TagTechnology(properties);
};