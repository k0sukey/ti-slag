function APSConnectionDelegate(properties) {
	properties = properties || {};
	return this;
}
module.exports = function (properties) {
	return new APSConnectionDelegate(properties);
};