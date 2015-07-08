function AcceptDict(properties) {
	properties = properties || {};
	this.error = properties.error || {};
	this.timeout = properties.timeout || 0;
	return this;
}
module.exports = function (properties) {
	return new AcceptDict(properties);
};