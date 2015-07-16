function VideoPlayer(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Media.VideoPlayer';
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
	this.allowsAirPlay = properties.allowsAirPlay || true;
	this.autoplay = properties.autoplay || true;
	if (properties.contentURL) {
		throw new Error('Ti.Media.VideoPlayer.contentURL was deprecated, since 1.4.0');
	}
	this.currentPlaybackTime = properties.currentPlaybackTime || 0;
	this.duration = properties.duration || 0;
	this.endPlaybackTime = properties.endPlaybackTime || 0;
	this.fullscreen = properties.fullscreen || true;
	this.initialPlaybackTime = properties.initialPlaybackTime || 0;
	this.loadState = properties.loadState || 0;
	this.media = properties.media || {};
	this.mediaControlStyle = properties.mediaControlStyle || 0;
	this.mediaTypes = properties.mediaTypes || 0;
	if (properties.movieControlMode) {
		throw new Error('Ti.Media.VideoPlayer.movieControlMode was deprecated, since 1.8.0');
	}
	this.naturalSize = properties.naturalSize || {};
	this.playableDuration = properties.playableDuration || 0;
	this.playbackState = properties.playbackState || 0;
	this.playing = properties.playing || true;
	this.repeatMode = properties.repeatMode || 0;
	this.scalingMode = properties.scalingMode || 0;
	this.sourceType = properties.sourceType || 0;
	this.url = properties.url || '';
	if (properties.useApplicationAudioSession) {
		throw new Error('Ti.Media.VideoPlayer.useApplicationAudioSession was deprecated, since 3.5.0');
	}
	this.volume = properties.volume || 0;
	return this;
}
VideoPlayer.prototype.addEventListener = function () {
};
VideoPlayer.prototype.removeEventListener = function () {
};
VideoPlayer.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
VideoPlayer.prototype.fireEvent = function () {
};
VideoPlayer.prototype.finishLayout = function () {
	throw new Error('Ti.Media.VideoPlayer.finishLayout was deprecated, since 3.0.0');
};
VideoPlayer.prototype.removeAllChildren = function () {
};
VideoPlayer.prototype.startLayout = function () {
	throw new Error('Ti.Media.VideoPlayer.startLayout was deprecated, since 3.0.0');
};
VideoPlayer.prototype.toImage = function () {
	return {};
};
VideoPlayer.prototype.updateLayout = function () {
	throw new Error('Ti.Media.VideoPlayer.updateLayout was deprecated, since 3.0.0');
};
VideoPlayer.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
VideoPlayer.prototype.add = function () {
};
VideoPlayer.prototype.animate = function () {
};
VideoPlayer.prototype.hide = function () {
};
VideoPlayer.prototype.remove = function () {
};
VideoPlayer.prototype.show = function () {
};
VideoPlayer.prototype.cancelAllThumbnailImageRequests = function () {
};
VideoPlayer.prototype.pause = function () {
};
VideoPlayer.prototype.play = function () {
};
VideoPlayer.prototype.release = function () {
};
VideoPlayer.prototype.requestThumbnailImagesAtTimes = function () {
};
VideoPlayer.prototype.setBackgroundView = function () {
};
VideoPlayer.prototype.stop = function () {
};
VideoPlayer.prototype.thumbnailImageAtTime = function () {
	return {};
};
VideoPlayer.prototype.getBubbleParent = function () {
	return true;
};
VideoPlayer.prototype.setBubbleParent = function () {
};
VideoPlayer.prototype.getApiName = function () {
	return '';
};
VideoPlayer.prototype.getLifecycleContainer = function () {
	return {};
};
VideoPlayer.prototype.setLifecycleContainer = function () {
};
VideoPlayer.prototype.getAccessibilityHidden = function () {
	return true;
};
VideoPlayer.prototype.setAccessibilityHidden = function () {
};
VideoPlayer.prototype.getAccessibilityHint = function () {
	return '';
};
VideoPlayer.prototype.setAccessibilityHint = function () {
};
VideoPlayer.prototype.getAccessibilityLabel = function () {
	return '';
};
VideoPlayer.prototype.setAccessibilityLabel = function () {
};
VideoPlayer.prototype.getAccessibilityValue = function () {
	return '';
};
VideoPlayer.prototype.setAccessibilityValue = function () {
};
VideoPlayer.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
VideoPlayer.prototype.setAnchorPoint = function () {
};
VideoPlayer.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
VideoPlayer.prototype.getBackgroundDisabledColor = function () {
	return '';
};
VideoPlayer.prototype.setBackgroundDisabledColor = function () {
};
VideoPlayer.prototype.getBackgroundDisabledImage = function () {
	return '';
};
VideoPlayer.prototype.setBackgroundDisabledImage = function () {
};
VideoPlayer.prototype.getBackgroundFocusedColor = function () {
	return '';
};
VideoPlayer.prototype.setBackgroundFocusedColor = function () {
};
VideoPlayer.prototype.getBackgroundFocusedImage = function () {
	return '';
};
VideoPlayer.prototype.setBackgroundFocusedImage = function () {
};
VideoPlayer.prototype.getBackgroundGradient = function () {
	return {};
};
VideoPlayer.prototype.setBackgroundGradient = function () {
};
VideoPlayer.prototype.getBackgroundImage = function () {
	return '';
};
VideoPlayer.prototype.setBackgroundImage = function () {
};
VideoPlayer.prototype.getBackgroundRepeat = function () {
	return true;
};
VideoPlayer.prototype.setBackgroundRepeat = function () {
};
VideoPlayer.prototype.getBackgroundLeftCap = function () {
	return 0;
};
VideoPlayer.prototype.setBackgroundLeftCap = function () {
};
VideoPlayer.prototype.getBackgroundSelectedColor = function () {
	return '';
};
VideoPlayer.prototype.setBackgroundSelectedColor = function () {
};
VideoPlayer.prototype.getBackgroundSelectedImage = function () {
	return '';
};
VideoPlayer.prototype.setBackgroundSelectedImage = function () {
};
VideoPlayer.prototype.getBackgroundTopCap = function () {
	return 0;
};
VideoPlayer.prototype.setBackgroundTopCap = function () {
};
VideoPlayer.prototype.getClipMode = function () {
	return 0;
};
VideoPlayer.prototype.setClipMode = function () {
};
VideoPlayer.prototype.getFocusable = function () {
	return true;
};
VideoPlayer.prototype.setFocusable = function () {
};
VideoPlayer.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
VideoPlayer.prototype.setOverrideCurrentAnimation = function () {
};
VideoPlayer.prototype.getPullBackgroundColor = function () {
	return '';
};
VideoPlayer.prototype.setPullBackgroundColor = function () {
};
VideoPlayer.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
VideoPlayer.prototype.setSoftKeyboardOnFocus = function () {
};
VideoPlayer.prototype.getTransform = function () {
	return {};
};
VideoPlayer.prototype.setTransform = function () {
};
VideoPlayer.prototype.getViewShadowRadius = function () {
	return 0;
};
VideoPlayer.prototype.setViewShadowRadius = function () {
};
VideoPlayer.prototype.getViewShadowColor = function () {
	return '';
};
VideoPlayer.prototype.setViewShadowColor = function () {
};
VideoPlayer.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
VideoPlayer.prototype.setViewShadowOffset = function () {
};
VideoPlayer.prototype.getHorizontalWrap = function () {
	return true;
};
VideoPlayer.prototype.setHorizontalWrap = function () {
};
VideoPlayer.prototype.getZIndex = function () {
	return 0;
};
VideoPlayer.prototype.setZIndex = function () {
};
VideoPlayer.prototype.getKeepScreenOn = function () {
	return true;
};
VideoPlayer.prototype.setKeepScreenOn = function () {
};
VideoPlayer.prototype.getBackgroundColor = function () {
	return '';
};
VideoPlayer.prototype.setBackgroundColor = function () {
};
VideoPlayer.prototype.getBorderColor = function () {
	return '';
};
VideoPlayer.prototype.setBorderColor = function () {
};
VideoPlayer.prototype.getBorderRadius = function () {
	return 0;
};
VideoPlayer.prototype.setBorderRadius = function () {
};
VideoPlayer.prototype.getBorderWidth = function () {
	return 0;
};
VideoPlayer.prototype.setBorderWidth = function () {
};
VideoPlayer.prototype.getBottom = function () {
	return '';
};
VideoPlayer.prototype.setBottom = function () {
};
VideoPlayer.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
VideoPlayer.prototype.setCenter = function () {
};
VideoPlayer.prototype.getChildren = function () {
	return [];
};
VideoPlayer.prototype.getHeight = function () {
	return '';
};
VideoPlayer.prototype.setHeight = function () {
};
VideoPlayer.prototype.getLayout = function () {
	return '';
};
VideoPlayer.prototype.setLayout = function () {
};
VideoPlayer.prototype.getLeft = function () {
	return '';
};
VideoPlayer.prototype.setLeft = function () {
};
VideoPlayer.prototype.getOpacity = function () {
	return 0;
};
VideoPlayer.prototype.setOpacity = function () {
};
VideoPlayer.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
VideoPlayer.prototype.getRight = function () {
	return '';
};
VideoPlayer.prototype.setRight = function () {
};
VideoPlayer.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
VideoPlayer.prototype.getTintColor = function () {
	return '';
};
VideoPlayer.prototype.setTintColor = function () {
};
VideoPlayer.prototype.getTop = function () {
	return '';
};
VideoPlayer.prototype.setTop = function () {
};
VideoPlayer.prototype.getTouchEnabled = function () {
	return true;
};
VideoPlayer.prototype.setTouchEnabled = function () {
};
VideoPlayer.prototype.getVisible = function () {
	return true;
};
VideoPlayer.prototype.setVisible = function () {
};
VideoPlayer.prototype.getWidth = function () {
	return '';
};
VideoPlayer.prototype.setWidth = function () {
};
VideoPlayer.prototype.getAllowsAirPlay = function () {
	return true;
};
VideoPlayer.prototype.setAllowsAirPlay = function () {
};
VideoPlayer.prototype.getAutoplay = function () {
	return true;
};
VideoPlayer.prototype.setAutoplay = function () {
};
VideoPlayer.prototype.getContentURL = function () {
	throw new Error('Ti.Media.VideoPlayer.getContentURL was deprecated, since 1.4.0');
};
VideoPlayer.prototype.setContentURL = function () {
	throw new Error('Ti.Media.VideoPlayer.setContentURL was deprecated, since 1.4.0');
};
VideoPlayer.prototype.getCurrentPlaybackTime = function () {
	return 0;
};
VideoPlayer.prototype.setCurrentPlaybackTime = function () {
};
VideoPlayer.prototype.getDuration = function () {
	return 0;
};
VideoPlayer.prototype.setDuration = function () {
};
VideoPlayer.prototype.getEndPlaybackTime = function () {
	return 0;
};
VideoPlayer.prototype.setEndPlaybackTime = function () {
};
VideoPlayer.prototype.getFullscreen = function () {
	return true;
};
VideoPlayer.prototype.setFullscreen = function () {
};
VideoPlayer.prototype.getInitialPlaybackTime = function () {
	return 0;
};
VideoPlayer.prototype.setInitialPlaybackTime = function () {
};
VideoPlayer.prototype.getLoadState = function () {
	return 0;
};
VideoPlayer.prototype.setMedia = function () {
};
VideoPlayer.prototype.getMediaControlStyle = function () {
	return 0;
};
VideoPlayer.prototype.setMediaControlStyle = function () {
};
VideoPlayer.prototype.getMediaTypes = function () {
	return 0;
};
VideoPlayer.prototype.setMediaTypes = function () {
};
VideoPlayer.prototype.getMovieControlMode = function () {
	throw new Error('Ti.Media.VideoPlayer.getMovieControlMode was deprecated, since 1.8.0');
};
VideoPlayer.prototype.setMovieControlMode = function () {
	throw new Error('Ti.Media.VideoPlayer.setMovieControlMode was deprecated, since 1.8.0');
};
VideoPlayer.prototype.getNaturalSize = function () {
	return {};
};
VideoPlayer.prototype.setNaturalSize = function () {
};
VideoPlayer.prototype.getPlayableDuration = function () {
	return 0;
};
VideoPlayer.prototype.getPlaybackState = function () {
	return 0;
};
VideoPlayer.prototype.getPlaying = function () {
	return true;
};
VideoPlayer.prototype.getRepeatMode = function () {
	return 0;
};
VideoPlayer.prototype.setRepeatMode = function () {
};
VideoPlayer.prototype.getScalingMode = function () {
	return 0;
};
VideoPlayer.prototype.setScalingMode = function () {
};
VideoPlayer.prototype.getSourceType = function () {
	return 0;
};
VideoPlayer.prototype.setSourceType = function () {
};
VideoPlayer.prototype.getUrl = function () {
	return '';
};
VideoPlayer.prototype.setUrl = function () {
};
VideoPlayer.prototype.getUseApplicationAudioSession = function () {
	throw new Error('Ti.Media.VideoPlayer.getUseApplicationAudioSession was deprecated, since 3.5.0');
};
VideoPlayer.prototype.setUseApplicationAudioSession = function () {
	throw new Error('Ti.Media.VideoPlayer.setUseApplicationAudioSession was deprecated, since 3.5.0');
};
VideoPlayer.prototype.getVolume = function () {
	return 0;
};
VideoPlayer.prototype.setVolume = function () {
};
module.exports = function (properties) {
	return new VideoPlayer(properties);
};