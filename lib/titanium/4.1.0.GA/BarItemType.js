function BarItemType(properties) {
	properties = properties || {};
	this.title = properties.title || '';
	this.image = properties.image || '';
	this.width = properties.width || 0;
	this.enabled = properties.enabled || true;
	this.accessibilityLabel = properties.accessibilityLabel || '';
	return this;
}
module.exports = function (properties) {
	return new BarItemType(properties);
};