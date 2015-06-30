function daysOfTheWeekDictionary(properties) {
	properties = properties || {};

	this.daysOfWeek = properties.daysOfWeek || undefined;
	this.week = properties.week || undefined;

	return this;
}



module.exports = function(properties){ return new daysOfTheWeekDictionary(properties); };