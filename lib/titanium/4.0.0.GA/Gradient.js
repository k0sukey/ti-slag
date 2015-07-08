function Gradient(properties) {
	properties = properties || {};
	this.backfillEnd = properties.backfillEnd || true;
	this.backfillStart = properties.backfillStart || true;
	this.colors = properties.colors || '';
	this.endPoint = properties.endPoint || {
		x: 0,
		y: 0
	};
	this.endRadius = properties.endRadius || 0;
	this.startPoint = properties.startPoint || {
		x: 0,
		y: 0
	};
	this.startRadius = properties.startRadius || 0;
	this.type = properties.type || '';
	return this;
}
module.exports = function (properties) {
	return new Gradient(properties);
};