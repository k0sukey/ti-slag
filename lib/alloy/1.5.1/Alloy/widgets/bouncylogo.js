function bouncylogo(properties) {
	properties = properties || {};
	return this;
}
bouncylogo.prototype.hide = function () {
};
bouncylogo.prototype.init = function () {
};
bouncylogo.prototype.relayout = function () {
};
bouncylogo.prototype.reset = function () {
};
module.exports = function (properties) {
	return new bouncylogo(properties);
};