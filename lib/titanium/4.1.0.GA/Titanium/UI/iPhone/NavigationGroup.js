var crypto = require('crypto');
function NavigationGroup(__SLAG__properties) {
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
			'window',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iPhone.NavigationGroup.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPhone.NavigationGroup';
	this.accessibilityHidden = __SLAG__properties.accessibilityHidden || true;
	this.accessibilityHint = __SLAG__properties.accessibilityHint || '';
	this.accessibilityLabel = __SLAG__properties.accessibilityLabel || '';
	this.accessibilityValue = __SLAG__properties.accessibilityValue || '';
	this.anchorPoint = __SLAG__properties.anchorPoint || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.animatedCenter) {
		throw new Error('Ti.UI.iPhone.NavigationGroup.animatedCenter is read only property');
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
		throw new Error('Ti.UI.iPhone.NavigationGroup.children is read only property');
	}
	this.children = [];
	this.height = __SLAG__properties.height || 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.iPhone.NavigationGroup.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.iPhone.NavigationGroup.size is read only property');
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
	this.window = __SLAG__properties.window || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
NavigationGroup.prototype.addEventListener = function () {
};
NavigationGroup.prototype.removeEventListener = function () {
};
NavigationGroup.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
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
NavigationGroup.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
NavigationGroup.prototype.animate = function () {
};
NavigationGroup.prototype.hide = function () {
};
NavigationGroup.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
NavigationGroup.prototype.show = function () {
};
NavigationGroup.prototype.close = function () {
};
NavigationGroup.prototype.open = function () {
};
NavigationGroup.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
NavigationGroup.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
NavigationGroup.prototype.getApiName = function () {
	return this.apiName;
};
NavigationGroup.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
NavigationGroup.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
NavigationGroup.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
NavigationGroup.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
NavigationGroup.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
NavigationGroup.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
NavigationGroup.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
NavigationGroup.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
NavigationGroup.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
NavigationGroup.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
NavigationGroup.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
NavigationGroup.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
NavigationGroup.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
NavigationGroup.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
NavigationGroup.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
NavigationGroup.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
NavigationGroup.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
NavigationGroup.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
NavigationGroup.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
NavigationGroup.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
NavigationGroup.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
NavigationGroup.prototype.getClipMode = function () {
	return this.clipMode;
};
NavigationGroup.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
NavigationGroup.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
NavigationGroup.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
NavigationGroup.prototype.getTransform = function () {
	return this.transform;
};
NavigationGroup.prototype.setTransform = function (property) {
	this.transform = property;
};
NavigationGroup.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
NavigationGroup.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
NavigationGroup.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
NavigationGroup.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
NavigationGroup.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
NavigationGroup.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
NavigationGroup.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
NavigationGroup.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
NavigationGroup.prototype.getZIndex = function () {
	return this.zIndex;
};
NavigationGroup.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
NavigationGroup.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
NavigationGroup.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
NavigationGroup.prototype.getBorderColor = function () {
	return this.borderColor;
};
NavigationGroup.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
NavigationGroup.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
NavigationGroup.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
NavigationGroup.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
NavigationGroup.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
NavigationGroup.prototype.getBottom = function () {
	return this.bottom;
};
NavigationGroup.prototype.setBottom = function (property) {
	this.bottom = property;
};
NavigationGroup.prototype.getCenter = function () {
	return this.center;
};
NavigationGroup.prototype.setCenter = function (property) {
	this.center = property;
};
NavigationGroup.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
NavigationGroup.prototype.getChildren = function () {
	return this.children;
};
NavigationGroup.prototype.getHeight = function () {
	return this.height;
};
NavigationGroup.prototype.setHeight = function (property) {
	this.height = property;
};
NavigationGroup.prototype.getLayout = function () {
	return this.layout;
};
NavigationGroup.prototype.setLayout = function (property) {
	this.layout = property;
};
NavigationGroup.prototype.getLeft = function () {
	return this.left;
};
NavigationGroup.prototype.setLeft = function (property) {
	this.left = property;
};
NavigationGroup.prototype.getOpacity = function () {
	return this.opacity;
};
NavigationGroup.prototype.setOpacity = function (property) {
	this.opacity = property;
};
NavigationGroup.prototype.getRect = function () {
	return this.rect;
};
NavigationGroup.prototype.getRight = function () {
	return this.right;
};
NavigationGroup.prototype.setRight = function (property) {
	this.right = property;
};
NavigationGroup.prototype.getSize = function () {
	return this.size;
};
NavigationGroup.prototype.getTintColor = function () {
	return this.tintColor;
};
NavigationGroup.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
NavigationGroup.prototype.getTop = function () {
	return this.top;
};
NavigationGroup.prototype.setTop = function (property) {
	this.top = property;
};
NavigationGroup.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
NavigationGroup.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
NavigationGroup.prototype.getVisible = function () {
	return this.visible;
};
NavigationGroup.prototype.setVisible = function (property) {
	this.visible = property;
};
NavigationGroup.prototype.getWidth = function () {
	return this.width;
};
NavigationGroup.prototype.setWidth = function (property) {
	this.width = property;
};
NavigationGroup.prototype.getWindow = function () {
	return this.window;
};
NavigationGroup.prototype.setWindow = function (property) {
	this.window = property;
};
module.exports = function (properties) {
	return new NavigationGroup(properties);
};