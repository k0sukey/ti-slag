function dialogs(properties) {
	properties = properties || {};
	this.buttonNames = properties.buttonNames || undefined;
	this.message = properties.message || undefined;
	this.title = properties.title || undefined;
	return this;
}
dialogs.prototype.confirm = function () {
};
module.exports = function (properties) {
	return new dialogs(properties);
};