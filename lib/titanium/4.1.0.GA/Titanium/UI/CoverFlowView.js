function CoverFlowView(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.CoverFlowView';
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
	this.images = properties.images || '';
	this.selected = properties.selected || 0;
	return this;
}
CoverFlowView.prototype.addEventListener = function () {
};
CoverFlowView.prototype.removeEventListener = function () {
};
CoverFlowView.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
CoverFlowView.prototype.fireEvent = function () {
};
CoverFlowView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.CoverFlowView.finishLayout was deprecated, since 3.0.0');
};
CoverFlowView.prototype.removeAllChildren = function () {
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
CoverFlowView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
CoverFlowView.prototype.add = function () {
};
CoverFlowView.prototype.animate = function () {
};
CoverFlowView.prototype.hide = function () {
};
CoverFlowView.prototype.remove = function () {
};
CoverFlowView.prototype.show = function () {
};
CoverFlowView.prototype.setImage = function () {
};
CoverFlowView.prototype.getBubbleParent = function () {
	return true;
};
CoverFlowView.prototype.setBubbleParent = function () {
};
CoverFlowView.prototype.getApiName = function () {
	return '';
};
CoverFlowView.prototype.getAccessibilityHidden = function () {
	return true;
};
CoverFlowView.prototype.setAccessibilityHidden = function () {
};
CoverFlowView.prototype.getAccessibilityHint = function () {
	return '';
};
CoverFlowView.prototype.setAccessibilityHint = function () {
};
CoverFlowView.prototype.getAccessibilityLabel = function () {
	return '';
};
CoverFlowView.prototype.setAccessibilityLabel = function () {
};
CoverFlowView.prototype.getAccessibilityValue = function () {
	return '';
};
CoverFlowView.prototype.setAccessibilityValue = function () {
};
CoverFlowView.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
CoverFlowView.prototype.setAnchorPoint = function () {
};
CoverFlowView.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
CoverFlowView.prototype.getBackgroundGradient = function () {
	return {};
};
CoverFlowView.prototype.setBackgroundGradient = function () {
};
CoverFlowView.prototype.getBackgroundImage = function () {
	return '';
};
CoverFlowView.prototype.setBackgroundImage = function () {
};
CoverFlowView.prototype.getBackgroundRepeat = function () {
	return true;
};
CoverFlowView.prototype.setBackgroundRepeat = function () {
};
CoverFlowView.prototype.getBackgroundLeftCap = function () {
	return 0;
};
CoverFlowView.prototype.setBackgroundLeftCap = function () {
};
CoverFlowView.prototype.getBackgroundTopCap = function () {
	return 0;
};
CoverFlowView.prototype.setBackgroundTopCap = function () {
};
CoverFlowView.prototype.getClipMode = function () {
	return 0;
};
CoverFlowView.prototype.setClipMode = function () {
};
CoverFlowView.prototype.getPullBackgroundColor = function () {
	return '';
};
CoverFlowView.prototype.setPullBackgroundColor = function () {
};
CoverFlowView.prototype.getTransform = function () {
	return {};
};
CoverFlowView.prototype.setTransform = function () {
};
CoverFlowView.prototype.getViewShadowRadius = function () {
	return 0;
};
CoverFlowView.prototype.setViewShadowRadius = function () {
};
CoverFlowView.prototype.getViewShadowColor = function () {
	return '';
};
CoverFlowView.prototype.setViewShadowColor = function () {
};
CoverFlowView.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
CoverFlowView.prototype.setViewShadowOffset = function () {
};
CoverFlowView.prototype.getHorizontalWrap = function () {
	return true;
};
CoverFlowView.prototype.setHorizontalWrap = function () {
};
CoverFlowView.prototype.getZIndex = function () {
	return 0;
};
CoverFlowView.prototype.setZIndex = function () {
};
CoverFlowView.prototype.getBackgroundColor = function () {
	return '';
};
CoverFlowView.prototype.setBackgroundColor = function () {
};
CoverFlowView.prototype.getBorderColor = function () {
	return '';
};
CoverFlowView.prototype.setBorderColor = function () {
};
CoverFlowView.prototype.getBorderRadius = function () {
	return 0;
};
CoverFlowView.prototype.setBorderRadius = function () {
};
CoverFlowView.prototype.getBorderWidth = function () {
	return 0;
};
CoverFlowView.prototype.setBorderWidth = function () {
};
CoverFlowView.prototype.getBottom = function () {
	return '';
};
CoverFlowView.prototype.setBottom = function () {
};
CoverFlowView.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
CoverFlowView.prototype.setCenter = function () {
};
CoverFlowView.prototype.getChildren = function () {
	return [];
};
CoverFlowView.prototype.getHeight = function () {
	return '';
};
CoverFlowView.prototype.setHeight = function () {
};
CoverFlowView.prototype.getLayout = function () {
	return '';
};
CoverFlowView.prototype.setLayout = function () {
};
CoverFlowView.prototype.getLeft = function () {
	return '';
};
CoverFlowView.prototype.setLeft = function () {
};
CoverFlowView.prototype.getOpacity = function () {
	return 0;
};
CoverFlowView.prototype.setOpacity = function () {
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
	return '';
};
CoverFlowView.prototype.setRight = function () {
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
CoverFlowView.prototype.setTintColor = function () {
};
CoverFlowView.prototype.getTop = function () {
	return '';
};
CoverFlowView.prototype.setTop = function () {
};
CoverFlowView.prototype.getTouchEnabled = function () {
	return true;
};
CoverFlowView.prototype.setTouchEnabled = function () {
};
CoverFlowView.prototype.getVisible = function () {
	return true;
};
CoverFlowView.prototype.setVisible = function () {
};
CoverFlowView.prototype.getWidth = function () {
	return '';
};
CoverFlowView.prototype.setWidth = function () {
};
CoverFlowView.prototype.getImages = function () {
	return '';
};
CoverFlowView.prototype.setImages = function () {
};
CoverFlowView.prototype.getSelected = function () {
	return 0;
};
CoverFlowView.prototype.setSelected = function () {
};
module.exports = function (properties) {
	return new CoverFlowView(properties);
};