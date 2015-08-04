var crypto = require('crypto');
function TableViewSection(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'footerTitle',
			'footerView',
			'headerTitle',
			'headerView',
			'rowCount',
			'rows',
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
		throw new Error('Ti.UI.TableViewSection.apiName is read only property');
	}
	this.apiName = 'Ti.UI.TableViewSection';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.footerTitle = __SLAG__properties.footerTitle || '';
	this.footerView = __SLAG__properties.footerView || {};
	this.headerTitle = __SLAG__properties.headerTitle || '';
	this.headerView = __SLAG__properties.headerView || {};
	if (__SLAG__properties.rowCount) {
		throw new Error('Ti.UI.TableViewSection.rowCount is read only property');
	}
	this.rowCount = 0;
	if (__SLAG__properties.rows) {
		throw new Error('Ti.UI.TableViewSection.rows is read only property');
	}
	this.rows = [];
	this.id = __SLAG__properties.id || '';
	return this;
}
TableViewSection.prototype.addEventListener = function () {
};
TableViewSection.prototype.removeEventListener = function () {
};
TableViewSection.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
TableViewSection.prototype.fireEvent = function () {
};
TableViewSection.prototype.add = function () {
};
TableViewSection.prototype.remove = function () {
};
TableViewSection.prototype.rowAtIndex = function () {
	return {};
};
TableViewSection.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
TableViewSection.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
TableViewSection.prototype.getApiName = function () {
	return this.apiName;
};
TableViewSection.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
TableViewSection.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
TableViewSection.prototype.getFooterTitle = function () {
	return this.footerTitle;
};
TableViewSection.prototype.setFooterTitle = function (property) {
	this.footerTitle = property;
};
TableViewSection.prototype.getFooterView = function () {
	return this.footerView;
};
TableViewSection.prototype.setFooterView = function (property) {
	this.footerView = property;
};
TableViewSection.prototype.getHeaderTitle = function () {
	return this.headerTitle;
};
TableViewSection.prototype.setHeaderTitle = function (property) {
	this.headerTitle = property;
};
TableViewSection.prototype.getHeaderView = function () {
	return this.headerView;
};
TableViewSection.prototype.setHeaderView = function (property) {
	this.headerView = property;
};
TableViewSection.prototype.getRowCount = function () {
	return this.rowCount;
};
TableViewSection.prototype.getRows = function () {
	return this.rows;
};
module.exports = function (properties) {
	return new TableViewSection(properties);
};