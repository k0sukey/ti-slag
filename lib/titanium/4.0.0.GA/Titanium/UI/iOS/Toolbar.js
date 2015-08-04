var crypto = require('crypto');
function Toolbar(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'anchorPoint',
			'animatedCenter',
			'apiName',
			'backgroundGradient',
			'backgroundImage',
			'barColor',
			'borderBottom',
			'borderColor',
			'borderRadius',
			'borderTop',
			'borderWidth',
			'bottom',
			'bubbleParent',
			'center',
			'children',
			'clipMode',
			'extendBackground',
			'height',
			'horizontalWrap',
			'items',
			'left',
			'opacity',
			'pullBackgroundColor',
			'rect',
			'right',
			'size',
			'tintColor',
			'top',
			'touchEnabled',
			'transform',
			'translucent',
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
		throw new Error('Ti.UI.iOS.Toolbar.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iOS.Toolbar.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iOS.Toolbar';
	this.backgroundGradient = __SLAG__properties.backgroundGradient || {};
	this.backgroundImage = __SLAG__properties.backgroundImage || '';
	this.barColor = __SLAG__properties.barColor || '';
	this.borderBottom = __SLAG__properties.borderBottom || true;
	this.borderColor = __SLAG__properties.borderColor || '';
	this.borderRadius = __SLAG__properties.borderRadius || 0;
	this.borderTop = __SLAG__properties.borderTop || true;
	this.borderWidth = __SLAG__properties.borderWidth || 0;
	this.bottom = __SLAG__properties.bottom || 0;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.center = __SLAG__properties.center || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.children) {
		throw new Error('Ti.UI.iOS.Toolbar.children is read only property');
	}
	this.children = [];
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.extendBackground = __SLAG__properties.extendBackground || true;
	this.height = __SLAG__properties.height || 0;
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.items = __SLAG__properties.items || [];
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.iOS.Toolbar.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.iOS.Toolbar.size is read only property');
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
	this.transform = __SLAG__properties.transform || {};
	this.translucent = __SLAG__properties.translucent || true;
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
Toolbar.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
Toolbar.prototype.addEventListener = function () {
};
Toolbar.prototype.animate = function () {
};
Toolbar.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Toolbar.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Toolbar.prototype.finishLayout = function () {
	throw new Error('Ti.UI.iOS.Toolbar.finishLayout was deprecated, since 3.0.0');
};
Toolbar.prototype.fireEvent = function () {
};
Toolbar.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
Toolbar.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
Toolbar.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
Toolbar.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
Toolbar.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
Toolbar.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
Toolbar.prototype.getApiName = function () {
	return this.apiName;
};
Toolbar.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
Toolbar.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
Toolbar.prototype.getBarColor = function () {
	return this.barColor;
};
Toolbar.prototype.getBorderBottom = function () {
	return this.borderBottom;
};
Toolbar.prototype.getBorderColor = function () {
	return this.borderColor;
};
Toolbar.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
Toolbar.prototype.getBorderTop = function () {
	return this.borderTop;
};
Toolbar.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
Toolbar.prototype.getBottom = function () {
	return this.bottom;
};
Toolbar.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Toolbar.prototype.getCenter = function () {
	return this.center;
};
Toolbar.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
Toolbar.prototype.getChildren = function () {
	return this.children;
};
Toolbar.prototype.getClipMode = function () {
	return this.clipMode;
};
Toolbar.prototype.getExtendBackground = function () {
	return this.extendBackground;
};
Toolbar.prototype.getHeight = function () {
	return this.height;
};
Toolbar.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
Toolbar.prototype.getItems = function () {
	return this.items;
};
Toolbar.prototype.getLeft = function () {
	return this.left;
};
Toolbar.prototype.getOpacity = function () {
	return this.opacity;
};
Toolbar.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
Toolbar.prototype.getRect = function () {
	return this.rect;
};
Toolbar.prototype.getRight = function () {
	return this.right;
};
Toolbar.prototype.getSize = function () {
	return this.size;
};
Toolbar.prototype.getTintColor = function () {
	return this.tintColor;
};
Toolbar.prototype.getTop = function () {
	return this.top;
};
Toolbar.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
Toolbar.prototype.getTransform = function () {
	return this.transform;
};
Toolbar.prototype.getTranslucent = function () {
	return this.translucent;
};
Toolbar.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
Toolbar.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
Toolbar.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
Toolbar.prototype.getVisible = function () {
	return this.visible;
};
Toolbar.prototype.getWidth = function () {
	return this.width;
};
Toolbar.prototype.getZIndex = function () {
	return this.zIndex;
};
Toolbar.prototype.hide = function () {
};
Toolbar.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
Toolbar.prototype.removeAllChildren = function () {
};
Toolbar.prototype.removeEventListener = function () {
};
Toolbar.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
Toolbar.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
Toolbar.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
Toolbar.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
Toolbar.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
Toolbar.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
Toolbar.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
Toolbar.prototype.setBarColor = function (property) {
	this.barColor = property;
};
Toolbar.prototype.setBorderBottom = function (property) {
	this.borderBottom = property;
};
Toolbar.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
Toolbar.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
Toolbar.prototype.setBorderTop = function (property) {
	this.borderTop = property;
};
Toolbar.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
Toolbar.prototype.setBottom = function (property) {
	this.bottom = property;
};
Toolbar.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Toolbar.prototype.setCenter = function (property) {
	this.center = property;
};
Toolbar.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
Toolbar.prototype.setHeight = function (property) {
	this.height = property;
};
Toolbar.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
Toolbar.prototype.setItems = function (property) {
	this.items = property;
};
Toolbar.prototype.setLeft = function (property) {
	this.left = property;
};
Toolbar.prototype.setOpacity = function (property) {
	this.opacity = property;
};
Toolbar.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
Toolbar.prototype.setRight = function (property) {
	this.right = property;
};
Toolbar.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
Toolbar.prototype.setTop = function (property) {
	this.top = property;
};
Toolbar.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
Toolbar.prototype.setTransform = function (property) {
	this.transform = property;
};
Toolbar.prototype.setTranslucent = function (property) {
	this.translucent = property;
};
Toolbar.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
Toolbar.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
Toolbar.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
Toolbar.prototype.setVisible = function (property) {
	this.visible = property;
};
Toolbar.prototype.setWidth = function (property) {
	this.width = property;
};
Toolbar.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
Toolbar.prototype.show = function () {
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
module.exports = function (properties) {
	return new Toolbar(properties);
};