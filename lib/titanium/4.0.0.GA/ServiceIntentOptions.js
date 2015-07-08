function ServiceIntentOptions(properties) {
	properties = properties || {};
	this.startMode = properties.startMode || 0;
	this.url = properties.url || '';
	return this;
}
module.exports = function (properties) {
	return new ServiceIntentOptions(properties);
};