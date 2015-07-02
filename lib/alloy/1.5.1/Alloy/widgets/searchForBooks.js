function searchForBooks(properties) {
	properties = properties || {};
	return this;
}
searchForBooks.prototype.setHandlers = function () {
};
module.exports = function (properties) {
	return new searchForBooks(properties);
};