function MaskedImage(properties) {
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
	this.apiName = 'Ti.UI.MaskedImage';
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
	this.image = properties.image || '';
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.mask = properties.mask || '';
	this.mode = properties.mode || 0;
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
	this.tint = properties.tint || '';
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
MaskedImage.prototype.add = function () {
};
MaskedImage.prototype.addEventListener = function () {
};
MaskedImage.prototype.animate = function () {
};
MaskedImage.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
MaskedImage.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
MaskedImage.prototype.finishLayout = function () {
	throw new Error('Ti.UI.MaskedImage.finishLayout was deprecated, since 3.0.0');
};
MaskedImage.prototype.fireEvent = function () {
};
MaskedImage.prototype.getAccessibilityHidden = function () {
	return true;
};
MaskedImage.prototype.getAccessibilityHint = function () {
	return '';
};
MaskedImage.prototype.getAccessibilityLabel = function () {
	return '';
};
MaskedImage.prototype.getAccessibilityValue = function () {
	return '';
};
MaskedImage.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
MaskedImage.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
MaskedImage.prototype.getApiName = function () {
	return '';
};
MaskedImage.prototype.getBackgroundColor = function () {
	return '';
};
MaskedImage.prototype.getBackgroundGradient = function () {
	return {};
};
MaskedImage.prototype.getBackgroundImage = function () {
	return '';
};
MaskedImage.prototype.getBackgroundLeftCap = function () {
	return 0;
};
MaskedImage.prototype.getBackgroundRepeat = function () {
	return true;
};
MaskedImage.prototype.getBackgroundTopCap = function () {
	return 0;
};
MaskedImage.prototype.getBorderColor = function () {
	return '';
};
MaskedImage.prototype.getBorderRadius = function () {
	return 0;
};
MaskedImage.prototype.getBorderWidth = function () {
	return 0;
};
MaskedImage.prototype.getBottom = function () {
	return 0;
};
MaskedImage.prototype.getBubbleParent = function () {
	return true;
};
MaskedImage.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
MaskedImage.prototype.getChildren = function () {
	return [];
};
MaskedImage.prototype.getClipMode = function () {
	return 0;
};
MaskedImage.prototype.getHeight = function () {
	return 0;
};
MaskedImage.prototype.getHorizontalWrap = function () {
	return true;
};
MaskedImage.prototype.getImage = function () {
	return '';
};
MaskedImage.prototype.getLayout = function () {
	return '';
};
MaskedImage.prototype.getLeft = function () {
	return 0;
};
MaskedImage.prototype.getMask = function () {
	return '';
};
MaskedImage.prototype.getMode = function () {
	return 0;
};
MaskedImage.prototype.getOpacity = function () {
	return 0;
};
MaskedImage.prototype.getPullBackgroundColor = function () {
	return '';
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
	return 0;
};
MaskedImage.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
MaskedImage.prototype.getTint = function () {
	return '';
};
MaskedImage.prototype.getTintColor = function () {
	return '';
};
MaskedImage.prototype.getTop = function () {
	return 0;
};
MaskedImage.prototype.getTouchEnabled = function () {
	return true;
};
MaskedImage.prototype.getTransform = function () {
	return {};
};
MaskedImage.prototype.getViewShadowColor = function () {
	return '';
};
MaskedImage.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
MaskedImage.prototype.getViewShadowRadius = function () {
	return 0;
};
MaskedImage.prototype.getVisible = function () {
	return true;
};
MaskedImage.prototype.getWidth = function () {
	return 0;
};
MaskedImage.prototype.getZIndex = function () {
	return 0;
};
MaskedImage.prototype.hide = function () {
};
MaskedImage.prototype.remove = function () {
};
MaskedImage.prototype.removeAllChildren = function () {
};
MaskedImage.prototype.removeEventListener = function () {
};
MaskedImage.prototype.setAccessibilityHidden = function () {
};
MaskedImage.prototype.setAccessibilityHint = function () {
};
MaskedImage.prototype.setAccessibilityLabel = function () {
};
MaskedImage.prototype.setAccessibilityValue = function () {
};
MaskedImage.prototype.setAnchorPoint = function () {
};
MaskedImage.prototype.setBackgroundColor = function () {
};
MaskedImage.prototype.setBackgroundGradient = function () {
};
MaskedImage.prototype.setBackgroundImage = function () {
};
MaskedImage.prototype.setBackgroundLeftCap = function () {
};
MaskedImage.prototype.setBackgroundRepeat = function () {
};
MaskedImage.prototype.setBackgroundTopCap = function () {
};
MaskedImage.prototype.setBorderColor = function () {
};
MaskedImage.prototype.setBorderRadius = function () {
};
MaskedImage.prototype.setBorderWidth = function () {
};
MaskedImage.prototype.setBottom = function () {
};
MaskedImage.prototype.setBubbleParent = function () {
};
MaskedImage.prototype.setCenter = function () {
};
MaskedImage.prototype.setClipMode = function () {
};
MaskedImage.prototype.setHeight = function () {
};
MaskedImage.prototype.setHorizontalWrap = function () {
};
MaskedImage.prototype.setImage = function () {
};
MaskedImage.prototype.setLayout = function () {
};
MaskedImage.prototype.setLeft = function () {
};
MaskedImage.prototype.setMask = function () {
};
MaskedImage.prototype.setMode = function () {
};
MaskedImage.prototype.setOpacity = function () {
};
MaskedImage.prototype.setPullBackgroundColor = function () {
};
MaskedImage.prototype.setRight = function () {
};
MaskedImage.prototype.setTint = function () {
};
MaskedImage.prototype.setTintColor = function () {
};
MaskedImage.prototype.setTop = function () {
};
MaskedImage.prototype.setTouchEnabled = function () {
};
MaskedImage.prototype.setTransform = function () {
};
MaskedImage.prototype.setViewShadowColor = function () {
};
MaskedImage.prototype.setViewShadowOffset = function () {
};
MaskedImage.prototype.setViewShadowRadius = function () {
};
MaskedImage.prototype.setVisible = function () {
};
MaskedImage.prototype.setWidth = function () {
};
MaskedImage.prototype.setZIndex = function () {
};
MaskedImage.prototype.show = function () {
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
module.exports = function (properties) {
	return new MaskedImage(properties);
};