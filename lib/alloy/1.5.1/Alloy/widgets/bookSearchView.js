function bookSearchView(properties) {
	properties = properties || {};
	return this;
}
module.exports = function (properties) {
	return new bookSearchView(properties);
};