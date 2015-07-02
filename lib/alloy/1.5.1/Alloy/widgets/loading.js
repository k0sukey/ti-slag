function loading(properties) {
	properties = properties || {};
	return this;
}
loading.prototype.setOpacity = function () {
};
module.exports = function (properties) {
	return new loading(properties);
};