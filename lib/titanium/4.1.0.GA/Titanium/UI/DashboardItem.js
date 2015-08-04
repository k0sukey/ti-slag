var crypto = require('crypto');
function DashboardItem(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'badge',
			'canDelete',
			'image',
			'selectedImage',
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
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.DashboardItem.apiName is read only property');
	}
	this.apiName = 'Ti.UI.DashboardItem';
	this.badge = __SLAG__properties.badge || 0;
	this.canDelete = __SLAG__properties.canDelete || true;
	this.image = __SLAG__properties.image || '';
	this.selectedImage = __SLAG__properties.selectedImage || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
DashboardItem.prototype.addEventListener = function () {
};
DashboardItem.prototype.removeEventListener = function () {
};
DashboardItem.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
DashboardItem.prototype.fireEvent = function () {
};
DashboardItem.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
DashboardItem.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
DashboardItem.prototype.getApiName = function () {
	return this.apiName;
};
DashboardItem.prototype.getBadge = function () {
	return this.badge;
};
DashboardItem.prototype.setBadge = function (property) {
	this.badge = property;
};
DashboardItem.prototype.getCanDelete = function () {
	return this.canDelete;
};
DashboardItem.prototype.setCanDelete = function (property) {
	this.canDelete = property;
};
DashboardItem.prototype.getImage = function () {
	return this.image;
};
DashboardItem.prototype.setImage = function (property) {
	this.image = property;
};
DashboardItem.prototype.getSelectedImage = function () {
	return this.selectedImage;
};
DashboardItem.prototype.setSelectedImage = function (property) {
	this.selectedImage = property;
};
module.exports = function (properties) {
	return new DashboardItem(properties);
};