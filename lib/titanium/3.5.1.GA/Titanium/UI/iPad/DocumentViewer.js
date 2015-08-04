var crypto = require('crypto');
function DocumentViewer(__SLAG__properties) {
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
	this.accessibilityHidden = __SLAG__properties.accessibilityHidden || true;
	this.accessibilityHint = __SLAG__properties.accessibilityHint || '';
	this.accessibilityLabel = __SLAG__properties.accessibilityLabel || '';
	this.accessibilityValue = __SLAG__properties.accessibilityValue || '';
	this.anchorPoint = __SLAG__properties.anchorPoint || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.animatedCenter) {
		throw new Error('Ti.UI.iPad.DocumentViewer.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iPad.DocumentViewer.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPad.DocumentViewer';
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
		throw new Error('Ti.UI.iPad.DocumentViewer.children is read only property');
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
		throw new Error('Ti.UI.iPad.DocumentViewer.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.iPad.DocumentViewer.size is read only property');
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
DocumentViewer.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
DocumentViewer.prototype.addEventListener = function () {
};
DocumentViewer.prototype.animate = function () {
};
DocumentViewer.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
DocumentViewer.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
DocumentViewer.prototype.finishLayout = function () {
	throw new Error('Ti.UI.iPad.DocumentViewer.finishLayout was deprecated, since 3.0.0');
};
DocumentViewer.prototype.fireEvent = function () {
};
DocumentViewer.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
DocumentViewer.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
DocumentViewer.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
DocumentViewer.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
DocumentViewer.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
DocumentViewer.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
DocumentViewer.prototype.getApiName = function () {
	return this.apiName;
};
DocumentViewer.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
DocumentViewer.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
DocumentViewer.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
DocumentViewer.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
DocumentViewer.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
DocumentViewer.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
DocumentViewer.prototype.getBorderColor = function () {
	return this.borderColor;
};
DocumentViewer.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
DocumentViewer.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
DocumentViewer.prototype.getBottom = function () {
	return this.bottom;
};
DocumentViewer.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
DocumentViewer.prototype.getCenter = function () {
	return this.center;
};
DocumentViewer.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
DocumentViewer.prototype.getChildren = function () {
	return this.children;
};
DocumentViewer.prototype.getClipMode = function () {
	return this.clipMode;
};
DocumentViewer.prototype.getHeight = function () {
	return this.height;
};
DocumentViewer.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
DocumentViewer.prototype.getLayout = function () {
	return this.layout;
};
DocumentViewer.prototype.getLeft = function () {
	return this.left;
};
DocumentViewer.prototype.getOpacity = function () {
	return this.opacity;
};
DocumentViewer.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
DocumentViewer.prototype.getRect = function () {
	return this.rect;
};
DocumentViewer.prototype.getRight = function () {
	return this.right;
};
DocumentViewer.prototype.getSize = function () {
	return this.size;
};
DocumentViewer.prototype.getTintColor = function () {
	return this.tintColor;
};
DocumentViewer.prototype.getTop = function () {
	return this.top;
};
DocumentViewer.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
DocumentViewer.prototype.getTransform = function () {
	return this.transform;
};
DocumentViewer.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
DocumentViewer.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
DocumentViewer.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
DocumentViewer.prototype.getVisible = function () {
	return this.visible;
};
DocumentViewer.prototype.getWidth = function () {
	return this.width;
};
DocumentViewer.prototype.getZIndex = function () {
	return this.zIndex;
};
DocumentViewer.prototype.hide = function () {
};
DocumentViewer.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
DocumentViewer.prototype.removeAllChildren = function () {
};
DocumentViewer.prototype.removeEventListener = function () {
};
DocumentViewer.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
DocumentViewer.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
DocumentViewer.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
DocumentViewer.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
DocumentViewer.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
DocumentViewer.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
DocumentViewer.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
DocumentViewer.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
DocumentViewer.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
DocumentViewer.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
DocumentViewer.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
DocumentViewer.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
DocumentViewer.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
DocumentViewer.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
DocumentViewer.prototype.setBottom = function (property) {
	this.bottom = property;
};
DocumentViewer.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
DocumentViewer.prototype.setCenter = function (property) {
	this.center = property;
};
DocumentViewer.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
DocumentViewer.prototype.setHeight = function (property) {
	this.height = property;
};
DocumentViewer.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
DocumentViewer.prototype.setLayout = function (property) {
	this.layout = property;
};
DocumentViewer.prototype.setLeft = function (property) {
	this.left = property;
};
DocumentViewer.prototype.setOpacity = function (property) {
	this.opacity = property;
};
DocumentViewer.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
DocumentViewer.prototype.setRight = function (property) {
	this.right = property;
};
DocumentViewer.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
DocumentViewer.prototype.setTop = function (property) {
	this.top = property;
};
DocumentViewer.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
DocumentViewer.prototype.setTransform = function (property) {
	this.transform = property;
};
DocumentViewer.prototype.setUrl = function () {
};
DocumentViewer.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
DocumentViewer.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
DocumentViewer.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
DocumentViewer.prototype.setVisible = function (property) {
	this.visible = property;
};
DocumentViewer.prototype.setWidth = function (property) {
	this.width = property;
};
DocumentViewer.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
DocumentViewer.prototype.show = function () {
};
DocumentViewer.prototype.startLayout = function () {
	throw new Error('Ti.UI.iPad.DocumentViewer.startLayout was deprecated, since 3.0.0');
};
DocumentViewer.prototype.toImage = function () {
	return {};
};
DocumentViewer.prototype.updateLayout = function () {
	throw new Error('Ti.UI.iPad.DocumentViewer.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new DocumentViewer(properties);
};