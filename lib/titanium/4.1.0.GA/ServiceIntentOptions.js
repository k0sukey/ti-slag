function ServiceIntentOptions(properties) {
	properties = properties || {};
	this.url = properties.url || '';
	this.startMode = properties.startMode || 0;
	return this;
}
module.exports = function (properties) {
	return new ServiceIntentOptions(properties);
};