function ListDataItem(properties) {
	properties = properties || {};
	this.properties = properties.properties || undefined;
	this.template = properties.template || undefined;
	return this;
}
module.exports = function (properties) {
	return new ListDataItem(properties);
};