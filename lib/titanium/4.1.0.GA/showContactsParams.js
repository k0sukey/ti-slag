function showContactsParams(properties) {
	properties = properties || {};
	this.animated = properties.animated || true;
	this.fields = properties.fields || '';
	this.cancel = properties.cancel || {};
	this.selectedPerson = properties.selectedPerson || {};
	this.selectedProperty = properties.selectedProperty || {};
	return this;
}
module.exports = function (properties) {
	return new showContactsParams(properties);
};