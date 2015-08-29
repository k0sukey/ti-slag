var crypto = require('crypto');
function MenuItem(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'actionView',
			'actionViewExpanded',
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
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Android.MenuItem.apiName is read only property');
	}
	this.apiName = 'Ti.Android.MenuItem';
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.actionView = undefined;
	} else {
		this.actionView = __SLAG_PROPERTIES.actionView || {};
	}
	if (__SLAG_PROPERTIES.actionViewExpanded) {
		throw new Error('Ti.Android.MenuItem.actionViewExpanded is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.actionViewExpanded = undefined;
	} else {
		this.actionViewExpanded = true;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.checkable = undefined;
	} else {
		this.checkable = __SLAG_PROPERTIES.checkable || true;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.checked = undefined;
	} else {
		this.checked = __SLAG_PROPERTIES.checked || true;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.enabled = undefined;
	} else {
		this.enabled = __SLAG_PROPERTIES.enabled || true;
	}
	if (__SLAG_PROPERTIES.groupId) {
		throw new Error('Ti.Android.MenuItem.groupId is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.groupId = undefined;
	} else {
		this.groupId = 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.icon = undefined;
	} else {
		this.icon = __SLAG_PROPERTIES.icon || 0;
	}
	if (__SLAG_PROPERTIES.itemId) {
		throw new Error('Ti.Android.MenuItem.itemId is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.itemId = undefined;
	} else {
		this.itemId = 0;
	}
	if (__SLAG_PROPERTIES.order) {
		throw new Error('Ti.Android.MenuItem.order is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.order = undefined;
	} else {
		this.order = 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.showAsAction = undefined;
	} else {
		this.showAsAction = __SLAG_PROPERTIES.showAsAction || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.title = undefined;
	} else {
		this.title = __SLAG_PROPERTIES.title || '';
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.titleCondensed = undefined;
	} else {
		this.titleCondensed = __SLAG_PROPERTIES.titleCondensed || '';
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.visible = undefined;
	} else {
		this.visible = __SLAG_PROPERTIES.visible || true;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
MenuItem.prototype.addEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
MenuItem.prototype.removeEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
MenuItem.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
MenuItem.prototype.fireEvent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
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
MenuItem.prototype.setVisible = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.visible = __SLAG__PROPERTY;
};
MenuItem.prototype.getBubbleParent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
MenuItem.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
MenuItem.prototype.getApiName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
MenuItem.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
MenuItem.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
MenuItem.prototype.getActionView = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.actionView;
};
MenuItem.prototype.setActionView = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.actionView = __SLAG__PROPERTY;
};
MenuItem.prototype.getGroupId = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.groupId;
};
MenuItem.prototype.setIcon = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.icon = __SLAG__PROPERTY;
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
MenuItem.prototype.setShowAsAction = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.showAsAction = __SLAG__PROPERTY;
};
MenuItem.prototype.getTitle = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.title;
};
MenuItem.prototype.setTitle = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.title = __SLAG__PROPERTY;
};
MenuItem.prototype.getTitleCondensed = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.titleCondensed;
};
MenuItem.prototype.setTitleCondensed = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.titleCondensed = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new MenuItem(properties);
};