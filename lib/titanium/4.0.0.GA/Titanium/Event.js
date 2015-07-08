function Event(properties) {
	properties = properties || {};
	this.bubbles = properties.bubbles || true;
	this.cancelBubble = properties.cancelBubble || true;
	this.source = properties.source || {};
	this.type = properties.type || '';
	return this;
}
module.exports = function (properties) {
	return new Event(properties);
};