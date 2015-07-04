function SplitWindow(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.iPad.SplitWindow';
	this.autoAdjustScrollViewInsets = properties.autoAdjustScrollViewInsets || undefined;
	this.backButtonTitle = properties.backButtonTitle || undefined;
	this.backButtonTitleImage = properties.backButtonTitleImage || undefined;
	this.backgroundColor = properties.backgroundColor || undefined;
	this.backgroundGradient = properties.backgroundGradient || undefined;
	this.backgroundImage = properties.backgroundImage || undefined;
	this.backgroundLeftCap = properties.backgroundLeftCap || undefined;
	this.backgroundRepeat = properties.backgroundRepeat || undefined;
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
	this.detailView = properties.detailView || undefined;
	this.extendEdges = properties.extendEdges || undefined;
	this.fullscreen = properties.fullscreen || undefined;
	this.height = properties.height || undefined;
	this.hideShadow = properties.hideShadow || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.includeOpaqueBars = properties.includeOpaqueBars || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.leftNavButton = properties.leftNavButton || undefined;
	this.leftNavButtons = properties.leftNavButtons || undefined;
	this.masterView = properties.masterView || undefined;
	this.modal = properties.modal || undefined;
	this.navBarHidden = properties.navBarHidden || undefined;
	this.navTintColor = properties.navTintColor || undefined;
	this.opacity = properties.opacity || undefined;
	this.orientation = properties.orientation || undefined;
	this.orientationModes = properties.orientationModes || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.rightNavButton = properties.rightNavButton || undefined;
	this.rightNavButtons = properties.rightNavButtons || undefined;
	this.shadowImage = properties.shadowImage || undefined;
	this.showMasterInPortrait = properties.showMasterInPortrait || undefined;
	this.size = properties.size || undefined;
	this.statusBarStyle = properties.statusBarStyle || undefined;
	this.tabBarHidden = properties.tabBarHidden || undefined;
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
	this.translucent = properties.translucent || undefined;
	if (properties.url) {
		throw new Error('Ti.UI.iPad.SplitWindow.url was deprecated, since 3.5.0');
	}
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;
	return this;
}
SplitWindow.prototype.add = function () {
};
SplitWindow.prototype.addEventListener = function () {
};
SplitWindow.prototype.animate = function () {
};
SplitWindow.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
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
	return true;
};
SplitWindow.prototype.getAccessibilityHint = function () {
	return '';
};
SplitWindow.prototype.getAccessibilityLabel = function () {
	return '';
};
SplitWindow.prototype.getAccessibilityValue = function () {
	return '';
};
SplitWindow.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
SplitWindow.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
SplitWindow.prototype.getApiName = function () {
	return '';
};
SplitWindow.prototype.getAutoAdjustScrollViewInsets = function () {
	return true;
};
SplitWindow.prototype.getBackButtonTitle = function () {
	return '';
};
SplitWindow.prototype.getBackButtonTitleImage = function () {
	return '';
};
SplitWindow.prototype.getBackgroundColor = function () {
	return '';
};
SplitWindow.prototype.getBackgroundGradient = function () {
	return {};
};
SplitWindow.prototype.getBackgroundImage = function () {
	return '';
};
SplitWindow.prototype.getBackgroundLeftCap = function () {
	return 0;
};
SplitWindow.prototype.getBackgroundRepeat = function () {
	return true;
};
SplitWindow.prototype.getBackgroundTopCap = function () {
	return 0;
};
SplitWindow.prototype.getBarColor = function () {
	return '';
};
SplitWindow.prototype.getBarImage = function () {
	return '';
};
SplitWindow.prototype.getBorderColor = function () {
	return '';
};
SplitWindow.prototype.getBorderRadius = function () {
	return 0;
};
SplitWindow.prototype.getBorderWidth = function () {
	return 0;
};
SplitWindow.prototype.getBottom = function () {
	return 0;
};
SplitWindow.prototype.getBubbleParent = function () {
	return true;
};
SplitWindow.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
SplitWindow.prototype.getChildren = function () {
	return [];
};
SplitWindow.prototype.getClipMode = function () {
	return 0;
};
SplitWindow.prototype.getDetailView = function () {
	return {};
};
SplitWindow.prototype.getExtendEdges = function () {
	return 0;
};
SplitWindow.prototype.getFullscreen = function () {
	return true;
};
SplitWindow.prototype.getHeight = function () {
	return 0;
};
SplitWindow.prototype.getHideShadow = function () {
	return true;
};
SplitWindow.prototype.getHorizontalWrap = function () {
	return true;
};
SplitWindow.prototype.getIncludeOpaqueBars = function () {
	return true;
};
SplitWindow.prototype.getLayout = function () {
	return '';
};
SplitWindow.prototype.getLeft = function () {
	return 0;
};
SplitWindow.prototype.getLeftNavButton = function () {
	return {};
};
SplitWindow.prototype.getLeftNavButtons = function () {
	return [];
};
SplitWindow.prototype.getMasterView = function () {
	return {};
};
SplitWindow.prototype.getModal = function () {
	return true;
};
SplitWindow.prototype.getNavBarHidden = function () {
	return true;
};
SplitWindow.prototype.getNavTintColor = function () {
	return '';
};
SplitWindow.prototype.getOpacity = function () {
	return 0;
};
SplitWindow.prototype.getOrientation = function () {
	return 0;
};
SplitWindow.prototype.getOrientationModes = function () {
	return 0;
};
SplitWindow.prototype.getPullBackgroundColor = function () {
	return '';
};
SplitWindow.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
SplitWindow.prototype.getRight = function () {
	return 0;
};
SplitWindow.prototype.getRightNavButton = function () {
	return {};
};
SplitWindow.prototype.getRightNavButtons = function () {
	return [];
};
SplitWindow.prototype.getShadowImage = function () {
	return '';
};
SplitWindow.prototype.getShowMasterInPortrait = function () {
	return true;
};
SplitWindow.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
SplitWindow.prototype.getStatusBarStyle = function () {
	return 0;
};
SplitWindow.prototype.getTabBarHidden = function () {
	return true;
};
SplitWindow.prototype.getTintColor = function () {
	return '';
};
SplitWindow.prototype.getTitle = function () {
	return '';
};
SplitWindow.prototype.getTitleAttributes = function () {
	return {};
};
SplitWindow.prototype.getTitleControl = function () {
	return {};
};
SplitWindow.prototype.getTitleImage = function () {
	return '';
};
SplitWindow.prototype.getTitlePrompt = function () {
	return '';
};
SplitWindow.prototype.getTitleid = function () {
	return '';
};
SplitWindow.prototype.getTitlepromptid = function () {
	return '';
};
SplitWindow.prototype.getToolbar = function () {
	return [];
};
SplitWindow.prototype.getTop = function () {
	return 0;
};
SplitWindow.prototype.getTouchEnabled = function () {
	return true;
};
SplitWindow.prototype.getTransform = function () {
	return {};
};
SplitWindow.prototype.getTranslucent = function () {
	return true;
};
SplitWindow.prototype.getUrl = function () {
	throw new Error('Ti.UI.iPad.SplitWindow.getUrl was deprecated, since 3.5.0');
};
SplitWindow.prototype.getViewShadowColor = function () {
	return '';
};
SplitWindow.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
SplitWindow.prototype.getViewShadowRadius = function () {
	return 0;
};
SplitWindow.prototype.getVisible = function () {
	return true;
};
SplitWindow.prototype.getWidth = function () {
	return 0;
};
SplitWindow.prototype.getZIndex = function () {
	return 0;
};
SplitWindow.prototype.hide = function () {
};
SplitWindow.prototype.hideNavBar = function () {
};
SplitWindow.prototype.hideTabBar = function () {
};
SplitWindow.prototype.open = function () {
};
SplitWindow.prototype.remove = function () {
};
SplitWindow.prototype.removeAllChildren = function () {
};
SplitWindow.prototype.removeEventListener = function () {
};
SplitWindow.prototype.setAccessibilityHidden = function () {
};
SplitWindow.prototype.setAccessibilityHint = function () {
};
SplitWindow.prototype.setAccessibilityLabel = function () {
};
SplitWindow.prototype.setAccessibilityValue = function () {
};
SplitWindow.prototype.setAnchorPoint = function () {
};
SplitWindow.prototype.setAutoAdjustScrollViewInsets = function () {
};
SplitWindow.prototype.setBackButtonTitle = function () {
};
SplitWindow.prototype.setBackButtonTitleImage = function () {
};
SplitWindow.prototype.setBackgroundColor = function () {
};
SplitWindow.prototype.setBackgroundGradient = function () {
};
SplitWindow.prototype.setBackgroundImage = function () {
};
SplitWindow.prototype.setBackgroundLeftCap = function () {
};
SplitWindow.prototype.setBackgroundRepeat = function () {
};
SplitWindow.prototype.setBackgroundTopCap = function () {
};
SplitWindow.prototype.setBarColor = function () {
};
SplitWindow.prototype.setBarImage = function () {
};
SplitWindow.prototype.setBorderColor = function () {
};
SplitWindow.prototype.setBorderRadius = function () {
};
SplitWindow.prototype.setBorderWidth = function () {
};
SplitWindow.prototype.setBottom = function () {
};
SplitWindow.prototype.setBubbleParent = function () {
};
SplitWindow.prototype.setCenter = function () {
};
SplitWindow.prototype.setClipMode = function () {
};
SplitWindow.prototype.setExtendEdges = function () {
};
SplitWindow.prototype.setFullscreen = function () {
};
SplitWindow.prototype.setHeight = function () {
};
SplitWindow.prototype.setHideShadow = function () {
};
SplitWindow.prototype.setHorizontalWrap = function () {
};
SplitWindow.prototype.setIncludeOpaqueBars = function () {
};
SplitWindow.prototype.setLayout = function () {
};
SplitWindow.prototype.setLeft = function () {
};
SplitWindow.prototype.setLeftNavButton = function () {
};
SplitWindow.prototype.setLeftNavButtons = function () {
};
SplitWindow.prototype.setModal = function () {
};
SplitWindow.prototype.setNavBarHidden = function () {
};
SplitWindow.prototype.setNavTintColor = function () {
};
SplitWindow.prototype.setOpacity = function () {
};
SplitWindow.prototype.setOrientationModes = function () {
};
SplitWindow.prototype.setPullBackgroundColor = function () {
};
SplitWindow.prototype.setRight = function () {
};
SplitWindow.prototype.setRightNavButton = function () {
};
SplitWindow.prototype.setRightNavButtons = function () {
};
SplitWindow.prototype.setShadowImage = function () {
};
SplitWindow.prototype.setShowMasterInPortrait = function () {
};
SplitWindow.prototype.setStatusBarStyle = function () {
};
SplitWindow.prototype.setTabBarHidden = function () {
};
SplitWindow.prototype.setTintColor = function () {
};
SplitWindow.prototype.setTitle = function () {
};
SplitWindow.prototype.setTitleAttributes = function () {
};
SplitWindow.prototype.setTitleControl = function () {
};
SplitWindow.prototype.setTitleImage = function () {
};
SplitWindow.prototype.setTitlePrompt = function () {
};
SplitWindow.prototype.setTitleid = function () {
};
SplitWindow.prototype.setTitlepromptid = function () {
};
SplitWindow.prototype.setToolbar = function () {
};
SplitWindow.prototype.setTop = function () {
};
SplitWindow.prototype.setTouchEnabled = function () {
};
SplitWindow.prototype.setTransform = function () {
};
SplitWindow.prototype.setTranslucent = function () {
};
SplitWindow.prototype.setViewShadowColor = function () {
};
SplitWindow.prototype.setViewShadowOffset = function () {
};
SplitWindow.prototype.setViewShadowRadius = function () {
};
SplitWindow.prototype.setVisible = function () {
};
SplitWindow.prototype.setWidth = function () {
};
SplitWindow.prototype.setZIndex = function () {
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