function Emails(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Cloud.Emails';
	this.bubbleParent = properties.bubbleParent || undefined;
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
Emails.prototype.send = function () {
};
Emails.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new Emails(properties);
};