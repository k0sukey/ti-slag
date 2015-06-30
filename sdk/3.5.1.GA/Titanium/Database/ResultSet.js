function ResultSet(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Database.ResultSet';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.fieldCount = properties.fieldCount || undefined;
	this.rowCount = properties.rowCount || undefined;
	this.validRow = properties.validRow || undefined;
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
	return 0;
};
ResultSet.prototype.fieldName = function () {
	return '';
};
ResultSet.prototype.fireEvent = function () {
};
ResultSet.prototype.getApiName = function () {
	return this.apiName;
};
ResultSet.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ResultSet.prototype.getFieldCount = function () {
	return this.fieldCount;
};
ResultSet.prototype.getFieldName = function () {
	return '';
};
ResultSet.prototype.getRowCount = function () {
	return this.rowCount;
};
ResultSet.prototype.getValidRow = function () {
	return this.validRow;
};
ResultSet.prototype.isValidRow = function () {
	return true;
};
ResultSet.prototype.next = function () {
	return true;
};
ResultSet.prototype.removeEventListener = function () {
};
ResultSet.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new ResultSet(properties);
};