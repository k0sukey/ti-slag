function ReadyStatePayload(properties) {
	properties = properties || {};
	this.readyState = properties.readyState || 0;
	return this;
}
module.exports = function (properties) {
	return new ReadyStatePayload(properties);
};