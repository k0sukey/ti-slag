function TabGroup(properties) {
	properties = properties || {};
	this.activeTab = properties.activeTab || {};
	this.activeTabBackgroundColor = properties.activeTabBackgroundColor || '';
	this.activeTabBackgroundDisabledColor = properties.activeTabBackgroundDisabledColor || '';
	this.activeTabBackgroundDisabledImage = properties.activeTabBackgroundDisabledImage || '';
	this.activeTabBackgroundFocusedColor = properties.activeTabBackgroundFocusedColor || '';
	this.activeTabBackgroundFocusedImage = properties.activeTabBackgroundFocusedImage || '';
	this.activeTabBackgroundImage = properties.activeTabBackgroundImage || '';
	this.activeTabBackgroundSelectedColor = properties.activeTabBackgroundSelectedColor || '';
	this.activeTabBackgroundSelectedImage = properties.activeTabBackgroundSelectedImage || '';
	this.activeTabIconTint = properties.activeTabIconTint || '';
	this.activity = properties.activity || {};
	this.allowUserCustomization = properties.allowUserCustomization || true;
	this.apiName = 'Ti.UI.TabGroup';
	this.barColor = properties.barColor || '';
	this.bubbleParent = properties.bubbleParent || true;
	this.center = properties.center || {
		x: 0,
		y: 0
	};
	this.clipMode = properties.clipMode || 0;
	this.editButtonTitle = properties.editButtonTitle || '';
	this.exitOnClose = properties.exitOnClose || true;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.navBarHidden = properties.navBarHidden || true;
	this.navTintColor = properties.navTintColor || '';
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.shadowImage = properties.shadowImage || '';
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.tabDividerColor = properties.tabDividerColor || '';
	this.tabDividerWidth = properties.tabDividerWidth || 0;
	this.tabHeight = properties.tabHeight || 0;
	this.tabs = properties.tabs || [];
	this.tabsAtBottom = properties.tabsAtBottom || true;
	this.tabsBackgroundColor = properties.tabsBackgroundColor || '';
	this.tabsBackgroundDisabledColor = properties.tabsBackgroundDisabledColor || '';
	this.tabsBackgroundDisabledImage = properties.tabsBackgroundDisabledImage || '';
	this.tabsBackgroundFocusedColor = properties.tabsBackgroundFocusedColor || '';
	this.tabsBackgroundFocusedImage = properties.tabsBackgroundFocusedImage || '';
	this.tabsBackgroundImage = properties.tabsBackgroundImage || '';
	this.tabsBackgroundSelectedColor = properties.tabsBackgroundSelectedColor || '';
	this.tabsBackgroundSelectedImage = properties.tabsBackgroundSelectedImage || '';
	this.tabsTintColor = properties.tabsTintColor || '';
	this.tintColor = properties.tintColor || '';
	this.title = properties.title || '';
	this.titleAttributes = properties.titleAttributes || {};
	this.touchEnabled = properties.touchEnabled || true;
	this.translucent = properties.translucent || true;
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.visible = properties.visible || true;
	this.windowSoftInputMode = properties.windowSoftInputMode || 0;
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