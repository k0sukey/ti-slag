function ListDataItem(properties) {
	properties = properties || {};
	this.template = properties.template || '';
	this.properties = properties.properties || {};
	return this;
}
module.exports = function (properties) {
	return new ListDataItem(properties);
};