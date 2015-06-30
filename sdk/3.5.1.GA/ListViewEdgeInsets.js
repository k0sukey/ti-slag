function ListViewEdgeInsets(properties) {
	properties = properties || {};

	this.bottom = properties.bottom || undefined;
	this.left = properties.left || undefined;
	this.right = properties.right || undefined;
	this.top = properties.top || undefined;

	return this;
}



module.exports = function(properties){ return new ListViewEdgeInsets(properties); };