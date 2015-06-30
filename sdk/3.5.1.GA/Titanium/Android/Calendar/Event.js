function Event(properties) {
	properties = properties || {};

	this.alerts = properties.alerts || undefined;
	this.allDay = properties.allDay || undefined;
	this.apiName = 'Titanium.Android.Calendar.Event';
	this.begin = properties.begin || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.description = properties.description || undefined;
	this.end = properties.end || undefined;
	this.extendedProperties = properties.extendedProperties || undefined;
	this.hasAlarm = properties.hasAlarm || undefined;
	this.hasExtendedProperties = properties.hasExtendedProperties || undefined;
	this.id = properties.id || undefined;
	this.location = properties.location || undefined;
	this.reminders = properties.reminders || undefined;
	this.status = properties.status || undefined;
	this.title = properties.title || undefined;
	this.visibility = properties.visibility || undefined;

	return this;
}

Event.prototype.addEventListener = function(){};

Event.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Event.prototype.createAlert = function(params){ var Alert = require('./Event/Alert'); return Alert(params); };

Event.prototype.createReminder = function(params){ var Reminder = require('./Event/Reminder'); return Reminder(params); };

Event.prototype.fireEvent = function(){};

Event.prototype.getAlerts = function(){ return this.alerts; };

Event.prototype.getAllDay = function(){ return this.allDay; };

Event.prototype.getApiName = function(){ return this.apiName; };

Event.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Event.prototype.getDescription = function(){ return this.description; };

Event.prototype.getExtendedProperty = function(){ return ''; };

Event.prototype.getHasAlarm = function(){ return this.hasAlarm; };

Event.prototype.getHasExtendedProperties = function(){ return this.hasExtendedProperties; };

Event.prototype.getId = function(){ return this.id; };

Event.prototype.getLocation = function(){ return this.location; };

Event.prototype.getReminders = function(){ return this.reminders; };

Event.prototype.getStatus = function(){ return this.status; };

Event.prototype.getTitle = function(){ return this.title; };

Event.prototype.getVisibility = function(){ return this.visibility; };

Event.prototype.removeEventListener = function(){};

Event.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Event.prototype.setExtendedProperty = function(){};

module.exports = function(properties){ return new Event(properties); };