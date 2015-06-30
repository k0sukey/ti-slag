function BarItemType(properties) {
	properties = properties || {};

	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.enabled = properties.enabled || undefined;
	this.image = properties.image || undefined;
	this.title = properties.title || undefined;
	this.width = properties.width || undefined;

	return this;
}



module.exports = function(properties){ return new BarItemType(properties); };