function AdView(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.adSize = properties.adSize || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.iOS.AdView';
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
	this.height = properties.height || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.opacity = properties.opacity || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.size = properties.size || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;
	return this;
}
AdView.prototype.add = function () {
};
AdView.prototype.addEventListener = function () {
};
AdView.prototype.animate = function () {
};
AdView.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
AdView.prototype.cancelAction = function () {
};
AdView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
AdView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.iOS.AdView.finishLayout was deprecated, since 3.0.0');
};
AdView.prototype.fireEvent = function () {
};
AdView.prototype.getAccessibilityHidden = function () {
	return true;
};
AdView.prototype.getAccessibilityHint = function () {
	return '';
};
AdView.prototype.getAccessibilityLabel = function () {
	return '';
};
AdView.prototype.getAccessibilityValue = function () {
	return '';
};
AdView.prototype.getAdSize = function () {
	return '';
};
AdView.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
AdView.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
AdView.prototype.getApiName = function () {
	return '';
};
AdView.prototype.getBackgroundColor = function () {
	return '';
};
AdView.prototype.getBackgroundGradient = function () {
	return {};
};
AdView.prototype.getBackgroundImage = function () {
	return '';
};
AdView.prototype.getBackgroundLeftCap = function () {
	return 0;
};
AdView.prototype.getBackgroundRepeat = function () {
	return true;
};
AdView.prototype.getBackgroundTopCap = function () {
	return 0;
};
AdView.prototype.getBorderColor = function () {
	return '';
};
AdView.prototype.getBorderRadius = function () {
	return 0;
};
AdView.prototype.getBorderWidth = function () {
	return 0;
};
AdView.prototype.getBottom = function () {
	return 0;
};
AdView.prototype.getBubbleParent = function () {
	return true;
};
AdView.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
AdView.prototype.getChildren = function () {
	return [];
};
AdView.prototype.getClipMode = function () {
	return 0;
};
AdView.prototype.getHeight = function () {
	return 0;
};
AdView.prototype.getHorizontalWrap = function () {
	return true;
};
AdView.prototype.getLayout = function () {
	return '';
};
AdView.prototype.getLeft = function () {
	return 0;
};
AdView.prototype.getOpacity = function () {
	return 0;
};
AdView.prototype.getPullBackgroundColor = function () {
	return '';
};
AdView.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
AdView.prototype.getRight = function () {
	return 0;
};
AdView.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
AdView.prototype.getTintColor = function () {
	return '';
};
AdView.prototype.getTop = function () {
	return 0;
};
AdView.prototype.getTouchEnabled = function () {
	return true;
};
AdView.prototype.getTransform = function () {
	return {};
};
AdView.prototype.getViewShadowColor = function () {
	return '';
};
AdView.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
AdView.prototype.getViewShadowRadius = function () {
	return 0;
};
AdView.prototype.getVisible = function () {
	return true;
};
AdView.prototype.getWidth = function () {
	return 0;
};
AdView.prototype.getZIndex = function () {
	return 0;
};
AdView.prototype.hide = function () {
};
AdView.prototype.remove = function () {
};
AdView.prototype.removeAllChildren = function () {
};
AdView.prototype.removeEventListener = function () {
};
AdView.prototype.setAccessibilityHidden = function () {
};
AdView.prototype.setAccessibilityHint = function () {
};
AdView.prototype.setAccessibilityLabel = function () {
};
AdView.prototype.setAccessibilityValue = function () {
};
AdView.prototype.setAdSize = function () {
};
AdView.prototype.setAnchorPoint = function () {
};
AdView.prototype.setBackgroundColor = function () {
};
AdView.prototype.setBackgroundGradient = function () {
};
AdView.prototype.setBackgroundImage = function () {
};
AdView.prototype.setBackgroundLeftCap = function () {
};
AdView.prototype.setBackgroundRepeat = function () {
};
AdView.prototype.setBackgroundTopCap = function () {
};
AdView.prototype.setBorderColor = function () {
};
AdView.prototype.setBorderRadius = function () {
};
AdView.prototype.setBorderWidth = function () {
};
AdView.prototype.setBottom = function () {
};
AdView.prototype.setBubbleParent = function () {
};
AdView.prototype.setCenter = function () {
};
AdView.prototype.setClipMode = function () {
};
AdView.prototype.setHeight = function () {
};
AdView.prototype.setHorizontalWrap = function () {
};
AdView.prototype.setLayout = function () {
};
AdView.prototype.setLeft = function () {
};
AdView.prototype.setOpacity = function () {
};
AdView.prototype.setPullBackgroundColor = function () {
};
AdView.prototype.setRight = function () {
};
AdView.prototype.setTintColor = function () {
};
AdView.prototype.setTop = function () {
};
AdView.prototype.setTouchEnabled = function () {
};
AdView.prototype.setTransform = function () {
};
AdView.prototype.setViewShadowColor = function () {
};
AdView.prototype.setViewShadowOffset = function () {
};
AdView.prototype.setViewShadowRadius = function () {
};
AdView.prototype.setVisible = function () {
};
AdView.prototype.setWidth = function () {
};
AdView.prototype.setZIndex = function () {
};
AdView.prototype.show = function () {
};
AdView.prototype.startLayout = function () {
	throw new Error('Ti.UI.iOS.AdView.startLayout was deprecated, since 3.0.0');
};
AdView.prototype.toImage = function () {
	return {};
};
AdView.prototype.updateLayout = function () {
	throw new Error('Ti.UI.iOS.AdView.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new AdView(properties);
};