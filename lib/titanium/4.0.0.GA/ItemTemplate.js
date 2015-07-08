function ItemTemplate(properties) {
	properties = properties || {};
	this.childTemplates = properties.childTemplates || [];
	this.events = properties.events || {};
	this.properties = properties.properties || {};
	return this;
}
module.exports = function (properties) {
	return new ItemTemplate(properties);
};