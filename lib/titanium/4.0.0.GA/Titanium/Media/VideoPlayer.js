function VideoPlayer(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.allowsAirPlay = properties.allowsAirPlay || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.Media.VideoPlayer';
	this.autoplay = properties.autoplay || undefined;
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
	if (properties.contentURL) {
		throw new Error('Ti.Media.VideoPlayer.contentURL was deprecated, since 1.4.0');
	}
	this.currentPlaybackTime = properties.currentPlaybackTime || undefined;
	this.duration = properties.duration || undefined;
	this.endPlaybackTime = properties.endPlaybackTime || undefined;
	this.focusable = properties.focusable || undefined;
	this.fullscreen = properties.fullscreen || undefined;
	this.height = properties.height || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.initialPlaybackTime = properties.initialPlaybackTime || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.loadState = properties.loadState || undefined;
	this.media = properties.media || undefined;
	this.mediaControlStyle = properties.mediaControlStyle || undefined;
	this.mediaTypes = properties.mediaTypes || undefined;
	if (properties.movieControlMode) {
		throw new Error('Ti.Media.VideoPlayer.movieControlMode was deprecated, since 1.8.0');
	}
	this.naturalSize = properties.naturalSize || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.playableDuration = properties.playableDuration || undefined;
	this.playbackState = properties.playbackState || undefined;
	this.playing = properties.playing || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.repeatMode = properties.repeatMode || undefined;
	this.right = properties.right || undefined;
	this.scalingMode = properties.scalingMode || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.sourceType = properties.sourceType || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.url = properties.url || undefined;
	if (properties.useApplicationAudioSession) {
		throw new Error('Ti.Media.VideoPlayer.useApplicationAudioSession was deprecated, since 3.5.0');
	}
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.volume = properties.volume || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;
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