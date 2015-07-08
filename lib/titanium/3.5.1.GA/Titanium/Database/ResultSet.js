function ResultSet(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Database.ResultSet';
	this.bubbleParent = properties.bubbleParent || true;
	this.fieldCount = properties.fieldCount || 0;
	this.rowCount = properties.rowCount || 0;
	this.validRow = properties.validRow || true;
	return this;
}
ResultSet.prototype.addEventListener = function () {
};
ResultSet.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ResultSet.prototype.close = function () {
};
ResultSet.prototype.field = function () {
	return '';
};
ResultSet.prototype.fieldByName = function () {
	return '';
};
ResultSet.prototype.fieldCount = function () {
	throw new Error('Ti.Database.ResultSet.fieldCount was deprecated, since 3.3.0');
};
ResultSet.prototype.fieldName = function () {
	return '';
};
ResultSet.prototype.fireEvent = function () {
};
ResultSet.prototype.getApiName = function () {
	return '';
};
ResultSet.prototype.getBubbleParent = function () {
	return true;
};
ResultSet.prototype.getFieldCount = function () {
	return 0;
};
ResultSet.prototype.getFieldName = function () {
	return '';
};
ResultSet.prototype.getRowCount = function () {
	return 0;
};
ResultSet.prototype.getValidRow = function () {
	return true;
};
ResultSet.prototype.isValidRow = function () {
	return true;
};
ResultSet.prototype.next = function () {
	return true;
};
ResultSet.prototype.removeEventListener = function () {
};
ResultSet.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new ResultSet(properties);
};