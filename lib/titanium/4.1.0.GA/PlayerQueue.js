function PlayerQueue(properties) {
	properties = properties || {};
	this.items = properties.items || [];
	return this;
}
module.exports = function (properties) {
	return new PlayerQueue(properties);
};