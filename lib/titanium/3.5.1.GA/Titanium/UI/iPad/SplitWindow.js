var crypto = require('crypto');
function SplitWindow(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'anchorPoint',
			'animatedCenter',
			'apiName',
			'autoAdjustScrollViewInsets',
			'backButtonTitle',
			'backButtonTitleImage',
			'backgroundColor',
			'backgroundGradient',
			'backgroundImage',
			'backgroundLeftCap',
			'backgroundRepeat',
			'backgroundTopCap',
			'barColor',
			'barImage',
			'borderColor',
			'borderRadius',
			'borderWidth',
			'bottom',
			'bubbleParent',
			'center',
			'children',
			'clipMode',
			'detailView',
			'extendEdges',
			'fullscreen',
			'height',
			'hideShadow',
			'horizontalWrap',
			'includeOpaqueBars',
			'layout',
			'left',
			'leftNavButton',
			'leftNavButtons',
			'masterView',
			'modal',
			'navBarHidden',
			'navTintColor',
			'opacity',
			'orientation',
			'orientationModes',
			'pullBackgroundColor',
			'rect',
			'right',
			'rightNavButton',
			'rightNavButtons',
			'shadowImage',
			'showMasterInPortrait',
			'size',
			'statusBarStyle',
			'tabBarHidden',
			'tintColor',
			'title',
			'titleAttributes',
			'titleControl',
			'titleImage',
			'titlePrompt',
			'titleid',
			'titlepromptid',
			'toolbar',
			'top',
			'touchEnabled',
			'transform',
			'translucent',
			'url',
			'viewShadowColor',
			'viewShadowOffset',
			'viewShadowRadius',
			'visible',
			'width',
			'zIndex',
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
	this.accessibilityHidden = __SLAG__properties.accessibilityHidden || true;
	this.accessibilityHint = __SLAG__properties.accessibilityHint || '';
	this.accessibilityLabel = __SLAG__properties.accessibilityLabel || '';
	this.accessibilityValue = __SLAG__properties.accessibilityValue || '';
	this.anchorPoint = __SLAG__properties.anchorPoint || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.animatedCenter) {
		throw new Error('Ti.UI.iPad.SplitWindow.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iPad.SplitWindow.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPad.SplitWindow';
	this.autoAdjustScrollViewInsets = __SLAG__properties.autoAdjustScrollViewInsets || true;
	this.backButtonTitle = __SLAG__properties.backButtonTitle || '';
	this.backButtonTitleImage = __SLAG__properties.backButtonTitleImage || '';
	this.backgroundColor = __SLAG__properties.backgroundColor || '';
	this.backgroundGradient = __SLAG__properties.backgroundGradient || {};
	this.backgroundImage = __SLAG__properties.backgroundImage || '';
	this.backgroundLeftCap = __SLAG__properties.backgroundLeftCap || 0;
	this.backgroundRepeat = __SLAG__properties.backgroundRepeat || true;
	this.backgroundTopCap = __SLAG__properties.backgroundTopCap || 0;
	this.barColor = __SLAG__properties.barColor || '';
	this.barImage = __SLAG__properties.barImage || '';
	this.borderColor = __SLAG__properties.borderColor || '';
	this.borderRadius = __SLAG__properties.borderRadius || 0;
	this.borderWidth = __SLAG__properties.borderWidth || 0;
	this.bottom = __SLAG__properties.bottom || 0;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.center = __SLAG__properties.center || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.children) {
		throw new Error('Ti.UI.iPad.SplitWindow.children is read only property');
	}
	this.children = [];
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.detailView = __SLAG__properties.detailView || {};
	this.extendEdges = __SLAG__properties.extendEdges || 0;
	this.fullscreen = __SLAG__properties.fullscreen || true;
	this.height = __SLAG__properties.height || 0;
	this.hideShadow = __SLAG__properties.hideShadow || true;
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.includeOpaqueBars = __SLAG__properties.includeOpaqueBars || true;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.leftNavButton = __SLAG__properties.leftNavButton || {};
	this.leftNavButtons = __SLAG__properties.leftNavButtons || [];
	this.masterView = __SLAG__properties.masterView || {};
	this.modal = __SLAG__properties.modal || true;
	this.navBarHidden = __SLAG__properties.navBarHidden || true;
	this.navTintColor = __SLAG__properties.navTintColor || '';
	this.opacity = __SLAG__properties.opacity || 0;
	if (__SLAG__properties.orientation) {
		throw new Error('Ti.UI.iPad.SplitWindow.orientation is read only property');
	}
	this.orientation = 0;
	this.orientationModes = __SLAG__properties.orientationModes || 0;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.iPad.SplitWindow.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	this.rightNavButton = __SLAG__properties.rightNavButton || {};
	this.rightNavButtons = __SLAG__properties.rightNavButtons || [];
	this.shadowImage = __SLAG__properties.shadowImage || '';
	this.showMasterInPortrait = __SLAG__properties.showMasterInPortrait || true;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.iPad.SplitWindow.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.statusBarStyle = __SLAG__properties.statusBarStyle || 0;
	this.tabBarHidden = __SLAG__properties.tabBarHidden || true;
	this.tintColor = __SLAG__properties.tintColor || '';
	this.title = __SLAG__properties.title || '';
	this.titleAttributes = __SLAG__properties.titleAttributes || {};
	this.titleControl = __SLAG__properties.titleControl || {};
	this.titleImage = __SLAG__properties.titleImage || '';
	this.titlePrompt = __SLAG__properties.titlePrompt || '';
	this.titleid = __SLAG__properties.titleid || '';
	this.titlepromptid = __SLAG__properties.titlepromptid || '';
	if (__SLAG__properties.toolbar) {
		throw new Error('Ti.UI.iPad.SplitWindow.toolbar is read only property');
	}
	this.toolbar = [];
	this.top = __SLAG__properties.top || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.transform = __SLAG__properties.transform || {};
	this.translucent = __SLAG__properties.translucent || true;
	if (__SLAG__properties.url) {
		throw new Error('Ti.UI.iPad.SplitWindow.url was deprecated, since 3.5.0');
	}
	this.viewShadowColor = __SLAG__properties.viewShadowColor || '';
	this.viewShadowOffset = __SLAG__properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = __SLAG__properties.viewShadowRadius || 0;
	this.visible = __SLAG__properties.visible || true;
	this.width = __SLAG__properties.width || 0;
	this.zIndex = __SLAG__properties.zIndex || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
SplitWindow.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
SplitWindow.prototype.addEventListener = function () {
};
SplitWindow.prototype.animate = function () {
};
SplitWindow.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
SplitWindow.prototype.close = function () {
};
SplitWindow.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
SplitWindow.prototype.finishLayout = function () {
	throw new Error('Ti.UI.iPad.SplitWindow.finishLayout was deprecated, since 3.0.0');
};
SplitWindow.prototype.fireEvent = function () {
};
SplitWindow.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
SplitWindow.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
SplitWindow.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
SplitWindow.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
SplitWindow.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
SplitWindow.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
SplitWindow.prototype.getApiName = function () {
	return this.apiName;
};
SplitWindow.prototype.getAutoAdjustScrollViewInsets = function () {
	return this.autoAdjustScrollViewInsets;
};
SplitWindow.prototype.getBackButtonTitle = function () {
	return this.backButtonTitle;
};
SplitWindow.prototype.getBackButtonTitleImage = function () {
	return this.backButtonTitleImage;
};
SplitWindow.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
SplitWindow.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
SplitWindow.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
SplitWindow.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
SplitWindow.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
SplitWindow.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
SplitWindow.prototype.getBarColor = function () {
	return this.barColor;
};
SplitWindow.prototype.getBarImage = function () {
	return this.barImage;
};
SplitWindow.prototype.getBorderColor = function () {
	return this.borderColor;
};
SplitWindow.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
SplitWindow.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
SplitWindow.prototype.getBottom = function () {
	return this.bottom;
};
SplitWindow.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
SplitWindow.prototype.getCenter = function () {
	return this.center;
};
SplitWindow.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
SplitWindow.prototype.getChildren = function () {
	return this.children;
};
SplitWindow.prototype.getClipMode = function () {
	return this.clipMode;
};
SplitWindow.prototype.getDetailView = function () {
	return this.detailView;
};
SplitWindow.prototype.getExtendEdges = function () {
	return this.extendEdges;
};
SplitWindow.prototype.getFullscreen = function () {
	return this.fullscreen;
};
SplitWindow.prototype.getHeight = function () {
	return this.height;
};
SplitWindow.prototype.getHideShadow = function () {
	return this.hideShadow;
};
SplitWindow.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
SplitWindow.prototype.getIncludeOpaqueBars = function () {
	return this.includeOpaqueBars;
};
SplitWindow.prototype.getLayout = function () {
	return this.layout;
};
SplitWindow.prototype.getLeft = function () {
	return this.left;
};
SplitWindow.prototype.getLeftNavButton = function () {
	return this.leftNavButton;
};
SplitWindow.prototype.getLeftNavButtons = function () {
	return this.leftNavButtons;
};
SplitWindow.prototype.getMasterView = function () {
	return this.masterView;
};
SplitWindow.prototype.getModal = function () {
	return this.modal;
};
SplitWindow.prototype.getNavBarHidden = function () {
	return this.navBarHidden;
};
SplitWindow.prototype.getNavTintColor = function () {
	return this.navTintColor;
};
SplitWindow.prototype.getOpacity = function () {
	return this.opacity;
};
SplitWindow.prototype.getOrientation = function () {
	return this.orientation;
};
SplitWindow.prototype.getOrientationModes = function () {
	return this.orientationModes;
};
SplitWindow.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
SplitWindow.prototype.getRect = function () {
	return this.rect;
};
SplitWindow.prototype.getRight = function () {
	return this.right;
};
SplitWindow.prototype.getRightNavButton = function () {
	return this.rightNavButton;
};
SplitWindow.prototype.getRightNavButtons = function () {
	return this.rightNavButtons;
};
SplitWindow.prototype.getShadowImage = function () {
	return this.shadowImage;
};
SplitWindow.prototype.getShowMasterInPortrait = function () {
	return this.showMasterInPortrait;
};
SplitWindow.prototype.getSize = function () {
	return this.size;
};
SplitWindow.prototype.getStatusBarStyle = function () {
	return this.statusBarStyle;
};
SplitWindow.prototype.getTabBarHidden = function () {
	return this.tabBarHidden;
};
SplitWindow.prototype.getTintColor = function () {
	return this.tintColor;
};
SplitWindow.prototype.getTitle = function () {
	return this.title;
};
SplitWindow.prototype.getTitleAttributes = function () {
	return this.titleAttributes;
};
SplitWindow.prototype.getTitleControl = function () {
	return this.titleControl;
};
SplitWindow.prototype.getTitleImage = function () {
	return this.titleImage;
};
SplitWindow.prototype.getTitlePrompt = function () {
	return this.titlePrompt;
};
SplitWindow.prototype.getTitleid = function () {
	return this.titleid;
};
SplitWindow.prototype.getTitlepromptid = function () {
	return this.titlepromptid;
};
SplitWindow.prototype.getToolbar = function () {
	return this.toolbar;
};
SplitWindow.prototype.getTop = function () {
	return this.top;
};
SplitWindow.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
SplitWindow.prototype.getTransform = function () {
	return this.transform;
};
SplitWindow.prototype.getTranslucent = function () {
	return this.translucent;
};
SplitWindow.prototype.getUrl = function () {
	throw new Error('Ti.UI.iPad.SplitWindow.getUrl was deprecated, since 3.5.0');
};
SplitWindow.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
SplitWindow.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
SplitWindow.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
SplitWindow.prototype.getVisible = function () {
	return this.visible;
};
SplitWindow.prototype.getWidth = function () {
	return this.width;
};
SplitWindow.prototype.getZIndex = function () {
	return this.zIndex;
};
SplitWindow.prototype.hide = function () {
};
SplitWindow.prototype.hideNavBar = function () {
};
SplitWindow.prototype.hideTabBar = function () {
};
SplitWindow.prototype.open = function () {
};
SplitWindow.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
SplitWindow.prototype.removeAllChildren = function () {
};
SplitWindow.prototype.removeEventListener = function () {
};
SplitWindow.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
SplitWindow.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
SplitWindow.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
SplitWindow.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
SplitWindow.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
SplitWindow.prototype.setAutoAdjustScrollViewInsets = function (property) {
	this.autoAdjustScrollViewInsets = property;
};
SplitWindow.prototype.setBackButtonTitle = function (property) {
	this.backButtonTitle = property;
};
SplitWindow.prototype.setBackButtonTitleImage = function (property) {
	this.backButtonTitleImage = property;
};
SplitWindow.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
SplitWindow.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
SplitWindow.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
SplitWindow.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
SplitWindow.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
SplitWindow.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
SplitWindow.prototype.setBarColor = function (property) {
	this.barColor = property;
};
SplitWindow.prototype.setBarImage = function (property) {
	this.barImage = property;
};
SplitWindow.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
SplitWindow.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
SplitWindow.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
SplitWindow.prototype.setBottom = function (property) {
	this.bottom = property;
};
SplitWindow.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
SplitWindow.prototype.setCenter = function (property) {
	this.center = property;
};
SplitWindow.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
SplitWindow.prototype.setExtendEdges = function (property) {
	this.extendEdges = property;
};
SplitWindow.prototype.setFullscreen = function (property) {
	this.fullscreen = property;
};
SplitWindow.prototype.setHeight = function (property) {
	this.height = property;
};
SplitWindow.prototype.setHideShadow = function (property) {
	this.hideShadow = property;
};
SplitWindow.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
SplitWindow.prototype.setIncludeOpaqueBars = function (property) {
	this.includeOpaqueBars = property;
};
SplitWindow.prototype.setLayout = function (property) {
	this.layout = property;
};
SplitWindow.prototype.setLeft = function (property) {
	this.left = property;
};
SplitWindow.prototype.setLeftNavButton = function (property) {
	this.leftNavButton = property;
};
SplitWindow.prototype.setLeftNavButtons = function (property) {
	this.leftNavButtons = property;
};
SplitWindow.prototype.setModal = function (property) {
	this.modal = property;
};
SplitWindow.prototype.setNavBarHidden = function (property) {
	this.navBarHidden = property;
};
SplitWindow.prototype.setNavTintColor = function (property) {
	this.navTintColor = property;
};
SplitWindow.prototype.setOpacity = function (property) {
	this.opacity = property;
};
SplitWindow.prototype.setOrientationModes = function (property) {
	this.orientationModes = property;
};
SplitWindow.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
SplitWindow.prototype.setRight = function (property) {
	this.right = property;
};
SplitWindow.prototype.setRightNavButton = function (property) {
	this.rightNavButton = property;
};
SplitWindow.prototype.setRightNavButtons = function (property) {
	this.rightNavButtons = property;
};
SplitWindow.prototype.setShadowImage = function (property) {
	this.shadowImage = property;
};
SplitWindow.prototype.setShowMasterInPortrait = function (property) {
	this.showMasterInPortrait = property;
};
SplitWindow.prototype.setStatusBarStyle = function (property) {
	this.statusBarStyle = property;
};
SplitWindow.prototype.setTabBarHidden = function (property) {
	this.tabBarHidden = property;
};
SplitWindow.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
SplitWindow.prototype.setTitle = function (property) {
	this.title = property;
};
SplitWindow.prototype.setTitleAttributes = function (property) {
	this.titleAttributes = property;
};
SplitWindow.prototype.setTitleControl = function (property) {
	this.titleControl = property;
};
SplitWindow.prototype.setTitleImage = function (property) {
	this.titleImage = property;
};
SplitWindow.prototype.setTitlePrompt = function (property) {
	this.titlePrompt = property;
};
SplitWindow.prototype.setTitleid = function (property) {
	this.titleid = property;
};
SplitWindow.prototype.setTitlepromptid = function (property) {
	this.titlepromptid = property;
};
SplitWindow.prototype.setToolbar = function (property) {
	this.toolbar = property;
};
SplitWindow.prototype.setTop = function (property) {
	this.top = property;
};
SplitWindow.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
SplitWindow.prototype.setTransform = function (property) {
	this.transform = property;
};
SplitWindow.prototype.setTranslucent = function (property) {
	this.translucent = property;
};
SplitWindow.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
SplitWindow.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
SplitWindow.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
SplitWindow.prototype.setVisible = function (property) {
	this.visible = property;
};
SplitWindow.prototype.setWidth = function (property) {
	this.width = property;
};
SplitWindow.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
SplitWindow.prototype.show = function () {
};
SplitWindow.prototype.showNavBar = function () {
};
SplitWindow.prototype.startLayout = function () {
	throw new Error('Ti.UI.iPad.SplitWindow.startLayout was deprecated, since 3.0.0');
};
SplitWindow.prototype.toImage = function () {
	return {};
};
SplitWindow.prototype.updateLayout = function () {
	throw new Error('Ti.UI.iPad.SplitWindow.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new SplitWindow(properties);
};