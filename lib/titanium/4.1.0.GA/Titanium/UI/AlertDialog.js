var crypto = require('crypto');
function AlertDialog(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'androidView',
			'destructive',
			'messageid',
			'style',
			'titleid',
			'ok',
			'okid',
			'persistent',
			'buttonNames',
			'cancel',
			'message',
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
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.AlertDialog.apiName is read only property');
	}
	this.apiName = 'Ti.UI.AlertDialog';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.androidView = __SLAG__properties.androidView || {};
	this.destructive = __SLAG__properties.destructive || 0;
	this.messageid = __SLAG__properties.messageid || '';
	this.style = __SLAG__properties.style || 0;
	this.titleid = __SLAG__properties.titleid || '';
	this.ok = __SLAG__properties.ok || '';
	this.okid = __SLAG__properties.okid || '';
	this.persistent = __SLAG__properties.persistent || true;
	this.buttonNames = __SLAG__properties.buttonNames || '';
	this.cancel = __SLAG__properties.cancel || 0;
	this.message = __SLAG__properties.message || '';
	this.title = __SLAG__properties.title || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
AlertDialog.prototype.addEventListener = function () {
};
AlertDialog.prototype.removeEventListener = function () {
};
AlertDialog.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
AlertDialog.prototype.fireEvent = function () {
};
AlertDialog.prototype.finishLayout = function () {
	throw new Error('Ti.UI.AlertDialog.finishLayout was deprecated, since 3.0.0');
};
AlertDialog.prototype.startLayout = function () {
	throw new Error('Ti.UI.AlertDialog.startLayout was deprecated, since 3.0.0');
};
AlertDialog.prototype.updateLayout = function () {
	throw new Error('Ti.UI.AlertDialog.updateLayout was deprecated, since 3.0.0');
};
AlertDialog.prototype.hide = function () {
};
AlertDialog.prototype.show = function () {
};
AlertDialog.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
AlertDialog.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
AlertDialog.prototype.getApiName = function () {
	return this.apiName;
};
AlertDialog.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
AlertDialog.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
AlertDialog.prototype.getDestructive = function () {
	return this.destructive;
};
AlertDialog.prototype.setDestructive = function (property) {
	this.destructive = property;
};
AlertDialog.prototype.getStyle = function () {
	return this.style;
};
AlertDialog.prototype.setStyle = function (property) {
	this.style = property;
};
AlertDialog.prototype.getOk = function () {
	return this.ok;
};
AlertDialog.prototype.setOk = function (property) {
	this.ok = property;
};
AlertDialog.prototype.getPersistent = function () {
	return this.persistent;
};
AlertDialog.prototype.setPersistent = function (property) {
	this.persistent = property;
};
AlertDialog.prototype.getButtonNames = function () {
	return this.buttonNames;
};
AlertDialog.prototype.setButtonNames = function (property) {
	this.buttonNames = property;
};
AlertDialog.prototype.getCancel = function () {
	return this.cancel;
};
AlertDialog.prototype.setCancel = function (property) {
	this.cancel = property;
};
AlertDialog.prototype.getMessage = function () {
	return this.message;
};
AlertDialog.prototype.setMessage = function (property) {
	this.message = property;
};
AlertDialog.prototype.getTitle = function () {
	return this.title;
};
AlertDialog.prototype.setTitle = function (property) {
	this.title = property;
};
module.exports = function (properties) {
	return new AlertDialog(properties);
};