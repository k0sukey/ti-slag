function Dictionary(properties) {
	properties = properties || {};
	return this;
}
module.exports = function (properties) {
	return new Dictionary(properties);
};