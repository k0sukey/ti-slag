function Toolbar(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iOS.Toolbar';
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
	this.barColor = properties.barColor || '';
	this.items = properties.items || [];
	this.borderTop = properties.borderTop || true;
	this.borderBottom = properties.borderBottom || true;
	this.extendBackground = properties.extendBackground || true;
	this.translucent = properties.translucent || true;
	return this;
}
Toolbar.prototype.addEventListener = function () {
};
Toolbar.prototype.removeEventListener = function () {
};
Toolbar.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Toolbar.prototype.fireEvent = function () {
};
Toolbar.prototype.finishLayout = function () {
	throw new Error('Ti.UI.iOS.Toolbar.finishLayout was deprecated, since 3.0.0');
};
Toolbar.prototype.removeAllChildren = function () {
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
Toolbar.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Toolbar.prototype.add = function () {
};
Toolbar.prototype.animate = function () {
};
Toolbar.prototype.hide = function () {
};
Toolbar.prototype.remove = function () {
};
Toolbar.prototype.show = function () {
};
Toolbar.prototype.getBubbleParent = function () {
	return true;
};
Toolbar.prototype.setBubbleParent = function () {
};
Toolbar.prototype.getApiName = function () {
	return '';
};
Toolbar.prototype.getAccessibilityHidden = function () {
	return true;
};
Toolbar.prototype.setAccessibilityHidden = function () {
};
Toolbar.prototype.getAccessibilityHint = function () {
	return '';
};
Toolbar.prototype.setAccessibilityHint = function () {
};
Toolbar.prototype.getAccessibilityLabel = function () {
	return '';
};
Toolbar.prototype.setAccessibilityLabel = function () {
};
Toolbar.prototype.getAccessibilityValue = function () {
	return '';
};
Toolbar.prototype.setAccessibilityValue = function () {
};
Toolbar.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
Toolbar.prototype.setAnchorPoint = function () {
};
Toolbar.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Toolbar.prototype.getBackgroundGradient = function () {
	return {};
};
Toolbar.prototype.setBackgroundGradient = function () {
};
Toolbar.prototype.getBackgroundImage = function () {
	return '';
};
Toolbar.prototype.setBackgroundImage = function () {
};
Toolbar.prototype.getClipMode = function () {
	return 0;
};
Toolbar.prototype.setClipMode = function () {
};
Toolbar.prototype.getPullBackgroundColor = function () {
	return '';
};
Toolbar.prototype.setPullBackgroundColor = function () {
};
Toolbar.prototype.getTransform = function () {
	return {};
};
Toolbar.prototype.setTransform = function () {
};
Toolbar.prototype.getViewShadowRadius = function () {
	return 0;
};
Toolbar.prototype.setViewShadowRadius = function () {
};
Toolbar.prototype.getViewShadowColor = function () {
	return '';
};
Toolbar.prototype.setViewShadowColor = function () {
};
Toolbar.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
Toolbar.prototype.setViewShadowOffset = function () {
};
Toolbar.prototype.getHorizontalWrap = function () {
	return true;
};
Toolbar.prototype.setHorizontalWrap = function () {
};
Toolbar.prototype.getZIndex = function () {
	return 0;
};
Toolbar.prototype.setZIndex = function () {
};
Toolbar.prototype.getBorderColor = function () {
	return '';
};
Toolbar.prototype.setBorderColor = function () {
};
Toolbar.prototype.getBorderRadius = function () {
	return 0;
};
Toolbar.prototype.setBorderRadius = function () {
};
Toolbar.prototype.getBorderWidth = function () {
	return 0;
};
Toolbar.prototype.setBorderWidth = function () {
};
Toolbar.prototype.getBottom = function () {
	return '';
};
Toolbar.prototype.setBottom = function () {
};
Toolbar.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Toolbar.prototype.setCenter = function () {
};
Toolbar.prototype.getChildren = function () {
	return [];
};
Toolbar.prototype.getHeight = function () {
	return '';
};
Toolbar.prototype.setHeight = function () {
};
Toolbar.prototype.getLeft = function () {
	return '';
};
Toolbar.prototype.setLeft = function () {
};
Toolbar.prototype.getOpacity = function () {
	return 0;
};
Toolbar.prototype.setOpacity = function () {
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
	return '';
};
Toolbar.prototype.setRight = function () {
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
Toolbar.prototype.setTintColor = function () {
};
Toolbar.prototype.getTop = function () {
	return '';
};
Toolbar.prototype.setTop = function () {
};
Toolbar.prototype.getTouchEnabled = function () {
	return true;
};
Toolbar.prototype.setTouchEnabled = function () {
};
Toolbar.prototype.getVisible = function () {
	return true;
};
Toolbar.prototype.setVisible = function () {
};
Toolbar.prototype.getWidth = function () {
	return '';
};
Toolbar.prototype.setWidth = function () {
};
Toolbar.prototype.getBarColor = function () {
	return '';
};
Toolbar.prototype.setBarColor = function () {
};
Toolbar.prototype.getItems = function () {
	return [];
};
Toolbar.prototype.setItems = function () {
};
Toolbar.prototype.getBorderTop = function () {
	return true;
};
Toolbar.prototype.setBorderTop = function () {
};
Toolbar.prototype.getBorderBottom = function () {
	return true;
};
Toolbar.prototype.setBorderBottom = function () {
};
Toolbar.prototype.getExtendBackground = function () {
	return true;
};
Toolbar.prototype.setExtendBackground = function () {
};
Toolbar.prototype.getTranslucent = function () {
	return true;
};
Toolbar.prototype.setTranslucent = function () {
};
module.exports = function (properties) {
	return new Toolbar(properties);
};