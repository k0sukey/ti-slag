function ListViewMarkerProps(properties) {
	properties = properties || {};
	this.sectionIndex = properties.sectionIndex || 0;
	this.itemIndex = properties.itemIndex || 0;
	return this;
}
module.exports = function (properties) {
	return new ListViewMarkerProps(properties);
};