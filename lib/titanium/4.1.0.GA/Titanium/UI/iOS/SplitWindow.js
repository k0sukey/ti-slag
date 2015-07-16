function SplitWindow(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iOS.SplitWindow';
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
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundRepeat = properties.backgroundRepeat || true;
	this.backgroundLeftCap = properties.backgroundLeftCap || 0;
	this.backgroundTopCap = properties.backgroundTopCap || 0;
	this.clipMode = properties.clipMode || 0;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.transform = properties.transform || {};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.horizontalWrap = properties.horizontalWrap || true;
	this.zIndex = properties.zIndex || 0;
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
	this.backButtonTitle = properties.backButtonTitle || '';
	this.backButtonTitleImage = properties.backButtonTitleImage || '';
	this.barImage = properties.barImage || '';
	this.includeOpaqueBars = properties.includeOpaqueBars || true;
	this.autoAdjustScrollViewInsets = properties.autoAdjustScrollViewInsets || true;
	this.leftNavButton = properties.leftNavButton || {};
	this.leftNavButtons = properties.leftNavButtons || [];
	this.orientation = properties.orientation || 0;
	this.rightNavButton = properties.rightNavButton || {};
	this.rightNavButtons = properties.rightNavButtons || [];
	this.shadowImage = properties.shadowImage || '';
	this.statusBarStyle = properties.statusBarStyle || 0;
	this.tabBarHidden = properties.tabBarHidden || true;
	this.title = properties.title || '';
	this.titleControl = properties.titleControl || {};
	this.titleImage = properties.titleImage || '';
	this.titlePrompt = properties.titlePrompt || '';
	this.titleid = properties.titleid || '';
	this.titlepromptid = properties.titlepromptid || '';
	this.toolbar = properties.toolbar || [];
	if (properties.url) {
		throw new Error('Ti.UI.iOS.SplitWindow.url was deprecated, since 3.5.0');
	}
	this.barColor = properties.barColor || '';
	this.extendEdges = properties.extendEdges || 0;
	this.fullscreen = properties.fullscreen || true;
	this.hideShadow = properties.hideShadow || true;
	this.modal = properties.modal || true;
	this.navBarHidden = properties.navBarHidden || true;
	this.navTintColor = properties.navTintColor || '';
	this.orientationModes = properties.orientationModes || 0;
	this.titleAttributes = properties.titleAttributes || {};
	this.translucent = properties.translucent || true;
	this.detailView = properties.detailView || {};
	this.masterView = properties.masterView || {};
	this.showMasterInPortrait = properties.showMasterInPortrait || true;
	this.masterIsOverlayed = properties.masterIsOverlayed || true;
	this.portraitSplit = properties.portraitSplit || 0;
	this.landscapeSplit = properties.landscapeSplit || 0;
	return this;
}
SplitWindow.prototype.addEventListener = function () {
};
SplitWindow.prototype.removeEventListener = function () {
};
SplitWindow.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
SplitWindow.prototype.fireEvent = function () {
};
SplitWindow.prototype.finishLayout = function () {
	throw new Error('Ti.UI.iOS.SplitWindow.finishLayout was deprecated, since 3.0.0');
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
SplitWindow.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
SplitWindow.prototype.add = function () {
};
SplitWindow.prototype.animate = function () {
};
SplitWindow.prototype.hide = function () {
};
SplitWindow.prototype.remove = function () {
};
SplitWindow.prototype.show = function () {
};
SplitWindow.prototype.hideNavBar = function () {
};
SplitWindow.prototype.hideTabBar = function () {
};
SplitWindow.prototype.setToolbar = function () {
};
SplitWindow.prototype.showNavBar = function () {
};
SplitWindow.prototype.close = function () {
};
SplitWindow.prototype.open = function () {
};
SplitWindow.prototype.setShowMasterInPortrait = function () {
};
SplitWindow.prototype.setMasterIsOverlayed = function () {
};
SplitWindow.prototype.getBubbleParent = function () {
	return true;
};
SplitWindow.prototype.setBubbleParent = function () {
};
SplitWindow.prototype.getApiName = function () {
	return '';
};
SplitWindow.prototype.getAccessibilityHidden = function () {
	return true;
};
SplitWindow.prototype.setAccessibilityHidden = function () {
};
SplitWindow.prototype.getAccessibilityHint = function () {
	return '';
};
SplitWindow.prototype.setAccessibilityHint = function () {
};
SplitWindow.prototype.getAccessibilityLabel = function () {
	return '';
};
SplitWindow.prototype.setAccessibilityLabel = function () {
};
SplitWindow.prototype.getAccessibilityValue = function () {
	return '';
};
SplitWindow.prototype.setAccessibilityValue = function () {
};
SplitWindow.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
SplitWindow.prototype.setAnchorPoint = function () {
};
SplitWindow.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
SplitWindow.prototype.getBackgroundGradient = function () {
	return {};
};
SplitWindow.prototype.setBackgroundGradient = function () {
};
SplitWindow.prototype.getBackgroundImage = function () {
	return '';
};
SplitWindow.prototype.setBackgroundImage = function () {
};
SplitWindow.prototype.getBackgroundRepeat = function () {
	return true;
};
SplitWindow.prototype.setBackgroundRepeat = function () {
};
SplitWindow.prototype.getBackgroundLeftCap = function () {
	return 0;
};
SplitWindow.prototype.setBackgroundLeftCap = function () {
};
SplitWindow.prototype.getBackgroundTopCap = function () {
	return 0;
};
SplitWindow.prototype.setBackgroundTopCap = function () {
};
SplitWindow.prototype.getClipMode = function () {
	return 0;
};
SplitWindow.prototype.setClipMode = function () {
};
SplitWindow.prototype.getPullBackgroundColor = function () {
	return '';
};
SplitWindow.prototype.setPullBackgroundColor = function () {
};
SplitWindow.prototype.getTransform = function () {
	return {};
};
SplitWindow.prototype.setTransform = function () {
};
SplitWindow.prototype.getViewShadowRadius = function () {
	return 0;
};
SplitWindow.prototype.setViewShadowRadius = function () {
};
SplitWindow.prototype.getViewShadowColor = function () {
	return '';
};
SplitWindow.prototype.setViewShadowColor = function () {
};
SplitWindow.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
SplitWindow.prototype.setViewShadowOffset = function () {
};
SplitWindow.prototype.getHorizontalWrap = function () {
	return true;
};
SplitWindow.prototype.setHorizontalWrap = function () {
};
SplitWindow.prototype.getZIndex = function () {
	return 0;
};
SplitWindow.prototype.setZIndex = function () {
};
SplitWindow.prototype.getBackgroundColor = function () {
	return '';
};
SplitWindow.prototype.setBackgroundColor = function () {
};
SplitWindow.prototype.getBorderColor = function () {
	return '';
};
SplitWindow.prototype.setBorderColor = function () {
};
SplitWindow.prototype.getBorderRadius = function () {
	return 0;
};
SplitWindow.prototype.setBorderRadius = function () {
};
SplitWindow.prototype.getBorderWidth = function () {
	return 0;
};
SplitWindow.prototype.setBorderWidth = function () {
};
SplitWindow.prototype.getBottom = function () {
	return '';
};
SplitWindow.prototype.setBottom = function () {
};
SplitWindow.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
SplitWindow.prototype.setCenter = function () {
};
SplitWindow.prototype.getChildren = function () {
	return [];
};
SplitWindow.prototype.getHeight = function () {
	return '';
};
SplitWindow.prototype.setHeight = function () {
};
SplitWindow.prototype.getLayout = function () {
	return '';
};
SplitWindow.prototype.setLayout = function () {
};
SplitWindow.prototype.getLeft = function () {
	return '';
};
SplitWindow.prototype.setLeft = function () {
};
SplitWindow.prototype.getOpacity = function () {
	return 0;
};
SplitWindow.prototype.setOpacity = function () {
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
	return '';
};
SplitWindow.prototype.setRight = function () {
};
SplitWindow.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
SplitWindow.prototype.getTintColor = function () {
	return '';
};
SplitWindow.prototype.setTintColor = function () {
};
SplitWindow.prototype.getTop = function () {
	return '';
};
SplitWindow.prototype.setTop = function () {
};
SplitWindow.prototype.getTouchEnabled = function () {
	return true;
};
SplitWindow.prototype.setTouchEnabled = function () {
};
SplitWindow.prototype.getVisible = function () {
	return true;
};
SplitWindow.prototype.setVisible = function () {
};
SplitWindow.prototype.getWidth = function () {
	return '';
};
SplitWindow.prototype.setWidth = function () {
};
SplitWindow.prototype.getBackButtonTitle = function () {
	return '';
};
SplitWindow.prototype.setBackButtonTitle = function () {
};
SplitWindow.prototype.getBackButtonTitleImage = function () {
	return '';
};
SplitWindow.prototype.setBackButtonTitleImage = function () {
};
SplitWindow.prototype.getBarImage = function () {
	return '';
};
SplitWindow.prototype.setBarImage = function () {
};
SplitWindow.prototype.getIncludeOpaqueBars = function () {
	return true;
};
SplitWindow.prototype.setIncludeOpaqueBars = function () {
};
SplitWindow.prototype.getAutoAdjustScrollViewInsets = function () {
	return true;
};
SplitWindow.prototype.setAutoAdjustScrollViewInsets = function () {
};
SplitWindow.prototype.getLeftNavButton = function () {
	return {};
};
SplitWindow.prototype.setLeftNavButton = function () {
};
SplitWindow.prototype.getLeftNavButtons = function () {
	return [];
};
SplitWindow.prototype.setLeftNavButtons = function () {
};
SplitWindow.prototype.getOrientation = function () {
	return 0;
};
SplitWindow.prototype.getRightNavButton = function () {
	return {};
};
SplitWindow.prototype.setRightNavButton = function () {
};
SplitWindow.prototype.getRightNavButtons = function () {
	return [];
};
SplitWindow.prototype.setRightNavButtons = function () {
};
SplitWindow.prototype.getShadowImage = function () {
	return '';
};
SplitWindow.prototype.setShadowImage = function () {
};
SplitWindow.prototype.getStatusBarStyle = function () {
	return 0;
};
SplitWindow.prototype.setStatusBarStyle = function () {
};
SplitWindow.prototype.getTabBarHidden = function () {
	return true;
};
SplitWindow.prototype.setTabBarHidden = function () {
};
SplitWindow.prototype.getTitle = function () {
	return '';
};
SplitWindow.prototype.setTitle = function () {
};
SplitWindow.prototype.getTitleControl = function () {
	return {};
};
SplitWindow.prototype.setTitleControl = function () {
};
SplitWindow.prototype.getTitleImage = function () {
	return '';
};
SplitWindow.prototype.setTitleImage = function () {
};
SplitWindow.prototype.getTitlePrompt = function () {
	return '';
};
SplitWindow.prototype.setTitlePrompt = function () {
};
SplitWindow.prototype.getTitleid = function () {
	return '';
};
SplitWindow.prototype.setTitleid = function () {
};
SplitWindow.prototype.getTitlepromptid = function () {
	return '';
};
SplitWindow.prototype.setTitlepromptid = function () {
};
SplitWindow.prototype.getToolbar = function () {
	return [];
};
SplitWindow.prototype.setToolbar = function () {
};
SplitWindow.prototype.getUrl = function () {
	throw new Error('Ti.UI.iOS.SplitWindow.getUrl was deprecated, since 3.5.0');
};
SplitWindow.prototype.setUrl = function () {
	throw new Error('Ti.UI.iOS.SplitWindow.setUrl was deprecated, since 3.5.0');
};
SplitWindow.prototype.getBarColor = function () {
	return '';
};
SplitWindow.prototype.setBarColor = function () {
};
SplitWindow.prototype.getExtendEdges = function () {
	return 0;
};
SplitWindow.prototype.setExtendEdges = function () {
};
SplitWindow.prototype.getFullscreen = function () {
	return true;
};
SplitWindow.prototype.setFullscreen = function () {
};
SplitWindow.prototype.getHideShadow = function () {
	return true;
};
SplitWindow.prototype.setHideShadow = function () {
};
SplitWindow.prototype.getModal = function () {
	return true;
};
SplitWindow.prototype.setModal = function () {
};
SplitWindow.prototype.getNavBarHidden = function () {
	return true;
};
SplitWindow.prototype.setNavBarHidden = function () {
};
SplitWindow.prototype.getNavTintColor = function () {
	return '';
};
SplitWindow.prototype.setNavTintColor = function () {
};
SplitWindow.prototype.getOrientationModes = function () {
	return 0;
};
SplitWindow.prototype.setOrientationModes = function () {
};
SplitWindow.prototype.getTitleAttributes = function () {
	return {};
};
SplitWindow.prototype.setTitleAttributes = function () {
};
SplitWindow.prototype.getTranslucent = function () {
	return true;
};
SplitWindow.prototype.setTranslucent = function () {
};
SplitWindow.prototype.getDetailView = function () {
	return {};
};
SplitWindow.prototype.setDetailView = function () {
};
SplitWindow.prototype.getMasterView = function () {
	return {};
};
SplitWindow.prototype.setMasterView = function () {
};
SplitWindow.prototype.getShowMasterInPortrait = function () {
	return true;
};
SplitWindow.prototype.setShowMasterInPortrait = function () {
};
SplitWindow.prototype.getMasterIsOverlayed = function () {
	return true;
};
SplitWindow.prototype.setMasterIsOverlayed = function () {
};
SplitWindow.prototype.getPortraitSplit = function () {
	return 0;
};
SplitWindow.prototype.setPortraitSplit = function () {
};
SplitWindow.prototype.getLandscapeSplit = function () {
	return 0;
};
SplitWindow.prototype.setLandscapeSplit = function () {
};
module.exports = function (properties) {
	return new SplitWindow(properties);
};