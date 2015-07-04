function DashboardView(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.DashboardView';
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
	this.columnCount = properties.columnCount || undefined;
	this.data = properties.data || undefined;
	this.editable = properties.editable || undefined;
	this.height = properties.height || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.opacity = properties.opacity || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.rowCount = properties.rowCount || undefined;
	this.size = properties.size || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.wobble = properties.wobble || undefined;
	this.zIndex = properties.zIndex || undefined;
	return this;
}
DashboardView.prototype.add = function () {
};
DashboardView.prototype.addEventListener = function () {
};
DashboardView.prototype.animate = function () {
};
DashboardView.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
DashboardView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
DashboardView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.DashboardView.finishLayout was deprecated, since 3.0.0');
};
DashboardView.prototype.fireEvent = function () {
};
DashboardView.prototype.getAccessibilityHidden = function () {
	return true;
};
DashboardView.prototype.getAccessibilityHint = function () {
	return '';
};
DashboardView.prototype.getAccessibilityLabel = function () {
	return '';
};
DashboardView.prototype.getAccessibilityValue = function () {
	return '';
};
DashboardView.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
DashboardView.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
DashboardView.prototype.getApiName = function () {
	return '';
};
DashboardView.prototype.getBackgroundColor = function () {
	return '';
};
DashboardView.prototype.getBackgroundGradient = function () {
	return {};
};
DashboardView.prototype.getBackgroundImage = function () {
	return '';
};
DashboardView.prototype.getBackgroundLeftCap = function () {
	return 0;
};
DashboardView.prototype.getBackgroundRepeat = function () {
	return true;
};
DashboardView.prototype.getBackgroundTopCap = function () {
	return 0;
};
DashboardView.prototype.getBorderColor = function () {
	return '';
};
DashboardView.prototype.getBorderRadius = function () {
	return 0;
};
DashboardView.prototype.getBorderWidth = function () {
	return 0;
};
DashboardView.prototype.getBottom = function () {
	return 0;
};
DashboardView.prototype.getBubbleParent = function () {
	return true;
};
DashboardView.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
DashboardView.prototype.getChildren = function () {
	return [];
};
DashboardView.prototype.getClipMode = function () {
	return 0;
};
DashboardView.prototype.getColumnCount = function () {
	return 0;
};
DashboardView.prototype.getData = function () {
	return [];
};
DashboardView.prototype.getEditable = function () {
	return true;
};
DashboardView.prototype.getHeight = function () {
	return 0;
};
DashboardView.prototype.getHorizontalWrap = function () {
	return true;
};
DashboardView.prototype.getLayout = function () {
	return '';
};
DashboardView.prototype.getLeft = function () {
	return 0;
};
DashboardView.prototype.getOpacity = function () {
	return 0;
};
DashboardView.prototype.getPullBackgroundColor = function () {
	return '';
};
DashboardView.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
DashboardView.prototype.getRight = function () {
	return 0;
};
DashboardView.prototype.getRowCount = function () {
	return 0;
};
DashboardView.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
DashboardView.prototype.getTintColor = function () {
	return '';
};
DashboardView.prototype.getTop = function () {
	return 0;
};
DashboardView.prototype.getTouchEnabled = function () {
	return true;
};
DashboardView.prototype.getTransform = function () {
	return {};
};
DashboardView.prototype.getViewShadowColor = function () {
	return '';
};
DashboardView.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
DashboardView.prototype.getViewShadowRadius = function () {
	return 0;
};
DashboardView.prototype.getVisible = function () {
	return true;
};
DashboardView.prototype.getWidth = function () {
	return 0;
};
DashboardView.prototype.getWobble = function () {
	return true;
};
DashboardView.prototype.getZIndex = function () {
	return 0;
};
DashboardView.prototype.hide = function () {
};
DashboardView.prototype.remove = function () {
};
DashboardView.prototype.removeAllChildren = function () {
};
DashboardView.prototype.removeEventListener = function () {
};
DashboardView.prototype.setAccessibilityHidden = function () {
};
DashboardView.prototype.setAccessibilityHint = function () {
};
DashboardView.prototype.setAccessibilityLabel = function () {
};
DashboardView.prototype.setAccessibilityValue = function () {
};
DashboardView.prototype.setAnchorPoint = function () {
};
DashboardView.prototype.setBackgroundColor = function () {
};
DashboardView.prototype.setBackgroundGradient = function () {
};
DashboardView.prototype.setBackgroundImage = function () {
};
DashboardView.prototype.setBackgroundLeftCap = function () {
};
DashboardView.prototype.setBackgroundRepeat = function () {
};
DashboardView.prototype.setBackgroundTopCap = function () {
};
DashboardView.prototype.setBorderColor = function () {
};
DashboardView.prototype.setBorderRadius = function () {
};
DashboardView.prototype.setBorderWidth = function () {
};
DashboardView.prototype.setBottom = function () {
};
DashboardView.prototype.setBubbleParent = function () {
};
DashboardView.prototype.setCenter = function () {
};
DashboardView.prototype.setClipMode = function () {
};
DashboardView.prototype.setData = function () {
};
DashboardView.prototype.setEditable = function () {
};
DashboardView.prototype.setHeight = function () {
};
DashboardView.prototype.setHorizontalWrap = function () {
};
DashboardView.prototype.setLayout = function () {
};
DashboardView.prototype.setLeft = function () {
};
DashboardView.prototype.setOpacity = function () {
};
DashboardView.prototype.setPullBackgroundColor = function () {
};
DashboardView.prototype.setRight = function () {
};
DashboardView.prototype.setTintColor = function () {
};
DashboardView.prototype.setTop = function () {
};
DashboardView.prototype.setTouchEnabled = function () {
};
DashboardView.prototype.setTransform = function () {
};
DashboardView.prototype.setViewShadowColor = function () {
};
DashboardView.prototype.setViewShadowOffset = function () {
};
DashboardView.prototype.setViewShadowRadius = function () {
};
DashboardView.prototype.setVisible = function () {
};
DashboardView.prototype.setWidth = function () {
};
DashboardView.prototype.setWobble = function () {
};
DashboardView.prototype.setZIndex = function () {
};
DashboardView.prototype.show = function () {
};
DashboardView.prototype.startEditing = function () {
};
DashboardView.prototype.startLayout = function () {
	throw new Error('Ti.UI.DashboardView.startLayout was deprecated, since 3.0.0');
};
DashboardView.prototype.stopEditing = function () {
};
DashboardView.prototype.toImage = function () {
	return {};
};
DashboardView.prototype.updateLayout = function () {
	throw new Error('Ti.UI.DashboardView.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new DashboardView(properties);
};