function ListViewEdgeInsets(properties) {
	properties = properties || {};
	this.bottom = properties.bottom || 0;
	this.left = properties.left || 0;
	this.right = properties.right || 0;
	this.top = properties.top || 0;
	return this;
}
module.exports = function (properties) {
	return new ListViewEdgeInsets(properties);
};