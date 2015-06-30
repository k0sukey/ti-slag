function ViewTemplate(properties) {
	properties = properties || {};

	this.bindId = properties.bindId || undefined;
	this.childTemplates = properties.childTemplates || undefined;
	this.events = properties.events || undefined;
	this.properties = properties.properties || undefined;
	this.type = properties.type || undefined;

	return this;
}



module.exports = function(properties){ return new ViewTemplate(properties); };