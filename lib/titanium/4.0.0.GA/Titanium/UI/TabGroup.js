var crypto = require('crypto');
function TabGroup(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
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
	this.activeTab = __SLAG__properties.activeTab || {};
	this.activeTabBackgroundColor = __SLAG__properties.activeTabBackgroundColor || '';
	this.activeTabBackgroundDisabledColor = __SLAG__properties.activeTabBackgroundDisabledColor || '';
	this.activeTabBackgroundDisabledImage = __SLAG__properties.activeTabBackgroundDisabledImage || '';
	this.activeTabBackgroundFocusedColor = __SLAG__properties.activeTabBackgroundFocusedColor || '';
	this.activeTabBackgroundFocusedImage = __SLAG__properties.activeTabBackgroundFocusedImage || '';
	this.activeTabBackgroundImage = __SLAG__properties.activeTabBackgroundImage || '';
	this.activeTabBackgroundSelectedColor = __SLAG__properties.activeTabBackgroundSelectedColor || '';
	this.activeTabBackgroundSelectedImage = __SLAG__properties.activeTabBackgroundSelectedImage || '';
	this.activeTabIconTint = __SLAG__properties.activeTabIconTint || '';
	if (__SLAG__properties.activity) {
		throw new Error('Ti.UI.TabGroup.activity is read only property');
	}
	this.activity = {};
	this.allowUserCustomization = __SLAG__properties.allowUserCustomization || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.TabGroup.apiName is read only property');
	}
	this.apiName = 'Ti.UI.TabGroup';
	this.barColor = __SLAG__properties.barColor || '';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.center = __SLAG__properties.center || {
		x: 0,
		y: 0
	};
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.editButtonTitle = __SLAG__properties.editButtonTitle || '';
	this.exitOnClose = __SLAG__properties.exitOnClose || true;
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.navBarHidden = __SLAG__properties.navBarHidden || true;
	this.navTintColor = __SLAG__properties.navTintColor || '';
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.TabGroup.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.shadowImage = __SLAG__properties.shadowImage || '';
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.TabGroup.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.smoothScrollOnTabClick = __SLAG__properties.smoothScrollOnTabClick || true;
	this.swipeable = __SLAG__properties.swipeable || true;
	this.tabDividerColor = __SLAG__properties.tabDividerColor || '';
	this.tabDividerWidth = __SLAG__properties.tabDividerWidth || 0;
	this.tabHeight = __SLAG__properties.tabHeight || 0;
	this.tabs = __SLAG__properties.tabs || [];
	this.tabsAtBottom = __SLAG__properties.tabsAtBottom || true;
	this.tabsBackgroundColor = __SLAG__properties.tabsBackgroundColor || '';
	this.tabsBackgroundDisabledColor = __SLAG__properties.tabsBackgroundDisabledColor || '';
	this.tabsBackgroundDisabledImage = __SLAG__properties.tabsBackgroundDisabledImage || '';
	this.tabsBackgroundFocusedColor = __SLAG__properties.tabsBackgroundFocusedColor || '';
	this.tabsBackgroundFocusedImage = __SLAG__properties.tabsBackgroundFocusedImage || '';
	this.tabsBackgroundImage = __SLAG__properties.tabsBackgroundImage || '';
	this.tabsBackgroundSelectedColor = __SLAG__properties.tabsBackgroundSelectedColor || '';
	this.tabsBackgroundSelectedImage = __SLAG__properties.tabsBackgroundSelectedImage || '';
	this.tabsTintColor = __SLAG__properties.tabsTintColor || '';
	this.tintColor = __SLAG__properties.tintColor || '';
	this.title = __SLAG__properties.title || '';
	this.titleAttributes = __SLAG__properties.titleAttributes || {};
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.translucent = __SLAG__properties.translucent || true;
	this.viewShadowColor = __SLAG__properties.viewShadowColor || '';
	this.viewShadowOffset = __SLAG__properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = __SLAG__properties.viewShadowRadius || 0;
	this.visible = __SLAG__properties.visible || true;
	this.windowSoftInputMode = __SLAG__properties.windowSoftInputMode || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
TabGroup.prototype.addEventListener = function () {
};
TabGroup.prototype.addTab = function () {
};
TabGroup.prototype.animate = function () {
};
TabGroup.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
TabGroup.prototype.close = function () {
};
TabGroup.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
TabGroup.prototype.disableTabNavigation = function () {
};
TabGroup.prototype.finishLayout = function () {
	throw new Error('Ti.UI.TabGroup.finishLayout was deprecated, since 3.0.0');
};
TabGroup.prototype.fireEvent = function () {
};
TabGroup.prototype.getActiveTab = function () {
	return this.activeTab;
};
TabGroup.prototype.getActiveTabBackgroundColor = function () {
	return this.activeTabBackgroundColor;
};
TabGroup.prototype.getActiveTabBackgroundDisabledColor = function () {
	return this.activeTabBackgroundDisabledColor;
};
TabGroup.prototype.getActiveTabBackgroundDisabledImage = function () {
	return this.activeTabBackgroundDisabledImage;
};
TabGroup.prototype.getActiveTabBackgroundFocusedColor = function () {
	return this.activeTabBackgroundFocusedColor;
};
TabGroup.prototype.getActiveTabBackgroundFocusedImage = function () {
	return this.activeTabBackgroundFocusedImage;
};
TabGroup.prototype.getActiveTabBackgroundImage = function () {
	return this.activeTabBackgroundImage;
};
TabGroup.prototype.getActiveTabBackgroundSelectedColor = function () {
	return this.activeTabBackgroundSelectedColor;
};
TabGroup.prototype.getActiveTabBackgroundSelectedImage = function () {
	return this.activeTabBackgroundSelectedImage;
};
TabGroup.prototype.getActiveTabIconTint = function () {
	return this.activeTabIconTint;
};
TabGroup.prototype.getActivity = function () {
	return this.activity;
};
TabGroup.prototype.getAllowUserCustomization = function () {
	return this.allowUserCustomization;
};
TabGroup.prototype.getApiName = function () {
	return this.apiName;
};
TabGroup.prototype.getBarColor = function () {
	return this.barColor;
};
TabGroup.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
TabGroup.prototype.getCenter = function () {
	return this.center;
};
TabGroup.prototype.getClipMode = function () {
	return this.clipMode;
};
TabGroup.prototype.getEditButtonTitle = function () {
	return this.editButtonTitle;
};
TabGroup.prototype.getExitOnClose = function () {
	return this.exitOnClose;
};
TabGroup.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
TabGroup.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
TabGroup.prototype.getNavBarHidden = function () {
	return this.navBarHidden;
};
TabGroup.prototype.getNavTintColor = function () {
	return this.navTintColor;
};
TabGroup.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
TabGroup.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
TabGroup.prototype.getRect = function () {
	return this.rect;
};
TabGroup.prototype.getShadowImage = function () {
	return this.shadowImage;
};
TabGroup.prototype.getSize = function () {
	return this.size;
};
TabGroup.prototype.getSmoothScrollOnTabClick = function () {
	return this.smoothScrollOnTabClick;
};
TabGroup.prototype.getSwipeable = function () {
	return this.swipeable;
};
TabGroup.prototype.getTabDividerColor = function () {
	return this.tabDividerColor;
};
TabGroup.prototype.getTabDividerWidth = function () {
	return this.tabDividerWidth;
};
TabGroup.prototype.getTabHeight = function () {
	return this.tabHeight;
};
TabGroup.prototype.getTabs = function () {
	return this.tabs;
};
TabGroup.prototype.getTabsAtBottom = function () {
	return this.tabsAtBottom;
};
TabGroup.prototype.getTabsBackgroundColor = function () {
	return this.tabsBackgroundColor;
};
TabGroup.prototype.getTabsBackgroundDisabledColor = function () {
	return this.tabsBackgroundDisabledColor;
};
TabGroup.prototype.getTabsBackgroundDisabledImage = function () {
	return this.tabsBackgroundDisabledImage;
};
TabGroup.prototype.getTabsBackgroundFocusedColor = function () {
	return this.tabsBackgroundFocusedColor;
};
TabGroup.prototype.getTabsBackgroundFocusedImage = function () {
	return this.tabsBackgroundFocusedImage;
};
TabGroup.prototype.getTabsBackgroundImage = function () {
	return this.tabsBackgroundImage;
};
TabGroup.prototype.getTabsBackgroundSelectedColor = function () {
	return this.tabsBackgroundSelectedColor;
};
TabGroup.prototype.getTabsBackgroundSelectedImage = function () {
	return this.tabsBackgroundSelectedImage;
};
TabGroup.prototype.getTabsTintColor = function () {
	return this.tabsTintColor;
};
TabGroup.prototype.getTintColor = function () {
	return this.tintColor;
};
TabGroup.prototype.getTitle = function () {
	return this.title;
};
TabGroup.prototype.getTitleAttributes = function () {
	return this.titleAttributes;
};
TabGroup.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
TabGroup.prototype.getTranslucent = function () {
	return this.translucent;
};
TabGroup.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
TabGroup.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
TabGroup.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
TabGroup.prototype.getVisible = function () {
	return this.visible;
};
TabGroup.prototype.getWindowSoftInputMode = function () {
	return this.windowSoftInputMode;
};
TabGroup.prototype.hide = function () {
};
TabGroup.prototype.open = function () {
};
TabGroup.prototype.removeEventListener = function () {
};
TabGroup.prototype.removeTab = function () {
};
TabGroup.prototype.setActiveTab = function (property) {
	this.activeTab = property;
};
TabGroup.prototype.setActiveTabBackgroundColor = function (property) {
	this.activeTabBackgroundColor = property;
};
TabGroup.prototype.setActiveTabBackgroundDisabledColor = function (property) {
	this.activeTabBackgroundDisabledColor = property;
};
TabGroup.prototype.setActiveTabBackgroundDisabledImage = function (property) {
	this.activeTabBackgroundDisabledImage = property;
};
TabGroup.prototype.setActiveTabBackgroundFocusedColor = function (property) {
	this.activeTabBackgroundFocusedColor = property;
};
TabGroup.prototype.setActiveTabBackgroundFocusedImage = function (property) {
	this.activeTabBackgroundFocusedImage = property;
};
TabGroup.prototype.setActiveTabBackgroundImage = function (property) {
	this.activeTabBackgroundImage = property;
};
TabGroup.prototype.setActiveTabBackgroundSelectedColor = function (property) {
	this.activeTabBackgroundSelectedColor = property;
};
TabGroup.prototype.setActiveTabBackgroundSelectedImage = function (property) {
	this.activeTabBackgroundSelectedImage = property;
};
TabGroup.prototype.setActiveTabIconTint = function (property) {
	this.activeTabIconTint = property;
};
TabGroup.prototype.setAllowUserCustomization = function (property) {
	this.allowUserCustomization = property;
};
TabGroup.prototype.setBarColor = function (property) {
	this.barColor = property;
};
TabGroup.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
TabGroup.prototype.setCenter = function (property) {
	this.center = property;
};
TabGroup.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
TabGroup.prototype.setEditButtonTitle = function (property) {
	this.editButtonTitle = property;
};
TabGroup.prototype.setExitOnClose = function (property) {
	this.exitOnClose = property;
};
TabGroup.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
TabGroup.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
TabGroup.prototype.setNavBarHidden = function (property) {
	this.navBarHidden = property;
};
TabGroup.prototype.setNavTintColor = function (property) {
	this.navTintColor = property;
};
TabGroup.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
TabGroup.prototype.setShadowImage = function (property) {
	this.shadowImage = property;
};
TabGroup.prototype.setSmoothScrollOnTabClick = function (property) {
	this.smoothScrollOnTabClick = property;
};
TabGroup.prototype.setSwipeable = function (property) {
	this.swipeable = property;
};
TabGroup.prototype.setTabDividerColor = function (property) {
	this.tabDividerColor = property;
};
TabGroup.prototype.setTabDividerWidth = function (property) {
	this.tabDividerWidth = property;
};
TabGroup.prototype.setTabHeight = function (property) {
	this.tabHeight = property;
};
TabGroup.prototype.setTabs = function (property) {
	this.tabs = property;
};
TabGroup.prototype.setTabsAtBottom = function (property) {
	this.tabsAtBottom = property;
};
TabGroup.prototype.setTabsBackgroundColor = function (property) {
	this.tabsBackgroundColor = property;
};
TabGroup.prototype.setTabsBackgroundDisabledColor = function (property) {
	this.tabsBackgroundDisabledColor = property;
};
TabGroup.prototype.setTabsBackgroundDisabledImage = function (property) {
	this.tabsBackgroundDisabledImage = property;
};
TabGroup.prototype.setTabsBackgroundFocusedColor = function (property) {
	this.tabsBackgroundFocusedColor = property;
};
TabGroup.prototype.setTabsBackgroundFocusedImage = function (property) {
	this.tabsBackgroundFocusedImage = property;
};
TabGroup.prototype.setTabsBackgroundImage = function (property) {
	this.tabsBackgroundImage = property;
};
TabGroup.prototype.setTabsBackgroundSelectedColor = function (property) {
	this.tabsBackgroundSelectedColor = property;
};
TabGroup.prototype.setTabsBackgroundSelectedImage = function (property) {
	this.tabsBackgroundSelectedImage = property;
};
TabGroup.prototype.setTabsTintColor = function (property) {
	this.tabsTintColor = property;
};
TabGroup.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
TabGroup.prototype.setTitle = function (property) {
	this.title = property;
};
TabGroup.prototype.setTitleAttributes = function (property) {
	this.titleAttributes = property;
};
TabGroup.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
TabGroup.prototype.setTranslucent = function (property) {
	this.translucent = property;
};
TabGroup.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
TabGroup.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
TabGroup.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
TabGroup.prototype.setVisible = function (property) {
	this.visible = property;
};
TabGroup.prototype.show = function () {
};
TabGroup.prototype.startLayout = function () {
	throw new Error('Ti.UI.TabGroup.startLayout was deprecated, since 3.0.0');
};
TabGroup.prototype.toImage = function () {
	return {};
};
TabGroup.prototype.updateLayout = function () {
	throw new Error('Ti.UI.TabGroup.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new TabGroup(properties);
};