function recurrenceEndDictionary(properties) {
	properties = properties || {};
	this.endDate = properties.endDate || new Date();
	this.occurrenceCount = properties.occurrenceCount || 0;
	return this;
}
module.exports = function (properties) {
	return new recurrenceEndDictionary(properties);
};