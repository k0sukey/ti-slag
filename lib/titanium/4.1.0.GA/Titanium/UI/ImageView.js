function ImageView(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.ImageView';
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
	if (properties.url) {
		throw new Error('Ti.UI.ImageView.url was deprecated, since 1.5.0');
	}
	this.animating = properties.animating || true;
	this.autorotate = properties.autorotate || true;
	this.decodeRetries = properties.decodeRetries || 0;
	this.defaultImage = properties.defaultImage || '';
	this.duration = properties.duration || 0;
	this.enableZoomControls = properties.enableZoomControls || true;
	this.hires = properties.hires || true;
	this.image = properties.image || '';
	this.images = properties.images || '';
	this.paused = properties.paused || true;
	this.preventDefaultImage = properties.preventDefaultImage || true;
	this.repeatCount = properties.repeatCount || 0;
	this.reverse = properties.reverse || true;
	return this;
}
ImageView.prototype.addEventListener = function () {
};
ImageView.prototype.removeEventListener = function () {
};
ImageView.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ImageView.prototype.fireEvent = function () {
};
ImageView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.ImageView.finishLayout was deprecated, since 3.0.0');
};
ImageView.prototype.removeAllChildren = function () {
};
ImageView.prototype.startLayout = function () {
	throw new Error('Ti.UI.ImageView.startLayout was deprecated, since 3.0.0');
};
ImageView.prototype.toImage = function () {
	return {};
};
ImageView.prototype.updateLayout = function () {
	throw new Error('Ti.UI.ImageView.updateLayout was deprecated, since 3.0.0');
};
ImageView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
ImageView.prototype.add = function () {
};
ImageView.prototype.animate = function () {
};
ImageView.prototype.hide = function () {
};
ImageView.prototype.remove = function () {
};
ImageView.prototype.show = function () {
};
ImageView.prototype.pause = function () {
};
ImageView.prototype.resume = function () {
};
ImageView.prototype.start = function () {
};
ImageView.prototype.stop = function () {
};
ImageView.prototype.toBlob = function () {
	return {};
};
ImageView.prototype.getBubbleParent = function () {
	return true;
};
ImageView.prototype.setBubbleParent = function () {
};
ImageView.prototype.getApiName = function () {
	return '';
};
ImageView.prototype.getLifecycleContainer = function () {
	return {};
};
ImageView.prototype.setLifecycleContainer = function () {
};
ImageView.prototype.getAccessibilityHidden = function () {
	return true;
};
ImageView.prototype.setAccessibilityHidden = function () {
};
ImageView.prototype.getAccessibilityHint = function () {
	return '';
};
ImageView.prototype.setAccessibilityHint = function () {
};
ImageView.prototype.getAccessibilityLabel = function () {
	return '';
};
ImageView.prototype.setAccessibilityLabel = function () {
};
ImageView.prototype.getAccessibilityValue = function () {
	return '';
};
ImageView.prototype.setAccessibilityValue = function () {
};
ImageView.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
ImageView.prototype.setAnchorPoint = function () {
};
ImageView.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ImageView.prototype.getBackgroundDisabledColor = function () {
	return '';
};
ImageView.prototype.setBackgroundDisabledColor = function () {
};
ImageView.prototype.getBackgroundDisabledImage = function () {
	return '';
};
ImageView.prototype.setBackgroundDisabledImage = function () {
};
ImageView.prototype.getBackgroundFocusedColor = function () {
	return '';
};
ImageView.prototype.setBackgroundFocusedColor = function () {
};
ImageView.prototype.getBackgroundFocusedImage = function () {
	return '';
};
ImageView.prototype.setBackgroundFocusedImage = function () {
};
ImageView.prototype.getBackgroundGradient = function () {
	return {};
};
ImageView.prototype.setBackgroundGradient = function () {
};
ImageView.prototype.getBackgroundImage = function () {
	return '';
};
ImageView.prototype.setBackgroundImage = function () {
};
ImageView.prototype.getBackgroundRepeat = function () {
	return true;
};
ImageView.prototype.setBackgroundRepeat = function () {
};
ImageView.prototype.getBackgroundLeftCap = function () {
	return 0;
};
ImageView.prototype.setBackgroundLeftCap = function () {
};
ImageView.prototype.getBackgroundSelectedColor = function () {
	return '';
};
ImageView.prototype.setBackgroundSelectedColor = function () {
};
ImageView.prototype.getBackgroundSelectedImage = function () {
	return '';
};
ImageView.prototype.setBackgroundSelectedImage = function () {
};
ImageView.prototype.getBackgroundTopCap = function () {
	return 0;
};
ImageView.prototype.setBackgroundTopCap = function () {
};
ImageView.prototype.getClipMode = function () {
	return 0;
};
ImageView.prototype.setClipMode = function () {
};
ImageView.prototype.getFocusable = function () {
	return true;
};
ImageView.prototype.setFocusable = function () {
};
ImageView.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
ImageView.prototype.setOverrideCurrentAnimation = function () {
};
ImageView.prototype.getPullBackgroundColor = function () {
	return '';
};
ImageView.prototype.setPullBackgroundColor = function () {
};
ImageView.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
ImageView.prototype.setSoftKeyboardOnFocus = function () {
};
ImageView.prototype.getTransform = function () {
	return {};
};
ImageView.prototype.setTransform = function () {
};
ImageView.prototype.getViewShadowRadius = function () {
	return 0;
};
ImageView.prototype.setViewShadowRadius = function () {
};
ImageView.prototype.getViewShadowColor = function () {
	return '';
};
ImageView.prototype.setViewShadowColor = function () {
};
ImageView.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
ImageView.prototype.setViewShadowOffset = function () {
};
ImageView.prototype.getHorizontalWrap = function () {
	return true;
};
ImageView.prototype.setHorizontalWrap = function () {
};
ImageView.prototype.getZIndex = function () {
	return 0;
};
ImageView.prototype.setZIndex = function () {
};
ImageView.prototype.getKeepScreenOn = function () {
	return true;
};
ImageView.prototype.setKeepScreenOn = function () {
};
ImageView.prototype.getBackgroundColor = function () {
	return '';
};
ImageView.prototype.setBackgroundColor = function () {
};
ImageView.prototype.getBorderColor = function () {
	return '';
};
ImageView.prototype.setBorderColor = function () {
};
ImageView.prototype.getBorderRadius = function () {
	return 0;
};
ImageView.prototype.setBorderRadius = function () {
};
ImageView.prototype.getBorderWidth = function () {
	return 0;
};
ImageView.prototype.setBorderWidth = function () {
};
ImageView.prototype.getBottom = function () {
	return '';
};
ImageView.prototype.setBottom = function () {
};
ImageView.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
ImageView.prototype.setCenter = function () {
};
ImageView.prototype.getChildren = function () {
	return [];
};
ImageView.prototype.getHeight = function () {
	return '';
};
ImageView.prototype.setHeight = function () {
};
ImageView.prototype.getLayout = function () {
	return '';
};
ImageView.prototype.setLayout = function () {
};
ImageView.prototype.getLeft = function () {
	return '';
};
ImageView.prototype.setLeft = function () {
};
ImageView.prototype.getOpacity = function () {
	return 0;
};
ImageView.prototype.setOpacity = function () {
};
ImageView.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
ImageView.prototype.getRight = function () {
	return '';
};
ImageView.prototype.setRight = function () {
};
ImageView.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
ImageView.prototype.getTintColor = function () {
	return '';
};
ImageView.prototype.setTintColor = function () {
};
ImageView.prototype.getTop = function () {
	return '';
};
ImageView.prototype.setTop = function () {
};
ImageView.prototype.getTouchEnabled = function () {
	return true;
};
ImageView.prototype.setTouchEnabled = function () {
};
ImageView.prototype.getVisible = function () {
	return true;
};
ImageView.prototype.setVisible = function () {
};
ImageView.prototype.getWidth = function () {
	return '';
};
ImageView.prototype.setWidth = function () {
};
ImageView.prototype.getUrl = function () {
	throw new Error('Ti.UI.ImageView.getUrl was deprecated, since 1.5.0');
};
ImageView.prototype.setUrl = function () {
	throw new Error('Ti.UI.ImageView.setUrl was deprecated, since 1.5.0');
};
ImageView.prototype.getAnimating = function () {
	return true;
};
ImageView.prototype.getAutorotate = function () {
	return true;
};
ImageView.prototype.setAutorotate = function () {
};
ImageView.prototype.getDecodeRetries = function () {
	return 0;
};
ImageView.prototype.setDecodeRetries = function () {
};
ImageView.prototype.getDefaultImage = function () {
	return '';
};
ImageView.prototype.setDefaultImage = function () {
};
ImageView.prototype.getDuration = function () {
	return 0;
};
ImageView.prototype.setDuration = function () {
};
ImageView.prototype.getEnableZoomControls = function () {
	return true;
};
ImageView.prototype.setEnableZoomControls = function () {
};
ImageView.prototype.getHires = function () {
	return true;
};
ImageView.prototype.setHires = function () {
};
ImageView.prototype.getImage = function () {
	return '';
};
ImageView.prototype.setImage = function () {
};
ImageView.prototype.getImages = function () {
	return '';
};
ImageView.prototype.setImages = function () {
};
ImageView.prototype.getPaused = function () {
	return true;
};
ImageView.prototype.getPreventDefaultImage = function () {
	return true;
};
ImageView.prototype.setPreventDefaultImage = function () {
};
ImageView.prototype.getRepeatCount = function () {
	return 0;
};
ImageView.prototype.setRepeatCount = function () {
};
ImageView.prototype.getReverse = function () {
	return true;
};
ImageView.prototype.setReverse = function () {
};
module.exports = function (properties) {
	return new ImageView(properties);
};