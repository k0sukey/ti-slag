function NavigationWindow(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.iOS.NavigationWindow';
	this.autoAdjustScrollViewInsets = properties.autoAdjustScrollViewInsets || undefined;
	this.backgroundColor = properties.backgroundColor || undefined;
	this.backgroundGradient = properties.backgroundGradient || undefined;
	this.backgroundImage = properties.backgroundImage || undefined;
	this.backgroundLeftCap = properties.backgroundLeftCap || undefined;
	this.backgroundRepeat = properties.backgroundRepeat || undefined;
	this.backgroundTopCap = properties.backgroundTopCap || undefined;
	this.borderColor = properties.borderColor || undefined;
	this.borderRadius = properties.borderRadius || undefined;
	this.borderWidth = properties.borderWidth || undefined;
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.extendEdges = properties.extendEdges || undefined;
	this.fullscreen = properties.fullscreen || undefined;
	this.height = properties.height || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.includeOpaqueBars = properties.includeOpaqueBars || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.leftNavButtons = properties.leftNavButtons || undefined;
	this.modal = properties.modal || undefined;
	this.opacity = properties.opacity || undefined;
	this.orientation = properties.orientation || undefined;
	this.orientationModes = properties.orientationModes || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.rightNavButtons = properties.rightNavButtons || undefined;
	this.size = properties.size || undefined;
	this.statusBarStyle = properties.statusBarStyle || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.titleAttributes = properties.titleAttributes || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.window = properties.window || undefined;
	this.zIndex = properties.zIndex || undefined;
	return this;
}
NavigationWindow.prototype.add = function () {
};
NavigationWindow.prototype.addEventListener = function () {
};
NavigationWindow.prototype.animate = function () {
};
NavigationWindow.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
NavigationWindow.prototype.close = function () {
};
NavigationWindow.prototype.closeWindow = function () {
};
NavigationWindow.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationWindow.prototype.finishLayout = function () {
	throw new Error('Ti.UI.iOS.NavigationWindow.finishLayout was deprecated, since 3.0.0');
};
NavigationWindow.prototype.fireEvent = function () {
};
NavigationWindow.prototype.getAccessibilityHidden = function () {
	return true;
};
NavigationWindow.prototype.getAccessibilityHint = function () {
	return '';
};
NavigationWindow.prototype.getAccessibilityLabel = function () {
	return '';
};
NavigationWindow.prototype.getAccessibilityValue = function () {
	return '';
};
NavigationWindow.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationWindow.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationWindow.prototype.getApiName = function () {
	return '';
};
NavigationWindow.prototype.getAutoAdjustScrollViewInsets = function () {
	return true;
};
NavigationWindow.prototype.getBackgroundColor = function () {
	return '';
};
NavigationWindow.prototype.getBackgroundGradient = function () {
	return {};
};
NavigationWindow.prototype.getBackgroundImage = function () {
	return '';
};
NavigationWindow.prototype.getBackgroundLeftCap = function () {
	return 0;
};
NavigationWindow.prototype.getBackgroundRepeat = function () {
	return true;
};
NavigationWindow.prototype.getBackgroundTopCap = function () {
	return 0;
};
NavigationWindow.prototype.getBorderColor = function () {
	return '';
};
NavigationWindow.prototype.getBorderRadius = function () {
	return 0;
};
NavigationWindow.prototype.getBorderWidth = function () {
	return 0;
};
NavigationWindow.prototype.getBottom = function () {
	return 0;
};
NavigationWindow.prototype.getBubbleParent = function () {
	return true;
};
NavigationWindow.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationWindow.prototype.getChildren = function () {
	return [];
};
NavigationWindow.prototype.getClipMode = function () {
	return 0;
};
NavigationWindow.prototype.getExtendEdges = function () {
	return 0;
};
NavigationWindow.prototype.getFullscreen = function () {
	return true;
};
NavigationWindow.prototype.getHeight = function () {
	return 0;
};
NavigationWindow.prototype.getHorizontalWrap = function () {
	return true;
};
NavigationWindow.prototype.getIncludeOpaqueBars = function () {
	return true;
};
NavigationWindow.prototype.getLayout = function () {
	return '';
};
NavigationWindow.prototype.getLeft = function () {
	return 0;
};
NavigationWindow.prototype.getLeftNavButtons = function () {
	return [];
};
NavigationWindow.prototype.getModal = function () {
	return true;
};
NavigationWindow.prototype.getOpacity = function () {
	return 0;
};
NavigationWindow.prototype.getOrientation = function () {
	return 0;
};
NavigationWindow.prototype.getOrientationModes = function () {
	return 0;
};
NavigationWindow.prototype.getPullBackgroundColor = function () {
	return '';
};
NavigationWindow.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
NavigationWindow.prototype.getRight = function () {
	return 0;
};
NavigationWindow.prototype.getRightNavButtons = function () {
	return [];
};
NavigationWindow.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
NavigationWindow.prototype.getStatusBarStyle = function () {
	return 0;
};
NavigationWindow.prototype.getTintColor = function () {
	return '';
};
NavigationWindow.prototype.getTitleAttributes = function () {
	return {};
};
NavigationWindow.prototype.getTop = function () {
	return 0;
};
NavigationWindow.prototype.getTouchEnabled = function () {
	return true;
};
NavigationWindow.prototype.getTransform = function () {
	return {};
};
NavigationWindow.prototype.getViewShadowColor = function () {
	return '';
};
NavigationWindow.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationWindow.prototype.getViewShadowRadius = function () {
	return 0;
};
NavigationWindow.prototype.getVisible = function () {
	return true;
};
NavigationWindow.prototype.getWidth = function () {
	return 0;
};
NavigationWindow.prototype.getWindow = function () {
	return {};
};
NavigationWindow.prototype.getZIndex = function () {
	return 0;
};
NavigationWindow.prototype.hide = function () {
};
NavigationWindow.prototype.hideNavBar = function () {
};
NavigationWindow.prototype.open = function () {
};
NavigationWindow.prototype.openWindow = function () {
};
NavigationWindow.prototype.remove = function () {
};
NavigationWindow.prototype.removeEventListener = function () {
};
NavigationWindow.prototype.setAccessibilityHidden = function () {
};
NavigationWindow.prototype.setAccessibilityHint = function () {
};
NavigationWindow.prototype.setAccessibilityLabel = function () {
};
NavigationWindow.prototype.setAccessibilityValue = function () {
};
NavigationWindow.prototype.setAnchorPoint = function () {
};
NavigationWindow.prototype.setAutoAdjustScrollViewInsets = function () {
};
NavigationWindow.prototype.setBackgroundColor = function () {
};
NavigationWindow.prototype.setBackgroundGradient = function () {
};
NavigationWindow.prototype.setBackgroundImage = function () {
};
NavigationWindow.prototype.setBackgroundLeftCap = function () {
};
NavigationWindow.prototype.setBackgroundRepeat = function () {
};
NavigationWindow.prototype.setBackgroundTopCap = function () {
};
NavigationWindow.prototype.setBorderColor = function () {
};
NavigationWindow.prototype.setBorderRadius = function () {
};
NavigationWindow.prototype.setBorderWidth = function () {
};
NavigationWindow.prototype.setBottom = function () {
};
NavigationWindow.prototype.setBubbleParent = function () {
};
NavigationWindow.prototype.setCenter = function () {
};
NavigationWindow.prototype.setClipMode = function () {
};
NavigationWindow.prototype.setExtendEdges = function () {
};
NavigationWindow.prototype.setFullscreen = function () {
};
NavigationWindow.prototype.setHeight = function () {
};
NavigationWindow.prototype.setHorizontalWrap = function () {
};
NavigationWindow.prototype.setIncludeOpaqueBars = function () {
};
NavigationWindow.prototype.setLayout = function () {
};
NavigationWindow.prototype.setLeft = function () {
};
NavigationWindow.prototype.setLeftNavButtons = function () {
};
NavigationWindow.prototype.setModal = function () {
};
NavigationWindow.prototype.setOpacity = function () {
};
NavigationWindow.prototype.setOrientationModes = function () {
};
NavigationWindow.prototype.setPullBackgroundColor = function () {
};
NavigationWindow.prototype.setRight = function () {
};
NavigationWindow.prototype.setRightNavButtons = function () {
};
NavigationWindow.prototype.setStatusBarStyle = function () {
};
NavigationWindow.prototype.setTintColor = function () {
};
NavigationWindow.prototype.setTitleAttributes = function () {
};
NavigationWindow.prototype.setTop = function () {
};
NavigationWindow.prototype.setTouchEnabled = function () {
};
NavigationWindow.prototype.setTransform = function () {
};
NavigationWindow.prototype.setViewShadowColor = function () {
};
NavigationWindow.prototype.setViewShadowOffset = function () {
};
NavigationWindow.prototype.setViewShadowRadius = function () {
};
NavigationWindow.prototype.setVisible = function () {
};
NavigationWindow.prototype.setWidth = function () {
};
NavigationWindow.prototype.setZIndex = function () {
};
NavigationWindow.prototype.show = function () {
};
NavigationWindow.prototype.showNavBar = function () {
};
NavigationWindow.prototype.startLayout = function () {
	throw new Error('Ti.UI.iOS.NavigationWindow.startLayout was deprecated, since 3.0.0');
};
NavigationWindow.prototype.toImage = function () {
	return {};
};
NavigationWindow.prototype.updateLayout = function () {
	throw new Error('Ti.UI.iOS.NavigationWindow.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new NavigationWindow(properties);
};