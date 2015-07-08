function MapRouteType(properties) {
	properties = properties || {};
	this.color = properties.color || '';
	this.name = properties.name || '';
	this.points = properties.points || {
		x: 0,
		y: 0
	};
	this.width = properties.width || 0;
	return this;
}
module.exports = function (properties) {
	return new MapRouteType(properties);
};