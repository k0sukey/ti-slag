function Locale(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Locale';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.currentCountry = properties.currentCountry || undefined;
	this.currentLanguage = properties.currentLanguage || undefined;
	this.currentLocale = properties.currentLocale || undefined;
	return this;
}
Locale.prototype.addEventListener = function () {
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
Locale.prototype.getApiName = function () {
	return this.apiName;
};
Locale.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Locale.prototype.getCurrencyCode = function () {
	return '';
};
Locale.prototype.getCurrencySymbol = function () {
	return '';
};
Locale.prototype.getCurrentCountry = function () {
	return this.currentCountry;
};
Locale.prototype.getCurrentLanguage = function () {
	return this.currentLanguage;
};
Locale.prototype.getCurrentLocale = function () {
	return this.currentLocale;
};
Locale.prototype.getLocaleCurrencySymbol = function () {
	return '';
};
Locale.prototype.getString = function () {
	return '';
};
Locale.prototype.removeEventListener = function () {
};
Locale.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new Locale(properties);
};