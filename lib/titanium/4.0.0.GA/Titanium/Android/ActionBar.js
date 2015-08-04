var crypto = require('crypto');
function ActionBar(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'backgroundImage',
			'bubbleParent',
			'displayHomeAsUp',
			'homeButtonEnabled',
			'icon',
			'lifecycleContainer',
			'logo',
			'navigationMode',
			'onHomeIconItemSelected',
			'subtitle',
			'title',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT) {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT) {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Android.ActionBar.apiName is read only property');
	}
	this.apiName = 'Ti.Android.ActionBar';
	this.backgroundImage = __SLAG__properties.backgroundImage || '';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.displayHomeAsUp = __SLAG__properties.displayHomeAsUp || true;
	this.homeButtonEnabled = __SLAG__properties.homeButtonEnabled || true;
	this.icon = __SLAG__properties.icon || '';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.logo = __SLAG__properties.logo || '';
	this.navigationMode = __SLAG__properties.navigationMode || 0;
	this.onHomeIconItemSelected = __SLAG__properties.onHomeIconItemSelected || {};
	this.subtitle = __SLAG__properties.subtitle || '';
	this.title = __SLAG__properties.title || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
ActionBar.prototype.addEventListener = function () {
};
ActionBar.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
ActionBar.prototype.fireEvent = function () {
};
ActionBar.prototype.getApiName = function () {
	return this.apiName;
};
ActionBar.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ActionBar.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
ActionBar.prototype.getNavigationMode = function () {
	return this.navigationMode;
};
ActionBar.prototype.getSubtitle = function () {
	return this.subtitle;
};
ActionBar.prototype.getTitle = function () {
	return this.title;
};
ActionBar.prototype.hide = function () {
};
ActionBar.prototype.removeEventListener = function () {
};
ActionBar.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
ActionBar.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
ActionBar.prototype.setDisplayHomeAsUp = function (property) {
	this.displayHomeAsUp = property;
};
ActionBar.prototype.setDisplayShowHomeEnabled = function () {
};
ActionBar.prototype.setDisplayShowTitleEnabled = function () {
};
ActionBar.prototype.setHomeButtonEnabled = function (property) {
	this.homeButtonEnabled = property;
};
ActionBar.prototype.setIcon = function (property) {
	this.icon = property;
};
ActionBar.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
ActionBar.prototype.setLogo = function (property) {
	this.logo = property;
};
ActionBar.prototype.setNavigationMode = function (property) {
	this.navigationMode = property;
};
ActionBar.prototype.setOnHomeIconItemSelected = function (property) {
	this.onHomeIconItemSelected = property;
};
ActionBar.prototype.setSubtitle = function (property) {
	this.subtitle = property;
};
ActionBar.prototype.setTitle = function (property) {
	this.title = property;
};
ActionBar.prototype.show = function () {
};
module.exports = function (properties) {
	return new ActionBar(properties);
};