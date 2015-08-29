var crypto = require('crypto');
function DocumentViewer(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
			'id'
		];
	if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG_NAME in __SLAG_PROPERTIES) {
			if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) {
				throw new Error('Use user custom property ' + __SLAG_NAME);
			}
		}
	} else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG_PROPERTIES.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.iPad.DocumentViewer.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPad.DocumentViewer';
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.accessibilityHidden = undefined;
	} else {
		this.accessibilityHidden = __SLAG_PROPERTIES.accessibilityHidden || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.accessibilityHint = undefined;
	} else {
		this.accessibilityHint = __SLAG_PROPERTIES.accessibilityHint || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.accessibilityLabel = undefined;
	} else {
		this.accessibilityLabel = __SLAG_PROPERTIES.accessibilityLabel || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.accessibilityValue = undefined;
	} else {
		this.accessibilityValue = __SLAG_PROPERTIES.accessibilityValue || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.anchorPoint = undefined;
	} else {
		this.anchorPoint = __SLAG_PROPERTIES.anchorPoint || {
			x: 0,
			y: 0
		};
	}
	if (__SLAG_PROPERTIES.animatedCenter) {
		throw new Error('Ti.UI.iPad.DocumentViewer.animatedCenter is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.animatedCenter = undefined;
	} else {
		this.animatedCenter = {
			x: 0,
			y: 0
		};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.backgroundGradient = undefined;
	} else {
		this.backgroundGradient = __SLAG_PROPERTIES.backgroundGradient || {};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.backgroundImage = undefined;
	} else {
		this.backgroundImage = __SLAG_PROPERTIES.backgroundImage || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.backgroundRepeat = undefined;
	} else {
		this.backgroundRepeat = __SLAG_PROPERTIES.backgroundRepeat || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.backgroundLeftCap = undefined;
	} else {
		this.backgroundLeftCap = __SLAG_PROPERTIES.backgroundLeftCap || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.backgroundTopCap = undefined;
	} else {
		this.backgroundTopCap = __SLAG_PROPERTIES.backgroundTopCap || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.clipMode = undefined;
	} else {
		this.clipMode = __SLAG_PROPERTIES.clipMode || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.pullBackgroundColor = undefined;
	} else {
		this.pullBackgroundColor = __SLAG_PROPERTIES.pullBackgroundColor || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.transform = undefined;
	} else {
		this.transform = __SLAG_PROPERTIES.transform || {};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.viewShadowRadius = undefined;
	} else {
		this.viewShadowRadius = __SLAG_PROPERTIES.viewShadowRadius || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.viewShadowColor = undefined;
	} else {
		this.viewShadowColor = __SLAG_PROPERTIES.viewShadowColor || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.viewShadowOffset = undefined;
	} else {
		this.viewShadowOffset = __SLAG_PROPERTIES.viewShadowOffset || {
			x: 0,
			y: 0
		};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.horizontalWrap = undefined;
	} else {
		this.horizontalWrap = __SLAG_PROPERTIES.horizontalWrap || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.zIndex = undefined;
	} else {
		this.zIndex = __SLAG_PROPERTIES.zIndex || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.backgroundColor = undefined;
	} else {
		this.backgroundColor = __SLAG_PROPERTIES.backgroundColor || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.borderColor = undefined;
	} else {
		this.borderColor = __SLAG_PROPERTIES.borderColor || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.borderRadius = undefined;
	} else {
		this.borderRadius = __SLAG_PROPERTIES.borderRadius || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.borderWidth = undefined;
	} else {
		this.borderWidth = __SLAG_PROPERTIES.borderWidth || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bottom = undefined;
	} else {
		this.bottom = __SLAG_PROPERTIES.bottom || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.center = undefined;
	} else {
		this.center = __SLAG_PROPERTIES.center || {
			x: 0,
			y: 0
		};
	}
	if (__SLAG_PROPERTIES.children) {
		throw new Error('Ti.UI.iPad.DocumentViewer.children is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.children = undefined;
	} else {
		this.children = [];
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.height = undefined;
	} else {
		this.height = __SLAG_PROPERTIES.height || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.layout = undefined;
	} else {
		this.layout = __SLAG_PROPERTIES.layout || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.left = undefined;
	} else {
		this.left = __SLAG_PROPERTIES.left || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.opacity = undefined;
	} else {
		this.opacity = __SLAG_PROPERTIES.opacity || 0;
	}
	if (__SLAG_PROPERTIES.rect) {
		throw new Error('Ti.UI.iPad.DocumentViewer.rect is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.rect = undefined;
	} else {
		this.rect = {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.right = undefined;
	} else {
		this.right = __SLAG_PROPERTIES.right || 0;
	}
	if (__SLAG_PROPERTIES.size) {
		throw new Error('Ti.UI.iPad.DocumentViewer.size is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.size = undefined;
	} else {
		this.size = {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tintColor = undefined;
	} else {
		this.tintColor = __SLAG_PROPERTIES.tintColor || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.top = undefined;
	} else {
		this.top = __SLAG_PROPERTIES.top || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.touchEnabled = undefined;
	} else {
		this.touchEnabled = __SLAG_PROPERTIES.touchEnabled || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.visible = undefined;
	} else {
		this.visible = __SLAG_PROPERTIES.visible || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.width = undefined;
	} else {
		this.width = __SLAG_PROPERTIES.width || 0;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
DocumentViewer.prototype.addEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
DocumentViewer.prototype.removeEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
DocumentViewer.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
DocumentViewer.prototype.fireEvent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
DocumentViewer.prototype.finishLayout = function () {
	throw new Error('Ti.UI.iPad.DocumentViewer.finishLayout was deprecated, since 3.0.0');
};
DocumentViewer.prototype.removeAllChildren = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
DocumentViewer.prototype.startLayout = function () {
	throw new Error('Ti.UI.iPad.DocumentViewer.startLayout was deprecated, since 3.0.0');
};
DocumentViewer.prototype.toImage = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
DocumentViewer.prototype.updateLayout = function () {
	throw new Error('Ti.UI.iPad.DocumentViewer.updateLayout was deprecated, since 3.0.0');
};
DocumentViewer.prototype.convertPointToView = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {
		x: 0,
		y: 0
	};
};
DocumentViewer.prototype.add = function (__SLAG_PARAMETER) {
	this.children.push(__SLAG_PARAMETER);
	__SLAG_PARAMETER.__SLAG_PARENT = this;
};
DocumentViewer.prototype.animate = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
DocumentViewer.prototype.hide = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
DocumentViewer.prototype.remove = function (__SLAG_PARAMETER) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === __SLAG_PARAMETER.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	__SLAG_PARAMETER.__SLAG_PARENT = undefined;
};
DocumentViewer.prototype.show = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
DocumentViewer.prototype.setUrl = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
DocumentViewer.prototype.getBubbleParent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
DocumentViewer.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
DocumentViewer.prototype.getAccessibilityHidden = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.accessibilityHidden;
};
DocumentViewer.prototype.setAccessibilityHidden = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.accessibilityHidden = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getAccessibilityHint = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.accessibilityHint;
};
DocumentViewer.prototype.setAccessibilityHint = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.accessibilityHint = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getAccessibilityLabel = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.accessibilityLabel;
};
DocumentViewer.prototype.setAccessibilityLabel = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.accessibilityLabel = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getAccessibilityValue = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.accessibilityValue;
};
DocumentViewer.prototype.setAccessibilityValue = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.accessibilityValue = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getAnchorPoint = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.anchorPoint;
};
DocumentViewer.prototype.setAnchorPoint = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.anchorPoint = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getAnimatedCenter = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.animatedCenter;
};
DocumentViewer.prototype.getBackgroundGradient = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundGradient;
};
DocumentViewer.prototype.setBackgroundGradient = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundGradient = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getBackgroundImage = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundImage;
};
DocumentViewer.prototype.setBackgroundImage = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundImage = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getBackgroundRepeat = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundRepeat;
};
DocumentViewer.prototype.setBackgroundRepeat = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundRepeat = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getBackgroundLeftCap = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundLeftCap;
};
DocumentViewer.prototype.setBackgroundLeftCap = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundLeftCap = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getBackgroundTopCap = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundTopCap;
};
DocumentViewer.prototype.setBackgroundTopCap = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundTopCap = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getClipMode = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.clipMode;
};
DocumentViewer.prototype.setClipMode = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.clipMode = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getPullBackgroundColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.pullBackgroundColor;
};
DocumentViewer.prototype.setPullBackgroundColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.pullBackgroundColor = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getTransform = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.transform;
};
DocumentViewer.prototype.setTransform = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.transform = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getViewShadowRadius = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.viewShadowRadius;
};
DocumentViewer.prototype.setViewShadowRadius = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.viewShadowRadius = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getViewShadowColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.viewShadowColor;
};
DocumentViewer.prototype.setViewShadowColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.viewShadowColor = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getViewShadowOffset = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.viewShadowOffset;
};
DocumentViewer.prototype.setViewShadowOffset = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.viewShadowOffset = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getHorizontalWrap = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.horizontalWrap;
};
DocumentViewer.prototype.setHorizontalWrap = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.horizontalWrap = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getZIndex = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.zIndex;
};
DocumentViewer.prototype.setZIndex = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.zIndex = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getBackgroundColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.backgroundColor;
};
DocumentViewer.prototype.setBackgroundColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.backgroundColor = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getBorderColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.borderColor;
};
DocumentViewer.prototype.setBorderColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.borderColor = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getBorderRadius = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.borderRadius;
};
DocumentViewer.prototype.setBorderRadius = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.borderRadius = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getBorderWidth = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.borderWidth;
};
DocumentViewer.prototype.setBorderWidth = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.borderWidth = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getBottom = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bottom;
};
DocumentViewer.prototype.setBottom = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bottom = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getCenter = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.center;
};
DocumentViewer.prototype.setCenter = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.center = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
DocumentViewer.prototype.getChildren = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.children;
};
DocumentViewer.prototype.getHeight = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.height;
};
DocumentViewer.prototype.setHeight = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.height = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getLayout = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.layout;
};
DocumentViewer.prototype.setLayout = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.layout = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getLeft = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.left;
};
DocumentViewer.prototype.setLeft = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.left = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getOpacity = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.opacity;
};
DocumentViewer.prototype.setOpacity = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.opacity = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getRect = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rect;
};
DocumentViewer.prototype.getRight = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.right;
};
DocumentViewer.prototype.setRight = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.right = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getSize = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.size;
};
DocumentViewer.prototype.getTintColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tintColor;
};
DocumentViewer.prototype.setTintColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tintColor = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getTop = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.top;
};
DocumentViewer.prototype.setTop = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.top = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getTouchEnabled = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.touchEnabled;
};
DocumentViewer.prototype.setTouchEnabled = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.touchEnabled = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getVisible = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.visible;
};
DocumentViewer.prototype.setVisible = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.visible = __SLAG__PROPERTY;
};
DocumentViewer.prototype.getWidth = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.width;
};
DocumentViewer.prototype.setWidth = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.width = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new DocumentViewer(properties);
};