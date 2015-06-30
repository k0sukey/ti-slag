function TableViewIndexEntry(properties) {
	properties = properties || {};

	this.index = properties.index || undefined;
	this.title = properties.title || undefined;

	return this;
}



module.exports = function(properties){ return new TableViewIndexEntry(properties); };