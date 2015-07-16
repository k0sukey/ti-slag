function TabGroup(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.TabGroup';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.clipMode = properties.clipMode || 0;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.keepScreenOn = properties.keepScreenOn || true;
	this.center = properties.center || {
		x: 0,
		y: 0
	};
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.tintColor = properties.tintColor || '';
	this.touchEnabled = properties.touchEnabled || true;
	this.visible = properties.visible || true;
	this.activeTab = properties.activeTab || {};
	this.activity = properties.activity || {};
	this.allowUserCustomization = properties.allowUserCustomization || true;
	this.barColor = properties.barColor || '';
	this.translucent = properties.translucent || true;
	this.titleAttributes = properties.titleAttributes || {};
	this.navTintColor = properties.navTintColor || '';
	this.editButtonTitle = properties.editButtonTitle || '';
	this.exitOnClose = properties.exitOnClose || true;
	this.navBarHidden = properties.navBarHidden || true;
	this.swipeable = properties.swipeable || true;
	this.smoothScrollOnTabClick = properties.smoothScrollOnTabClick || true;
	this.tabs = properties.tabs || [];
	this.windowSoftInputMode = properties.windowSoftInputMode || 0;
	this.tabsBackgroundColor = properties.tabsBackgroundColor || '';
	this.tabsTintColor = properties.tabsTintColor || '';
	this.title = properties.title || '';
	this.tabsBackgroundImage = properties.tabsBackgroundImage || '';
	this.shadowImage = properties.shadowImage || '';
	this.activeTabIconTint = properties.activeTabIconTint || '';
	this.tabsBackgroundDisabledColor = properties.tabsBackgroundDisabledColor || '';
	this.tabsBackgroundDisabledImage = properties.tabsBackgroundDisabledImage || '';
	this.tabsBackgroundFocusedColor = properties.tabsBackgroundFocusedColor || '';
	this.tabsBackgroundFocusedImage = properties.tabsBackgroundFocusedImage || '';
	this.tabsBackgroundSelectedColor = properties.tabsBackgroundSelectedColor || '';
	this.tabsBackgroundSelectedImage = properties.tabsBackgroundSelectedImage || '';
	this.activeTabBackgroundColor = properties.activeTabBackgroundColor || '';
	this.activeTabBackgroundImage = properties.activeTabBackgroundImage || '';
	this.activeTabBackgroundDisabledColor = properties.activeTabBackgroundDisabledColor || '';
	this.activeTabBackgroundDisabledImage = properties.activeTabBackgroundDisabledImage || '';
	this.activeTabBackgroundFocusedColor = properties.activeTabBackgroundFocusedColor || '';
	this.activeTabBackgroundFocusedImage = properties.activeTabBackgroundFocusedImage || '';
	this.activeTabBackgroundSelectedColor = properties.activeTabBackgroundSelectedColor || '';
	this.activeTabBackgroundSelectedImage = properties.activeTabBackgroundSelectedImage || '';
	this.tabDividerColor = properties.tabDividerColor || '';
	this.tabDividerWidth = properties.tabDividerWidth || 0;
	this.tabHeight = properties.tabHeight || 0;
	this.tabsAtBottom = properties.tabsAtBottom || true;
	return this;
}
TabGroup.prototype.addEventListener = function () {
};
TabGroup.prototype.removeEventListener = function () {
};
TabGroup.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
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
	return {};
};
TabGroup.prototype.getTabs = function () {
	return [];
};
TabGroup.prototype.setActiveTab = function () {
};
TabGroup.prototype.open = function () {
};
TabGroup.prototype.addTab = function () {
};
TabGroup.prototype.getBubbleParent = function () {
	return true;
};
TabGroup.prototype.setBubbleParent = function () {
};
TabGroup.prototype.getApiName = function () {
	return '';
};
TabGroup.prototype.getLifecycleContainer = function () {
	return {};
};
TabGroup.prototype.setLifecycleContainer = function () {
};
TabGroup.prototype.getClipMode = function () {
	return 0;
};
TabGroup.prototype.setClipMode = function () {
};
TabGroup.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
TabGroup.prototype.setOverrideCurrentAnimation = function () {
};
TabGroup.prototype.getPullBackgroundColor = function () {
	return '';
};
TabGroup.prototype.setPullBackgroundColor = function () {
};
TabGroup.prototype.getViewShadowRadius = function () {
	return 0;
};
TabGroup.prototype.setViewShadowRadius = function () {
};
TabGroup.prototype.getViewShadowColor = function () {
	return '';
};
TabGroup.prototype.setViewShadowColor = function () {
};
TabGroup.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
TabGroup.prototype.setViewShadowOffset = function () {
};
TabGroup.prototype.getKeepScreenOn = function () {
	return true;
};
TabGroup.prototype.setKeepScreenOn = function () {
};
TabGroup.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
TabGroup.prototype.setCenter = function () {
};
TabGroup.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
TabGroup.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
TabGroup.prototype.getTintColor = function () {
	return '';
};
TabGroup.prototype.setTintColor = function () {
};
TabGroup.prototype.getTouchEnabled = function () {
	return true;
};
TabGroup.prototype.setTouchEnabled = function () {
};
TabGroup.prototype.getVisible = function () {
	return true;
};
TabGroup.prototype.setVisible = function () {
};
TabGroup.prototype.getActiveTab = function () {
	return {};
};
TabGroup.prototype.setActiveTab = function () {
};
TabGroup.prototype.getActivity = function () {
	return {};
};
TabGroup.prototype.getAllowUserCustomization = function () {
	return true;
};
TabGroup.prototype.setAllowUserCustomization = function () {
};
TabGroup.prototype.getBarColor = function () {
	return '';
};
TabGroup.prototype.setBarColor = function () {
};
TabGroup.prototype.getTranslucent = function () {
	return true;
};
TabGroup.prototype.setTranslucent = function () {
};
TabGroup.prototype.getTitleAttributes = function () {
	return {};
};
TabGroup.prototype.setTitleAttributes = function () {
};
TabGroup.prototype.getNavTintColor = function () {
	return '';
};
TabGroup.prototype.setNavTintColor = function () {
};
TabGroup.prototype.getEditButtonTitle = function () {
	return '';
};
TabGroup.prototype.setEditButtonTitle = function () {
};
TabGroup.prototype.getExitOnClose = function () {
	return true;
};
TabGroup.prototype.setExitOnClose = function () {
};
TabGroup.prototype.getNavBarHidden = function () {
	return true;
};
TabGroup.prototype.setNavBarHidden = function () {
};
TabGroup.prototype.getSwipeable = function () {
	return true;
};
TabGroup.prototype.setSwipeable = function () {
};
TabGroup.prototype.getSmoothScrollOnTabClick = function () {
	return true;
};
TabGroup.prototype.setSmoothScrollOnTabClick = function () {
};
TabGroup.prototype.getTabs = function () {
	return [];
};
TabGroup.prototype.setTabs = function () {
};
TabGroup.prototype.getWindowSoftInputMode = function () {
	return 0;
};
TabGroup.prototype.setWindowSoftInputMode = function () {
};
TabGroup.prototype.getTabsBackgroundColor = function () {
	return '';
};
TabGroup.prototype.setTabsBackgroundColor = function () {
};
TabGroup.prototype.getTabsTintColor = function () {
	return '';
};
TabGroup.prototype.setTabsTintColor = function () {
};
TabGroup.prototype.getTitle = function () {
	return '';
};
TabGroup.prototype.setTitle = function () {
};
TabGroup.prototype.getTabsBackgroundImage = function () {
	return '';
};
TabGroup.prototype.setTabsBackgroundImage = function () {
};
TabGroup.prototype.getShadowImage = function () {
	return '';
};
TabGroup.prototype.setShadowImage = function () {
};
TabGroup.prototype.getActiveTabIconTint = function () {
	return '';
};
TabGroup.prototype.setActiveTabIconTint = function () {
};
TabGroup.prototype.getTabsBackgroundDisabledColor = function () {
	return '';
};
TabGroup.prototype.setTabsBackgroundDisabledColor = function () {
};
TabGroup.prototype.getTabsBackgroundDisabledImage = function () {
	return '';
};
TabGroup.prototype.setTabsBackgroundDisabledImage = function () {
};
TabGroup.prototype.getTabsBackgroundFocusedColor = function () {
	return '';
};
TabGroup.prototype.setTabsBackgroundFocusedColor = function () {
};
TabGroup.prototype.getTabsBackgroundFocusedImage = function () {
	return '';
};
TabGroup.prototype.setTabsBackgroundFocusedImage = function () {
};
TabGroup.prototype.getTabsBackgroundSelectedColor = function () {
	return '';
};
TabGroup.prototype.setTabsBackgroundSelectedColor = function () {
};
TabGroup.prototype.getTabsBackgroundSelectedImage = function () {
	return '';
};
TabGroup.prototype.setTabsBackgroundSelectedImage = function () {
};
TabGroup.prototype.getActiveTabBackgroundColor = function () {
	return '';
};
TabGroup.prototype.setActiveTabBackgroundColor = function () {
};
TabGroup.prototype.getActiveTabBackgroundImage = function () {
	return '';
};
TabGroup.prototype.setActiveTabBackgroundImage = function () {
};
TabGroup.prototype.getActiveTabBackgroundDisabledColor = function () {
	return '';
};
TabGroup.prototype.setActiveTabBackgroundDisabledColor = function () {
};
TabGroup.prototype.getActiveTabBackgroundDisabledImage = function () {
	return '';
};
TabGroup.prototype.setActiveTabBackgroundDisabledImage = function () {
};
TabGroup.prototype.getActiveTabBackgroundFocusedColor = function () {
	return '';
};
TabGroup.prototype.setActiveTabBackgroundFocusedColor = function () {
};
TabGroup.prototype.getActiveTabBackgroundFocusedImage = function () {
	return '';
};
TabGroup.prototype.setActiveTabBackgroundFocusedImage = function () {
};
TabGroup.prototype.getActiveTabBackgroundSelectedColor = function () {
	return '';
};
TabGroup.prototype.setActiveTabBackgroundSelectedColor = function () {
};
TabGroup.prototype.getActiveTabBackgroundSelectedImage = function () {
	return '';
};
TabGroup.prototype.setActiveTabBackgroundSelectedImage = function () {
};
TabGroup.prototype.getTabDividerColor = function () {
	return '';
};
TabGroup.prototype.setTabDividerColor = function () {
};
TabGroup.prototype.getTabDividerWidth = function () {
	return '';
};
TabGroup.prototype.setTabDividerWidth = function () {
};
TabGroup.prototype.getTabHeight = function () {
	return '';
};
TabGroup.prototype.setTabHeight = function () {
};
TabGroup.prototype.getTabsAtBottom = function () {
	return true;
};
TabGroup.prototype.setTabsAtBottom = function () {
};
module.exports = function (properties) {
	return new TabGroup(properties);
};