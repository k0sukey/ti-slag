var crypto = require('crypto');
function NavigationWindow(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'anchorPoint',
			'animatedCenter',
			'apiName',
			'autoAdjustScrollViewInsets',
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
			'extendEdges',
			'fullscreen',
			'height',
			'horizontalWrap',
			'includeOpaqueBars',
			'layout',
			'left',
			'leftNavButtons',
			'modal',
			'opacity',
			'orientation',
			'orientationModes',
			'pullBackgroundColor',
			'rect',
			'right',
			'rightNavButtons',
			'size',
			'statusBarStyle',
			'tintColor',
			'titleAttributes',
			'top',
			'touchEnabled',
			'transform',
			'viewShadowColor',
			'viewShadowOffset',
			'viewShadowRadius',
			'visible',
			'width',
			'window',
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
		throw new Error('Ti.UI.iOS.NavigationWindow.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iOS.NavigationWindow.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iOS.NavigationWindow';
	this.autoAdjustScrollViewInsets = __SLAG__properties.autoAdjustScrollViewInsets || true;
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
		throw new Error('Ti.UI.iOS.NavigationWindow.children is read only property');
	}
	this.children = [];
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.extendEdges = __SLAG__properties.extendEdges || 0;
	this.fullscreen = __SLAG__properties.fullscreen || true;
	this.height = __SLAG__properties.height || 0;
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.includeOpaqueBars = __SLAG__properties.includeOpaqueBars || true;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.leftNavButtons = __SLAG__properties.leftNavButtons || [];
	this.modal = __SLAG__properties.modal || true;
	this.opacity = __SLAG__properties.opacity || 0;
	if (__SLAG__properties.orientation) {
		throw new Error('Ti.UI.iOS.NavigationWindow.orientation is read only property');
	}
	this.orientation = 0;
	this.orientationModes = __SLAG__properties.orientationModes || 0;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.iOS.NavigationWindow.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	this.rightNavButtons = __SLAG__properties.rightNavButtons || [];
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.iOS.NavigationWindow.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.statusBarStyle = __SLAG__properties.statusBarStyle || 0;
	this.tintColor = __SLAG__properties.tintColor || '';
	this.titleAttributes = __SLAG__properties.titleAttributes || {};
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
	this.window = __SLAG__properties.window || {};
	this.zIndex = __SLAG__properties.zIndex || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
NavigationWindow.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
NavigationWindow.prototype.addEventListener = function () {
};
NavigationWindow.prototype.animate = function () {
};
NavigationWindow.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
NavigationWindow.prototype.close = function () {
};
NavigationWindow.prototype.closeWindow = function () {
};
NavigationWindow.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationWindow.prototype.finishLayout = function () {
	throw new Error('Ti.UI.iOS.NavigationWindow.finishLayout was deprecated, since 3.0.0');
};
NavigationWindow.prototype.fireEvent = function () {
};
NavigationWindow.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
NavigationWindow.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
NavigationWindow.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
NavigationWindow.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
NavigationWindow.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
NavigationWindow.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
NavigationWindow.prototype.getApiName = function () {
	return this.apiName;
};
NavigationWindow.prototype.getAutoAdjustScrollViewInsets = function () {
	return this.autoAdjustScrollViewInsets;
};
NavigationWindow.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
NavigationWindow.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
NavigationWindow.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
NavigationWindow.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
NavigationWindow.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
NavigationWindow.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
NavigationWindow.prototype.getBorderColor = function () {
	return this.borderColor;
};
NavigationWindow.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
NavigationWindow.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
NavigationWindow.prototype.getBottom = function () {
	return this.bottom;
};
NavigationWindow.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
NavigationWindow.prototype.getCenter = function () {
	return this.center;
};
NavigationWindow.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
NavigationWindow.prototype.getChildren = function () {
	return this.children;
};
NavigationWindow.prototype.getClipMode = function () {
	return this.clipMode;
};
NavigationWindow.prototype.getExtendEdges = function () {
	return this.extendEdges;
};
NavigationWindow.prototype.getFullscreen = function () {
	return this.fullscreen;
};
NavigationWindow.prototype.getHeight = function () {
	return this.height;
};
NavigationWindow.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
NavigationWindow.prototype.getIncludeOpaqueBars = function () {
	return this.includeOpaqueBars;
};
NavigationWindow.prototype.getLayout = function () {
	return this.layout;
};
NavigationWindow.prototype.getLeft = function () {
	return this.left;
};
NavigationWindow.prototype.getLeftNavButtons = function () {
	return this.leftNavButtons;
};
NavigationWindow.prototype.getModal = function () {
	return this.modal;
};
NavigationWindow.prototype.getOpacity = function () {
	return this.opacity;
};
NavigationWindow.prototype.getOrientation = function () {
	return this.orientation;
};
NavigationWindow.prototype.getOrientationModes = function () {
	return this.orientationModes;
};
NavigationWindow.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
NavigationWindow.prototype.getRect = function () {
	return this.rect;
};
NavigationWindow.prototype.getRight = function () {
	return this.right;
};
NavigationWindow.prototype.getRightNavButtons = function () {
	return this.rightNavButtons;
};
NavigationWindow.prototype.getSize = function () {
	return this.size;
};
NavigationWindow.prototype.getStatusBarStyle = function () {
	return this.statusBarStyle;
};
NavigationWindow.prototype.getTintColor = function () {
	return this.tintColor;
};
NavigationWindow.prototype.getTitleAttributes = function () {
	return this.titleAttributes;
};
NavigationWindow.prototype.getTop = function () {
	return this.top;
};
NavigationWindow.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
NavigationWindow.prototype.getTransform = function () {
	return this.transform;
};
NavigationWindow.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
NavigationWindow.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
NavigationWindow.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
NavigationWindow.prototype.getVisible = function () {
	return this.visible;
};
NavigationWindow.prototype.getWidth = function () {
	return this.width;
};
NavigationWindow.prototype.getWindow = function () {
	return this.window;
};
NavigationWindow.prototype.getZIndex = function () {
	return this.zIndex;
};
NavigationWindow.prototype.hide = function () {
};
NavigationWindow.prototype.hideNavBar = function () {
};
NavigationWindow.prototype.open = function () {
};
NavigationWindow.prototype.openWindow = function () {
};
NavigationWindow.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
NavigationWindow.prototype.removeEventListener = function () {
};
NavigationWindow.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
NavigationWindow.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
NavigationWindow.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
NavigationWindow.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
NavigationWindow.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
NavigationWindow.prototype.setAutoAdjustScrollViewInsets = function (property) {
	this.autoAdjustScrollViewInsets = property;
};
NavigationWindow.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
NavigationWindow.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
NavigationWindow.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
NavigationWindow.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
NavigationWindow.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
NavigationWindow.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
NavigationWindow.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
NavigationWindow.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
NavigationWindow.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
NavigationWindow.prototype.setBottom = function (property) {
	this.bottom = property;
};
NavigationWindow.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
NavigationWindow.prototype.setCenter = function (property) {
	this.center = property;
};
NavigationWindow.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
NavigationWindow.prototype.setExtendEdges = function (property) {
	this.extendEdges = property;
};
NavigationWindow.prototype.setFullscreen = function (property) {
	this.fullscreen = property;
};
NavigationWindow.prototype.setHeight = function (property) {
	this.height = property;
};
NavigationWindow.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
NavigationWindow.prototype.setIncludeOpaqueBars = function (property) {
	this.includeOpaqueBars = property;
};
NavigationWindow.prototype.setLayout = function (property) {
	this.layout = property;
};
NavigationWindow.prototype.setLeft = function (property) {
	this.left = property;
};
NavigationWindow.prototype.setLeftNavButtons = function (property) {
	this.leftNavButtons = property;
};
NavigationWindow.prototype.setModal = function (property) {
	this.modal = property;
};
NavigationWindow.prototype.setOpacity = function (property) {
	this.opacity = property;
};
NavigationWindow.prototype.setOrientationModes = function (property) {
	this.orientationModes = property;
};
NavigationWindow.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
NavigationWindow.prototype.setRight = function (property) {
	this.right = property;
};
NavigationWindow.prototype.setRightNavButtons = function (property) {
	this.rightNavButtons = property;
};
NavigationWindow.prototype.setStatusBarStyle = function (property) {
	this.statusBarStyle = property;
};
NavigationWindow.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
NavigationWindow.prototype.setTitleAttributes = function (property) {
	this.titleAttributes = property;
};
NavigationWindow.prototype.setTop = function (property) {
	this.top = property;
};
NavigationWindow.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
NavigationWindow.prototype.setTransform = function (property) {
	this.transform = property;
};
NavigationWindow.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
NavigationWindow.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
NavigationWindow.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
NavigationWindow.prototype.setVisible = function (property) {
	this.visible = property;
};
NavigationWindow.prototype.setWidth = function (property) {
	this.width = property;
};
NavigationWindow.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
NavigationWindow.prototype.show = function () {
};
NavigationWindow.prototype.showNavBar = function () {
};
NavigationWindow.prototype.startLayout = function () {
	throw new Error('Ti.UI.iOS.NavigationWindow.startLayout was deprecated, since 3.0.0');
};
NavigationWindow.prototype.toImage = function () {
	return {};
};
NavigationWindow.prototype.updateLayout = function () {
	throw new Error('Ti.UI.iOS.NavigationWindow.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new NavigationWindow(properties);
};