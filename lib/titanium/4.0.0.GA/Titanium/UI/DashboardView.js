function DashboardView(properties) {
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
	this.apiName = 'Ti.UI.DashboardView';
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
	this.columnCount = properties.columnCount || 0;
	this.data = properties.data || [];
	this.editable = properties.editable || true;
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
	this.rowCount = properties.rowCount || 0;
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
	this.wobble = properties.wobble || true;
	this.zIndex = properties.zIndex || 0;
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