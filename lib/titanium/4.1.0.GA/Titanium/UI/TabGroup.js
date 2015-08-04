var crypto = require('crypto');
function TabGroup(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'clipMode',
			'overrideCurrentAnimation',
			'pullBackgroundColor',
			'viewShadowRadius',
			'viewShadowColor',
			'viewShadowOffset',
			'keepScreenOn',
			'center',
			'rect',
			'size',
			'tintColor',
			'touchEnabled',
			'visible',
			'activeTab',
			'activity',
			'allowUserCustomization',
			'barColor',
			'translucent',
			'titleAttributes',
			'navTintColor',
			'editButtonTitle',
			'exitOnClose',
			'navBarHidden',
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
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.TabGroup.apiName is read only property');
	}
	this.apiName = 'Ti.UI.TabGroup';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	this.viewShadowRadius = __SLAG__properties.viewShadowRadius || 0;
	this.viewShadowColor = __SLAG__properties.viewShadowColor || '';
	this.viewShadowOffset = __SLAG__properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
	this.center = __SLAG__properties.center || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.TabGroup.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.TabGroup.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.tintColor = __SLAG__properties.tintColor || '';
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.visible = __SLAG__properties.visible || true;
	this.activeTab = __SLAG__properties.activeTab || {};
	if (__SLAG__properties.activity) {
		throw new Error('Ti.UI.TabGroup.activity is read only property');
	}
	this.activity = {};
	this.allowUserCustomization = __SLAG__properties.allowUserCustomization || true;
	this.barColor = __SLAG__properties.barColor || '';
	this.translucent = __SLAG__properties.translucent || true;
	this.titleAttributes = __SLAG__properties.titleAttributes || {};
	this.navTintColor = __SLAG__properties.navTintColor || '';
	this.editButtonTitle = __SLAG__properties.editButtonTitle || '';
	this.exitOnClose = __SLAG__properties.exitOnClose || true;
	this.navBarHidden = __SLAG__properties.navBarHidden || true;
	this.swipeable = __SLAG__properties.swipeable || true;
	this.smoothScrollOnTabClick = __SLAG__properties.smoothScrollOnTabClick || true;
	this.tabs = __SLAG__properties.tabs || [];
	this.windowSoftInputMode = __SLAG__properties.windowSoftInputMode || 0;
	this.tabsBackgroundColor = __SLAG__properties.tabsBackgroundColor || '';
	this.tabsTintColor = __SLAG__properties.tabsTintColor || '';
	this.title = __SLAG__properties.title || '';
	this.tabsBackgroundImage = __SLAG__properties.tabsBackgroundImage || '';
	this.shadowImage = __SLAG__properties.shadowImage || '';
	this.activeTabIconTint = __SLAG__properties.activeTabIconTint || '';
	this.tabsBackgroundDisabledColor = __SLAG__properties.tabsBackgroundDisabledColor || '';
	this.tabsBackgroundDisabledImage = __SLAG__properties.tabsBackgroundDisabledImage || '';
	this.tabsBackgroundFocusedColor = __SLAG__properties.tabsBackgroundFocusedColor || '';
	this.tabsBackgroundFocusedImage = __SLAG__properties.tabsBackgroundFocusedImage || '';
	this.tabsBackgroundSelectedColor = __SLAG__properties.tabsBackgroundSelectedColor || '';
	this.tabsBackgroundSelectedImage = __SLAG__properties.tabsBackgroundSelectedImage || '';
	this.activeTabBackgroundColor = __SLAG__properties.activeTabBackgroundColor || '';
	this.activeTabBackgroundImage = __SLAG__properties.activeTabBackgroundImage || '';
	this.activeTabBackgroundDisabledColor = __SLAG__properties.activeTabBackgroundDisabledColor || '';
	this.activeTabBackgroundDisabledImage = __SLAG__properties.activeTabBackgroundDisabledImage || '';
	this.activeTabBackgroundFocusedColor = __SLAG__properties.activeTabBackgroundFocusedColor || '';
	this.activeTabBackgroundFocusedImage = __SLAG__properties.activeTabBackgroundFocusedImage || '';
	this.activeTabBackgroundSelectedColor = __SLAG__properties.activeTabBackgroundSelectedColor || '';
	this.activeTabBackgroundSelectedImage = __SLAG__properties.activeTabBackgroundSelectedImage || '';
	this.tabDividerColor = __SLAG__properties.tabDividerColor || '';
	this.tabDividerWidth = __SLAG__properties.tabDividerWidth || 0;
	this.tabHeight = __SLAG__properties.tabHeight || 0;
	this.tabsAtBottom = __SLAG__properties.tabsAtBottom || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
TabGroup.prototype.addEventListener = function () {
};
TabGroup.prototype.removeEventListener = function () {
};
TabGroup.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
TabGroup.prototype.fireEvent = function () {
};
TabGroup.prototype.finishLayout = function () {
	throw new Error('Ti.UI.TabGroup.finishLayout was deprecated, since 3.0.0');
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
TabGroup.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
TabGroup.prototype.animate = function () {
};
TabGroup.prototype.hide = function () {
};
TabGroup.prototype.show = function () {
};
TabGroup.prototype.close = function () {
};
TabGroup.prototype.disableTabNavigation = function () {
};
TabGroup.prototype.removeTab = function () {
};
TabGroup.prototype.getActiveTab = function () {
	return this.activeTab;
};
TabGroup.prototype.getTabs = function () {
	return this.tabs;
};
TabGroup.prototype.setActiveTab = function (property) {
	this.activeTab = property;
};
TabGroup.prototype.open = function () {
};
TabGroup.prototype.addTab = function () {
};
TabGroup.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
TabGroup.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
TabGroup.prototype.getApiName = function () {
	return this.apiName;
};
TabGroup.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
TabGroup.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
TabGroup.prototype.getClipMode = function () {
	return this.clipMode;
};
TabGroup.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
TabGroup.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
TabGroup.prototype.setOverrideCurrentAnimation = function (property) {
	this.overrideCurrentAnimation = property;
};
TabGroup.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
TabGroup.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
TabGroup.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
TabGroup.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
TabGroup.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
TabGroup.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
TabGroup.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
TabGroup.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
TabGroup.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
TabGroup.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
TabGroup.prototype.getCenter = function () {
	return this.center;
};
TabGroup.prototype.setCenter = function (property) {
	this.center = property;
};
TabGroup.prototype.getRect = function () {
	return this.rect;
};
TabGroup.prototype.getSize = function () {
	return this.size;
};
TabGroup.prototype.getTintColor = function () {
	return this.tintColor;
};
TabGroup.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
TabGroup.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
TabGroup.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
TabGroup.prototype.getVisible = function () {
	return this.visible;
};
TabGroup.prototype.setVisible = function (property) {
	this.visible = property;
};
TabGroup.prototype.getActiveTab = function () {
	return this.activeTab;
};
TabGroup.prototype.setActiveTab = function (property) {
	this.activeTab = property;
};
TabGroup.prototype.getActivity = function () {
	return this.activity;
};
TabGroup.prototype.getAllowUserCustomization = function () {
	return this.allowUserCustomization;
};
TabGroup.prototype.setAllowUserCustomization = function (property) {
	this.allowUserCustomization = property;
};
TabGroup.prototype.getBarColor = function () {
	return this.barColor;
};
TabGroup.prototype.setBarColor = function (property) {
	this.barColor = property;
};
TabGroup.prototype.getTranslucent = function () {
	return this.translucent;
};
TabGroup.prototype.setTranslucent = function (property) {
	this.translucent = property;
};
TabGroup.prototype.getTitleAttributes = function () {
	return this.titleAttributes;
};
TabGroup.prototype.setTitleAttributes = function (property) {
	this.titleAttributes = property;
};
TabGroup.prototype.getNavTintColor = function () {
	return this.navTintColor;
};
TabGroup.prototype.setNavTintColor = function (property) {
	this.navTintColor = property;
};
TabGroup.prototype.getEditButtonTitle = function () {
	return this.editButtonTitle;
};
TabGroup.prototype.setEditButtonTitle = function (property) {
	this.editButtonTitle = property;
};
TabGroup.prototype.getExitOnClose = function () {
	return this.exitOnClose;
};
TabGroup.prototype.setExitOnClose = function (property) {
	this.exitOnClose = property;
};
TabGroup.prototype.getNavBarHidden = function () {
	return this.navBarHidden;
};
TabGroup.prototype.setNavBarHidden = function (property) {
	this.navBarHidden = property;
};
TabGroup.prototype.getSwipeable = function () {
	return this.swipeable;
};
TabGroup.prototype.setSwipeable = function (property) {
	this.swipeable = property;
};
TabGroup.prototype.getSmoothScrollOnTabClick = function () {
	return this.smoothScrollOnTabClick;
};
TabGroup.prototype.setSmoothScrollOnTabClick = function (property) {
	this.smoothScrollOnTabClick = property;
};
TabGroup.prototype.getTabs = function () {
	return this.tabs;
};
TabGroup.prototype.setTabs = function (property) {
	this.tabs = property;
};
TabGroup.prototype.getWindowSoftInputMode = function () {
	return this.windowSoftInputMode;
};
TabGroup.prototype.setWindowSoftInputMode = function (property) {
	this.windowSoftInputMode = property;
};
TabGroup.prototype.getTabsBackgroundColor = function () {
	return this.tabsBackgroundColor;
};
TabGroup.prototype.setTabsBackgroundColor = function (property) {
	this.tabsBackgroundColor = property;
};
TabGroup.prototype.getTabsTintColor = function () {
	return this.tabsTintColor;
};
TabGroup.prototype.setTabsTintColor = function (property) {
	this.tabsTintColor = property;
};
TabGroup.prototype.getTitle = function () {
	return this.title;
};
TabGroup.prototype.setTitle = function (property) {
	this.title = property;
};
TabGroup.prototype.getTabsBackgroundImage = function () {
	return this.tabsBackgroundImage;
};
TabGroup.prototype.setTabsBackgroundImage = function (property) {
	this.tabsBackgroundImage = property;
};
TabGroup.prototype.getShadowImage = function () {
	return this.shadowImage;
};
TabGroup.prototype.setShadowImage = function (property) {
	this.shadowImage = property;
};
TabGroup.prototype.getActiveTabIconTint = function () {
	return this.activeTabIconTint;
};
TabGroup.prototype.setActiveTabIconTint = function (property) {
	this.activeTabIconTint = property;
};
TabGroup.prototype.getTabsBackgroundDisabledColor = function () {
	return this.tabsBackgroundDisabledColor;
};
TabGroup.prototype.setTabsBackgroundDisabledColor = function (property) {
	this.tabsBackgroundDisabledColor = property;
};
TabGroup.prototype.getTabsBackgroundDisabledImage = function () {
	return this.tabsBackgroundDisabledImage;
};
TabGroup.prototype.setTabsBackgroundDisabledImage = function (property) {
	this.tabsBackgroundDisabledImage = property;
};
TabGroup.prototype.getTabsBackgroundFocusedColor = function () {
	return this.tabsBackgroundFocusedColor;
};
TabGroup.prototype.setTabsBackgroundFocusedColor = function (property) {
	this.tabsBackgroundFocusedColor = property;
};
TabGroup.prototype.getTabsBackgroundFocusedImage = function () {
	return this.tabsBackgroundFocusedImage;
};
TabGroup.prototype.setTabsBackgroundFocusedImage = function (property) {
	this.tabsBackgroundFocusedImage = property;
};
TabGroup.prototype.getTabsBackgroundSelectedColor = function () {
	return this.tabsBackgroundSelectedColor;
};
TabGroup.prototype.setTabsBackgroundSelectedColor = function (property) {
	this.tabsBackgroundSelectedColor = property;
};
TabGroup.prototype.getTabsBackgroundSelectedImage = function () {
	return this.tabsBackgroundSelectedImage;
};
TabGroup.prototype.setTabsBackgroundSelectedImage = function (property) {
	this.tabsBackgroundSelectedImage = property;
};
TabGroup.prototype.getActiveTabBackgroundColor = function () {
	return this.activeTabBackgroundColor;
};
TabGroup.prototype.setActiveTabBackgroundColor = function (property) {
	this.activeTabBackgroundColor = property;
};
TabGroup.prototype.getActiveTabBackgroundImage = function () {
	return this.activeTabBackgroundImage;
};
TabGroup.prototype.setActiveTabBackgroundImage = function (property) {
	this.activeTabBackgroundImage = property;
};
TabGroup.prototype.getActiveTabBackgroundDisabledColor = function () {
	return this.activeTabBackgroundDisabledColor;
};
TabGroup.prototype.setActiveTabBackgroundDisabledColor = function (property) {
	this.activeTabBackgroundDisabledColor = property;
};
TabGroup.prototype.getActiveTabBackgroundDisabledImage = function () {
	return this.activeTabBackgroundDisabledImage;
};
TabGroup.prototype.setActiveTabBackgroundDisabledImage = function (property) {
	this.activeTabBackgroundDisabledImage = property;
};
TabGroup.prototype.getActiveTabBackgroundFocusedColor = function () {
	return this.activeTabBackgroundFocusedColor;
};
TabGroup.prototype.setActiveTabBackgroundFocusedColor = function (property) {
	this.activeTabBackgroundFocusedColor = property;
};
TabGroup.prototype.getActiveTabBackgroundFocusedImage = function () {
	return this.activeTabBackgroundFocusedImage;
};
TabGroup.prototype.setActiveTabBackgroundFocusedImage = function (property) {
	this.activeTabBackgroundFocusedImage = property;
};
TabGroup.prototype.getActiveTabBackgroundSelectedColor = function () {
	return this.activeTabBackgroundSelectedColor;
};
TabGroup.prototype.setActiveTabBackgroundSelectedColor = function (property) {
	this.activeTabBackgroundSelectedColor = property;
};
TabGroup.prototype.getActiveTabBackgroundSelectedImage = function () {
	return this.activeTabBackgroundSelectedImage;
};
TabGroup.prototype.setActiveTabBackgroundSelectedImage = function (property) {
	this.activeTabBackgroundSelectedImage = property;
};
TabGroup.prototype.getTabDividerColor = function () {
	return this.tabDividerColor;
};
TabGroup.prototype.setTabDividerColor = function (property) {
	this.tabDividerColor = property;
};
TabGroup.prototype.getTabDividerWidth = function () {
	return this.tabDividerWidth;
};
TabGroup.prototype.setTabDividerWidth = function (property) {
	this.tabDividerWidth = property;
};
TabGroup.prototype.getTabHeight = function () {
	return this.tabHeight;
};
TabGroup.prototype.setTabHeight = function (property) {
	this.tabHeight = property;
};
TabGroup.prototype.getTabsAtBottom = function () {
	return this.tabsAtBottom;
};
TabGroup.prototype.setTabsAtBottom = function (property) {
	this.tabsAtBottom = property;
};
module.exports = function (properties) {
	return new TabGroup(properties);
};