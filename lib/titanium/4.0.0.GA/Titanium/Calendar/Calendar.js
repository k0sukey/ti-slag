function Calendar(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Calendar.Calendar';
	this.bubbleParent = properties.bubbleParent || true;
	this.hidden = properties.hidden || true;
	this.id = properties.id || '';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.name = properties.name || '';
	this.selected = properties.selected || true;
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
	return '';
};
Calendar.prototype.getBubbleParent = function () {
	return true;
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
	return true;
};
Calendar.prototype.getId = function () {
	return '';
};
Calendar.prototype.getLifecycleContainer = function () {
	return {};
};
Calendar.prototype.getName = function () {
	return '';
};
Calendar.prototype.getSelected = function () {
	return true;
};
Calendar.prototype.removeEventListener = function () {
};
Calendar.prototype.setBubbleParent = function () {
};
Calendar.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Calendar(properties);
};