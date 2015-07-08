function ViewTemplate(properties) {
	properties = properties || {};
	this.bindId = properties.bindId || '';
	this.childTemplates = properties.childTemplates || [];
	this.events = properties.events || {};
	this.properties = properties.properties || {};
	this.type = properties.type || '';
	return this;
}
module.exports = function (properties) {
	return new ViewTemplate(properties);
};