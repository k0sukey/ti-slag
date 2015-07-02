function Emails(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Cloud.Emails';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	return this;
}
Emails.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Emails.prototype.getApiName = function () {
	return this.apiName;
};
Emails.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Emails.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Emails.prototype.send = function () {
};
Emails.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Emails.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new Emails(properties);
};