function SocialIntegrations(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Cloud.SocialIntegrations';
	this.lifecycleContainer = properties.lifecycleContainer || {};
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
SocialIntegrations.prototype.searchFacebookFriends = function () {
};
SocialIntegrations.prototype.getBubbleParent = function () {
	return true;
};
SocialIntegrations.prototype.setBubbleParent = function () {
};
SocialIntegrations.prototype.getApiName = function () {
	return '';
};
SocialIntegrations.prototype.getLifecycleContainer = function () {
	return {};
};
SocialIntegrations.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new SocialIntegrations(properties);
};