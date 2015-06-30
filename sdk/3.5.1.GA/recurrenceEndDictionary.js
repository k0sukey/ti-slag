function recurrenceEndDictionary(properties) {
	properties = properties || {};

	this.endDate = properties.endDate || undefined;
	this.occurrenceCount = properties.occurrenceCount || undefined;

	return this;
}



module.exports = function(properties){ return new recurrenceEndDictionary(properties); };