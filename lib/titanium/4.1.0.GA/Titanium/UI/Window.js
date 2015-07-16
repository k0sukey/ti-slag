function Window(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.Window';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.accessibilityHidden = properties.accessibilityHidden || true;
	this.accessibilityHint = properties.accessibilityHint || '';
	this.accessibilityLabel = properties.accessibilityLabel || '';
	this.accessibilityValue = properties.accessibilityValue || '';
	this.anchorPoint = properties.anchorPoint || {
		x: 0,
		y: 0
	};
	this.animatedCenter = properties.animatedCenter || {
		x: 0,
		y: 0
	};
	this.backgroundDisabledColor = properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = properties.backgroundFocusedImage || '';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundRepeat = properties.backgroundRepeat || true;
	this.backgroundLeftCap = properties.backgroundLeftCap || 0;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = properties.backgroundSelectedImage || '';
	this.backgroundTopCap = properties.backgroundTopCap || 0;
	this.clipMode = properties.clipMode || 0;
	this.focusable = properties.focusable || true;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.transform = properties.transform || {};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.horizontalWrap = properties.horizontalWrap || true;
	this.zIndex = properties.zIndex || 0;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.backgroundColor = properties.backgroundColor || '';
	this.borderColor = properties.borderColor || '';
	this.borderRadius = properties.borderRadius || 0;
	this.borderWidth = properties.borderWidth || 0;
	this.bottom = properties.bottom || 0;
	this.center = properties.center || {
		x: 0,
		y: 0
	};
	this.children = properties.children || [];
	this.height = properties.height || 0;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.opacity = properties.opacity || 0;
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = properties.right || 0;
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.tintColor = properties.tintColor || '';
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.activity = properties.activity || {};
	this.backButtonTitle = properties.backButtonTitle || '';
	this.backButtonTitleImage = properties.backButtonTitleImage || '';
	this.barImage = properties.barImage || '';
	this.flagSecure = properties.flagSecure || true;
	this.includeOpaqueBars = properties.includeOpaqueBars || true;
	this.autoAdjustScrollViewInsets = properties.autoAdjustScrollViewInsets || true;
	this.leftNavButton = properties.leftNavButton || {};
	this.leftNavButtons = properties.leftNavButtons || [];
	this.orientation = properties.orientation || 0;
	this.rightNavButton = properties.rightNavButton || {};
	this.rightNavButtons = properties.rightNavButtons || [];
	this.shadowImage = properties.shadowImage || '';
	this.splitActionBar = properties.splitActionBar || true;
	this.statusBarStyle = properties.statusBarStyle || 0;
	this.tabBarHidden = properties.tabBarHidden || true;
	this.title = properties.title || '';
	this.titleControl = properties.titleControl || {};
	this.titleImage = properties.titleImage || '';
	this.titlePrompt = properties.titlePrompt || '';
	this.titleid = properties.titleid || '';
	this.titlepromptid = properties.titlepromptid || '';
	this.toolbar = properties.toolbar || [];
	this.transitionAnimation = properties.transitionAnimation || {};
	if (properties.url) {
		throw new Error('Ti.UI.Window.url was deprecated, since 3.5.0');
	}
	this.windowFlags = properties.windowFlags || 0;
	this.windowSoftInputMode = properties.windowSoftInputMode || 0;
	this.windowPixelFormat = properties.windowPixelFormat || 0;
	this.barColor = properties.barColor || '';
	this.exitOnClose = properties.exitOnClose || true;
	this.extendEdges = properties.extendEdges || 0;
	this.fullscreen = properties.fullscreen || true;
	this.hideShadow = properties.hideShadow || true;
	this.modal = properties.modal || true;
	this.navBarHidden = properties.navBarHidden || true;
	this.navTintColor = properties.navTintColor || '';
	this.orientationModes = properties.orientationModes || 0;
	this.theme = properties.theme || '';
	this.titleAttributes = properties.titleAttributes || {};
	this.translucent = properties.translucent || true;
	return this;
}
Window.prototype.addEventListener = function () {
};
Window.prototype.removeEventListener = function () {
};
Window.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Window.prototype.fireEvent = function () {
};
Window.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Window.finishLayout was deprecated, since 3.0.0');
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
Window.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Window.prototype.add = function () {
};
Window.prototype.animate = function () {
};
Window.prototype.hide = function () {
};
Window.prototype.remove = function () {
};
Window.prototype.show = function () {
};
Window.prototype.hideNavBar = function () {
};
Window.prototype.hideTabBar = function () {
};
Window.prototype.setToolbar = function () {
};
Window.prototype.showNavBar = function () {
};
Window.prototype.close = function () {
};
Window.prototype.open = function () {
};
Window.prototype.getBubbleParent = function () {
	return true;
};
Window.prototype.setBubbleParent = function () {
};
Window.prototype.getApiName = function () {
	return '';
};
Window.prototype.getLifecycleContainer = function () {
	return {};
};
Window.prototype.setLifecycleContainer = function () {
};
Window.prototype.getAccessibilityHidden = function () {
	return true;
};
Window.prototype.setAccessibilityHidden = function () {
};
Window.prototype.getAccessibilityHint = function () {
	return '';
};
Window.prototype.setAccessibilityHint = function () {
};
Window.prototype.getAccessibilityLabel = function () {
	return '';
};
Window.prototype.setAccessibilityLabel = function () {
};
Window.prototype.getAccessibilityValue = function () {
	return '';
};
Window.prototype.setAccessibilityValue = function () {
};
Window.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
Window.prototype.setAnchorPoint = function () {
};
Window.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Window.prototype.getBackgroundDisabledColor = function () {
	return '';
};
Window.prototype.setBackgroundDisabledColor = function () {
};
Window.prototype.getBackgroundDisabledImage = function () {
	return '';
};
Window.prototype.setBackgroundDisabledImage = function () {
};
Window.prototype.getBackgroundFocusedColor = function () {
	return '';
};
Window.prototype.setBackgroundFocusedColor = function () {
};
Window.prototype.getBackgroundFocusedImage = function () {
	return '';
};
Window.prototype.setBackgroundFocusedImage = function () {
};
Window.prototype.getBackgroundGradient = function () {
	return {};
};
Window.prototype.setBackgroundGradient = function () {
};
Window.prototype.getBackgroundImage = function () {
	return '';
};
Window.prototype.setBackgroundImage = function () {
};
Window.prototype.getBackgroundRepeat = function () {
	return true;
};
Window.prototype.setBackgroundRepeat = function () {
};
Window.prototype.getBackgroundLeftCap = function () {
	return 0;
};
Window.prototype.setBackgroundLeftCap = function () {
};
Window.prototype.getBackgroundSelectedColor = function () {
	return '';
};
Window.prototype.setBackgroundSelectedColor = function () {
};
Window.prototype.getBackgroundSelectedImage = function () {
	return '';
};
Window.prototype.setBackgroundSelectedImage = function () {
};
Window.prototype.getBackgroundTopCap = function () {
	return 0;
};
Window.prototype.setBackgroundTopCap = function () {
};
Window.prototype.getClipMode = function () {
	return 0;
};
Window.prototype.setClipMode = function () {
};
Window.prototype.getFocusable = function () {
	return true;
};
Window.prototype.setFocusable = function () {
};
Window.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
Window.prototype.setOverrideCurrentAnimation = function () {
};
Window.prototype.getPullBackgroundColor = function () {
	return '';
};
Window.prototype.setPullBackgroundColor = function () {
};
Window.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
Window.prototype.setSoftKeyboardOnFocus = function () {
};
Window.prototype.getTransform = function () {
	return {};
};
Window.prototype.setTransform = function () {
};
Window.prototype.getViewShadowRadius = function () {
	return 0;
};
Window.prototype.setViewShadowRadius = function () {
};
Window.prototype.getViewShadowColor = function () {
	return '';
};
Window.prototype.setViewShadowColor = function () {
};
Window.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
Window.prototype.setViewShadowOffset = function () {
};
Window.prototype.getHorizontalWrap = function () {
	return true;
};
Window.prototype.setHorizontalWrap = function () {
};
Window.prototype.getZIndex = function () {
	return 0;
};
Window.prototype.setZIndex = function () {
};
Window.prototype.getKeepScreenOn = function () {
	return true;
};
Window.prototype.setKeepScreenOn = function () {
};
Window.prototype.getBackgroundColor = function () {
	return '';
};
Window.prototype.setBackgroundColor = function () {
};
Window.prototype.getBorderColor = function () {
	return '';
};
Window.prototype.setBorderColor = function () {
};
Window.prototype.getBorderRadius = function () {
	return 0;
};
Window.prototype.setBorderRadius = function () {
};
Window.prototype.getBorderWidth = function () {
	return 0;
};
Window.prototype.setBorderWidth = function () {
};
Window.prototype.getBottom = function () {
	return '';
};
Window.prototype.setBottom = function () {
};
Window.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Window.prototype.setCenter = function () {
};
Window.prototype.getChildren = function () {
	return [];
};
Window.prototype.getHeight = function () {
	return '';
};
Window.prototype.setHeight = function () {
};
Window.prototype.getLayout = function () {
	return '';
};
Window.prototype.setLayout = function () {
};
Window.prototype.getLeft = function () {
	return '';
};
Window.prototype.setLeft = function () {
};
Window.prototype.getOpacity = function () {
	return 0;
};
Window.prototype.setOpacity = function () {
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
	return '';
};
Window.prototype.setRight = function () {
};
Window.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
Window.prototype.getTintColor = function () {
	return '';
};
Window.prototype.setTintColor = function () {
};
Window.prototype.getTop = function () {
	return '';
};
Window.prototype.setTop = function () {
};
Window.prototype.getTouchEnabled = function () {
	return true;
};
Window.prototype.setTouchEnabled = function () {
};
Window.prototype.getVisible = function () {
	return true;
};
Window.prototype.setVisible = function () {
};
Window.prototype.getWidth = function () {
	return '';
};
Window.prototype.setWidth = function () {
};
Window.prototype.getActivity = function () {
	return {};
};
Window.prototype.getBackButtonTitle = function () {
	return '';
};
Window.prototype.setBackButtonTitle = function () {
};
Window.prototype.getBackButtonTitleImage = function () {
	return '';
};
Window.prototype.setBackButtonTitleImage = function () {
};
Window.prototype.getBarImage = function () {
	return '';
};
Window.prototype.setBarImage = function () {
};
Window.prototype.getFlagSecure = function () {
	return true;
};
Window.prototype.setFlagSecure = function () {
};
Window.prototype.getIncludeOpaqueBars = function () {
	return true;
};
Window.prototype.setIncludeOpaqueBars = function () {
};
Window.prototype.getAutoAdjustScrollViewInsets = function () {
	return true;
};
Window.prototype.setAutoAdjustScrollViewInsets = function () {
};
Window.prototype.getLeftNavButton = function () {
	return {};
};
Window.prototype.setLeftNavButton = function () {
};
Window.prototype.getLeftNavButtons = function () {
	return [];
};
Window.prototype.setLeftNavButtons = function () {
};
Window.prototype.getOrientation = function () {
	return 0;
};
Window.prototype.getRightNavButton = function () {
	return {};
};
Window.prototype.setRightNavButton = function () {
};
Window.prototype.getRightNavButtons = function () {
	return [];
};
Window.prototype.setRightNavButtons = function () {
};
Window.prototype.getShadowImage = function () {
	return '';
};
Window.prototype.setShadowImage = function () {
};
Window.prototype.getSplitActionBar = function () {
	return true;
};
Window.prototype.setSplitActionBar = function () {
};
Window.prototype.getStatusBarStyle = function () {
	return 0;
};
Window.prototype.setStatusBarStyle = function () {
};
Window.prototype.getTabBarHidden = function () {
	return true;
};
Window.prototype.setTabBarHidden = function () {
};
Window.prototype.getTitle = function () {
	return '';
};
Window.prototype.setTitle = function () {
};
Window.prototype.getTitleControl = function () {
	return {};
};
Window.prototype.setTitleControl = function () {
};
Window.prototype.getTitleImage = function () {
	return '';
};
Window.prototype.setTitleImage = function () {
};
Window.prototype.getTitlePrompt = function () {
	return '';
};
Window.prototype.setTitlePrompt = function () {
};
Window.prototype.getTitleid = function () {
	return '';
};
Window.prototype.setTitleid = function () {
};
Window.prototype.getTitlepromptid = function () {
	return '';
};
Window.prototype.setTitlepromptid = function () {
};
Window.prototype.getToolbar = function () {
	return [];
};
Window.prototype.setToolbar = function () {
};
Window.prototype.getTransitionAnimation = function () {
	return {};
};
Window.prototype.setTransitionAnimation = function () {
};
Window.prototype.getUrl = function () {
	throw new Error('Ti.UI.Window.getUrl was deprecated, since 3.5.0');
};
Window.prototype.setUrl = function () {
	throw new Error('Ti.UI.Window.setUrl was deprecated, since 3.5.0');
};
Window.prototype.getWindowFlags = function () {
	return 0;
};
Window.prototype.setWindowFlags = function () {
};
Window.prototype.getWindowSoftInputMode = function () {
	return 0;
};
Window.prototype.setWindowSoftInputMode = function () {
};
Window.prototype.getWindowPixelFormat = function () {
	return 0;
};
Window.prototype.setWindowPixelFormat = function () {
};
Window.prototype.getBarColor = function () {
	return '';
};
Window.prototype.setBarColor = function () {
};
Window.prototype.getExitOnClose = function () {
	return true;
};
Window.prototype.setExitOnClose = function () {
};
Window.prototype.getExtendEdges = function () {
	return 0;
};
Window.prototype.setExtendEdges = function () {
};
Window.prototype.getFullscreen = function () {
	return true;
};
Window.prototype.setFullscreen = function () {
};
Window.prototype.getHideShadow = function () {
	return true;
};
Window.prototype.setHideShadow = function () {
};
Window.prototype.getModal = function () {
	return true;
};
Window.prototype.setModal = function () {
};
Window.prototype.getNavBarHidden = function () {
	return true;
};
Window.prototype.setNavBarHidden = function () {
};
Window.prototype.getNavTintColor = function () {
	return '';
};
Window.prototype.setNavTintColor = function () {
};
Window.prototype.getOrientationModes = function () {
	return 0;
};
Window.prototype.setOrientationModes = function () {
};
Window.prototype.getTheme = function () {
	return '';
};
Window.prototype.setTheme = function () {
};
Window.prototype.getTitleAttributes = function () {
	return {};
};
Window.prototype.setTitleAttributes = function () {
};
Window.prototype.getTranslucent = function () {
	return true;
};
Window.prototype.setTranslucent = function () {
};
module.exports = function (properties) {
	return new Window(properties);
};