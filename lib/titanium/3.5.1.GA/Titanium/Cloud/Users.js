function Users(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Cloud.Users';
	this.bubbleParent = properties.bubbleParent || true;
	return this;
}
Users.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Users.prototype.create = function () {
};
Users.prototype.getApiName = function () {
	return '';
};
Users.prototype.getBubbleParent = function () {
	return true;
};
Users.prototype.login = function () {
};
Users.prototype.logout = function () {
};
Users.prototype.query = function () {
};
Users.prototype.remove = function () {
};
Users.prototype.requestResetPassword = function () {
};
Users.prototype.resendConfirmation = function () {
};
Users.prototype.search = function () {
};
Users.prototype.secureCreate = function () {
	throw new Error('Ti.Cloud.Users.secureCreate was deprecated, since 3.2.3');
};
Users.prototype.secureLogin = function () {
	throw new Error('Ti.Cloud.Users.secureLogin was deprecated, since 3.2.3');
};
Users.prototype.secureStatus = function () {
	throw new Error('Ti.Cloud.Users.secureStatus was deprecated, since 3.2.3');
};
Users.prototype.setBubbleParent = function () {
};
Users.prototype.show = function () {
};
Users.prototype.showMe = function () {
};
Users.prototype.update = function () {
};
module.exports = function (properties) {
	return new Users(properties);
};