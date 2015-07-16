function DashboardView(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.DashboardView';
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
	this.columnCount = properties.columnCount || 0;
	this.rowCount = properties.rowCount || 0;
	this.data = properties.data || [];
	this.editable = properties.editable || true;
	this.wobble = properties.wobble || true;
	return this;
}
DashboardView.prototype.addEventListener = function () {
};
DashboardView.prototype.removeEventListener = function () {
};
DashboardView.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
DashboardView.prototype.fireEvent = function () {
};
DashboardView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.DashboardView.finishLayout was deprecated, since 3.0.0');
};
DashboardView.prototype.removeAllChildren = function () {
};
DashboardView.prototype.startLayout = function () {
	throw new Error('Ti.UI.DashboardView.startLayout was deprecated, since 3.0.0');
};
DashboardView.prototype.toImage = function () {
	return {};
};
DashboardView.prototype.updateLayout = function () {
	throw new Error('Ti.UI.DashboardView.updateLayout was deprecated, since 3.0.0');
};
DashboardView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
DashboardView.prototype.add = function () {
};
DashboardView.prototype.animate = function () {
};
DashboardView.prototype.hide = function () {
};
DashboardView.prototype.remove = function () {
};
DashboardView.prototype.show = function () {
};
DashboardView.prototype.startEditing = function () {
};
DashboardView.prototype.stopEditing = function () {
};
DashboardView.prototype.getBubbleParent = function () {
	return true;
};
DashboardView.prototype.setBubbleParent = function () {
};
DashboardView.prototype.getApiName = function () {
	return '';
};
DashboardView.prototype.getAccessibilityHidden = function () {
	return true;
};
DashboardView.prototype.setAccessibilityHidden = function () {
};
DashboardView.prototype.getAccessibilityHint = function () {
	return '';
};
DashboardView.prototype.setAccessibilityHint = function () {
};
DashboardView.prototype.getAccessibilityLabel = function () {
	return '';
};
DashboardView.prototype.setAccessibilityLabel = function () {
};
DashboardView.prototype.getAccessibilityValue = function () {
	return '';
};
DashboardView.prototype.setAccessibilityValue = function () {
};
DashboardView.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
DashboardView.prototype.setAnchorPoint = function () {
};
DashboardView.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
DashboardView.prototype.getBackgroundGradient = function () {
	return {};
};
DashboardView.prototype.setBackgroundGradient = function () {
};
DashboardView.prototype.getBackgroundImage = function () {
	return '';
};
DashboardView.prototype.setBackgroundImage = function () {
};
DashboardView.prototype.getBackgroundRepeat = function () {
	return true;
};
DashboardView.prototype.setBackgroundRepeat = function () {
};
DashboardView.prototype.getBackgroundLeftCap = function () {
	return 0;
};
DashboardView.prototype.setBackgroundLeftCap = function () {
};
DashboardView.prototype.getBackgroundTopCap = function () {
	return 0;
};
DashboardView.prototype.setBackgroundTopCap = function () {
};
DashboardView.prototype.getClipMode = function () {
	return 0;
};
DashboardView.prototype.setClipMode = function () {
};
DashboardView.prototype.getPullBackgroundColor = function () {
	return '';
};
DashboardView.prototype.setPullBackgroundColor = function () {
};
DashboardView.prototype.getTransform = function () {
	return {};
};
DashboardView.prototype.setTransform = function () {
};
DashboardView.prototype.getViewShadowRadius = function () {
	return 0;
};
DashboardView.prototype.setViewShadowRadius = function () {
};
DashboardView.prototype.getViewShadowColor = function () {
	return '';
};
DashboardView.prototype.setViewShadowColor = function () {
};
DashboardView.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
DashboardView.prototype.setViewShadowOffset = function () {
};
DashboardView.prototype.getHorizontalWrap = function () {
	return true;
};
DashboardView.prototype.setHorizontalWrap = function () {
};
DashboardView.prototype.getZIndex = function () {
	return 0;
};
DashboardView.prototype.setZIndex = function () {
};
DashboardView.prototype.getBackgroundColor = function () {
	return '';
};
DashboardView.prototype.setBackgroundColor = function () {
};
DashboardView.prototype.getBorderColor = function () {
	return '';
};
DashboardView.prototype.setBorderColor = function () {
};
DashboardView.prototype.getBorderRadius = function () {
	return 0;
};
DashboardView.prototype.setBorderRadius = function () {
};
DashboardView.prototype.getBorderWidth = function () {
	return 0;
};
DashboardView.prototype.setBorderWidth = function () {
};
DashboardView.prototype.getBottom = function () {
	return '';
};
DashboardView.prototype.setBottom = function () {
};
DashboardView.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
DashboardView.prototype.setCenter = function () {
};
DashboardView.prototype.getChildren = function () {
	return [];
};
DashboardView.prototype.getHeight = function () {
	return '';
};
DashboardView.prototype.setHeight = function () {
};
DashboardView.prototype.getLayout = function () {
	return '';
};
DashboardView.prototype.setLayout = function () {
};
DashboardView.prototype.getLeft = function () {
	return '';
};
DashboardView.prototype.setLeft = function () {
};
DashboardView.prototype.getOpacity = function () {
	return 0;
};
DashboardView.prototype.setOpacity = function () {
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
	return '';
};
DashboardView.prototype.setRight = function () {
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
DashboardView.prototype.setTintColor = function () {
};
DashboardView.prototype.getTop = function () {
	return '';
};
DashboardView.prototype.setTop = function () {
};
DashboardView.prototype.getTouchEnabled = function () {
	return true;
};
DashboardView.prototype.setTouchEnabled = function () {
};
DashboardView.prototype.getVisible = function () {
	return true;
};
DashboardView.prototype.setVisible = function () {
};
DashboardView.prototype.getWidth = function () {
	return '';
};
DashboardView.prototype.setWidth = function () {
};
DashboardView.prototype.getColumnCount = function () {
	return 0;
};
DashboardView.prototype.setColumnCount = function () {
};
DashboardView.prototype.getRowCount = function () {
	return 0;
};
DashboardView.prototype.setRowCount = function () {
};
DashboardView.prototype.getData = function () {
	return [];
};
DashboardView.prototype.setData = function () {
};
DashboardView.prototype.getEditable = function () {
	return true;
};
DashboardView.prototype.setEditable = function () {
};
DashboardView.prototype.getWobble = function () {
	return true;
};
DashboardView.prototype.setWobble = function () {
};
module.exports = function (properties) {
	return new DashboardView(properties);
};