function CoverFlowView(properties) {
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
	this.apiName = 'Ti.UI.CoverFlowView';
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
	this.images = properties.images || '';
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
	this.selected = properties.selected || 0;
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
	throw new Error('Ti.UI.CoverFlowView.finishLayout was deprecated, since 3.0.0');
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
	throw new Error('Ti.UI.CoverFlowView.startLayout was deprecated, since 3.0.0');
};
CoverFlowView.prototype.toImage = function () {
	return {};
};
CoverFlowView.prototype.updateLayout = function () {
	throw new Error('Ti.UI.CoverFlowView.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new CoverFlowView(properties);
};