function MaskedImage(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.MaskedImage';
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
	this.image = properties.image || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.mask = properties.mask || undefined;
	this.mode = properties.mode || undefined;
	this.opacity = properties.opacity || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.size = properties.size || undefined;
	this.tint = properties.tint || undefined;
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