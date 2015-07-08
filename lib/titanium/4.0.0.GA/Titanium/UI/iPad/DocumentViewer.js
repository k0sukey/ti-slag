function DocumentViewer(properties) {
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
	this.apiName = 'Ti.UI.iPad.DocumentViewer';
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