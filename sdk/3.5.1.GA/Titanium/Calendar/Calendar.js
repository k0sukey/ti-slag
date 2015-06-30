function Calendar(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Calendar.Calendar';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.hidden = properties.hidden || undefined;
	this.id = properties.id || undefined;
	this.name = properties.name || undefined;
	this.selected = properties.selected || undefined;
	return this;
}
Calendar.prototype.addEventListener = function () {
};
Calendar.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Calendar.prototype.createEvent = function (params) {
	var Event = require('./Calendar/Event');
	return Event(params);
};
Calendar.prototype.fireEvent = function () {
};
Calendar.prototype.getApiName = function () {
	return this.apiName;
};
Calendar.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Calendar.prototype.getEventById = function () {
	return {};
};
Calendar.prototype.getEventsBetweenDates = function () {
	return [];
};
Calendar.prototype.getEventsInDate = function () {
	return [];
};
Calendar.prototype.getEventsInMonth = function () {
	return [];
};
Calendar.prototype.getEventsInYear = function () {
	return [];
};
Calendar.prototype.getHidden = function () {
	return this.hidden;
};
Calendar.prototype.getId = function () {
	return this.id;
};
Calendar.prototype.getName = function () {
	return this.name;
};
Calendar.prototype.getSelected = function () {
	return this.selected;
};
Calendar.prototype.removeEventListener = function () {
};
Calendar.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new Calendar(properties);
};