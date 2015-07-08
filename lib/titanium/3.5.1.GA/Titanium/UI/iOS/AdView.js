function AdView(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || true;
	this.accessibilityHint = properties.accessibilityHint || '';
	this.accessibilityLabel = properties.accessibilityLabel || '';
	this.accessibilityValue = properties.accessibilityValue || '';
	this.adSize = properties.adSize || '';
	this.anchorPoint = properties.anchorPoint || {
		x: 0,
		y: 0
	};
	this.animatedCenter = properties.animatedCenter || {
		x: 0,
		y: 0
	};
	this.apiName = 'Ti.UI.iOS.AdView';
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
AdView.prototype.add = function () {
};
AdView.prototype.addEventListener = function () {
};
AdView.prototype.animate = function () {
};
AdView.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
AdView.prototype.cancelAction = function () {
};
AdView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
AdView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.iOS.AdView.finishLayout was deprecated, since 3.0.0');
};
AdView.prototype.fireEvent = function () {
};
AdView.prototype.getAccessibilityHidden = function () {
	return true;
};
AdView.prototype.getAccessibilityHint = function () {
	return '';
};
AdView.prototype.getAccessibilityLabel = function () {
	return '';
};
AdView.prototype.getAccessibilityValue = function () {
	return '';
};
AdView.prototype.getAdSize = function () {
	return '';
};
AdView.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
AdView.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
AdView.prototype.getApiName = function () {
	return '';
};
AdView.prototype.getBackgroundColor = function () {
	return '';
};
AdView.prototype.getBackgroundGradient = function () {
	return {};
};
AdView.prototype.getBackgroundImage = function () {
	return '';
};
AdView.prototype.getBackgroundLeftCap = function () {
	return 0;
};
AdView.prototype.getBackgroundRepeat = function () {
	return true;
};
AdView.prototype.getBackgroundTopCap = function () {
	return 0;
};
AdView.prototype.getBorderColor = function () {
	return '';
};
AdView.prototype.getBorderRadius = function () {
	return 0;
};
AdView.prototype.getBorderWidth = function () {
	return 0;
};
AdView.prototype.getBottom = function () {
	return 0;
};
AdView.prototype.getBubbleParent = function () {
	return true;
};
AdView.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
AdView.prototype.getChildren = function () {
	return [];
};
AdView.prototype.getClipMode = function () {
	return 0;
};
AdView.prototype.getHeight = function () {
	return 0;
};
AdView.prototype.getHorizontalWrap = function () {
	return true;
};
AdView.prototype.getLayout = function () {
	return '';
};
AdView.prototype.getLeft = function () {
	return 0;
};
AdView.prototype.getOpacity = function () {
	return 0;
};
AdView.prototype.getPullBackgroundColor = function () {
	return '';
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
	return 0;
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
AdView.prototype.getTop = function () {
	return 0;
};
AdView.prototype.getTouchEnabled = function () {
	return true;
};
AdView.prototype.getTransform = function () {
	return {};
};
AdView.prototype.getViewShadowColor = function () {
	return '';
};
AdView.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
AdView.prototype.getViewShadowRadius = function () {
	return 0;
};
AdView.prototype.getVisible = function () {
	return true;
};
AdView.prototype.getWidth = function () {
	return 0;
};
AdView.prototype.getZIndex = function () {
	return 0;
};
AdView.prototype.hide = function () {
};
AdView.prototype.remove = function () {
};
AdView.prototype.removeAllChildren = function () {
};
AdView.prototype.removeEventListener = function () {
};
AdView.prototype.setAccessibilityHidden = function () {
};
AdView.prototype.setAccessibilityHint = function () {
};
AdView.prototype.setAccessibilityLabel = function () {
};
AdView.prototype.setAccessibilityValue = function () {
};
AdView.prototype.setAdSize = function () {
};
AdView.prototype.setAnchorPoint = function () {
};
AdView.prototype.setBackgroundColor = function () {
};
AdView.prototype.setBackgroundGradient = function () {
};
AdView.prototype.setBackgroundImage = function () {
};
AdView.prototype.setBackgroundLeftCap = function () {
};
AdView.prototype.setBackgroundRepeat = function () {
};
AdView.prototype.setBackgroundTopCap = function () {
};
AdView.prototype.setBorderColor = function () {
};
AdView.prototype.setBorderRadius = function () {
};
AdView.prototype.setBorderWidth = function () {
};
AdView.prototype.setBottom = function () {
};
AdView.prototype.setBubbleParent = function () {
};
AdView.prototype.setCenter = function () {
};
AdView.prototype.setClipMode = function () {
};
AdView.prototype.setHeight = function () {
};
AdView.prototype.setHorizontalWrap = function () {
};
AdView.prototype.setLayout = function () {
};
AdView.prototype.setLeft = function () {
};
AdView.prototype.setOpacity = function () {
};
AdView.prototype.setPullBackgroundColor = function () {
};
AdView.prototype.setRight = function () {
};
AdView.prototype.setTintColor = function () {
};
AdView.prototype.setTop = function () {
};
AdView.prototype.setTouchEnabled = function () {
};
AdView.prototype.setTransform = function () {
};
AdView.prototype.setViewShadowColor = function () {
};
AdView.prototype.setViewShadowOffset = function () {
};
AdView.prototype.setViewShadowRadius = function () {
};
AdView.prototype.setVisible = function () {
};
AdView.prototype.setWidth = function () {
};
AdView.prototype.setZIndex = function () {
};
AdView.prototype.show = function () {
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
module.exports = function (properties) {
	return new AdView(properties);
};