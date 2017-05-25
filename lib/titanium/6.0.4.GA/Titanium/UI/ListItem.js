var crypto = require('crypto');
function ListItem(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
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
			'canInsert',
			'canMove',
			'editActions',
			'searchableText',
			'color',
			'selectedColor',
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
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.itemId = undefined;
	} else {
		this.itemId = __SLAG_PROPERTIES.itemId || '';
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.accessoryType = undefined;
	} else {
		this.accessoryType = __SLAG_PROPERTIES.accessoryType || 0;
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.backgroundColor = undefined;
	} else {
		this.backgroundColor = __SLAG_PROPERTIES.backgroundColor || '';
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.backgroundImage = undefined;
	} else {
		this.backgroundImage = __SLAG_PROPERTIES.backgroundImage || '';
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.backgroundGradient = undefined;
	} else {
		this.backgroundGradient = __SLAG_PROPERTIES.backgroundGradient || {};
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.selectedBackgroundColor = undefined;
	} else {
		this.selectedBackgroundColor = __SLAG_PROPERTIES.selectedBackgroundColor || '';
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.selectedBackgroundImage = undefined;
	} else {
		this.selectedBackgroundImage = __SLAG_PROPERTIES.selectedBackgroundImage || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.selectedBackgroundGradient = undefined;
	} else {
		this.selectedBackgroundGradient = __SLAG_PROPERTIES.selectedBackgroundGradient || {};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.canEdit = undefined;
	} else {
		this.canEdit = __SLAG_PROPERTIES.canEdit || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.canInsert = undefined;
	} else {
		this.canInsert = __SLAG_PROPERTIES.canInsert || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.canMove = undefined;
	} else {
		this.canMove = __SLAG_PROPERTIES.canMove || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.editActions = undefined;
	} else {
		this.editActions = __SLAG_PROPERTIES.editActions || [];
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.searchableText = undefined;
	} else {
		this.searchableText = __SLAG_PROPERTIES.searchableText || '';
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.color = undefined;
	} else {
		this.color = __SLAG_PROPERTIES.color || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.selectedColor = undefined;
	} else {
		this.selectedColor = __SLAG_PROPERTIES.selectedColor || '';
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.font = undefined;
	} else {
		this.font = __SLAG_PROPERTIES.font || {};
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.height = undefined;
	} else {
		this.height = __SLAG_PROPERTIES.height || 0;
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.image = undefined;
	} else {
		this.image = __SLAG_PROPERTIES.image || '';
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.title = undefined;
	} else {
		this.title = __SLAG_PROPERTIES.title || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.selectionStyle = undefined;
	} else {
		this.selectionStyle = __SLAG_PROPERTIES.selectionStyle || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.subtitle = undefined;
	} else {
		this.subtitle = __SLAG_PROPERTIES.subtitle || '';
	}
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
ListItem.prototype.getSelectedColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.selectedColor;
};
ListItem.prototype.setSelectedColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.selectedColor = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new ListItem(properties);
};