function Emails(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Cloud.Emails';
	this.bubbleParent = properties.bubbleParent || true;
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
Emails.prototype.send = function () {
};
Emails.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new Emails(properties);
};