function Emails(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Cloud.Emails';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Emails.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Emails.prototype.send = function () {
};
Emails.prototype.getBubbleParent = function () {
	return true;
};
Emails.prototype.setBubbleParent = function () {
};
Emails.prototype.getApiName = function () {
	return '';
};
Emails.prototype.getLifecycleContainer = function () {
	return {};
};
Emails.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Emails(properties);
};