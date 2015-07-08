function ButtonBar(properties) {
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
	this.apiName = 'Ti.UI.ButtonBar';
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
	this.index = properties.index || 0;
	this.labels = properties.labels || '';
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
	this.style = properties.style || 0;
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
ButtonBar.prototype.add = function () {
};
ButtonBar.prototype.addEventListener = function () {
};
ButtonBar.prototype.animate = function () {
};
ButtonBar.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ButtonBar.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
ButtonBar.prototype.finishLayout = function () {
	throw new Error('Ti.UI.ButtonBar.finishLayout was deprecated, since 3.0.0');
};
ButtonBar.prototype.fireEvent = function () {
};
ButtonBar.prototype.getAccessibilityHidden = function () {
	return true;
};
ButtonBar.prototype.getAccessibilityHint = function () {
	return '';
};
ButtonBar.prototype.getAccessibilityLabel = function () {
	return '';
};
ButtonBar.prototype.getAccessibilityValue = function () {
	return '';
};
ButtonBar.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
ButtonBar.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ButtonBar.prototype.getApiName = function () {
	return '';
};
ButtonBar.prototype.getBackgroundColor = function () {
	return '';
};
ButtonBar.prototype.getBackgroundGradient = function () {
	return {};
};
ButtonBar.prototype.getBackgroundImage = function () {
	return '';
};
ButtonBar.prototype.getBackgroundLeftCap = function () {
	return 0;
};
ButtonBar.prototype.getBackgroundRepeat = function () {
	return true;
};
ButtonBar.prototype.getBackgroundTopCap = function () {
	return 0;
};
ButtonBar.prototype.getBorderColor = function () {
	return '';
};
ButtonBar.prototype.getBorderRadius = function () {
	return 0;
};
ButtonBar.prototype.getBorderWidth = function () {
	return 0;
};
ButtonBar.prototype.getBottom = function () {
	return 0;
};
ButtonBar.prototype.getBubbleParent = function () {
	return true;
};
ButtonBar.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ButtonBar.prototype.getChildren = function () {
	return [];
};
ButtonBar.prototype.getClipMode = function () {
	return 0;
};
ButtonBar.prototype.getHeight = function () {
	return 0;
};
ButtonBar.prototype.getHorizontalWrap = function () {
	return true;
};
ButtonBar.prototype.getIndex = function () {
	return 0;
};
ButtonBar.prototype.getLabels = function () {
	return '';
};
ButtonBar.prototype.getLayout = function () {
	return '';
};
ButtonBar.prototype.getLeft = function () {
	return 0;
};
ButtonBar.prototype.getOpacity = function () {
	return 0;
};
ButtonBar.prototype.getPullBackgroundColor = function () {
	return '';
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
	return 0;
};
ButtonBar.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
ButtonBar.prototype.getStyle = function () {
	return 0;
};
ButtonBar.prototype.getTintColor = function () {
	return '';
};
ButtonBar.prototype.getTop = function () {
	return 0;
};
ButtonBar.prototype.getTouchEnabled = function () {
	return true;
};
ButtonBar.prototype.getTransform = function () {
	return {};
};
ButtonBar.prototype.getViewShadowColor = function () {
	return '';
};
ButtonBar.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
ButtonBar.prototype.getViewShadowRadius = function () {
	return 0;
};
ButtonBar.prototype.getVisible = function () {
	return true;
};
ButtonBar.prototype.getWidth = function () {
	return 0;
};
ButtonBar.prototype.getZIndex = function () {
	return 0;
};
ButtonBar.prototype.hide = function () {
};
ButtonBar.prototype.remove = function () {
};
ButtonBar.prototype.removeAllChildren = function () {
};
ButtonBar.prototype.removeEventListener = function () {
};
ButtonBar.prototype.setAccessibilityHidden = function () {
};
ButtonBar.prototype.setAccessibilityHint = function () {
};
ButtonBar.prototype.setAccessibilityLabel = function () {
};
ButtonBar.prototype.setAccessibilityValue = function () {
};
ButtonBar.prototype.setAnchorPoint = function () {
};
ButtonBar.prototype.setBackgroundColor = function () {
};
ButtonBar.prototype.setBackgroundGradient = function () {
};
ButtonBar.prototype.setBackgroundImage = function () {
};
ButtonBar.prototype.setBackgroundLeftCap = function () {
};
ButtonBar.prototype.setBackgroundRepeat = function () {
};
ButtonBar.prototype.setBackgroundTopCap = function () {
};
ButtonBar.prototype.setBorderColor = function () {
};
ButtonBar.prototype.setBorderRadius = function () {
};
ButtonBar.prototype.setBorderWidth = function () {
};
ButtonBar.prototype.setBottom = function () {
};
ButtonBar.prototype.setBubbleParent = function () {
};
ButtonBar.prototype.setCenter = function () {
};
ButtonBar.prototype.setClipMode = function () {
};
ButtonBar.prototype.setHeight = function () {
};
ButtonBar.prototype.setHorizontalWrap = function () {
};
ButtonBar.prototype.setIndex = function () {
};
ButtonBar.prototype.setLabels = function () {
};
ButtonBar.prototype.setLayout = function () {
};
ButtonBar.prototype.setLeft = function () {
};
ButtonBar.prototype.setOpacity = function () {
};
ButtonBar.prototype.setPullBackgroundColor = function () {
};
ButtonBar.prototype.setRight = function () {
};
ButtonBar.prototype.setStyle = function () {
};
ButtonBar.prototype.setTintColor = function () {
};
ButtonBar.prototype.setTop = function () {
};
ButtonBar.prototype.setTouchEnabled = function () {
};
ButtonBar.prototype.setTransform = function () {
};
ButtonBar.prototype.setViewShadowColor = function () {
};
ButtonBar.prototype.setViewShadowOffset = function () {
};
ButtonBar.prototype.setViewShadowRadius = function () {
};
ButtonBar.prototype.setVisible = function () {
};
ButtonBar.prototype.setWidth = function () {
};
ButtonBar.prototype.setZIndex = function () {
};
ButtonBar.prototype.show = function () {
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
module.exports = function (properties) {
	return new ButtonBar(properties);
};