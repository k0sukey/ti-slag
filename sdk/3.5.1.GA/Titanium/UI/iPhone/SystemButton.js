function SystemButton(properties) {
	properties = properties || {};

	this.ACTION = properties.ACTION || undefined;
	this.ACTIVITY = properties.ACTIVITY || undefined;
	this.ADD = properties.ADD || undefined;
	this.BOOKMARKS = properties.BOOKMARKS || undefined;
	this.CAMERA = properties.CAMERA || undefined;
	this.CANCEL = properties.CANCEL || undefined;
	this.COMPOSE = properties.COMPOSE || undefined;
	this.CONTACT_ADD = properties.CONTACT_ADD || undefined;
	this.DISCLOSURE = properties.DISCLOSURE || undefined;
	this.DONE = properties.DONE || undefined;
	this.EDIT = properties.EDIT || undefined;
	this.FAST_FORWARD = properties.FAST_FORWARD || undefined;
	this.FIXED_SPACE = properties.FIXED_SPACE || undefined;
	this.FLEXIBLE_SPACE = properties.FLEXIBLE_SPACE || undefined;
	this.INFO_DARK = properties.INFO_DARK || undefined;
	this.INFO_LIGHT = properties.INFO_LIGHT || undefined;
	this.ORGANIZE = properties.ORGANIZE || undefined;
	this.PAUSE = properties.PAUSE || undefined;
	this.PLAY = properties.PLAY || undefined;
	this.REFRESH = properties.REFRESH || undefined;
	this.REPLY = properties.REPLY || undefined;
	this.REWIND = properties.REWIND || undefined;
	this.SAVE = properties.SAVE || undefined;
	this.SPINNER = properties.SPINNER || undefined;
	this.STOP = properties.STOP || undefined;
	this.TRASH = properties.TRASH || undefined;
	this.apiName = 'Titanium.UI.iPhone.SystemButton';
	this.bubbleParent = properties.bubbleParent || undefined;

	return this;
}

SystemButton.prototype.addEventListener = function(){};

SystemButton.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

SystemButton.prototype.fireEvent = function(){};

SystemButton.prototype.getApiName = function(){ return this.apiName; };

SystemButton.prototype.getBubbleParent = function(){ return this.bubbleParent; };

SystemButton.prototype.removeEventListener = function(){};

SystemButton.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

module.exports = function(properties){ return new SystemButton(properties); };