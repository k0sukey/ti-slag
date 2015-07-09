function AppBarSeparator(properties) {
	properties = properties || {};
	return this;
}
AppBarSeparator.prototype.addEventListener = function () {
};
AppBarSeparator.prototype.removeEventListener = function () {
};
AppBarSeparator.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
AppBarSeparator.prototype.fireEvent = function () {
};
module.exports = function (properties) {
	return new AppBarSeparator(properties);
};