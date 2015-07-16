function ButtonBar(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.ButtonBar';
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
	this.index = properties.index || 0;
	this.labels = properties.labels || '';
	if (properties.style) {
		throw new Error('Ti.UI.ButtonBar.style was deprecated, since 3.4.1');
	}
	return this;
}
ButtonBar.prototype.addEventListener = function () {
};
ButtonBar.prototype.removeEventListener = function () {
};
ButtonBar.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ButtonBar.prototype.fireEvent = function () {
};
ButtonBar.prototype.finishLayout = function () {
	throw new Error('Ti.UI.ButtonBar.finishLayout was deprecated, since 3.0.0');
};
ButtonBar.prototype.removeAllChildren = function () {
};
ButtonBar.prototype.startLayout = function () {
	throw new Error('Ti.UI.ButtonBar.startLayout was deprecated, since 3.0.0');
};
ButtonBar.prototype.toImage = function () {
	return {};
};
ButtonBar.prototype.updateLayout = function () {
	throw new Error('Ti.UI.ButtonBar.updateLayout was deprecated, since 3.0.0');
};
ButtonBar.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
ButtonBar.prototype.add = function () {
};
ButtonBar.prototype.animate = function () {
};
ButtonBar.prototype.hide = function () {
};
ButtonBar.prototype.remove = function () {
};
ButtonBar.prototype.show = function () {
};
ButtonBar.prototype.getBubbleParent = function () {
	return true;
};
ButtonBar.prototype.setBubbleParent = function () {
};
ButtonBar.prototype.getApiName = function () {
	return '';
};
ButtonBar.prototype.getAccessibilityHidden = function () {
	return true;
};
ButtonBar.prototype.setAccessibilityHidden = function () {
};
ButtonBar.prototype.getAccessibilityHint = function () {
	return '';
};
ButtonBar.prototype.setAccessibilityHint = function () {
};
ButtonBar.prototype.getAccessibilityLabel = function () {
	return '';
};
ButtonBar.prototype.setAccessibilityLabel = function () {
};
ButtonBar.prototype.getAccessibilityValue = function () {
	return '';
};
ButtonBar.prototype.setAccessibilityValue = function () {
};
ButtonBar.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
ButtonBar.prototype.setAnchorPoint = function () {
};
ButtonBar.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ButtonBar.prototype.getBackgroundGradient = function () {
	return {};
};
ButtonBar.prototype.setBackgroundGradient = function () {
};
ButtonBar.prototype.getBackgroundImage = function () {
	return '';
};
ButtonBar.prototype.setBackgroundImage = function () {
};
ButtonBar.prototype.getBackgroundRepeat = function () {
	return true;
};
ButtonBar.prototype.setBackgroundRepeat = function () {
};
ButtonBar.prototype.getBackgroundLeftCap = function () {
	return 0;
};
ButtonBar.prototype.setBackgroundLeftCap = function () {
};
ButtonBar.prototype.getBackgroundTopCap = function () {
	return 0;
};
ButtonBar.prototype.setBackgroundTopCap = function () {
};
ButtonBar.prototype.getClipMode = function () {
	return 0;
};
ButtonBar.prototype.setClipMode = function () {
};
ButtonBar.prototype.getPullBackgroundColor = function () {
	return '';
};
ButtonBar.prototype.setPullBackgroundColor = function () {
};
ButtonBar.prototype.getTransform = function () {
	return {};
};
ButtonBar.prototype.setTransform = function () {
};
ButtonBar.prototype.getViewShadowRadius = function () {
	return 0;
};
ButtonBar.prototype.setViewShadowRadius = function () {
};
ButtonBar.prototype.getViewShadowColor = function () {
	return '';
};
ButtonBar.prototype.setViewShadowColor = function () {
};
ButtonBar.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
ButtonBar.prototype.setViewShadowOffset = function () {
};
ButtonBar.prototype.getHorizontalWrap = function () {
	return true;
};
ButtonBar.prototype.setHorizontalWrap = function () {
};
ButtonBar.prototype.getZIndex = function () {
	return 0;
};
ButtonBar.prototype.setZIndex = function () {
};
ButtonBar.prototype.getBackgroundColor = function () {
	return '';
};
ButtonBar.prototype.setBackgroundColor = function () {
};
ButtonBar.prototype.getBorderColor = function () {
	return '';
};
ButtonBar.prototype.setBorderColor = function () {
};
ButtonBar.prototype.getBorderRadius = function () {
	return 0;
};
ButtonBar.prototype.setBorderRadius = function () {
};
ButtonBar.prototype.getBorderWidth = function () {
	return 0;
};
ButtonBar.prototype.setBorderWidth = function () {
};
ButtonBar.prototype.getBottom = function () {
	return '';
};
ButtonBar.prototype.setBottom = function () {
};
ButtonBar.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ButtonBar.prototype.setCenter = function () {
};
ButtonBar.prototype.getChildren = function () {
	return [];
};
ButtonBar.prototype.getHeight = function () {
	return '';
};
ButtonBar.prototype.setHeight = function () {
};
ButtonBar.prototype.getLayout = function () {
	return '';
};
ButtonBar.prototype.setLayout = function () {
};
ButtonBar.prototype.getLeft = function () {
	return '';
};
ButtonBar.prototype.setLeft = function () {
};
ButtonBar.prototype.getOpacity = function () {
	return 0;
};
ButtonBar.prototype.setOpacity = function () {
};
ButtonBar.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
ButtonBar.prototype.getRight = function () {
	return '';
};
ButtonBar.prototype.setRight = function () {
};
ButtonBar.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
ButtonBar.prototype.getTintColor = function () {
	return '';
};
ButtonBar.prototype.setTintColor = function () {
};
ButtonBar.prototype.getTop = function () {
	return '';
};
ButtonBar.prototype.setTop = function () {
};
ButtonBar.prototype.getTouchEnabled = function () {
	return true;
};
ButtonBar.prototype.setTouchEnabled = function () {
};
ButtonBar.prototype.getVisible = function () {
	return true;
};
ButtonBar.prototype.setVisible = function () {
};
ButtonBar.prototype.getWidth = function () {
	return '';
};
ButtonBar.prototype.setWidth = function () {
};
ButtonBar.prototype.getIndex = function () {
	return 0;
};
ButtonBar.prototype.setIndex = function () {
};
ButtonBar.prototype.getLabels = function () {
	return '';
};
ButtonBar.prototype.setLabels = function () {
};
ButtonBar.prototype.getStyle = function () {
	throw new Error('Ti.UI.ButtonBar.getStyle was deprecated, since 3.4.1');
};
ButtonBar.prototype.setStyle = function () {
	throw new Error('Ti.UI.ButtonBar.setStyle was deprecated, since 3.4.1');
};
module.exports = function (properties) {
	return new ButtonBar(properties);
};