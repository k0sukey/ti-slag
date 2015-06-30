function Alert(properties) {
	properties = properties || {};

	this.absoluteDate = properties.absoluteDate || undefined;
	this.alarmTime = properties.alarmTime || undefined;
	this.apiName = 'Titanium.Calendar.Alert';
	this.begin = properties.begin || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.end = properties.end || undefined;
	this.eventId = properties.eventId || undefined;
	this.id = properties.id || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.minutes = properties.minutes || undefined;
	this.relativeOffset = properties.relativeOffset || undefined;
	this.state = properties.state || undefined;

	return this;
}

Alert.prototype.addEventListener = function(){};

Alert.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Alert.prototype.fireEvent = function(){};

Alert.prototype.getApiName = function(){ return this.apiName; };

Alert.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Alert.prototype.getEventId = function(){ return this.eventId; };

Alert.prototype.getId = function(){ return this.id; };

Alert.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

Alert.prototype.getMinutes = function(){ return this.minutes; };

Alert.prototype.getRelativeOffset = function(){ return this.relativeOffset; };

Alert.prototype.getState = function(){ return this.state; };

Alert.prototype.removeEventListener = function(){};

Alert.prototype.setAbsoluteDate = function(property){ this.absoluteDate = property; };

Alert.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Alert.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

Alert.prototype.setRelativeOffset = function(property){ this.relativeOffset = property; };

module.exports = function(properties){ return new Alert(properties); };