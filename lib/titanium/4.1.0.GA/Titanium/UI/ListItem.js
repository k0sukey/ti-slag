var crypto = require('crypto');
function ListItem(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
	if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG_NAME in __SLAG_PROPERTIES) {
			if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) {
				throw new Error('Use user custom property ' + __SLAG_NAME);
			}
		}
	} else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG_PROPERTIES.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.ListItem.apiName is read only property');
	}
	this.apiName = 'Ti.UI.ListItem';
	this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	this.itemId = __SLAG_PROPERTIES.itemId || '';
	this.accessoryType = __SLAG_PROPERTIES.accessoryType || 0;
	this.backgroundColor = __SLAG_PROPERTIES.backgroundColor || '';
	this.backgroundImage = __SLAG_PROPERTIES.backgroundImage || '';
	this.backgroundGradient = __SLAG_PROPERTIES.backgroundGradient || {};
	this.selectedBackgroundColor = __SLAG_PROPERTIES.selectedBackgroundColor || '';
	this.selectedBackgroundImage = __SLAG_PROPERTIES.selectedBackgroundImage || '';
	this.selectedBackgroundGradient = __SLAG_PROPERTIES.selectedBackgroundGradient || {};
	this.canEdit = __SLAG_PROPERTIES.canEdit || true;
	this.canMove = __SLAG_PROPERTIES.canMove || true;
	this.editActions = __SLAG_PROPERTIES.editActions || [];
	this.searchableText = __SLAG_PROPERTIES.searchableText || '';
	this.color = __SLAG_PROPERTIES.color || '';
	this.font = __SLAG_PROPERTIES.font || {};
	this.height = __SLAG_PROPERTIES.height || 0;
	this.image = __SLAG_PROPERTIES.image || '';
	this.title = __SLAG_PROPERTIES.title || '';
	this.selectionStyle = __SLAG_PROPERTIES.selectionStyle || 0;
	this.subtitle = __SLAG_PROPERTIES.subtitle || '';
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
ListItem.prototype.getApiName = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
ListItem.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
ListItem.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
ListItem.prototype.getEditActions = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.editActions;
};
ListItem.prototype.setEditActions = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.editActions = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new ListItem(properties);
};