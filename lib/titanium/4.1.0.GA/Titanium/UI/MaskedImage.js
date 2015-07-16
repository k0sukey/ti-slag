function MaskedImage(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.MaskedImage';
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
	this.mask = properties.mask || '';
	this.image = properties.image || '';
	this.mode = properties.mode || 0;
	this.tint = properties.tint || '';
	return this;
}
MaskedImage.prototype.addEventListener = function () {
};
MaskedImage.prototype.removeEventListener = function () {
};
MaskedImage.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
MaskedImage.prototype.fireEvent = function () {
};
MaskedImage.prototype.finishLayout = function () {
	throw new Error('Ti.UI.MaskedImage.finishLayout was deprecated, since 3.0.0');
};
MaskedImage.prototype.removeAllChildren = function () {
};
MaskedImage.prototype.startLayout = function () {
	throw new Error('Ti.UI.MaskedImage.startLayout was deprecated, since 3.0.0');
};
MaskedImage.prototype.toImage = function () {
	return {};
};
MaskedImage.prototype.updateLayout = function () {
	throw new Error('Ti.UI.MaskedImage.updateLayout was deprecated, since 3.0.0');
};
MaskedImage.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
MaskedImage.prototype.add = function () {
};
MaskedImage.prototype.animate = function () {
};
MaskedImage.prototype.hide = function () {
};
MaskedImage.prototype.remove = function () {
};
MaskedImage.prototype.show = function () {
};
MaskedImage.prototype.getBubbleParent = function () {
	return true;
};
MaskedImage.prototype.setBubbleParent = function () {
};
MaskedImage.prototype.getApiName = function () {
	return '';
};
MaskedImage.prototype.getAccessibilityHidden = function () {
	return true;
};
MaskedImage.prototype.setAccessibilityHidden = function () {
};
MaskedImage.prototype.getAccessibilityHint = function () {
	return '';
};
MaskedImage.prototype.setAccessibilityHint = function () {
};
MaskedImage.prototype.getAccessibilityLabel = function () {
	return '';
};
MaskedImage.prototype.setAccessibilityLabel = function () {
};
MaskedImage.prototype.getAccessibilityValue = function () {
	return '';
};
MaskedImage.prototype.setAccessibilityValue = function () {
};
MaskedImage.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
MaskedImage.prototype.setAnchorPoint = function () {
};
MaskedImage.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
MaskedImage.prototype.getBackgroundGradient = function () {
	return {};
};
MaskedImage.prototype.setBackgroundGradient = function () {
};
MaskedImage.prototype.getBackgroundImage = function () {
	return '';
};
MaskedImage.prototype.setBackgroundImage = function () {
};
MaskedImage.prototype.getBackgroundRepeat = function () {
	return true;
};
MaskedImage.prototype.setBackgroundRepeat = function () {
};
MaskedImage.prototype.getBackgroundLeftCap = function () {
	return 0;
};
MaskedImage.prototype.setBackgroundLeftCap = function () {
};
MaskedImage.prototype.getBackgroundTopCap = function () {
	return 0;
};
MaskedImage.prototype.setBackgroundTopCap = function () {
};
MaskedImage.prototype.getClipMode = function () {
	return 0;
};
MaskedImage.prototype.setClipMode = function () {
};
MaskedImage.prototype.getPullBackgroundColor = function () {
	return '';
};
MaskedImage.prototype.setPullBackgroundColor = function () {
};
MaskedImage.prototype.getTransform = function () {
	return {};
};
MaskedImage.prototype.setTransform = function () {
};
MaskedImage.prototype.getViewShadowRadius = function () {
	return 0;
};
MaskedImage.prototype.setViewShadowRadius = function () {
};
MaskedImage.prototype.getViewShadowColor = function () {
	return '';
};
MaskedImage.prototype.setViewShadowColor = function () {
};
MaskedImage.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
MaskedImage.prototype.setViewShadowOffset = function () {
};
MaskedImage.prototype.getHorizontalWrap = function () {
	return true;
};
MaskedImage.prototype.setHorizontalWrap = function () {
};
MaskedImage.prototype.getZIndex = function () {
	return 0;
};
MaskedImage.prototype.setZIndex = function () {
};
MaskedImage.prototype.getBackgroundColor = function () {
	return '';
};
MaskedImage.prototype.setBackgroundColor = function () {
};
MaskedImage.prototype.getBorderColor = function () {
	return '';
};
MaskedImage.prototype.setBorderColor = function () {
};
MaskedImage.prototype.getBorderRadius = function () {
	return 0;
};
MaskedImage.prototype.setBorderRadius = function () {
};
MaskedImage.prototype.getBorderWidth = function () {
	return 0;
};
MaskedImage.prototype.setBorderWidth = function () {
};
MaskedImage.prototype.getBottom = function () {
	return '';
};
MaskedImage.prototype.setBottom = function () {
};
MaskedImage.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
MaskedImage.prototype.setCenter = function () {
};
MaskedImage.prototype.getChildren = function () {
	return [];
};
MaskedImage.prototype.getHeight = function () {
	return '';
};
MaskedImage.prototype.setHeight = function () {
};
MaskedImage.prototype.getLayout = function () {
	return '';
};
MaskedImage.prototype.setLayout = function () {
};
MaskedImage.prototype.getLeft = function () {
	return '';
};
MaskedImage.prototype.setLeft = function () {
};
MaskedImage.prototype.getOpacity = function () {
	return 0;
};
MaskedImage.prototype.setOpacity = function () {
};
MaskedImage.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
MaskedImage.prototype.getRight = function () {
	return '';
};
MaskedImage.prototype.setRight = function () {
};
MaskedImage.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
MaskedImage.prototype.getTintColor = function () {
	return '';
};
MaskedImage.prototype.setTintColor = function () {
};
MaskedImage.prototype.getTop = function () {
	return '';
};
MaskedImage.prototype.setTop = function () {
};
MaskedImage.prototype.getTouchEnabled = function () {
	return true;
};
MaskedImage.prototype.setTouchEnabled = function () {
};
MaskedImage.prototype.getVisible = function () {
	return true;
};
MaskedImage.prototype.setVisible = function () {
};
MaskedImage.prototype.getWidth = function () {
	return '';
};
MaskedImage.prototype.setWidth = function () {
};
MaskedImage.prototype.getMask = function () {
	return '';
};
MaskedImage.prototype.setMask = function () {
};
MaskedImage.prototype.getImage = function () {
	return '';
};
MaskedImage.prototype.setImage = function () {
};
MaskedImage.prototype.getMode = function () {
	return 0;
};
MaskedImage.prototype.setMode = function () {
};
MaskedImage.prototype.getTint = function () {
	return '';
};
MaskedImage.prototype.setTint = function () {
};
module.exports = function (properties) {
	return new MaskedImage(properties);
};