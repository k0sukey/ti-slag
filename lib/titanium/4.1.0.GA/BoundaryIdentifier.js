function BoundaryIdentifier(properties) {
	properties = properties || {};
	this.identifier = properties.identifier || '';
	this.point1 = properties.point1 || {
		x: 0,
		y: 0
	};
	this.point2 = properties.point2 || {
		x: 0,
		y: 0
	};
	return this;
}
module.exports = function (properties) {
	return new BoundaryIdentifier(properties);
};