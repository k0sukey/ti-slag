function Window(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.activity = properties.activity || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.Window';
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
	if (properties.enabled) {
		throw new Error('Ti.UI.Window.enabled was deprecated, since 3.3.0');
	}
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
	if (properties.url) {
		throw new Error('Ti.UI.Window.url was deprecated, since 3.5.0');
	}
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
	throw new Error('Ti.UI.Window.finishLayout was deprecated, since 3.0.0');
};
Window.prototype.fireEvent = function () {
};
Window.prototype.getAccessibilityHidden = function () {
	return true;
};
Window.prototype.getAccessibilityHint = function () {
	return '';
};
Window.prototype.getAccessibilityLabel = function () {
	return '';
};
Window.prototype.getAccessibilityValue = function () {
	return '';
};
Window.prototype.getActivity = function () {
	return {};
};
Window.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
Window.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Window.prototype.getApiName = function () {
	return '';
};
Window.prototype.getAutoAdjustScrollViewInsets = function () {
	return true;
};
Window.prototype.getBackButtonTitle = function () {
	return '';
};
Window.prototype.getBackButtonTitleImage = function () {
	return '';
};
Window.prototype.getBackgroundColor = function () {
	return '';
};
Window.prototype.getBackgroundDisabledColor = function () {
	return '';
};
Window.prototype.getBackgroundDisabledImage = function () {
	return '';
};
Window.prototype.getBackgroundFocusedColor = function () {
	return '';
};
Window.prototype.getBackgroundFocusedImage = function () {
	return '';
};
Window.prototype.getBackgroundGradient = function () {
	return {};
};
Window.prototype.getBackgroundImage = function () {
	return '';
};
Window.prototype.getBackgroundLeftCap = function () {
	return 0;
};
Window.prototype.getBackgroundRepeat = function () {
	return true;
};
Window.prototype.getBackgroundSelectedColor = function () {
	return '';
};
Window.prototype.getBackgroundSelectedImage = function () {
	return '';
};
Window.prototype.getBackgroundTopCap = function () {
	return 0;
};
Window.prototype.getBarColor = function () {
	return '';
};
Window.prototype.getBarImage = function () {
	return '';
};
Window.prototype.getBorderColor = function () {
	return '';
};
Window.prototype.getBorderRadius = function () {
	return 0;
};
Window.prototype.getBorderWidth = function () {
	return 0;
};
Window.prototype.getBottom = function () {
	return 0;
};
Window.prototype.getBubbleParent = function () {
	return true;
};
Window.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Window.prototype.getChildren = function () {
	return [];
};
Window.prototype.getClipMode = function () {
	return 0;
};
Window.prototype.getEnabled = function () {
	throw new Error('Ti.UI.Window.getEnabled was deprecated, since 3.3.0');
};
Window.prototype.getExitOnClose = function () {
	return true;
};
Window.prototype.getExtendEdges = function () {
	return 0;
};
Window.prototype.getFlagSecure = function () {
	return true;
};
Window.prototype.getFocusable = function () {
	return true;
};
Window.prototype.getFullscreen = function () {
	return true;
};
Window.prototype.getHeight = function () {
	return 0;
};
Window.prototype.getHideShadow = function () {
	return true;
};
Window.prototype.getHorizontalWrap = function () {
	return true;
};
Window.prototype.getIncludeOpaqueBars = function () {
	return true;
};
Window.prototype.getKeepScreenOn = function () {
	return true;
};
Window.prototype.getLayout = function () {
	return '';
};
Window.prototype.getLeft = function () {
	return 0;
};
Window.prototype.getLeftNavButton = function () {
	return {};
};
Window.prototype.getLeftNavButtons = function () {
	return [];
};
Window.prototype.getModal = function () {
	return true;
};
Window.prototype.getNavBarHidden = function () {
	return true;
};
Window.prototype.getNavTintColor = function () {
	return '';
};
Window.prototype.getOpacity = function () {
	return 0;
};
Window.prototype.getOrientation = function () {
	return 0;
};
Window.prototype.getOrientationModes = function () {
	return 0;
};
Window.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
Window.prototype.getPullBackgroundColor = function () {
	return '';
};
Window.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
Window.prototype.getRight = function () {
	return 0;
};
Window.prototype.getRightNavButton = function () {
	return {};
};
Window.prototype.getRightNavButtons = function () {
	return [];
};
Window.prototype.getShadowImage = function () {
	return '';
};
Window.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
Window.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
Window.prototype.getStatusBarStyle = function () {
	return 0;
};
Window.prototype.getTabBarHidden = function () {
	return true;
};
Window.prototype.getTheme = function () {
	return '';
};
Window.prototype.getTintColor = function () {
	return '';
};
Window.prototype.getTitle = function () {
	return '';
};
Window.prototype.getTitleAttributes = function () {
	return {};
};
Window.prototype.getTitleControl = function () {
	return {};
};
Window.prototype.getTitleImage = function () {
	return '';
};
Window.prototype.getTitlePrompt = function () {
	return '';
};
Window.prototype.getTitleid = function () {
	return '';
};
Window.prototype.getTitlepromptid = function () {
	return '';
};
Window.prototype.getToolbar = function () {
	return [];
};
Window.prototype.getTop = function () {
	return 0;
};
Window.prototype.getTouchEnabled = function () {
	return true;
};
Window.prototype.getTransform = function () {
	return {};
};
Window.prototype.getTransitionAnimation = function () {
	return {};
};
Window.prototype.getTranslucent = function () {
	return true;
};
Window.prototype.getUrl = function () {
	throw new Error('Ti.UI.Window.getUrl was deprecated, since 3.5.0');
};
Window.prototype.getViewShadowColor = function () {
	return '';
};
Window.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
Window.prototype.getViewShadowRadius = function () {
	return 0;
};
Window.prototype.getVisible = function () {
	return true;
};
Window.prototype.getWidth = function () {
	return 0;
};
Window.prototype.getWindowFlags = function () {
	return 0;
};
Window.prototype.getWindowPixelFormat = function () {
	return 0;
};
Window.prototype.getWindowSoftInputMode = function () {
	return 0;
};
Window.prototype.getZIndex = function () {
	return 0;
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
Window.prototype.setAccessibilityHidden = function () {
};
Window.prototype.setAccessibilityHint = function () {
};
Window.prototype.setAccessibilityLabel = function () {
};
Window.prototype.setAccessibilityValue = function () {
};
Window.prototype.setAnchorPoint = function () {
};
Window.prototype.setAutoAdjustScrollViewInsets = function () {
};
Window.prototype.setBackButtonTitle = function () {
};
Window.prototype.setBackButtonTitleImage = function () {
};
Window.prototype.setBackgroundColor = function () {
};
Window.prototype.setBackgroundDisabledColor = function () {
};
Window.prototype.setBackgroundDisabledImage = function () {
};
Window.prototype.setBackgroundFocusedColor = function () {
};
Window.prototype.setBackgroundFocusedImage = function () {
};
Window.prototype.setBackgroundGradient = function () {
};
Window.prototype.setBackgroundImage = function () {
};
Window.prototype.setBackgroundLeftCap = function () {
};
Window.prototype.setBackgroundRepeat = function () {
};
Window.prototype.setBackgroundSelectedColor = function () {
};
Window.prototype.setBackgroundSelectedImage = function () {
};
Window.prototype.setBackgroundTopCap = function () {
};
Window.prototype.setBarColor = function () {
};
Window.prototype.setBarImage = function () {
};
Window.prototype.setBorderColor = function () {
};
Window.prototype.setBorderRadius = function () {
};
Window.prototype.setBorderWidth = function () {
};
Window.prototype.setBottom = function () {
};
Window.prototype.setBubbleParent = function () {
};
Window.prototype.setCenter = function () {
};
Window.prototype.setClipMode = function () {
};
Window.prototype.setEnabled = function () {
	throw new Error('Ti.UI.Window.setEnabled was deprecated, since 3.3.0');
};
Window.prototype.setExitOnClose = function () {
};
Window.prototype.setExtendEdges = function () {
};
Window.prototype.setFocusable = function () {
};
Window.prototype.setFullscreen = function () {
};
Window.prototype.setHeight = function () {
};
Window.prototype.setHideShadow = function () {
};
Window.prototype.setHorizontalWrap = function () {
};
Window.prototype.setIncludeOpaqueBars = function () {
};
Window.prototype.setKeepScreenOn = function () {
};
Window.prototype.setLayout = function () {
};
Window.prototype.setLeft = function () {
};
Window.prototype.setLeftNavButton = function () {
};
Window.prototype.setLeftNavButtons = function () {
};
Window.prototype.setModal = function () {
};
Window.prototype.setNavBarHidden = function () {
};
Window.prototype.setNavTintColor = function () {
};
Window.prototype.setOpacity = function () {
};
Window.prototype.setOrientationModes = function () {
};
Window.prototype.setPullBackgroundColor = function () {
};
Window.prototype.setRight = function () {
};
Window.prototype.setRightNavButton = function () {
};
Window.prototype.setRightNavButtons = function () {
};
Window.prototype.setShadowImage = function () {
};
Window.prototype.setSoftKeyboardOnFocus = function () {
};
Window.prototype.setStatusBarStyle = function () {
};
Window.prototype.setTabBarHidden = function () {
};
Window.prototype.setTintColor = function () {
};
Window.prototype.setTitle = function () {
};
Window.prototype.setTitleAttributes = function () {
};
Window.prototype.setTitleControl = function () {
};
Window.prototype.setTitleImage = function () {
};
Window.prototype.setTitlePrompt = function () {
};
Window.prototype.setTitleid = function () {
};
Window.prototype.setTitlepromptid = function () {
};
Window.prototype.setToolbar = function () {
};
Window.prototype.setTop = function () {
};
Window.prototype.setTouchEnabled = function () {
};
Window.prototype.setTransform = function () {
};
Window.prototype.setTransitionAnimation = function () {
};
Window.prototype.setTranslucent = function () {
};
Window.prototype.setViewShadowColor = function () {
};
Window.prototype.setViewShadowOffset = function () {
};
Window.prototype.setViewShadowRadius = function () {
};
Window.prototype.setVisible = function () {
};
Window.prototype.setWidth = function () {
};
Window.prototype.setWindowPixelFormat = function () {
};
Window.prototype.setZIndex = function () {
};
Window.prototype.show = function () {
};
Window.prototype.showNavBar = function () {
};
Window.prototype.startLayout = function () {
	throw new Error('Ti.UI.Window.startLayout was deprecated, since 3.0.0');
};
Window.prototype.toImage = function () {
	return {};
};
Window.prototype.updateLayout = function () {
	throw new Error('Ti.UI.Window.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new Window(properties);
};