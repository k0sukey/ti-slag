function TableViewEdgeInsets(properties) {
	properties = properties || {};
	this.top = properties.top || 0;
	this.left = properties.left || 0;
	this.right = properties.right || 0;
	this.bottom = properties.bottom || 0;
	return this;
}
module.exports = function (properties) {
	return new TableViewEdgeInsets(properties);
};