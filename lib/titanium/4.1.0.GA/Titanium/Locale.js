function Locale(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Locale';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.currentCountry = properties.currentCountry || '';
	this.currentLanguage = properties.currentLanguage || '';
	this.currentLocale = properties.currentLocale || '';
	return this;
}
Locale.prototype.addEventListener = function () {
};
Locale.prototype.removeEventListener = function () {
};
Locale.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Locale.prototype.fireEvent = function () {
};
Locale.prototype.formatTelephoneNumber = function () {
	return '';
};
Locale.prototype.getCurrencyCode = function () {
	return '';
};
Locale.prototype.getCurrencySymbol = function () {
	return '';
};
Locale.prototype.getLocaleCurrencySymbol = function () {
	return '';
};
Locale.prototype.getString = function () {
	return '';
};
Locale.prototype.getBubbleParent = function () {
	return true;
};
Locale.prototype.setBubbleParent = function () {
};
Locale.prototype.getApiName = function () {
	return '';
};
Locale.prototype.getLifecycleContainer = function () {
	return {};
};
Locale.prototype.setLifecycleContainer = function () {
};
Locale.prototype.getCurrentCountry = function () {
	return '';
};
Locale.prototype.getCurrentLanguage = function () {
	return '';
};
Locale.prototype.getCurrentLocale = function () {
	return '';
};
module.exports = function (properties) {
	return new Locale(properties);
};