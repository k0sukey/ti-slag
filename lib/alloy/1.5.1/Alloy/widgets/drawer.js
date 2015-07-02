function drawer(properties) {
	properties = properties || {};
	return this;
}
drawer.prototype.checkEnabled = function () {
};
drawer.prototype.init = function () {
};
drawer.prototype.jiggle = function () {
};
module.exports = function (properties) {
	return new drawer(properties);
};