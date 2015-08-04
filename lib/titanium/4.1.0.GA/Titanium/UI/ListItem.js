var crypto = require('crypto');
function ListItem(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'lifecycleContainer',
			'itemId',
			'accessoryType',
			'backgroundColor',
			'backgroundImage',
			'backgroundGradient',
			'selectedBackgroundColor',
			'selectedBackgroundImage',
			'selectedBackgroundGradient',
			'canEdit',
			'canMove',
			'editActions',
			'searchableText',
			'color',
			'font',
			'height',
			'image',
			'title',
			'selectionStyle',
			'subtitle',
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
		throw new Error('Ti.UI.ListItem.apiName is read only property');
	}
	this.apiName = 'Ti.UI.ListItem';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.itemId = __SLAG__properties.itemId || '';
	this.accessoryType = __SLAG__properties.accessoryType || 0;
	this.backgroundColor = __SLAG__properties.backgroundColor || '';
	this.backgroundImage = __SLAG__properties.backgroundImage || '';
	this.backgroundGradient = __SLAG__properties.backgroundGradient || {};
	this.selectedBackgroundColor = __SLAG__properties.selectedBackgroundColor || '';
	this.selectedBackgroundImage = __SLAG__properties.selectedBackgroundImage || '';
	this.selectedBackgroundGradient = __SLAG__properties.selectedBackgroundGradient || {};
	this.canEdit = __SLAG__properties.canEdit || true;
	this.canMove = __SLAG__properties.canMove || true;
	this.editActions = __SLAG__properties.editActions || [];
	this.searchableText = __SLAG__properties.searchableText || '';
	this.color = __SLAG__properties.color || '';
	this.font = __SLAG__properties.font || {};
	this.height = __SLAG__properties.height || 0;
	this.image = __SLAG__properties.image || '';
	this.title = __SLAG__properties.title || '';
	this.selectionStyle = __SLAG__properties.selectionStyle || 0;
	this.subtitle = __SLAG__properties.subtitle || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
ListItem.prototype.getApiName = function () {
	return this.apiName;
};
ListItem.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
ListItem.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
ListItem.prototype.getEditActions = function () {
	return this.editActions;
};
ListItem.prototype.setEditActions = function (property) {
	this.editActions = property;
};
module.exports = function (properties) {
	return new ListItem(properties);
};