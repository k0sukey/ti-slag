function Group(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Contacts.Group';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.name = properties.name || undefined;
	this.recordId = properties.recordId || undefined;
	return this;
}
Group.prototype.add = function () {
};
Group.prototype.addEventListener = function () {
};
Group.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Group.prototype.fireEvent = function () {
};
Group.prototype.getApiName = function () {
	return this.apiName;
};
Group.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Group.prototype.getName = function () {
	return this.name;
};
Group.prototype.getRecordId = function () {
	return this.recordId;
};
Group.prototype.members = function () {
	return [];
};
Group.prototype.remove = function () {
};
Group.prototype.removeEventListener = function () {
};
Group.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Group.prototype.setName = function (property) {
	this.name = property;
};
Group.prototype.setRecordId = function (property) {
	this.recordId = property;
};
Group.prototype.sortedMembers = function () {
	return [];
};
module.exports = function (properties) {
	return new Group(properties);
};