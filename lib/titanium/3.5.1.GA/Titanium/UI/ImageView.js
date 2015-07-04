function ImageView(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.animating = properties.animating || undefined;
	this.apiName = 'Ti.UI.ImageView';
	this.autorotate = properties.autorotate || undefined;
	this.backgroundColor = properties.backgroundColor || undefined;
	this.backgroundDisabledColor = properties.backgroundDisabledColor || undefined;
	this.backgroundDisabledImage = properties.backgroundDisabledImage || undefined;
	this.backgroundFocusedColor = properties.backgroundFocusedColor || undefined;
	this.backgroundFocusedImage = properties.backgroundFocusedImage || undefined;
	this.backgroundGradient = properties.backgroundGradient || undefined;
	this.backgroundImage = properties.backgroundImage || undefined;
	this.backgroundLeftCap = properties.backgroundLeftCap || undefined;
	this.backgroundRepeat = properties.backgroundRepeat || undefined;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || undefined;
	this.backgroundSelectedImage = properties.backgroundSelectedImage || undefined;
	this.backgroundTopCap = properties.backgroundTopCap || undefined;
	this.borderColor = properties.borderColor || undefined;
	this.borderRadius = properties.borderRadius || undefined;
	this.borderWidth = properties.borderWidth || undefined;
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.decodeRetries = properties.decodeRetries || undefined;
	this.defaultImage = properties.defaultImage || undefined;
	this.duration = properties.duration || undefined;
	this.enableZoomControls = properties.enableZoomControls || undefined;
	if (properties.enabled) {
		throw new Error('Ti.UI.ImageView.enabled was deprecated, since 3.3.0');
	}
	this.focusable = properties.focusable || undefined;
	this.height = properties.height || undefined;
	this.hires = properties.hires || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.image = properties.image || undefined;
	this.images = properties.images || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.paused = properties.paused || undefined;
	this.preventDefaultImage = properties.preventDefaultImage || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.repeatCount = properties.repeatCount || undefined;
	this.reverse = properties.reverse || undefined;
	this.right = properties.right || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	if (properties.url) {
		throw new Error('Ti.UI.ImageView.url was deprecated, since 1.5.0');
	}
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;
	return this;
}
ImageView.prototype.add = function () {
};
ImageView.prototype.addEventListener = function () {
};
ImageView.prototype.animate = function () {
};
ImageView.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ImageView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
ImageView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.ImageView.finishLayout was deprecated, since 3.0.0');
};
ImageView.prototype.fireEvent = function () {
};
ImageView.prototype.getAccessibilityHidden = function () {
	return true;
};
ImageView.prototype.getAccessibilityHint = function () {
	return '';
};
ImageView.prototype.getAccessibilityLabel = function () {
	return '';
};
ImageView.prototype.getAccessibilityValue = function () {
	return '';
};
ImageView.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
ImageView.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ImageView.prototype.getAnimating = function () {
	return true;
};
ImageView.prototype.getApiName = function () {
	return '';
};
ImageView.prototype.getAutorotate = function () {
	return true;
};
ImageView.prototype.getBackgroundColor = function () {
	return '';
};
ImageView.prototype.getBackgroundDisabledColor = function () {
	return '';
};
ImageView.prototype.getBackgroundDisabledImage = function () {
	return '';
};
ImageView.prototype.getBackgroundFocusedColor = function () {
	return '';
};
ImageView.prototype.getBackgroundFocusedImage = function () {
	return '';
};
ImageView.prototype.getBackgroundGradient = function () {
	return {};
};
ImageView.prototype.getBackgroundImage = function () {
	return '';
};
ImageView.prototype.getBackgroundLeftCap = function () {
	return 0;
};
ImageView.prototype.getBackgroundRepeat = function () {
	return true;
};
ImageView.prototype.getBackgroundSelectedColor = function () {
	return '';
};
ImageView.prototype.getBackgroundSelectedImage = function () {
	return '';
};
ImageView.prototype.getBackgroundTopCap = function () {
	return 0;
};
ImageView.prototype.getBorderColor = function () {
	return '';
};
ImageView.prototype.getBorderRadius = function () {
	return 0;
};
ImageView.prototype.getBorderWidth = function () {
	return 0;
};
ImageView.prototype.getBottom = function () {
	return 0;
};
ImageView.prototype.getBubbleParent = function () {
	return true;
};
ImageView.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ImageView.prototype.getChildren = function () {
	return [];
};
ImageView.prototype.getClipMode = function () {
	return 0;
};
ImageView.prototype.getDecodeRetries = function () {
	return 0;
};
ImageView.prototype.getDefaultImage = function () {
	return '';
};
ImageView.prototype.getDuration = function () {
	return 0;
};
ImageView.prototype.getEnableZoomControls = function () {
	return true;
};
ImageView.prototype.getEnabled = function () {
	throw new Error('Ti.UI.ImageView.getEnabled was deprecated, since 3.3.0');
};
ImageView.prototype.getFocusable = function () {
	return true;
};
ImageView.prototype.getHeight = function () {
	return 0;
};
ImageView.prototype.getHires = function () {
	return true;
};
ImageView.prototype.getHorizontalWrap = function () {
	return true;
};
ImageView.prototype.getImage = function () {
	return '';
};
ImageView.prototype.getImages = function () {
	return '';
};
ImageView.prototype.getKeepScreenOn = function () {
	return true;
};
ImageView.prototype.getLayout = function () {
	return '';
};
ImageView.prototype.getLeft = function () {
	return 0;
};
ImageView.prototype.getOpacity = function () {
	return 0;
};
ImageView.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
ImageView.prototype.getPaused = function () {
	return true;
};
ImageView.prototype.getPreventDefaultImage = function () {
	return true;
};
ImageView.prototype.getPullBackgroundColor = function () {
	return '';
};
ImageView.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
ImageView.prototype.getRepeatCount = function () {
	return 0;
};
ImageView.prototype.getReverse = function () {
	return true;
};
ImageView.prototype.getRight = function () {
	return 0;
};
ImageView.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
ImageView.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
ImageView.prototype.getTintColor = function () {
	return '';
};
ImageView.prototype.getTop = function () {
	return 0;
};
ImageView.prototype.getTouchEnabled = function () {
	return true;
};
ImageView.prototype.getTransform = function () {
	return {};
};
ImageView.prototype.getUrl = function () {
	throw new Error('Ti.UI.ImageView.getUrl was deprecated, since 1.5.0');
};
ImageView.prototype.getViewShadowColor = function () {
	return '';
};
ImageView.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
ImageView.prototype.getViewShadowRadius = function () {
	return 0;
};
ImageView.prototype.getVisible = function () {
	return true;
};
ImageView.prototype.getWidth = function () {
	return 0;
};
ImageView.prototype.getZIndex = function () {
	return 0;
};
ImageView.prototype.hide = function () {
};
ImageView.prototype.pause = function () {
};
ImageView.prototype.remove = function () {
};
ImageView.prototype.removeAllChildren = function () {
};
ImageView.prototype.removeEventListener = function () {
};
ImageView.prototype.resume = function () {
};
ImageView.prototype.setAccessibilityHidden = function () {
};
ImageView.prototype.setAccessibilityHint = function () {
};
ImageView.prototype.setAccessibilityLabel = function () {
};
ImageView.prototype.setAccessibilityValue = function () {
};
ImageView.prototype.setAnchorPoint = function () {
};
ImageView.prototype.setBackgroundColor = function () {
};
ImageView.prototype.setBackgroundDisabledColor = function () {
};
ImageView.prototype.setBackgroundDisabledImage = function () {
};
ImageView.prototype.setBackgroundFocusedColor = function () {
};
ImageView.prototype.setBackgroundFocusedImage = function () {
};
ImageView.prototype.setBackgroundGradient = function () {
};
ImageView.prototype.setBackgroundImage = function () {
};
ImageView.prototype.setBackgroundLeftCap = function () {
};
ImageView.prototype.setBackgroundRepeat = function () {
};
ImageView.prototype.setBackgroundSelectedColor = function () {
};
ImageView.prototype.setBackgroundSelectedImage = function () {
};
ImageView.prototype.setBackgroundTopCap = function () {
};
ImageView.prototype.setBorderColor = function () {
};
ImageView.prototype.setBorderRadius = function () {
};
ImageView.prototype.setBorderWidth = function () {
};
ImageView.prototype.setBottom = function () {
};
ImageView.prototype.setBubbleParent = function () {
};
ImageView.prototype.setCenter = function () {
};
ImageView.prototype.setClipMode = function () {
};
ImageView.prototype.setDecodeRetries = function () {
};
ImageView.prototype.setDefaultImage = function () {
};
ImageView.prototype.setDuration = function () {
};
ImageView.prototype.setEnableZoomControls = function () {
};
ImageView.prototype.setEnabled = function () {
	throw new Error('Ti.UI.ImageView.setEnabled was deprecated, since 3.3.0');
};
ImageView.prototype.setFocusable = function () {
};
ImageView.prototype.setHeight = function () {
};
ImageView.prototype.setHires = function () {
};
ImageView.prototype.setHorizontalWrap = function () {
};
ImageView.prototype.setImage = function () {
};
ImageView.prototype.setImages = function () {
};
ImageView.prototype.setKeepScreenOn = function () {
};
ImageView.prototype.setLayout = function () {
};
ImageView.prototype.setLeft = function () {
};
ImageView.prototype.setOpacity = function () {
};
ImageView.prototype.setPreventDefaultImage = function () {
};
ImageView.prototype.setPullBackgroundColor = function () {
};
ImageView.prototype.setRepeatCount = function () {
};
ImageView.prototype.setReverse = function () {
};
ImageView.prototype.setRight = function () {
};
ImageView.prototype.setSoftKeyboardOnFocus = function () {
};
ImageView.prototype.setTintColor = function () {
};
ImageView.prototype.setTop = function () {
};
ImageView.prototype.setTouchEnabled = function () {
};
ImageView.prototype.setTransform = function () {
};
ImageView.prototype.setUrl = function () {
	throw new Error('Ti.UI.ImageView.setUrl was deprecated, since 1.5.0');
};
ImageView.prototype.setViewShadowColor = function () {
};
ImageView.prototype.setViewShadowOffset = function () {
};
ImageView.prototype.setViewShadowRadius = function () {
};
ImageView.prototype.setVisible = function () {
};
ImageView.prototype.setWidth = function () {
};
ImageView.prototype.setZIndex = function () {
};
ImageView.prototype.show = function () {
};
ImageView.prototype.start = function () {
};
ImageView.prototype.startLayout = function () {
	throw new Error('Ti.UI.ImageView.startLayout was deprecated, since 3.0.0');
};
ImageView.prototype.stop = function () {
};
ImageView.prototype.toBlob = function () {
};
ImageView.prototype.toImage = function () {
	return {};
};
ImageView.prototype.updateLayout = function () {
	throw new Error('Ti.UI.ImageView.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new ImageView(properties);
};