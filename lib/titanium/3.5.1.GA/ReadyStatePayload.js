function ReadyStatePayload(properties) {
	properties = properties || {};
	this.readyState = properties.readyState || undefined;
	return this;
}
module.exports = function (properties) {
	return new ReadyStatePayload(properties);
};