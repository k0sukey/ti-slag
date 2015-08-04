var crypto = require('crypto');
function OptionDialog(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'androidView',
			'buttonNames',
			'cancel',
			'destructive',
			'options',
			'opaquebackground',
			'persistent',
			'selectedIndex',
			'title',
			'titleid',
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
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.OptionDialog.apiName is read only property');
	}
	this.apiName = 'Ti.UI.OptionDialog';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.androidView = __SLAG__properties.androidView || {};
	this.buttonNames = __SLAG__properties.buttonNames || '';
	this.cancel = __SLAG__properties.cancel || 0;
	this.destructive = __SLAG__properties.destructive || 0;
	this.options = __SLAG__properties.options || '';
	this.opaquebackground = __SLAG__properties.opaquebackground || true;
	this.persistent = __SLAG__properties.persistent || true;
	this.selectedIndex = __SLAG__properties.selectedIndex || 0;
	this.title = __SLAG__properties.title || '';
	this.titleid = __SLAG__properties.titleid || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
OptionDialog.prototype.addEventListener = function () {
};
OptionDialog.prototype.removeEventListener = function () {
};
OptionDialog.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
OptionDialog.prototype.fireEvent = function () {
};
OptionDialog.prototype.finishLayout = function () {
	throw new Error('Ti.UI.OptionDialog.finishLayout was deprecated, since 3.0.0');
};
OptionDialog.prototype.startLayout = function () {
	throw new Error('Ti.UI.OptionDialog.startLayout was deprecated, since 3.0.0');
};
OptionDialog.prototype.updateLayout = function () {
	throw new Error('Ti.UI.OptionDialog.updateLayout was deprecated, since 3.0.0');
};
OptionDialog.prototype.hide = function () {
};
OptionDialog.prototype.show = function () {
};
OptionDialog.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
OptionDialog.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
OptionDialog.prototype.getApiName = function () {
	return this.apiName;
};
OptionDialog.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
OptionDialog.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
OptionDialog.prototype.getAndroidView = function () {
	return this.androidView;
};
OptionDialog.prototype.setAndroidView = function (property) {
	this.androidView = property;
};
OptionDialog.prototype.getButtonNames = function () {
	return this.buttonNames;
};
OptionDialog.prototype.setButtonNames = function (property) {
	this.buttonNames = property;
};
OptionDialog.prototype.getCancel = function () {
	return this.cancel;
};
OptionDialog.prototype.setCancel = function (property) {
	this.cancel = property;
};
OptionDialog.prototype.getDestructive = function () {
	return this.destructive;
};
OptionDialog.prototype.setDestructive = function (property) {
	this.destructive = property;
};
OptionDialog.prototype.getOptions = function () {
	return this.options;
};
OptionDialog.prototype.setOptions = function (property) {
	this.options = property;
};
OptionDialog.prototype.getOpaquebackground = function () {
	return this.opaquebackground;
};
OptionDialog.prototype.setOpaquebackground = function (property) {
	this.opaquebackground = property;
};
OptionDialog.prototype.getPersistent = function () {
	return this.persistent;
};
OptionDialog.prototype.setPersistent = function (property) {
	this.persistent = property;
};
OptionDialog.prototype.getSelectedIndex = function () {
	return this.selectedIndex;
};
OptionDialog.prototype.setSelectedIndex = function (property) {
	this.selectedIndex = property;
};
OptionDialog.prototype.getTitle = function () {
	return this.title;
};
OptionDialog.prototype.setTitle = function (property) {
	this.title = property;
};
OptionDialog.prototype.getTitleid = function () {
	return this.titleid;
};
OptionDialog.prototype.setTitleid = function (property) {
	this.titleid = property;
};
module.exports = function (properties) {
	return new OptionDialog(properties);
};