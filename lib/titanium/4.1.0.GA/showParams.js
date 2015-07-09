function showParams(properties) {
	properties = properties || {};
	this.animated = properties.animated || true;
	this.view = properties.view || {};
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	return this;
}
module.exports = function (properties) {
	return new showParams(properties);
};