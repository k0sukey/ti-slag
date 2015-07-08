function Window(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || true;
	this.accessibilityHint = properties.accessibilityHint || '';
	this.accessibilityLabel = properties.accessibilityLabel || '';
	this.accessibilityValue = properties.accessibilityValue || '';
	this.activity = properties.activity || {};
	this.anchorPoint = properties.anchorPoint || {
		x: 0,
		y: 0
	};
	this.animatedCenter = properties.animatedCenter || {
		x: 0,
		y: 0
	};
	this.apiName = 'Ti.UI.Window';
	this.autoAdjustScrollViewInsets = properties.autoAdjustScrollViewInsets || true;
	this.backButtonTitle = properties.backButtonTitle || '';
	this.backButtonTitleImage = properties.backButtonTitleImage || '';
	this.backgroundColor = properties.backgroundColor || '';
	this.backgroundDisabledColor = properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = properties.backgroundFocusedImage || '';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundLeftCap = properties.backgroundLeftCap || 0;
	this.backgroundRepeat = properties.backgroundRepeat || true;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = properties.backgroundSelectedImage || '';
	this.backgroundTopCap = properties.backgroundTopCap || 0;
	this.barColor = properties.barColor || '';
	this.barImage = properties.barImage || '';
	this.borderColor = properties.borderColor || '';
	this.borderRadius = properties.borderRadius || 0;
	this.borderWidth = properties.borderWidth || 0;
	this.bottom = properties.bottom || 0;
	this.bubbleParent = properties.bubbleParent || true;
	this.center = properties.center || {
		x: 0,
		y: 0
	};
	this.children = properties.children || [];
	this.clipMode = properties.clipMode || 0;
	if (properties.enabled) {
		throw new Error('Ti.UI.Window.enabled was deprecated, since 3.3.0');
	}
	this.exitOnClose = properties.exitOnClose || true;
	this.extendEdges = properties.extendEdges || 0;
	this.flagSecure = properties.flagSecure || true;
	this.focusable = properties.focusable || true;
	this.fullscreen = properties.fullscreen || true;
	this.height = properties.height || 0;
	this.hideShadow = properties.hideShadow || true;
	this.horizontalWrap = properties.horizontalWrap || true;
	this.includeOpaqueBars = properties.includeOpaqueBars || true;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.leftNavButton = properties.leftNavButton || {};
	this.leftNavButtons = properties.leftNavButtons || [];
	this.modal = properties.modal || true;
	this.navBarHidden = properties.navBarHidden || true;
	this.navTintColor = properties.navTintColor || '';
	this.opacity = properties.opacity || 0;
	this.orientation = properties.orientation || 0;
	this.orientationModes = properties.orientationModes || 0;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = properties.right || 0;
	this.rightNavButton = properties.rightNavButton || {};
	this.rightNavButtons = properties.rightNavButtons || [];
	this.shadowImage = properties.shadowImage || '';
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.statusBarStyle = properties.statusBarStyle || 0;
	this.tabBarHidden = properties.tabBarHidden || true;
	this.theme = properties.theme || '';
	this.tintColor = properties.tintColor || '';
	this.title = properties.title || '';
	this.titleAttributes = properties.titleAttributes || {};
	this.titleControl = properties.titleControl || {};
	this.titleImage = properties.titleImage || '';
	this.titlePrompt = properties.titlePrompt || '';
	this.titleid = properties.titleid || '';
	this.titlepromptid = properties.titlepromptid || '';
	this.toolbar = properties.toolbar || [];
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.transform = properties.transform || {};
	this.transitionAnimation = properties.transitionAnimation || {};
	this.translucent = properties.translucent || true;
	if (properties.url) {
		throw new Error('Ti.UI.Window.url was deprecated, since 3.5.0');
	}
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.windowFlags = properties.windowFlags || 0;
	this.windowPixelFormat = properties.windowPixelFormat || 0;
	this.windowSoftInputMode = properties.windowSoftInputMode || 0;
	this.zIndex = properties.zIndex || 0;
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