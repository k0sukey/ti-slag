function ItemTemplate(properties) {
	properties = properties || {};
	this.properties = properties.properties || {};
	this.events = properties.events || {};
	this.childTemplates = properties.childTemplates || [];
	return this;
}
module.exports = function (properties) {
	return new ItemTemplate(properties);
};