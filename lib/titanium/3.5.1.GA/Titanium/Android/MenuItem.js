var crypto = require('crypto');
function MenuItem(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
	this.actionView = __SLAG_PROPERTIES.actionView || {};
	if (__SLAG_PROPERTIES.actionViewExpanded) {
		throw new Error('Ti.Android.MenuItem.actionViewExpanded is read only property');
	}
	this.actionViewExpanded = true;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Android.MenuItem.apiName is read only property');
	}
	this.apiName = 'Ti.Android.MenuItem';
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	this.checkable = __SLAG_PROPERTIES.checkable || true;
	this.checked = __SLAG_PROPERTIES.checked || true;
	this.enabled = __SLAG_PROPERTIES.enabled || true;
	if (__SLAG_PROPERTIES.groupId) {
		throw new Error('Ti.Android.MenuItem.groupId is read only property');
	}
	this.groupId = 0;
	this.icon = __SLAG_PROPERTIES.icon || 0;
	if (__SLAG_PROPERTIES.itemId) {
		throw new Error('Ti.Android.MenuItem.itemId is read only property');
	}
	this.itemId = 0;
	if (__SLAG_PROPERTIES.order) {
		throw new Error('Ti.Android.MenuItem.order is read only property');
	}
	this.order = 0;
	this.showAsAction = __SLAG_PROPERTIES.showAsAction || 0;
	this.title = __SLAG_PROPERTIES.title || '';
	this.titleCondensed = __SLAG_PROPERTIES.titleCondensed || '';
	this.visible = __SLAG_PROPERTIES.visible || true;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
MenuItem.prototype.addEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
MenuItem.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
MenuItem.prototype.collapseActionView = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
MenuItem.prototype.expandActionView = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
MenuItem.prototype.fireEvent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
MenuItem.prototype.getActionView = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.actionView;
};
MenuItem.prototype.getApiName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
MenuItem.prototype.getBubbleParent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
MenuItem.prototype.getGroupId = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.groupId;
};
MenuItem.prototype.getItemId = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.itemId;
};
MenuItem.prototype.getOrder = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.order;
};
MenuItem.prototype.getTitle = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.title;
};
MenuItem.prototype.getTitleCondensed = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.titleCondensed;
};
MenuItem.prototype.isActionViewExpanded = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
MenuItem.prototype.isCheckable = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
MenuItem.prototype.isChecked = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
MenuItem.prototype.isEnabled = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
MenuItem.prototype.isVisible = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
MenuItem.prototype.removeEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
MenuItem.prototype.setActionView = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.actionView = __SLAG__PROPERTY;
};
MenuItem.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
MenuItem.prototype.setCheckable = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.checkable = __SLAG__PROPERTY;
};
MenuItem.prototype.setChecked = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.checked = __SLAG__PROPERTY;
};
MenuItem.prototype.setEnabled = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.enabled = __SLAG__PROPERTY;
};
MenuItem.prototype.setIcon = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.icon = __SLAG__PROPERTY;
};
MenuItem.prototype.setShowAsAction = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.showAsAction = __SLAG__PROPERTY;
};
MenuItem.prototype.setTitle = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.title = __SLAG__PROPERTY;
};
MenuItem.prototype.setTitleCondensed = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.titleCondensed = __SLAG__PROPERTY;
};
MenuItem.prototype.setVisible = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.visible = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new MenuItem(properties);
};