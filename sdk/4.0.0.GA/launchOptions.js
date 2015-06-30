function launchOptions(properties) {
	properties = properties || {};
	this.launchOptionsLocationKey = properties.launchOptionsLocationKey || undefined;
	this.source = properties.source || undefined;
	this.url = properties.url || undefined;
	return this;
}
module.exports = function (properties) {
	return new launchOptions(properties);
};