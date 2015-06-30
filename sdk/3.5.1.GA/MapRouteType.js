function MapRouteType(properties) {
	properties = properties || {};

	this.color = properties.color || undefined;
	this.name = properties.name || undefined;
	this.points = properties.points || undefined;
	this.width = properties.width || undefined;

	return this;
}



module.exports = function(properties){ return new MapRouteType(properties); };