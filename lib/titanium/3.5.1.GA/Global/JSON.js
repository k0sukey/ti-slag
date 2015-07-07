function JSON(properties) {
	properties = properties || {};
	return this;
}
JSON.prototype.parse = function () {
	return {};
};
JSON.prototype.stringify = function () {
	return '';
};
module.exports = function (properties) {
	return new JSON(properties);
};