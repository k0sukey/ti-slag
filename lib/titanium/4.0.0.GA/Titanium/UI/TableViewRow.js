var crypto = require('crypto');
function TableViewRow(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'anchorPoint',
			'animatedCenter',
			'apiName',
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
			'borderColor',
			'borderRadius',
			'borderWidth',
			'bottom',
			'bubbleParent',
			'center',
			'children',
			'className',
			'clipMode',
			'color',
			'editable',
			'focusable',
			'font',
			'hasCheck',
			'hasChild',
			'hasDetail',
			'height',
			'horizontalWrap',
			'indentionLevel',
			'keepScreenOn',
			'layout',
			'left',
			'leftImage',
			'lifecycleContainer',
			'moveable',
			'opacity',
			'overrideCurrentAnimation',
			'pullBackgroundColor',
			'rect',
			'right',
			'rightImage',
			'selectedBackgroundColor',
			'selectedBackgroundImage',
			'selectedColor',
			'selectionStyle',
			'size',
			'softKeyboardOnFocus',
			'tintColor',
			'title',
			'top',
			'touchEnabled',
			'transform',
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
		throw new Error('Ti.UI.TableViewRow.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.TableViewRow.apiName is read only property');
	}
	this.apiName = 'Ti.UI.TableViewRow';
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
		throw new Error('Ti.UI.TableViewRow.children is read only property');
	}
	this.children = [];
	this.className = __SLAG__properties.className || '';
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.color = __SLAG__properties.color || '';
	this.editable = __SLAG__properties.editable || true;
	this.focusable = __SLAG__properties.focusable || true;
	this.font = __SLAG__properties.font || {};
	this.hasCheck = __SLAG__properties.hasCheck || true;
	this.hasChild = __SLAG__properties.hasChild || true;
	this.hasDetail = __SLAG__properties.hasDetail || true;
	this.height = __SLAG__properties.height || 0;
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.indentionLevel = __SLAG__properties.indentionLevel || 0;
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.leftImage = __SLAG__properties.leftImage || '';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.moveable = __SLAG__properties.moveable || true;
	this.opacity = __SLAG__properties.opacity || 0;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
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
	this.rightImage = __SLAG__properties.rightImage || '';
	this.selectedBackgroundColor = __SLAG__properties.selectedBackgroundColor || '';
	this.selectedBackgroundImage = __SLAG__properties.selectedBackgroundImage || '';
	this.selectedColor = __SLAG__properties.selectedColor || '';
	this.selectionStyle = __SLAG__properties.selectionStyle || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.TableViewRow.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = __SLAG__properties.softKeyboardOnFocus || 0;
	this.tintColor = __SLAG__properties.tintColor || '';
	this.title = __SLAG__properties.title || '';
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
	this.zIndex = __SLAG__properties.zIndex || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
TableViewRow.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
TableViewRow.prototype.addEventListener = function () {
};
TableViewRow.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
TableViewRow.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
TableViewRow.prototype.finishLayout = function () {
	throw new Error('Ti.UI.TableViewRow.finishLayout was deprecated, since 3.0.0');
};
TableViewRow.prototype.fireEvent = function () {
};
TableViewRow.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
TableViewRow.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
TableViewRow.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
TableViewRow.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
TableViewRow.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
TableViewRow.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
TableViewRow.prototype.getApiName = function () {
	return this.apiName;
};
TableViewRow.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
TableViewRow.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
TableViewRow.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
TableViewRow.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
TableViewRow.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
TableViewRow.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
TableViewRow.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
TableViewRow.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
TableViewRow.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
TableViewRow.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
TableViewRow.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
TableViewRow.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
TableViewRow.prototype.getBorderColor = function () {
	return this.borderColor;
};
TableViewRow.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
TableViewRow.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
TableViewRow.prototype.getBottom = function () {
	return this.bottom;
};
TableViewRow.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
TableViewRow.prototype.getCenter = function () {
	return this.center;
};
TableViewRow.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
TableViewRow.prototype.getChildren = function () {
	return this.children;
};
TableViewRow.prototype.getClassName = function () {
	return this.className;
};
TableViewRow.prototype.getClipMode = function () {
	return this.clipMode;
};
TableViewRow.prototype.getColor = function () {
	return this.color;
};
TableViewRow.prototype.getEditable = function () {
	return this.editable;
};
TableViewRow.prototype.getFocusable = function () {
	return this.focusable;
};
TableViewRow.prototype.getFont = function () {
	return this.font;
};
TableViewRow.prototype.getHasCheck = function () {
	return this.hasCheck;
};
TableViewRow.prototype.getHasChild = function () {
	return this.hasChild;
};
TableViewRow.prototype.getHasDetail = function () {
	return this.hasDetail;
};
TableViewRow.prototype.getHeight = function () {
	return this.height;
};
TableViewRow.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
TableViewRow.prototype.getIndentionLevel = function () {
	return this.indentionLevel;
};
TableViewRow.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
TableViewRow.prototype.getLayout = function () {
	return this.layout;
};
TableViewRow.prototype.getLeft = function () {
	return this.left;
};
TableViewRow.prototype.getLeftImage = function () {
	return this.leftImage;
};
TableViewRow.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
TableViewRow.prototype.getMoveable = function () {
	return this.moveable;
};
TableViewRow.prototype.getOpacity = function () {
	return this.opacity;
};
TableViewRow.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
TableViewRow.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
TableViewRow.prototype.getRect = function () {
	return this.rect;
};
TableViewRow.prototype.getRight = function () {
	return this.right;
};
TableViewRow.prototype.getRightImage = function () {
	return this.rightImage;
};
TableViewRow.prototype.getSelectedBackgroundColor = function () {
	return this.selectedBackgroundColor;
};
TableViewRow.prototype.getSelectedBackgroundImage = function () {
	return this.selectedBackgroundImage;
};
TableViewRow.prototype.getSelectedColor = function () {
	return this.selectedColor;
};
TableViewRow.prototype.getSelectionStyle = function () {
	return this.selectionStyle;
};
TableViewRow.prototype.getSize = function () {
	return this.size;
};
TableViewRow.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
TableViewRow.prototype.getTintColor = function () {
	return this.tintColor;
};
TableViewRow.prototype.getTitle = function () {
	return this.title;
};
TableViewRow.prototype.getTop = function () {
	return this.top;
};
TableViewRow.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
TableViewRow.prototype.getTransform = function () {
	return this.transform;
};
TableViewRow.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
TableViewRow.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
TableViewRow.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
TableViewRow.prototype.getVisible = function () {
	return this.visible;
};
TableViewRow.prototype.getWidth = function () {
	return this.width;
};
TableViewRow.prototype.getZIndex = function () {
	return this.zIndex;
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
TableViewRow.prototype.removeAllChildren = function () {
};
TableViewRow.prototype.removeEventListener = function () {
};
TableViewRow.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
TableViewRow.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
TableViewRow.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
TableViewRow.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
TableViewRow.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
TableViewRow.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
TableViewRow.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
TableViewRow.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
TableViewRow.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
TableViewRow.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
TableViewRow.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
TableViewRow.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
TableViewRow.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
TableViewRow.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
TableViewRow.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
TableViewRow.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
TableViewRow.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
TableViewRow.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
TableViewRow.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
TableViewRow.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
TableViewRow.prototype.setBottom = function (property) {
	this.bottom = property;
};
TableViewRow.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
TableViewRow.prototype.setCenter = function (property) {
	this.center = property;
};
TableViewRow.prototype.setClassName = function (property) {
	this.className = property;
};
TableViewRow.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
TableViewRow.prototype.setColor = function (property) {
	this.color = property;
};
TableViewRow.prototype.setEditable = function (property) {
	this.editable = property;
};
TableViewRow.prototype.setFocusable = function (property) {
	this.focusable = property;
};
TableViewRow.prototype.setFont = function (property) {
	this.font = property;
};
TableViewRow.prototype.setHasCheck = function (property) {
	this.hasCheck = property;
};
TableViewRow.prototype.setHasChild = function (property) {
	this.hasChild = property;
};
TableViewRow.prototype.setHasDetail = function (property) {
	this.hasDetail = property;
};
TableViewRow.prototype.setHeight = function (property) {
	this.height = property;
};
TableViewRow.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
TableViewRow.prototype.setIndentionLevel = function (property) {
	this.indentionLevel = property;
};
TableViewRow.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
TableViewRow.prototype.setLayout = function (property) {
	this.layout = property;
};
TableViewRow.prototype.setLeft = function (property) {
	this.left = property;
};
TableViewRow.prototype.setLeftImage = function (property) {
	this.leftImage = property;
};
TableViewRow.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
TableViewRow.prototype.setMoveable = function (property) {
	this.moveable = property;
};
TableViewRow.prototype.setOpacity = function (property) {
	this.opacity = property;
};
TableViewRow.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
TableViewRow.prototype.setRight = function (property) {
	this.right = property;
};
TableViewRow.prototype.setRightImage = function (property) {
	this.rightImage = property;
};
TableViewRow.prototype.setSelectedBackgroundColor = function (property) {
	this.selectedBackgroundColor = property;
};
TableViewRow.prototype.setSelectedBackgroundImage = function (property) {
	this.selectedBackgroundImage = property;
};
TableViewRow.prototype.setSelectedColor = function (property) {
	this.selectedColor = property;
};
TableViewRow.prototype.setSelectionStyle = function (property) {
	this.selectionStyle = property;
};
TableViewRow.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
TableViewRow.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
TableViewRow.prototype.setTitle = function (property) {
	this.title = property;
};
TableViewRow.prototype.setTop = function (property) {
	this.top = property;
};
TableViewRow.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
TableViewRow.prototype.setTransform = function (property) {
	this.transform = property;
};
TableViewRow.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
TableViewRow.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
TableViewRow.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
TableViewRow.prototype.setVisible = function (property) {
	this.visible = property;
};
TableViewRow.prototype.setWidth = function (property) {
	this.width = property;
};
TableViewRow.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
TableViewRow.prototype.show = function () {
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
module.exports = function (properties) {
	return new TableViewRow(properties);
};