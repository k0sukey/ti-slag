function Global(properties) {
	properties = properties || {};
	return this;
}
Global.prototype.alert = function () {
};
Global.prototype.decodeURIComponent = function () {
	return '';
};
Global.prototype.encodeURIComponent = function () {
	return '';
};
Global.prototype.L = function () {
	return '';
};
Global.prototype.require = function () {
	return {};
};
Global.prototype.setTimeout = function () {
	return 0;
};
Global.prototype.clearTimeout = function () {
};
Global.prototype.setInterval = function () {
	return 0;
};
Global.prototype.clearInterval = function () {
};
module.exports = function (properties) {
	return new Global(properties);
};