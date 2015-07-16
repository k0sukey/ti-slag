function AdView(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iOS.AdView';
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
	this.adSize = properties.adSize || '';
	return this;
}
AdView.prototype.addEventListener = function () {
};
AdView.prototype.removeEventListener = function () {
};
AdView.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
AdView.prototype.fireEvent = function () {
};
AdView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.iOS.AdView.finishLayout was deprecated, since 3.0.0');
};
AdView.prototype.removeAllChildren = function () {
};
AdView.prototype.startLayout = function () {
	throw new Error('Ti.UI.iOS.AdView.startLayout was deprecated, since 3.0.0');
};
AdView.prototype.toImage = function () {
	return {};
};
AdView.prototype.updateLayout = function () {
	throw new Error('Ti.UI.iOS.AdView.updateLayout was deprecated, since 3.0.0');
};
AdView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
AdView.prototype.add = function () {
};
AdView.prototype.animate = function () {
};
AdView.prototype.hide = function () {
};
AdView.prototype.remove = function () {
};
AdView.prototype.show = function () {
};
AdView.prototype.cancelAction = function () {
};
AdView.prototype.getBubbleParent = function () {
	return true;
};
AdView.prototype.setBubbleParent = function () {
};
AdView.prototype.getApiName = function () {
	return '';
};
AdView.prototype.getAccessibilityHidden = function () {
	return true;
};
AdView.prototype.setAccessibilityHidden = function () {
};
AdView.prototype.getAccessibilityHint = function () {
	return '';
};
AdView.prototype.setAccessibilityHint = function () {
};
AdView.prototype.getAccessibilityLabel = function () {
	return '';
};
AdView.prototype.setAccessibilityLabel = function () {
};
AdView.prototype.getAccessibilityValue = function () {
	return '';
};
AdView.prototype.setAccessibilityValue = function () {
};
AdView.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
AdView.prototype.setAnchorPoint = function () {
};
AdView.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
AdView.prototype.getBackgroundGradient = function () {
	return {};
};
AdView.prototype.setBackgroundGradient = function () {
};
AdView.prototype.getBackgroundImage = function () {
	return '';
};
AdView.prototype.setBackgroundImage = function () {
};
AdView.prototype.getBackgroundRepeat = function () {
	return true;
};
AdView.prototype.setBackgroundRepeat = function () {
};
AdView.prototype.getBackgroundLeftCap = function () {
	return 0;
};
AdView.prototype.setBackgroundLeftCap = function () {
};
AdView.prototype.getBackgroundTopCap = function () {
	return 0;
};
AdView.prototype.setBackgroundTopCap = function () {
};
AdView.prototype.getClipMode = function () {
	return 0;
};
AdView.prototype.setClipMode = function () {
};
AdView.prototype.getPullBackgroundColor = function () {
	return '';
};
AdView.prototype.setPullBackgroundColor = function () {
};
AdView.prototype.getTransform = function () {
	return {};
};
AdView.prototype.setTransform = function () {
};
AdView.prototype.getViewShadowRadius = function () {
	return 0;
};
AdView.prototype.setViewShadowRadius = function () {
};
AdView.prototype.getViewShadowColor = function () {
	return '';
};
AdView.prototype.setViewShadowColor = function () {
};
AdView.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
AdView.prototype.setViewShadowOffset = function () {
};
AdView.prototype.getHorizontalWrap = function () {
	return true;
};
AdView.prototype.setHorizontalWrap = function () {
};
AdView.prototype.getZIndex = function () {
	return 0;
};
AdView.prototype.setZIndex = function () {
};
AdView.prototype.getBackgroundColor = function () {
	return '';
};
AdView.prototype.setBackgroundColor = function () {
};
AdView.prototype.getBorderColor = function () {
	return '';
};
AdView.prototype.setBorderColor = function () {
};
AdView.prototype.getBorderRadius = function () {
	return 0;
};
AdView.prototype.setBorderRadius = function () {
};
AdView.prototype.getBorderWidth = function () {
	return 0;
};
AdView.prototype.setBorderWidth = function () {
};
AdView.prototype.getBottom = function () {
	return '';
};
AdView.prototype.setBottom = function () {
};
AdView.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
AdView.prototype.setCenter = function () {
};
AdView.prototype.getChildren = function () {
	return [];
};
AdView.prototype.getHeight = function () {
	return '';
};
AdView.prototype.setHeight = function () {
};
AdView.prototype.getLayout = function () {
	return '';
};
AdView.prototype.setLayout = function () {
};
AdView.prototype.getLeft = function () {
	return '';
};
AdView.prototype.setLeft = function () {
};
AdView.prototype.getOpacity = function () {
	return 0;
};
AdView.prototype.setOpacity = function () {
};
AdView.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
AdView.prototype.getRight = function () {
	return '';
};
AdView.prototype.setRight = function () {
};
AdView.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
AdView.prototype.getTintColor = function () {
	return '';
};
AdView.prototype.setTintColor = function () {
};
AdView.prototype.getTop = function () {
	return '';
};
AdView.prototype.setTop = function () {
};
AdView.prototype.getTouchEnabled = function () {
	return true;
};
AdView.prototype.setTouchEnabled = function () {
};
AdView.prototype.getVisible = function () {
	return true;
};
AdView.prototype.setVisible = function () {
};
AdView.prototype.getWidth = function () {
	return '';
};
AdView.prototype.setWidth = function () {
};
AdView.prototype.getAdSize = function () {
	return '';
};
AdView.prototype.setAdSize = function () {
};
module.exports = function (properties) {
	return new AdView(properties);
};