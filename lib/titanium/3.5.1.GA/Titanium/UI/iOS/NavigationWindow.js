function NavigationWindow(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.iOS.NavigationWindow';
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
};
NavigationWindow.prototype.fireEvent = function () {
};
NavigationWindow.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
NavigationWindow.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
NavigationWindow.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
NavigationWindow.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
NavigationWindow.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
NavigationWindow.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
NavigationWindow.prototype.getApiName = function () {
	return this.apiName;
};
NavigationWindow.prototype.getAutoAdjustScrollViewInsets = function (property) {
	this.autoAdjustScrollViewInsets = property;
};
NavigationWindow.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
NavigationWindow.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
NavigationWindow.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
NavigationWindow.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
NavigationWindow.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
NavigationWindow.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
NavigationWindow.prototype.getBorderColor = function () {
	return this.borderColor;
};
NavigationWindow.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
NavigationWindow.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
NavigationWindow.prototype.getBottom = function () {
	return this.bottom;
};
NavigationWindow.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
NavigationWindow.prototype.getCenter = function () {
	return this.center;
};
NavigationWindow.prototype.getChildren = function () {
	return this.children;
};
NavigationWindow.prototype.getClipMode = function () {
	return this.clipMode;
};
NavigationWindow.prototype.getExtendEdges = function () {
	return this.extendEdges;
};
NavigationWindow.prototype.getFullscreen = function () {
	return this.fullscreen;
};
NavigationWindow.prototype.getHeight = function () {
	return this.height;
};
NavigationWindow.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
NavigationWindow.prototype.getIncludeOpaqueBars = function () {
	return this.includeOpaqueBars;
};
NavigationWindow.prototype.getLayout = function () {
	return this.layout;
};
NavigationWindow.prototype.getLeft = function () {
	return this.left;
};
NavigationWindow.prototype.getLeftNavButtons = function () {
	return this.leftNavButtons;
};
NavigationWindow.prototype.getModal = function () {
	return this.modal;
};
NavigationWindow.prototype.getOpacity = function () {
	return this.opacity;
};
NavigationWindow.prototype.getOrientation = function () {
	return this.orientation;
};
NavigationWindow.prototype.getOrientationModes = function () {
	return this.orientationModes;
};
NavigationWindow.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
NavigationWindow.prototype.getRect = function () {
	return this.rect;
};
NavigationWindow.prototype.getRight = function () {
	return this.right;
};
NavigationWindow.prototype.getRightNavButtons = function () {
	return this.rightNavButtons;
};
NavigationWindow.prototype.getSize = function () {
	return this.size;
};
NavigationWindow.prototype.getStatusBarStyle = function () {
	return this.statusBarStyle;
};
NavigationWindow.prototype.getTintColor = function () {
	return this.tintColor;
};
NavigationWindow.prototype.getTitleAttributes = function () {
	return this.titleAttributes;
};
NavigationWindow.prototype.getTop = function () {
	return this.top;
};
NavigationWindow.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
NavigationWindow.prototype.getTransform = function () {
	return this.transform;
};
NavigationWindow.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
NavigationWindow.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
NavigationWindow.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
NavigationWindow.prototype.getVisible = function () {
	return this.visible;
};
NavigationWindow.prototype.getWidth = function () {
	return this.width;
};
NavigationWindow.prototype.getWindow = function () {
	return this.window;
};
NavigationWindow.prototype.getZIndex = function () {
	return this.zIndex;
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
NavigationWindow.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
NavigationWindow.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
NavigationWindow.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
NavigationWindow.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
NavigationWindow.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
NavigationWindow.prototype.setAutoAdjustScrollViewInsets = function (property) {
	this.autoAdjustScrollViewInsets = property;
};
NavigationWindow.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
NavigationWindow.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
NavigationWindow.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
NavigationWindow.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
NavigationWindow.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
NavigationWindow.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
NavigationWindow.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
NavigationWindow.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
NavigationWindow.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
NavigationWindow.prototype.setBottom = function (property) {
	this.bottom = property;
};
NavigationWindow.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
NavigationWindow.prototype.setCenter = function (property) {
	this.center = property;
};
NavigationWindow.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
NavigationWindow.prototype.setExtendEdges = function (property) {
	this.extendEdges = property;
};
NavigationWindow.prototype.setFullscreen = function (property) {
	this.fullscreen = property;
};
NavigationWindow.prototype.setHeight = function (property) {
	this.height = property;
};
NavigationWindow.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
NavigationWindow.prototype.setIncludeOpaqueBars = function (property) {
	this.includeOpaqueBars = property;
};
NavigationWindow.prototype.setLayout = function (property) {
	this.layout = property;
};
NavigationWindow.prototype.setLeft = function (property) {
	this.left = property;
};
NavigationWindow.prototype.setLeftNavButtons = function (property) {
	this.leftNavButtons = property;
};
NavigationWindow.prototype.setModal = function (property) {
	this.modal = property;
};
NavigationWindow.prototype.setOpacity = function (property) {
	this.opacity = property;
};
NavigationWindow.prototype.setOrientationModes = function (property) {
	this.orientationModes = property;
};
NavigationWindow.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
NavigationWindow.prototype.setRight = function (property) {
	this.right = property;
};
NavigationWindow.prototype.setRightNavButtons = function (property) {
	this.rightNavButtons = property;
};
NavigationWindow.prototype.setStatusBarStyle = function (property) {
	this.statusBarStyle = property;
};
NavigationWindow.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
NavigationWindow.prototype.setTitleAttributes = function (property) {
	this.titleAttributes = property;
};
NavigationWindow.prototype.setTop = function (property) {
	this.top = property;
};
NavigationWindow.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
NavigationWindow.prototype.setTransform = function (property) {
	this.transform = property;
};
NavigationWindow.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
NavigationWindow.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
NavigationWindow.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
NavigationWindow.prototype.setVisible = function (property) {
	this.visible = property;
};
NavigationWindow.prototype.setWidth = function (property) {
	this.width = property;
};
NavigationWindow.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
NavigationWindow.prototype.show = function () {
};
NavigationWindow.prototype.showNavBar = function () {
};
NavigationWindow.prototype.startLayout = function () {
};
NavigationWindow.prototype.toImage = function () {
	return {};
};
NavigationWindow.prototype.updateLayout = function () {
};
module.exports = function (properties) {
	return new NavigationWindow(properties);
};