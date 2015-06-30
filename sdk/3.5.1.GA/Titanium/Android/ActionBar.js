function ActionBar(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Android.ActionBar';
	this.backgroundImage = properties.backgroundImage || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.displayHomeAsUp = properties.displayHomeAsUp || undefined;
	this.homeButtonEnabled = properties.homeButtonEnabled || undefined;
	this.icon = properties.icon || undefined;
	this.logo = properties.logo || undefined;
	this.navigationMode = properties.navigationMode || undefined;
	this.onHomeIconItemSelected = properties.onHomeIconItemSelected || undefined;
	this.subtitle = properties.subtitle || undefined;
	this.title = properties.title || undefined;

	return this;
}

ActionBar.prototype.addEventListener = function(){};

ActionBar.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

ActionBar.prototype.fireEvent = function(){};

ActionBar.prototype.getApiName = function(){ return this.apiName; };

ActionBar.prototype.getBubbleParent = function(){ return this.bubbleParent; };

ActionBar.prototype.getNavigationMode = function(){ return this.navigationMode; };

ActionBar.prototype.getSubtitle = function(){ return this.subtitle; };

ActionBar.prototype.getTitle = function(){ return this.title; };

ActionBar.prototype.hide = function(){};

ActionBar.prototype.removeEventListener = function(){};

ActionBar.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

ActionBar.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

ActionBar.prototype.setDisplayHomeAsUp = function(property){ this.displayHomeAsUp = property; };

ActionBar.prototype.setDisplayShowHomeEnabled = function(){};

ActionBar.prototype.setDisplayShowTitleEnabled = function(){};

ActionBar.prototype.setHomeButtonEnabled = function(property){ this.homeButtonEnabled = property; };

ActionBar.prototype.setIcon = function(property){ this.icon = property; };

ActionBar.prototype.setLogo = function(property){ this.logo = property; };

ActionBar.prototype.setNavigationMode = function(property){ this.navigationMode = property; };

ActionBar.prototype.setOnHomeIconItemSelected = function(property){ this.onHomeIconItemSelected = property; };

ActionBar.prototype.setSubtitle = function(property){ this.subtitle = property; };

ActionBar.prototype.setTitle = function(property){ this.title = property; };

ActionBar.prototype.show = function(){};

module.exports = function(properties){ return new ActionBar(properties); };