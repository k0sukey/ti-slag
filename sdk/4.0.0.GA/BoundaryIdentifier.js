function BoundaryIdentifier(properties) {
	properties = properties || {};

	this.identifier = properties.identifier || undefined;
	this.point1 = properties.point1 || undefined;
	this.point2 = properties.point2 || undefined;

	return this;
}



module.exports = function(properties){ return new BoundaryIdentifier(properties); };