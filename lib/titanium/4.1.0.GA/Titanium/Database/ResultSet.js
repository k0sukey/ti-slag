function ResultSet(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Database.ResultSet';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.fieldCount = properties.fieldCount || 0;
	this.rowCount = properties.rowCount || 0;
	this.validRow = properties.validRow || true;
	return this;
}
ResultSet.prototype.addEventListener = function () {
};
ResultSet.prototype.removeEventListener = function () {
};
ResultSet.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ResultSet.prototype.fireEvent = function () {
};
ResultSet.prototype.fieldCount = function () {
	throw new Error('Ti.Database.ResultSet.fieldCount was deprecated, since 3.3.0');
};
ResultSet.prototype.close = function () {
};
ResultSet.prototype.field = function () {
	return '';
};
ResultSet.prototype.fieldByName = function () {
	return '';
};
ResultSet.prototype.fieldName = function () {
	return '';
};
ResultSet.prototype.getFieldName = function () {
	return '';
};
ResultSet.prototype.isValidRow = function () {
	return true;
};
ResultSet.prototype.next = function () {
	return true;
};
ResultSet.prototype.getBubbleParent = function () {
	return true;
};
ResultSet.prototype.setBubbleParent = function () {
};
ResultSet.prototype.getApiName = function () {
	return '';
};
ResultSet.prototype.getLifecycleContainer = function () {
	return {};
};
ResultSet.prototype.setLifecycleContainer = function () {
};
ResultSet.prototype.getFieldCount = function () {
	return 0;
};
ResultSet.prototype.getRowCount = function () {
	return 0;
};
ResultSet.prototype.getValidRow = function () {
	return true;
};
module.exports = function (properties) {
	return new ResultSet(properties);
};