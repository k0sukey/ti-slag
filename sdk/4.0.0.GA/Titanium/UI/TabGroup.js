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
	this.apiName = 'Titanium.UI.TabGroup';
	this.barColor = properties.barColor || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.center = properties.center || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.editButtonTitle = properties.editButtonTitle || undefined;
	this.exitOnClose = properties.exitOnClose || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.navBarHidden = properties.navBarHidden || undefined;
	this.navTintColor = properties.navTintColor || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.shadowImage = properties.shadowImage || undefined;
	this.size = properties.size || undefined;
	this.smoothScrollOnTabClick = properties.smoothScrollOnTabClick || undefined;
	this.swipeable = properties.swipeable || undefined;
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

TabGroup.prototype.addEventListener = function(){};

TabGroup.prototype.addTab = function(){};

TabGroup.prototype.animate = function(){};

TabGroup.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

TabGroup.prototype.close = function(){};

TabGroup.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

TabGroup.prototype.disableTabNavigation = function(){};

TabGroup.prototype.finishLayout = function(){};

TabGroup.prototype.fireEvent = function(){};

TabGroup.prototype.getActiveTab = function(){ return this.activeTab; };

TabGroup.prototype.getActiveTabBackgroundColor = function(){ return this.activeTabBackgroundColor; };

TabGroup.prototype.getActiveTabBackgroundDisabledColor = function(){ return this.activeTabBackgroundDisabledColor; };

TabGroup.prototype.getActiveTabBackgroundDisabledImage = function(){ return this.activeTabBackgroundDisabledImage; };

TabGroup.prototype.getActiveTabBackgroundFocusedColor = function(){ return this.activeTabBackgroundFocusedColor; };

TabGroup.prototype.getActiveTabBackgroundFocusedImage = function(){ return this.activeTabBackgroundFocusedImage; };

TabGroup.prototype.getActiveTabBackgroundImage = function(){ return this.activeTabBackgroundImage; };

TabGroup.prototype.getActiveTabBackgroundSelectedColor = function(){ return this.activeTabBackgroundSelectedColor; };

TabGroup.prototype.getActiveTabBackgroundSelectedImage = function(){ return this.activeTabBackgroundSelectedImage; };

TabGroup.prototype.getActiveTabIconTint = function(){ return this.activeTabIconTint; };

TabGroup.prototype.getActivity = function(){ return this.activity; };

TabGroup.prototype.getAllowUserCustomization = function(){ return this.allowUserCustomization; };

TabGroup.prototype.getApiName = function(){ return this.apiName; };

TabGroup.prototype.getBarColor = function(){ return this.barColor; };

TabGroup.prototype.getBubbleParent = function(){ return this.bubbleParent; };

TabGroup.prototype.getCenter = function(){ return this.center; };

TabGroup.prototype.getClipMode = function(){ return this.clipMode; };

TabGroup.prototype.getEditButtonTitle = function(){ return this.editButtonTitle; };

TabGroup.prototype.getExitOnClose = function(){ return this.exitOnClose; };

TabGroup.prototype.getKeepScreenOn = function(){ return this.keepScreenOn; };

TabGroup.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

TabGroup.prototype.getNavBarHidden = function(){ return this.navBarHidden; };

TabGroup.prototype.getNavTintColor = function(){ return this.navTintColor; };

TabGroup.prototype.getOverrideCurrentAnimation = function(){ return this.overrideCurrentAnimation; };

TabGroup.prototype.getPullBackgroundColor = function(){ return this.pullBackgroundColor; };

TabGroup.prototype.getRect = function(){ return this.rect; };

TabGroup.prototype.getShadowImage = function(){ return this.shadowImage; };

TabGroup.prototype.getSize = function(){ return this.size; };

TabGroup.prototype.getSmoothScrollOnTabClick = function(){ return this.smoothScrollOnTabClick; };

TabGroup.prototype.getSwipeable = function(){ return this.swipeable; };

TabGroup.prototype.getTabDividerColor = function(){ return this.tabDividerColor; };

TabGroup.prototype.getTabDividerWidth = function(){ return this.tabDividerWidth; };

TabGroup.prototype.getTabHeight = function(){ return this.tabHeight; };

TabGroup.prototype.getTabs = function(){ return this.tabs; };

TabGroup.prototype.getTabsAtBottom = function(){ return this.tabsAtBottom; };

TabGroup.prototype.getTabsBackgroundColor = function(){ return this.tabsBackgroundColor; };

TabGroup.prototype.getTabsBackgroundDisabledColor = function(){ return this.tabsBackgroundDisabledColor; };

TabGroup.prototype.getTabsBackgroundDisabledImage = function(){ return this.tabsBackgroundDisabledImage; };

TabGroup.prototype.getTabsBackgroundFocusedColor = function(){ return this.tabsBackgroundFocusedColor; };

TabGroup.prototype.getTabsBackgroundFocusedImage = function(){ return this.tabsBackgroundFocusedImage; };

TabGroup.prototype.getTabsBackgroundImage = function(){ return this.tabsBackgroundImage; };

TabGroup.prototype.getTabsBackgroundSelectedColor = function(){ return this.tabsBackgroundSelectedColor; };

TabGroup.prototype.getTabsBackgroundSelectedImage = function(){ return this.tabsBackgroundSelectedImage; };

TabGroup.prototype.getTabsTintColor = function(){ return this.tabsTintColor; };

TabGroup.prototype.getTintColor = function(){ return this.tintColor; };

TabGroup.prototype.getTitle = function(){ return this.title; };

TabGroup.prototype.getTitleAttributes = function(){ return this.titleAttributes; };

TabGroup.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

TabGroup.prototype.getTranslucent = function(){ return this.translucent; };

TabGroup.prototype.getViewShadowColor = function(){ return this.viewShadowColor; };

TabGroup.prototype.getViewShadowOffset = function(){ return this.viewShadowOffset; };

TabGroup.prototype.getViewShadowRadius = function(){ return this.viewShadowRadius; };

TabGroup.prototype.getVisible = function(){ return this.visible; };

TabGroup.prototype.getWindowSoftInputMode = function(){ return this.windowSoftInputMode; };

TabGroup.prototype.hide = function(){};

TabGroup.prototype.open = function(){};

TabGroup.prototype.removeEventListener = function(){};

TabGroup.prototype.removeTab = function(){};

TabGroup.prototype.setActiveTab = function(property){ this.activeTab = property; };

TabGroup.prototype.setActiveTabBackgroundColor = function(property){ this.activeTabBackgroundColor = property; };

TabGroup.prototype.setActiveTabBackgroundDisabledColor = function(property){ this.activeTabBackgroundDisabledColor = property; };

TabGroup.prototype.setActiveTabBackgroundDisabledImage = function(property){ this.activeTabBackgroundDisabledImage = property; };

TabGroup.prototype.setActiveTabBackgroundFocusedColor = function(property){ this.activeTabBackgroundFocusedColor = property; };

TabGroup.prototype.setActiveTabBackgroundFocusedImage = function(property){ this.activeTabBackgroundFocusedImage = property; };

TabGroup.prototype.setActiveTabBackgroundImage = function(property){ this.activeTabBackgroundImage = property; };

TabGroup.prototype.setActiveTabBackgroundSelectedColor = function(property){ this.activeTabBackgroundSelectedColor = property; };

TabGroup.prototype.setActiveTabBackgroundSelectedImage = function(property){ this.activeTabBackgroundSelectedImage = property; };

TabGroup.prototype.setActiveTabIconTint = function(property){ this.activeTabIconTint = property; };

TabGroup.prototype.setAllowUserCustomization = function(property){ this.allowUserCustomization = property; };

TabGroup.prototype.setBarColor = function(property){ this.barColor = property; };

TabGroup.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

TabGroup.prototype.setCenter = function(property){ this.center = property; };

TabGroup.prototype.setClipMode = function(property){ this.clipMode = property; };

TabGroup.prototype.setEditButtonTitle = function(property){ this.editButtonTitle = property; };

TabGroup.prototype.setExitOnClose = function(property){ this.exitOnClose = property; };

TabGroup.prototype.setKeepScreenOn = function(property){ this.keepScreenOn = property; };

TabGroup.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

TabGroup.prototype.setNavBarHidden = function(property){ this.navBarHidden = property; };

TabGroup.prototype.setNavTintColor = function(property){ this.navTintColor = property; };

TabGroup.prototype.setPullBackgroundColor = function(property){ this.pullBackgroundColor = property; };

TabGroup.prototype.setShadowImage = function(property){ this.shadowImage = property; };

TabGroup.prototype.setSmoothScrollOnTabClick = function(property){ this.smoothScrollOnTabClick = property; };

TabGroup.prototype.setSwipeable = function(property){ this.swipeable = property; };

TabGroup.prototype.setTabDividerColor = function(property){ this.tabDividerColor = property; };

TabGroup.prototype.setTabDividerWidth = function(property){ this.tabDividerWidth = property; };

TabGroup.prototype.setTabHeight = function(property){ this.tabHeight = property; };

TabGroup.prototype.setTabs = function(property){ this.tabs = property; };

TabGroup.prototype.setTabsAtBottom = function(property){ this.tabsAtBottom = property; };

TabGroup.prototype.setTabsBackgroundColor = function(property){ this.tabsBackgroundColor = property; };

TabGroup.prototype.setTabsBackgroundDisabledColor = function(property){ this.tabsBackgroundDisabledColor = property; };

TabGroup.prototype.setTabsBackgroundDisabledImage = function(property){ this.tabsBackgroundDisabledImage = property; };

TabGroup.prototype.setTabsBackgroundFocusedColor = function(property){ this.tabsBackgroundFocusedColor = property; };

TabGroup.prototype.setTabsBackgroundFocusedImage = function(property){ this.tabsBackgroundFocusedImage = property; };

TabGroup.prototype.setTabsBackgroundImage = function(property){ this.tabsBackgroundImage = property; };

TabGroup.prototype.setTabsBackgroundSelectedColor = function(property){ this.tabsBackgroundSelectedColor = property; };

TabGroup.prototype.setTabsBackgroundSelectedImage = function(property){ this.tabsBackgroundSelectedImage = property; };

TabGroup.prototype.setTabsTintColor = function(property){ this.tabsTintColor = property; };

TabGroup.prototype.setTintColor = function(property){ this.tintColor = property; };

TabGroup.prototype.setTitle = function(property){ this.title = property; };

TabGroup.prototype.setTitleAttributes = function(property){ this.titleAttributes = property; };

TabGroup.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

TabGroup.prototype.setTranslucent = function(property){ this.translucent = property; };

TabGroup.prototype.setViewShadowColor = function(property){ this.viewShadowColor = property; };

TabGroup.prototype.setViewShadowOffset = function(property){ this.viewShadowOffset = property; };

TabGroup.prototype.setViewShadowRadius = function(property){ this.viewShadowRadius = property; };

TabGroup.prototype.setVisible = function(property){ this.visible = property; };

TabGroup.prototype.show = function(){};

TabGroup.prototype.startLayout = function(){};

TabGroup.prototype.toImage = function(){ return {}; };

TabGroup.prototype.updateLayout = function(){};

module.exports = function(properties){ return new TabGroup(properties); };