function SocialIntegrations(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Cloud.SocialIntegrations';
	this.bubbleParent = properties.bubbleParent || true;
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
	return '';
};
SocialIntegrations.prototype.getBubbleParent = function () {
	return true;
};
SocialIntegrations.prototype.searchFacebookFriends = function () {
};
SocialIntegrations.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new SocialIntegrations(properties);
};