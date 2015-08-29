var crypto = require('crypto');
function TabGroup(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'activeTab',
			'activeTabBackgroundColor',
			'activeTabBackgroundDisabledColor',
			'activeTabBackgroundDisabledImage',
			'activeTabBackgroundFocusedColor',
			'activeTabBackgroundFocusedImage',
			'activeTabBackgroundImage',
			'activeTabBackgroundSelectedColor',
			'activeTabBackgroundSelectedImage',
			'activeTabIconTint',
			'activity',
			'allowUserCustomization',
			'apiName',
			'barColor',
			'bubbleParent',
			'center',
			'clipMode',
			'editButtonTitle',
			'exitOnClose',
			'keepScreenOn',
			'lifecycleContainer',
			'navBarHidden',
			'navTintColor',
			'overrideCurrentAnimation',
			'pullBackgroundColor',
			'rect',
			'shadowImage',
			'size',
			'smoothScrollOnTabClick',
			'swipeable',
			'tabDividerColor',
			'tabDividerWidth',
			'tabHeight',
			'tabs',
			'tabsAtBottom',
			'tabsBackgroundColor',
			'tabsBackgroundDisabledColor',
			'tabsBackgroundDisabledImage',
			'tabsBackgroundFocusedColor',
			'tabsBackgroundFocusedImage',
			'tabsBackgroundImage',
			'tabsBackgroundSelectedColor',
			'tabsBackgroundSelectedImage',
			'tabsTintColor',
			'tintColor',
			'title',
			'titleAttributes',
			'touchEnabled',
			'translucent',
			'viewShadowColor',
			'viewShadowOffset',
			'viewShadowRadius',
			'visible',
			'windowSoftInputMode',
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
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activeTab = undefined;
	} else {
		this.activeTab = __SLAG_PROPERTIES.activeTab || {};
	}
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activeTabBackgroundColor = undefined;
	} else {
		this.activeTabBackgroundColor = __SLAG_PROPERTIES.activeTabBackgroundColor || '';
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
	if ([
			'mobileweb',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activeTabBackgroundImage = undefined;
	} else {
		this.activeTabBackgroundImage = __SLAG_PROPERTIES.activeTabBackgroundImage || '';
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
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activeTabIconTint = undefined;
	} else {
		this.activeTabIconTint = __SLAG_PROPERTIES.activeTabIconTint || '';
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
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.TabGroup.apiName is read only property');
	}
	this.apiName = 'Ti.UI.TabGroup';
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.barColor = undefined;
	} else {
		this.barColor = __SLAG_PROPERTIES.barColor || '';
	}
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if ([
			'android',
			'blackberry',
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
		this.keepScreenOn = undefined;
	} else {
		this.keepScreenOn = __SLAG_PROPERTIES.keepScreenOn || true;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.navBarHidden = undefined;
	} else {
		this.navBarHidden = __SLAG_PROPERTIES.navBarHidden || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.navTintColor = undefined;
	} else {
		this.navTintColor = __SLAG_PROPERTIES.navTintColor || '';
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
	if (__SLAG_PROPERTIES.rect) {
		throw new Error('Ti.UI.TabGroup.rect is read only property');
	}
	if ([
			'android',
			'blackberry',
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
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.shadowImage = undefined;
	} else {
		this.shadowImage = __SLAG_PROPERTIES.shadowImage || '';
	}
	if (__SLAG_PROPERTIES.size) {
		throw new Error('Ti.UI.TabGroup.size is read only property');
	}
	if ([
			'android',
			'blackberry',
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
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.smoothScrollOnTabClick = undefined;
	} else {
		this.smoothScrollOnTabClick = __SLAG_PROPERTIES.smoothScrollOnTabClick || true;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.swipeable = undefined;
	} else {
		this.swipeable = __SLAG_PROPERTIES.swipeable || true;
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
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tabs = undefined;
	} else {
		this.tabs = __SLAG_PROPERTIES.tabs || [];
	}
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tabsAtBottom = undefined;
	} else {
		this.tabsAtBottom = __SLAG_PROPERTIES.tabsAtBottom || true;
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
			'mobileweb',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tabsBackgroundImage = undefined;
	} else {
		this.tabsBackgroundImage = __SLAG_PROPERTIES.tabsBackgroundImage || '';
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
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tabsTintColor = undefined;
	} else {
		this.tabsTintColor = __SLAG_PROPERTIES.tabsTintColor || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tintColor = undefined;
	} else {
		this.tintColor = __SLAG_PROPERTIES.tintColor || '';
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.title = undefined;
	} else {
		this.title = __SLAG_PROPERTIES.title || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.titleAttributes = undefined;
	} else {
		this.titleAttributes = __SLAG_PROPERTIES.titleAttributes || {};
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.touchEnabled = undefined;
	} else {
		this.touchEnabled = __SLAG_PROPERTIES.touchEnabled || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.translucent = undefined;
	} else {
		this.translucent = __SLAG_PROPERTIES.translucent || true;
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
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.viewShadowRadius = undefined;
	} else {
		this.viewShadowRadius = __SLAG_PROPERTIES.viewShadowRadius || 0;
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.visible = undefined;
	} else {
		this.visible = __SLAG_PROPERTIES.visible || true;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.windowSoftInputMode = undefined;
	} else {
		this.windowSoftInputMode = __SLAG_PROPERTIES.windowSoftInputMode || 0;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
TabGroup.prototype.addEventListener = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TabGroup.prototype.addTab = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TabGroup.prototype.animate = function () {
	if ([
			'android',
			'blackberry',
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
TabGroup.prototype.close = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
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
TabGroup.prototype.disableTabNavigation = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TabGroup.prototype.finishLayout = function () {
	throw new Error('Ti.UI.TabGroup.finishLayout was deprecated, since 3.0.0');
};
TabGroup.prototype.fireEvent = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TabGroup.prototype.getActiveTab = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activeTab;
};
TabGroup.prototype.getActiveTabBackgroundColor = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activeTabBackgroundColor;
};
TabGroup.prototype.getActiveTabBackgroundDisabledColor = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activeTabBackgroundDisabledColor;
};
TabGroup.prototype.getActiveTabBackgroundDisabledImage = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activeTabBackgroundDisabledImage;
};
TabGroup.prototype.getActiveTabBackgroundFocusedColor = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activeTabBackgroundFocusedColor;
};
TabGroup.prototype.getActiveTabBackgroundFocusedImage = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activeTabBackgroundFocusedImage;
};
TabGroup.prototype.getActiveTabBackgroundImage = function () {
	if ([
			'mobileweb',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activeTabBackgroundImage;
};
TabGroup.prototype.getActiveTabBackgroundSelectedColor = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activeTabBackgroundSelectedColor;
};
TabGroup.prototype.getActiveTabBackgroundSelectedImage = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activeTabBackgroundSelectedImage;
};
TabGroup.prototype.getActiveTabIconTint = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activeTabIconTint;
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
TabGroup.prototype.getBarColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.barColor;
};
TabGroup.prototype.getBubbleParent = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
TabGroup.prototype.getCenter = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.center;
};
TabGroup.prototype.getClipMode = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.clipMode;
};
TabGroup.prototype.getEditButtonTitle = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.editButtonTitle;
};
TabGroup.prototype.getExitOnClose = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.exitOnClose;
};
TabGroup.prototype.getKeepScreenOn = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.keepScreenOn;
};
TabGroup.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
TabGroup.prototype.getNavBarHidden = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.navBarHidden;
};
TabGroup.prototype.getNavTintColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.navTintColor;
};
TabGroup.prototype.getOverrideCurrentAnimation = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.overrideCurrentAnimation;
};
TabGroup.prototype.getPullBackgroundColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.pullBackgroundColor;
};
TabGroup.prototype.getRect = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rect;
};
TabGroup.prototype.getShadowImage = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.shadowImage;
};
TabGroup.prototype.getSize = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.size;
};
TabGroup.prototype.getSmoothScrollOnTabClick = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.smoothScrollOnTabClick;
};
TabGroup.prototype.getSwipeable = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.swipeable;
};
TabGroup.prototype.getTabDividerColor = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabDividerColor;
};
TabGroup.prototype.getTabDividerWidth = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabDividerWidth;
};
TabGroup.prototype.getTabHeight = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabHeight;
};
TabGroup.prototype.getTabs = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabs;
};
TabGroup.prototype.getTabsAtBottom = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabsAtBottom;
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
TabGroup.prototype.getTabsBackgroundDisabledColor = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabsBackgroundDisabledColor;
};
TabGroup.prototype.getTabsBackgroundDisabledImage = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabsBackgroundDisabledImage;
};
TabGroup.prototype.getTabsBackgroundFocusedColor = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabsBackgroundFocusedColor;
};
TabGroup.prototype.getTabsBackgroundFocusedImage = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabsBackgroundFocusedImage;
};
TabGroup.prototype.getTabsBackgroundImage = function () {
	if ([
			'mobileweb',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabsBackgroundImage;
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
TabGroup.prototype.getTabsBackgroundSelectedImage = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabsBackgroundSelectedImage;
};
TabGroup.prototype.getTabsTintColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tabsTintColor;
};
TabGroup.prototype.getTintColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tintColor;
};
TabGroup.prototype.getTitle = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.title;
};
TabGroup.prototype.getTitleAttributes = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.titleAttributes;
};
TabGroup.prototype.getTouchEnabled = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.touchEnabled;
};
TabGroup.prototype.getTranslucent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.translucent;
};
TabGroup.prototype.getViewShadowColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.viewShadowColor;
};
TabGroup.prototype.getViewShadowOffset = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.viewShadowOffset;
};
TabGroup.prototype.getViewShadowRadius = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.viewShadowRadius;
};
TabGroup.prototype.getVisible = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.visible;
};
TabGroup.prototype.getWindowSoftInputMode = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.windowSoftInputMode;
};
TabGroup.prototype.hide = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TabGroup.prototype.open = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TabGroup.prototype.removeEventListener = function () {
	if ([
			'android',
			'blackberry',
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
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activeTab = __SLAG__PROPERTY;
};
TabGroup.prototype.setActiveTabBackgroundColor = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activeTabBackgroundColor = __SLAG__PROPERTY;
};
TabGroup.prototype.setActiveTabBackgroundDisabledColor = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activeTabBackgroundDisabledColor = __SLAG__PROPERTY;
};
TabGroup.prototype.setActiveTabBackgroundDisabledImage = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activeTabBackgroundDisabledImage = __SLAG__PROPERTY;
};
TabGroup.prototype.setActiveTabBackgroundFocusedColor = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activeTabBackgroundFocusedColor = __SLAG__PROPERTY;
};
TabGroup.prototype.setActiveTabBackgroundFocusedImage = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activeTabBackgroundFocusedImage = __SLAG__PROPERTY;
};
TabGroup.prototype.setActiveTabBackgroundImage = function (__SLAG__PROPERTY) {
	if ([
			'mobileweb',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activeTabBackgroundImage = __SLAG__PROPERTY;
};
TabGroup.prototype.setActiveTabBackgroundSelectedColor = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activeTabBackgroundSelectedColor = __SLAG__PROPERTY;
};
TabGroup.prototype.setActiveTabBackgroundSelectedImage = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activeTabBackgroundSelectedImage = __SLAG__PROPERTY;
};
TabGroup.prototype.setActiveTabIconTint = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activeTabIconTint = __SLAG__PROPERTY;
};
TabGroup.prototype.setAllowUserCustomization = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.allowUserCustomization = __SLAG__PROPERTY;
};
TabGroup.prototype.setBarColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.barColor = __SLAG__PROPERTY;
};
TabGroup.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
TabGroup.prototype.setCenter = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.center = __SLAG__PROPERTY;
};
TabGroup.prototype.setClipMode = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.clipMode = __SLAG__PROPERTY;
};
TabGroup.prototype.setEditButtonTitle = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.editButtonTitle = __SLAG__PROPERTY;
};
TabGroup.prototype.setExitOnClose = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.exitOnClose = __SLAG__PROPERTY;
};
TabGroup.prototype.setKeepScreenOn = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.keepScreenOn = __SLAG__PROPERTY;
};
TabGroup.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
TabGroup.prototype.setNavBarHidden = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.navBarHidden = __SLAG__PROPERTY;
};
TabGroup.prototype.setNavTintColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.navTintColor = __SLAG__PROPERTY;
};
TabGroup.prototype.setPullBackgroundColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.pullBackgroundColor = __SLAG__PROPERTY;
};
TabGroup.prototype.setShadowImage = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.shadowImage = __SLAG__PROPERTY;
};
TabGroup.prototype.setSmoothScrollOnTabClick = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.smoothScrollOnTabClick = __SLAG__PROPERTY;
};
TabGroup.prototype.setSwipeable = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.swipeable = __SLAG__PROPERTY;
};
TabGroup.prototype.setTabDividerColor = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabDividerColor = __SLAG__PROPERTY;
};
TabGroup.prototype.setTabDividerWidth = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabDividerWidth = __SLAG__PROPERTY;
};
TabGroup.prototype.setTabHeight = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabHeight = __SLAG__PROPERTY;
};
TabGroup.prototype.setTabs = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabs = __SLAG__PROPERTY;
};
TabGroup.prototype.setTabsAtBottom = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabsAtBottom = __SLAG__PROPERTY;
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
TabGroup.prototype.setTabsBackgroundDisabledColor = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabsBackgroundDisabledColor = __SLAG__PROPERTY;
};
TabGroup.prototype.setTabsBackgroundDisabledImage = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabsBackgroundDisabledImage = __SLAG__PROPERTY;
};
TabGroup.prototype.setTabsBackgroundFocusedColor = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabsBackgroundFocusedColor = __SLAG__PROPERTY;
};
TabGroup.prototype.setTabsBackgroundFocusedImage = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabsBackgroundFocusedImage = __SLAG__PROPERTY;
};
TabGroup.prototype.setTabsBackgroundImage = function (__SLAG__PROPERTY) {
	if ([
			'mobileweb',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabsBackgroundImage = __SLAG__PROPERTY;
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
TabGroup.prototype.setTabsBackgroundSelectedImage = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabsBackgroundSelectedImage = __SLAG__PROPERTY;
};
TabGroup.prototype.setTabsTintColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tabsTintColor = __SLAG__PROPERTY;
};
TabGroup.prototype.setTintColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tintColor = __SLAG__PROPERTY;
};
TabGroup.prototype.setTitle = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.title = __SLAG__PROPERTY;
};
TabGroup.prototype.setTitleAttributes = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.titleAttributes = __SLAG__PROPERTY;
};
TabGroup.prototype.setTouchEnabled = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.touchEnabled = __SLAG__PROPERTY;
};
TabGroup.prototype.setTranslucent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.translucent = __SLAG__PROPERTY;
};
TabGroup.prototype.setViewShadowColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.viewShadowColor = __SLAG__PROPERTY;
};
TabGroup.prototype.setViewShadowOffset = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.viewShadowOffset = __SLAG__PROPERTY;
};
TabGroup.prototype.setViewShadowRadius = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.viewShadowRadius = __SLAG__PROPERTY;
};
TabGroup.prototype.setVisible = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.visible = __SLAG__PROPERTY;
};
TabGroup.prototype.show = function () {
	if ([
			'android',
			'blackberry',
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
module.exports = function (properties) {
	return new TabGroup(properties);
};