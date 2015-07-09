function RowActionType(properties) {
	properties = properties || {};
	this.title = properties.title || '';
	this.style = properties.style || 0;
	this.color = properties.color || '';
	return this;
}
module.exports = function (properties) {
	return new RowActionType(properties);
};