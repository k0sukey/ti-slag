function Gradient(properties) {
	properties = properties || {};
	this.backfillEnd = properties.backfillEnd || undefined;
	this.backfillStart = properties.backfillStart || undefined;
	this.colors = properties.colors || undefined;
	this.endPoint = properties.endPoint || undefined;
	this.endRadius = properties.endRadius || undefined;
	this.startPoint = properties.startPoint || undefined;
	this.startRadius = properties.startRadius || undefined;
	this.type = properties.type || undefined;
	return this;
}
module.exports = function (properties) {
	return new Gradient(properties);
};