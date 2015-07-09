function ViewTemplate(properties) {
	properties = properties || {};
	this.type = properties.type || '';
	this.bindId = properties.bindId || '';
	this.properties = properties.properties || {};
	this.events = properties.events || {};
	this.childTemplates = properties.childTemplates || [];
	return this;
}
module.exports = function (properties) {
	return new ViewTemplate(properties);
};