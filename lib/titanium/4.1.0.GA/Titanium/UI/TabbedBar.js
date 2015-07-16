function TabbedBar(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.TabbedBar';
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
	this.index = properties.index || 0;
	this.labels = properties.labels || '';
	this.style = properties.style || 0;
	return this;
}
TabbedBar.prototype.addEventListener = function () {
};
TabbedBar.prototype.removeEventListener = function () {
};
TabbedBar.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
TabbedBar.prototype.fireEvent = function () {
};
TabbedBar.prototype.finishLayout = function () {
	throw new Error('Ti.UI.TabbedBar.finishLayout was deprecated, since 3.0.0');
};
TabbedBar.prototype.removeAllChildren = function () {
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
TabbedBar.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
TabbedBar.prototype.add = function () {
};
TabbedBar.prototype.animate = function () {
};
TabbedBar.prototype.hide = function () {
};
TabbedBar.prototype.remove = function () {
};
TabbedBar.prototype.show = function () {
};
TabbedBar.prototype.getBubbleParent = function () {
	return true;
};
TabbedBar.prototype.setBubbleParent = function () {
};
TabbedBar.prototype.getApiName = function () {
	return '';
};
TabbedBar.prototype.getAccessibilityHidden = function () {
	return true;
};
TabbedBar.prototype.setAccessibilityHidden = function () {
};
TabbedBar.prototype.getAccessibilityHint = function () {
	return '';
};
TabbedBar.prototype.setAccessibilityHint = function () {
};
TabbedBar.prototype.getAccessibilityLabel = function () {
	return '';
};
TabbedBar.prototype.setAccessibilityLabel = function () {
};
TabbedBar.prototype.getAccessibilityValue = function () {
	return '';
};
TabbedBar.prototype.setAccessibilityValue = function () {
};
TabbedBar.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
TabbedBar.prototype.setAnchorPoint = function () {
};
TabbedBar.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
TabbedBar.prototype.getBackgroundGradient = function () {
	return {};
};
TabbedBar.prototype.setBackgroundGradient = function () {
};
TabbedBar.prototype.getBackgroundImage = function () {
	return '';
};
TabbedBar.prototype.setBackgroundImage = function () {
};
TabbedBar.prototype.getBackgroundRepeat = function () {
	return true;
};
TabbedBar.prototype.setBackgroundRepeat = function () {
};
TabbedBar.prototype.getBackgroundLeftCap = function () {
	return 0;
};
TabbedBar.prototype.setBackgroundLeftCap = function () {
};
TabbedBar.prototype.getBackgroundTopCap = function () {
	return 0;
};
TabbedBar.prototype.setBackgroundTopCap = function () {
};
TabbedBar.prototype.getClipMode = function () {
	return 0;
};
TabbedBar.prototype.setClipMode = function () {
};
TabbedBar.prototype.getPullBackgroundColor = function () {
	return '';
};
TabbedBar.prototype.setPullBackgroundColor = function () {
};
TabbedBar.prototype.getTransform = function () {
	return {};
};
TabbedBar.prototype.setTransform = function () {
};
TabbedBar.prototype.getViewShadowRadius = function () {
	return 0;
};
TabbedBar.prototype.setViewShadowRadius = function () {
};
TabbedBar.prototype.getViewShadowColor = function () {
	return '';
};
TabbedBar.prototype.setViewShadowColor = function () {
};
TabbedBar.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
TabbedBar.prototype.setViewShadowOffset = function () {
};
TabbedBar.prototype.getHorizontalWrap = function () {
	return true;
};
TabbedBar.prototype.setHorizontalWrap = function () {
};
TabbedBar.prototype.getZIndex = function () {
	return 0;
};
TabbedBar.prototype.setZIndex = function () {
};
TabbedBar.prototype.getBackgroundColor = function () {
	return '';
};
TabbedBar.prototype.setBackgroundColor = function () {
};
TabbedBar.prototype.getBorderColor = function () {
	return '';
};
TabbedBar.prototype.setBorderColor = function () {
};
TabbedBar.prototype.getBorderRadius = function () {
	return 0;
};
TabbedBar.prototype.setBorderRadius = function () {
};
TabbedBar.prototype.getBorderWidth = function () {
	return 0;
};
TabbedBar.prototype.setBorderWidth = function () {
};
TabbedBar.prototype.getBottom = function () {
	return '';
};
TabbedBar.prototype.setBottom = function () {
};
TabbedBar.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
TabbedBar.prototype.setCenter = function () {
};
TabbedBar.prototype.getChildren = function () {
	return [];
};
TabbedBar.prototype.getHeight = function () {
	return '';
};
TabbedBar.prototype.setHeight = function () {
};
TabbedBar.prototype.getLayout = function () {
	return '';
};
TabbedBar.prototype.setLayout = function () {
};
TabbedBar.prototype.getLeft = function () {
	return '';
};
TabbedBar.prototype.setLeft = function () {
};
TabbedBar.prototype.getOpacity = function () {
	return 0;
};
TabbedBar.prototype.setOpacity = function () {
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
	return '';
};
TabbedBar.prototype.setRight = function () {
};
TabbedBar.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
TabbedBar.prototype.getTintColor = function () {
	return '';
};
TabbedBar.prototype.setTintColor = function () {
};
TabbedBar.prototype.getTop = function () {
	return '';
};
TabbedBar.prototype.setTop = function () {
};
TabbedBar.prototype.getTouchEnabled = function () {
	return true;
};
TabbedBar.prototype.setTouchEnabled = function () {
};
TabbedBar.prototype.getVisible = function () {
	return true;
};
TabbedBar.prototype.setVisible = function () {
};
TabbedBar.prototype.getWidth = function () {
	return '';
};
TabbedBar.prototype.setWidth = function () {
};
TabbedBar.prototype.getIndex = function () {
	return 0;
};
TabbedBar.prototype.setIndex = function () {
};
TabbedBar.prototype.getLabels = function () {
	return '';
};
TabbedBar.prototype.setLabels = function () {
};
TabbedBar.prototype.getStyle = function () {
	return 0;
};
TabbedBar.prototype.setStyle = function () {
};
module.exports = function (properties) {
	return new TabbedBar(properties);
};