function TableViewContentInsetOption(properties) {
	properties = properties || {};
	this.animated = properties.animated || true;
	this.duration = properties.duration || 0;
	return this;
}
module.exports = function (properties) {
	return new TableViewContentInsetOption(properties);
};