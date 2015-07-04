function ButtonBar(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.ButtonBar';
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
ButtonBar.prototype.add = function () {
};
ButtonBar.prototype.addEventListener = function () {
};
ButtonBar.prototype.animate = function () {
};
ButtonBar.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ButtonBar.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
ButtonBar.prototype.finishLayout = function () {
	throw new Error('Ti.UI.ButtonBar.finishLayout was deprecated, since 3.0.0');
};
ButtonBar.prototype.fireEvent = function () {
};
ButtonBar.prototype.getAccessibilityHidden = function () {
	return true;
};
ButtonBar.prototype.getAccessibilityHint = function () {
	return '';
};
ButtonBar.prototype.getAccessibilityLabel = function () {
	return '';
};
ButtonBar.prototype.getAccessibilityValue = function () {
	return '';
};
ButtonBar.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
ButtonBar.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ButtonBar.prototype.getApiName = function () {
	return '';
};
ButtonBar.prototype.getBackgroundColor = function () {
	return '';
};
ButtonBar.prototype.getBackgroundGradient = function () {
	return {};
};
ButtonBar.prototype.getBackgroundImage = function () {
	return '';
};
ButtonBar.prototype.getBackgroundLeftCap = function () {
	return 0;
};
ButtonBar.prototype.getBackgroundRepeat = function () {
	return true;
};
ButtonBar.prototype.getBackgroundTopCap = function () {
	return 0;
};
ButtonBar.prototype.getBorderColor = function () {
	return '';
};
ButtonBar.prototype.getBorderRadius = function () {
	return 0;
};
ButtonBar.prototype.getBorderWidth = function () {
	return 0;
};
ButtonBar.prototype.getBottom = function () {
	return 0;
};
ButtonBar.prototype.getBubbleParent = function () {
	return true;
};
ButtonBar.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ButtonBar.prototype.getChildren = function () {
	return [];
};
ButtonBar.prototype.getClipMode = function () {
	return 0;
};
ButtonBar.prototype.getHeight = function () {
	return 0;
};
ButtonBar.prototype.getHorizontalWrap = function () {
	return true;
};
ButtonBar.prototype.getIndex = function () {
	return 0;
};
ButtonBar.prototype.getLabels = function () {
	return '';
};
ButtonBar.prototype.getLayout = function () {
	return '';
};
ButtonBar.prototype.getLeft = function () {
	return 0;
};
ButtonBar.prototype.getOpacity = function () {
	return 0;
};
ButtonBar.prototype.getPullBackgroundColor = function () {
	return '';
};
ButtonBar.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
ButtonBar.prototype.getRight = function () {
	return 0;
};
ButtonBar.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
ButtonBar.prototype.getStyle = function () {
	return 0;
};
ButtonBar.prototype.getTintColor = function () {
	return '';
};
ButtonBar.prototype.getTop = function () {
	return 0;
};
ButtonBar.prototype.getTouchEnabled = function () {
	return true;
};
ButtonBar.prototype.getTransform = function () {
	return {};
};
ButtonBar.prototype.getViewShadowColor = function () {
	return '';
};
ButtonBar.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
ButtonBar.prototype.getViewShadowRadius = function () {
	return 0;
};
ButtonBar.prototype.getVisible = function () {
	return true;
};
ButtonBar.prototype.getWidth = function () {
	return 0;
};
ButtonBar.prototype.getZIndex = function () {
	return 0;
};
ButtonBar.prototype.hide = function () {
};
ButtonBar.prototype.remove = function () {
};
ButtonBar.prototype.removeAllChildren = function () {
};
ButtonBar.prototype.removeEventListener = function () {
};
ButtonBar.prototype.setAccessibilityHidden = function () {
};
ButtonBar.prototype.setAccessibilityHint = function () {
};
ButtonBar.prototype.setAccessibilityLabel = function () {
};
ButtonBar.prototype.setAccessibilityValue = function () {
};
ButtonBar.prototype.setAnchorPoint = function () {
};
ButtonBar.prototype.setBackgroundColor = function () {
};
ButtonBar.prototype.setBackgroundGradient = function () {
};
ButtonBar.prototype.setBackgroundImage = function () {
};
ButtonBar.prototype.setBackgroundLeftCap = function () {
};
ButtonBar.prototype.setBackgroundRepeat = function () {
};
ButtonBar.prototype.setBackgroundTopCap = function () {
};
ButtonBar.prototype.setBorderColor = function () {
};
ButtonBar.prototype.setBorderRadius = function () {
};
ButtonBar.prototype.setBorderWidth = function () {
};
ButtonBar.prototype.setBottom = function () {
};
ButtonBar.prototype.setBubbleParent = function () {
};
ButtonBar.prototype.setCenter = function () {
};
ButtonBar.prototype.setClipMode = function () {
};
ButtonBar.prototype.setHeight = function () {
};
ButtonBar.prototype.setHorizontalWrap = function () {
};
ButtonBar.prototype.setIndex = function () {
};
ButtonBar.prototype.setLabels = function () {
};
ButtonBar.prototype.setLayout = function () {
};
ButtonBar.prototype.setLeft = function () {
};
ButtonBar.prototype.setOpacity = function () {
};
ButtonBar.prototype.setPullBackgroundColor = function () {
};
ButtonBar.prototype.setRight = function () {
};
ButtonBar.prototype.setStyle = function () {
};
ButtonBar.prototype.setTintColor = function () {
};
ButtonBar.prototype.setTop = function () {
};
ButtonBar.prototype.setTouchEnabled = function () {
};
ButtonBar.prototype.setTransform = function () {
};
ButtonBar.prototype.setViewShadowColor = function () {
};
ButtonBar.prototype.setViewShadowOffset = function () {
};
ButtonBar.prototype.setViewShadowRadius = function () {
};
ButtonBar.prototype.setVisible = function () {
};
ButtonBar.prototype.setWidth = function () {
};
ButtonBar.prototype.setZIndex = function () {
};
ButtonBar.prototype.show = function () {
};
ButtonBar.prototype.startLayout = function () {
	throw new Error('Ti.UI.ButtonBar.startLayout was deprecated, since 3.0.0');
};
ButtonBar.prototype.toImage = function () {
	return {};
};
ButtonBar.prototype.updateLayout = function () {
	throw new Error('Ti.UI.ButtonBar.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new ButtonBar(properties);
};