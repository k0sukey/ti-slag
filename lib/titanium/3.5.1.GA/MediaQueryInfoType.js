function MediaQueryInfoType(properties) {
	properties = properties || {};
	this.exact = properties.exact || true;
	this.value = properties.value || 0;
	return this;
}
module.exports = function (properties) {
	return new MediaQueryInfoType(properties);
};