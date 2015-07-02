function Window(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.activity = properties.activity || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.Window';
	this.autoAdjustScrollViewInsets = properties.autoAdjustScrollViewInsets || undefined;
	this.backButtonTitle = properties.backButtonTitle || undefined;
	this.backButtonTitleImage = properties.backButtonTitleImage || undefined;
	this.backgroundColor = properties.backgroundColor || undefined;
	this.backgroundDisabledColor = properties.backgroundDisabledColor || undefined;
	this.backgroundDisabledImage = properties.backgroundDisabledImage || undefined;
	this.backgroundFocusedColor = properties.backgroundFocusedColor || undefined;
	this.backgroundFocusedImage = properties.backgroundFocusedImage || undefined;
	this.backgroundGradient = properties.backgroundGradient || undefined;
	this.backgroundImage = properties.backgroundImage || undefined;
	this.backgroundLeftCap = properties.backgroundLeftCap || undefined;
	this.backgroundRepeat = properties.backgroundRepeat || undefined;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || undefined;
	this.backgroundSelectedImage = properties.backgroundSelectedImage || undefined;
	this.backgroundTopCap = properties.backgroundTopCap || undefined;
	this.barColor = properties.barColor || undefined;
	this.barImage = properties.barImage || undefined;
	this.borderColor = properties.borderColor || undefined;
	this.borderRadius = properties.borderRadius || undefined;
	this.borderWidth = properties.borderWidth || undefined;
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.exitOnClose = properties.exitOnClose || undefined;
	this.extendEdges = properties.extendEdges || undefined;
	this.flagSecure = properties.flagSecure || undefined;
	this.focusable = properties.focusable || undefined;
	this.fullscreen = properties.fullscreen || undefined;
	this.height = properties.height || undefined;
	this.hideShadow = properties.hideShadow || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.includeOpaqueBars = properties.includeOpaqueBars || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.leftNavButton = properties.leftNavButton || undefined;
	this.leftNavButtons = properties.leftNavButtons || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.modal = properties.modal || undefined;
	this.navBarHidden = properties.navBarHidden || undefined;
	this.navTintColor = properties.navTintColor || undefined;
	this.opacity = properties.opacity || undefined;
	this.orientation = properties.orientation || undefined;
	this.orientationModes = properties.orientationModes || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.rightNavButton = properties.rightNavButton || undefined;
	this.rightNavButtons = properties.rightNavButtons || undefined;
	this.shadowImage = properties.shadowImage || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.splitActionBar = properties.splitActionBar || undefined;
	this.statusBarStyle = properties.statusBarStyle || undefined;
	this.tabBarHidden = properties.tabBarHidden || undefined;
	this.theme = properties.theme || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.title = properties.title || undefined;
	this.titleAttributes = properties.titleAttributes || undefined;
	this.titleControl = properties.titleControl || undefined;
	this.titleImage = properties.titleImage || undefined;
	this.titlePrompt = properties.titlePrompt || undefined;
	this.titleid = properties.titleid || undefined;
	this.titlepromptid = properties.titlepromptid || undefined;
	this.toolbar = properties.toolbar || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.transitionAnimation = properties.transitionAnimation || undefined;
	this.translucent = properties.translucent || undefined;
	this.url = properties.url || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.windowFlags = properties.windowFlags || undefined;
	this.windowPixelFormat = properties.windowPixelFormat || undefined;
	this.windowSoftInputMode = properties.windowSoftInputMode || undefined;
	this.zIndex = properties.zIndex || undefined;
	return this;
}
Window.prototype.add = function () {
};
Window.prototype.addEventListener = function () {
};
Window.prototype.animate = function () {
};
Window.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Window.prototype.close = function () {
};
Window.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Window.prototype.finishLayout = function () {
};
Window.prototype.fireEvent = function () {
};
Window.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
Window.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
Window.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
Window.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
Window.prototype.getActivity = function () {
	return this.activity;
};
Window.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
Window.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
Window.prototype.getApiName = function () {
	return this.apiName;
};
Window.prototype.getAutoAdjustScrollViewInsets = function (property) {
	this.autoAdjustScrollViewInsets = property;
};
Window.prototype.getBackButtonTitle = function () {
	return this.backButtonTitle;
};
Window.prototype.getBackButtonTitleImage = function () {
	return this.backButtonTitleImage;
};
Window.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
Window.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
Window.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
Window.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
Window.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
Window.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
Window.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
Window.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
Window.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
Window.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
Window.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
Window.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
Window.prototype.getBarColor = function () {
	return this.barColor;
};
Window.prototype.getBarImage = function () {
	return this.barImage;
};
Window.prototype.getBorderColor = function () {
	return this.borderColor;
};
Window.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
Window.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
Window.prototype.getBottom = function () {
	return this.bottom;
};
Window.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Window.prototype.getCenter = function () {
	return this.center;
};
Window.prototype.getChildren = function () {
	return this.children;
};
Window.prototype.getClipMode = function () {
	return this.clipMode;
};
Window.prototype.getExitOnClose = function () {
	return this.exitOnClose;
};
Window.prototype.getExtendEdges = function () {
	return this.extendEdges;
};
Window.prototype.getFlagSecure = function () {
	return this.flagSecure;
};
Window.prototype.getFocusable = function () {
	return this.focusable;
};
Window.prototype.getFullscreen = function () {
	return this.fullscreen;
};
Window.prototype.getHeight = function () {
	return this.height;
};
Window.prototype.getHideShadow = function () {
	return this.hideShadow;
};
Window.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
Window.prototype.getIncludeOpaqueBars = function () {
	return this.includeOpaqueBars;
};
Window.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
Window.prototype.getLayout = function () {
	return this.layout;
};
Window.prototype.getLeft = function () {
	return this.left;
};
Window.prototype.getLeftNavButton = function () {
	return this.leftNavButton;
};
Window.prototype.getLeftNavButtons = function () {
	return this.leftNavButtons;
};
Window.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Window.prototype.getModal = function () {
	return this.modal;
};
Window.prototype.getNavBarHidden = function () {
	return this.navBarHidden;
};
Window.prototype.getNavTintColor = function () {
	return this.navTintColor;
};
Window.prototype.getOpacity = function () {
	return this.opacity;
};
Window.prototype.getOrientation = function () {
	return this.orientation;
};
Window.prototype.getOrientationModes = function () {
	return this.orientationModes;
};
Window.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
Window.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
Window.prototype.getRect = function () {
	return this.rect;
};
Window.prototype.getRight = function () {
	return this.right;
};
Window.prototype.getRightNavButton = function () {
	return this.rightNavButton;
};
Window.prototype.getRightNavButtons = function () {
	return this.rightNavButtons;
};
Window.prototype.getShadowImage = function () {
	return this.shadowImage;
};
Window.prototype.getSize = function () {
	return this.size;
};
Window.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
Window.prototype.getSplitActionBar = function () {
	return this.splitActionBar;
};
Window.prototype.getStatusBarStyle = function () {
	return this.statusBarStyle;
};
Window.prototype.getTabBarHidden = function () {
	return this.tabBarHidden;
};
Window.prototype.getTheme = function () {
	return this.theme;
};
Window.prototype.getTintColor = function () {
	return this.tintColor;
};
Window.prototype.getTitle = function () {
	return this.title;
};
Window.prototype.getTitleAttributes = function () {
	return this.titleAttributes;
};
Window.prototype.getTitleControl = function () {
	return this.titleControl;
};
Window.prototype.getTitleImage = function () {
	return this.titleImage;
};
Window.prototype.getTitlePrompt = function () {
	return this.titlePrompt;
};
Window.prototype.getTitleid = function () {
	return this.titleid;
};
Window.prototype.getTitlepromptid = function () {
	return this.titlepromptid;
};
Window.prototype.getToolbar = function () {
	return this.toolbar;
};
Window.prototype.getTop = function () {
	return this.top;
};
Window.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
Window.prototype.getTransform = function () {
	return this.transform;
};
Window.prototype.getTransitionAnimation = function () {
	return this.transitionAnimation;
};
Window.prototype.getTranslucent = function () {
	return this.translucent;
};
Window.prototype.getUrl = function () {
	return this.url;
};
Window.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
Window.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
Window.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
Window.prototype.getVisible = function () {
	return this.visible;
};
Window.prototype.getWidth = function () {
	return this.width;
};
Window.prototype.getWindowFlags = function () {
	return this.windowFlags;
};
Window.prototype.getWindowPixelFormat = function () {
	return this.windowPixelFormat;
};
Window.prototype.getWindowSoftInputMode = function () {
	return this.windowSoftInputMode;
};
Window.prototype.getZIndex = function () {
	return this.zIndex;
};
Window.prototype.hide = function () {
};
Window.prototype.hideNavBar = function () {
};
Window.prototype.hideTabBar = function () {
};
Window.prototype.open = function () {
};
Window.prototype.remove = function () {
};
Window.prototype.removeEventListener = function () {
};
Window.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
Window.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
Window.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
Window.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
Window.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
Window.prototype.setAutoAdjustScrollViewInsets = function (property) {
	this.autoAdjustScrollViewInsets = property;
};
Window.prototype.setBackButtonTitle = function (property) {
	this.backButtonTitle = property;
};
Window.prototype.setBackButtonTitleImage = function (property) {
	this.backButtonTitleImage = property;
};
Window.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
Window.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
Window.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
Window.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
Window.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
Window.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
Window.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
Window.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
Window.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
Window.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
Window.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
Window.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
Window.prototype.setBarColor = function (property) {
	this.barColor = property;
};
Window.prototype.setBarImage = function (property) {
	this.barImage = property;
};
Window.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
Window.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
Window.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
Window.prototype.setBottom = function (property) {
	this.bottom = property;
};
Window.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Window.prototype.setCenter = function (property) {
	this.center = property;
};
Window.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
Window.prototype.setExitOnClose = function (property) {
	this.exitOnClose = property;
};
Window.prototype.setExtendEdges = function (property) {
	this.extendEdges = property;
};
Window.prototype.setFocusable = function (property) {
	this.focusable = property;
};
Window.prototype.setFullscreen = function (property) {
	this.fullscreen = property;
};
Window.prototype.setHeight = function (property) {
	this.height = property;
};
Window.prototype.setHideShadow = function (property) {
	this.hideShadow = property;
};
Window.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
Window.prototype.setIncludeOpaqueBars = function (property) {
	this.includeOpaqueBars = property;
};
Window.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
Window.prototype.setLayout = function (property) {
	this.layout = property;
};
Window.prototype.setLeft = function (property) {
	this.left = property;
};
Window.prototype.setLeftNavButton = function (property) {
	this.leftNavButton = property;
};
Window.prototype.setLeftNavButtons = function (property) {
	this.leftNavButtons = property;
};
Window.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Window.prototype.setModal = function (property) {
	this.modal = property;
};
Window.prototype.setNavBarHidden = function (property) {
	this.navBarHidden = property;
};
Window.prototype.setNavTintColor = function (property) {
	this.navTintColor = property;
};
Window.prototype.setOpacity = function (property) {
	this.opacity = property;
};
Window.prototype.setOrientationModes = function (property) {
	this.orientationModes = property;
};
Window.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
Window.prototype.setRight = function (property) {
	this.right = property;
};
Window.prototype.setRightNavButton = function (property) {
	this.rightNavButton = property;
};
Window.prototype.setRightNavButtons = function (property) {
	this.rightNavButtons = property;
};
Window.prototype.setShadowImage = function (property) {
	this.shadowImage = property;
};
Window.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
Window.prototype.setStatusBarStyle = function (property) {
	this.statusBarStyle = property;
};
Window.prototype.setTabBarHidden = function (property) {
	this.tabBarHidden = property;
};
Window.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
Window.prototype.setTitle = function (property) {
	this.title = property;
};
Window.prototype.setTitleAttributes = function (property) {
	this.titleAttributes = property;
};
Window.prototype.setTitleControl = function (property) {
	this.titleControl = property;
};
Window.prototype.setTitleImage = function (property) {
	this.titleImage = property;
};
Window.prototype.setTitlePrompt = function (property) {
	this.titlePrompt = property;
};
Window.prototype.setTitleid = function (property) {
	this.titleid = property;
};
Window.prototype.setTitlepromptid = function (property) {
	this.titlepromptid = property;
};
Window.prototype.setToolbar = function (property) {
	this.toolbar = property;
};
Window.prototype.setTop = function (property) {
	this.top = property;
};
Window.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
Window.prototype.setTransform = function (property) {
	this.transform = property;
};
Window.prototype.setTransitionAnimation = function (property) {
	this.transitionAnimation = property;
};
Window.prototype.setTranslucent = function (property) {
	this.translucent = property;
};
Window.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
Window.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
Window.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
Window.prototype.setVisible = function (property) {
	this.visible = property;
};
Window.prototype.setWidth = function (property) {
	this.width = property;
};
Window.prototype.setWindowPixelFormat = function (property) {
	this.windowPixelFormat = property;
};
Window.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
Window.prototype.show = function () {
};
Window.prototype.showNavBar = function () {
};
Window.prototype.startLayout = function () {
};
Window.prototype.toImage = function () {
	return {};
};
Window.prototype.updateLayout = function () {
};
module.exports = function (properties) {
	return new Window(properties);
};