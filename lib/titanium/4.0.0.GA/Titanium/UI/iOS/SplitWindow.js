function SplitWindow(properties) {
	properties = properties || {};
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
	this.apiName = 'Ti.UI.iOS.SplitWindow';
	this.autoAdjustScrollViewInsets = properties.autoAdjustScrollViewInsets || true;
	this.backButtonTitle = properties.backButtonTitle || '';
	this.backButtonTitleImage = properties.backButtonTitleImage || '';
	this.backgroundColor = properties.backgroundColor || '';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundLeftCap = properties.backgroundLeftCap || 0;
	this.backgroundRepeat = properties.backgroundRepeat || true;
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
	this.detailView = properties.detailView || {};
	this.extendEdges = properties.extendEdges || 0;
	this.fullscreen = properties.fullscreen || true;
	this.height = properties.height || 0;
	this.hideShadow = properties.hideShadow || true;
	this.horizontalWrap = properties.horizontalWrap || true;
	this.includeOpaqueBars = properties.includeOpaqueBars || true;
	this.landscapeSplit = properties.landscapeSplit || 0;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.leftNavButton = properties.leftNavButton || {};
	this.leftNavButtons = properties.leftNavButtons || [];
	this.masterIsOverlayed = properties.masterIsOverlayed || true;
	this.masterView = properties.masterView || {};
	this.modal = properties.modal || true;
	this.navBarHidden = properties.navBarHidden || true;
	this.navTintColor = properties.navTintColor || '';
	this.opacity = properties.opacity || 0;
	this.orientation = properties.orientation || 0;
	this.orientationModes = properties.orientationModes || 0;
	this.portraitSplit = properties.portraitSplit || 0;
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
	this.showMasterInPortrait = properties.showMasterInPortrait || true;
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.statusBarStyle = properties.statusBarStyle || 0;
	this.tabBarHidden = properties.tabBarHidden || true;
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
	this.translucent = properties.translucent || true;
	if (properties.url) {
		throw new Error('Ti.UI.iOS.SplitWindow.url was deprecated, since 3.5.0');
	}
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.zIndex = properties.zIndex || 0;
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
	throw new Error('Ti.UI.iOS.SplitWindow.finishLayout was deprecated, since 3.0.0');
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
SplitWindow.prototype.getLandscapeSplit = function () {
	return 0;
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
SplitWindow.prototype.getMasterIsOverlayed = function () {
	return true;
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
SplitWindow.prototype.getPortraitSplit = function () {
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
	throw new Error('Ti.UI.iOS.SplitWindow.getUrl was deprecated, since 3.5.0');
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
SplitWindow.prototype.setDetailView = function () {
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
SplitWindow.prototype.setLandscapeSplit = function () {
};
SplitWindow.prototype.setLayout = function () {
};
SplitWindow.prototype.setLeft = function () {
};
SplitWindow.prototype.setLeftNavButton = function () {
};
SplitWindow.prototype.setLeftNavButtons = function () {
};
SplitWindow.prototype.setMasterIsOverlayed = function () {
};
SplitWindow.prototype.setMasterView = function () {
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
SplitWindow.prototype.setPortraitSplit = function () {
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
	throw new Error('Ti.UI.iOS.SplitWindow.startLayout was deprecated, since 3.0.0');
};
SplitWindow.prototype.toImage = function () {
	return {};
};
SplitWindow.prototype.updateLayout = function () {
	throw new Error('Ti.UI.iOS.SplitWindow.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new SplitWindow(properties);
};