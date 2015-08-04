var crypto = require('crypto');
function AdView(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'adSize',
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
			'layout',
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
	this.adSize = __SLAG__properties.adSize || '';
	this.anchorPoint = __SLAG__properties.anchorPoint || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.animatedCenter) {
		throw new Error('Ti.UI.iOS.AdView.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iOS.AdView.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iOS.AdView';
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
		throw new Error('Ti.UI.iOS.AdView.children is read only property');
	}
	this.children = [];
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.height = __SLAG__properties.height || 0;
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.iOS.AdView.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.iOS.AdView.size is read only property');
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
AdView.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
AdView.prototype.addEventListener = function () {
};
AdView.prototype.animate = function () {
};
AdView.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
AdView.prototype.cancelAction = function () {
};
AdView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
AdView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.iOS.AdView.finishLayout was deprecated, since 3.0.0');
};
AdView.prototype.fireEvent = function () {
};
AdView.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
AdView.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
AdView.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
AdView.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
AdView.prototype.getAdSize = function () {
	return this.adSize;
};
AdView.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
AdView.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
AdView.prototype.getApiName = function () {
	return this.apiName;
};
AdView.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
AdView.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
AdView.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
AdView.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
AdView.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
AdView.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
AdView.prototype.getBorderColor = function () {
	return this.borderColor;
};
AdView.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
AdView.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
AdView.prototype.getBottom = function () {
	return this.bottom;
};
AdView.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
AdView.prototype.getCenter = function () {
	return this.center;
};
AdView.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
AdView.prototype.getChildren = function () {
	return this.children;
};
AdView.prototype.getClipMode = function () {
	return this.clipMode;
};
AdView.prototype.getHeight = function () {
	return this.height;
};
AdView.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
AdView.prototype.getLayout = function () {
	return this.layout;
};
AdView.prototype.getLeft = function () {
	return this.left;
};
AdView.prototype.getOpacity = function () {
	return this.opacity;
};
AdView.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
AdView.prototype.getRect = function () {
	return this.rect;
};
AdView.prototype.getRight = function () {
	return this.right;
};
AdView.prototype.getSize = function () {
	return this.size;
};
AdView.prototype.getTintColor = function () {
	return this.tintColor;
};
AdView.prototype.getTop = function () {
	return this.top;
};
AdView.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
AdView.prototype.getTransform = function () {
	return this.transform;
};
AdView.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
AdView.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
AdView.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
AdView.prototype.getVisible = function () {
	return this.visible;
};
AdView.prototype.getWidth = function () {
	return this.width;
};
AdView.prototype.getZIndex = function () {
	return this.zIndex;
};
AdView.prototype.hide = function () {
};
AdView.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
AdView.prototype.removeAllChildren = function () {
};
AdView.prototype.removeEventListener = function () {
};
AdView.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
AdView.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
AdView.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
AdView.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
AdView.prototype.setAdSize = function (property) {
	this.adSize = property;
};
AdView.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
AdView.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
AdView.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
AdView.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
AdView.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
AdView.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
AdView.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
AdView.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
AdView.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
AdView.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
AdView.prototype.setBottom = function (property) {
	this.bottom = property;
};
AdView.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
AdView.prototype.setCenter = function (property) {
	this.center = property;
};
AdView.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
AdView.prototype.setHeight = function (property) {
	this.height = property;
};
AdView.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
AdView.prototype.setLayout = function (property) {
	this.layout = property;
};
AdView.prototype.setLeft = function (property) {
	this.left = property;
};
AdView.prototype.setOpacity = function (property) {
	this.opacity = property;
};
AdView.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
AdView.prototype.setRight = function (property) {
	this.right = property;
};
AdView.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
AdView.prototype.setTop = function (property) {
	this.top = property;
};
AdView.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
AdView.prototype.setTransform = function (property) {
	this.transform = property;
};
AdView.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
AdView.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
AdView.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
AdView.prototype.setVisible = function (property) {
	this.visible = property;
};
AdView.prototype.setWidth = function (property) {
	this.width = property;
};
AdView.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
AdView.prototype.show = function () {
};
AdView.prototype.startLayout = function () {
	throw new Error('Ti.UI.iOS.AdView.startLayout was deprecated, since 3.0.0');
};
AdView.prototype.toImage = function () {
	return {};
};
AdView.prototype.updateLayout = function () {
	throw new Error('Ti.UI.iOS.AdView.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new AdView(properties);
};