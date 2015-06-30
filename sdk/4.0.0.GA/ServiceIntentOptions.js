function ServiceIntentOptions(properties) {
	properties = properties || {};
	this.startMode = properties.startMode || undefined;
	this.url = properties.url || undefined;
	return this;
}
module.exports = function (properties) {
	return new ServiceIntentOptions(properties);
};