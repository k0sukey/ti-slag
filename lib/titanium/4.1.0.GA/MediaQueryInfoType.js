function MediaQueryInfoType(properties) {
	properties = properties || {};
	this.value = properties.value || 0;
	this.exact = properties.exact || true;
	return this;
}
module.exports = function (properties) {
	return new MediaQueryInfoType(properties);
};