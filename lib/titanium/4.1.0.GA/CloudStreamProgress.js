function CloudStreamProgress(properties) {
	properties = properties || {};
	this.progress = properties.progress || 0;
	this.url = properties.url || '';
	return this;
}
module.exports = function (properties) {
	return new CloudStreamProgress(properties);
};