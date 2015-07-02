function Modules(properties) {
	properties = properties || {};
	return this;
}
module.exports = function (properties) {
	return new Modules(properties);
};