function launchOptions(properties) {
	properties = properties || {};
	this.launchOptionsLocationKey = properties.launchOptionsLocationKey || true;
	this.source = properties.source || '';
	this.url = properties.url || '';
	return this;
}
module.exports = function (properties) {
	return new launchOptions(properties);
};