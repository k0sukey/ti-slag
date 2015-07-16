function NdefDiscovered(properties) {
	properties = properties || {};
	this.action = properties.action || '';
	this.tag = properties.tag || {};
	this.messsages = properties.messsages || [];
	return this;
}
module.exports = function (properties) {
	return new NdefDiscovered(properties);
};