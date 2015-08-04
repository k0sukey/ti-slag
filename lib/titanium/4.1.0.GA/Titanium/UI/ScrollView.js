var crypto = require('crypto');
function ScrollView(__SLAG__properties) {
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
			'canCancelEvents',
			'contentOffset',
			'decelerationRate',
			'disableBounce',
			'horizontalBounce',
			'maxZoomScale',
			'minZoomScale',
			'overScrollMode',
			'scrollsToTop',
			'scrollIndicatorStyle',
			'scrollType',
			'verticalBounce',
			'zoomScale',
			'contentWidth',
			'contentHeight',
			'scrollingEnabled',
			'showHorizontalScrollIndicator',
			'showVerticalScrollIndicator',
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
		throw new Error('Ti.UI.ScrollView.apiName is read only property');
	}
	this.apiName = 'Ti.UI.ScrollView';
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
		throw new Error('Ti.UI.ScrollView.animatedCenter is read only property');
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
		throw new Error('Ti.UI.ScrollView.children is read only property');
	}
	this.children = [];
	this.height = __SLAG__properties.height || 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.ScrollView.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.ScrollView.size is read only property');
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
	this.canCancelEvents = __SLAG__properties.canCancelEvents || true;
	this.contentOffset = __SLAG__properties.contentOffset || {};
	this.decelerationRate = __SLAG__properties.decelerationRate || 0;
	this.disableBounce = __SLAG__properties.disableBounce || true;
	this.horizontalBounce = __SLAG__properties.horizontalBounce || true;
	this.maxZoomScale = __SLAG__properties.maxZoomScale || 0;
	this.minZoomScale = __SLAG__properties.minZoomScale || 0;
	this.overScrollMode = __SLAG__properties.overScrollMode || 0;
	this.scrollsToTop = __SLAG__properties.scrollsToTop || true;
	this.scrollIndicatorStyle = __SLAG__properties.scrollIndicatorStyle || 0;
	this.scrollType = __SLAG__properties.scrollType || '';
	this.verticalBounce = __SLAG__properties.verticalBounce || true;
	this.zoomScale = __SLAG__properties.zoomScale || 0;
	this.contentWidth = __SLAG__properties.contentWidth || 0;
	this.contentHeight = __SLAG__properties.contentHeight || 0;
	this.scrollingEnabled = __SLAG__properties.scrollingEnabled || true;
	this.showHorizontalScrollIndicator = __SLAG__properties.showHorizontalScrollIndicator || true;
	this.showVerticalScrollIndicator = __SLAG__properties.showVerticalScrollIndicator || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
ScrollView.prototype.addEventListener = function () {
};
ScrollView.prototype.removeEventListener = function () {
};
ScrollView.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
ScrollView.prototype.fireEvent = function () {
};
ScrollView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.ScrollView.finishLayout was deprecated, since 3.0.0');
};
ScrollView.prototype.removeAllChildren = function () {
};
ScrollView.prototype.startLayout = function () {
	throw new Error('Ti.UI.ScrollView.startLayout was deprecated, since 3.0.0');
};
ScrollView.prototype.toImage = function () {
	return {};
};
ScrollView.prototype.updateLayout = function () {
	throw new Error('Ti.UI.ScrollView.updateLayout was deprecated, since 3.0.0');
};
ScrollView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
ScrollView.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
ScrollView.prototype.animate = function () {
};
ScrollView.prototype.hide = function () {
};
ScrollView.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
ScrollView.prototype.show = function () {
};
ScrollView.prototype.setContentOffset = function (property) {
	this.contentOffset = property;
};
ScrollView.prototype.setZoomScale = function (property) {
	this.zoomScale = property;
};
ScrollView.prototype.scrollTo = function () {
};
ScrollView.prototype.scrollToBottom = function () {
};
ScrollView.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ScrollView.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
ScrollView.prototype.getApiName = function () {
	return this.apiName;
};
ScrollView.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
ScrollView.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
ScrollView.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
ScrollView.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
ScrollView.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
ScrollView.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
ScrollView.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
ScrollView.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
ScrollView.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
ScrollView.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
ScrollView.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
ScrollView.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
ScrollView.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
ScrollView.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
ScrollView.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
ScrollView.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
ScrollView.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
ScrollView.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
ScrollView.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
ScrollView.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
ScrollView.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
ScrollView.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
ScrollView.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
ScrollView.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
ScrollView.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
ScrollView.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
ScrollView.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
ScrollView.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
ScrollView.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
ScrollView.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
ScrollView.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
ScrollView.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
ScrollView.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
ScrollView.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
ScrollView.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
ScrollView.prototype.getClipMode = function () {
	return this.clipMode;
};
ScrollView.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
ScrollView.prototype.getFocusable = function () {
	return this.focusable;
};
ScrollView.prototype.setFocusable = function (property) {
	this.focusable = property;
};
ScrollView.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
ScrollView.prototype.setOverrideCurrentAnimation = function (property) {
	this.overrideCurrentAnimation = property;
};
ScrollView.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
ScrollView.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
ScrollView.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
ScrollView.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
ScrollView.prototype.getTransform = function () {
	return this.transform;
};
ScrollView.prototype.setTransform = function (property) {
	this.transform = property;
};
ScrollView.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
ScrollView.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
ScrollView.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
ScrollView.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
ScrollView.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
ScrollView.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
ScrollView.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
ScrollView.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
ScrollView.prototype.getZIndex = function () {
	return this.zIndex;
};
ScrollView.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
ScrollView.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
ScrollView.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
ScrollView.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
ScrollView.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
ScrollView.prototype.getBorderColor = function () {
	return this.borderColor;
};
ScrollView.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
ScrollView.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
ScrollView.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
ScrollView.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
ScrollView.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
ScrollView.prototype.getBottom = function () {
	return this.bottom;
};
ScrollView.prototype.setBottom = function (property) {
	this.bottom = property;
};
ScrollView.prototype.getCenter = function () {
	return this.center;
};
ScrollView.prototype.setCenter = function (property) {
	this.center = property;
};
ScrollView.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
ScrollView.prototype.getChildren = function () {
	return this.children;
};
ScrollView.prototype.getHeight = function () {
	return this.height;
};
ScrollView.prototype.setHeight = function (property) {
	this.height = property;
};
ScrollView.prototype.getLayout = function () {
	return this.layout;
};
ScrollView.prototype.setLayout = function (property) {
	this.layout = property;
};
ScrollView.prototype.getLeft = function () {
	return this.left;
};
ScrollView.prototype.setLeft = function (property) {
	this.left = property;
};
ScrollView.prototype.getOpacity = function () {
	return this.opacity;
};
ScrollView.prototype.setOpacity = function (property) {
	this.opacity = property;
};
ScrollView.prototype.getRect = function () {
	return this.rect;
};
ScrollView.prototype.getRight = function () {
	return this.right;
};
ScrollView.prototype.setRight = function (property) {
	this.right = property;
};
ScrollView.prototype.getSize = function () {
	return this.size;
};
ScrollView.prototype.getTintColor = function () {
	return this.tintColor;
};
ScrollView.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
ScrollView.prototype.getTop = function () {
	return this.top;
};
ScrollView.prototype.setTop = function (property) {
	this.top = property;
};
ScrollView.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
ScrollView.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
ScrollView.prototype.getVisible = function () {
	return this.visible;
};
ScrollView.prototype.setVisible = function (property) {
	this.visible = property;
};
ScrollView.prototype.getWidth = function () {
	return this.width;
};
ScrollView.prototype.setWidth = function (property) {
	this.width = property;
};
ScrollView.prototype.getCanCancelEvents = function () {
	return this.canCancelEvents;
};
ScrollView.prototype.setCanCancelEvents = function (property) {
	this.canCancelEvents = property;
};
ScrollView.prototype.getContentOffset = function () {
	return this.contentOffset;
};
ScrollView.prototype.setContentOffset = function (property) {
	this.contentOffset = property;
};
ScrollView.prototype.getDecelerationRate = function () {
	return this.decelerationRate;
};
ScrollView.prototype.setDecelerationRate = function (property) {
	this.decelerationRate = property;
};
ScrollView.prototype.getDisableBounce = function () {
	return this.disableBounce;
};
ScrollView.prototype.setDisableBounce = function (property) {
	this.disableBounce = property;
};
ScrollView.prototype.getHorizontalBounce = function () {
	return this.horizontalBounce;
};
ScrollView.prototype.setHorizontalBounce = function (property) {
	this.horizontalBounce = property;
};
ScrollView.prototype.getMaxZoomScale = function () {
	return this.maxZoomScale;
};
ScrollView.prototype.setMaxZoomScale = function (property) {
	this.maxZoomScale = property;
};
ScrollView.prototype.getMinZoomScale = function () {
	return this.minZoomScale;
};
ScrollView.prototype.setMinZoomScale = function (property) {
	this.minZoomScale = property;
};
ScrollView.prototype.getOverScrollMode = function () {
	return this.overScrollMode;
};
ScrollView.prototype.setOverScrollMode = function (property) {
	this.overScrollMode = property;
};
ScrollView.prototype.getScrollsToTop = function () {
	return this.scrollsToTop;
};
ScrollView.prototype.setScrollsToTop = function (property) {
	this.scrollsToTop = property;
};
ScrollView.prototype.getScrollIndicatorStyle = function () {
	return this.scrollIndicatorStyle;
};
ScrollView.prototype.setScrollIndicatorStyle = function (property) {
	this.scrollIndicatorStyle = property;
};
ScrollView.prototype.getScrollType = function () {
	return this.scrollType;
};
ScrollView.prototype.setScrollType = function (property) {
	this.scrollType = property;
};
ScrollView.prototype.getVerticalBounce = function () {
	return this.verticalBounce;
};
ScrollView.prototype.setVerticalBounce = function (property) {
	this.verticalBounce = property;
};
ScrollView.prototype.getZoomScale = function () {
	return this.zoomScale;
};
ScrollView.prototype.setZoomScale = function (property) {
	this.zoomScale = property;
};
ScrollView.prototype.getContentWidth = function () {
	return this.contentWidth;
};
ScrollView.prototype.setContentWidth = function (property) {
	this.contentWidth = property;
};
ScrollView.prototype.getContentHeight = function () {
	return this.contentHeight;
};
ScrollView.prototype.setContentHeight = function (property) {
	this.contentHeight = property;
};
ScrollView.prototype.getScrollingEnabled = function () {
	return this.scrollingEnabled;
};
ScrollView.prototype.setScrollingEnabled = function (property) {
	this.scrollingEnabled = property;
};
ScrollView.prototype.getShowHorizontalScrollIndicator = function () {
	return this.showHorizontalScrollIndicator;
};
ScrollView.prototype.setShowHorizontalScrollIndicator = function (property) {
	this.showHorizontalScrollIndicator = property;
};
ScrollView.prototype.getShowVerticalScrollIndicator = function () {
	return this.showVerticalScrollIndicator;
};
ScrollView.prototype.setShowVerticalScrollIndicator = function (property) {
	this.showVerticalScrollIndicator = property;
};
module.exports = function (properties) {
	return new ScrollView(properties);
};