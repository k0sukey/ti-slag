function TagTechnologyNdef(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Nfc.TagTechnologyNdef';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.tag = properties.tag || {};
	return this;
}
TagTechnologyNdef.prototype.isValid = function () {
	return true;
};
TagTechnologyNdef.prototype.close = function () {
};
TagTechnologyNdef.prototype.connect = function () {
};
TagTechnologyNdef.prototype.isConnected = function () {
	return true;
};
TagTechnologyNdef.prototype.canMakeReadOnly = function () {
	return true;
};
TagTechnologyNdef.prototype.getCachedNdefMessage = function () {
	return {};
};
TagTechnologyNdef.prototype.getMaxSize = function () {
	return 0;
};
TagTechnologyNdef.prototype.getNdefMessage = function () {
	return {};
};
TagTechnologyNdef.prototype.getType = function () {
	return '';
};
TagTechnologyNdef.prototype.isWritable = function () {
	return true;
};
TagTechnologyNdef.prototype.makeReadOnly = function () {
	return true;
};
TagTechnologyNdef.prototype.writeNdefMessage = function () {
};
TagTechnologyNdef.prototype.getApiName = function () {
	return '';
};
TagTechnologyNdef.prototype.getLifecycleContainer = function () {
	return {};
};
TagTechnologyNdef.prototype.setLifecycleContainer = function () {
};
TagTechnologyNdef.prototype.getTag = function () {
	return {};
};
TagTechnologyNdef.prototype.setTag = function () {
};
module.exports = function (properties) {
	return new TagTechnologyNdef(properties);
};