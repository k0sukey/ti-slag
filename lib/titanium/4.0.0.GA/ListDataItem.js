function ListDataItem(properties) {
	properties = properties || {};
	this.properties = properties.properties || {};
	this.template = properties.template || '';
	return this;
}
module.exports = function (properties) {
	return new ListDataItem(properties);
};