function CloudEventOccurrencesResponse(properties) {
	properties = properties || {};
	this.success = properties.success || true;
	this.error = properties.error || true;
	this.meta = properties.meta || {};
	this.code = properties.code || 0;
	this.message = properties.message || '';
	this.event_occurrences = properties.event_occurrences || [];
	return this;
}
module.exports = function (properties) {
	return new CloudEventOccurrencesResponse(properties);
};