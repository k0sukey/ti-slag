function iPhone(properties) {
	properties = properties || {};

	this.MODAL_PRESENTATION_CURRENT_CONTEXT = properties.MODAL_PRESENTATION_CURRENT_CONTEXT || undefined;
	this.MODAL_PRESENTATION_FORMSHEET = properties.MODAL_PRESENTATION_FORMSHEET || undefined;
	this.MODAL_PRESENTATION_FULLSCREEN = properties.MODAL_PRESENTATION_FULLSCREEN || undefined;
	this.MODAL_PRESENTATION_PAGESHEET = properties.MODAL_PRESENTATION_PAGESHEET || undefined;
	this.MODAL_TRANSITION_STYLE_COVER_VERTICAL = properties.MODAL_TRANSITION_STYLE_COVER_VERTICAL || undefined;
	this.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE = properties.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE || undefined;
	this.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL = properties.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL || undefined;
	this.MODAL_TRANSITION_STYLE_PARTIAL_CURL = properties.MODAL_TRANSITION_STYLE_PARTIAL_CURL || undefined;
	this.apiName = 'Titanium.UI.iPhone';
	this.appBadge = properties.appBadge || undefined;
	this.appSupportsShakeToEdit = properties.appSupportsShakeToEdit || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.statusBarHidden = properties.statusBarHidden || undefined;
	this.statusBarStyle = properties.statusBarStyle || undefined;

	return this;
}

iPhone.prototype.addEventListener = function(){};

iPhone.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

iPhone.prototype.createNavigationGroup = function(params){ var NavigationGroup = require('./iPhone/NavigationGroup'); return NavigationGroup(params); };

iPhone.prototype.fireEvent = function(){};

iPhone.prototype.getApiName = function(){ return this.apiName; };

iPhone.prototype.getAppBadge = function(){ return this.appBadge; };

iPhone.prototype.getAppSupportsShakeToEdit = function(){ return this.appSupportsShakeToEdit; };

iPhone.prototype.getBubbleParent = function(){ return this.bubbleParent; };

iPhone.prototype.getStatusBarHidden = function(){ return this.statusBarHidden; };

iPhone.prototype.getStatusBarStyle = function(){ return this.statusBarStyle; };

iPhone.prototype.hideStatusBar = function(){};

iPhone.prototype.removeEventListener = function(){};

iPhone.prototype.setAppBadge = function(property){ this.appBadge = property; };

iPhone.prototype.setAppSupportsShakeToEdit = function(property){ this.appSupportsShakeToEdit = property; };

iPhone.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

iPhone.prototype.showStatusBar = function(){};

module.exports = function(properties){ return new iPhone(properties); };