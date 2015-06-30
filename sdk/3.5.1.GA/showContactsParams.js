function showContactsParams(properties) {
	properties = properties || {};
	this.animated = properties.animated || undefined;
	this.cancel = properties.cancel || undefined;
	this.fields = properties.fields || undefined;
	this.selectedPerson = properties.selectedPerson || undefined;
	this.selectedProperty = properties.selectedProperty || undefined;
	return this;
}
module.exports = function (properties) {
	return new showContactsParams(properties);
};