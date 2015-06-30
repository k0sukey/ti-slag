function Event(properties) {
	properties = properties || {};

	this.bubbles = properties.bubbles || undefined;
	this.cancelBubble = properties.cancelBubble || undefined;
	this.source = properties.source || undefined;
	this.type = properties.type || undefined;

	return this;
}



module.exports = function(properties){ return new Event(properties); };