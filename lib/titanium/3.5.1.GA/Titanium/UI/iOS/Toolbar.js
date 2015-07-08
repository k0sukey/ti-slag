function Toolbar(properties) {
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
	this.apiName = 'Ti.UI.iOS.Toolbar';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.barColor = properties.barColor || '';
	this.borderBottom = properties.borderBottom || true;
	this.borderColor = properties.borderColor || '';
	this.borderRadius = properties.borderRadius || 0;
	this.borderTop = properties.borderTop || true;
	this.borderWidth = properties.borderWidth || 0;
	this.bottom = properties.bottom || 0;
	this.bubbleParent = properties.bubbleParent || true;
	this.center = properties.center || {
		x: 0,
		y: 0
	};
	this.children = properties.children || [];
	this.clipMode = properties.clipMode || 0;
	this.extendBackground = properties.extendBackground || true;
	this.height = properties.height || 0;
	this.horizontalWrap = properties.horizontalWrap || true;
	this.items = properties.items || [];
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
	this.translucent = properties.translucent || true;
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