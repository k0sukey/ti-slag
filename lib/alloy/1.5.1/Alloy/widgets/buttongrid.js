function buttongrid(properties) {
	properties = properties || {};
	return this;
}
buttongrid.prototype.destroy = function () {
};
buttongrid.prototype.init = function () {
};
buttongrid.prototype.relayout = function () {
};
module.exports = function (properties) {
	return new buttongrid(properties);
};