function AcceptDict(properties) {
	properties = properties || {};
	this.timeout = properties.timeout || 0;
	this.error = properties.error || {};
	return this;
}
module.exports = function (properties) {
	return new AcceptDict(properties);
};