function UserDefaults(properties) {
	properties = properties || {};
	this.apiName = 'Ti.App.iOS.UserDefaults';
	this.bubbleParent = properties.bubbleParent || true;
	this.suiteName = properties.suiteName || '';
	return this;
}
UserDefaults.prototype.addEventListener = function () {
};
UserDefaults.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
UserDefaults.prototype.fireEvent = function () {
};
UserDefaults.prototype.getApiName = function () {
	return '';
};
UserDefaults.prototype.getBool = function () {
	return true;
};
UserDefaults.prototype.getBubbleParent = function () {
	return true;
};
UserDefaults.prototype.getDouble = function () {
	return 0;
};
UserDefaults.prototype.getInt = function () {
	return 0;
};
UserDefaults.prototype.getList = function () {
	return [];
};
UserDefaults.prototype.getObject = function () {
	return {};
};
UserDefaults.prototype.getString = function () {
	return '';
};
UserDefaults.prototype.getSuiteName = function () {
	return '';
};
UserDefaults.prototype.hasProperty = function () {
	return true;
};
UserDefaults.prototype.listProperties = function () {
	return [];
};
UserDefaults.prototype.removeEventListener = function () {
};
UserDefaults.prototype.removeProperty = function () {
};
UserDefaults.prototype.setBool = function () {
};
UserDefaults.prototype.setBubbleParent = function () {
};
UserDefaults.prototype.setDouble = function () {
};
UserDefaults.prototype.setInt = function () {
};
UserDefaults.prototype.setList = function () {
};
UserDefaults.prototype.setObject = function () {
};
UserDefaults.prototype.setString = function () {
};
module.exports = function (properties) {
	return new UserDefaults(properties);
};