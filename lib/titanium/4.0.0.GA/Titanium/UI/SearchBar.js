var crypto = require('crypto');
function SearchBar(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'anchorPoint',
			'animatedCenter',
			'apiName',
			'autocapitalization',
			'autocorrect',
			'backgroundColor',
			'backgroundDisabledColor',
			'backgroundDisabledImage',
			'backgroundFocusedColor',
			'backgroundFocusedImage',
			'backgroundGradient',
			'backgroundImage',
			'backgroundLeftCap',
			'backgroundRepeat',
			'backgroundSelectedColor',
			'backgroundSelectedImage',
			'backgroundTopCap',
			'barColor',
			'borderColor',
			'borderRadius',
			'borderWidth',
			'bottom',
			'bubbleParent',
			'center',
			'children',
			'clipMode',
			'focusable',
			'height',
			'hintText',
			'hinttextid',
			'horizontalWrap',
			'keepScreenOn',
			'keyboardType',
			'layout',
			'left',
			'lifecycleContainer',
			'opacity',
			'overrideCurrentAnimation',
			'prompt',
			'promptid',
			'pullBackgroundColor',
			'rect',
			'right',
			'showBookmark',
			'showCancel',
			'size',
			'softKeyboardOnFocus',
			'tintColor',
			'top',
			'touchEnabled',
			'transform',
			'value',
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
		throw new Error('Ti.UI.SearchBar.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.SearchBar.apiName is read only property');
	}
	this.apiName = 'Ti.UI.SearchBar';
	this.autocapitalization = __SLAG__properties.autocapitalization || 0;
	this.autocorrect = __SLAG__properties.autocorrect || true;
	this.backgroundColor = __SLAG__properties.backgroundColor || '';
	this.backgroundDisabledColor = __SLAG__properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = __SLAG__properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = __SLAG__properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = __SLAG__properties.backgroundFocusedImage || '';
	this.backgroundGradient = __SLAG__properties.backgroundGradient || {};
	this.backgroundImage = __SLAG__properties.backgroundImage || '';
	this.backgroundLeftCap = __SLAG__properties.backgroundLeftCap || 0;
	this.backgroundRepeat = __SLAG__properties.backgroundRepeat || true;
	this.backgroundSelectedColor = __SLAG__properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = __SLAG__properties.backgroundSelectedImage || '';
	this.backgroundTopCap = __SLAG__properties.backgroundTopCap || 0;
	this.barColor = __SLAG__properties.barColor || '';
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
		throw new Error('Ti.UI.SearchBar.children is read only property');
	}
	this.children = [];
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.focusable = __SLAG__properties.focusable || true;
	this.height = __SLAG__properties.height || 0;
	this.hintText = __SLAG__properties.hintText || '';
	this.hinttextid = __SLAG__properties.hinttextid || '';
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
	this.keyboardType = __SLAG__properties.keyboardType || 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.opacity = __SLAG__properties.opacity || 0;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	this.prompt = __SLAG__properties.prompt || '';
	this.promptid = __SLAG__properties.promptid || '';
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
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
	this.showBookmark = __SLAG__properties.showBookmark || true;
	this.showCancel = __SLAG__properties.showCancel || true;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.SearchBar.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = __SLAG__properties.softKeyboardOnFocus || 0;
	this.tintColor = __SLAG__properties.tintColor || '';
	this.top = __SLAG__properties.top || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.transform = __SLAG__properties.transform || {};
	this.value = __SLAG__properties.value || '';
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
SearchBar.prototype.addEventListener = function () {
};
SearchBar.prototype.animate = function () {
};
SearchBar.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
SearchBar.prototype.blur = function () {
};
SearchBar.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
SearchBar.prototype.finishLayout = function () {
	throw new Error('Ti.UI.SearchBar.finishLayout was deprecated, since 3.0.0');
};
SearchBar.prototype.fireEvent = function () {
};
SearchBar.prototype.focus = function () {
};
SearchBar.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
SearchBar.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
SearchBar.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
SearchBar.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
SearchBar.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
SearchBar.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
SearchBar.prototype.getApiName = function () {
	return this.apiName;
};
SearchBar.prototype.getAutocapitalization = function () {
	return this.autocapitalization;
};
SearchBar.prototype.getAutocorrect = function () {
	return this.autocorrect;
};
SearchBar.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
SearchBar.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
SearchBar.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
SearchBar.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
SearchBar.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
SearchBar.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
SearchBar.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
SearchBar.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
SearchBar.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
SearchBar.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
SearchBar.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
SearchBar.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
SearchBar.prototype.getBarColor = function () {
	return this.barColor;
};
SearchBar.prototype.getBorderColor = function () {
	return this.borderColor;
};
SearchBar.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
SearchBar.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
SearchBar.prototype.getBottom = function () {
	return this.bottom;
};
SearchBar.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
SearchBar.prototype.getCenter = function () {
	return this.center;
};
SearchBar.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
SearchBar.prototype.getChildren = function () {
	return this.children;
};
SearchBar.prototype.getClipMode = function () {
	return this.clipMode;
};
SearchBar.prototype.getFocusable = function () {
	return this.focusable;
};
SearchBar.prototype.getHeight = function () {
	return this.height;
};
SearchBar.prototype.getHintText = function () {
	return this.hintText;
};
SearchBar.prototype.getHinttextid = function () {
	return this.hinttextid;
};
SearchBar.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
SearchBar.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
SearchBar.prototype.getKeyboardType = function () {
	return this.keyboardType;
};
SearchBar.prototype.getLayout = function () {
	return this.layout;
};
SearchBar.prototype.getLeft = function () {
	return this.left;
};
SearchBar.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
SearchBar.prototype.getOpacity = function () {
	return this.opacity;
};
SearchBar.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
SearchBar.prototype.getPrompt = function () {
	return this.prompt;
};
SearchBar.prototype.getPromptid = function () {
	return this.promptid;
};
SearchBar.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
SearchBar.prototype.getRect = function () {
	return this.rect;
};
SearchBar.prototype.getRight = function () {
	return this.right;
};
SearchBar.prototype.getShowBookmark = function () {
	return this.showBookmark;
};
SearchBar.prototype.getShowCancel = function () {
	return this.showCancel;
};
SearchBar.prototype.getSize = function () {
	return this.size;
};
SearchBar.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
SearchBar.prototype.getTintColor = function () {
	return this.tintColor;
};
SearchBar.prototype.getTop = function () {
	return this.top;
};
SearchBar.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
SearchBar.prototype.getTransform = function () {
	return this.transform;
};
SearchBar.prototype.getValue = function () {
	return this.value;
};
SearchBar.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
SearchBar.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
SearchBar.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
SearchBar.prototype.getVisible = function () {
	return this.visible;
};
SearchBar.prototype.getWidth = function () {
	return this.width;
};
SearchBar.prototype.getZIndex = function () {
	return this.zIndex;
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
SearchBar.prototype.removeEventListener = function () {
};
SearchBar.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
SearchBar.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
SearchBar.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
SearchBar.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
SearchBar.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
SearchBar.prototype.setAutocapitalization = function (property) {
	this.autocapitalization = property;
};
SearchBar.prototype.setAutocorrect = function (property) {
	this.autocorrect = property;
};
SearchBar.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
SearchBar.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
SearchBar.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
SearchBar.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
SearchBar.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
SearchBar.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
SearchBar.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
SearchBar.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
SearchBar.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
SearchBar.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
SearchBar.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
SearchBar.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
SearchBar.prototype.setBarColor = function (property) {
	this.barColor = property;
};
SearchBar.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
SearchBar.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
SearchBar.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
SearchBar.prototype.setBottom = function (property) {
	this.bottom = property;
};
SearchBar.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
SearchBar.prototype.setCenter = function (property) {
	this.center = property;
};
SearchBar.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
SearchBar.prototype.setFocusable = function (property) {
	this.focusable = property;
};
SearchBar.prototype.setHeight = function (property) {
	this.height = property;
};
SearchBar.prototype.setHintText = function (property) {
	this.hintText = property;
};
SearchBar.prototype.setHinttextid = function (property) {
	this.hinttextid = property;
};
SearchBar.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
SearchBar.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
SearchBar.prototype.setKeyboardType = function (property) {
	this.keyboardType = property;
};
SearchBar.prototype.setLayout = function (property) {
	this.layout = property;
};
SearchBar.prototype.setLeft = function (property) {
	this.left = property;
};
SearchBar.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
SearchBar.prototype.setOpacity = function (property) {
	this.opacity = property;
};
SearchBar.prototype.setPrompt = function (property) {
	this.prompt = property;
};
SearchBar.prototype.setPromptid = function (property) {
	this.promptid = property;
};
SearchBar.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
SearchBar.prototype.setRight = function (property) {
	this.right = property;
};
SearchBar.prototype.setShowBookmark = function (property) {
	this.showBookmark = property;
};
SearchBar.prototype.setShowCancel = function (property) {
	this.showCancel = property;
};
SearchBar.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
SearchBar.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
SearchBar.prototype.setTop = function (property) {
	this.top = property;
};
SearchBar.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
SearchBar.prototype.setTransform = function (property) {
	this.transform = property;
};
SearchBar.prototype.setValue = function (property) {
	this.value = property;
};
SearchBar.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
SearchBar.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
SearchBar.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
SearchBar.prototype.setVisible = function (property) {
	this.visible = property;
};
SearchBar.prototype.setWidth = function (property) {
	this.width = property;
};
SearchBar.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
SearchBar.prototype.show = function () {
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
module.exports = function (properties) {
	return new SearchBar(properties);
};