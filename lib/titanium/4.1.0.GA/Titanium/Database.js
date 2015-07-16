function Database(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Database';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.FIELD_TYPE_DOUBLE = properties.FIELD_TYPE_DOUBLE || 0;
	this.FIELD_TYPE_FLOAT = properties.FIELD_TYPE_FLOAT || 0;
	this.FIELD_TYPE_INT = properties.FIELD_TYPE_INT || 0;
	this.FIELD_TYPE_STRING = properties.FIELD_TYPE_STRING || 0;
	return this;
}
Database.prototype.addEventListener = function () {
};
Database.prototype.removeEventListener = function () {
};
Database.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Database.prototype.fireEvent = function () {
};
Database.prototype.install = function () {
	return {};
};
Database.prototype.open = function () {
	return {};
};
Database.prototype.getBubbleParent = function () {
	return true;
};
Database.prototype.setBubbleParent = function () {
};
Database.prototype.getApiName = function () {
	return '';
};
Database.prototype.getLifecycleContainer = function () {
	return {};
};
Database.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Database(properties);
};