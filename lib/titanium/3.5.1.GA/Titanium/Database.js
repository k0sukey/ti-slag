function Database(properties) {
	properties = properties || {};
	this.FIELD_TYPE_DOUBLE = properties.FIELD_TYPE_DOUBLE || 0;
	this.FIELD_TYPE_FLOAT = properties.FIELD_TYPE_FLOAT || 0;
	this.FIELD_TYPE_INT = properties.FIELD_TYPE_INT || 0;
	this.FIELD_TYPE_STRING = properties.FIELD_TYPE_STRING || 0;
	this.apiName = 'Ti.Database';
	this.bubbleParent = properties.bubbleParent || true;
	return this;
}
Database.prototype.addEventListener = function () {
};
Database.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Database.prototype.fireEvent = function () {
};
Database.prototype.getApiName = function () {
	return '';
};
Database.prototype.getBubbleParent = function () {
	return true;
};
Database.prototype.install = function () {
	return {};
};
Database.prototype.open = function () {
	return {};
};
Database.prototype.removeEventListener = function () {
};
Database.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new Database(properties);
};