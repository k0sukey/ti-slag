function widgets(properties) {
	properties = properties || {};
	return this;
}
module.exports = function (properties) {
	return new widgets(properties);
};