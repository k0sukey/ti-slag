function DB(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Database.DB';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.file = properties.file || undefined;
	this.lastInsertRowId = properties.lastInsertRowId || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.name = properties.name || undefined;
	this.rowsAffected = properties.rowsAffected || undefined;
	return this;
}
DB.prototype.addEventListener = function () {
};
DB.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
DB.prototype.close = function () {
};
DB.prototype.execute = function () {
	return {};
};
DB.prototype.fireEvent = function () {
};
DB.prototype.getApiName = function () {
	return '';
};
DB.prototype.getBubbleParent = function () {
	return true;
};
DB.prototype.getFile = function () {
	return {};
};
DB.prototype.getLastInsertRowId = function () {
	return 0;
};
DB.prototype.getLifecycleContainer = function () {
	return {};
};
DB.prototype.getName = function () {
	return '';
};
DB.prototype.getRowsAffected = function () {
	return 0;
};
DB.prototype.remove = function () {
};
DB.prototype.removeEventListener = function () {
};
DB.prototype.setBubbleParent = function () {
};
DB.prototype.setLastInsertRowId = function () {
};
DB.prototype.setLifecycleContainer = function () {
};
DB.prototype.setName = function () {
};
DB.prototype.setRowsAffected = function () {
};
module.exports = function (properties) {
	return new DB(properties);
};