function TabbedBar(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.TabbedBar';
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
	this.index = properties.index || undefined;
	this.labels = properties.labels || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.opacity = properties.opacity || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.size = properties.size || undefined;
	this.style = properties.style || undefined;
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
TabbedBar.prototype.add = function () {
};
TabbedBar.prototype.addEventListener = function () {
};
TabbedBar.prototype.animate = function () {
};
TabbedBar.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
TabbedBar.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
TabbedBar.prototype.finishLayout = function () {
};
TabbedBar.prototype.fireEvent = function () {
};
TabbedBar.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
TabbedBar.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
TabbedBar.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
TabbedBar.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
TabbedBar.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
TabbedBar.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
TabbedBar.prototype.getApiName = function () {
	return this.apiName;
};
TabbedBar.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
TabbedBar.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
TabbedBar.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
TabbedBar.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
TabbedBar.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
TabbedBar.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
TabbedBar.prototype.getBorderColor = function () {
	return this.borderColor;
};
TabbedBar.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
TabbedBar.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
TabbedBar.prototype.getBottom = function () {
	return this.bottom;
};
TabbedBar.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
TabbedBar.prototype.getCenter = function () {
	return this.center;
};
TabbedBar.prototype.getChildren = function () {
	return this.children;
};
TabbedBar.prototype.getClipMode = function () {
	return this.clipMode;
};
TabbedBar.prototype.getHeight = function () {
	return this.height;
};
TabbedBar.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
TabbedBar.prototype.getIndex = function () {
	return this.index;
};
TabbedBar.prototype.getLabels = function () {
	return this.labels;
};
TabbedBar.prototype.getLayout = function () {
	return this.layout;
};
TabbedBar.prototype.getLeft = function () {
	return this.left;
};
TabbedBar.prototype.getOpacity = function () {
	return this.opacity;
};
TabbedBar.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
TabbedBar.prototype.getRect = function () {
	return this.rect;
};
TabbedBar.prototype.getRight = function () {
	return this.right;
};
TabbedBar.prototype.getSize = function () {
	return this.size;
};
TabbedBar.prototype.getStyle = function () {
	return this.style;
};
TabbedBar.prototype.getTintColor = function () {
	return this.tintColor;
};
TabbedBar.prototype.getTop = function () {
	return this.top;
};
TabbedBar.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
TabbedBar.prototype.getTransform = function () {
	return this.transform;
};
TabbedBar.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
TabbedBar.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
TabbedBar.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
TabbedBar.prototype.getVisible = function () {
	return this.visible;
};
TabbedBar.prototype.getWidth = function () {
	return this.width;
};
TabbedBar.prototype.getZIndex = function () {
	return this.zIndex;
};
TabbedBar.prototype.hide = function () {
};
TabbedBar.prototype.remove = function () {
};
TabbedBar.prototype.removeAllChildren = function () {
};
TabbedBar.prototype.removeEventListener = function () {
};
TabbedBar.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
TabbedBar.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
TabbedBar.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
TabbedBar.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
TabbedBar.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
TabbedBar.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
TabbedBar.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
TabbedBar.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
TabbedBar.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
TabbedBar.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
TabbedBar.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
TabbedBar.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
TabbedBar.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
TabbedBar.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
TabbedBar.prototype.setBottom = function (property) {
	this.bottom = property;
};
TabbedBar.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
TabbedBar.prototype.setCenter = function (property) {
	this.center = property;
};
TabbedBar.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
TabbedBar.prototype.setHeight = function (property) {
	this.height = property;
};
TabbedBar.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
TabbedBar.prototype.setIndex = function (property) {
	this.index = property;
};
TabbedBar.prototype.setLabels = function (property) {
	this.labels = property;
};
TabbedBar.prototype.setLayout = function (property) {
	this.layout = property;
};
TabbedBar.prototype.setLeft = function (property) {
	this.left = property;
};
TabbedBar.prototype.setOpacity = function (property) {
	this.opacity = property;
};
TabbedBar.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
TabbedBar.prototype.setRight = function (property) {
	this.right = property;
};
TabbedBar.prototype.setStyle = function (property) {
	this.style = property;
};
TabbedBar.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
TabbedBar.prototype.setTop = function (property) {
	this.top = property;
};
TabbedBar.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
TabbedBar.prototype.setTransform = function (property) {
	this.transform = property;
};
TabbedBar.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
TabbedBar.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
TabbedBar.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
TabbedBar.prototype.setVisible = function (property) {
	this.visible = property;
};
TabbedBar.prototype.setWidth = function (property) {
	this.width = property;
};
TabbedBar.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
TabbedBar.prototype.show = function () {
};
TabbedBar.prototype.startLayout = function () {
};
TabbedBar.prototype.toImage = function () {
	return {};
};
TabbedBar.prototype.updateLayout = function () {
};
module.exports = function (properties) {
	return new TabbedBar(properties);
};