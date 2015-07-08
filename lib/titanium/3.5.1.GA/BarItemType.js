function BarItemType(properties) {
	properties = properties || {};
	this.accessibilityLabel = properties.accessibilityLabel || '';
	this.enabled = properties.enabled || true;
	this.image = properties.image || '';
	this.title = properties.title || '';
	this.width = properties.width || 0;
	return this;
}
module.exports = function (properties) {
	return new BarItemType(properties);
};