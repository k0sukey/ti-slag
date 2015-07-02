function Collections(properties) {
	properties = properties || {};
	return this;
}
module.exports = function (properties) {
	return new Collections(properties);
};