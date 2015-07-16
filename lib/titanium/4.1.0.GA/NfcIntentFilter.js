function NfcIntentFilter(properties) {
	properties = properties || {};
	this.action = properties.action || '';
	this.mimeType = properties.mimeType || '';
	this.scheme = properties.scheme || '';
	this.host = properties.host || '';
	return this;
}
module.exports = function (properties) {
	return new NfcIntentFilter(properties);
};