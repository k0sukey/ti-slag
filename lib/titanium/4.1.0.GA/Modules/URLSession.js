function URLSession(properties) {
	properties = properties || {};
	this.apiName = 'Modules.URLSession';
	return this;
}
URLSession.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
URLSession.prototype.createURLSessionBackgroundConfiguration = function (params) {
	var URLSessionBackgroundConfiguration = require('./URLSession/URLSessionBackgroundConfiguration');
	return URLSessionBackgroundConfiguration(params);
};
URLSession.prototype.createURLSession = function (params) {
	var URLSession = require('./URLSession/URLSession');
	return URLSession(params);
};
URLSession.prototype.finishTasksAndInvalidate = function () {
};
URLSession.prototype.invalidateAndCancel = function () {
};
URLSession.prototype.backgroundDownloadTaskWithURL = function () {
	return '';
};
URLSession.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new URLSession(properties);
};