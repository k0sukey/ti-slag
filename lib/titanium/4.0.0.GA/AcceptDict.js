function AcceptDict(properties) {
	properties = properties || {};
	this.error = properties.error || undefined;
	this.timeout = properties.timeout || undefined;
	return this;
}
module.exports = function (properties) {
	return new AcceptDict(properties);
};