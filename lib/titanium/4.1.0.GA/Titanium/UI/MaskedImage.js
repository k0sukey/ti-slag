var crypto = require('crypto');
function MaskedImage(__SLAG__properties) {
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
			'mask',
			'image',
			'mode',
			'tint',
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
		throw new Error('Ti.UI.MaskedImage.apiName is read only property');
	}
	this.apiName = 'Ti.UI.MaskedImage';
	this.accessibilityHidden = __SLAG__properties.accessibilityHidden || true;
	this.accessibilityHint = __SLAG__properties.accessibilityHint || '';
	this.accessibilityLabel = __SLAG__properties.accessibilityLabel || '';
	this.accessibilityValue = __SLAG__properties.accessibilityValue || '';
	this.anchorPoint = __SLAG__properties.anchorPoint || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.animatedCenter) {
		throw new Error('Ti.UI.MaskedImage.animatedCenter is read only property');
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
		throw new Error('Ti.UI.MaskedImage.children is read only property');
	}
	this.children = [];
	this.height = __SLAG__properties.height || 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.MaskedImage.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.MaskedImage.size is read only property');
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
	this.mask = __SLAG__properties.mask || '';
	this.image = __SLAG__properties.image || '';
	this.mode = __SLAG__properties.mode || 0;
	this.tint = __SLAG__properties.tint || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
MaskedImage.prototype.addEventListener = function () {
};
MaskedImage.prototype.removeEventListener = function () {
};
MaskedImage.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
MaskedImage.prototype.fireEvent = function () {
};
MaskedImage.prototype.finishLayout = function () {
	throw new Error('Ti.UI.MaskedImage.finishLayout was deprecated, since 3.0.0');
};
MaskedImage.prototype.removeAllChildren = function () {
};
MaskedImage.prototype.startLayout = function () {
	throw new Error('Ti.UI.MaskedImage.startLayout was deprecated, since 3.0.0');
};
MaskedImage.prototype.toImage = function () {
	return {};
};
MaskedImage.prototype.updateLayout = function () {
	throw new Error('Ti.UI.MaskedImage.updateLayout was deprecated, since 3.0.0');
};
MaskedImage.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
MaskedImage.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
MaskedImage.prototype.animate = function () {
};
MaskedImage.prototype.hide = function () {
};
MaskedImage.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
MaskedImage.prototype.show = function () {
};
MaskedImage.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
MaskedImage.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
MaskedImage.prototype.getApiName = function () {
	return this.apiName;
};
MaskedImage.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
MaskedImage.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
MaskedImage.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
MaskedImage.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
MaskedImage.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
MaskedImage.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
MaskedImage.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
MaskedImage.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
MaskedImage.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
MaskedImage.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
MaskedImage.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
MaskedImage.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
MaskedImage.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
MaskedImage.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
MaskedImage.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
MaskedImage.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
MaskedImage.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
MaskedImage.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
MaskedImage.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
MaskedImage.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
MaskedImage.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
MaskedImage.prototype.getClipMode = function () {
	return this.clipMode;
};
MaskedImage.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
MaskedImage.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
MaskedImage.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
MaskedImage.prototype.getTransform = function () {
	return this.transform;
};
MaskedImage.prototype.setTransform = function (property) {
	this.transform = property;
};
MaskedImage.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
MaskedImage.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
MaskedImage.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
MaskedImage.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
MaskedImage.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
MaskedImage.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
MaskedImage.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
MaskedImage.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
MaskedImage.prototype.getZIndex = function () {
	return this.zIndex;
};
MaskedImage.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
MaskedImage.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
MaskedImage.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
MaskedImage.prototype.getBorderColor = function () {
	return this.borderColor;
};
MaskedImage.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
MaskedImage.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
MaskedImage.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
MaskedImage.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
MaskedImage.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
MaskedImage.prototype.getBottom = function () {
	return this.bottom;
};
MaskedImage.prototype.setBottom = function (property) {
	this.bottom = property;
};
MaskedImage.prototype.getCenter = function () {
	return this.center;
};
MaskedImage.prototype.setCenter = function (property) {
	this.center = property;
};
MaskedImage.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
MaskedImage.prototype.getChildren = function () {
	return this.children;
};
MaskedImage.prototype.getHeight = function () {
	return this.height;
};
MaskedImage.prototype.setHeight = function (property) {
	this.height = property;
};
MaskedImage.prototype.getLayout = function () {
	return this.layout;
};
MaskedImage.prototype.setLayout = function (property) {
	this.layout = property;
};
MaskedImage.prototype.getLeft = function () {
	return this.left;
};
MaskedImage.prototype.setLeft = function (property) {
	this.left = property;
};
MaskedImage.prototype.getOpacity = function () {
	return this.opacity;
};
MaskedImage.prototype.setOpacity = function (property) {
	this.opacity = property;
};
MaskedImage.prototype.getRect = function () {
	return this.rect;
};
MaskedImage.prototype.getRight = function () {
	return this.right;
};
MaskedImage.prototype.setRight = function (property) {
	this.right = property;
};
MaskedImage.prototype.getSize = function () {
	return this.size;
};
MaskedImage.prototype.getTintColor = function () {
	return this.tintColor;
};
MaskedImage.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
MaskedImage.prototype.getTop = function () {
	return this.top;
};
MaskedImage.prototype.setTop = function (property) {
	this.top = property;
};
MaskedImage.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
MaskedImage.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
MaskedImage.prototype.getVisible = function () {
	return this.visible;
};
MaskedImage.prototype.setVisible = function (property) {
	this.visible = property;
};
MaskedImage.prototype.getWidth = function () {
	return this.width;
};
MaskedImage.prototype.setWidth = function (property) {
	this.width = property;
};
MaskedImage.prototype.getMask = function () {
	return this.mask;
};
MaskedImage.prototype.setMask = function (property) {
	this.mask = property;
};
MaskedImage.prototype.getImage = function () {
	return this.image;
};
MaskedImage.prototype.setImage = function (property) {
	this.image = property;
};
MaskedImage.prototype.getMode = function () {
	return this.mode;
};
MaskedImage.prototype.setMode = function (property) {
	this.mode = property;
};
MaskedImage.prototype.getTint = function () {
	return this.tint;
};
MaskedImage.prototype.setTint = function (property) {
	this.tint = property;
};
module.exports = function (properties) {
	return new MaskedImage(properties);
};