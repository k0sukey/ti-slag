function Group(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Contacts.Tizen.Group';
	return this;
}
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
Group.prototype.members = function () {
};
Group.prototype.removeEventListener = function () {
};
Group.prototype.sortedMembers = function () {
};
module.exports = function (properties) {
	return new Group(properties);
};