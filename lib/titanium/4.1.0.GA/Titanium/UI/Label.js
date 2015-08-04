var crypto = require('crypto');
function Label(__SLAG__properties) {
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
			'attributedString',
			'autoLink',
			'backgroundPaddingBottom',
			'backgroundPaddingLeft',
			'backgroundPaddingRight',
			'backgroundPaddingTop',
			'highlightedColor',
			'html',
			'includeFontPadding',
			'lines',
			'maxLines',
			'minimumFontSize',
			'shadowColor',
			'shadowOffset',
			'shadowRadius',
			'textid',
			'color',
			'ellipsize',
			'font',
			'text',
			'textAlign',
			'verticalAlign',
			'wordWrap',
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
		throw new Error('Ti.UI.Label.apiName is read only property');
	}
	this.apiName = 'Ti.UI.Label';
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
		throw new Error('Ti.UI.Label.animatedCenter is read only property');
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
		throw new Error('Ti.UI.Label.children is read only property');
	}
	this.children = [];
	this.height = __SLAG__properties.height || 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.Label.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.Label.size is read only property');
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
	this.attributedString = __SLAG__properties.attributedString || '';
	this.autoLink = __SLAG__properties.autoLink || 0;
	this.backgroundPaddingBottom = __SLAG__properties.backgroundPaddingBottom || 0;
	this.backgroundPaddingLeft = __SLAG__properties.backgroundPaddingLeft || 0;
	this.backgroundPaddingRight = __SLAG__properties.backgroundPaddingRight || 0;
	this.backgroundPaddingTop = __SLAG__properties.backgroundPaddingTop || 0;
	this.highlightedColor = __SLAG__properties.highlightedColor || '';
	this.html = __SLAG__properties.html || '';
	this.includeFontPadding = __SLAG__properties.includeFontPadding || true;
	this.lines = __SLAG__properties.lines || 0;
	this.maxLines = __SLAG__properties.maxLines || 0;
	this.minimumFontSize = __SLAG__properties.minimumFontSize || 0;
	this.shadowColor = __SLAG__properties.shadowColor || '';
	this.shadowOffset = __SLAG__properties.shadowOffset || {};
	this.shadowRadius = __SLAG__properties.shadowRadius || 0;
	this.textid = __SLAG__properties.textid || '';
	this.color = __SLAG__properties.color || '';
	this.ellipsize = __SLAG__properties.ellipsize || 0;
	this.font = __SLAG__properties.font || {};
	this.text = __SLAG__properties.text || '';
	this.textAlign = __SLAG__properties.textAlign || '';
	this.verticalAlign = __SLAG__properties.verticalAlign || 0;
	this.wordWrap = __SLAG__properties.wordWrap || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
Label.prototype.addEventListener = function () {
};
Label.prototype.removeEventListener = function () {
};
Label.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Label.prototype.fireEvent = function () {
};
Label.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Label.finishLayout was deprecated, since 3.0.0');
};
Label.prototype.removeAllChildren = function () {
};
Label.prototype.startLayout = function () {
	throw new Error('Ti.UI.Label.startLayout was deprecated, since 3.0.0');
};
Label.prototype.toImage = function () {
	return {};
};
Label.prototype.updateLayout = function () {
	throw new Error('Ti.UI.Label.updateLayout was deprecated, since 3.0.0');
};
Label.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Label.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
Label.prototype.animate = function () {
};
Label.prototype.hide = function () {
};
Label.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
Label.prototype.show = function () {
};
Label.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Label.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Label.prototype.getApiName = function () {
	return this.apiName;
};
Label.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Label.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Label.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
Label.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
Label.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
Label.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
Label.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
Label.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
Label.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
Label.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
Label.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
Label.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
Label.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
Label.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
Label.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
Label.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
Label.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
Label.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
Label.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
Label.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
Label.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
Label.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
Label.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
Label.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
Label.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
Label.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
Label.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
Label.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
Label.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
Label.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
Label.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
Label.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
Label.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
Label.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
Label.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
Label.prototype.getClipMode = function () {
	return this.clipMode;
};
Label.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
Label.prototype.getFocusable = function () {
	return this.focusable;
};
Label.prototype.setFocusable = function (property) {
	this.focusable = property;
};
Label.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
Label.prototype.setOverrideCurrentAnimation = function (property) {
	this.overrideCurrentAnimation = property;
};
Label.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
Label.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
Label.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
Label.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
Label.prototype.getTransform = function () {
	return this.transform;
};
Label.prototype.setTransform = function (property) {
	this.transform = property;
};
Label.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
Label.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
Label.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
Label.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
Label.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
Label.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
Label.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
Label.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
Label.prototype.getZIndex = function () {
	return this.zIndex;
};
Label.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
Label.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
Label.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
Label.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
Label.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
Label.prototype.getBorderColor = function () {
	return this.borderColor;
};
Label.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
Label.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
Label.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
Label.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
Label.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
Label.prototype.getBottom = function () {
	return this.bottom;
};
Label.prototype.setBottom = function (property) {
	this.bottom = property;
};
Label.prototype.getCenter = function () {
	return this.center;
};
Label.prototype.setCenter = function (property) {
	this.center = property;
};
Label.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
Label.prototype.getChildren = function () {
	return this.children;
};
Label.prototype.getHeight = function () {
	return this.height;
};
Label.prototype.setHeight = function (property) {
	this.height = property;
};
Label.prototype.getLayout = function () {
	return this.layout;
};
Label.prototype.setLayout = function (property) {
	this.layout = property;
};
Label.prototype.getLeft = function () {
	return this.left;
};
Label.prototype.setLeft = function (property) {
	this.left = property;
};
Label.prototype.getOpacity = function () {
	return this.opacity;
};
Label.prototype.setOpacity = function (property) {
	this.opacity = property;
};
Label.prototype.getRect = function () {
	return this.rect;
};
Label.prototype.getRight = function () {
	return this.right;
};
Label.prototype.setRight = function (property) {
	this.right = property;
};
Label.prototype.getSize = function () {
	return this.size;
};
Label.prototype.getTintColor = function () {
	return this.tintColor;
};
Label.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
Label.prototype.getTop = function () {
	return this.top;
};
Label.prototype.setTop = function (property) {
	this.top = property;
};
Label.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
Label.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
Label.prototype.getVisible = function () {
	return this.visible;
};
Label.prototype.setVisible = function (property) {
	this.visible = property;
};
Label.prototype.getWidth = function () {
	return this.width;
};
Label.prototype.setWidth = function (property) {
	this.width = property;
};
Label.prototype.getAttributedString = function () {
	return this.attributedString;
};
Label.prototype.setAttributedString = function (property) {
	this.attributedString = property;
};
Label.prototype.getAutoLink = function () {
	return this.autoLink;
};
Label.prototype.setAutoLink = function (property) {
	this.autoLink = property;
};
Label.prototype.getBackgroundPaddingBottom = function () {
	return this.backgroundPaddingBottom;
};
Label.prototype.setBackgroundPaddingBottom = function (property) {
	this.backgroundPaddingBottom = property;
};
Label.prototype.getBackgroundPaddingLeft = function () {
	return this.backgroundPaddingLeft;
};
Label.prototype.setBackgroundPaddingLeft = function (property) {
	this.backgroundPaddingLeft = property;
};
Label.prototype.getBackgroundPaddingRight = function () {
	return this.backgroundPaddingRight;
};
Label.prototype.setBackgroundPaddingRight = function (property) {
	this.backgroundPaddingRight = property;
};
Label.prototype.getBackgroundPaddingTop = function () {
	return this.backgroundPaddingTop;
};
Label.prototype.setBackgroundPaddingTop = function (property) {
	this.backgroundPaddingTop = property;
};
Label.prototype.getHighlightedColor = function () {
	return this.highlightedColor;
};
Label.prototype.setHighlightedColor = function (property) {
	this.highlightedColor = property;
};
Label.prototype.getHtml = function () {
	return this.html;
};
Label.prototype.setHtml = function (property) {
	this.html = property;
};
Label.prototype.getIncludeFontPadding = function () {
	return this.includeFontPadding;
};
Label.prototype.setIncludeFontPadding = function (property) {
	this.includeFontPadding = property;
};
Label.prototype.getLines = function () {
	return this.lines;
};
Label.prototype.setLines = function (property) {
	this.lines = property;
};
Label.prototype.getMaxLines = function () {
	return this.maxLines;
};
Label.prototype.setMaxLines = function (property) {
	this.maxLines = property;
};
Label.prototype.getMinimumFontSize = function () {
	return this.minimumFontSize;
};
Label.prototype.setMinimumFontSize = function (property) {
	this.minimumFontSize = property;
};
Label.prototype.getShadowColor = function () {
	return this.shadowColor;
};
Label.prototype.setShadowColor = function (property) {
	this.shadowColor = property;
};
Label.prototype.getShadowOffset = function () {
	return this.shadowOffset;
};
Label.prototype.setShadowOffset = function (property) {
	this.shadowOffset = property;
};
Label.prototype.getShadowRadius = function () {
	return this.shadowRadius;
};
Label.prototype.setShadowRadius = function (property) {
	this.shadowRadius = property;
};
Label.prototype.getTextid = function () {
	return this.textid;
};
Label.prototype.setTextid = function (property) {
	this.textid = property;
};
Label.prototype.getColor = function () {
	return this.color;
};
Label.prototype.setColor = function (property) {
	this.color = property;
};
Label.prototype.getEllipsize = function () {
	return this.ellipsize;
};
Label.prototype.setEllipsize = function (property) {
	this.ellipsize = property;
};
Label.prototype.getFont = function () {
	return this.font;
};
Label.prototype.setFont = function (property) {
	this.font = property;
};
Label.prototype.getText = function () {
	return this.text;
};
Label.prototype.setText = function (property) {
	this.text = property;
};
Label.prototype.getTextAlign = function () {
	return this.textAlign;
};
Label.prototype.setTextAlign = function (property) {
	this.textAlign = property;
};
Label.prototype.getVerticalAlign = function () {
	return this.verticalAlign;
};
Label.prototype.setVerticalAlign = function (property) {
	this.verticalAlign = property;
};
Label.prototype.getWordWrap = function () {
	return this.wordWrap;
};
Label.prototype.setWordWrap = function (property) {
	this.wordWrap = property;
};
module.exports = function (properties) {
	return new Label(properties);
};