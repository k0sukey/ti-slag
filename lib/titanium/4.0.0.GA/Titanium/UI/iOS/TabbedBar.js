var crypto = require('crypto');
function TabbedBar(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'anchorPoint',
			'animatedCenter',
			'apiName',
			'backgroundColor',
			'backgroundGradient',
			'backgroundImage',
			'backgroundLeftCap',
			'backgroundRepeat',
			'backgroundTopCap',
			'borderColor',
			'borderRadius',
			'borderWidth',
			'bottom',
			'bubbleParent',
			'center',
			'children',
			'clipMode',
			'height',
			'horizontalWrap',
			'index',
			'labels',
			'layout',
			'left',
			'opacity',
			'pullBackgroundColor',
			'rect',
			'right',
			'size',
			'style',
			'tintColor',
			'top',
			'touchEnabled',
			'transform',
			'viewShadowColor',
			'viewShadowOffset',
			'viewShadowRadius',
			'visible',
			'width',
			'zIndex',
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
	this.accessibilityHidden = __SLAG__properties.accessibilityHidden || true;
	this.accessibilityHint = __SLAG__properties.accessibilityHint || '';
	this.accessibilityLabel = __SLAG__properties.accessibilityLabel || '';
	this.accessibilityValue = __SLAG__properties.accessibilityValue || '';
	this.anchorPoint = __SLAG__properties.anchorPoint || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.animatedCenter) {
		throw new Error('Ti.UI.iOS.TabbedBar.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iOS.TabbedBar.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iOS.TabbedBar';
	this.backgroundColor = __SLAG__properties.backgroundColor || '';
	this.backgroundGradient = __SLAG__properties.backgroundGradient || {};
	this.backgroundImage = __SLAG__properties.backgroundImage || '';
	this.backgroundLeftCap = __SLAG__properties.backgroundLeftCap || 0;
	this.backgroundRepeat = __SLAG__properties.backgroundRepeat || true;
	this.backgroundTopCap = __SLAG__properties.backgroundTopCap || 0;
	this.borderColor = __SLAG__properties.borderColor || '';
	this.borderRadius = __SLAG__properties.borderRadius || 0;
	this.borderWidth = __SLAG__properties.borderWidth || 0;
	this.bottom = __SLAG__properties.bottom || 0;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.center = __SLAG__properties.center || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.children) {
		throw new Error('Ti.UI.iOS.TabbedBar.children is read only property');
	}
	this.children = [];
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.height = __SLAG__properties.height || 0;
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.index = __SLAG__properties.index || 0;
	this.labels = __SLAG__properties.labels || '';
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.iOS.TabbedBar.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.iOS.TabbedBar.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.style = __SLAG__properties.style || 0;
	this.tintColor = __SLAG__properties.tintColor || '';
	this.top = __SLAG__properties.top || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.transform = __SLAG__properties.transform || {};
	this.viewShadowColor = __SLAG__properties.viewShadowColor || '';
	this.viewShadowOffset = __SLAG__properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = __SLAG__properties.viewShadowRadius || 0;
	this.visible = __SLAG__properties.visible || true;
	this.width = __SLAG__properties.width || 0;
	this.zIndex = __SLAG__properties.zIndex || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
TabbedBar.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
TabbedBar.prototype.addEventListener = function () {
};
TabbedBar.prototype.animate = function () {
};
TabbedBar.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
TabbedBar.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
TabbedBar.prototype.finishLayout = function () {
	throw new Error('Ti.UI.iOS.TabbedBar.finishLayout was deprecated, since 3.0.0');
};
TabbedBar.prototype.fireEvent = function () {
};
TabbedBar.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
TabbedBar.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
TabbedBar.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
TabbedBar.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
TabbedBar.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
TabbedBar.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
TabbedBar.prototype.getApiName = function () {
	return this.apiName;
};
TabbedBar.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
TabbedBar.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
TabbedBar.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
TabbedBar.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
TabbedBar.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
TabbedBar.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
TabbedBar.prototype.getBorderColor = function () {
	return this.borderColor;
};
TabbedBar.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
TabbedBar.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
TabbedBar.prototype.getBottom = function () {
	return this.bottom;
};
TabbedBar.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
TabbedBar.prototype.getCenter = function () {
	return this.center;
};
TabbedBar.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
TabbedBar.prototype.getChildren = function () {
	return this.children;
};
TabbedBar.prototype.getClipMode = function () {
	return this.clipMode;
};
TabbedBar.prototype.getHeight = function () {
	return this.height;
};
TabbedBar.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
TabbedBar.prototype.getIndex = function () {
	return this.index;
};
TabbedBar.prototype.getLabels = function () {
	return this.labels;
};
TabbedBar.prototype.getLayout = function () {
	return this.layout;
};
TabbedBar.prototype.getLeft = function () {
	return this.left;
};
TabbedBar.prototype.getOpacity = function () {
	return this.opacity;
};
TabbedBar.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
TabbedBar.prototype.getRect = function () {
	return this.rect;
};
TabbedBar.prototype.getRight = function () {
	return this.right;
};
TabbedBar.prototype.getSize = function () {
	return this.size;
};
TabbedBar.prototype.getStyle = function () {
	return this.style;
};
TabbedBar.prototype.getTintColor = function () {
	return this.tintColor;
};
TabbedBar.prototype.getTop = function () {
	return this.top;
};
TabbedBar.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
TabbedBar.prototype.getTransform = function () {
	return this.transform;
};
TabbedBar.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
TabbedBar.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
TabbedBar.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
TabbedBar.prototype.getVisible = function () {
	return this.visible;
};
TabbedBar.prototype.getWidth = function () {
	return this.width;
};
TabbedBar.prototype.getZIndex = function () {
	return this.zIndex;
};
TabbedBar.prototype.hide = function () {
};
TabbedBar.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
TabbedBar.prototype.removeAllChildren = function () {
};
TabbedBar.prototype.removeEventListener = function () {
};
TabbedBar.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
TabbedBar.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
TabbedBar.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
TabbedBar.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
TabbedBar.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
TabbedBar.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
TabbedBar.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
TabbedBar.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
TabbedBar.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
TabbedBar.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
TabbedBar.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
TabbedBar.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
TabbedBar.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
TabbedBar.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
TabbedBar.prototype.setBottom = function (property) {
	this.bottom = property;
};
TabbedBar.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
TabbedBar.prototype.setCenter = function (property) {
	this.center = property;
};
TabbedBar.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
TabbedBar.prototype.setHeight = function (property) {
	this.height = property;
};
TabbedBar.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
TabbedBar.prototype.setIndex = function (property) {
	this.index = property;
};
TabbedBar.prototype.setLabels = function (property) {
	this.labels = property;
};
TabbedBar.prototype.setLayout = function (property) {
	this.layout = property;
};
TabbedBar.prototype.setLeft = function (property) {
	this.left = property;
};
TabbedBar.prototype.setOpacity = function (property) {
	this.opacity = property;
};
TabbedBar.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
TabbedBar.prototype.setRight = function (property) {
	this.right = property;
};
TabbedBar.prototype.setStyle = function (property) {
	this.style = property;
};
TabbedBar.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
TabbedBar.prototype.setTop = function (property) {
	this.top = property;
};
TabbedBar.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
TabbedBar.prototype.setTransform = function (property) {
	this.transform = property;
};
TabbedBar.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
TabbedBar.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
TabbedBar.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
TabbedBar.prototype.setVisible = function (property) {
	this.visible = property;
};
TabbedBar.prototype.setWidth = function (property) {
	this.width = property;
};
TabbedBar.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
TabbedBar.prototype.show = function () {
};
TabbedBar.prototype.startLayout = function () {
	throw new Error('Ti.UI.iOS.TabbedBar.startLayout was deprecated, since 3.0.0');
};
TabbedBar.prototype.toImage = function () {
	return {};
};
TabbedBar.prototype.updateLayout = function () {
	throw new Error('Ti.UI.iOS.TabbedBar.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new TabbedBar(properties);
};