function builtins(properties) {
	properties = properties || {};
	return this;
}
module.exports = function (properties) {
	return new builtins(properties);
};