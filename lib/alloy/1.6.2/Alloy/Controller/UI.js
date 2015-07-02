function UI(properties) {
	properties = properties || {};
	return this;
}
UI.prototype.create = function () {
	return {};
};
module.exports = function (properties) {
	return new UI(properties);
};