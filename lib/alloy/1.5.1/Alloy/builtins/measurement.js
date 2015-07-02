function measurement(properties) {
	properties = properties || {};
	return this;
}
measurement.prototype.dpToPX = function () {
	return 0;
};
measurement.prototype.pointPXToDP = function () {
	return 0;
};
measurement.prototype.pxToDP = function () {
	return 0;
};
module.exports = function (properties) {
	return new measurement(properties);
};