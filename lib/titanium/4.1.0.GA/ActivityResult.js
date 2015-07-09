function ActivityResult(properties) {
	properties = properties || {};
	this.requestCode = properties.requestCode || 0;
	this.resultCode = properties.resultCode || 0;
	this.intent = properties.intent || {};
	return this;
}
module.exports = function (properties) {
	return new ActivityResult(properties);
};