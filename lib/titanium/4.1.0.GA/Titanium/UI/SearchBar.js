var crypto = require('crypto');
function SearchBar(__SLAG__properties) {
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
			'autocapitalization',
			'autocorrect',
			'barColor',
			'hintText',
			'hinttextid',
			'keyboardType',
			'prompt',
			'promptid',
			'showBookmark',
			'showCancel',
			'value',
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
		throw new Error('Ti.UI.SearchBar.apiName is read only property');
	}
	this.apiName = 'Ti.UI.SearchBar';
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
		throw new Error('Ti.UI.SearchBar.animatedCenter is read only property');
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
		throw new Error('Ti.UI.SearchBar.children is read only property');
	}
	this.children = [];
	this.height = __SLAG__properties.height || 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.SearchBar.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.SearchBar.size is read only property');
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
	this.autocapitalization = __SLAG__properties.autocapitalization || 0;
	this.autocorrect = __SLAG__properties.autocorrect || true;
	this.barColor = __SLAG__properties.barColor || '';
	this.hintText = __SLAG__properties.hintText || '';
	this.hinttextid = __SLAG__properties.hinttextid || '';
	this.keyboardType = __SLAG__properties.keyboardType || 0;
	this.prompt = __SLAG__properties.prompt || '';
	this.promptid = __SLAG__properties.promptid || '';
	this.showBookmark = __SLAG__properties.showBookmark || true;
	this.showCancel = __SLAG__properties.showCancel || true;
	this.value = __SLAG__properties.value || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
SearchBar.prototype.addEventListener = function () {
};
SearchBar.prototype.removeEventListener = function () {
};
SearchBar.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
SearchBar.prototype.fireEvent = function () {
};
SearchBar.prototype.finishLayout = function () {
	throw new Error('Ti.UI.SearchBar.finishLayout was deprecated, since 3.0.0');
};
SearchBar.prototype.startLayout = function () {
	throw new Error('Ti.UI.SearchBar.startLayout was deprecated, since 3.0.0');
};
SearchBar.prototype.toImage = function () {
	return {};
};
SearchBar.prototype.updateLayout = function () {
	throw new Error('Ti.UI.SearchBar.updateLayout was deprecated, since 3.0.0');
};
SearchBar.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
SearchBar.prototype.animate = function () {
};
SearchBar.prototype.hide = function () {
};
SearchBar.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
SearchBar.prototype.show = function () {
};
SearchBar.prototype.blur = function () {
};
SearchBar.prototype.focus = function () {
};
SearchBar.prototype.setShowCancel = function (property) {
	this.showCancel = property;
};
SearchBar.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
SearchBar.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
SearchBar.prototype.getApiName = function () {
	return this.apiName;
};
SearchBar.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
SearchBar.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
SearchBar.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
SearchBar.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
SearchBar.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
SearchBar.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
SearchBar.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
SearchBar.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
SearchBar.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
SearchBar.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
SearchBar.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
SearchBar.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
SearchBar.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
SearchBar.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
SearchBar.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
SearchBar.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
SearchBar.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
SearchBar.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
SearchBar.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
SearchBar.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
SearchBar.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
SearchBar.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
SearchBar.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
SearchBar.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
SearchBar.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
SearchBar.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
SearchBar.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
SearchBar.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
SearchBar.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
SearchBar.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
SearchBar.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
SearchBar.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
SearchBar.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
SearchBar.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
SearchBar.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
SearchBar.prototype.getClipMode = function () {
	return this.clipMode;
};
SearchBar.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
SearchBar.prototype.getFocusable = function () {
	return this.focusable;
};
SearchBar.prototype.setFocusable = function (property) {
	this.focusable = property;
};
SearchBar.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
SearchBar.prototype.setOverrideCurrentAnimation = function (property) {
	this.overrideCurrentAnimation = property;
};
SearchBar.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
SearchBar.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
SearchBar.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
SearchBar.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
SearchBar.prototype.getTransform = function () {
	return this.transform;
};
SearchBar.prototype.setTransform = function (property) {
	this.transform = property;
};
SearchBar.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
SearchBar.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
SearchBar.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
SearchBar.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
SearchBar.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
SearchBar.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
SearchBar.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
SearchBar.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
SearchBar.prototype.getZIndex = function () {
	return this.zIndex;
};
SearchBar.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
SearchBar.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
SearchBar.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
SearchBar.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
SearchBar.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
SearchBar.prototype.getBorderColor = function () {
	return this.borderColor;
};
SearchBar.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
SearchBar.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
SearchBar.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
SearchBar.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
SearchBar.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
SearchBar.prototype.getBottom = function () {
	return this.bottom;
};
SearchBar.prototype.setBottom = function (property) {
	this.bottom = property;
};
SearchBar.prototype.getCenter = function () {
	return this.center;
};
SearchBar.prototype.setCenter = function (property) {
	this.center = property;
};
SearchBar.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
SearchBar.prototype.getChildren = function () {
	return this.children;
};
SearchBar.prototype.getHeight = function () {
	return this.height;
};
SearchBar.prototype.setHeight = function (property) {
	this.height = property;
};
SearchBar.prototype.getLayout = function () {
	return this.layout;
};
SearchBar.prototype.setLayout = function (property) {
	this.layout = property;
};
SearchBar.prototype.getLeft = function () {
	return this.left;
};
SearchBar.prototype.setLeft = function (property) {
	this.left = property;
};
SearchBar.prototype.getOpacity = function () {
	return this.opacity;
};
SearchBar.prototype.setOpacity = function (property) {
	this.opacity = property;
};
SearchBar.prototype.getRect = function () {
	return this.rect;
};
SearchBar.prototype.getRight = function () {
	return this.right;
};
SearchBar.prototype.setRight = function (property) {
	this.right = property;
};
SearchBar.prototype.getSize = function () {
	return this.size;
};
SearchBar.prototype.getTintColor = function () {
	return this.tintColor;
};
SearchBar.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
SearchBar.prototype.getTop = function () {
	return this.top;
};
SearchBar.prototype.setTop = function (property) {
	this.top = property;
};
SearchBar.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
SearchBar.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
SearchBar.prototype.getVisible = function () {
	return this.visible;
};
SearchBar.prototype.setVisible = function (property) {
	this.visible = property;
};
SearchBar.prototype.getWidth = function () {
	return this.width;
};
SearchBar.prototype.setWidth = function (property) {
	this.width = property;
};
SearchBar.prototype.getAutocapitalization = function () {
	return this.autocapitalization;
};
SearchBar.prototype.setAutocapitalization = function (property) {
	this.autocapitalization = property;
};
SearchBar.prototype.getAutocorrect = function () {
	return this.autocorrect;
};
SearchBar.prototype.setAutocorrect = function (property) {
	this.autocorrect = property;
};
SearchBar.prototype.getBarColor = function () {
	return this.barColor;
};
SearchBar.prototype.setBarColor = function (property) {
	this.barColor = property;
};
SearchBar.prototype.getHintText = function () {
	return this.hintText;
};
SearchBar.prototype.setHintText = function (property) {
	this.hintText = property;
};
SearchBar.prototype.getHinttextid = function () {
	return this.hinttextid;
};
SearchBar.prototype.setHinttextid = function (property) {
	this.hinttextid = property;
};
SearchBar.prototype.getKeyboardType = function () {
	return this.keyboardType;
};
SearchBar.prototype.setKeyboardType = function (property) {
	this.keyboardType = property;
};
SearchBar.prototype.getPrompt = function () {
	return this.prompt;
};
SearchBar.prototype.setPrompt = function (property) {
	this.prompt = property;
};
SearchBar.prototype.getPromptid = function () {
	return this.promptid;
};
SearchBar.prototype.setPromptid = function (property) {
	this.promptid = property;
};
SearchBar.prototype.getShowBookmark = function () {
	return this.showBookmark;
};
SearchBar.prototype.setShowBookmark = function (property) {
	this.showBookmark = property;
};
SearchBar.prototype.getShowCancel = function () {
	return this.showCancel;
};
SearchBar.prototype.setShowCancel = function (property) {
	this.showCancel = property;
};
SearchBar.prototype.getValue = function () {
	return this.value;
};
SearchBar.prototype.setValue = function (property) {
	this.value = property;
};
module.exports = function (properties) {
	return new SearchBar(properties);
};