function CloudUsersSecureDialog(properties) {
	properties = properties || {};
	this.title = properties.title || '';
	return this;
}
module.exports = function (properties) {
	return new CloudUsersSecureDialog(properties);
};