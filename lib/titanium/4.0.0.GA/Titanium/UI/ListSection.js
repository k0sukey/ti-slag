var crypto = require('crypto');
function ListSection(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'footerTitle',
			'footerView',
			'headerTitle',
			'headerView',
			'items',
			'lifecycleContainer',
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
		throw new Error('Ti.UI.ListSection.apiName is read only property');
	}
	this.apiName = 'Ti.UI.ListSection';
	this.footerTitle = __SLAG__properties.footerTitle || '';
	this.footerView = __SLAG__properties.footerView || {};
	this.headerTitle = __SLAG__properties.headerTitle || '';
	this.headerView = __SLAG__properties.headerView || {};
	this.items = __SLAG__properties.items || [];
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
ListSection.prototype.appendItems = function () {
};
ListSection.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
ListSection.prototype.deleteItemsAt = function () {
};
ListSection.prototype.getApiName = function () {
	return this.apiName;
};
ListSection.prototype.getFooterTitle = function () {
	return this.footerTitle;
};
ListSection.prototype.getFooterView = function () {
	return this.footerView;
};
ListSection.prototype.getHeaderTitle = function () {
	return this.headerTitle;
};
ListSection.prototype.getHeaderView = function () {
	return this.headerView;
};
ListSection.prototype.getItemAt = function () {
	return {};
};
ListSection.prototype.getItems = function () {
	return this.items;
};
ListSection.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
ListSection.prototype.insertItemsAt = function () {
};
ListSection.prototype.replaceItemsAt = function () {
};
ListSection.prototype.setFooterTitle = function (property) {
	this.footerTitle = property;
};
ListSection.prototype.setFooterView = function (property) {
	this.footerView = property;
};
ListSection.prototype.setHeaderTitle = function (property) {
	this.headerTitle = property;
};
ListSection.prototype.setHeaderView = function (property) {
	this.headerView = property;
};
ListSection.prototype.setItems = function (property) {
	this.items = property;
};
ListSection.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
ListSection.prototype.updateItemAt = function () {
};
module.exports = function (properties) {
	return new ListSection(properties);
};