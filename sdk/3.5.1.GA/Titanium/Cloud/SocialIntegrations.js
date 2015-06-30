function SocialIntegrations(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Cloud.SocialIntegrations';
	this.bubbleParent = properties.bubbleParent || undefined;
	return this;
}
SocialIntegrations.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
SocialIntegrations.prototype.externalAccountLink = function () {
};
SocialIntegrations.prototype.externalAccountLogin = function () {
};
SocialIntegrations.prototype.externalAccountUnlink = function () {
};
SocialIntegrations.prototype.getApiName = function () {
	return this.apiName;
};
SocialIntegrations.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
SocialIntegrations.prototype.searchFacebookFriends = function () {
};
SocialIntegrations.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new SocialIntegrations(properties);
};