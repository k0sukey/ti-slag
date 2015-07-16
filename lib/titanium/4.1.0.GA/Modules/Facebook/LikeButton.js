function LikeButton(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Facebook.LikeButton';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.accessibilityHidden = properties.accessibilityHidden || true;
	this.accessibilityHint = properties.accessibilityHint || '';
	this.accessibilityLabel = properties.accessibilityLabel || '';
	this.accessibilityValue = properties.accessibilityValue || '';
	this.anchorPoint = properties.anchorPoint || {
		x: 0,
		y: 0
	};
	this.animatedCenter = properties.animatedCenter || {
		x: 0,
		y: 0
	};
	this.backgroundDisabledColor = properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = properties.backgroundFocusedImage || '';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundRepeat = properties.backgroundRepeat || true;
	this.backgroundLeftCap = properties.backgroundLeftCap || 0;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = properties.backgroundSelectedImage || '';
	this.backgroundTopCap = properties.backgroundTopCap || 0;
	this.clipMode = properties.clipMode || 0;
	this.focusable = properties.focusable || true;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.transform = properties.transform || {};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.horizontalWrap = properties.horizontalWrap || true;
	this.zIndex = properties.zIndex || 0;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.backgroundColor = properties.backgroundColor || '';
	this.borderColor = properties.borderColor || '';
	this.borderRadius = properties.borderRadius || 0;
	this.borderWidth = properties.borderWidth || 0;
	this.bottom = properties.bottom || 0;
	this.center = properties.center || {
		x: 0,
		y: 0
	};
	this.children = properties.children || [];
	this.height = properties.height || 0;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.opacity = properties.opacity || 0;
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = properties.right || 0;
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.tintColor = properties.tintColor || '';
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.auxiliaryViewPosition = properties.auxiliaryViewPosition || '';
	this.foregroundColor = properties.foregroundColor || '';
	this.horizontalAlign = properties.horizontalAlign || '';
	this.likeViewButton = properties.likeViewButton || '';
	this.objectId = properties.objectId || '';
	this.objectType = properties.objectType || '';
	this.soundEnabled = properties.soundEnabled || true;
	return this;
}
LikeButton.prototype.addEventListener = function () {
};
LikeButton.prototype.removeEventListener = function () {
};
LikeButton.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
LikeButton.prototype.fireEvent = function () {
};
LikeButton.prototype.finishLayout = function () {
	throw new Error('Modules.Facebook.LikeButton.finishLayout was deprecated, since 3.0.0');
};
LikeButton.prototype.removeAllChildren = function () {
};
LikeButton.prototype.startLayout = function () {
	throw new Error('Modules.Facebook.LikeButton.startLayout was deprecated, since 3.0.0');
};
LikeButton.prototype.toImage = function () {
	return {};
};
LikeButton.prototype.updateLayout = function () {
	throw new Error('Modules.Facebook.LikeButton.updateLayout was deprecated, since 3.0.0');
};
LikeButton.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
LikeButton.prototype.add = function () {
};
LikeButton.prototype.animate = function () {
};
LikeButton.prototype.hide = function () {
};
LikeButton.prototype.remove = function () {
};
LikeButton.prototype.show = function () {
};
LikeButton.prototype.getBubbleParent = function () {
	return true;
};
LikeButton.prototype.setBubbleParent = function () {
};
LikeButton.prototype.getApiName = function () {
	return '';
};
LikeButton.prototype.getLifecycleContainer = function () {
	return {};
};
LikeButton.prototype.setLifecycleContainer = function () {
};
LikeButton.prototype.getAccessibilityHidden = function () {
	return true;
};
LikeButton.prototype.setAccessibilityHidden = function () {
};
LikeButton.prototype.getAccessibilityHint = function () {
	return '';
};
LikeButton.prototype.setAccessibilityHint = function () {
};
LikeButton.prototype.getAccessibilityLabel = function () {
	return '';
};
LikeButton.prototype.setAccessibilityLabel = function () {
};
LikeButton.prototype.getAccessibilityValue = function () {
	return '';
};
LikeButton.prototype.setAccessibilityValue = function () {
};
LikeButton.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
LikeButton.prototype.setAnchorPoint = function () {
};
LikeButton.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
LikeButton.prototype.getBackgroundDisabledColor = function () {
	return '';
};
LikeButton.prototype.setBackgroundDisabledColor = function () {
};
LikeButton.prototype.getBackgroundDisabledImage = function () {
	return '';
};
LikeButton.prototype.setBackgroundDisabledImage = function () {
};
LikeButton.prototype.getBackgroundFocusedColor = function () {
	return '';
};
LikeButton.prototype.setBackgroundFocusedColor = function () {
};
LikeButton.prototype.getBackgroundFocusedImage = function () {
	return '';
};
LikeButton.prototype.setBackgroundFocusedImage = function () {
};
LikeButton.prototype.getBackgroundGradient = function () {
	return {};
};
LikeButton.prototype.setBackgroundGradient = function () {
};
LikeButton.prototype.getBackgroundImage = function () {
	return '';
};
LikeButton.prototype.setBackgroundImage = function () {
};
LikeButton.prototype.getBackgroundRepeat = function () {
	return true;
};
LikeButton.prototype.setBackgroundRepeat = function () {
};
LikeButton.prototype.getBackgroundLeftCap = function () {
	return 0;
};
LikeButton.prototype.setBackgroundLeftCap = function () {
};
LikeButton.prototype.getBackgroundSelectedColor = function () {
	return '';
};
LikeButton.prototype.setBackgroundSelectedColor = function () {
};
LikeButton.prototype.getBackgroundSelectedImage = function () {
	return '';
};
LikeButton.prototype.setBackgroundSelectedImage = function () {
};
LikeButton.prototype.getBackgroundTopCap = function () {
	return 0;
};
LikeButton.prototype.setBackgroundTopCap = function () {
};
LikeButton.prototype.getClipMode = function () {
	return 0;
};
LikeButton.prototype.setClipMode = function () {
};
LikeButton.prototype.getFocusable = function () {
	return true;
};
LikeButton.prototype.setFocusable = function () {
};
LikeButton.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
LikeButton.prototype.setOverrideCurrentAnimation = function () {
};
LikeButton.prototype.getPullBackgroundColor = function () {
	return '';
};
LikeButton.prototype.setPullBackgroundColor = function () {
};
LikeButton.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
LikeButton.prototype.setSoftKeyboardOnFocus = function () {
};
LikeButton.prototype.getTransform = function () {
	return {};
};
LikeButton.prototype.setTransform = function () {
};
LikeButton.prototype.getViewShadowRadius = function () {
	return 0;
};
LikeButton.prototype.setViewShadowRadius = function () {
};
LikeButton.prototype.getViewShadowColor = function () {
	return '';
};
LikeButton.prototype.setViewShadowColor = function () {
};
LikeButton.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
LikeButton.prototype.setViewShadowOffset = function () {
};
LikeButton.prototype.getHorizontalWrap = function () {
	return true;
};
LikeButton.prototype.setHorizontalWrap = function () {
};
LikeButton.prototype.getZIndex = function () {
	return 0;
};
LikeButton.prototype.setZIndex = function () {
};
LikeButton.prototype.getKeepScreenOn = function () {
	return true;
};
LikeButton.prototype.setKeepScreenOn = function () {
};
LikeButton.prototype.getBackgroundColor = function () {
	return '';
};
LikeButton.prototype.setBackgroundColor = function () {
};
LikeButton.prototype.getBorderColor = function () {
	return '';
};
LikeButton.prototype.setBorderColor = function () {
};
LikeButton.prototype.getBorderRadius = function () {
	return 0;
};
LikeButton.prototype.setBorderRadius = function () {
};
LikeButton.prototype.getBorderWidth = function () {
	return 0;
};
LikeButton.prototype.setBorderWidth = function () {
};
LikeButton.prototype.getBottom = function () {
	return '';
};
LikeButton.prototype.setBottom = function () {
};
LikeButton.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
LikeButton.prototype.setCenter = function () {
};
LikeButton.prototype.getChildren = function () {
	return [];
};
LikeButton.prototype.getHeight = function () {
	return '';
};
LikeButton.prototype.setHeight = function () {
};
LikeButton.prototype.getLayout = function () {
	return '';
};
LikeButton.prototype.setLayout = function () {
};
LikeButton.prototype.getLeft = function () {
	return '';
};
LikeButton.prototype.setLeft = function () {
};
LikeButton.prototype.getOpacity = function () {
	return 0;
};
LikeButton.prototype.setOpacity = function () {
};
LikeButton.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
LikeButton.prototype.getRight = function () {
	return '';
};
LikeButton.prototype.setRight = function () {
};
LikeButton.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
LikeButton.prototype.getTintColor = function () {
	return '';
};
LikeButton.prototype.setTintColor = function () {
};
LikeButton.prototype.getTop = function () {
	return '';
};
LikeButton.prototype.setTop = function () {
};
LikeButton.prototype.getTouchEnabled = function () {
	return true;
};
LikeButton.prototype.setTouchEnabled = function () {
};
LikeButton.prototype.getVisible = function () {
	return true;
};
LikeButton.prototype.setVisible = function () {
};
LikeButton.prototype.getWidth = function () {
	return '';
};
LikeButton.prototype.setWidth = function () {
};
LikeButton.prototype.getAuxiliaryViewPosition = function () {
	return '';
};
LikeButton.prototype.setAuxiliaryViewPosition = function () {
};
LikeButton.prototype.getForegroundColor = function () {
	return '';
};
LikeButton.prototype.setForegroundColor = function () {
};
LikeButton.prototype.getHorizontalAlign = function () {
	return '';
};
LikeButton.prototype.setHorizontalAlign = function () {
};
LikeButton.prototype.getLikeViewButton = function () {
	return '';
};
LikeButton.prototype.setLikeViewButton = function () {
};
LikeButton.prototype.getObjectId = function () {
	return '';
};
LikeButton.prototype.setObjectId = function () {
};
LikeButton.prototype.getObjectType = function () {
	return '';
};
LikeButton.prototype.setObjectType = function () {
};
LikeButton.prototype.getSoundEnabled = function () {
	return true;
};
LikeButton.prototype.setSoundEnabled = function () {
};
module.exports = function (properties) {
	return new LikeButton(properties);
};