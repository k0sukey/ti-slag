function moment(properties) {
	properties = properties || {};
	return this;
}
module.exports = function (properties) {
	return new moment(properties);
};