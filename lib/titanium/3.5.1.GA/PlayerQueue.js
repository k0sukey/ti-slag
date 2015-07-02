function PlayerQueue(properties) {
	properties = properties || {};
	this.items = properties.items || undefined;
	return this;
}
module.exports = function (properties) {
	return new PlayerQueue(properties);
};