function CommandBar(properties) {
	properties = properties || {};
	this.items = properties.items || [];
	return this;
}
CommandBar.prototype.addEventListener = function () {
};
CommandBar.prototype.removeEventListener = function () {
};
CommandBar.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
CommandBar.prototype.fireEvent = function () {
};
CommandBar.prototype.getItems = function () {
	return [];
};
CommandBar.prototype.setItems = function () {
};
module.exports = function (properties) {
	return new CommandBar(properties);
};