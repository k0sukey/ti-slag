function showContactsParams(properties) {
	properties = properties || {};
	this.animated = properties.animated || true;
	this.cancel = properties.cancel || {};
	this.fields = properties.fields || '';
	this.selectedPerson = properties.selectedPerson || {};
	this.selectedProperty = properties.selectedProperty || {};
	return this;
}
module.exports = function (properties) {
	return new showContactsParams(properties);
};