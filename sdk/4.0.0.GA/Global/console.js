function console(properties) {
	properties = properties || {};
	return this;
}
console.prototype.debug = function () {
};
console.prototype.error = function () {
};
console.prototype.info = function () {
};
console.prototype.log = function () {
};
console.prototype.warn = function () {
};
module.exports = function (properties) {
	return new console(properties);
};