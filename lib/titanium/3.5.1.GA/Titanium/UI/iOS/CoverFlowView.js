function CoverFlowView(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.iOS.CoverFlowView';
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
	this.images = properties.images || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.opacity = properties.opacity || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.selected = properties.selected || undefined;
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
CoverFlowView.prototype.add = function () {
};
CoverFlowView.prototype.addEventListener = function () {
};
CoverFlowView.prototype.animate = function () {
};
CoverFlowView.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
CoverFlowView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
CoverFlowView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.iOS.CoverFlowView.finishLayout was deprecated, since 3.0.0');
};
CoverFlowView.prototype.fireEvent = function () {
};
CoverFlowView.prototype.getAccessibilityHidden = function () {
	return true;
};
CoverFlowView.prototype.getAccessibilityHint = function () {
	return '';
};
CoverFlowView.prototype.getAccessibilityLabel = function () {
	return '';
};
CoverFlowView.prototype.getAccessibilityValue = function () {
	return '';
};
CoverFlowView.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
CoverFlowView.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
CoverFlowView.prototype.getApiName = function () {
	return '';
};
CoverFlowView.prototype.getBackgroundColor = function () {
	return '';
};
CoverFlowView.prototype.getBackgroundGradient = function () {
	return {};
};
CoverFlowView.prototype.getBackgroundImage = function () {
	return '';
};
CoverFlowView.prototype.getBackgroundLeftCap = function () {
	return 0;
};
CoverFlowView.prototype.getBackgroundRepeat = function () {
	return true;
};
CoverFlowView.prototype.getBackgroundTopCap = function () {
	return 0;
};
CoverFlowView.prototype.getBorderColor = function () {
	return '';
};
CoverFlowView.prototype.getBorderRadius = function () {
	return 0;
};
CoverFlowView.prototype.getBorderWidth = function () {
	return 0;
};
CoverFlowView.prototype.getBottom = function () {
	return 0;
};
CoverFlowView.prototype.getBubbleParent = function () {
	return true;
};
CoverFlowView.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
CoverFlowView.prototype.getChildren = function () {
	return [];
};
CoverFlowView.prototype.getClipMode = function () {
	return 0;
};
CoverFlowView.prototype.getHeight = function () {
	return 0;
};
CoverFlowView.prototype.getHorizontalWrap = function () {
	return true;
};
CoverFlowView.prototype.getImages = function () {
	return '';
};
CoverFlowView.prototype.getLayout = function () {
	return '';
};
CoverFlowView.prototype.getLeft = function () {
	return 0;
};
CoverFlowView.prototype.getOpacity = function () {
	return 0;
};
CoverFlowView.prototype.getPullBackgroundColor = function () {
	return '';
};
CoverFlowView.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
CoverFlowView.prototype.getRight = function () {
	return 0;
};
CoverFlowView.prototype.getSelected = function () {
	return 0;
};
CoverFlowView.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
CoverFlowView.prototype.getTintColor = function () {
	return '';
};
CoverFlowView.prototype.getTop = function () {
	return 0;
};
CoverFlowView.prototype.getTouchEnabled = function () {
	return true;
};
CoverFlowView.prototype.getTransform = function () {
	return {};
};
CoverFlowView.prototype.getViewShadowColor = function () {
	return '';
};
CoverFlowView.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
CoverFlowView.prototype.getViewShadowRadius = function () {
	return 0;
};
CoverFlowView.prototype.getVisible = function () {
	return true;
};
CoverFlowView.prototype.getWidth = function () {
	return 0;
};
CoverFlowView.prototype.getZIndex = function () {
	return 0;
};
CoverFlowView.prototype.hide = function () {
};
CoverFlowView.prototype.remove = function () {
};
CoverFlowView.prototype.removeAllChildren = function () {
};
CoverFlowView.prototype.removeEventListener = function () {
};
CoverFlowView.prototype.setAccessibilityHidden = function () {
};
CoverFlowView.prototype.setAccessibilityHint = function () {
};
CoverFlowView.prototype.setAccessibilityLabel = function () {
};
CoverFlowView.prototype.setAccessibilityValue = function () {
};
CoverFlowView.prototype.setAnchorPoint = function () {
};
CoverFlowView.prototype.setBackgroundColor = function () {
};
CoverFlowView.prototype.setBackgroundGradient = function () {
};
CoverFlowView.prototype.setBackgroundImage = function () {
};
CoverFlowView.prototype.setBackgroundLeftCap = function () {
};
CoverFlowView.prototype.setBackgroundRepeat = function () {
};
CoverFlowView.prototype.setBackgroundTopCap = function () {
};
CoverFlowView.prototype.setBorderColor = function () {
};
CoverFlowView.prototype.setBorderRadius = function () {
};
CoverFlowView.prototype.setBorderWidth = function () {
};
CoverFlowView.prototype.setBottom = function () {
};
CoverFlowView.prototype.setBubbleParent = function () {
};
CoverFlowView.prototype.setCenter = function () {
};
CoverFlowView.prototype.setClipMode = function () {
};
CoverFlowView.prototype.setHeight = function () {
};
CoverFlowView.prototype.setHorizontalWrap = function () {
};
CoverFlowView.prototype.setImage = function () {
};
CoverFlowView.prototype.setImages = function () {
};
CoverFlowView.prototype.setLayout = function () {
};
CoverFlowView.prototype.setLeft = function () {
};
CoverFlowView.prototype.setOpacity = function () {
};
CoverFlowView.prototype.setPullBackgroundColor = function () {
};
CoverFlowView.prototype.setRight = function () {
};
CoverFlowView.prototype.setSelected = function () {
};
CoverFlowView.prototype.setTintColor = function () {
};
CoverFlowView.prototype.setTop = function () {
};
CoverFlowView.prototype.setTouchEnabled = function () {
};
CoverFlowView.prototype.setTransform = function () {
};
CoverFlowView.prototype.setViewShadowColor = function () {
};
CoverFlowView.prototype.setViewShadowOffset = function () {
};
CoverFlowView.prototype.setViewShadowRadius = function () {
};
CoverFlowView.prototype.setVisible = function () {
};
CoverFlowView.prototype.setWidth = function () {
};
CoverFlowView.prototype.setZIndex = function () {
};
CoverFlowView.prototype.show = function () {
};
CoverFlowView.prototype.startLayout = function () {
	throw new Error('Ti.UI.iOS.CoverFlowView.startLayout was deprecated, since 3.0.0');
};
CoverFlowView.prototype.toImage = function () {
	return {};
};
CoverFlowView.prototype.updateLayout = function () {
	throw new Error('Ti.UI.iOS.CoverFlowView.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new CoverFlowView(properties);
};