function ListViewMarkerProps(properties) {
	properties = properties || {};

	this.itemIndex = properties.itemIndex || undefined;
	this.sectionIndex = properties.sectionIndex || undefined;

	return this;
}



module.exports = function(properties){ return new ListViewMarkerProps(properties); };