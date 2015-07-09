function daysOfTheWeekDictionary(properties) {
	properties = properties || {};
	this.daysOfWeek = properties.daysOfWeek || 0;
	this.week = properties.week || 0;
	return this;
}
module.exports = function (properties) {
	return new daysOfTheWeekDictionary(properties);
};