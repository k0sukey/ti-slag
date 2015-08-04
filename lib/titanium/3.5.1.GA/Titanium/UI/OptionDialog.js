var crypto = require('crypto');
function OptionDialog(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'androidView',
			'apiName',
			'bubbleParent',
			'buttonNames',
			'cancel',
			'destructive',
			'opaquebackground',
			'options',
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
	this.androidView = __SLAG__properties.androidView || {};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.OptionDialog.apiName is read only property');
	}
	this.apiName = 'Ti.UI.OptionDialog';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.buttonNames = __SLAG__properties.buttonNames || '';
	this.cancel = __SLAG__properties.cancel || 0;
	this.destructive = __SLAG__properties.destructive || 0;
	this.opaquebackground = __SLAG__properties.opaquebackground || true;
	this.options = __SLAG__properties.options || '';
	this.persistent = __SLAG__properties.persistent || true;
	this.selectedIndex = __SLAG__properties.selectedIndex || 0;
	this.title = __SLAG__properties.title || '';
	this.titleid = __SLAG__properties.titleid || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
OptionDialog.prototype.addEventListener = function () {
};
OptionDialog.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
OptionDialog.prototype.fireEvent = function () {
};
OptionDialog.prototype.getAndroidView = function () {
	return this.androidView;
};
OptionDialog.prototype.getApiName = function () {
	return this.apiName;
};
OptionDialog.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
OptionDialog.prototype.getButtonNames = function () {
	return this.buttonNames;
};
OptionDialog.prototype.getCancel = function () {
	return this.cancel;
};
OptionDialog.prototype.getDestructive = function () {
	return this.destructive;
};
OptionDialog.prototype.getOpaquebackground = function () {
	return this.opaquebackground;
};
OptionDialog.prototype.getOptions = function () {
	return this.options;
};
OptionDialog.prototype.getPersistent = function () {
	return this.persistent;
};
OptionDialog.prototype.getSelectedIndex = function () {
	return this.selectedIndex;
};
OptionDialog.prototype.getTitle = function () {
	return this.title;
};
OptionDialog.prototype.getTitleid = function () {
	return this.titleid;
};
OptionDialog.prototype.hide = function () {
};
OptionDialog.prototype.removeEventListener = function () {
};
OptionDialog.prototype.setAndroidView = function (property) {
	this.androidView = property;
};
OptionDialog.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
OptionDialog.prototype.setCancel = function (property) {
	this.cancel = property;
};
OptionDialog.prototype.setOpaquebackground = function (property) {
	this.opaquebackground = property;
};
OptionDialog.prototype.setPersistent = function (property) {
	this.persistent = property;
};
OptionDialog.prototype.setTitle = function (property) {
	this.title = property;
};
OptionDialog.prototype.setTitleid = function (property) {
	this.titleid = property;
};
OptionDialog.prototype.show = function () {
};
module.exports = function (properties) {
	return new OptionDialog(properties);
};