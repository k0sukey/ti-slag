function VideoPlayer(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.allowsAirPlay = properties.allowsAirPlay || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.Media.VideoPlayer';
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
	this.contentURL = properties.contentURL || undefined;
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
	this.loadState = properties.loadState || undefined;
	this.media = properties.media || undefined;
	this.mediaControlStyle = properties.mediaControlStyle || undefined;
	this.mediaTypes = properties.mediaTypes || undefined;
	this.movieControlMode = properties.movieControlMode || undefined;
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
	this.useApplicationAudioSession = properties.useApplicationAudioSession || undefined;
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
};
VideoPlayer.prototype.fireEvent = function () {
};
VideoPlayer.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
VideoPlayer.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
VideoPlayer.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
VideoPlayer.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
VideoPlayer.prototype.getAllowsAirPlay = function () {
	return this.allowsAirPlay;
};
VideoPlayer.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
VideoPlayer.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
VideoPlayer.prototype.getApiName = function () {
	return this.apiName;
};
VideoPlayer.prototype.getAutoplay = function () {
	return this.autoplay;
};
VideoPlayer.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
VideoPlayer.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
VideoPlayer.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
VideoPlayer.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
VideoPlayer.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
VideoPlayer.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
VideoPlayer.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
VideoPlayer.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
VideoPlayer.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
VideoPlayer.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
VideoPlayer.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
VideoPlayer.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
VideoPlayer.prototype.getBorderColor = function () {
	return this.borderColor;
};
VideoPlayer.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
VideoPlayer.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
VideoPlayer.prototype.getBottom = function () {
	return this.bottom;
};
VideoPlayer.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
VideoPlayer.prototype.getCenter = function () {
	return this.center;
};
VideoPlayer.prototype.getChildren = function () {
	return this.children;
};
VideoPlayer.prototype.getClipMode = function () {
	return this.clipMode;
};
VideoPlayer.prototype.getContentURL = function () {
	return this.contentURL;
};
VideoPlayer.prototype.getCurrentPlaybackTime = function () {
	return this.currentPlaybackTime;
};
VideoPlayer.prototype.getDuration = function () {
	return this.duration;
};
VideoPlayer.prototype.getEndPlaybackTime = function () {
	return this.endPlaybackTime;
};
VideoPlayer.prototype.getFocusable = function () {
	return this.focusable;
};
VideoPlayer.prototype.getFullscreen = function () {
	return this.fullscreen;
};
VideoPlayer.prototype.getHeight = function () {
	return this.height;
};
VideoPlayer.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
VideoPlayer.prototype.getInitialPlaybackTime = function () {
	return this.initialPlaybackTime;
};
VideoPlayer.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
VideoPlayer.prototype.getLayout = function () {
	return this.layout;
};
VideoPlayer.prototype.getLeft = function () {
	return this.left;
};
VideoPlayer.prototype.getLoadState = function () {
	return this.loadState;
};
VideoPlayer.prototype.getMediaControlStyle = function () {
	return this.mediaControlStyle;
};
VideoPlayer.prototype.getMediaTypes = function () {
	return this.mediaTypes;
};
VideoPlayer.prototype.getMovieControlMode = function () {
	return this.movieControlMode;
};
VideoPlayer.prototype.getOpacity = function () {
	return this.opacity;
};
VideoPlayer.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
VideoPlayer.prototype.getPlayableDuration = function () {
	return this.playableDuration;
};
VideoPlayer.prototype.getPlaybackState = function () {
	return this.playbackState;
};
VideoPlayer.prototype.getPlaying = function () {
	return this.playing;
};
VideoPlayer.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
VideoPlayer.prototype.getRect = function () {
	return this.rect;
};
VideoPlayer.prototype.getRepeatMode = function () {
	return this.repeatMode;
};
VideoPlayer.prototype.getRight = function () {
	return this.right;
};
VideoPlayer.prototype.getScalingMode = function () {
	return this.scalingMode;
};
VideoPlayer.prototype.getSize = function () {
	return this.size;
};
VideoPlayer.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
VideoPlayer.prototype.getSourceType = function () {
	return this.sourceType;
};
VideoPlayer.prototype.getTintColor = function () {
	return this.tintColor;
};
VideoPlayer.prototype.getTop = function () {
	return this.top;
};
VideoPlayer.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
VideoPlayer.prototype.getTransform = function () {
	return this.transform;
};
VideoPlayer.prototype.getUrl = function () {
	return this.url;
};
VideoPlayer.prototype.getUseApplicationAudioSession = function () {
	return this.useApplicationAudioSession;
};
VideoPlayer.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
VideoPlayer.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
VideoPlayer.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
VideoPlayer.prototype.getVisible = function () {
	return this.visible;
};
VideoPlayer.prototype.getVolume = function () {
	return this.volume;
};
VideoPlayer.prototype.getWidth = function () {
	return this.width;
};
VideoPlayer.prototype.getZIndex = function () {
	return this.zIndex;
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
VideoPlayer.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
VideoPlayer.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
VideoPlayer.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
VideoPlayer.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
VideoPlayer.prototype.setAllowsAirPlay = function (property) {
	this.allowsAirPlay = property;
};
VideoPlayer.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
VideoPlayer.prototype.setAutoplay = function (property) {
	this.autoplay = property;
};
VideoPlayer.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
VideoPlayer.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
VideoPlayer.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
VideoPlayer.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
VideoPlayer.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
VideoPlayer.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
VideoPlayer.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
VideoPlayer.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
VideoPlayer.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
VideoPlayer.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
VideoPlayer.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
VideoPlayer.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
VideoPlayer.prototype.setBackgroundView = function () {
};
VideoPlayer.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
VideoPlayer.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
VideoPlayer.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
VideoPlayer.prototype.setBottom = function (property) {
	this.bottom = property;
};
VideoPlayer.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
VideoPlayer.prototype.setCenter = function (property) {
	this.center = property;
};
VideoPlayer.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
VideoPlayer.prototype.setContentURL = function (property) {
	this.contentURL = property;
};
VideoPlayer.prototype.setCurrentPlaybackTime = function (property) {
	this.currentPlaybackTime = property;
};
VideoPlayer.prototype.setDuration = function (property) {
	this.duration = property;
};
VideoPlayer.prototype.setEndPlaybackTime = function (property) {
	this.endPlaybackTime = property;
};
VideoPlayer.prototype.setFocusable = function (property) {
	this.focusable = property;
};
VideoPlayer.prototype.setFullscreen = function (property) {
	this.fullscreen = property;
};
VideoPlayer.prototype.setHeight = function (property) {
	this.height = property;
};
VideoPlayer.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
VideoPlayer.prototype.setInitialPlaybackTime = function (property) {
	this.initialPlaybackTime = property;
};
VideoPlayer.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
VideoPlayer.prototype.setLayout = function (property) {
	this.layout = property;
};
VideoPlayer.prototype.setLeft = function (property) {
	this.left = property;
};
VideoPlayer.prototype.setMedia = function (property) {
	this.media = property;
};
VideoPlayer.prototype.setMediaControlStyle = function (property) {
	this.mediaControlStyle = property;
};
VideoPlayer.prototype.setMediaTypes = function (property) {
	this.mediaTypes = property;
};
VideoPlayer.prototype.setMovieControlMode = function (property) {
	this.movieControlMode = property;
};
VideoPlayer.prototype.setNaturalSize = function (property) {
	this.naturalSize = property;
};
VideoPlayer.prototype.setOpacity = function (property) {
	this.opacity = property;
};
VideoPlayer.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
VideoPlayer.prototype.setRepeatMode = function (property) {
	this.repeatMode = property;
};
VideoPlayer.prototype.setRight = function (property) {
	this.right = property;
};
VideoPlayer.prototype.setScalingMode = function (property) {
	this.scalingMode = property;
};
VideoPlayer.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
VideoPlayer.prototype.setSourceType = function (property) {
	this.sourceType = property;
};
VideoPlayer.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
VideoPlayer.prototype.setTop = function (property) {
	this.top = property;
};
VideoPlayer.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
VideoPlayer.prototype.setTransform = function (property) {
	this.transform = property;
};
VideoPlayer.prototype.setUrl = function (property) {
	this.url = property;
};
VideoPlayer.prototype.setUseApplicationAudioSession = function (property) {
	this.useApplicationAudioSession = property;
};
VideoPlayer.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
VideoPlayer.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
VideoPlayer.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
VideoPlayer.prototype.setVisible = function (property) {
	this.visible = property;
};
VideoPlayer.prototype.setVolume = function (property) {
	this.volume = property;
};
VideoPlayer.prototype.setWidth = function (property) {
	this.width = property;
};
VideoPlayer.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
VideoPlayer.prototype.show = function () {
};
VideoPlayer.prototype.startLayout = function () {
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
};
module.exports = function (properties) {
	return new VideoPlayer(properties);
};