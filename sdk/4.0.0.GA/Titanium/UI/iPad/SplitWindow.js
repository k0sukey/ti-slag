function SplitWindow(properties) {
	properties = properties || {};

	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.iPad.SplitWindow';
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
	this.url = properties.url || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;

	return this;
}

SplitWindow.prototype.add = function(){};

SplitWindow.prototype.addEventListener = function(){};

SplitWindow.prototype.animate = function(){};

SplitWindow.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

SplitWindow.prototype.close = function(){};

SplitWindow.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

SplitWindow.prototype.finishLayout = function(){};

SplitWindow.prototype.fireEvent = function(){};

SplitWindow.prototype.getAccessibilityHidden = function(){ return this.accessibilityHidden; };

SplitWindow.prototype.getAccessibilityHint = function(){ return this.accessibilityHint; };

SplitWindow.prototype.getAccessibilityLabel = function(){ return this.accessibilityLabel; };

SplitWindow.prototype.getAccessibilityValue = function(){ return this.accessibilityValue; };

SplitWindow.prototype.getAnchorPoint = function(){ return this.anchorPoint; };

SplitWindow.prototype.getAnimatedCenter = function(){ return this.animatedCenter; };

SplitWindow.prototype.getApiName = function(){ return this.apiName; };

SplitWindow.prototype.getAutoAdjustScrollViewInsets = function(property){ this.autoAdjustScrollViewInsets = property; };

SplitWindow.prototype.getBackButtonTitle = function(){ return this.backButtonTitle; };

SplitWindow.prototype.getBackButtonTitleImage = function(){ return this.backButtonTitleImage; };

SplitWindow.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

SplitWindow.prototype.getBackgroundGradient = function(){ return this.backgroundGradient; };

SplitWindow.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

SplitWindow.prototype.getBackgroundLeftCap = function(){ return this.backgroundLeftCap; };

SplitWindow.prototype.getBackgroundRepeat = function(){ return this.backgroundRepeat; };

SplitWindow.prototype.getBackgroundTopCap = function(){ return this.backgroundTopCap; };

SplitWindow.prototype.getBarColor = function(){ return this.barColor; };

SplitWindow.prototype.getBarImage = function(){ return this.barImage; };

SplitWindow.prototype.getBorderColor = function(){ return this.borderColor; };

SplitWindow.prototype.getBorderRadius = function(){ return this.borderRadius; };

SplitWindow.prototype.getBorderWidth = function(){ return this.borderWidth; };

SplitWindow.prototype.getBottom = function(){ return this.bottom; };

SplitWindow.prototype.getBubbleParent = function(){ return this.bubbleParent; };

SplitWindow.prototype.getCenter = function(){ return this.center; };

SplitWindow.prototype.getChildren = function(){ return this.children; };

SplitWindow.prototype.getClipMode = function(){ return this.clipMode; };

SplitWindow.prototype.getDetailView = function(){ return this.detailView; };

SplitWindow.prototype.getExtendEdges = function(){ return this.extendEdges; };

SplitWindow.prototype.getFullscreen = function(){ return this.fullscreen; };

SplitWindow.prototype.getHeight = function(){ return this.height; };

SplitWindow.prototype.getHideShadow = function(){ return this.hideShadow; };

SplitWindow.prototype.getHorizontalWrap = function(){ return this.horizontalWrap; };

SplitWindow.prototype.getIncludeOpaqueBars = function(){ return this.includeOpaqueBars; };

SplitWindow.prototype.getLayout = function(){ return this.layout; };

SplitWindow.prototype.getLeft = function(){ return this.left; };

SplitWindow.prototype.getLeftNavButton = function(){ return this.leftNavButton; };

SplitWindow.prototype.getLeftNavButtons = function(){ return this.leftNavButtons; };

SplitWindow.prototype.getMasterView = function(){ return this.masterView; };

SplitWindow.prototype.getModal = function(){ return this.modal; };

SplitWindow.prototype.getNavBarHidden = function(){ return this.navBarHidden; };

SplitWindow.prototype.getNavTintColor = function(){ return this.navTintColor; };

SplitWindow.prototype.getOpacity = function(){ return this.opacity; };

SplitWindow.prototype.getOrientation = function(){ return this.orientation; };

SplitWindow.prototype.getOrientationModes = function(){ return this.orientationModes; };

SplitWindow.prototype.getPullBackgroundColor = function(){ return this.pullBackgroundColor; };

SplitWindow.prototype.getRect = function(){ return this.rect; };

SplitWindow.prototype.getRight = function(){ return this.right; };

SplitWindow.prototype.getRightNavButton = function(){ return this.rightNavButton; };

SplitWindow.prototype.getRightNavButtons = function(){ return this.rightNavButtons; };

SplitWindow.prototype.getShadowImage = function(){ return this.shadowImage; };

SplitWindow.prototype.getShowMasterInPortrait = function(){ return this.showMasterInPortrait; };

SplitWindow.prototype.getSize = function(){ return this.size; };

SplitWindow.prototype.getStatusBarStyle = function(){ return this.statusBarStyle; };

SplitWindow.prototype.getTabBarHidden = function(){ return this.tabBarHidden; };

SplitWindow.prototype.getTintColor = function(){ return this.tintColor; };

SplitWindow.prototype.getTitle = function(){ return this.title; };

SplitWindow.prototype.getTitleAttributes = function(){ return this.titleAttributes; };

SplitWindow.prototype.getTitleControl = function(){ return this.titleControl; };

SplitWindow.prototype.getTitleImage = function(){ return this.titleImage; };

SplitWindow.prototype.getTitlePrompt = function(){ return this.titlePrompt; };

SplitWindow.prototype.getTitleid = function(){ return this.titleid; };

SplitWindow.prototype.getTitlepromptid = function(){ return this.titlepromptid; };

SplitWindow.prototype.getToolbar = function(){ return this.toolbar; };

SplitWindow.prototype.getTop = function(){ return this.top; };

SplitWindow.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

SplitWindow.prototype.getTransform = function(){ return this.transform; };

SplitWindow.prototype.getTranslucent = function(){ return this.translucent; };

SplitWindow.prototype.getUrl = function(){ return this.url; };

SplitWindow.prototype.getViewShadowColor = function(){ return this.viewShadowColor; };

SplitWindow.prototype.getViewShadowOffset = function(){ return this.viewShadowOffset; };

SplitWindow.prototype.getViewShadowRadius = function(){ return this.viewShadowRadius; };

SplitWindow.prototype.getVisible = function(){ return this.visible; };

SplitWindow.prototype.getWidth = function(){ return this.width; };

SplitWindow.prototype.getZIndex = function(){ return this.zIndex; };

SplitWindow.prototype.hide = function(){};

SplitWindow.prototype.hideNavBar = function(){};

SplitWindow.prototype.hideTabBar = function(){};

SplitWindow.prototype.open = function(){};

SplitWindow.prototype.remove = function(){};

SplitWindow.prototype.removeAllChildren = function(){};

SplitWindow.prototype.removeEventListener = function(){};

SplitWindow.prototype.setAccessibilityHidden = function(property){ this.accessibilityHidden = property; };

SplitWindow.prototype.setAccessibilityHint = function(property){ this.accessibilityHint = property; };

SplitWindow.prototype.setAccessibilityLabel = function(property){ this.accessibilityLabel = property; };

SplitWindow.prototype.setAccessibilityValue = function(property){ this.accessibilityValue = property; };

SplitWindow.prototype.setAnchorPoint = function(property){ this.anchorPoint = property; };

SplitWindow.prototype.setAutoAdjustScrollViewInsets = function(property){ this.autoAdjustScrollViewInsets = property; };

SplitWindow.prototype.setBackButtonTitle = function(property){ this.backButtonTitle = property; };

SplitWindow.prototype.setBackButtonTitleImage = function(property){ this.backButtonTitleImage = property; };

SplitWindow.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

SplitWindow.prototype.setBackgroundGradient = function(property){ this.backgroundGradient = property; };

SplitWindow.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

SplitWindow.prototype.setBackgroundLeftCap = function(property){ this.backgroundLeftCap = property; };

SplitWindow.prototype.setBackgroundRepeat = function(property){ this.backgroundRepeat = property; };

SplitWindow.prototype.setBackgroundTopCap = function(property){ this.backgroundTopCap = property; };

SplitWindow.prototype.setBarColor = function(property){ this.barColor = property; };

SplitWindow.prototype.setBarImage = function(property){ this.barImage = property; };

SplitWindow.prototype.setBorderColor = function(property){ this.borderColor = property; };

SplitWindow.prototype.setBorderRadius = function(property){ this.borderRadius = property; };

SplitWindow.prototype.setBorderWidth = function(property){ this.borderWidth = property; };

SplitWindow.prototype.setBottom = function(property){ this.bottom = property; };

SplitWindow.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

SplitWindow.prototype.setCenter = function(property){ this.center = property; };

SplitWindow.prototype.setClipMode = function(property){ this.clipMode = property; };

SplitWindow.prototype.setExtendEdges = function(property){ this.extendEdges = property; };

SplitWindow.prototype.setFullscreen = function(property){ this.fullscreen = property; };

SplitWindow.prototype.setHeight = function(property){ this.height = property; };

SplitWindow.prototype.setHideShadow = function(property){ this.hideShadow = property; };

SplitWindow.prototype.setHorizontalWrap = function(property){ this.horizontalWrap = property; };

SplitWindow.prototype.setIncludeOpaqueBars = function(property){ this.includeOpaqueBars = property; };

SplitWindow.prototype.setLayout = function(property){ this.layout = property; };

SplitWindow.prototype.setLeft = function(property){ this.left = property; };

SplitWindow.prototype.setLeftNavButton = function(property){ this.leftNavButton = property; };

SplitWindow.prototype.setLeftNavButtons = function(property){ this.leftNavButtons = property; };

SplitWindow.prototype.setModal = function(property){ this.modal = property; };

SplitWindow.prototype.setNavBarHidden = function(property){ this.navBarHidden = property; };

SplitWindow.prototype.setNavTintColor = function(property){ this.navTintColor = property; };

SplitWindow.prototype.setOpacity = function(property){ this.opacity = property; };

SplitWindow.prototype.setOrientationModes = function(property){ this.orientationModes = property; };

SplitWindow.prototype.setPullBackgroundColor = function(property){ this.pullBackgroundColor = property; };

SplitWindow.prototype.setRight = function(property){ this.right = property; };

SplitWindow.prototype.setRightNavButton = function(property){ this.rightNavButton = property; };

SplitWindow.prototype.setRightNavButtons = function(property){ this.rightNavButtons = property; };

SplitWindow.prototype.setShadowImage = function(property){ this.shadowImage = property; };

SplitWindow.prototype.setShowMasterInPortrait = function(property){ this.showMasterInPortrait = property; };

SplitWindow.prototype.setStatusBarStyle = function(property){ this.statusBarStyle = property; };

SplitWindow.prototype.setTabBarHidden = function(property){ this.tabBarHidden = property; };

SplitWindow.prototype.setTintColor = function(property){ this.tintColor = property; };

SplitWindow.prototype.setTitle = function(property){ this.title = property; };

SplitWindow.prototype.setTitleAttributes = function(property){ this.titleAttributes = property; };

SplitWindow.prototype.setTitleControl = function(property){ this.titleControl = property; };

SplitWindow.prototype.setTitleImage = function(property){ this.titleImage = property; };

SplitWindow.prototype.setTitlePrompt = function(property){ this.titlePrompt = property; };

SplitWindow.prototype.setTitleid = function(property){ this.titleid = property; };

SplitWindow.prototype.setTitlepromptid = function(property){ this.titlepromptid = property; };

SplitWindow.prototype.setToolbar = function(property){ this.toolbar = property; };

SplitWindow.prototype.setTop = function(property){ this.top = property; };

SplitWindow.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

SplitWindow.prototype.setTransform = function(property){ this.transform = property; };

SplitWindow.prototype.setTranslucent = function(property){ this.translucent = property; };

SplitWindow.prototype.setViewShadowColor = function(property){ this.viewShadowColor = property; };

SplitWindow.prototype.setViewShadowOffset = function(property){ this.viewShadowOffset = property; };

SplitWindow.prototype.setViewShadowRadius = function(property){ this.viewShadowRadius = property; };

SplitWindow.prototype.setVisible = function(property){ this.visible = property; };

SplitWindow.prototype.setWidth = function(property){ this.width = property; };

SplitWindow.prototype.setZIndex = function(property){ this.zIndex = property; };

SplitWindow.prototype.show = function(){};

SplitWindow.prototype.showNavBar = function(){};

SplitWindow.prototype.startLayout = function(){};

SplitWindow.prototype.toImage = function(){ return {}; };

SplitWindow.prototype.updateLayout = function(){};

module.exports = function(properties){ return new SplitWindow(properties); };