function ActivityResult(properties) {
	properties = properties || {};
	this.intent = properties.intent || {};
	this.requestCode = properties.requestCode || 0;
	this.resultCode = properties.resultCode || 0;
	return this;
}
module.exports = function (properties) {
	return new ActivityResult(properties);
};