function DocumentViewer(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.iPad.DocumentViewer';
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
DocumentViewer.prototype.add = function () {
};
DocumentViewer.prototype.addEventListener = function () {
};
DocumentViewer.prototype.animate = function () {
};
DocumentViewer.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
DocumentViewer.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
DocumentViewer.prototype.finishLayout = function () {
	throw new Error('Ti.UI.iPad.DocumentViewer.finishLayout was deprecated, since 3.0.0');
};
DocumentViewer.prototype.fireEvent = function () {
};
DocumentViewer.prototype.getAccessibilityHidden = function () {
	return true;
};
DocumentViewer.prototype.getAccessibilityHint = function () {
	return '';
};
DocumentViewer.prototype.getAccessibilityLabel = function () {
	return '';
};
DocumentViewer.prototype.getAccessibilityValue = function () {
	return '';
};
DocumentViewer.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
DocumentViewer.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
DocumentViewer.prototype.getApiName = function () {
	return '';
};
DocumentViewer.prototype.getBackgroundColor = function () {
	return '';
};
DocumentViewer.prototype.getBackgroundGradient = function () {
	return {};
};
DocumentViewer.prototype.getBackgroundImage = function () {
	return '';
};
DocumentViewer.prototype.getBackgroundLeftCap = function () {
	return 0;
};
DocumentViewer.prototype.getBackgroundRepeat = function () {
	return true;
};
DocumentViewer.prototype.getBackgroundTopCap = function () {
	return 0;
};
DocumentViewer.prototype.getBorderColor = function () {
	return '';
};
DocumentViewer.prototype.getBorderRadius = function () {
	return 0;
};
DocumentViewer.prototype.getBorderWidth = function () {
	return 0;
};
DocumentViewer.prototype.getBottom = function () {
	return 0;
};
DocumentViewer.prototype.getBubbleParent = function () {
	return true;
};
DocumentViewer.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
DocumentViewer.prototype.getChildren = function () {
	return [];
};
DocumentViewer.prototype.getClipMode = function () {
	return 0;
};
DocumentViewer.prototype.getHeight = function () {
	return 0;
};
DocumentViewer.prototype.getHorizontalWrap = function () {
	return true;
};
DocumentViewer.prototype.getLayout = function () {
	return '';
};
DocumentViewer.prototype.getLeft = function () {
	return 0;
};
DocumentViewer.prototype.getOpacity = function () {
	return 0;
};
DocumentViewer.prototype.getPullBackgroundColor = function () {
	return '';
};
DocumentViewer.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
DocumentViewer.prototype.getRight = function () {
	return 0;
};
DocumentViewer.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
DocumentViewer.prototype.getTintColor = function () {
	return '';
};
DocumentViewer.prototype.getTop = function () {
	return 0;
};
DocumentViewer.prototype.getTouchEnabled = function () {
	return true;
};
DocumentViewer.prototype.getTransform = function () {
	return {};
};
DocumentViewer.prototype.getViewShadowColor = function () {
	return '';
};
DocumentViewer.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
DocumentViewer.prototype.getViewShadowRadius = function () {
	return 0;
};
DocumentViewer.prototype.getVisible = function () {
	return true;
};
DocumentViewer.prototype.getWidth = function () {
	return 0;
};
DocumentViewer.prototype.getZIndex = function () {
	return 0;
};
DocumentViewer.prototype.hide = function () {
};
DocumentViewer.prototype.remove = function () {
};
DocumentViewer.prototype.removeAllChildren = function () {
};
DocumentViewer.prototype.removeEventListener = function () {
};
DocumentViewer.prototype.setAccessibilityHidden = function () {
};
DocumentViewer.prototype.setAccessibilityHint = function () {
};
DocumentViewer.prototype.setAccessibilityLabel = function () {
};
DocumentViewer.prototype.setAccessibilityValue = function () {
};
DocumentViewer.prototype.setAnchorPoint = function () {
};
DocumentViewer.prototype.setBackgroundColor = function () {
};
DocumentViewer.prototype.setBackgroundGradient = function () {
};
DocumentViewer.prototype.setBackgroundImage = function () {
};
DocumentViewer.prototype.setBackgroundLeftCap = function () {
};
DocumentViewer.prototype.setBackgroundRepeat = function () {
};
DocumentViewer.prototype.setBackgroundTopCap = function () {
};
DocumentViewer.prototype.setBorderColor = function () {
};
DocumentViewer.prototype.setBorderRadius = function () {
};
DocumentViewer.prototype.setBorderWidth = function () {
};
DocumentViewer.prototype.setBottom = function () {
};
DocumentViewer.prototype.setBubbleParent = function () {
};
DocumentViewer.prototype.setCenter = function () {
};
DocumentViewer.prototype.setClipMode = function () {
};
DocumentViewer.prototype.setHeight = function () {
};
DocumentViewer.prototype.setHorizontalWrap = function () {
};
DocumentViewer.prototype.setLayout = function () {
};
DocumentViewer.prototype.setLeft = function () {
};
DocumentViewer.prototype.setOpacity = function () {
};
DocumentViewer.prototype.setPullBackgroundColor = function () {
};
DocumentViewer.prototype.setRight = function () {
};
DocumentViewer.prototype.setTintColor = function () {
};
DocumentViewer.prototype.setTop = function () {
};
DocumentViewer.prototype.setTouchEnabled = function () {
};
DocumentViewer.prototype.setTransform = function () {
};
DocumentViewer.prototype.setUrl = function () {
};
DocumentViewer.prototype.setViewShadowColor = function () {
};
DocumentViewer.prototype.setViewShadowOffset = function () {
};
DocumentViewer.prototype.setViewShadowRadius = function () {
};
DocumentViewer.prototype.setVisible = function () {
};
DocumentViewer.prototype.setWidth = function () {
};
DocumentViewer.prototype.setZIndex = function () {
};
DocumentViewer.prototype.show = function () {
};
DocumentViewer.prototype.startLayout = function () {
	throw new Error('Ti.UI.iPad.DocumentViewer.startLayout was deprecated, since 3.0.0');
};
DocumentViewer.prototype.toImage = function () {
	return {};
};
DocumentViewer.prototype.updateLayout = function () {
	throw new Error('Ti.UI.iPad.DocumentViewer.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new DocumentViewer(properties);
};