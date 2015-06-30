function ItemTemplate(properties) {
	properties = properties || {};
	this.childTemplates = properties.childTemplates || undefined;
	this.events = properties.events || undefined;
	this.properties = properties.properties || undefined;
	return this;
}
module.exports = function (properties) {
	return new ItemTemplate(properties);
};