function NavigationGroup(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iPhone.NavigationGroup';
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
	this.window = properties.window || {};
	return this;
}
NavigationGroup.prototype.addEventListener = function () {
};
NavigationGroup.prototype.removeEventListener = function () {
};
NavigationGroup.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
NavigationGroup.prototype.fireEvent = function () {
};
NavigationGroup.prototype.finishLayout = function () {
	throw new Error('Ti.UI.iPhone.NavigationGroup.finishLayout was deprecated, since 3.0.0');
};
NavigationGroup.prototype.startLayout = function () {
	throw new Error('Ti.UI.iPhone.NavigationGroup.startLayout was deprecated, since 3.0.0');
};
NavigationGroup.prototype.toImage = function () {
	return {};
};
NavigationGroup.prototype.updateLayout = function () {
	throw new Error('Ti.UI.iPhone.NavigationGroup.updateLayout was deprecated, since 3.0.0');
};
NavigationGroup.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationGroup.prototype.add = function () {
};
NavigationGroup.prototype.animate = function () {
};
NavigationGroup.prototype.hide = function () {
};
NavigationGroup.prototype.remove = function () {
};
NavigationGroup.prototype.show = function () {
};
NavigationGroup.prototype.close = function () {
};
NavigationGroup.prototype.open = function () {
};
NavigationGroup.prototype.getBubbleParent = function () {
	return true;
};
NavigationGroup.prototype.setBubbleParent = function () {
};
NavigationGroup.prototype.getApiName = function () {
	return '';
};
NavigationGroup.prototype.getAccessibilityHidden = function () {
	return true;
};
NavigationGroup.prototype.setAccessibilityHidden = function () {
};
NavigationGroup.prototype.getAccessibilityHint = function () {
	return '';
};
NavigationGroup.prototype.setAccessibilityHint = function () {
};
NavigationGroup.prototype.getAccessibilityLabel = function () {
	return '';
};
NavigationGroup.prototype.setAccessibilityLabel = function () {
};
NavigationGroup.prototype.getAccessibilityValue = function () {
	return '';
};
NavigationGroup.prototype.setAccessibilityValue = function () {
};
NavigationGroup.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationGroup.prototype.setAnchorPoint = function () {
};
NavigationGroup.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationGroup.prototype.getBackgroundGradient = function () {
	return {};
};
NavigationGroup.prototype.setBackgroundGradient = function () {
};
NavigationGroup.prototype.getBackgroundImage = function () {
	return '';
};
NavigationGroup.prototype.setBackgroundImage = function () {
};
NavigationGroup.prototype.getBackgroundRepeat = function () {
	return true;
};
NavigationGroup.prototype.setBackgroundRepeat = function () {
};
NavigationGroup.prototype.getBackgroundLeftCap = function () {
	return 0;
};
NavigationGroup.prototype.setBackgroundLeftCap = function () {
};
NavigationGroup.prototype.getBackgroundTopCap = function () {
	return 0;
};
NavigationGroup.prototype.setBackgroundTopCap = function () {
};
NavigationGroup.prototype.getClipMode = function () {
	return 0;
};
NavigationGroup.prototype.setClipMode = function () {
};
NavigationGroup.prototype.getPullBackgroundColor = function () {
	return '';
};
NavigationGroup.prototype.setPullBackgroundColor = function () {
};
NavigationGroup.prototype.getTransform = function () {
	return {};
};
NavigationGroup.prototype.setTransform = function () {
};
NavigationGroup.prototype.getViewShadowRadius = function () {
	return 0;
};
NavigationGroup.prototype.setViewShadowRadius = function () {
};
NavigationGroup.prototype.getViewShadowColor = function () {
	return '';
};
NavigationGroup.prototype.setViewShadowColor = function () {
};
NavigationGroup.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationGroup.prototype.setViewShadowOffset = function () {
};
NavigationGroup.prototype.getHorizontalWrap = function () {
	return true;
};
NavigationGroup.prototype.setHorizontalWrap = function () {
};
NavigationGroup.prototype.getZIndex = function () {
	return 0;
};
NavigationGroup.prototype.setZIndex = function () {
};
NavigationGroup.prototype.getBackgroundColor = function () {
	return '';
};
NavigationGroup.prototype.setBackgroundColor = function () {
};
NavigationGroup.prototype.getBorderColor = function () {
	return '';
};
NavigationGroup.prototype.setBorderColor = function () {
};
NavigationGroup.prototype.getBorderRadius = function () {
	return 0;
};
NavigationGroup.prototype.setBorderRadius = function () {
};
NavigationGroup.prototype.getBorderWidth = function () {
	return 0;
};
NavigationGroup.prototype.setBorderWidth = function () {
};
NavigationGroup.prototype.getBottom = function () {
	return '';
};
NavigationGroup.prototype.setBottom = function () {
};
NavigationGroup.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationGroup.prototype.setCenter = function () {
};
NavigationGroup.prototype.getChildren = function () {
	return [];
};
NavigationGroup.prototype.getHeight = function () {
	return '';
};
NavigationGroup.prototype.setHeight = function () {
};
NavigationGroup.prototype.getLayout = function () {
	return '';
};
NavigationGroup.prototype.setLayout = function () {
};
NavigationGroup.prototype.getLeft = function () {
	return '';
};
NavigationGroup.prototype.setLeft = function () {
};
NavigationGroup.prototype.getOpacity = function () {
	return 0;
};
NavigationGroup.prototype.setOpacity = function () {
};
NavigationGroup.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
NavigationGroup.prototype.getRight = function () {
	return '';
};
NavigationGroup.prototype.setRight = function () {
};
NavigationGroup.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
NavigationGroup.prototype.getTintColor = function () {
	return '';
};
NavigationGroup.prototype.setTintColor = function () {
};
NavigationGroup.prototype.getTop = function () {
	return '';
};
NavigationGroup.prototype.setTop = function () {
};
NavigationGroup.prototype.getTouchEnabled = function () {
	return true;
};
NavigationGroup.prototype.setTouchEnabled = function () {
};
NavigationGroup.prototype.getVisible = function () {
	return true;
};
NavigationGroup.prototype.setVisible = function () {
};
NavigationGroup.prototype.getWidth = function () {
	return '';
};
NavigationGroup.prototype.setWidth = function () {
};
NavigationGroup.prototype.getWindow = function () {
	return {};
};
NavigationGroup.prototype.setWindow = function () {
};
module.exports = function (properties) {
	return new NavigationGroup(properties);
};