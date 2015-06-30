function Notification(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Android.Notification';
	this.audioStreamType = properties.audioStreamType || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.category = properties.category || undefined;
	this.contentIntent = properties.contentIntent || undefined;
	this.contentText = properties.contentText || undefined;
	this.contentTitle = properties.contentTitle || undefined;
	this.contentView = properties.contentView || undefined;
	this.defaults = properties.defaults || undefined;
	this.deleteIntent = properties.deleteIntent || undefined;
	this.flags = properties.flags || undefined;
	this.icon = properties.icon || undefined;
	this.ledARGB = properties.ledARGB || undefined;
	this.ledOffMS = properties.ledOffMS || undefined;
	this.ledOnMS = properties.ledOnMS || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.number = properties.number || undefined;
	this.priority = properties.priority || undefined;
	this.sound = properties.sound || undefined;
	this.tickerText = properties.tickerText || undefined;
	this.visibility = properties.visibility || undefined;
	this.when = properties.when || undefined;

	return this;
}

Notification.prototype.addEventListener = function(){};

Notification.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Notification.prototype.fireEvent = function(){};

Notification.prototype.getApiName = function(){ return this.apiName; };

Notification.prototype.getAudioStreamType = function(){ return this.audioStreamType; };

Notification.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Notification.prototype.getCategory = function(){ return this.category; };

Notification.prototype.getContentIntent = function(){ return this.contentIntent; };

Notification.prototype.getContentText = function(){ return this.contentText; };

Notification.prototype.getContentTitle = function(){ return this.contentTitle; };

Notification.prototype.getDefaults = function(){ return this.defaults; };

Notification.prototype.getDeleteIntent = function(){ return this.deleteIntent; };

Notification.prototype.getFlags = function(){ return this.flags; };

Notification.prototype.getIcon = function(){ return this.icon; };

Notification.prototype.getLedARGB = function(){ return this.ledARGB; };

Notification.prototype.getLedOffMS = function(){ return this.ledOffMS; };

Notification.prototype.getLedOnMS = function(){ return this.ledOnMS; };

Notification.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

Notification.prototype.getNumber = function(){ return this.number; };

Notification.prototype.getPriority = function(){ return this.priority; };

Notification.prototype.getSound = function(){ return this.sound; };

Notification.prototype.getTickerText = function(){ return this.tickerText; };

Notification.prototype.getVisibility = function(){ return this.visibility; };

Notification.prototype.removeEventListener = function(){};

Notification.prototype.setAudioStreamType = function(property){ this.audioStreamType = property; };

Notification.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Notification.prototype.setCategory = function(property){ this.category = property; };

Notification.prototype.setContentIntent = function(property){ this.contentIntent = property; };

Notification.prototype.setContentText = function(property){ this.contentText = property; };

Notification.prototype.setContentTitle = function(property){ this.contentTitle = property; };

Notification.prototype.setContentView = function(property){ this.contentView = property; };

Notification.prototype.setDefaults = function(property){ this.defaults = property; };

Notification.prototype.setDeleteIntent = function(property){ this.deleteIntent = property; };

Notification.prototype.setFlags = function(property){ this.flags = property; };

Notification.prototype.setIcon = function(property){ this.icon = property; };

Notification.prototype.setLatestEventInfo = function(){};

Notification.prototype.setLedARGB = function(property){ this.ledARGB = property; };

Notification.prototype.setLedOffMS = function(property){ this.ledOffMS = property; };

Notification.prototype.setLedOnMS = function(property){ this.ledOnMS = property; };

Notification.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

Notification.prototype.setNumber = function(property){ this.number = property; };

Notification.prototype.setPriority = function(property){ this.priority = property; };

Notification.prototype.setSound = function(property){ this.sound = property; };

Notification.prototype.setTickerText = function(property){ this.tickerText = property; };

Notification.prototype.setVisibility = function(property){ this.visibility = property; };

Notification.prototype.setWhen = function(property){ this.when = property; };

module.exports = function(properties){ return new Notification(properties); };