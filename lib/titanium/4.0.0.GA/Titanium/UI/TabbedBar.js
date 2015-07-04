function TabbedBar(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.TabbedBar';
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
	throw new Error('Ti.UI.TabbedBar.finishLayout was deprecated, since 3.0.0');
};
TabbedBar.prototype.fireEvent = function () {
};
TabbedBar.prototype.getAccessibilityHidden = function () {
	return true;
};
TabbedBar.prototype.getAccessibilityHint = function () {
	return '';
};
TabbedBar.prototype.getAccessibilityLabel = function () {
	return '';
};
TabbedBar.prototype.getAccessibilityValue = function () {
	return '';
};
TabbedBar.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
TabbedBar.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
TabbedBar.prototype.getApiName = function () {
	return '';
};
TabbedBar.prototype.getBackgroundColor = function () {
	return '';
};
TabbedBar.prototype.getBackgroundGradient = function () {
	return {};
};
TabbedBar.prototype.getBackgroundImage = function () {
	return '';
};
TabbedBar.prototype.getBackgroundLeftCap = function () {
	return 0;
};
TabbedBar.prototype.getBackgroundRepeat = function () {
	return true;
};
TabbedBar.prototype.getBackgroundTopCap = function () {
	return 0;
};
TabbedBar.prototype.getBorderColor = function () {
	return '';
};
TabbedBar.prototype.getBorderRadius = function () {
	return 0;
};
TabbedBar.prototype.getBorderWidth = function () {
	return 0;
};
TabbedBar.prototype.getBottom = function () {
	return 0;
};
TabbedBar.prototype.getBubbleParent = function () {
	return true;
};
TabbedBar.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
TabbedBar.prototype.getChildren = function () {
	return [];
};
TabbedBar.prototype.getClipMode = function () {
	return 0;
};
TabbedBar.prototype.getHeight = function () {
	return 0;
};
TabbedBar.prototype.getHorizontalWrap = function () {
	return true;
};
TabbedBar.prototype.getIndex = function () {
	return 0;
};
TabbedBar.prototype.getLabels = function () {
	return '';
};
TabbedBar.prototype.getLayout = function () {
	return '';
};
TabbedBar.prototype.getLeft = function () {
	return 0;
};
TabbedBar.prototype.getOpacity = function () {
	return 0;
};
TabbedBar.prototype.getPullBackgroundColor = function () {
	return '';
};
TabbedBar.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
TabbedBar.prototype.getRight = function () {
	return 0;
};
TabbedBar.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
TabbedBar.prototype.getStyle = function () {
	return 0;
};
TabbedBar.prototype.getTintColor = function () {
	return '';
};
TabbedBar.prototype.getTop = function () {
	return 0;
};
TabbedBar.prototype.getTouchEnabled = function () {
	return true;
};
TabbedBar.prototype.getTransform = function () {
	return {};
};
TabbedBar.prototype.getViewShadowColor = function () {
	return '';
};
TabbedBar.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
TabbedBar.prototype.getViewShadowRadius = function () {
	return 0;
};
TabbedBar.prototype.getVisible = function () {
	return true;
};
TabbedBar.prototype.getWidth = function () {
	return 0;
};
TabbedBar.prototype.getZIndex = function () {
	return 0;
};
TabbedBar.prototype.hide = function () {
};
TabbedBar.prototype.remove = function () {
};
TabbedBar.prototype.removeAllChildren = function () {
};
TabbedBar.prototype.removeEventListener = function () {
};
TabbedBar.prototype.setAccessibilityHidden = function () {
};
TabbedBar.prototype.setAccessibilityHint = function () {
};
TabbedBar.prototype.setAccessibilityLabel = function () {
};
TabbedBar.prototype.setAccessibilityValue = function () {
};
TabbedBar.prototype.setAnchorPoint = function () {
};
TabbedBar.prototype.setBackgroundColor = function () {
};
TabbedBar.prototype.setBackgroundGradient = function () {
};
TabbedBar.prototype.setBackgroundImage = function () {
};
TabbedBar.prototype.setBackgroundLeftCap = function () {
};
TabbedBar.prototype.setBackgroundRepeat = function () {
};
TabbedBar.prototype.setBackgroundTopCap = function () {
};
TabbedBar.prototype.setBorderColor = function () {
};
TabbedBar.prototype.setBorderRadius = function () {
};
TabbedBar.prototype.setBorderWidth = function () {
};
TabbedBar.prototype.setBottom = function () {
};
TabbedBar.prototype.setBubbleParent = function () {
};
TabbedBar.prototype.setCenter = function () {
};
TabbedBar.prototype.setClipMode = function () {
};
TabbedBar.prototype.setHeight = function () {
};
TabbedBar.prototype.setHorizontalWrap = function () {
};
TabbedBar.prototype.setIndex = function () {
};
TabbedBar.prototype.setLabels = function () {
};
TabbedBar.prototype.setLayout = function () {
};
TabbedBar.prototype.setLeft = function () {
};
TabbedBar.prototype.setOpacity = function () {
};
TabbedBar.prototype.setPullBackgroundColor = function () {
};
TabbedBar.prototype.setRight = function () {
};
TabbedBar.prototype.setStyle = function () {
};
TabbedBar.prototype.setTintColor = function () {
};
TabbedBar.prototype.setTop = function () {
};
TabbedBar.prototype.setTouchEnabled = function () {
};
TabbedBar.prototype.setTransform = function () {
};
TabbedBar.prototype.setViewShadowColor = function () {
};
TabbedBar.prototype.setViewShadowOffset = function () {
};
TabbedBar.prototype.setViewShadowRadius = function () {
};
TabbedBar.prototype.setVisible = function () {
};
TabbedBar.prototype.setWidth = function () {
};
TabbedBar.prototype.setZIndex = function () {
};
TabbedBar.prototype.show = function () {
};
TabbedBar.prototype.startLayout = function () {
	throw new Error('Ti.UI.TabbedBar.startLayout was deprecated, since 3.0.0');
};
TabbedBar.prototype.toImage = function () {
	return {};
};
TabbedBar.prototype.updateLayout = function () {
	throw new Error('Ti.UI.TabbedBar.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new TabbedBar(properties);
};