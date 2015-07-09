function launchOptions(properties) {
	properties = properties || {};
	this.url = properties.url || '';
	this.source = properties.source || '';
	this.launchOptionsLocationKey = properties.launchOptionsLocationKey || true;
	return this;
}
module.exports = function (properties) {
	return new launchOptions(properties);
};