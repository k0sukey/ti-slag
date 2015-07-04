function Toolbar(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.iOS.Toolbar';
	this.backgroundGradient = properties.backgroundGradient || undefined;
	this.backgroundImage = properties.backgroundImage || undefined;
	this.barColor = properties.barColor || undefined;
	this.borderBottom = properties.borderBottom || undefined;
	this.borderColor = properties.borderColor || undefined;
	this.borderRadius = properties.borderRadius || undefined;
	this.borderTop = properties.borderTop || undefined;
	this.borderWidth = properties.borderWidth || undefined;
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.extendBackground = properties.extendBackground || undefined;
	this.height = properties.height || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.items = properties.items || undefined;
	this.left = properties.left || undefined;
	this.opacity = properties.opacity || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.size = properties.size || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.translucent = properties.translucent || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;
	return this;
}
Toolbar.prototype.add = function () {
};
Toolbar.prototype.addEventListener = function () {
};
Toolbar.prototype.animate = function () {
};
Toolbar.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Toolbar.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Toolbar.prototype.finishLayout = function () {
	throw new Error('Ti.UI.iOS.Toolbar.finishLayout was deprecated, since 3.0.0');
};
Toolbar.prototype.fireEvent = function () {
};
Toolbar.prototype.getAccessibilityHidden = function () {
	return true;
};
Toolbar.prototype.getAccessibilityHint = function () {
	return '';
};
Toolbar.prototype.getAccessibilityLabel = function () {
	return '';
};
Toolbar.prototype.getAccessibilityValue = function () {
	return '';
};
Toolbar.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
Toolbar.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Toolbar.prototype.getApiName = function () {
	return '';
};
Toolbar.prototype.getBackgroundGradient = function () {
	return {};
};
Toolbar.prototype.getBackgroundImage = function () {
	return '';
};
Toolbar.prototype.getBarColor = function () {
	return '';
};
Toolbar.prototype.getBorderBottom = function () {
	return true;
};
Toolbar.prototype.getBorderColor = function () {
	return '';
};
Toolbar.prototype.getBorderRadius = function () {
	return 0;
};
Toolbar.prototype.getBorderTop = function () {
	return true;
};
Toolbar.prototype.getBorderWidth = function () {
	return 0;
};
Toolbar.prototype.getBottom = function () {
	return 0;
};
Toolbar.prototype.getBubbleParent = function () {
	return true;
};
Toolbar.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Toolbar.prototype.getChildren = function () {
	return [];
};
Toolbar.prototype.getClipMode = function () {
	return 0;
};
Toolbar.prototype.getExtendBackground = function () {
	return true;
};
Toolbar.prototype.getHeight = function () {
	return 0;
};
Toolbar.prototype.getHorizontalWrap = function () {
	return true;
};
Toolbar.prototype.getItems = function () {
	return [];
};
Toolbar.prototype.getLeft = function () {
	return 0;
};
Toolbar.prototype.getOpacity = function () {
	return 0;
};
Toolbar.prototype.getPullBackgroundColor = function () {
	return '';
};
Toolbar.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
Toolbar.prototype.getRight = function () {
	return 0;
};
Toolbar.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
Toolbar.prototype.getTintColor = function () {
	return '';
};
Toolbar.prototype.getTop = function () {
	return 0;
};
Toolbar.prototype.getTouchEnabled = function () {
	return true;
};
Toolbar.prototype.getTransform = function () {
	return {};
};
Toolbar.prototype.getTranslucent = function () {
	return true;
};
Toolbar.prototype.getViewShadowColor = function () {
	return '';
};
Toolbar.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
Toolbar.prototype.getViewShadowRadius = function () {
	return 0;
};
Toolbar.prototype.getVisible = function () {
	return true;
};
Toolbar.prototype.getWidth = function () {
	return 0;
};
Toolbar.prototype.getZIndex = function () {
	return 0;
};
Toolbar.prototype.hide = function () {
};
Toolbar.prototype.remove = function () {
};
Toolbar.prototype.removeAllChildren = function () {
};
Toolbar.prototype.removeEventListener = function () {
};
Toolbar.prototype.setAccessibilityHidden = function () {
};
Toolbar.prototype.setAccessibilityHint = function () {
};
Toolbar.prototype.setAccessibilityLabel = function () {
};
Toolbar.prototype.setAccessibilityValue = function () {
};
Toolbar.prototype.setAnchorPoint = function () {
};
Toolbar.prototype.setBackgroundGradient = function () {
};
Toolbar.prototype.setBackgroundImage = function () {
};
Toolbar.prototype.setBarColor = function () {
};
Toolbar.prototype.setBorderBottom = function () {
};
Toolbar.prototype.setBorderColor = function () {
};
Toolbar.prototype.setBorderRadius = function () {
};
Toolbar.prototype.setBorderTop = function () {
};
Toolbar.prototype.setBorderWidth = function () {
};
Toolbar.prototype.setBottom = function () {
};
Toolbar.prototype.setBubbleParent = function () {
};
Toolbar.prototype.setCenter = function () {
};
Toolbar.prototype.setClipMode = function () {
};
Toolbar.prototype.setHeight = function () {
};
Toolbar.prototype.setHorizontalWrap = function () {
};
Toolbar.prototype.setItems = function () {
};
Toolbar.prototype.setLeft = function () {
};
Toolbar.prototype.setOpacity = function () {
};
Toolbar.prototype.setPullBackgroundColor = function () {
};
Toolbar.prototype.setRight = function () {
};
Toolbar.prototype.setTintColor = function () {
};
Toolbar.prototype.setTop = function () {
};
Toolbar.prototype.setTouchEnabled = function () {
};
Toolbar.prototype.setTransform = function () {
};
Toolbar.prototype.setTranslucent = function () {
};
Toolbar.prototype.setViewShadowColor = function () {
};
Toolbar.prototype.setViewShadowOffset = function () {
};
Toolbar.prototype.setViewShadowRadius = function () {
};
Toolbar.prototype.setVisible = function () {
};
Toolbar.prototype.setWidth = function () {
};
Toolbar.prototype.setZIndex = function () {
};
Toolbar.prototype.show = function () {
};
Toolbar.prototype.startLayout = function () {
	throw new Error('Ti.UI.iOS.Toolbar.startLayout was deprecated, since 3.0.0');
};
Toolbar.prototype.toImage = function () {
	return {};
};
Toolbar.prototype.updateLayout = function () {
	throw new Error('Ti.UI.iOS.Toolbar.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new Toolbar(properties);
};