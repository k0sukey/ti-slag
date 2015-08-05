var crypto = require('crypto');
function ListItem(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'accessoryType',
			'apiName',
			'backgroundColor',
			'backgroundGradient',
			'backgroundImage',
			'canEdit',
			'canMove',
			'color',
			'font',
			'height',
			'image',
			'itemId',
			'searchableText',
			'selectedBackgroundColor',
			'selectedBackgroundGradient',
			'selectedBackgroundImage',
			'selectionStyle',
			'subtitle',
			'title',
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
	this.accessoryType = __SLAG_PROPERTIES.accessoryType || 0;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.ListItem.apiName is read only property');
	}
	this.apiName = 'Ti.UI.ListItem';
	this.backgroundColor = __SLAG_PROPERTIES.backgroundColor || '';
	this.backgroundGradient = __SLAG_PROPERTIES.backgroundGradient || {};
	this.backgroundImage = __SLAG_PROPERTIES.backgroundImage || '';
	this.canEdit = __SLAG_PROPERTIES.canEdit || true;
	this.canMove = __SLAG_PROPERTIES.canMove || true;
	this.color = __SLAG_PROPERTIES.color || '';
	this.font = __SLAG_PROPERTIES.font || {};
	this.height = __SLAG_PROPERTIES.height || 0;
	this.image = __SLAG_PROPERTIES.image || '';
	this.itemId = __SLAG_PROPERTIES.itemId || '';
	this.searchableText = __SLAG_PROPERTIES.searchableText || '';
	this.selectedBackgroundColor = __SLAG_PROPERTIES.selectedBackgroundColor || '';
	this.selectedBackgroundGradient = __SLAG_PROPERTIES.selectedBackgroundGradient || {};
	this.selectedBackgroundImage = __SLAG_PROPERTIES.selectedBackgroundImage || '';
	this.selectionStyle = __SLAG_PROPERTIES.selectionStyle || 0;
	this.subtitle = __SLAG_PROPERTIES.subtitle || '';
	this.title = __SLAG_PROPERTIES.title || '';
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
module.exports = function (properties) {
	return new ListItem(properties);
};