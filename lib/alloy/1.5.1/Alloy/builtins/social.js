function social(properties) {
	properties = properties || {};
	return this;
}
social.prototype.authorize = function () {
};
social.prototype.deauthorize = function () {
};
social.prototype.isAuthorized = function () {
	return true;
};
social.prototype.share = function () {
};
module.exports = function (properties) {
	return new social(properties);
};