function TableViewIndexEntry(properties) {
	properties = properties || {};
	this.index = properties.index || 0;
	this.title = properties.title || '';
	return this;
}
module.exports = function (properties) {
	return new TableViewIndexEntry(properties);
};