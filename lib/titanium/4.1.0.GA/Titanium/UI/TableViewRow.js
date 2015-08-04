var crypto = require('crypto');
function TableViewRow(__SLAG__properties) {
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
			'className',
			'editable',
			'hasDetail',
			'indentionLevel',
			'leftImage',
			'moveable',
			'rightImage',
			'selectedBackgroundColor',
			'selectedBackgroundImage',
			'selectedColor',
			'selectionStyle',
			'color',
			'font',
			'hasCheck',
			'hasChild',
			'title',
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
		throw new Error('Ti.UI.TableViewRow.apiName is read only property');
	}
	this.apiName = 'Ti.UI.TableViewRow';
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
		throw new Error('Ti.UI.TableViewRow.animatedCenter is read only property');
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
		throw new Error('Ti.UI.TableViewRow.children is read only property');
	}
	this.children = [];
	this.height = __SLAG__properties.height || 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.TableViewRow.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.TableViewRow.size is read only property');
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
	this.className = __SLAG__properties.className || '';
	this.editable = __SLAG__properties.editable || true;
	this.hasDetail = __SLAG__properties.hasDetail || true;
	this.indentionLevel = __SLAG__properties.indentionLevel || 0;
	this.leftImage = __SLAG__properties.leftImage || '';
	this.moveable = __SLAG__properties.moveable || true;
	this.rightImage = __SLAG__properties.rightImage || '';
	this.selectedBackgroundColor = __SLAG__properties.selectedBackgroundColor || '';
	this.selectedBackgroundImage = __SLAG__properties.selectedBackgroundImage || '';
	this.selectedColor = __SLAG__properties.selectedColor || '';
	this.selectionStyle = __SLAG__properties.selectionStyle || 0;
	this.color = __SLAG__properties.color || '';
	this.font = __SLAG__properties.font || {};
	this.hasCheck = __SLAG__properties.hasCheck || true;
	this.hasChild = __SLAG__properties.hasChild || true;
	this.title = __SLAG__properties.title || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
TableViewRow.prototype.addEventListener = function () {
};
TableViewRow.prototype.removeEventListener = function () {
};
TableViewRow.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
TableViewRow.prototype.fireEvent = function () {
};
TableViewRow.prototype.finishLayout = function () {
	throw new Error('Ti.UI.TableViewRow.finishLayout was deprecated, since 3.0.0');
};
TableViewRow.prototype.removeAllChildren = function () {
};
TableViewRow.prototype.startLayout = function () {
	throw new Error('Ti.UI.TableViewRow.startLayout was deprecated, since 3.0.0');
};
TableViewRow.prototype.toImage = function () {
	return {};
};
TableViewRow.prototype.updateLayout = function () {
	throw new Error('Ti.UI.TableViewRow.updateLayout was deprecated, since 3.0.0');
};
TableViewRow.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
TableViewRow.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
TableViewRow.prototype.hide = function () {
};
TableViewRow.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
TableViewRow.prototype.show = function () {
};
TableViewRow.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
TableViewRow.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
TableViewRow.prototype.getApiName = function () {
	return this.apiName;
};
TableViewRow.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
TableViewRow.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
TableViewRow.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
TableViewRow.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
TableViewRow.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
TableViewRow.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
TableViewRow.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
TableViewRow.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
TableViewRow.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
TableViewRow.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
TableViewRow.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
TableViewRow.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
TableViewRow.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
TableViewRow.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
TableViewRow.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
TableViewRow.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
TableViewRow.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
TableViewRow.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
TableViewRow.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
TableViewRow.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
TableViewRow.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
TableViewRow.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
TableViewRow.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
TableViewRow.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
TableViewRow.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
TableViewRow.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
TableViewRow.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
TableViewRow.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
TableViewRow.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
TableViewRow.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
TableViewRow.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
TableViewRow.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
TableViewRow.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
TableViewRow.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
TableViewRow.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
TableViewRow.prototype.getClipMode = function () {
	return this.clipMode;
};
TableViewRow.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
TableViewRow.prototype.getFocusable = function () {
	return this.focusable;
};
TableViewRow.prototype.setFocusable = function (property) {
	this.focusable = property;
};
TableViewRow.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
TableViewRow.prototype.setOverrideCurrentAnimation = function (property) {
	this.overrideCurrentAnimation = property;
};
TableViewRow.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
TableViewRow.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
TableViewRow.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
TableViewRow.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
TableViewRow.prototype.getTransform = function () {
	return this.transform;
};
TableViewRow.prototype.setTransform = function (property) {
	this.transform = property;
};
TableViewRow.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
TableViewRow.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
TableViewRow.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
TableViewRow.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
TableViewRow.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
TableViewRow.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
TableViewRow.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
TableViewRow.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
TableViewRow.prototype.getZIndex = function () {
	return this.zIndex;
};
TableViewRow.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
TableViewRow.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
TableViewRow.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
TableViewRow.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
TableViewRow.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
TableViewRow.prototype.getBorderColor = function () {
	return this.borderColor;
};
TableViewRow.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
TableViewRow.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
TableViewRow.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
TableViewRow.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
TableViewRow.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
TableViewRow.prototype.getBottom = function () {
	return this.bottom;
};
TableViewRow.prototype.setBottom = function (property) {
	this.bottom = property;
};
TableViewRow.prototype.getCenter = function () {
	return this.center;
};
TableViewRow.prototype.setCenter = function (property) {
	this.center = property;
};
TableViewRow.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
TableViewRow.prototype.getChildren = function () {
	return this.children;
};
TableViewRow.prototype.getHeight = function () {
	return this.height;
};
TableViewRow.prototype.setHeight = function (property) {
	this.height = property;
};
TableViewRow.prototype.getLayout = function () {
	return this.layout;
};
TableViewRow.prototype.setLayout = function (property) {
	this.layout = property;
};
TableViewRow.prototype.getLeft = function () {
	return this.left;
};
TableViewRow.prototype.setLeft = function (property) {
	this.left = property;
};
TableViewRow.prototype.getOpacity = function () {
	return this.opacity;
};
TableViewRow.prototype.setOpacity = function (property) {
	this.opacity = property;
};
TableViewRow.prototype.getRect = function () {
	return this.rect;
};
TableViewRow.prototype.getRight = function () {
	return this.right;
};
TableViewRow.prototype.setRight = function (property) {
	this.right = property;
};
TableViewRow.prototype.getSize = function () {
	return this.size;
};
TableViewRow.prototype.getTintColor = function () {
	return this.tintColor;
};
TableViewRow.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
TableViewRow.prototype.getTop = function () {
	return this.top;
};
TableViewRow.prototype.setTop = function (property) {
	this.top = property;
};
TableViewRow.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
TableViewRow.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
TableViewRow.prototype.getVisible = function () {
	return this.visible;
};
TableViewRow.prototype.setVisible = function (property) {
	this.visible = property;
};
TableViewRow.prototype.getWidth = function () {
	return this.width;
};
TableViewRow.prototype.setWidth = function (property) {
	this.width = property;
};
TableViewRow.prototype.getClassName = function () {
	return this.className;
};
TableViewRow.prototype.setClassName = function (property) {
	this.className = property;
};
TableViewRow.prototype.getEditable = function () {
	return this.editable;
};
TableViewRow.prototype.setEditable = function (property) {
	this.editable = property;
};
TableViewRow.prototype.getHasDetail = function () {
	return this.hasDetail;
};
TableViewRow.prototype.setHasDetail = function (property) {
	this.hasDetail = property;
};
TableViewRow.prototype.getIndentionLevel = function () {
	return this.indentionLevel;
};
TableViewRow.prototype.setIndentionLevel = function (property) {
	this.indentionLevel = property;
};
TableViewRow.prototype.getLeftImage = function () {
	return this.leftImage;
};
TableViewRow.prototype.setLeftImage = function (property) {
	this.leftImage = property;
};
TableViewRow.prototype.getMoveable = function () {
	return this.moveable;
};
TableViewRow.prototype.setMoveable = function (property) {
	this.moveable = property;
};
TableViewRow.prototype.getRightImage = function () {
	return this.rightImage;
};
TableViewRow.prototype.setRightImage = function (property) {
	this.rightImage = property;
};
TableViewRow.prototype.getSelectedBackgroundColor = function () {
	return this.selectedBackgroundColor;
};
TableViewRow.prototype.setSelectedBackgroundColor = function (property) {
	this.selectedBackgroundColor = property;
};
TableViewRow.prototype.getSelectedBackgroundImage = function () {
	return this.selectedBackgroundImage;
};
TableViewRow.prototype.setSelectedBackgroundImage = function (property) {
	this.selectedBackgroundImage = property;
};
TableViewRow.prototype.getSelectedColor = function () {
	return this.selectedColor;
};
TableViewRow.prototype.setSelectedColor = function (property) {
	this.selectedColor = property;
};
TableViewRow.prototype.getSelectionStyle = function () {
	return this.selectionStyle;
};
TableViewRow.prototype.setSelectionStyle = function (property) {
	this.selectionStyle = property;
};
TableViewRow.prototype.getColor = function () {
	return this.color;
};
TableViewRow.prototype.setColor = function (property) {
	this.color = property;
};
TableViewRow.prototype.getFont = function () {
	return this.font;
};
TableViewRow.prototype.setFont = function (property) {
	this.font = property;
};
TableViewRow.prototype.getHasCheck = function () {
	return this.hasCheck;
};
TableViewRow.prototype.setHasCheck = function (property) {
	this.hasCheck = property;
};
TableViewRow.prototype.getHasChild = function () {
	return this.hasChild;
};
TableViewRow.prototype.setHasChild = function (property) {
	this.hasChild = property;
};
TableViewRow.prototype.getTitle = function () {
	return this.title;
};
TableViewRow.prototype.setTitle = function (property) {
	this.title = property;
};
module.exports = function (properties) {
	return new TableViewRow(properties);
};