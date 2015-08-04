var crypto = require('crypto');
function Window(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'anchorPoint',
			'animatedCenter',
			'backgroundDisabledColor',
			'backgroundDisabledImage',
			'backgroundFocusedColor',
			'backgroundFocusedImage',
			'backgroundGradient',
			'backgroundImage',
			'backgroundRepeat',
			'backgroundLeftCap',
			'backgroundSelectedColor',
			'backgroundSelectedImage',
			'backgroundTopCap',
			'clipMode',
			'focusable',
			'overrideCurrentAnimation',
			'pullBackgroundColor',
			'softKeyboardOnFocus',
			'transform',
			'viewShadowRadius',
			'viewShadowColor',
			'viewShadowOffset',
			'horizontalWrap',
			'zIndex',
			'keepScreenOn',
			'backgroundColor',
			'borderColor',
			'borderRadius',
			'borderWidth',
			'bottom',
			'center',
			'children',
			'height',
			'layout',
			'left',
			'opacity',
			'rect',
			'right',
			'size',
			'tintColor',
			'top',
			'touchEnabled',
			'visible',
			'width',
			'activity',
			'backButtonTitle',
			'backButtonTitleImage',
			'barImage',
			'flagSecure',
			'includeOpaqueBars',
			'autoAdjustScrollViewInsets',
			'leftNavButton',
			'leftNavButtons',
			'orientation',
			'rightNavButton',
			'rightNavButtons',
			'shadowImage',
			'splitActionBar',
			'statusBarStyle',
			'tabBarHidden',
			'title',
			'titleControl',
			'titleImage',
			'titlePrompt',
			'titleid',
			'titlepromptid',
			'toolbar',
			'transitionAnimation',
			'url',
			'windowFlags',
			'windowSoftInputMode',
			'windowPixelFormat',
			'barColor',
			'exitOnClose',
			'extendEdges',
			'fullscreen',
			'hideShadow',
			'modal',
			'navBarHidden',
			'navTintColor',
			'orientationModes',
			'theme',
			'titleAttributes',
			'translucent',
			'id'
		];

	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.Window.apiName is read only property');
	}
	this.apiName = 'Ti.UI.Window';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.accessibilityHidden = __SLAG__properties.accessibilityHidden || true;
	this.accessibilityHint = __SLAG__properties.accessibilityHint || '';
	this.accessibilityLabel = __SLAG__properties.accessibilityLabel || '';
	this.accessibilityValue = __SLAG__properties.accessibilityValue || '';
	this.anchorPoint = __SLAG__properties.anchorPoint || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.animatedCenter) {
		throw new Error('Ti.UI.Window.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	this.backgroundDisabledColor = __SLAG__properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = __SLAG__properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = __SLAG__properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = __SLAG__properties.backgroundFocusedImage || '';
	this.backgroundGradient = __SLAG__properties.backgroundGradient || {};
	this.backgroundImage = __SLAG__properties.backgroundImage || '';
	this.backgroundRepeat = __SLAG__properties.backgroundRepeat || true;
	this.backgroundLeftCap = __SLAG__properties.backgroundLeftCap || 0;
	this.backgroundSelectedColor = __SLAG__properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = __SLAG__properties.backgroundSelectedImage || '';
	this.backgroundTopCap = __SLAG__properties.backgroundTopCap || 0;
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.focusable = __SLAG__properties.focusable || true;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	this.softKeyboardOnFocus = __SLAG__properties.softKeyboardOnFocus || 0;
	this.transform = __SLAG__properties.transform || {};
	this.viewShadowRadius = __SLAG__properties.viewShadowRadius || 0;
	this.viewShadowColor = __SLAG__properties.viewShadowColor || '';
	this.viewShadowOffset = __SLAG__properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.zIndex = __SLAG__properties.zIndex || 0;
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
	this.backgroundColor = __SLAG__properties.backgroundColor || '';
	this.borderColor = __SLAG__properties.borderColor || '';
	this.borderRadius = __SLAG__properties.borderRadius || 0;
	this.borderWidth = __SLAG__properties.borderWidth || 0;
	this.bottom = __SLAG__properties.bottom || 0;
	this.center = __SLAG__properties.center || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.children) {
		throw new Error('Ti.UI.Window.children is read only property');
	}
	this.children = [];
	this.height = __SLAG__properties.height || 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.Window.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.Window.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.tintColor = __SLAG__properties.tintColor || '';
	this.top = __SLAG__properties.top || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.visible = __SLAG__properties.visible || true;
	this.width = __SLAG__properties.width || 0;
	if (__SLAG__properties.activity) {
		throw new Error('Ti.UI.Window.activity is read only property');
	}
	this.activity = {};
	this.backButtonTitle = __SLAG__properties.backButtonTitle || '';
	this.backButtonTitleImage = __SLAG__properties.backButtonTitleImage || '';
	this.barImage = __SLAG__properties.barImage || '';
	this.flagSecure = __SLAG__properties.flagSecure || true;
	this.includeOpaqueBars = __SLAG__properties.includeOpaqueBars || true;
	this.autoAdjustScrollViewInsets = __SLAG__properties.autoAdjustScrollViewInsets || true;
	this.leftNavButton = __SLAG__properties.leftNavButton || {};
	this.leftNavButtons = __SLAG__properties.leftNavButtons || [];
	if (__SLAG__properties.orientation) {
		throw new Error('Ti.UI.Window.orientation is read only property');
	}
	this.orientation = 0;
	this.rightNavButton = __SLAG__properties.rightNavButton || {};
	this.rightNavButtons = __SLAG__properties.rightNavButtons || [];
	this.shadowImage = __SLAG__properties.shadowImage || '';
	this.splitActionBar = __SLAG__properties.splitActionBar || true;
	this.statusBarStyle = __SLAG__properties.statusBarStyle || 0;
	this.tabBarHidden = __SLAG__properties.tabBarHidden || true;
	this.title = __SLAG__properties.title || '';
	this.titleControl = __SLAG__properties.titleControl || {};
	this.titleImage = __SLAG__properties.titleImage || '';
	this.titlePrompt = __SLAG__properties.titlePrompt || '';
	this.titleid = __SLAG__properties.titleid || '';
	this.titlepromptid = __SLAG__properties.titlepromptid || '';
	this.toolbar = __SLAG__properties.toolbar || [];
	this.transitionAnimation = __SLAG__properties.transitionAnimation || {};
	if (__SLAG__properties.url) {
		throw new Error('Ti.UI.Window.url was deprecated, since 3.5.0');
	}
	this.windowFlags = __SLAG__properties.windowFlags || 0;
	this.windowSoftInputMode = __SLAG__properties.windowSoftInputMode || 0;
	this.windowPixelFormat = __SLAG__properties.windowPixelFormat || 0;
	this.barColor = __SLAG__properties.barColor || '';
	this.exitOnClose = __SLAG__properties.exitOnClose || true;
	this.extendEdges = __SLAG__properties.extendEdges || 0;
	this.fullscreen = __SLAG__properties.fullscreen || true;
	this.hideShadow = __SLAG__properties.hideShadow || true;
	this.modal = __SLAG__properties.modal || true;
	this.navBarHidden = __SLAG__properties.navBarHidden || true;
	this.navTintColor = __SLAG__properties.navTintColor || '';
	this.orientationModes = __SLAG__properties.orientationModes || 0;
	this.theme = __SLAG__properties.theme || '';
	this.titleAttributes = __SLAG__properties.titleAttributes || {};
	this.translucent = __SLAG__properties.translucent || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
Window.prototype.addEventListener = function () {
};
Window.prototype.removeEventListener = function () {
};
Window.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
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
Window.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
Window.prototype.animate = function () {
};
Window.prototype.hide = function () {
};
Window.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
Window.prototype.show = function () {
};
Window.prototype.hideNavBar = function () {
};
Window.prototype.hideTabBar = function () {
};
Window.prototype.setToolbar = function (property) {
	this.toolbar = property;
};
Window.prototype.showNavBar = function () {
};
Window.prototype.close = function () {
};
Window.prototype.open = function () {
};
Window.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Window.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Window.prototype.getApiName = function () {
	return this.apiName;
};
Window.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Window.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Window.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
Window.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
Window.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
Window.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
Window.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
Window.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
Window.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
Window.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
Window.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
Window.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
Window.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
Window.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
Window.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
Window.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
Window.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
Window.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
Window.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
Window.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
Window.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
Window.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
Window.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
Window.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
Window.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
Window.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
Window.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
Window.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
Window.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
Window.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
Window.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
Window.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
Window.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
Window.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
Window.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
Window.prototype.getClipMode = function () {
	return this.clipMode;
};
Window.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
Window.prototype.getFocusable = function () {
	return this.focusable;
};
Window.prototype.setFocusable = function (property) {
	this.focusable = property;
};
Window.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
Window.prototype.setOverrideCurrentAnimation = function (property) {
	this.overrideCurrentAnimation = property;
};
Window.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
Window.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
Window.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
Window.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
Window.prototype.getTransform = function () {
	return this.transform;
};
Window.prototype.setTransform = function (property) {
	this.transform = property;
};
Window.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
Window.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
Window.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
Window.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
Window.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
Window.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
Window.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
Window.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
Window.prototype.getZIndex = function () {
	return this.zIndex;
};
Window.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
Window.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
Window.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
Window.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
Window.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
Window.prototype.getBorderColor = function () {
	return this.borderColor;
};
Window.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
Window.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
Window.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
Window.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
Window.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
Window.prototype.getBottom = function () {
	return this.bottom;
};
Window.prototype.setBottom = function (property) {
	this.bottom = property;
};
Window.prototype.getCenter = function () {
	return this.center;
};
Window.prototype.setCenter = function (property) {
	this.center = property;
};
Window.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
Window.prototype.getChildren = function () {
	return this.children;
};
Window.prototype.getHeight = function () {
	return this.height;
};
Window.prototype.setHeight = function (property) {
	this.height = property;
};
Window.prototype.getLayout = function () {
	return this.layout;
};
Window.prototype.setLayout = function (property) {
	this.layout = property;
};
Window.prototype.getLeft = function () {
	return this.left;
};
Window.prototype.setLeft = function (property) {
	this.left = property;
};
Window.prototype.getOpacity = function () {
	return this.opacity;
};
Window.prototype.setOpacity = function (property) {
	this.opacity = property;
};
Window.prototype.getRect = function () {
	return this.rect;
};
Window.prototype.getRight = function () {
	return this.right;
};
Window.prototype.setRight = function (property) {
	this.right = property;
};
Window.prototype.getSize = function () {
	return this.size;
};
Window.prototype.getTintColor = function () {
	return this.tintColor;
};
Window.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
Window.prototype.getTop = function () {
	return this.top;
};
Window.prototype.setTop = function (property) {
	this.top = property;
};
Window.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
Window.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
Window.prototype.getVisible = function () {
	return this.visible;
};
Window.prototype.setVisible = function (property) {
	this.visible = property;
};
Window.prototype.getWidth = function () {
	return this.width;
};
Window.prototype.setWidth = function (property) {
	this.width = property;
};
Window.prototype.getActivity = function () {
	return this.activity;
};
Window.prototype.getBackButtonTitle = function () {
	return this.backButtonTitle;
};
Window.prototype.setBackButtonTitle = function (property) {
	this.backButtonTitle = property;
};
Window.prototype.getBackButtonTitleImage = function () {
	return this.backButtonTitleImage;
};
Window.prototype.setBackButtonTitleImage = function (property) {
	this.backButtonTitleImage = property;
};
Window.prototype.getBarImage = function () {
	return this.barImage;
};
Window.prototype.setBarImage = function (property) {
	this.barImage = property;
};
Window.prototype.getFlagSecure = function () {
	return this.flagSecure;
};
Window.prototype.setFlagSecure = function (property) {
	this.flagSecure = property;
};
Window.prototype.getIncludeOpaqueBars = function () {
	return this.includeOpaqueBars;
};
Window.prototype.setIncludeOpaqueBars = function (property) {
	this.includeOpaqueBars = property;
};
Window.prototype.getAutoAdjustScrollViewInsets = function () {
	return this.autoAdjustScrollViewInsets;
};
Window.prototype.setAutoAdjustScrollViewInsets = function (property) {
	this.autoAdjustScrollViewInsets = property;
};
Window.prototype.getLeftNavButton = function () {
	return this.leftNavButton;
};
Window.prototype.setLeftNavButton = function (property) {
	this.leftNavButton = property;
};
Window.prototype.getLeftNavButtons = function () {
	return this.leftNavButtons;
};
Window.prototype.setLeftNavButtons = function (property) {
	this.leftNavButtons = property;
};
Window.prototype.getOrientation = function () {
	return this.orientation;
};
Window.prototype.getRightNavButton = function () {
	return this.rightNavButton;
};
Window.prototype.setRightNavButton = function (property) {
	this.rightNavButton = property;
};
Window.prototype.getRightNavButtons = function () {
	return this.rightNavButtons;
};
Window.prototype.setRightNavButtons = function (property) {
	this.rightNavButtons = property;
};
Window.prototype.getShadowImage = function () {
	return this.shadowImage;
};
Window.prototype.setShadowImage = function (property) {
	this.shadowImage = property;
};
Window.prototype.getSplitActionBar = function () {
	return this.splitActionBar;
};
Window.prototype.setSplitActionBar = function (property) {
	this.splitActionBar = property;
};
Window.prototype.getStatusBarStyle = function () {
	return this.statusBarStyle;
};
Window.prototype.setStatusBarStyle = function (property) {
	this.statusBarStyle = property;
};
Window.prototype.getTabBarHidden = function () {
	return this.tabBarHidden;
};
Window.prototype.setTabBarHidden = function (property) {
	this.tabBarHidden = property;
};
Window.prototype.getTitle = function () {
	return this.title;
};
Window.prototype.setTitle = function (property) {
	this.title = property;
};
Window.prototype.getTitleControl = function () {
	return this.titleControl;
};
Window.prototype.setTitleControl = function (property) {
	this.titleControl = property;
};
Window.prototype.getTitleImage = function () {
	return this.titleImage;
};
Window.prototype.setTitleImage = function (property) {
	this.titleImage = property;
};
Window.prototype.getTitlePrompt = function () {
	return this.titlePrompt;
};
Window.prototype.setTitlePrompt = function (property) {
	this.titlePrompt = property;
};
Window.prototype.getTitleid = function () {
	return this.titleid;
};
Window.prototype.setTitleid = function (property) {
	this.titleid = property;
};
Window.prototype.getTitlepromptid = function () {
	return this.titlepromptid;
};
Window.prototype.setTitlepromptid = function (property) {
	this.titlepromptid = property;
};
Window.prototype.getToolbar = function () {
	return this.toolbar;
};
Window.prototype.setToolbar = function (property) {
	this.toolbar = property;
};
Window.prototype.getTransitionAnimation = function () {
	return this.transitionAnimation;
};
Window.prototype.setTransitionAnimation = function (property) {
	this.transitionAnimation = property;
};
Window.prototype.getUrl = function () {
	throw new Error('Ti.UI.Window.getUrl was deprecated, since 3.5.0');
};
Window.prototype.setUrl = function () {
	throw new Error('Ti.UI.Window.setUrl was deprecated, since 3.5.0');
};
Window.prototype.getWindowFlags = function () {
	return this.windowFlags;
};
Window.prototype.setWindowFlags = function (property) {
	this.windowFlags = property;
};
Window.prototype.getWindowSoftInputMode = function () {
	return this.windowSoftInputMode;
};
Window.prototype.setWindowSoftInputMode = function (property) {
	this.windowSoftInputMode = property;
};
Window.prototype.getWindowPixelFormat = function () {
	return this.windowPixelFormat;
};
Window.prototype.setWindowPixelFormat = function (property) {
	this.windowPixelFormat = property;
};
Window.prototype.getBarColor = function () {
	return this.barColor;
};
Window.prototype.setBarColor = function (property) {
	this.barColor = property;
};
Window.prototype.getExitOnClose = function () {
	return this.exitOnClose;
};
Window.prototype.setExitOnClose = function (property) {
	this.exitOnClose = property;
};
Window.prototype.getExtendEdges = function () {
	return this.extendEdges;
};
Window.prototype.setExtendEdges = function (property) {
	this.extendEdges = property;
};
Window.prototype.getFullscreen = function () {
	return this.fullscreen;
};
Window.prototype.setFullscreen = function (property) {
	this.fullscreen = property;
};
Window.prototype.getHideShadow = function () {
	return this.hideShadow;
};
Window.prototype.setHideShadow = function (property) {
	this.hideShadow = property;
};
Window.prototype.getModal = function () {
	return this.modal;
};
Window.prototype.setModal = function (property) {
	this.modal = property;
};
Window.prototype.getNavBarHidden = function () {
	return this.navBarHidden;
};
Window.prototype.setNavBarHidden = function (property) {
	this.navBarHidden = property;
};
Window.prototype.getNavTintColor = function () {
	return this.navTintColor;
};
Window.prototype.setNavTintColor = function (property) {
	this.navTintColor = property;
};
Window.prototype.getOrientationModes = function () {
	return this.orientationModes;
};
Window.prototype.setOrientationModes = function (property) {
	this.orientationModes = property;
};
Window.prototype.getTheme = function () {
	return this.theme;
};
Window.prototype.setTheme = function (property) {
	this.theme = property;
};
Window.prototype.getTitleAttributes = function () {
	return this.titleAttributes;
};
Window.prototype.setTitleAttributes = function (property) {
	this.titleAttributes = property;
};
Window.prototype.getTranslucent = function () {
	return this.translucent;
};
Window.prototype.setTranslucent = function (property) {
	this.translucent = property;
};
module.exports = function (properties) {
	return new Window(properties);
};