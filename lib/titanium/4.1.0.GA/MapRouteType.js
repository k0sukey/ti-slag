function MapRouteType(properties) {
	properties = properties || {};
	this.name = properties.name || '';
	this.points = properties.points || {
		x: 0,
		y: 0
	};
	this.color = properties.color || '';
	this.width = properties.width || 0;
	return this;
}
module.exports = function (properties) {
	return new MapRouteType(properties);
};