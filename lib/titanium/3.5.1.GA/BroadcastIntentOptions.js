function BroadcastIntentOptions(properties) {
	properties = properties || {};
	this.action = properties.action || '';
	this.className = properties.className || '';
	this.data = properties.data || '';
	this.flags = properties.flags || 0;
	this.packageName = properties.packageName || '';
	this.url = properties.url || '';
	return this;
}
module.exports = function (properties) {
	return new BroadcastIntentOptions(properties);
};