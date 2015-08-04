var crypto = require('crypto');
function SearchView(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'apiName',
			'backgroundColor',
			'backgroundDisabledColor',
			'backgroundDisabledImage',
			'backgroundFocusedColor',
			'backgroundFocusedImage',
			'backgroundGradient',
			'backgroundImage',
			'backgroundRepeat',
			'backgroundSelectedColor',
			'backgroundSelectedImage',
			'borderColor',
			'borderRadius',
			'borderWidth',
			'bottom',
			'bubbleParent',
			'center',
			'children',
			'color',
			'focusable',
			'height',
			'hintText',
			'horizontalWrap',
			'iconified',
			'iconifiedByDefault',
			'keepScreenOn',
			'layout',
			'left',
			'lifecycleContainer',
			'opacity',
			'overrideCurrentAnimation',
			'rect',
			'right',
			'size',
			'softKeyboardOnFocus',
			'submitEnabled',
			'top',
			'touchEnabled',
			'transform',
			'value',
			'visible',
			'width',
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
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.Android.SearchView.apiName is read only property');
	}
	this.apiName = 'Ti.UI.Android.SearchView';
	this.backgroundColor = __SLAG__properties.backgroundColor || '';
	this.backgroundDisabledColor = __SLAG__properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = __SLAG__properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = __SLAG__properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = __SLAG__properties.backgroundFocusedImage || '';
	this.backgroundGradient = __SLAG__properties.backgroundGradient || {};
	this.backgroundImage = __SLAG__properties.backgroundImage || '';
	this.backgroundRepeat = __SLAG__properties.backgroundRepeat || true;
	this.backgroundSelectedColor = __SLAG__properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = __SLAG__properties.backgroundSelectedImage || '';
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
		throw new Error('Ti.UI.Android.SearchView.children is read only property');
	}
	this.children = [];
	this.color = __SLAG__properties.color || '';
	this.focusable = __SLAG__properties.focusable || true;
	this.height = __SLAG__properties.height || 0;
	this.hintText = __SLAG__properties.hintText || '';
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.iconified = __SLAG__properties.iconified || true;
	this.iconifiedByDefault = __SLAG__properties.iconifiedByDefault || true;
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.opacity = __SLAG__properties.opacity || 0;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.Android.SearchView.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.Android.SearchView.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = __SLAG__properties.softKeyboardOnFocus || 0;
	this.submitEnabled = __SLAG__properties.submitEnabled || true;
	this.top = __SLAG__properties.top || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.transform = __SLAG__properties.transform || {};
	this.value = __SLAG__properties.value || '';
	this.visible = __SLAG__properties.visible || true;
	this.width = __SLAG__properties.width || 0;
	this.zIndex = __SLAG__properties.zIndex || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
SearchView.prototype.addEventListener = function () {
};
SearchView.prototype.animate = function () {
};
SearchView.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
SearchView.prototype.blur = function () {
};
SearchView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
SearchView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Android.SearchView.finishLayout was deprecated, since 3.0.0');
};
SearchView.prototype.fireEvent = function () {
};
SearchView.prototype.focus = function () {
};
SearchView.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
SearchView.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
SearchView.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
SearchView.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
SearchView.prototype.getApiName = function () {
	return this.apiName;
};
SearchView.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
SearchView.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
SearchView.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
SearchView.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
SearchView.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
SearchView.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
SearchView.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
SearchView.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
SearchView.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
SearchView.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
SearchView.prototype.getBorderColor = function () {
	return this.borderColor;
};
SearchView.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
SearchView.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
SearchView.prototype.getBottom = function () {
	return this.bottom;
};
SearchView.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
SearchView.prototype.getCenter = function () {
	return this.center;
};
SearchView.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
SearchView.prototype.getChildren = function () {
	return this.children;
};
SearchView.prototype.getColor = function () {
	return this.color;
};
SearchView.prototype.getFocusable = function () {
	return this.focusable;
};
SearchView.prototype.getHeight = function () {
	return this.height;
};
SearchView.prototype.getHintText = function () {
	return this.hintText;
};
SearchView.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
SearchView.prototype.getIconified = function () {
	return this.iconified;
};
SearchView.prototype.getIconifiedByDefault = function () {
	return this.iconifiedByDefault;
};
SearchView.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
SearchView.prototype.getLayout = function () {
	return this.layout;
};
SearchView.prototype.getLeft = function () {
	return this.left;
};
SearchView.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
SearchView.prototype.getOpacity = function () {
	return this.opacity;
};
SearchView.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
SearchView.prototype.getRect = function () {
	return this.rect;
};
SearchView.prototype.getRight = function () {
	return this.right;
};
SearchView.prototype.getSize = function () {
	return this.size;
};
SearchView.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
SearchView.prototype.getSubmitEnabled = function () {
	return this.submitEnabled;
};
SearchView.prototype.getTop = function () {
	return this.top;
};
SearchView.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
SearchView.prototype.getTransform = function () {
	return this.transform;
};
SearchView.prototype.getValue = function () {
	return this.value;
};
SearchView.prototype.getVisible = function () {
	return this.visible;
};
SearchView.prototype.getWidth = function () {
	return this.width;
};
SearchView.prototype.getZIndex = function () {
	return this.zIndex;
};
SearchView.prototype.hide = function () {
};
SearchView.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
SearchView.prototype.removeAllChildren = function () {
};
SearchView.prototype.removeEventListener = function () {
};
SearchView.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
SearchView.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
SearchView.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
SearchView.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
SearchView.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
SearchView.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
SearchView.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
SearchView.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
SearchView.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
SearchView.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
SearchView.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
SearchView.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
SearchView.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
SearchView.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
SearchView.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
SearchView.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
SearchView.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
SearchView.prototype.setBottom = function (property) {
	this.bottom = property;
};
SearchView.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
SearchView.prototype.setCenter = function (property) {
	this.center = property;
};
SearchView.prototype.setColor = function (property) {
	this.color = property;
};
SearchView.prototype.setFocusable = function (property) {
	this.focusable = property;
};
SearchView.prototype.setHeight = function (property) {
	this.height = property;
};
SearchView.prototype.setHintText = function (property) {
	this.hintText = property;
};
SearchView.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
SearchView.prototype.setIconified = function (property) {
	this.iconified = property;
};
SearchView.prototype.setIconifiedByDefault = function (property) {
	this.iconifiedByDefault = property;
};
SearchView.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
SearchView.prototype.setLayout = function (property) {
	this.layout = property;
};
SearchView.prototype.setLeft = function (property) {
	this.left = property;
};
SearchView.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
SearchView.prototype.setOpacity = function (property) {
	this.opacity = property;
};
SearchView.prototype.setRight = function (property) {
	this.right = property;
};
SearchView.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
SearchView.prototype.setSubmitEnabled = function (property) {
	this.submitEnabled = property;
};
SearchView.prototype.setTop = function (property) {
	this.top = property;
};
SearchView.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
SearchView.prototype.setTransform = function (property) {
	this.transform = property;
};
SearchView.prototype.setValue = function (property) {
	this.value = property;
};
SearchView.prototype.setVisible = function (property) {
	this.visible = property;
};
SearchView.prototype.setWidth = function (property) {
	this.width = property;
};
SearchView.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
SearchView.prototype.show = function () {
};
SearchView.prototype.startLayout = function () {
	throw new Error('Ti.UI.Android.SearchView.startLayout was deprecated, since 3.0.0');
};
SearchView.prototype.toImage = function () {
	return {};
};
SearchView.prototype.updateLayout = function () {
	throw new Error('Ti.UI.Android.SearchView.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new SearchView(properties);
};