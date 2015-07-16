function NavigationWindow(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iOS.NavigationWindow';
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
	this.includeOpaqueBars = properties.includeOpaqueBars || true;
	this.autoAdjustScrollViewInsets = properties.autoAdjustScrollViewInsets || true;
	this.leftNavButtons = properties.leftNavButtons || [];
	this.orientation = properties.orientation || 0;
	this.rightNavButtons = properties.rightNavButtons || [];
	this.statusBarStyle = properties.statusBarStyle || 0;
	this.extendEdges = properties.extendEdges || 0;
	this.fullscreen = properties.fullscreen || true;
	this.modal = properties.modal || true;
	this.orientationModes = properties.orientationModes || 0;
	this.titleAttributes = properties.titleAttributes || {};
	this.window = properties.window || {};
	return this;
}
NavigationWindow.prototype.addEventListener = function () {
};
NavigationWindow.prototype.removeEventListener = function () {
};
NavigationWindow.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
NavigationWindow.prototype.fireEvent = function () {
};
NavigationWindow.prototype.finishLayout = function () {
	throw new Error('Ti.UI.iOS.NavigationWindow.finishLayout was deprecated, since 3.0.0');
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
NavigationWindow.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationWindow.prototype.add = function () {
};
NavigationWindow.prototype.animate = function () {
};
NavigationWindow.prototype.hide = function () {
};
NavigationWindow.prototype.remove = function () {
};
NavigationWindow.prototype.show = function () {
};
NavigationWindow.prototype.hideNavBar = function () {
};
NavigationWindow.prototype.showNavBar = function () {
};
NavigationWindow.prototype.close = function () {
};
NavigationWindow.prototype.open = function () {
};
NavigationWindow.prototype.closeWindow = function () {
};
NavigationWindow.prototype.openWindow = function () {
};
NavigationWindow.prototype.getBubbleParent = function () {
	return true;
};
NavigationWindow.prototype.setBubbleParent = function () {
};
NavigationWindow.prototype.getApiName = function () {
	return '';
};
NavigationWindow.prototype.getAccessibilityHidden = function () {
	return true;
};
NavigationWindow.prototype.setAccessibilityHidden = function () {
};
NavigationWindow.prototype.getAccessibilityHint = function () {
	return '';
};
NavigationWindow.prototype.setAccessibilityHint = function () {
};
NavigationWindow.prototype.getAccessibilityLabel = function () {
	return '';
};
NavigationWindow.prototype.setAccessibilityLabel = function () {
};
NavigationWindow.prototype.getAccessibilityValue = function () {
	return '';
};
NavigationWindow.prototype.setAccessibilityValue = function () {
};
NavigationWindow.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationWindow.prototype.setAnchorPoint = function () {
};
NavigationWindow.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationWindow.prototype.getBackgroundGradient = function () {
	return {};
};
NavigationWindow.prototype.setBackgroundGradient = function () {
};
NavigationWindow.prototype.getBackgroundImage = function () {
	return '';
};
NavigationWindow.prototype.setBackgroundImage = function () {
};
NavigationWindow.prototype.getBackgroundRepeat = function () {
	return true;
};
NavigationWindow.prototype.setBackgroundRepeat = function () {
};
NavigationWindow.prototype.getBackgroundLeftCap = function () {
	return 0;
};
NavigationWindow.prototype.setBackgroundLeftCap = function () {
};
NavigationWindow.prototype.getBackgroundTopCap = function () {
	return 0;
};
NavigationWindow.prototype.setBackgroundTopCap = function () {
};
NavigationWindow.prototype.getClipMode = function () {
	return 0;
};
NavigationWindow.prototype.setClipMode = function () {
};
NavigationWindow.prototype.getPullBackgroundColor = function () {
	return '';
};
NavigationWindow.prototype.setPullBackgroundColor = function () {
};
NavigationWindow.prototype.getTransform = function () {
	return {};
};
NavigationWindow.prototype.setTransform = function () {
};
NavigationWindow.prototype.getViewShadowRadius = function () {
	return 0;
};
NavigationWindow.prototype.setViewShadowRadius = function () {
};
NavigationWindow.prototype.getViewShadowColor = function () {
	return '';
};
NavigationWindow.prototype.setViewShadowColor = function () {
};
NavigationWindow.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationWindow.prototype.setViewShadowOffset = function () {
};
NavigationWindow.prototype.getHorizontalWrap = function () {
	return true;
};
NavigationWindow.prototype.setHorizontalWrap = function () {
};
NavigationWindow.prototype.getZIndex = function () {
	return 0;
};
NavigationWindow.prototype.setZIndex = function () {
};
NavigationWindow.prototype.getBackgroundColor = function () {
	return '';
};
NavigationWindow.prototype.setBackgroundColor = function () {
};
NavigationWindow.prototype.getBorderColor = function () {
	return '';
};
NavigationWindow.prototype.setBorderColor = function () {
};
NavigationWindow.prototype.getBorderRadius = function () {
	return 0;
};
NavigationWindow.prototype.setBorderRadius = function () {
};
NavigationWindow.prototype.getBorderWidth = function () {
	return 0;
};
NavigationWindow.prototype.setBorderWidth = function () {
};
NavigationWindow.prototype.getBottom = function () {
	return '';
};
NavigationWindow.prototype.setBottom = function () {
};
NavigationWindow.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationWindow.prototype.setCenter = function () {
};
NavigationWindow.prototype.getChildren = function () {
	return [];
};
NavigationWindow.prototype.getHeight = function () {
	return '';
};
NavigationWindow.prototype.setHeight = function () {
};
NavigationWindow.prototype.getLayout = function () {
	return '';
};
NavigationWindow.prototype.setLayout = function () {
};
NavigationWindow.prototype.getLeft = function () {
	return '';
};
NavigationWindow.prototype.setLeft = function () {
};
NavigationWindow.prototype.getOpacity = function () {
	return 0;
};
NavigationWindow.prototype.setOpacity = function () {
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
	return '';
};
NavigationWindow.prototype.setRight = function () {
};
NavigationWindow.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
NavigationWindow.prototype.getTintColor = function () {
	return '';
};
NavigationWindow.prototype.setTintColor = function () {
};
NavigationWindow.prototype.getTop = function () {
	return '';
};
NavigationWindow.prototype.setTop = function () {
};
NavigationWindow.prototype.getTouchEnabled = function () {
	return true;
};
NavigationWindow.prototype.setTouchEnabled = function () {
};
NavigationWindow.prototype.getVisible = function () {
	return true;
};
NavigationWindow.prototype.setVisible = function () {
};
NavigationWindow.prototype.getWidth = function () {
	return '';
};
NavigationWindow.prototype.setWidth = function () {
};
NavigationWindow.prototype.getIncludeOpaqueBars = function () {
	return true;
};
NavigationWindow.prototype.setIncludeOpaqueBars = function () {
};
NavigationWindow.prototype.getAutoAdjustScrollViewInsets = function () {
	return true;
};
NavigationWindow.prototype.setAutoAdjustScrollViewInsets = function () {
};
NavigationWindow.prototype.getLeftNavButtons = function () {
	return [];
};
NavigationWindow.prototype.setLeftNavButtons = function () {
};
NavigationWindow.prototype.getOrientation = function () {
	return 0;
};
NavigationWindow.prototype.getRightNavButtons = function () {
	return [];
};
NavigationWindow.prototype.setRightNavButtons = function () {
};
NavigationWindow.prototype.getStatusBarStyle = function () {
	return 0;
};
NavigationWindow.prototype.setStatusBarStyle = function () {
};
NavigationWindow.prototype.getExtendEdges = function () {
	return 0;
};
NavigationWindow.prototype.setExtendEdges = function () {
};
NavigationWindow.prototype.getFullscreen = function () {
	return true;
};
NavigationWindow.prototype.setFullscreen = function () {
};
NavigationWindow.prototype.getModal = function () {
	return true;
};
NavigationWindow.prototype.setModal = function () {
};
NavigationWindow.prototype.getOrientationModes = function () {
	return 0;
};
NavigationWindow.prototype.setOrientationModes = function () {
};
NavigationWindow.prototype.getTitleAttributes = function () {
	return {};
};
NavigationWindow.prototype.setTitleAttributes = function () {
};
NavigationWindow.prototype.getWindow = function () {
	return {};
};
NavigationWindow.prototype.setWindow = function () {
};
module.exports = function (properties) {
	return new NavigationWindow(properties);
};