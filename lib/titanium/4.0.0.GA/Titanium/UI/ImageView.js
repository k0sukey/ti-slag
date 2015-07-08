function ImageView(properties) {
	properties = properties || {};
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
	this.animating = properties.animating || true;
	this.apiName = 'Ti.UI.ImageView';
	this.autorotate = properties.autorotate || true;
	this.backgroundColor = properties.backgroundColor || '';
	this.backgroundDisabledColor = properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = properties.backgroundFocusedImage || '';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundLeftCap = properties.backgroundLeftCap || 0;
	this.backgroundRepeat = properties.backgroundRepeat || true;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = properties.backgroundSelectedImage || '';
	this.backgroundTopCap = properties.backgroundTopCap || 0;
	this.borderColor = properties.borderColor || '';
	this.borderRadius = properties.borderRadius || 0;
	this.borderWidth = properties.borderWidth || 0;
	this.bottom = properties.bottom || 0;
	this.bubbleParent = properties.bubbleParent || true;
	this.center = properties.center || {
		x: 0,
		y: 0
	};
	this.children = properties.children || [];
	this.clipMode = properties.clipMode || 0;
	this.decodeRetries = properties.decodeRetries || 0;
	this.defaultImage = properties.defaultImage || '';
	this.duration = properties.duration || 0;
	this.enableZoomControls = properties.enableZoomControls || true;
	this.focusable = properties.focusable || true;
	this.height = properties.height || 0;
	this.hires = properties.hires || true;
	this.horizontalWrap = properties.horizontalWrap || true;
	this.image = properties.image || '';
	this.images = properties.images || '';
	this.keepScreenOn = properties.keepScreenOn || true;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.opacity = properties.opacity || 0;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.paused = properties.paused || true;
	this.preventDefaultImage = properties.preventDefaultImage || true;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.repeatCount = properties.repeatCount || 0;
	this.reverse = properties.reverse || true;
	this.right = properties.right || 0;
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.tintColor = properties.tintColor || '';
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.transform = properties.transform || {};
	if (properties.url) {
		throw new Error('Ti.UI.ImageView.url was deprecated, since 1.5.0');
	}
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.zIndex = properties.zIndex || 0;
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
ImageView.prototype.getLifecycleContainer = function () {
	return {};
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
ImageView.prototype.setLifecycleContainer = function () {
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
	return {};
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