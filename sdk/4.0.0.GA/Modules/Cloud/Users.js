function Users(properties) {
	properties = properties || {};

	this.apiName = 'Modules.Cloud.Users';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;

	return this;
}

Users.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Users.prototype.create = function(){};

Users.prototype.getApiName = function(){ return this.apiName; };

Users.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Users.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

Users.prototype.login = function(){};

Users.prototype.logout = function(){};

Users.prototype.query = function(){};

Users.prototype.remove = function(){};

Users.prototype.requestResetPassword = function(){};

Users.prototype.resendConfirmation = function(){};

Users.prototype.search = function(){};

Users.prototype.secureCreate = function(){};

Users.prototype.secureLogin = function(){};

Users.prototype.secureStatus = function(){ return true; };

Users.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Users.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

Users.prototype.show = function(){};

Users.prototype.showMe = function(){};

Users.prototype.update = function(){};

module.exports = function(properties){ return new Users(properties); };