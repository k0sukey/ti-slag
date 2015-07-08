function VideoPlayer(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || true;
	this.accessibilityHint = properties.accessibilityHint || '';
	this.accessibilityLabel = properties.accessibilityLabel || '';
	this.accessibilityValue = properties.accessibilityValue || '';
	this.allowsAirPlay = properties.allowsAirPlay || true;
	this.anchorPoint = properties.anchorPoint || {
		x: 0,
		y: 0
	};
	this.animatedCenter = properties.animatedCenter || {
		x: 0,
		y: 0
	};
	this.apiName = 'Ti.Media.VideoPlayer';
	this.autoplay = properties.autoplay || true;
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
	if (properties.contentURL) {
		throw new Error('Ti.Media.VideoPlayer.contentURL was deprecated, since 1.4.0');
	}
	this.currentPlaybackTime = properties.currentPlaybackTime || 0;
	this.duration = properties.duration || 0;
	this.endPlaybackTime = properties.endPlaybackTime || 0;
	this.focusable = properties.focusable || true;
	this.fullscreen = properties.fullscreen || true;
	this.height = properties.height || 0;
	this.horizontalWrap = properties.horizontalWrap || true;
	this.initialPlaybackTime = properties.initialPlaybackTime || 0;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.loadState = properties.loadState || 0;
	this.media = properties.media || {};
	this.mediaControlStyle = properties.mediaControlStyle || 0;
	this.mediaTypes = properties.mediaTypes || 0;
	if (properties.movieControlMode) {
		throw new Error('Ti.Media.VideoPlayer.movieControlMode was deprecated, since 1.8.0');
	}
	this.naturalSize = properties.naturalSize || {};
	this.opacity = properties.opacity || 0;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.playableDuration = properties.playableDuration || 0;
	this.playbackState = properties.playbackState || 0;
	this.playing = properties.playing || true;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.repeatMode = properties.repeatMode || 0;
	this.right = properties.right || 0;
	this.scalingMode = properties.scalingMode || 0;
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.sourceType = properties.sourceType || 0;
	this.tintColor = properties.tintColor || '';
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.transform = properties.transform || {};
	this.url = properties.url || '';
	if (properties.useApplicationAudioSession) {
		throw new Error('Ti.Media.VideoPlayer.useApplicationAudioSession was deprecated, since 3.5.0');
	}
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.visible = properties.visible || true;
	this.volume = properties.volume || 0;
	this.width = properties.width || 0;
	this.zIndex = properties.zIndex || 0;
	return this;
}
VideoPlayer.prototype.add = function () {
};
VideoPlayer.prototype.addEventListener = function () {
};
VideoPlayer.prototype.animate = function () {
};
VideoPlayer.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
VideoPlayer.prototype.cancelAllThumbnailImageRequests = function () {
};
VideoPlayer.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
VideoPlayer.prototype.finishLayout = function () {
	throw new Error('Ti.Media.VideoPlayer.finishLayout was deprecated, since 3.0.0');
};
VideoPlayer.prototype.fireEvent = function () {
};
VideoPlayer.prototype.getAccessibilityHidden = function () {
	return true;
};
VideoPlayer.prototype.getAccessibilityHint = function () {
	return '';
};
VideoPlayer.prototype.getAccessibilityLabel = function () {
	return '';
};
VideoPlayer.prototype.getAccessibilityValue = function () {
	return '';
};
VideoPlayer.prototype.getAllowsAirPlay = function () {
	return true;
};
VideoPlayer.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
VideoPlayer.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
VideoPlayer.prototype.getApiName = function () {
	return '';
};
VideoPlayer.prototype.getAutoplay = function () {
	return true;
};
VideoPlayer.prototype.getBackgroundColor = function () {
	return '';
};
VideoPlayer.prototype.getBackgroundDisabledColor = function () {
	return '';
};
VideoPlayer.prototype.getBackgroundDisabledImage = function () {
	return '';
};
VideoPlayer.prototype.getBackgroundFocusedColor = function () {
	return '';
};
VideoPlayer.prototype.getBackgroundFocusedImage = function () {
	return '';
};
VideoPlayer.prototype.getBackgroundGradient = function () {
	return {};
};
VideoPlayer.prototype.getBackgroundImage = function () {
	return '';
};
VideoPlayer.prototype.getBackgroundLeftCap = function () {
	return 0;
};
VideoPlayer.prototype.getBackgroundRepeat = function () {
	return true;
};
VideoPlayer.prototype.getBackgroundSelectedColor = function () {
	return '';
};
VideoPlayer.prototype.getBackgroundSelectedImage = function () {
	return '';
};
VideoPlayer.prototype.getBackgroundTopCap = function () {
	return 0;
};
VideoPlayer.prototype.getBorderColor = function () {
	return '';
};
VideoPlayer.prototype.getBorderRadius = function () {
	return 0;
};
VideoPlayer.prototype.getBorderWidth = function () {
	return 0;
};
VideoPlayer.prototype.getBottom = function () {
	return 0;
};
VideoPlayer.prototype.getBubbleParent = function () {
	return true;
};
VideoPlayer.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
VideoPlayer.prototype.getChildren = function () {
	return [];
};
VideoPlayer.prototype.getClipMode = function () {
	return 0;
};
VideoPlayer.prototype.getContentURL = function () {
	throw new Error('Ti.Media.VideoPlayer.getContentURL was deprecated, since 1.4.0');
};
VideoPlayer.prototype.getCurrentPlaybackTime = function () {
	return 0;
};
VideoPlayer.prototype.getDuration = function () {
	return 0;
};
VideoPlayer.prototype.getEndPlaybackTime = function () {
	return 0;
};
VideoPlayer.prototype.getFocusable = function () {
	return true;
};
VideoPlayer.prototype.getFullscreen = function () {
	return true;
};
VideoPlayer.prototype.getHeight = function () {
	return 0;
};
VideoPlayer.prototype.getHorizontalWrap = function () {
	return true;
};
VideoPlayer.prototype.getInitialPlaybackTime = function () {
	return 0;
};
VideoPlayer.prototype.getKeepScreenOn = function () {
	return true;
};
VideoPlayer.prototype.getLayout = function () {
	return '';
};
VideoPlayer.prototype.getLeft = function () {
	return 0;
};
VideoPlayer.prototype.getLifecycleContainer = function () {
	return {};
};
VideoPlayer.prototype.getLoadState = function () {
	return 0;
};
VideoPlayer.prototype.getMediaControlStyle = function () {
	return 0;
};
VideoPlayer.prototype.getMediaTypes = function () {
	return 0;
};
VideoPlayer.prototype.getMovieControlMode = function () {
	throw new Error('Ti.Media.VideoPlayer.getMovieControlMode was deprecated, since 1.8.0');
};
VideoPlayer.prototype.getNaturalSize = function () {
	return {};
};
VideoPlayer.prototype.getOpacity = function () {
	return 0;
};
VideoPlayer.prototype.getOverrideCurrentAnimation = function () {
	return true;
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
VideoPlayer.prototype.getPullBackgroundColor = function () {
	return '';
};
VideoPlayer.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
VideoPlayer.prototype.getRepeatMode = function () {
	return 0;
};
VideoPlayer.prototype.getRight = function () {
	return 0;
};
VideoPlayer.prototype.getScalingMode = function () {
	return 0;
};
VideoPlayer.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
VideoPlayer.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
VideoPlayer.prototype.getSourceType = function () {
	return 0;
};
VideoPlayer.prototype.getTintColor = function () {
	return '';
};
VideoPlayer.prototype.getTop = function () {
	return 0;
};
VideoPlayer.prototype.getTouchEnabled = function () {
	return true;
};
VideoPlayer.prototype.getTransform = function () {
	return {};
};
VideoPlayer.prototype.getUrl = function () {
	return '';
};
VideoPlayer.prototype.getUseApplicationAudioSession = function () {
	throw new Error('Ti.Media.VideoPlayer.getUseApplicationAudioSession was deprecated, since 3.5.0');
};
VideoPlayer.prototype.getViewShadowColor = function () {
	return '';
};
VideoPlayer.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
VideoPlayer.prototype.getViewShadowRadius = function () {
	return 0;
};
VideoPlayer.prototype.getVisible = function () {
	return true;
};
VideoPlayer.prototype.getVolume = function () {
	return 0;
};
VideoPlayer.prototype.getWidth = function () {
	return 0;
};
VideoPlayer.prototype.getZIndex = function () {
	return 0;
};
VideoPlayer.prototype.hide = function () {
};
VideoPlayer.prototype.pause = function () {
};
VideoPlayer.prototype.play = function () {
};
VideoPlayer.prototype.release = function () {
};
VideoPlayer.prototype.remove = function () {
};
VideoPlayer.prototype.removeAllChildren = function () {
};
VideoPlayer.prototype.removeEventListener = function () {
};
VideoPlayer.prototype.requestThumbnailImagesAtTimes = function () {
};
VideoPlayer.prototype.setAccessibilityHidden = function () {
};
VideoPlayer.prototype.setAccessibilityHint = function () {
};
VideoPlayer.prototype.setAccessibilityLabel = function () {
};
VideoPlayer.prototype.setAccessibilityValue = function () {
};
VideoPlayer.prototype.setAllowsAirPlay = function () {
};
VideoPlayer.prototype.setAnchorPoint = function () {
};
VideoPlayer.prototype.setAutoplay = function () {
};
VideoPlayer.prototype.setBackgroundColor = function () {
};
VideoPlayer.prototype.setBackgroundDisabledColor = function () {
};
VideoPlayer.prototype.setBackgroundDisabledImage = function () {
};
VideoPlayer.prototype.setBackgroundFocusedColor = function () {
};
VideoPlayer.prototype.setBackgroundFocusedImage = function () {
};
VideoPlayer.prototype.setBackgroundGradient = function () {
};
VideoPlayer.prototype.setBackgroundImage = function () {
};
VideoPlayer.prototype.setBackgroundLeftCap = function () {
};
VideoPlayer.prototype.setBackgroundRepeat = function () {
};
VideoPlayer.prototype.setBackgroundSelectedColor = function () {
};
VideoPlayer.prototype.setBackgroundSelectedImage = function () {
};
VideoPlayer.prototype.setBackgroundTopCap = function () {
};
VideoPlayer.prototype.setBackgroundView = function () {
};
VideoPlayer.prototype.setBorderColor = function () {
};
VideoPlayer.prototype.setBorderRadius = function () {
};
VideoPlayer.prototype.setBorderWidth = function () {
};
VideoPlayer.prototype.setBottom = function () {
};
VideoPlayer.prototype.setBubbleParent = function () {
};
VideoPlayer.prototype.setCenter = function () {
};
VideoPlayer.prototype.setClipMode = function () {
};
VideoPlayer.prototype.setContentURL = function () {
	throw new Error('Ti.Media.VideoPlayer.setContentURL was deprecated, since 1.4.0');
};
VideoPlayer.prototype.setCurrentPlaybackTime = function () {
};
VideoPlayer.prototype.setDuration = function () {
};
VideoPlayer.prototype.setEndPlaybackTime = function () {
};
VideoPlayer.prototype.setFocusable = function () {
};
VideoPlayer.prototype.setFullscreen = function () {
};
VideoPlayer.prototype.setHeight = function () {
};
VideoPlayer.prototype.setHorizontalWrap = function () {
};
VideoPlayer.prototype.setInitialPlaybackTime = function () {
};
VideoPlayer.prototype.setKeepScreenOn = function () {
};
VideoPlayer.prototype.setLayout = function () {
};
VideoPlayer.prototype.setLeft = function () {
};
VideoPlayer.prototype.setLifecycleContainer = function () {
};
VideoPlayer.prototype.setMedia = function () {
};
VideoPlayer.prototype.setMediaControlStyle = function () {
};
VideoPlayer.prototype.setMediaTypes = function () {
};
VideoPlayer.prototype.setMovieControlMode = function () {
	throw new Error('Ti.Media.VideoPlayer.setMovieControlMode was deprecated, since 1.8.0');
};
VideoPlayer.prototype.setNaturalSize = function () {
};
VideoPlayer.prototype.setOpacity = function () {
};
VideoPlayer.prototype.setPullBackgroundColor = function () {
};
VideoPlayer.prototype.setRepeatMode = function () {
};
VideoPlayer.prototype.setRight = function () {
};
VideoPlayer.prototype.setScalingMode = function () {
};
VideoPlayer.prototype.setSoftKeyboardOnFocus = function () {
};
VideoPlayer.prototype.setSourceType = function () {
};
VideoPlayer.prototype.setTintColor = function () {
};
VideoPlayer.prototype.setTop = function () {
};
VideoPlayer.prototype.setTouchEnabled = function () {
};
VideoPlayer.prototype.setTransform = function () {
};
VideoPlayer.prototype.setUrl = function () {
};
VideoPlayer.prototype.setUseApplicationAudioSession = function () {
	throw new Error('Ti.Media.VideoPlayer.setUseApplicationAudioSession was deprecated, since 3.5.0');
};
VideoPlayer.prototype.setViewShadowColor = function () {
};
VideoPlayer.prototype.setViewShadowOffset = function () {
};
VideoPlayer.prototype.setViewShadowRadius = function () {
};
VideoPlayer.prototype.setVisible = function () {
};
VideoPlayer.prototype.setVolume = function () {
};
VideoPlayer.prototype.setWidth = function () {
};
VideoPlayer.prototype.setZIndex = function () {
};
VideoPlayer.prototype.show = function () {
};
VideoPlayer.prototype.startLayout = function () {
	throw new Error('Ti.Media.VideoPlayer.startLayout was deprecated, since 3.0.0');
};
VideoPlayer.prototype.stop = function () {
};
VideoPlayer.prototype.thumbnailImageAtTime = function () {
	return {};
};
VideoPlayer.prototype.toImage = function () {
	return {};
};
VideoPlayer.prototype.updateLayout = function () {
	throw new Error('Ti.Media.VideoPlayer.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new VideoPlayer(properties);
};