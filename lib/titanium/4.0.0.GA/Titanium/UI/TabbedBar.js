function TabbedBar(properties) {
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
	this.apiName = 'Ti.UI.TabbedBar';
	this.backgroundColor = properties.backgroundColor || '';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundLeftCap = properties.backgroundLeftCap || 0;
	this.backgroundRepeat = properties.backgroundRepeat || true;
	this.backgroundTopCap = properties.backgroundTopCap || 0;
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
	this.height = properties.height || 0;
	this.horizontalWrap = properties.horizontalWrap || true;
	this.index = properties.index || 0;
	this.labels = properties.labels || '';
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.opacity = properties.opacity || 0;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
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
	this.style = properties.style || 0;
	this.tintColor = properties.tintColor || '';
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.transform = properties.transform || {};
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