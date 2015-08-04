var crypto = require('crypto');
function SearchView(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'backgroundDisabledColor',
			'backgroundDisabledImage',
			'backgroundFocusedColor',
			'backgroundFocusedImage',
			'backgroundGradient',
			'backgroundImage',
			'backgroundRepeat',
			'backgroundSelectedColor',
			'backgroundSelectedImage',
			'focusable',
			'overrideCurrentAnimation',
			'softKeyboardOnFocus',
			'transform',
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
			'top',
			'touchEnabled',
			'visible',
			'width',
			'color',
			'hintText',
			'value',
			'iconified',
			'iconifiedByDefault',
			'submitEnabled',
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
		throw new Error('Ti.UI.Android.SearchView.apiName is read only property');
	}
	this.apiName = 'Ti.UI.Android.SearchView';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.accessibilityHidden = __SLAG__properties.accessibilityHidden || true;
	this.accessibilityHint = __SLAG__properties.accessibilityHint || '';
	this.accessibilityLabel = __SLAG__properties.accessibilityLabel || '';
	this.accessibilityValue = __SLAG__properties.accessibilityValue || '';
	this.backgroundDisabledColor = __SLAG__properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = __SLAG__properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = __SLAG__properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = __SLAG__properties.backgroundFocusedImage || '';
	this.backgroundGradient = __SLAG__properties.backgroundGradient || {};
	this.backgroundImage = __SLAG__properties.backgroundImage || '';
	this.backgroundRepeat = __SLAG__properties.backgroundRepeat || true;
	this.backgroundSelectedColor = __SLAG__properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = __SLAG__properties.backgroundSelectedImage || '';
	this.focusable = __SLAG__properties.focusable || true;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	this.softKeyboardOnFocus = __SLAG__properties.softKeyboardOnFocus || 0;
	this.transform = __SLAG__properties.transform || {};
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
		throw new Error('Ti.UI.Android.SearchView.children is read only property');
	}
	this.children = [];
	this.height = __SLAG__properties.height || 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
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
	this.top = __SLAG__properties.top || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.visible = __SLAG__properties.visible || true;
	this.width = __SLAG__properties.width || 0;
	this.color = __SLAG__properties.color || '';
	this.hintText = __SLAG__properties.hintText || '';
	this.value = __SLAG__properties.value || '';
	this.iconified = __SLAG__properties.iconified || true;
	this.iconifiedByDefault = __SLAG__properties.iconifiedByDefault || true;
	this.submitEnabled = __SLAG__properties.submitEnabled || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
SearchView.prototype.addEventListener = function () {
};
SearchView.prototype.removeEventListener = function () {
};
SearchView.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
SearchView.prototype.fireEvent = function () {
};
SearchView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Android.SearchView.finishLayout was deprecated, since 3.0.0');
};
SearchView.prototype.removeAllChildren = function () {
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
SearchView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
SearchView.prototype.animate = function () {
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
SearchView.prototype.show = function () {
};
SearchView.prototype.blur = function () {
};
SearchView.prototype.focus = function () {
};
SearchView.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
SearchView.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
SearchView.prototype.getApiName = function () {
	return this.apiName;
};
SearchView.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
SearchView.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
SearchView.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
SearchView.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
SearchView.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
SearchView.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
SearchView.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
SearchView.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
SearchView.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
SearchView.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
SearchView.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
SearchView.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
SearchView.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
SearchView.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
SearchView.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
SearchView.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
SearchView.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
SearchView.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
SearchView.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
SearchView.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
SearchView.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
SearchView.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
SearchView.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
SearchView.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
SearchView.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
SearchView.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
SearchView.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
SearchView.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
SearchView.prototype.getFocusable = function () {
	return this.focusable;
};
SearchView.prototype.setFocusable = function (property) {
	this.focusable = property;
};
SearchView.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
SearchView.prototype.setOverrideCurrentAnimation = function (property) {
	this.overrideCurrentAnimation = property;
};
SearchView.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
SearchView.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
SearchView.prototype.getTransform = function () {
	return this.transform;
};
SearchView.prototype.setTransform = function (property) {
	this.transform = property;
};
SearchView.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
SearchView.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
SearchView.prototype.getZIndex = function () {
	return this.zIndex;
};
SearchView.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
SearchView.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
SearchView.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
SearchView.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
SearchView.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
SearchView.prototype.getBorderColor = function () {
	return this.borderColor;
};
SearchView.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
SearchView.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
SearchView.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
SearchView.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
SearchView.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
SearchView.prototype.getBottom = function () {
	return this.bottom;
};
SearchView.prototype.setBottom = function (property) {
	this.bottom = property;
};
SearchView.prototype.getCenter = function () {
	return this.center;
};
SearchView.prototype.setCenter = function (property) {
	this.center = property;
};
SearchView.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
SearchView.prototype.getChildren = function () {
	return this.children;
};
SearchView.prototype.getHeight = function () {
	return this.height;
};
SearchView.prototype.setHeight = function (property) {
	this.height = property;
};
SearchView.prototype.getLayout = function () {
	return this.layout;
};
SearchView.prototype.setLayout = function (property) {
	this.layout = property;
};
SearchView.prototype.getLeft = function () {
	return this.left;
};
SearchView.prototype.setLeft = function (property) {
	this.left = property;
};
SearchView.prototype.getOpacity = function () {
	return this.opacity;
};
SearchView.prototype.setOpacity = function (property) {
	this.opacity = property;
};
SearchView.prototype.getRect = function () {
	return this.rect;
};
SearchView.prototype.getRight = function () {
	return this.right;
};
SearchView.prototype.setRight = function (property) {
	this.right = property;
};
SearchView.prototype.getSize = function () {
	return this.size;
};
SearchView.prototype.getTop = function () {
	return this.top;
};
SearchView.prototype.setTop = function (property) {
	this.top = property;
};
SearchView.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
SearchView.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
SearchView.prototype.getVisible = function () {
	return this.visible;
};
SearchView.prototype.setVisible = function (property) {
	this.visible = property;
};
SearchView.prototype.getWidth = function () {
	return this.width;
};
SearchView.prototype.setWidth = function (property) {
	this.width = property;
};
SearchView.prototype.getColor = function () {
	return this.color;
};
SearchView.prototype.setColor = function (property) {
	this.color = property;
};
SearchView.prototype.getHintText = function () {
	return this.hintText;
};
SearchView.prototype.setHintText = function (property) {
	this.hintText = property;
};
SearchView.prototype.getValue = function () {
	return this.value;
};
SearchView.prototype.setValue = function (property) {
	this.value = property;
};
SearchView.prototype.getIconified = function () {
	return this.iconified;
};
SearchView.prototype.setIconified = function (property) {
	this.iconified = property;
};
SearchView.prototype.getIconifiedByDefault = function () {
	return this.iconifiedByDefault;
};
SearchView.prototype.setIconifiedByDefault = function (property) {
	this.iconifiedByDefault = property;
};
SearchView.prototype.getSubmitEnabled = function () {
	return this.submitEnabled;
};
SearchView.prototype.setSubmitEnabled = function (property) {
	this.submitEnabled = property;
};
module.exports = function (properties) {
	return new SearchView(properties);
};