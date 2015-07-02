function ContactsCallbackArgs(properties) {
	properties = properties || {};
	this.code = properties.code || undefined;
	this.data = properties.data || undefined;
	this.error = properties.error || undefined;
	this.success = properties.success || undefined;
	return this;
}
module.exports = function (properties) {
	return new ContactsCallbackArgs(properties);
};