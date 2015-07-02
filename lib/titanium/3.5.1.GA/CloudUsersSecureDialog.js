function CloudUsersSecureDialog(properties) {
	properties = properties || {};
	this.title = properties.title || undefined;
	return this;
}
module.exports = function (properties) {
	return new CloudUsersSecureDialog(properties);
};