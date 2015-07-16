function TagTechnologyNdefFormatable(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Nfc.TagTechnologyNdefFormatable';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.tag = properties.tag || {};
	return this;
}
TagTechnologyNdefFormatable.prototype.isValid = function () {
	return true;
};
TagTechnologyNdefFormatable.prototype.close = function () {
};
TagTechnologyNdefFormatable.prototype.connect = function () {
};
TagTechnologyNdefFormatable.prototype.isConnected = function () {
	return true;
};
TagTechnologyNdefFormatable.prototype.format = function () {
};
TagTechnologyNdefFormatable.prototype.formatReadOnly = function () {
};
TagTechnologyNdefFormatable.prototype.getApiName = function () {
	return '';
};
TagTechnologyNdefFormatable.prototype.getLifecycleContainer = function () {
	return {};
};
TagTechnologyNdefFormatable.prototype.setLifecycleContainer = function () {
};
TagTechnologyNdefFormatable.prototype.getTag = function () {
	return {};
};
TagTechnologyNdefFormatable.prototype.setTag = function () {
};
module.exports = function (properties) {
	return new TagTechnologyNdefFormatable(properties);
};