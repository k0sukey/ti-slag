var crypto = require('crypto');
function ListItem(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
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
	this.accessoryType = __SLAG__properties.accessoryType || 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.ListItem.apiName is read only property');
	}
	this.apiName = 'Ti.UI.ListItem';
	this.backgroundColor = __SLAG__properties.backgroundColor || '';
	this.backgroundGradient = __SLAG__properties.backgroundGradient || {};
	this.backgroundImage = __SLAG__properties.backgroundImage || '';
	this.canEdit = __SLAG__properties.canEdit || true;
	this.canMove = __SLAG__properties.canMove || true;
	this.color = __SLAG__properties.color || '';
	this.font = __SLAG__properties.font || {};
	this.height = __SLAG__properties.height || 0;
	this.image = __SLAG__properties.image || '';
	this.itemId = __SLAG__properties.itemId || '';
	this.searchableText = __SLAG__properties.searchableText || '';
	this.selectedBackgroundColor = __SLAG__properties.selectedBackgroundColor || '';
	this.selectedBackgroundGradient = __SLAG__properties.selectedBackgroundGradient || {};
	this.selectedBackgroundImage = __SLAG__properties.selectedBackgroundImage || '';
	this.selectionStyle = __SLAG__properties.selectionStyle || 0;
	this.subtitle = __SLAG__properties.subtitle || '';
	this.title = __SLAG__properties.title || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
ListItem.prototype.getApiName = function () {
	return this.apiName;
};
module.exports = function (properties) {
	return new ListItem(properties);
};