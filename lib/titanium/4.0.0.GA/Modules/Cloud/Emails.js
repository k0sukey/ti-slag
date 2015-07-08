function Emails(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Cloud.Emails';
	this.bubbleParent = properties.bubbleParent || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Emails.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Emails.prototype.getApiName = function () {
	return '';
};
Emails.prototype.getBubbleParent = function () {
	return true;
};
Emails.prototype.getLifecycleContainer = function () {
	return {};
};
Emails.prototype.send = function () {
};
Emails.prototype.setBubbleParent = function () {
};
Emails.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Emails(properties);
};