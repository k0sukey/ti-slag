function DocumentViewer(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iOS.DocumentViewer';
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
	this.name = properties.name || '';
	this.url = properties.url || '';
	return this;
}
DocumentViewer.prototype.addEventListener = function () {
};
DocumentViewer.prototype.removeEventListener = function () {
};
DocumentViewer.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
DocumentViewer.prototype.fireEvent = function () {
};
DocumentViewer.prototype.finishLayout = function () {
	throw new Error('Ti.UI.iOS.DocumentViewer.finishLayout was deprecated, since 3.0.0');
};
DocumentViewer.prototype.removeAllChildren = function () {
};
DocumentViewer.prototype.startLayout = function () {
	throw new Error('Ti.UI.iOS.DocumentViewer.startLayout was deprecated, since 3.0.0');
};
DocumentViewer.prototype.toImage = function () {
	return {};
};
DocumentViewer.prototype.updateLayout = function () {
	throw new Error('Ti.UI.iOS.DocumentViewer.updateLayout was deprecated, since 3.0.0');
};
DocumentViewer.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
DocumentViewer.prototype.add = function () {
};
DocumentViewer.prototype.animate = function () {
};
DocumentViewer.prototype.hide = function () {
};
DocumentViewer.prototype.remove = function () {
};
DocumentViewer.prototype.show = function () {
};
DocumentViewer.prototype.getBubbleParent = function () {
	return true;
};
DocumentViewer.prototype.setBubbleParent = function () {
};
DocumentViewer.prototype.getApiName = function () {
	return '';
};
DocumentViewer.prototype.getAccessibilityHidden = function () {
	return true;
};
DocumentViewer.prototype.setAccessibilityHidden = function () {
};
DocumentViewer.prototype.getAccessibilityHint = function () {
	return '';
};
DocumentViewer.prototype.setAccessibilityHint = function () {
};
DocumentViewer.prototype.getAccessibilityLabel = function () {
	return '';
};
DocumentViewer.prototype.setAccessibilityLabel = function () {
};
DocumentViewer.prototype.getAccessibilityValue = function () {
	return '';
};
DocumentViewer.prototype.setAccessibilityValue = function () {
};
DocumentViewer.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
DocumentViewer.prototype.setAnchorPoint = function () {
};
DocumentViewer.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
DocumentViewer.prototype.getBackgroundGradient = function () {
	return {};
};
DocumentViewer.prototype.setBackgroundGradient = function () {
};
DocumentViewer.prototype.getBackgroundImage = function () {
	return '';
};
DocumentViewer.prototype.setBackgroundImage = function () {
};
DocumentViewer.prototype.getBackgroundRepeat = function () {
	return true;
};
DocumentViewer.prototype.setBackgroundRepeat = function () {
};
DocumentViewer.prototype.getBackgroundLeftCap = function () {
	return 0;
};
DocumentViewer.prototype.setBackgroundLeftCap = function () {
};
DocumentViewer.prototype.getBackgroundTopCap = function () {
	return 0;
};
DocumentViewer.prototype.setBackgroundTopCap = function () {
};
DocumentViewer.prototype.getClipMode = function () {
	return 0;
};
DocumentViewer.prototype.setClipMode = function () {
};
DocumentViewer.prototype.getPullBackgroundColor = function () {
	return '';
};
DocumentViewer.prototype.setPullBackgroundColor = function () {
};
DocumentViewer.prototype.getTransform = function () {
	return {};
};
DocumentViewer.prototype.setTransform = function () {
};
DocumentViewer.prototype.getViewShadowRadius = function () {
	return 0;
};
DocumentViewer.prototype.setViewShadowRadius = function () {
};
DocumentViewer.prototype.getViewShadowColor = function () {
	return '';
};
DocumentViewer.prototype.setViewShadowColor = function () {
};
DocumentViewer.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
DocumentViewer.prototype.setViewShadowOffset = function () {
};
DocumentViewer.prototype.getHorizontalWrap = function () {
	return true;
};
DocumentViewer.prototype.setHorizontalWrap = function () {
};
DocumentViewer.prototype.getZIndex = function () {
	return 0;
};
DocumentViewer.prototype.setZIndex = function () {
};
DocumentViewer.prototype.getBackgroundColor = function () {
	return '';
};
DocumentViewer.prototype.setBackgroundColor = function () {
};
DocumentViewer.prototype.getBorderColor = function () {
	return '';
};
DocumentViewer.prototype.setBorderColor = function () {
};
DocumentViewer.prototype.getBorderRadius = function () {
	return 0;
};
DocumentViewer.prototype.setBorderRadius = function () {
};
DocumentViewer.prototype.getBorderWidth = function () {
	return 0;
};
DocumentViewer.prototype.setBorderWidth = function () {
};
DocumentViewer.prototype.getBottom = function () {
	return '';
};
DocumentViewer.prototype.setBottom = function () {
};
DocumentViewer.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
DocumentViewer.prototype.setCenter = function () {
};
DocumentViewer.prototype.getChildren = function () {
	return [];
};
DocumentViewer.prototype.getHeight = function () {
	return '';
};
DocumentViewer.prototype.setHeight = function () {
};
DocumentViewer.prototype.getLayout = function () {
	return '';
};
DocumentViewer.prototype.setLayout = function () {
};
DocumentViewer.prototype.getLeft = function () {
	return '';
};
DocumentViewer.prototype.setLeft = function () {
};
DocumentViewer.prototype.getOpacity = function () {
	return 0;
};
DocumentViewer.prototype.setOpacity = function () {
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
	return '';
};
DocumentViewer.prototype.setRight = function () {
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
DocumentViewer.prototype.setTintColor = function () {
};
DocumentViewer.prototype.getTop = function () {
	return '';
};
DocumentViewer.prototype.setTop = function () {
};
DocumentViewer.prototype.getTouchEnabled = function () {
	return true;
};
DocumentViewer.prototype.setTouchEnabled = function () {
};
DocumentViewer.prototype.getVisible = function () {
	return true;
};
DocumentViewer.prototype.setVisible = function () {
};
DocumentViewer.prototype.getWidth = function () {
	return '';
};
DocumentViewer.prototype.setWidth = function () {
};
DocumentViewer.prototype.getName = function () {
	return '';
};
DocumentViewer.prototype.getUrl = function () {
	return '';
};
DocumentViewer.prototype.setUrl = function () {
};
module.exports = function (properties) {
	return new DocumentViewer(properties);
};