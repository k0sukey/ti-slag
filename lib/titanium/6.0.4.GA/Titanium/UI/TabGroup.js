var crypto = require('crypto');
function TabGroup(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'center',
			'clipMode',
			'elevation',
			'overrideCurrentAnimation',
			'pullBackgroundColor',
			'previewContext',
			'rect',
			'rotation',
			'rotationX',
			'rotationY',
			'scaleX',
			'scaleY',
			'size',
			'tintColor',
			'touchEnabled',
			'translationX',
			'translationY',
			'translationZ',
			'transitionName',
			'viewShadowRadius',
			'viewShadowColor',
			'viewShadowOffset',
			'visible',
			'keepScreenOn',
			'activeTab',
			'activity',
			'allowUserCustomization',
			'barColor',
			'translucent',
			'titleAttributes',
			'navTintColor',
			'editButtonTitle',
			'exitOnClose',
			'swipeable',
			'smoothScrollOnTabClick',
			'tabs',
			'windowSoftInputMode',
			'tabsBackgroundColor',
			'tabsTintColor',
			'title',
			'tabsBackgroundImage',
			'shadowImage',
			'activeTabIconTint',
			'tabsBackgroundDisabledColor',
			'tabsBackgroundDisabledImage',
			'tabsBackgroundFocusedColor',
			'tabsBackgroundFocusedImage',
			'tabsBackgroundSelectedColor',
			'tabsBackgroundSelectedImage',
			'activeTabBackgroundColor',
			'activeTabBackgroundImage',
			'activeTabBackgroundDisabledColor',
			'activeTabBackgroundDisabledImage',
			'activeTabBackgroundFocusedColor',
			'activeTabBackgroundFocusedImage',
			'activeTabBackgroundSelectedColor',
			'activeTabBackgroundSelectedImage',
			'tabDividerColor',
			'tabDividerWidth',
			'tabHeight',
			'tabsAtBottom',
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
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.TabGroup.apiName is read only property');
	}
	this.apiName = 'Ti.UI.TabGroup';
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.center = undefined;
	} else {
		this.center = __SLAG_PROPERTIES.center || {
			x: 0,
			y: 0
		};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.clipMode = undefined;
	} else {
		this.clipMode = __SLAG_PROPERTIES.clipMode || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.elevation = undefined;
	} else {
		this.elevation = __SLAG_PROPERTIES.elevation || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.overrideCurrentAnimation = undefined;
	} else {
		this.overrideCurrentAnimation = __SLAG_PROPERTIES.overrideCurrentAnimation || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.pullBackgroundColor = undefined;
	} else {
		this.pullBackgroundColor = __SLAG_PROPERTIES.pullBackgroundColor || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.previewContext = undefined;
	} else {
		this.previewContext = __SLAG_PROPERTIES.previewContext || {};
	}
	if (__SLAG_PROPERTIES.rect) {
		throw new Error('Ti.UI.TabGroup.rect is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.rect = undefined;
	} else {
		this.rect = {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		};
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.rotation = undefined;
	} else {
		this.rotation = __SLAG_PROPERTIES.rotation || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.rotationX = undefined;
	} else {
		this.rotationX = __SLAG_PROPERTIES.rotationX || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.rotationY = undefined;
	} else {
		this.rotationY = __SLAG_PROPERTIES.rotationY || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.scaleX = undefined;
	} else {
		this.scaleX = __SLAG_PROPERTIES.scaleX || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.scaleY = undefined;
	} else {
		this.scaleY = __SLAG_PROPERTIES.scaleY || 0;
	}
	if (__SLAG_PROPERTIES.size) {
		throw new Error('Ti.UI.TabGroup.size is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.size = undefined;
	} else {
		this.size = {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tintColor = undefined;
	} else {
		this.tintColor = __SLAG_PROPERTIES.tintColor || '';
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.touchEnabled = undefined;
	} else {
		this.touchEnabled = __SLAG_PROPERTIES.touchEnabled || true;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.translationX = undefined;
	} else {
		this.translationX = __SLAG_PROPERTIES.translationX || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.translationY = undefined;
	} else {
		this.translationY = __SLAG_PROPERTIES.translationY || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.translationZ = undefined;
	} else {
		this.translationZ = __SLAG_PROPERTIES.translationZ || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.transitionName = undefined;
	} else {
		this.transitionName = __SLAG_PROPERTIES.transitionName || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.viewShadowRadius = undefined;
	} else {
		this.viewShadowRadius = __SLAG_PROPERTIES.viewShadowRadius || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.viewShadowColor = undefined;
	} else {
		this.viewShadowColor = __SLAG_PROPERTIES.viewShadowColor || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.viewShadowOffset = undefined;
	} else {
		this.viewShadowOffset = __SLAG_PROPERTIES.viewShadowOffset || {
			x: 0,
			y: 0
		};
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.visible = undefined;
	} else {
		this.visible = __SLAG_PROPERTIES.visible || true;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.keepScreenOn = undefined;
	} else {
		this.keepScreenOn = __SLAG_PROPERTIES.keepScreenOn || true;
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activeTab = undefined;
	} else {
		this.activeTab = __SLAG_PROPERTIES.activeTab || {};
	}
	if (__SLAG_PROPERTIES.activity) {
		throw new Error('Ti.UI.TabGroup.activity is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activity = undefined;
	} else {
		this.activity = {};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.allowUserCustomization = undefined;
	} else {
		this.allowUserCustomization = __SLAG_PROPERTIES.allowUserCustomization || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.barColor = undefined;
	} else {
		this.barColor = __SLAG_PROPERTIES.barColor || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.translucent = undefined;
	} else {
		this.translucent = __SLAG_PROPERTIES.translucent || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.titleAttributes = undefined;
	} else {
		this.titleAttributes = __SLAG_PROPERTIES.titleAttributes || {};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.navTintColor = undefined;
	} else {
		this.navTintColor = __SLAG_PROPERTIES.navTintColor || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.editButtonTitle = undefined;
	} else {
		this.editButtonTitle = __SLAG_PROPERTIES.editButtonTitle || '';
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.exitOnClose = undefined;
	} else {
		this.exitOnClose = __SLAG_PROPERTIES.exitOnClose || true;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.swipeable = undefined;
	} else {
		this.swipeable = __SLAG_PROPERTIES.swipeable || true;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.smoothScrollOnTabClick = undefined;
	} else {
		this.smoothScrollOnTabClick = __SLAG_PROPERTIES.smoothScrollOnTabClick || true;
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tabs = undefined;
	} else {
		this.tabs = __SLAG_PROPERTIES.tabs || [];
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.windowSoftInputMode = undefined;
	} else {
		this.windowSoftInputMode = __SLAG_PROPERTIES.windowSoftInputMode || 0;
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tabsBackgroundColor = undefined;
	} else {
		this.tabsBackgroundColor = __SLAG_PROPERTIES.tabsBackgroundColor || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tabsTintColor = undefined;
	} else {
		this.tabsTintColor = __SLAG_PROPERTIES.tabsTintColor || '';
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.title = undefined;
	} else {
		this.title = __SLAG_PROPERTIES.title || '';
	}
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tabsBackgroundImage = undefined;
	} else {
		this.tabsBackgroundImage = __SLAG_PROPERTIES.tabsBackgroundImage || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.shadowImage = undefined;
	} else {
		this.shadowImage = __SLAG_PROPERTIES.shadowImage || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activeTabIconTint = undefined;
	} else {
		this.activeTabIconTint = __SLAG_PROPERTIES.activeTabIconTint || '';
	}
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tabsBackgroundDisabledColor = undefined;
	} else {
		this.tabsBackgroundDisabledColor = __SLAG_PROPERTIES.tabsBackgroundDisabledColor || '';
	}
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tabsBackgroundDisabledImage = undefined;
	} else {
		this.tabsBackgroundDisabledImage = __SLAG_PROPERTIES.tabsBackgroundDisabledImage || '';
	}
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tabsBackgroundFocusedColor = undefined;
	} else {
		this.tabsBackgroundFocusedColor = __SLAG_PROPERTIES.tabsBackgroundFocusedColor || '';
	}
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tabsBackgroundFocusedImage = undefined;
	} else {
		this.tabsBackgroundFocusedImage = __SLAG_PROPERTIES.tabsBackgroundFocusedImage || '';
	}
	if ([
			'android',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tabsBackgroundSelectedColor = undefined;
	} else {
		this.tabsBackgroundSelectedColor = __SLAG_PROPERTIES.tabsBackgroundSelectedColor || '';
	}
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tabsBackgroundSelectedImage = undefined;
	} else {
		this.tabsBackgroundSelectedImage = __SLAG_PROPERTIES.tabsBackgroundSelectedImage || '';
	}
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activeTabBackgroundColor = undefined;
	} else {
		this.activeTabBackgroundColor = __SLAG_PROPERTIES.activeTabBackgroundColor || '';
	}
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activeTabBackgroundImage = undefined;
	} else {
		this.activeTabBackgroundImage = __SLAG_PROPERTIES.activeTabBackgroundImage || '';
	}
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activeTabBackgroundDisabledColor = undefined;
	} else {
		this.activeTabBackgroundDisabledColor = __SLAG_PROPERTIES.activeTabBackgroundDisabledColor || '';
	}
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activeTabBackgroundDisabledImage = undefined;
	} else {
		this.activeTabBackgroundDisabledImage = __SLAG_PROPERTIES.activeTabBackgroundDisabledImage || '';
	}
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activeTabBackgroundFocusedColor = undefined;
	} else {
		this.activeTabBackgroundFocusedColor = __SLAG_PROPERTIES.activeTabBackgroundFocusedColor || '';
	}
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activeTabBackgroundFocusedImage = undefined;
	} else {
		this.activeTabBackgroundFocusedImage = __SLAG_PROPERTIES.activeTabBackgroundFocusedImage || '';
	}
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activeTabBackgroundSelectedColor = undefined;
	} else {
		this.activeTabBackgroundSelectedColor = __SLAG_PROPERTIES.activeTabBackgroundSelectedColor || '';
	}
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activeTabBackgroundSelectedImage = undefined;
	} else {
		this.activeTabBackgroundSelectedImage = __SLAG_PROPERTIES.activeTabBackgroundSelectedImage || '';
	}
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tabDividerColor = undefined;
	} else {
		this.tabDividerColor = __SLAG_PROPERTIES.tabDividerColor || '';
	}
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tabDividerWidth = undefined;
	} else {
		this.tabDividerWidth = __SLAG_PROPERTIES.tabDividerWidth || 0;
	}
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tabHeight = undefined;
	} else {
		this.tabHeight = __SLAG_PROPERTIES.tabHeight || 0;
	}
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tabsAtBottom = undefined;
	} else {
		this.tabsAtBottom = __SLAG_PROPERTIES.tabsAtBottom || true;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
TabGroup.prototype.addEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TabGroup.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TabGroup.prototype.fireEvent = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TabGroup.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
TabGroup.prototype.animate = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TabGroup.prototype.finishLayout = function () {
	throw new Error('Ti.UI.TabGroup.finishLayout was deprecated, since 3.0.0');
};
TabGroup.prototype.hide = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TabGroup.prototype.insertAt = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TabGroup.prototype.replaceAt = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TabGroup.prototype.show = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TabGroup.prototype.startLayout = function () {
	throw new Error('Ti.UI.TabGroup.startLayout was deprecated, since 3.0.0');
};
TabGroup.prototype.toImage = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
TabGroup.prototype.updateLayout = function () {
	throw new Error('Ti.UI.TabGroup.updateLayout was deprecated, since 3.0.0');
};
TabGroup.prototype.convertPointToView = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {
		x: 0,
		y: 0
	};
};
TabGroup.prototype.addTab = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TabGroup.prototype.close = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TabGroup.prototype.disableTabNavigation = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TabGroup.prototype.getActiveTab = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activeTab;
};
TabGroup.prototype.open = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TabGroup.prototype.removeTab = function () {
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TabGroup.prototype.setActiveTab = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activeTab = __SLAG__PROPERTY;
};
TabGroup.prototype.getTabs = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabs;
};
TabGroup.prototype.getBubbleParent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
TabGroup.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
TabGroup.prototype.getApiName = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
TabGroup.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
TabGroup.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
TabGroup.prototype.getCenter = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.center;
};
TabGroup.prototype.setCenter = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.center = __SLAG__PROPERTY;
};
TabGroup.prototype.getClipMode = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.clipMode;
};
TabGroup.prototype.setClipMode = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.clipMode = __SLAG__PROPERTY;
};
TabGroup.prototype.getElevation = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.elevation;
};
TabGroup.prototype.setElevation = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.elevation = __SLAG__PROPERTY;
};
TabGroup.prototype.getOverrideCurrentAnimation = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.overrideCurrentAnimation;
};
TabGroup.prototype.setOverrideCurrentAnimation = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.overrideCurrentAnimation = __SLAG__PROPERTY;
};
TabGroup.prototype.getPullBackgroundColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.pullBackgroundColor;
};
TabGroup.prototype.setPullBackgroundColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.pullBackgroundColor = __SLAG__PROPERTY;
};
TabGroup.prototype.getPreviewContext = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.previewContext;
};
TabGroup.prototype.setPreviewContext = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.previewContext = __SLAG__PROPERTY;
};
TabGroup.prototype.getRect = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rect;
};
TabGroup.prototype.getRotation = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rotation;
};
TabGroup.prototype.setRotation = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.rotation = __SLAG__PROPERTY;
};
TabGroup.prototype.getRotationX = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rotationX;
};
TabGroup.prototype.setRotationX = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.rotationX = __SLAG__PROPERTY;
};
TabGroup.prototype.getRotationY = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rotationY;
};
TabGroup.prototype.setRotationY = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.rotationY = __SLAG__PROPERTY;
};
TabGroup.prototype.getScaleX = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.scaleX;
};
TabGroup.prototype.setScaleX = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.scaleX = __SLAG__PROPERTY;
};
TabGroup.prototype.getScaleY = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.scaleY;
};
TabGroup.prototype.setScaleY = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.scaleY = __SLAG__PROPERTY;
};
TabGroup.prototype.getSize = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.size;
};
TabGroup.prototype.getTintColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tintColor;
};
TabGroup.prototype.setTintColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tintColor = __SLAG__PROPERTY;
};
TabGroup.prototype.getTouchEnabled = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.touchEnabled;
};
TabGroup.prototype.setTouchEnabled = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.touchEnabled = __SLAG__PROPERTY;
};
TabGroup.prototype.getTranslationX = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.translationX;
};
TabGroup.prototype.setTranslationX = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.translationX = __SLAG__PROPERTY;
};
TabGroup.prototype.getTranslationY = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.translationY;
};
TabGroup.prototype.setTranslationY = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.translationY = __SLAG__PROPERTY;
};
TabGroup.prototype.getTranslationZ = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.translationZ;
};
TabGroup.prototype.setTranslationZ = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.translationZ = __SLAG__PROPERTY;
};
TabGroup.prototype.getTransitionName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.transitionName;
};
TabGroup.prototype.setTransitionName = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.transitionName = __SLAG__PROPERTY;
};
TabGroup.prototype.getViewShadowRadius = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.viewShadowRadius;
};
TabGroup.prototype.setViewShadowRadius = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.viewShadowRadius = __SLAG__PROPERTY;
};
TabGroup.prototype.getViewShadowColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.viewShadowColor;
};
TabGroup.prototype.setViewShadowColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.viewShadowColor = __SLAG__PROPERTY;
};
TabGroup.prototype.getViewShadowOffset = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.viewShadowOffset;
};
TabGroup.prototype.setViewShadowOffset = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.viewShadowOffset = __SLAG__PROPERTY;
};
TabGroup.prototype.getVisible = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.visible;
};
TabGroup.prototype.setVisible = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.visible = __SLAG__PROPERTY;
};
TabGroup.prototype.getKeepScreenOn = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.keepScreenOn;
};
TabGroup.prototype.setKeepScreenOn = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.keepScreenOn = __SLAG__PROPERTY;
};
TabGroup.prototype.getActiveTab = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activeTab;
};
TabGroup.prototype.setActiveTab = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activeTab = __SLAG__PROPERTY;
};
TabGroup.prototype.getActivity = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activity;
};
TabGroup.prototype.getAllowUserCustomization = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.allowUserCustomization;
};
TabGroup.prototype.setAllowUserCustomization = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.allowUserCustomization = __SLAG__PROPERTY;
};
TabGroup.prototype.getBarColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.barColor;
};
TabGroup.prototype.setBarColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.barColor = __SLAG__PROPERTY;
};
TabGroup.prototype.getTranslucent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.translucent;
};
TabGroup.prototype.setTranslucent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.translucent = __SLAG__PROPERTY;
};
TabGroup.prototype.getTitleAttributes = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.titleAttributes;
};
TabGroup.prototype.setTitleAttributes = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.titleAttributes = __SLAG__PROPERTY;
};
TabGroup.prototype.getNavTintColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.navTintColor;
};
TabGroup.prototype.setNavTintColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.navTintColor = __SLAG__PROPERTY;
};
TabGroup.prototype.getEditButtonTitle = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.editButtonTitle;
};
TabGroup.prototype.setEditButtonTitle = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.editButtonTitle = __SLAG__PROPERTY;
};
TabGroup.prototype.getExitOnClose = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.exitOnClose;
};
TabGroup.prototype.setExitOnClose = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.exitOnClose = __SLAG__PROPERTY;
};
TabGroup.prototype.getSwipeable = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.swipeable;
};
TabGroup.prototype.setSwipeable = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.swipeable = __SLAG__PROPERTY;
};
TabGroup.prototype.getSmoothScrollOnTabClick = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.smoothScrollOnTabClick;
};
TabGroup.prototype.setSmoothScrollOnTabClick = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.smoothScrollOnTabClick = __SLAG__PROPERTY;
};
TabGroup.prototype.getTabs = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabs;
};
TabGroup.prototype.setTabs = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabs = __SLAG__PROPERTY;
};
TabGroup.prototype.getWindowSoftInputMode = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.windowSoftInputMode;
};
TabGroup.prototype.setWindowSoftInputMode = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.windowSoftInputMode = __SLAG__PROPERTY;
};
TabGroup.prototype.getTabsBackgroundColor = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabsBackgroundColor;
};
TabGroup.prototype.setTabsBackgroundColor = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabsBackgroundColor = __SLAG__PROPERTY;
};
TabGroup.prototype.getTabsTintColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabsTintColor;
};
TabGroup.prototype.setTabsTintColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabsTintColor = __SLAG__PROPERTY;
};
TabGroup.prototype.getTitle = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.title;
};
TabGroup.prototype.setTitle = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.title = __SLAG__PROPERTY;
};
TabGroup.prototype.getTabsBackgroundImage = function () {
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabsBackgroundImage;
};
TabGroup.prototype.setTabsBackgroundImage = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabsBackgroundImage = __SLAG__PROPERTY;
};
TabGroup.prototype.getShadowImage = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.shadowImage;
};
TabGroup.prototype.setShadowImage = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.shadowImage = __SLAG__PROPERTY;
};
TabGroup.prototype.getActiveTabIconTint = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activeTabIconTint;
};
TabGroup.prototype.setActiveTabIconTint = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activeTabIconTint = __SLAG__PROPERTY;
};
TabGroup.prototype.getTabsBackgroundDisabledColor = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabsBackgroundDisabledColor;
};
TabGroup.prototype.setTabsBackgroundDisabledColor = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabsBackgroundDisabledColor = __SLAG__PROPERTY;
};
TabGroup.prototype.getTabsBackgroundDisabledImage = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabsBackgroundDisabledImage;
};
TabGroup.prototype.setTabsBackgroundDisabledImage = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabsBackgroundDisabledImage = __SLAG__PROPERTY;
};
TabGroup.prototype.getTabsBackgroundFocusedColor = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabsBackgroundFocusedColor;
};
TabGroup.prototype.setTabsBackgroundFocusedColor = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabsBackgroundFocusedColor = __SLAG__PROPERTY;
};
TabGroup.prototype.getTabsBackgroundFocusedImage = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabsBackgroundFocusedImage;
};
TabGroup.prototype.setTabsBackgroundFocusedImage = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabsBackgroundFocusedImage = __SLAG__PROPERTY;
};
TabGroup.prototype.getTabsBackgroundSelectedColor = function () {
	if ([
			'android',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabsBackgroundSelectedColor;
};
TabGroup.prototype.setTabsBackgroundSelectedColor = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabsBackgroundSelectedColor = __SLAG__PROPERTY;
};
TabGroup.prototype.getTabsBackgroundSelectedImage = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabsBackgroundSelectedImage;
};
TabGroup.prototype.setTabsBackgroundSelectedImage = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabsBackgroundSelectedImage = __SLAG__PROPERTY;
};
TabGroup.prototype.getActiveTabBackgroundColor = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activeTabBackgroundColor;
};
TabGroup.prototype.setActiveTabBackgroundColor = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activeTabBackgroundColor = __SLAG__PROPERTY;
};
TabGroup.prototype.getActiveTabBackgroundImage = function () {
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activeTabBackgroundImage;
};
TabGroup.prototype.setActiveTabBackgroundImage = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activeTabBackgroundImage = __SLAG__PROPERTY;
};
TabGroup.prototype.getActiveTabBackgroundDisabledColor = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activeTabBackgroundDisabledColor;
};
TabGroup.prototype.setActiveTabBackgroundDisabledColor = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activeTabBackgroundDisabledColor = __SLAG__PROPERTY;
};
TabGroup.prototype.getActiveTabBackgroundDisabledImage = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activeTabBackgroundDisabledImage;
};
TabGroup.prototype.setActiveTabBackgroundDisabledImage = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activeTabBackgroundDisabledImage = __SLAG__PROPERTY;
};
TabGroup.prototype.getActiveTabBackgroundFocusedColor = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activeTabBackgroundFocusedColor;
};
TabGroup.prototype.setActiveTabBackgroundFocusedColor = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activeTabBackgroundFocusedColor = __SLAG__PROPERTY;
};
TabGroup.prototype.getActiveTabBackgroundFocusedImage = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activeTabBackgroundFocusedImage;
};
TabGroup.prototype.setActiveTabBackgroundFocusedImage = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activeTabBackgroundFocusedImage = __SLAG__PROPERTY;
};
TabGroup.prototype.getActiveTabBackgroundSelectedColor = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activeTabBackgroundSelectedColor;
};
TabGroup.prototype.setActiveTabBackgroundSelectedColor = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activeTabBackgroundSelectedColor = __SLAG__PROPERTY;
};
TabGroup.prototype.getActiveTabBackgroundSelectedImage = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activeTabBackgroundSelectedImage;
};
TabGroup.prototype.setActiveTabBackgroundSelectedImage = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activeTabBackgroundSelectedImage = __SLAG__PROPERTY;
};
TabGroup.prototype.getTabDividerColor = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabDividerColor;
};
TabGroup.prototype.setTabDividerColor = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabDividerColor = __SLAG__PROPERTY;
};
TabGroup.prototype.getTabDividerWidth = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabDividerWidth;
};
TabGroup.prototype.setTabDividerWidth = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabDividerWidth = __SLAG__PROPERTY;
};
TabGroup.prototype.getTabHeight = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabHeight;
};
TabGroup.prototype.setTabHeight = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabHeight = __SLAG__PROPERTY;
};
TabGroup.prototype.getTabsAtBottom = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabsAtBottom;
};
TabGroup.prototype.setTabsAtBottom = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabsAtBottom = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new TabGroup(properties);
};