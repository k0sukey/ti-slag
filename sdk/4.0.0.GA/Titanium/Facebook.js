function Facebook(properties) {
	properties = properties || {};

	this.BUTTON_STYLE_NORMAL = properties.BUTTON_STYLE_NORMAL || undefined;
	this.BUTTON_STYLE_WIDE = properties.BUTTON_STYLE_WIDE || undefined;
	this.accessToken = properties.accessToken || undefined;
	this.apiName = 'Titanium.Facebook';
	this.appid = properties.appid || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.expirationDate = properties.expirationDate || undefined;
	this.forceDialogAuth = properties.forceDialogAuth || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.loggedIn = properties.loggedIn || undefined;
	this.permissions = properties.permissions || undefined;
	this.uid = properties.uid || undefined;

	return this;
}

Facebook.prototype.addEventListener = function(){};

Facebook.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Facebook.prototype.authorize = function(){};

Facebook.prototype.createLoginButton = function(params){ var LoginButton = require('./Facebook/LoginButton'); return LoginButton(params); };

Facebook.prototype.dialog = function(){};

Facebook.prototype.fireEvent = function(){};

Facebook.prototype.getAccessToken = function(){ return this.accessToken; };

Facebook.prototype.getApiName = function(){ return this.apiName; };

Facebook.prototype.getAppid = function(){ return this.appid; };

Facebook.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Facebook.prototype.getForceDialogAuth = function(){ return this.forceDialogAuth; };

Facebook.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

Facebook.prototype.getLoggedIn = function(){ return this.loggedIn; };

Facebook.prototype.getPermissions = function(){ return this.permissions; };

Facebook.prototype.getUid = function(){ return this.uid; };

Facebook.prototype.logout = function(){};

Facebook.prototype.removeEventListener = function(){};

Facebook.prototype.request = function(){};

Facebook.prototype.requestWithGraphPath = function(){};

Facebook.prototype.setAccessToken = function(property){ this.accessToken = property; };

Facebook.prototype.setAppid = function(property){ this.appid = property; };

Facebook.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Facebook.prototype.setExpirationDate = function(property){ this.expirationDate = property; };

Facebook.prototype.setForceDialogAuth = function(property){ this.forceDialogAuth = property; };

Facebook.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

Facebook.prototype.setLoggedIn = function(property){ this.loggedIn = property; };

Facebook.prototype.setPermissions = function(property){ this.permissions = property; };

Facebook.prototype.setUid = function(property){ this.uid = property; };

module.exports = function(properties){ return new Facebook(properties); };