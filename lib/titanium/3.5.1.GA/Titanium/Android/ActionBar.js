function ActionBar(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Android.ActionBar';
	this.backgroundImage = properties.backgroundImage || '';
	this.bubbleParent = properties.bubbleParent || true;
	this.displayHomeAsUp = properties.displayHomeAsUp || true;
	this.homeButtonEnabled = properties.homeButtonEnabled || true;
	this.icon = properties.icon || '';
	this.logo = properties.logo || '';
	this.navigationMode = properties.navigationMode || 0;
	this.onHomeIconItemSelected = properties.onHomeIconItemSelected || {};
	this.subtitle = properties.subtitle || '';
	this.title = properties.title || '';
	return this;
}
ActionBar.prototype.addEventListener = function () {
};
ActionBar.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ActionBar.prototype.fireEvent = function () {
};
ActionBar.prototype.getApiName = function () {
	return '';
};
ActionBar.prototype.getBubbleParent = function () {
	return true;
};
ActionBar.prototype.getNavigationMode = function () {
	return 0;
};
ActionBar.prototype.getSubtitle = function () {
	return '';
};
ActionBar.prototype.getTitle = function () {
	return '';
};
ActionBar.prototype.hide = function () {
};
ActionBar.prototype.removeEventListener = function () {
};
ActionBar.prototype.setBackgroundImage = function () {
};
ActionBar.prototype.setBubbleParent = function () {
};
ActionBar.prototype.setDisplayHomeAsUp = function () {
};
ActionBar.prototype.setDisplayShowHomeEnabled = function () {
};
ActionBar.prototype.setDisplayShowTitleEnabled = function () {
};
ActionBar.prototype.setHomeButtonEnabled = function () {
};
ActionBar.prototype.setIcon = function () {
};
ActionBar.prototype.setLogo = function () {
};
ActionBar.prototype.setNavigationMode = function () {
};
ActionBar.prototype.setOnHomeIconItemSelected = function () {
};
ActionBar.prototype.setSubtitle = function () {
};
ActionBar.prototype.setTitle = function () {
};
ActionBar.prototype.show = function () {
};
module.exports = function (properties) {
	return new ActionBar(properties);
};