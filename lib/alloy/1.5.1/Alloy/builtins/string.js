function string(properties) {
	properties = properties || {};
	return this;
}
string.prototype.formatCurrency = function () {
	return '';
};
string.prototype.lcfirst = function () {
	return '';
};
string.prototype.trim = function () {
	return '';
};
string.prototype.trimZeros = function () {
	return 0;
};
string.prototype.ucfirst = function () {
	return '';
};
string.prototype.urlDecode = function () {
	return '';
};
module.exports = function (properties) {
	return new string(properties);
};