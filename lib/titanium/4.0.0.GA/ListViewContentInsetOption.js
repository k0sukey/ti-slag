function ListViewContentInsetOption(properties) {
	properties = properties || {};
	this.animated = properties.animated || undefined;
	this.duration = properties.duration || undefined;
	return this;
}
module.exports = function (properties) {
	return new ListViewContentInsetOption(properties);
};