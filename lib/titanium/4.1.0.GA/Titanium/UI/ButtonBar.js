var crypto = require('crypto');
function ButtonBar(__SLAG__properties) {
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
			'index',
			'labels',
			'style',
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
		throw new Error('Ti.UI.ButtonBar.apiName is read only property');
	}
	this.apiName = 'Ti.UI.ButtonBar';
	this.accessibilityHidden = __SLAG__properties.accessibilityHidden || true;
	this.accessibilityHint = __SLAG__properties.accessibilityHint || '';
	this.accessibilityLabel = __SLAG__properties.accessibilityLabel || '';
	this.accessibilityValue = __SLAG__properties.accessibilityValue || '';
	this.anchorPoint = __SLAG__properties.anchorPoint || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.animatedCenter) {
		throw new Error('Ti.UI.ButtonBar.animatedCenter is read only property');
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
		throw new Error('Ti.UI.ButtonBar.children is read only property');
	}
	this.children = [];
	this.height = __SLAG__properties.height || 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.ButtonBar.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.ButtonBar.size is read only property');
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
	this.index = __SLAG__properties.index || 0;
	this.labels = __SLAG__properties.labels || '';
	if (__SLAG__properties.style) {
		throw new Error('Ti.UI.ButtonBar.style was deprecated, since 3.4.1');
	}
	this.id = __SLAG__properties.id || '';
	return this;
}
ButtonBar.prototype.addEventListener = function () {
};
ButtonBar.prototype.removeEventListener = function () {
};
ButtonBar.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
ButtonBar.prototype.fireEvent = function () {
};
ButtonBar.prototype.finishLayout = function () {
	throw new Error('Ti.UI.ButtonBar.finishLayout was deprecated, since 3.0.0');
};
ButtonBar.prototype.removeAllChildren = function () {
};
ButtonBar.prototype.startLayout = function () {
	throw new Error('Ti.UI.ButtonBar.startLayout was deprecated, since 3.0.0');
};
ButtonBar.prototype.toImage = function () {
	return {};
};
ButtonBar.prototype.updateLayout = function () {
	throw new Error('Ti.UI.ButtonBar.updateLayout was deprecated, since 3.0.0');
};
ButtonBar.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
ButtonBar.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
ButtonBar.prototype.animate = function () {
};
ButtonBar.prototype.hide = function () {
};
ButtonBar.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
ButtonBar.prototype.show = function () {
};
ButtonBar.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ButtonBar.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
ButtonBar.prototype.getApiName = function () {
	return this.apiName;
};
ButtonBar.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
ButtonBar.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
ButtonBar.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
ButtonBar.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
ButtonBar.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
ButtonBar.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
ButtonBar.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
ButtonBar.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
ButtonBar.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
ButtonBar.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
ButtonBar.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
ButtonBar.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
ButtonBar.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
ButtonBar.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
ButtonBar.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
ButtonBar.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
ButtonBar.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
ButtonBar.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
ButtonBar.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
ButtonBar.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
ButtonBar.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
ButtonBar.prototype.getClipMode = function () {
	return this.clipMode;
};
ButtonBar.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
ButtonBar.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
ButtonBar.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
ButtonBar.prototype.getTransform = function () {
	return this.transform;
};
ButtonBar.prototype.setTransform = function (property) {
	this.transform = property;
};
ButtonBar.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
ButtonBar.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
ButtonBar.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
ButtonBar.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
ButtonBar.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
ButtonBar.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
ButtonBar.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
ButtonBar.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
ButtonBar.prototype.getZIndex = function () {
	return this.zIndex;
};
ButtonBar.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
ButtonBar.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
ButtonBar.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
ButtonBar.prototype.getBorderColor = function () {
	return this.borderColor;
};
ButtonBar.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
ButtonBar.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
ButtonBar.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
ButtonBar.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
ButtonBar.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
ButtonBar.prototype.getBottom = function () {
	return this.bottom;
};
ButtonBar.prototype.setBottom = function (property) {
	this.bottom = property;
};
ButtonBar.prototype.getCenter = function () {
	return this.center;
};
ButtonBar.prototype.setCenter = function (property) {
	this.center = property;
};
ButtonBar.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
ButtonBar.prototype.getChildren = function () {
	return this.children;
};
ButtonBar.prototype.getHeight = function () {
	return this.height;
};
ButtonBar.prototype.setHeight = function (property) {
	this.height = property;
};
ButtonBar.prototype.getLayout = function () {
	return this.layout;
};
ButtonBar.prototype.setLayout = function (property) {
	this.layout = property;
};
ButtonBar.prototype.getLeft = function () {
	return this.left;
};
ButtonBar.prototype.setLeft = function (property) {
	this.left = property;
};
ButtonBar.prototype.getOpacity = function () {
	return this.opacity;
};
ButtonBar.prototype.setOpacity = function (property) {
	this.opacity = property;
};
ButtonBar.prototype.getRect = function () {
	return this.rect;
};
ButtonBar.prototype.getRight = function () {
	return this.right;
};
ButtonBar.prototype.setRight = function (property) {
	this.right = property;
};
ButtonBar.prototype.getSize = function () {
	return this.size;
};
ButtonBar.prototype.getTintColor = function () {
	return this.tintColor;
};
ButtonBar.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
ButtonBar.prototype.getTop = function () {
	return this.top;
};
ButtonBar.prototype.setTop = function (property) {
	this.top = property;
};
ButtonBar.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
ButtonBar.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
ButtonBar.prototype.getVisible = function () {
	return this.visible;
};
ButtonBar.prototype.setVisible = function (property) {
	this.visible = property;
};
ButtonBar.prototype.getWidth = function () {
	return this.width;
};
ButtonBar.prototype.setWidth = function (property) {
	this.width = property;
};
ButtonBar.prototype.getIndex = function () {
	return this.index;
};
ButtonBar.prototype.setIndex = function (property) {
	this.index = property;
};
ButtonBar.prototype.getLabels = function () {
	return this.labels;
};
ButtonBar.prototype.setLabels = function (property) {
	this.labels = property;
};
ButtonBar.prototype.getStyle = function () {
	throw new Error('Ti.UI.ButtonBar.getStyle was deprecated, since 3.4.1');
};
ButtonBar.prototype.setStyle = function () {
	throw new Error('Ti.UI.ButtonBar.setStyle was deprecated, since 3.4.1');
};
module.exports = function (properties) {
	return new ButtonBar(properties);
};