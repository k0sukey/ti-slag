function Models(properties) {
	properties = properties || {};
	return this;
}
module.exports = function (properties) {
	return new Models(properties);
};