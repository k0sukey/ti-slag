var crypto = require('crypto');
function CoverFlowView(__SLAG__properties) {
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
			'images',
			'selected',
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
		throw new Error('Ti.UI.CoverFlowView.apiName is read only property');
	}
	this.apiName = 'Ti.UI.CoverFlowView';
	this.accessibilityHidden = __SLAG__properties.accessibilityHidden || true;
	this.accessibilityHint = __SLAG__properties.accessibilityHint || '';
	this.accessibilityLabel = __SLAG__properties.accessibilityLabel || '';
	this.accessibilityValue = __SLAG__properties.accessibilityValue || '';
	this.anchorPoint = __SLAG__properties.anchorPoint || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.animatedCenter) {
		throw new Error('Ti.UI.CoverFlowView.animatedCenter is read only property');
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
		throw new Error('Ti.UI.CoverFlowView.children is read only property');
	}
	this.children = [];
	this.height = __SLAG__properties.height || 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.CoverFlowView.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.CoverFlowView.size is read only property');
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
	this.images = __SLAG__properties.images || '';
	this.selected = __SLAG__properties.selected || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
CoverFlowView.prototype.addEventListener = function () {
};
CoverFlowView.prototype.removeEventListener = function () {
};
CoverFlowView.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
CoverFlowView.prototype.fireEvent = function () {
};
CoverFlowView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.CoverFlowView.finishLayout was deprecated, since 3.0.0');
};
CoverFlowView.prototype.removeAllChildren = function () {
};
CoverFlowView.prototype.startLayout = function () {
	throw new Error('Ti.UI.CoverFlowView.startLayout was deprecated, since 3.0.0');
};
CoverFlowView.prototype.toImage = function () {
	return {};
};
CoverFlowView.prototype.updateLayout = function () {
	throw new Error('Ti.UI.CoverFlowView.updateLayout was deprecated, since 3.0.0');
};
CoverFlowView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
CoverFlowView.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
CoverFlowView.prototype.animate = function () {
};
CoverFlowView.prototype.hide = function () {
};
CoverFlowView.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
CoverFlowView.prototype.show = function () {
};
CoverFlowView.prototype.setImage = function () {
};
CoverFlowView.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
CoverFlowView.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
CoverFlowView.prototype.getApiName = function () {
	return this.apiName;
};
CoverFlowView.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
CoverFlowView.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
CoverFlowView.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
CoverFlowView.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
CoverFlowView.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
CoverFlowView.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
CoverFlowView.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
CoverFlowView.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
CoverFlowView.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
CoverFlowView.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
CoverFlowView.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
CoverFlowView.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
CoverFlowView.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
CoverFlowView.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
CoverFlowView.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
CoverFlowView.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
CoverFlowView.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
CoverFlowView.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
CoverFlowView.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
CoverFlowView.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
CoverFlowView.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
CoverFlowView.prototype.getClipMode = function () {
	return this.clipMode;
};
CoverFlowView.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
CoverFlowView.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
CoverFlowView.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
CoverFlowView.prototype.getTransform = function () {
	return this.transform;
};
CoverFlowView.prototype.setTransform = function (property) {
	this.transform = property;
};
CoverFlowView.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
CoverFlowView.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
CoverFlowView.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
CoverFlowView.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
CoverFlowView.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
CoverFlowView.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
CoverFlowView.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
CoverFlowView.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
CoverFlowView.prototype.getZIndex = function () {
	return this.zIndex;
};
CoverFlowView.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
CoverFlowView.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
CoverFlowView.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
CoverFlowView.prototype.getBorderColor = function () {
	return this.borderColor;
};
CoverFlowView.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
CoverFlowView.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
CoverFlowView.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
CoverFlowView.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
CoverFlowView.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
CoverFlowView.prototype.getBottom = function () {
	return this.bottom;
};
CoverFlowView.prototype.setBottom = function (property) {
	this.bottom = property;
};
CoverFlowView.prototype.getCenter = function () {
	return this.center;
};
CoverFlowView.prototype.setCenter = function (property) {
	this.center = property;
};
CoverFlowView.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
CoverFlowView.prototype.getChildren = function () {
	return this.children;
};
CoverFlowView.prototype.getHeight = function () {
	return this.height;
};
CoverFlowView.prototype.setHeight = function (property) {
	this.height = property;
};
CoverFlowView.prototype.getLayout = function () {
	return this.layout;
};
CoverFlowView.prototype.setLayout = function (property) {
	this.layout = property;
};
CoverFlowView.prototype.getLeft = function () {
	return this.left;
};
CoverFlowView.prototype.setLeft = function (property) {
	this.left = property;
};
CoverFlowView.prototype.getOpacity = function () {
	return this.opacity;
};
CoverFlowView.prototype.setOpacity = function (property) {
	this.opacity = property;
};
CoverFlowView.prototype.getRect = function () {
	return this.rect;
};
CoverFlowView.prototype.getRight = function () {
	return this.right;
};
CoverFlowView.prototype.setRight = function (property) {
	this.right = property;
};
CoverFlowView.prototype.getSize = function () {
	return this.size;
};
CoverFlowView.prototype.getTintColor = function () {
	return this.tintColor;
};
CoverFlowView.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
CoverFlowView.prototype.getTop = function () {
	return this.top;
};
CoverFlowView.prototype.setTop = function (property) {
	this.top = property;
};
CoverFlowView.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
CoverFlowView.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
CoverFlowView.prototype.getVisible = function () {
	return this.visible;
};
CoverFlowView.prototype.setVisible = function (property) {
	this.visible = property;
};
CoverFlowView.prototype.getWidth = function () {
	return this.width;
};
CoverFlowView.prototype.setWidth = function (property) {
	this.width = property;
};
CoverFlowView.prototype.getImages = function () {
	return this.images;
};
CoverFlowView.prototype.setImages = function (property) {
	this.images = property;
};
CoverFlowView.prototype.getSelected = function () {
	return this.selected;
};
CoverFlowView.prototype.setSelected = function (property) {
	this.selected = property;
};
module.exports = function (properties) {
	return new CoverFlowView(properties);
};