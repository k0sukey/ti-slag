function CloudEventOccurrencesResponse(properties) {
	properties = properties || {};

	this.code = properties.code || undefined;
	this.error = properties.error || undefined;
	this.event_occurrences = properties.event_occurrences || undefined;
	this.message = properties.message || undefined;
	this.meta = properties.meta || undefined;
	this.success = properties.success || undefined;

	return this;
}



module.exports = function(properties){ return new CloudEventOccurrencesResponse(properties); };