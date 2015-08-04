var crypto = require('crypto');
function ScrollableView(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'anchorPoint',
			'animatedCenter',
			'backgroundDisabledColor',
			'backgroundDisabledImage',
			'backgroundFocusedColor',
			'backgroundFocusedImage',
			'backgroundGradient',
			'backgroundImage',
			'backgroundRepeat',
			'backgroundLeftCap',
			'backgroundSelectedColor',
			'backgroundSelectedImage',
			'backgroundTopCap',
			'clipMode',
			'focusable',
			'overrideCurrentAnimation',
			'pullBackgroundColor',
			'softKeyboardOnFocus',
			'transform',
			'viewShadowRadius',
			'viewShadowColor',
			'viewShadowOffset',
			'horizontalWrap',
			'zIndex',
			'keepScreenOn',
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
			'cacheSize',
			'currentPage',
			'disableBounce',
			'overScrollMode',
			'pagingControlColor',
			'pagingControlHeight',
			'showPagingControl',
			'pagingControlTimeout',
			'pagingControlAlpha',
			'pagingControlOnTop',
			'overlayEnabled',
			'scrollingEnabled',
			'views',
			'clipViews',
			'hitRect',
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
		throw new Error('Ti.UI.ScrollableView.apiName is read only property');
	}
	this.apiName = 'Ti.UI.ScrollableView';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.accessibilityHidden = __SLAG__properties.accessibilityHidden || true;
	this.accessibilityHint = __SLAG__properties.accessibilityHint || '';
	this.accessibilityLabel = __SLAG__properties.accessibilityLabel || '';
	this.accessibilityValue = __SLAG__properties.accessibilityValue || '';
	this.anchorPoint = __SLAG__properties.anchorPoint || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.animatedCenter) {
		throw new Error('Ti.UI.ScrollableView.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	this.backgroundDisabledColor = __SLAG__properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = __SLAG__properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = __SLAG__properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = __SLAG__properties.backgroundFocusedImage || '';
	this.backgroundGradient = __SLAG__properties.backgroundGradient || {};
	this.backgroundImage = __SLAG__properties.backgroundImage || '';
	this.backgroundRepeat = __SLAG__properties.backgroundRepeat || true;
	this.backgroundLeftCap = __SLAG__properties.backgroundLeftCap || 0;
	this.backgroundSelectedColor = __SLAG__properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = __SLAG__properties.backgroundSelectedImage || '';
	this.backgroundTopCap = __SLAG__properties.backgroundTopCap || 0;
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.focusable = __SLAG__properties.focusable || true;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	this.softKeyboardOnFocus = __SLAG__properties.softKeyboardOnFocus || 0;
	this.transform = __SLAG__properties.transform || {};
	this.viewShadowRadius = __SLAG__properties.viewShadowRadius || 0;
	this.viewShadowColor = __SLAG__properties.viewShadowColor || '';
	this.viewShadowOffset = __SLAG__properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.zIndex = __SLAG__properties.zIndex || 0;
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
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
		throw new Error('Ti.UI.ScrollableView.children is read only property');
	}
	this.children = [];
	this.height = __SLAG__properties.height || 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.ScrollableView.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.ScrollableView.size is read only property');
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
	this.cacheSize = __SLAG__properties.cacheSize || 0;
	this.currentPage = __SLAG__properties.currentPage || 0;
	this.disableBounce = __SLAG__properties.disableBounce || true;
	this.overScrollMode = __SLAG__properties.overScrollMode || 0;
	this.pagingControlColor = __SLAG__properties.pagingControlColor || '';
	this.pagingControlHeight = __SLAG__properties.pagingControlHeight || 0;
	this.showPagingControl = __SLAG__properties.showPagingControl || true;
	this.pagingControlTimeout = __SLAG__properties.pagingControlTimeout || 0;
	this.pagingControlAlpha = __SLAG__properties.pagingControlAlpha || 0;
	this.pagingControlOnTop = __SLAG__properties.pagingControlOnTop || true;
	this.overlayEnabled = __SLAG__properties.overlayEnabled || true;
	this.scrollingEnabled = __SLAG__properties.scrollingEnabled || true;
	this.views = __SLAG__properties.views || [];
	this.clipViews = __SLAG__properties.clipViews || true;
	this.hitRect = __SLAG__properties.hitRect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.id = __SLAG__properties.id || '';
	return this;
}
ScrollableView.prototype.addEventListener = function () {
};
ScrollableView.prototype.removeEventListener = function () {
};
ScrollableView.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
ScrollableView.prototype.fireEvent = function () {
};
ScrollableView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.ScrollableView.finishLayout was deprecated, since 3.0.0');
};
ScrollableView.prototype.removeAllChildren = function () {
};
ScrollableView.prototype.startLayout = function () {
	throw new Error('Ti.UI.ScrollableView.startLayout was deprecated, since 3.0.0');
};
ScrollableView.prototype.toImage = function () {
	return {};
};
ScrollableView.prototype.updateLayout = function () {
	throw new Error('Ti.UI.ScrollableView.updateLayout was deprecated, since 3.0.0');
};
ScrollableView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
ScrollableView.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
ScrollableView.prototype.animate = function () {
};
ScrollableView.prototype.hide = function () {
};
ScrollableView.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
ScrollableView.prototype.show = function () {
};
ScrollableView.prototype.addView = function () {
};
ScrollableView.prototype.moveNext = function () {
};
ScrollableView.prototype.movePrevious = function () {
};
ScrollableView.prototype.removeView = function () {
};
ScrollableView.prototype.scrollToView = function () {
};
ScrollableView.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ScrollableView.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
ScrollableView.prototype.getApiName = function () {
	return this.apiName;
};
ScrollableView.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
ScrollableView.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
ScrollableView.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
ScrollableView.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
ScrollableView.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
ScrollableView.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
ScrollableView.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
ScrollableView.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
ScrollableView.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
ScrollableView.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
ScrollableView.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
ScrollableView.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
ScrollableView.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
ScrollableView.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
ScrollableView.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
ScrollableView.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
ScrollableView.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
ScrollableView.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
ScrollableView.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
ScrollableView.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
ScrollableView.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
ScrollableView.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
ScrollableView.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
ScrollableView.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
ScrollableView.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
ScrollableView.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
ScrollableView.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
ScrollableView.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
ScrollableView.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
ScrollableView.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
ScrollableView.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
ScrollableView.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
ScrollableView.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
ScrollableView.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
ScrollableView.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
ScrollableView.prototype.getClipMode = function () {
	return this.clipMode;
};
ScrollableView.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
ScrollableView.prototype.getFocusable = function () {
	return this.focusable;
};
ScrollableView.prototype.setFocusable = function (property) {
	this.focusable = property;
};
ScrollableView.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
ScrollableView.prototype.setOverrideCurrentAnimation = function (property) {
	this.overrideCurrentAnimation = property;
};
ScrollableView.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
ScrollableView.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
ScrollableView.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
ScrollableView.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
ScrollableView.prototype.getTransform = function () {
	return this.transform;
};
ScrollableView.prototype.setTransform = function (property) {
	this.transform = property;
};
ScrollableView.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
ScrollableView.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
ScrollableView.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
ScrollableView.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
ScrollableView.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
ScrollableView.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
ScrollableView.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
ScrollableView.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
ScrollableView.prototype.getZIndex = function () {
	return this.zIndex;
};
ScrollableView.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
ScrollableView.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
ScrollableView.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
ScrollableView.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
ScrollableView.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
ScrollableView.prototype.getBorderColor = function () {
	return this.borderColor;
};
ScrollableView.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
ScrollableView.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
ScrollableView.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
ScrollableView.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
ScrollableView.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
ScrollableView.prototype.getBottom = function () {
	return this.bottom;
};
ScrollableView.prototype.setBottom = function (property) {
	this.bottom = property;
};
ScrollableView.prototype.getCenter = function () {
	return this.center;
};
ScrollableView.prototype.setCenter = function (property) {
	this.center = property;
};
ScrollableView.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
ScrollableView.prototype.getChildren = function () {
	return this.children;
};
ScrollableView.prototype.getHeight = function () {
	return this.height;
};
ScrollableView.prototype.setHeight = function (property) {
	this.height = property;
};
ScrollableView.prototype.getLayout = function () {
	return this.layout;
};
ScrollableView.prototype.setLayout = function (property) {
	this.layout = property;
};
ScrollableView.prototype.getLeft = function () {
	return this.left;
};
ScrollableView.prototype.setLeft = function (property) {
	this.left = property;
};
ScrollableView.prototype.getOpacity = function () {
	return this.opacity;
};
ScrollableView.prototype.setOpacity = function (property) {
	this.opacity = property;
};
ScrollableView.prototype.getRect = function () {
	return this.rect;
};
ScrollableView.prototype.getRight = function () {
	return this.right;
};
ScrollableView.prototype.setRight = function (property) {
	this.right = property;
};
ScrollableView.prototype.getSize = function () {
	return this.size;
};
ScrollableView.prototype.getTintColor = function () {
	return this.tintColor;
};
ScrollableView.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
ScrollableView.prototype.getTop = function () {
	return this.top;
};
ScrollableView.prototype.setTop = function (property) {
	this.top = property;
};
ScrollableView.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
ScrollableView.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
ScrollableView.prototype.getVisible = function () {
	return this.visible;
};
ScrollableView.prototype.setVisible = function (property) {
	this.visible = property;
};
ScrollableView.prototype.getWidth = function () {
	return this.width;
};
ScrollableView.prototype.setWidth = function (property) {
	this.width = property;
};
ScrollableView.prototype.getCacheSize = function () {
	return this.cacheSize;
};
ScrollableView.prototype.setCacheSize = function (property) {
	this.cacheSize = property;
};
ScrollableView.prototype.getCurrentPage = function () {
	return this.currentPage;
};
ScrollableView.prototype.setCurrentPage = function (property) {
	this.currentPage = property;
};
ScrollableView.prototype.getDisableBounce = function () {
	return this.disableBounce;
};
ScrollableView.prototype.setDisableBounce = function (property) {
	this.disableBounce = property;
};
ScrollableView.prototype.getOverScrollMode = function () {
	return this.overScrollMode;
};
ScrollableView.prototype.setOverScrollMode = function (property) {
	this.overScrollMode = property;
};
ScrollableView.prototype.getPagingControlColor = function () {
	return this.pagingControlColor;
};
ScrollableView.prototype.setPagingControlColor = function (property) {
	this.pagingControlColor = property;
};
ScrollableView.prototype.getPagingControlHeight = function () {
	return this.pagingControlHeight;
};
ScrollableView.prototype.setPagingControlHeight = function (property) {
	this.pagingControlHeight = property;
};
ScrollableView.prototype.getShowPagingControl = function () {
	return this.showPagingControl;
};
ScrollableView.prototype.setShowPagingControl = function (property) {
	this.showPagingControl = property;
};
ScrollableView.prototype.getPagingControlTimeout = function () {
	return this.pagingControlTimeout;
};
ScrollableView.prototype.setPagingControlTimeout = function (property) {
	this.pagingControlTimeout = property;
};
ScrollableView.prototype.getPagingControlAlpha = function () {
	return this.pagingControlAlpha;
};
ScrollableView.prototype.setPagingControlAlpha = function (property) {
	this.pagingControlAlpha = property;
};
ScrollableView.prototype.getPagingControlOnTop = function () {
	return this.pagingControlOnTop;
};
ScrollableView.prototype.setPagingControlOnTop = function (property) {
	this.pagingControlOnTop = property;
};
ScrollableView.prototype.getOverlayEnabled = function () {
	return this.overlayEnabled;
};
ScrollableView.prototype.setOverlayEnabled = function (property) {
	this.overlayEnabled = property;
};
ScrollableView.prototype.getScrollingEnabled = function () {
	return this.scrollingEnabled;
};
ScrollableView.prototype.setScrollingEnabled = function (property) {
	this.scrollingEnabled = property;
};
ScrollableView.prototype.getViews = function () {
	return this.views;
};
ScrollableView.prototype.setViews = function (property) {
	this.views = property;
};
ScrollableView.prototype.getClipViews = function () {
	return this.clipViews;
};
ScrollableView.prototype.setClipViews = function (property) {
	this.clipViews = property;
};
ScrollableView.prototype.getHitRect = function () {
	return this.hitRect;
};
ScrollableView.prototype.setHitRect = function (property) {
	this.hitRect = property;
};
module.exports = function (properties) {
	return new ScrollableView(properties);
};