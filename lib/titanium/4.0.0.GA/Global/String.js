function String(properties) {
	properties = properties || {};
	return this;
}
String.prototype.format = function () {
	return '';
};
String.prototype.formatCurrency = function () {
	return '';
};
String.prototype.formatDate = function () {
	return '';
};
String.prototype.formatDecimal = function () {
	return '';
};
String.prototype.formatTime = function () {
	return '';
};
module.exports = function (properties) {
	return new String(properties);
};