function GlobalString(properties) {
	properties = properties || {};
	return this;
}
GlobalString.prototype.formatCurrency = function () {
};
GlobalString.prototype.formatDate = function () {
};
GlobalString.prototype.formatDecimal = function () {
};
GlobalString.prototype.formatTime = function () {
};
module.exports = function (properties) {
	return new GlobalString(properties);
};