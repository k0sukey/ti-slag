function TabGroup(properties) {
	properties = properties || {};
	this.activeTab = properties.activeTab || undefined;
	this.activeTabBackgroundColor = properties.activeTabBackgroundColor || undefined;
	this.activeTabBackgroundDisabledColor = properties.activeTabBackgroundDisabledColor || undefined;
	this.activeTabBackgroundDisabledImage = properties.activeTabBackgroundDisabledImage || undefined;
	this.activeTabBackgroundFocusedColor = properties.activeTabBackgroundFocusedColor || undefined;
	this.activeTabBackgroundFocusedImage = properties.activeTabBackgroundFocusedImage || undefined;
	this.activeTabBackgroundImage = properties.activeTabBackgroundImage || undefined;
	this.activeTabBackgroundSelectedColor = properties.activeTabBackgroundSelectedColor || undefined;
	this.activeTabBackgroundSelectedImage = properties.activeTabBackgroundSelectedImage || undefined;
	this.activeTabIconTint = properties.activeTabIconTint || undefined;
	this.activity = properties.activity || undefined;
	this.allowUserCustomization = properties.allowUserCustomization || undefined;
	this.apiName = 'Ti.UI.TabGroup';
	this.barColor = properties.barColor || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.center = properties.center || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.editButtonTitle = properties.editButtonTitle || undefined;
	this.exitOnClose = properties.exitOnClose || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.navBarHidden = properties.navBarHidden || undefined;
	this.navTintColor = properties.navTintColor || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.shadowImage = properties.shadowImage || undefined;
	this.size = properties.size || undefined;
	this.tabDividerColor = properties.tabDividerColor || undefined;
	this.tabDividerWidth = properties.tabDividerWidth || undefined;
	this.tabHeight = properties.tabHeight || undefined;
	this.tabs = properties.tabs || undefined;
	this.tabsAtBottom = properties.tabsAtBottom || undefined;
	this.tabsBackgroundColor = properties.tabsBackgroundColor || undefined;
	this.tabsBackgroundDisabledColor = properties.tabsBackgroundDisabledColor || undefined;
	this.tabsBackgroundDisabledImage = properties.tabsBackgroundDisabledImage || undefined;
	this.tabsBackgroundFocusedColor = properties.tabsBackgroundFocusedColor || undefined;
	this.tabsBackgroundFocusedImage = properties.tabsBackgroundFocusedImage || undefined;
	this.tabsBackgroundImage = properties.tabsBackgroundImage || undefined;
	this.tabsBackgroundSelectedColor = properties.tabsBackgroundSelectedColor || undefined;
	this.tabsBackgroundSelectedImage = properties.tabsBackgroundSelectedImage || undefined;
	this.tabsTintColor = properties.tabsTintColor || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.title = properties.title || undefined;
	this.titleAttributes = properties.titleAttributes || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.translucent = properties.translucent || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.windowSoftInputMode = properties.windowSoftInputMode || undefined;
	return this;
}
TabGroup.prototype.addEventListener = function () {
};
TabGroup.prototype.addTab = function () {
};
TabGroup.prototype.animate = function () {
};
TabGroup.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
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
TabGroup.prototype.finishLayout = function () {
	throw new Error('Ti.UI.TabGroup.finishLayout was deprecated, since 3.0.0');
};
TabGroup.prototype.fireEvent = function () {
};
TabGroup.prototype.getActiveTab = function () {
	return {};
};
TabGroup.prototype.getActiveTabBackgroundColor = function () {
	return '';
};
TabGroup.prototype.getActiveTabBackgroundDisabledColor = function () {
	return '';
};
TabGroup.prototype.getActiveTabBackgroundDisabledImage = function () {
	return '';
};
TabGroup.prototype.getActiveTabBackgroundFocusedColor = function () {
	return '';
};
TabGroup.prototype.getActiveTabBackgroundFocusedImage = function () {
	return '';
};
TabGroup.prototype.getActiveTabBackgroundImage = function () {
	return '';
};
TabGroup.prototype.getActiveTabBackgroundSelectedColor = function () {
	return '';
};
TabGroup.prototype.getActiveTabBackgroundSelectedImage = function () {
	return '';
};
TabGroup.prototype.getActiveTabIconTint = function () {
	return '';
};
TabGroup.prototype.getActivity = function () {
	return {};
};
TabGroup.prototype.getAllowUserCustomization = function () {
	return true;
};
TabGroup.prototype.getApiName = function () {
	return '';
};
TabGroup.prototype.getBarColor = function () {
	return '';
};
TabGroup.prototype.getBubbleParent = function () {
	return true;
};
TabGroup.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
TabGroup.prototype.getClipMode = function () {
	return 0;
};
TabGroup.prototype.getEditButtonTitle = function () {
	return '';
};
TabGroup.prototype.getExitOnClose = function () {
	return true;
};
TabGroup.prototype.getKeepScreenOn = function () {
	return true;
};
TabGroup.prototype.getNavBarHidden = function () {
	return true;
};
TabGroup.prototype.getNavTintColor = function () {
	return '';
};
TabGroup.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
TabGroup.prototype.getPullBackgroundColor = function () {
	return '';
};
TabGroup.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
TabGroup.prototype.getShadowImage = function () {
	return '';
};
TabGroup.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
TabGroup.prototype.getTabDividerColor = function () {
	return '';
};
TabGroup.prototype.getTabDividerWidth = function () {
	return 0;
};
TabGroup.prototype.getTabHeight = function () {
	return 0;
};
TabGroup.prototype.getTabs = function () {
	return [];
};
TabGroup.prototype.getTabsAtBottom = function () {
	return true;
};
TabGroup.prototype.getTabsBackgroundColor = function () {
	return '';
};
TabGroup.prototype.getTabsBackgroundDisabledColor = function () {
	return '';
};
TabGroup.prototype.getTabsBackgroundDisabledImage = function () {
	return '';
};
TabGroup.prototype.getTabsBackgroundFocusedColor = function () {
	return '';
};
TabGroup.prototype.getTabsBackgroundFocusedImage = function () {
	return '';
};
TabGroup.prototype.getTabsBackgroundImage = function () {
	return '';
};
TabGroup.prototype.getTabsBackgroundSelectedColor = function () {
	return '';
};
TabGroup.prototype.getTabsBackgroundSelectedImage = function () {
	return '';
};
TabGroup.prototype.getTabsTintColor = function () {
	return '';
};
TabGroup.prototype.getTintColor = function () {
	return '';
};
TabGroup.prototype.getTitle = function () {
	return '';
};
TabGroup.prototype.getTitleAttributes = function () {
	return {};
};
TabGroup.prototype.getTouchEnabled = function () {
	return true;
};
TabGroup.prototype.getTranslucent = function () {
	return true;
};
TabGroup.prototype.getViewShadowColor = function () {
	return '';
};
TabGroup.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
TabGroup.prototype.getViewShadowRadius = function () {
	return 0;
};
TabGroup.prototype.getVisible = function () {
	return true;
};
TabGroup.prototype.getWindowSoftInputMode = function () {
	return 0;
};
TabGroup.prototype.hide = function () {
};
TabGroup.prototype.open = function () {
};
TabGroup.prototype.removeEventListener = function () {
};
TabGroup.prototype.removeTab = function () {
};
TabGroup.prototype.setActiveTab = function () {
};
TabGroup.prototype.setActiveTabBackgroundColor = function () {
};
TabGroup.prototype.setActiveTabBackgroundDisabledColor = function () {
};
TabGroup.prototype.setActiveTabBackgroundDisabledImage = function () {
};
TabGroup.prototype.setActiveTabBackgroundFocusedColor = function () {
};
TabGroup.prototype.setActiveTabBackgroundFocusedImage = function () {
};
TabGroup.prototype.setActiveTabBackgroundImage = function () {
};
TabGroup.prototype.setActiveTabBackgroundSelectedColor = function () {
};
TabGroup.prototype.setActiveTabBackgroundSelectedImage = function () {
};
TabGroup.prototype.setActiveTabIconTint = function () {
};
TabGroup.prototype.setAllowUserCustomization = function () {
};
TabGroup.prototype.setBarColor = function () {
};
TabGroup.prototype.setBubbleParent = function () {
};
TabGroup.prototype.setCenter = function () {
};
TabGroup.prototype.setClipMode = function () {
};
TabGroup.prototype.setEditButtonTitle = function () {
};
TabGroup.prototype.setExitOnClose = function () {
};
TabGroup.prototype.setKeepScreenOn = function () {
};
TabGroup.prototype.setNavBarHidden = function () {
};
TabGroup.prototype.setNavTintColor = function () {
};
TabGroup.prototype.setPullBackgroundColor = function () {
};
TabGroup.prototype.setShadowImage = function () {
};
TabGroup.prototype.setTabDividerColor = function () {
};
TabGroup.prototype.setTabDividerWidth = function () {
};
TabGroup.prototype.setTabHeight = function () {
};
TabGroup.prototype.setTabs = function () {
};
TabGroup.prototype.setTabsAtBottom = function () {
};
TabGroup.prototype.setTabsBackgroundColor = function () {
};
TabGroup.prototype.setTabsBackgroundDisabledColor = function () {
};
TabGroup.prototype.setTabsBackgroundDisabledImage = function () {
};
TabGroup.prototype.setTabsBackgroundFocusedColor = function () {
};
TabGroup.prototype.setTabsBackgroundFocusedImage = function () {
};
TabGroup.prototype.setTabsBackgroundImage = function () {
};
TabGroup.prototype.setTabsBackgroundSelectedColor = function () {
};
TabGroup.prototype.setTabsBackgroundSelectedImage = function () {
};
TabGroup.prototype.setTabsTintColor = function () {
};
TabGroup.prototype.setTintColor = function () {
};
TabGroup.prototype.setTitle = function () {
};
TabGroup.prototype.setTitleAttributes = function () {
};
TabGroup.prototype.setTouchEnabled = function () {
};
TabGroup.prototype.setTranslucent = function () {
};
TabGroup.prototype.setViewShadowColor = function () {
};
TabGroup.prototype.setViewShadowOffset = function () {
};
TabGroup.prototype.setViewShadowRadius = function () {
};
TabGroup.prototype.setVisible = function () {
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