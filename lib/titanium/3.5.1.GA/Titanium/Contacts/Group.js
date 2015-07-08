function Group(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Contacts.Group';
	this.bubbleParent = properties.bubbleParent || true;
	this.name = properties.name || '';
	this.recordId = properties.recordId || 0;
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
	return '';
};
Group.prototype.getBubbleParent = function () {
	return true;
};
Group.prototype.getName = function () {
	return '';
};
Group.prototype.getRecordId = function () {
	return 0;
};
Group.prototype.members = function () {
	return [];
};
Group.prototype.remove = function () {
};
Group.prototype.removeEventListener = function () {
};
Group.prototype.setBubbleParent = function () {
};
Group.prototype.setName = function () {
};
Group.prototype.setRecordId = function () {
};
Group.prototype.sortedMembers = function () {
	return [];
};
module.exports = function (properties) {
	return new Group(properties);
};