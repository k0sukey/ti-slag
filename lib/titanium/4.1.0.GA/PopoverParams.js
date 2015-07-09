function PopoverParams(properties) {
	properties = properties || {};
	this.animated = properties.animated || true;
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.view = properties.view || {};
	return this;
}
module.exports = function (properties) {
	return new PopoverParams(properties);
};