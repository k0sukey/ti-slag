var crypto = require('crypto');
function MenuItem(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'actionView',
			'actionViewExpanded',
			'apiName',
			'bubbleParent',
			'checkable',
			'checked',
			'enabled',
			'groupId',
			'icon',
			'itemId',
			'order',
			'showAsAction',
			'title',
			'titleCondensed',
			'visible',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.actionView = __SLAG__properties.actionView || {};
	if (__SLAG__properties.actionViewExpanded) {
		throw new Error('Ti.Android.MenuItem.actionViewExpanded is read only property');
	}
	this.actionViewExpanded = true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Android.MenuItem.apiName is read only property');
	}
	this.apiName = 'Ti.Android.MenuItem';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.checkable = __SLAG__properties.checkable || true;
	this.checked = __SLAG__properties.checked || true;
	this.enabled = __SLAG__properties.enabled || true;
	if (__SLAG__properties.groupId) {
		throw new Error('Ti.Android.MenuItem.groupId is read only property');
	}
	this.groupId = 0;
	this.icon = __SLAG__properties.icon || 0;
	if (__SLAG__properties.itemId) {
		throw new Error('Ti.Android.MenuItem.itemId is read only property');
	}
	this.itemId = 0;
	if (__SLAG__properties.order) {
		throw new Error('Ti.Android.MenuItem.order is read only property');
	}
	this.order = 0;
	this.showAsAction = __SLAG__properties.showAsAction || 0;
	this.title = __SLAG__properties.title || '';
	this.titleCondensed = __SLAG__properties.titleCondensed || '';
	this.visible = __SLAG__properties.visible || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
MenuItem.prototype.addEventListener = function () {
};
MenuItem.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
MenuItem.prototype.collapseActionView = function () {
};
MenuItem.prototype.expandActionView = function () {
};
MenuItem.prototype.fireEvent = function () {
};
MenuItem.prototype.getActionView = function () {
	return this.actionView;
};
MenuItem.prototype.getApiName = function () {
	return this.apiName;
};
MenuItem.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
MenuItem.prototype.getGroupId = function () {
	return this.groupId;
};
MenuItem.prototype.getItemId = function () {
	return this.itemId;
};
MenuItem.prototype.getOrder = function () {
	return this.order;
};
MenuItem.prototype.getTitle = function () {
	return this.title;
};
MenuItem.prototype.getTitleCondensed = function () {
	return this.titleCondensed;
};
MenuItem.prototype.isActionViewExpanded = function () {
	return true;
};
MenuItem.prototype.isCheckable = function () {
	return true;
};
MenuItem.prototype.isChecked = function () {
	return true;
};
MenuItem.prototype.isEnabled = function () {
	return true;
};
MenuItem.prototype.isVisible = function () {
	return true;
};
MenuItem.prototype.removeEventListener = function () {
};
MenuItem.prototype.setActionView = function (property) {
	this.actionView = property;
};
MenuItem.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
MenuItem.prototype.setCheckable = function (property) {
	this.checkable = property;
};
MenuItem.prototype.setChecked = function (property) {
	this.checked = property;
};
MenuItem.prototype.setEnabled = function (property) {
	this.enabled = property;
};
MenuItem.prototype.setIcon = function (property) {
	this.icon = property;
};
MenuItem.prototype.setShowAsAction = function (property) {
	this.showAsAction = property;
};
MenuItem.prototype.setTitle = function (property) {
	this.title = property;
};
MenuItem.prototype.setTitleCondensed = function (property) {
	this.titleCondensed = property;
};
MenuItem.prototype.setVisible = function (property) {
	this.visible = property;
};
module.exports = function (properties) {
	return new MenuItem(properties);
};