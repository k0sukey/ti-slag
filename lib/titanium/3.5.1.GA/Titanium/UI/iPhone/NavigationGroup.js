function NavigationGroup(properties) {
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
	this.apiName = 'Ti.UI.iPhone.NavigationGroup';
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
	this.window = properties.window || {};
	this.zIndex = properties.zIndex || 0;
	return this;
}
NavigationGroup.prototype.add = function () {
};
NavigationGroup.prototype.addEventListener = function () {
};
NavigationGroup.prototype.animate = function () {
};
NavigationGroup.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
NavigationGroup.prototype.close = function () {
};
NavigationGroup.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationGroup.prototype.finishLayout = function () {
	throw new Error('Ti.UI.iPhone.NavigationGroup.finishLayout was deprecated, since 3.0.0');
};
NavigationGroup.prototype.fireEvent = function () {
};
NavigationGroup.prototype.getAccessibilityHidden = function () {
	return true;
};
NavigationGroup.prototype.getAccessibilityHint = function () {
	return '';
};
NavigationGroup.prototype.getAccessibilityLabel = function () {
	return '';
};
NavigationGroup.prototype.getAccessibilityValue = function () {
	return '';
};
NavigationGroup.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationGroup.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationGroup.prototype.getApiName = function () {
	return '';
};
NavigationGroup.prototype.getBackgroundColor = function () {
	return '';
};
NavigationGroup.prototype.getBackgroundGradient = function () {
	return {};
};
NavigationGroup.prototype.getBackgroundImage = function () {
	return '';
};
NavigationGroup.prototype.getBackgroundLeftCap = function () {
	return 0;
};
NavigationGroup.prototype.getBackgroundRepeat = function () {
	return true;
};
NavigationGroup.prototype.getBackgroundTopCap = function () {
	return 0;
};
NavigationGroup.prototype.getBorderColor = function () {
	return '';
};
NavigationGroup.prototype.getBorderRadius = function () {
	return 0;
};
NavigationGroup.prototype.getBorderWidth = function () {
	return 0;
};
NavigationGroup.prototype.getBottom = function () {
	return 0;
};
NavigationGroup.prototype.getBubbleParent = function () {
	return true;
};
NavigationGroup.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationGroup.prototype.getChildren = function () {
	return [];
};
NavigationGroup.prototype.getClipMode = function () {
	return 0;
};
NavigationGroup.prototype.getHeight = function () {
	return 0;
};
NavigationGroup.prototype.getHorizontalWrap = function () {
	return true;
};
NavigationGroup.prototype.getLayout = function () {
	return '';
};
NavigationGroup.prototype.getLeft = function () {
	return 0;
};
NavigationGroup.prototype.getOpacity = function () {
	return 0;
};
NavigationGroup.prototype.getPullBackgroundColor = function () {
	return '';
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
	return 0;
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
NavigationGroup.prototype.getTop = function () {
	return 0;
};
NavigationGroup.prototype.getTouchEnabled = function () {
	return true;
};
NavigationGroup.prototype.getTransform = function () {
	return {};
};
NavigationGroup.prototype.getViewShadowColor = function () {
	return '';
};
NavigationGroup.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationGroup.prototype.getViewShadowRadius = function () {
	return 0;
};
NavigationGroup.prototype.getVisible = function () {
	return true;
};
NavigationGroup.prototype.getWidth = function () {
	return 0;
};
NavigationGroup.prototype.getWindow = function () {
	return {};
};
NavigationGroup.prototype.getZIndex = function () {
	return 0;
};
NavigationGroup.prototype.hide = function () {
};
NavigationGroup.prototype.open = function () {
};
NavigationGroup.prototype.remove = function () {
};
NavigationGroup.prototype.removeEventListener = function () {
};
NavigationGroup.prototype.setAccessibilityHidden = function () {
};
NavigationGroup.prototype.setAccessibilityHint = function () {
};
NavigationGroup.prototype.setAccessibilityLabel = function () {
};
NavigationGroup.prototype.setAccessibilityValue = function () {
};
NavigationGroup.prototype.setAnchorPoint = function () {
};
NavigationGroup.prototype.setBackgroundColor = function () {
};
NavigationGroup.prototype.setBackgroundGradient = function () {
};
NavigationGroup.prototype.setBackgroundImage = function () {
};
NavigationGroup.prototype.setBackgroundLeftCap = function () {
};
NavigationGroup.prototype.setBackgroundRepeat = function () {
};
NavigationGroup.prototype.setBackgroundTopCap = function () {
};
NavigationGroup.prototype.setBorderColor = function () {
};
NavigationGroup.prototype.setBorderRadius = function () {
};
NavigationGroup.prototype.setBorderWidth = function () {
};
NavigationGroup.prototype.setBottom = function () {
};
NavigationGroup.prototype.setBubbleParent = function () {
};
NavigationGroup.prototype.setCenter = function () {
};
NavigationGroup.prototype.setClipMode = function () {
};
NavigationGroup.prototype.setHeight = function () {
};
NavigationGroup.prototype.setHorizontalWrap = function () {
};
NavigationGroup.prototype.setLayout = function () {
};
NavigationGroup.prototype.setLeft = function () {
};
NavigationGroup.prototype.setOpacity = function () {
};
NavigationGroup.prototype.setPullBackgroundColor = function () {
};
NavigationGroup.prototype.setRight = function () {
};
NavigationGroup.prototype.setTintColor = function () {
};
NavigationGroup.prototype.setTop = function () {
};
NavigationGroup.prototype.setTouchEnabled = function () {
};
NavigationGroup.prototype.setTransform = function () {
};
NavigationGroup.prototype.setViewShadowColor = function () {
};
NavigationGroup.prototype.setViewShadowOffset = function () {
};
NavigationGroup.prototype.setViewShadowRadius = function () {
};
NavigationGroup.prototype.setVisible = function () {
};
NavigationGroup.prototype.setWidth = function () {
};
NavigationGroup.prototype.setZIndex = function () {
};
NavigationGroup.prototype.show = function () {
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
module.exports = function (properties) {
	return new NavigationGroup(properties);
};