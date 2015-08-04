var crypto = require('crypto');
function DashboardView(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'anchorPoint',
			'animatedCenter',
			'backgroundGradient',
			'backgroundImage',
			'backgroundRepeat',
			'backgroundLeftCap',
			'backgroundTopCap',
			'clipMode',
			'pullBackgroundColor',
			'transform',
			'viewShadowRadius',
			'viewShadowColor',
			'viewShadowOffset',
			'horizontalWrap',
			'zIndex',
			'backgroundColor',
			'borderColor',
			'borderRadius',
			'borderWidth',
			'bottom',
			'center',
			'children',
			'height',
			'layout',
			'left',
			'opacity',
			'rect',
			'right',
			'size',
			'tintColor',
			'top',
			'touchEnabled',
			'visible',
			'width',
			'columnCount',
			'rowCount',
			'data',
			'editable',
			'wobble',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT) {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT) {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.DashboardView.apiName is read only property');
	}
	this.apiName = 'Ti.UI.DashboardView';
	this.accessibilityHidden = __SLAG__properties.accessibilityHidden || true;
	this.accessibilityHint = __SLAG__properties.accessibilityHint || '';
	this.accessibilityLabel = __SLAG__properties.accessibilityLabel || '';
	this.accessibilityValue = __SLAG__properties.accessibilityValue || '';
	this.anchorPoint = __SLAG__properties.anchorPoint || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.animatedCenter) {
		throw new Error('Ti.UI.DashboardView.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	this.backgroundGradient = __SLAG__properties.backgroundGradient || {};
	this.backgroundImage = __SLAG__properties.backgroundImage || '';
	this.backgroundRepeat = __SLAG__properties.backgroundRepeat || true;
	this.backgroundLeftCap = __SLAG__properties.backgroundLeftCap || 0;
	this.backgroundTopCap = __SLAG__properties.backgroundTopCap || 0;
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	this.transform = __SLAG__properties.transform || {};
	this.viewShadowRadius = __SLAG__properties.viewShadowRadius || 0;
	this.viewShadowColor = __SLAG__properties.viewShadowColor || '';
	this.viewShadowOffset = __SLAG__properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.zIndex = __SLAG__properties.zIndex || 0;
	this.backgroundColor = __SLAG__properties.backgroundColor || '';
	this.borderColor = __SLAG__properties.borderColor || '';
	this.borderRadius = __SLAG__properties.borderRadius || 0;
	this.borderWidth = __SLAG__properties.borderWidth || 0;
	this.bottom = __SLAG__properties.bottom || 0;
	this.center = __SLAG__properties.center || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.children) {
		throw new Error('Ti.UI.DashboardView.children is read only property');
	}
	this.children = [];
	this.height = __SLAG__properties.height || 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.DashboardView.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.DashboardView.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.tintColor = __SLAG__properties.tintColor || '';
	this.top = __SLAG__properties.top || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.visible = __SLAG__properties.visible || true;
	this.width = __SLAG__properties.width || 0;
	this.columnCount = __SLAG__properties.columnCount || 0;
	this.rowCount = __SLAG__properties.rowCount || 0;
	this.data = __SLAG__properties.data || [];
	this.editable = __SLAG__properties.editable || true;
	this.wobble = __SLAG__properties.wobble || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
DashboardView.prototype.addEventListener = function () {
};
DashboardView.prototype.removeEventListener = function () {
};
DashboardView.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
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
DashboardView.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
DashboardView.prototype.animate = function () {
};
DashboardView.prototype.hide = function () {
};
DashboardView.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
DashboardView.prototype.show = function () {
};
DashboardView.prototype.startEditing = function () {
};
DashboardView.prototype.stopEditing = function () {
};
DashboardView.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
DashboardView.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
DashboardView.prototype.getApiName = function () {
	return this.apiName;
};
DashboardView.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
DashboardView.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
DashboardView.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
DashboardView.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
DashboardView.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
DashboardView.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
DashboardView.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
DashboardView.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
DashboardView.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
DashboardView.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
DashboardView.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
DashboardView.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
DashboardView.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
DashboardView.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
DashboardView.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
DashboardView.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
DashboardView.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
DashboardView.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
DashboardView.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
DashboardView.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
DashboardView.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
DashboardView.prototype.getClipMode = function () {
	return this.clipMode;
};
DashboardView.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
DashboardView.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
DashboardView.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
DashboardView.prototype.getTransform = function () {
	return this.transform;
};
DashboardView.prototype.setTransform = function (property) {
	this.transform = property;
};
DashboardView.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
DashboardView.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
DashboardView.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
DashboardView.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
DashboardView.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
DashboardView.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
DashboardView.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
DashboardView.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
DashboardView.prototype.getZIndex = function () {
	return this.zIndex;
};
DashboardView.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
DashboardView.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
DashboardView.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
DashboardView.prototype.getBorderColor = function () {
	return this.borderColor;
};
DashboardView.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
DashboardView.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
DashboardView.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
DashboardView.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
DashboardView.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
DashboardView.prototype.getBottom = function () {
	return this.bottom;
};
DashboardView.prototype.setBottom = function (property) {
	this.bottom = property;
};
DashboardView.prototype.getCenter = function () {
	return this.center;
};
DashboardView.prototype.setCenter = function (property) {
	this.center = property;
};
DashboardView.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
DashboardView.prototype.getChildren = function () {
	return this.children;
};
DashboardView.prototype.getHeight = function () {
	return this.height;
};
DashboardView.prototype.setHeight = function (property) {
	this.height = property;
};
DashboardView.prototype.getLayout = function () {
	return this.layout;
};
DashboardView.prototype.setLayout = function (property) {
	this.layout = property;
};
DashboardView.prototype.getLeft = function () {
	return this.left;
};
DashboardView.prototype.setLeft = function (property) {
	this.left = property;
};
DashboardView.prototype.getOpacity = function () {
	return this.opacity;
};
DashboardView.prototype.setOpacity = function (property) {
	this.opacity = property;
};
DashboardView.prototype.getRect = function () {
	return this.rect;
};
DashboardView.prototype.getRight = function () {
	return this.right;
};
DashboardView.prototype.setRight = function (property) {
	this.right = property;
};
DashboardView.prototype.getSize = function () {
	return this.size;
};
DashboardView.prototype.getTintColor = function () {
	return this.tintColor;
};
DashboardView.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
DashboardView.prototype.getTop = function () {
	return this.top;
};
DashboardView.prototype.setTop = function (property) {
	this.top = property;
};
DashboardView.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
DashboardView.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
DashboardView.prototype.getVisible = function () {
	return this.visible;
};
DashboardView.prototype.setVisible = function (property) {
	this.visible = property;
};
DashboardView.prototype.getWidth = function () {
	return this.width;
};
DashboardView.prototype.setWidth = function (property) {
	this.width = property;
};
DashboardView.prototype.getColumnCount = function () {
	return this.columnCount;
};
DashboardView.prototype.setColumnCount = function (property) {
	this.columnCount = property;
};
DashboardView.prototype.getRowCount = function () {
	return this.rowCount;
};
DashboardView.prototype.setRowCount = function (property) {
	this.rowCount = property;
};
DashboardView.prototype.getData = function () {
	return this.data;
};
DashboardView.prototype.setData = function (property) {
	this.data = property;
};
DashboardView.prototype.getEditable = function () {
	return this.editable;
};
DashboardView.prototype.setEditable = function (property) {
	this.editable = property;
};
DashboardView.prototype.getWobble = function () {
	return this.wobble;
};
DashboardView.prototype.setWobble = function (property) {
	this.wobble = property;
};
module.exports = function (properties) {
	return new DashboardView(properties);
};