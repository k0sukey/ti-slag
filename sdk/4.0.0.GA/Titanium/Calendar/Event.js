function Event(properties) {
	properties = properties || {};

	this.alerts = properties.alerts || undefined;
	this.allDay = properties.allDay || undefined;
	this.apiName = 'Titanium.Calendar.Event';
	this.availability = properties.availability || undefined;
	this.begin = properties.begin || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.description = properties.description || undefined;
	this.end = properties.end || undefined;
	this.extendedProperties = properties.extendedProperties || undefined;
	this.hasAlarm = properties.hasAlarm || undefined;
	this.id = properties.id || undefined;
	this.isDetached = properties.isDetached || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.location = properties.location || undefined;
	this.notes = properties.notes || undefined;
	this.recurenceRule = properties.recurenceRule || undefined;
	this.recurenceRules = properties.recurenceRules || undefined;
	this.reminders = properties.reminders || undefined;
	this.status = properties.status || undefined;
	this.title = properties.title || undefined;
	this.visibility = properties.visibility || undefined;

	return this;
}

Event.prototype.addEventListener = function(){};

Event.prototype.addRecurrenceRule = function(){};

Event.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Event.prototype.createAlert = function(params){ var Alert = require('./Event/Alert'); return Alert(params); };

Event.prototype.createRecurenceRule = function(params){ var RecurenceRule = require('./Event/RecurenceRule'); return RecurenceRule(params); };

Event.prototype.createReminder = function(params){ var Reminder = require('./Event/Reminder'); return Reminder(params); };

Event.prototype.fireEvent = function(){};

Event.prototype.getAlerts = function(){ return this.alerts; };

Event.prototype.getAllDay = function(){ return this.allDay; };

Event.prototype.getApiName = function(){ return this.apiName; };

Event.prototype.getAvailability = function(){ return this.availability; };

Event.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Event.prototype.getDescription = function(){ return this.description; };

Event.prototype.getExtendedProperty = function(){ return ''; };

Event.prototype.getHasAlarm = function(){ return this.hasAlarm; };

Event.prototype.getId = function(){ return this.id; };

Event.prototype.getIsDetached = function(){ return this.isDetached; };

Event.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

Event.prototype.getLocation = function(){ return this.location; };

Event.prototype.getNotes = function(){ return this.notes; };

Event.prototype.getRecurenceRule = function(){ return this.recurenceRule; };

Event.prototype.getRecurenceRules = function(){ return this.recurenceRules; };

Event.prototype.getReminders = function(){ return this.reminders; };

Event.prototype.getStatus = function(){ return this.status; };

Event.prototype.getTitle = function(){ return this.title; };

Event.prototype.getVisibility = function(){ return this.visibility; };

Event.prototype.refresh = function(){ return true; };

Event.prototype.remove = function(){ return true; };

Event.prototype.removeEventListener = function(){};

Event.prototype.removeRecurenceRule = function(){};

Event.prototype.save = function(){ return true; };

Event.prototype.setAlerts = function(property){ this.alerts = property; };

Event.prototype.setAllDay = function(property){ this.allDay = property; };

Event.prototype.setBegin = function(property){ this.begin = property; };

Event.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Event.prototype.setEnd = function(property){ this.end = property; };

Event.prototype.setExtendedProperty = function(){};

Event.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

Event.prototype.setLocation = function(property){ this.location = property; };

Event.prototype.setNotes = function(property){ this.notes = property; };

Event.prototype.setRecurenceRule = function(property){ this.recurenceRule = property; };

Event.prototype.setRecurenceRules = function(property){ this.recurenceRules = property; };

Event.prototype.setTitle = function(property){ this.title = property; };

module.exports = function(properties){ return new Event(properties); };