var crypto = require('crypto');
function VideoPlayer(__SLAG__properties) {
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
			'allowsAirPlay',
			'autoplay',
			'contentURL',
			'currentPlaybackTime',
			'duration',
			'endPlaybackTime',
			'fullscreen',
			'initialPlaybackTime',
			'loadState',
			'media',
			'mediaControlStyle',
			'mediaTypes',
			'movieControlMode',
			'naturalSize',
			'playableDuration',
			'playbackState',
			'playing',
			'repeatMode',
			'scalingMode',
			'sourceType',
			'url',
			'useApplicationAudioSession',
			'volume',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT) {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT) {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Media.VideoPlayer.apiName is read only property');
	}
	this.apiName = 'Ti.Media.VideoPlayer';
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
		throw new Error('Ti.Media.VideoPlayer.animatedCenter is read only property');
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
		throw new Error('Ti.Media.VideoPlayer.children is read only property');
	}
	this.children = [];
	this.height = __SLAG__properties.height || 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	if (__SLAG__properties.rect) {
		throw new Error('Ti.Media.VideoPlayer.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.Media.VideoPlayer.size is read only property');
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
	this.allowsAirPlay = __SLAG__properties.allowsAirPlay || true;
	this.autoplay = __SLAG__properties.autoplay || true;
	if (__SLAG__properties.contentURL) {
		throw new Error('Ti.Media.VideoPlayer.contentURL was deprecated, since 1.4.0');
	}
	this.currentPlaybackTime = __SLAG__properties.currentPlaybackTime || 0;
	this.duration = __SLAG__properties.duration || 0;
	this.endPlaybackTime = __SLAG__properties.endPlaybackTime || 0;
	this.fullscreen = __SLAG__properties.fullscreen || true;
	this.initialPlaybackTime = __SLAG__properties.initialPlaybackTime || 0;
	if (__SLAG__properties.loadState) {
		throw new Error('Ti.Media.VideoPlayer.loadState is read only property');
	}
	this.loadState = 0;
	this.media = __SLAG__properties.media || {};
	this.mediaControlStyle = __SLAG__properties.mediaControlStyle || 0;
	this.mediaTypes = __SLAG__properties.mediaTypes || 0;
	if (__SLAG__properties.movieControlMode) {
		throw new Error('Ti.Media.VideoPlayer.movieControlMode was deprecated, since 1.8.0');
	}
	this.naturalSize = __SLAG__properties.naturalSize || {};
	if (__SLAG__properties.playableDuration) {
		throw new Error('Ti.Media.VideoPlayer.playableDuration is read only property');
	}
	this.playableDuration = 0;
	if (__SLAG__properties.playbackState) {
		throw new Error('Ti.Media.VideoPlayer.playbackState is read only property');
	}
	this.playbackState = 0;
	if (__SLAG__properties.playing) {
		throw new Error('Ti.Media.VideoPlayer.playing is read only property');
	}
	this.playing = true;
	this.repeatMode = __SLAG__properties.repeatMode || 0;
	this.scalingMode = __SLAG__properties.scalingMode || 0;
	this.sourceType = __SLAG__properties.sourceType || 0;
	this.url = __SLAG__properties.url || '';
	if (__SLAG__properties.useApplicationAudioSession) {
		throw new Error('Ti.Media.VideoPlayer.useApplicationAudioSession was deprecated, since 3.5.0');
	}
	this.volume = __SLAG__properties.volume || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
VideoPlayer.prototype.addEventListener = function () {
};
VideoPlayer.prototype.removeEventListener = function () {
};
VideoPlayer.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
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
VideoPlayer.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
VideoPlayer.prototype.animate = function () {
};
VideoPlayer.prototype.hide = function () {
};
VideoPlayer.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
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
	return this.bubbleParent;
};
VideoPlayer.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
VideoPlayer.prototype.getApiName = function () {
	return this.apiName;
};
VideoPlayer.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
VideoPlayer.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
VideoPlayer.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
VideoPlayer.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
VideoPlayer.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
VideoPlayer.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
VideoPlayer.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
VideoPlayer.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
VideoPlayer.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
VideoPlayer.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
VideoPlayer.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
VideoPlayer.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
VideoPlayer.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
VideoPlayer.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
VideoPlayer.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
VideoPlayer.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
VideoPlayer.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
VideoPlayer.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
VideoPlayer.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
VideoPlayer.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
VideoPlayer.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
VideoPlayer.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
VideoPlayer.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
VideoPlayer.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
VideoPlayer.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
VideoPlayer.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
VideoPlayer.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
VideoPlayer.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
VideoPlayer.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
VideoPlayer.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
VideoPlayer.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
VideoPlayer.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
VideoPlayer.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
VideoPlayer.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
VideoPlayer.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
VideoPlayer.prototype.getClipMode = function () {
	return this.clipMode;
};
VideoPlayer.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
VideoPlayer.prototype.getFocusable = function () {
	return this.focusable;
};
VideoPlayer.prototype.setFocusable = function (property) {
	this.focusable = property;
};
VideoPlayer.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
VideoPlayer.prototype.setOverrideCurrentAnimation = function (property) {
	this.overrideCurrentAnimation = property;
};
VideoPlayer.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
VideoPlayer.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
VideoPlayer.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
VideoPlayer.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
VideoPlayer.prototype.getTransform = function () {
	return this.transform;
};
VideoPlayer.prototype.setTransform = function (property) {
	this.transform = property;
};
VideoPlayer.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
VideoPlayer.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
VideoPlayer.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
VideoPlayer.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
VideoPlayer.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
VideoPlayer.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
VideoPlayer.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
VideoPlayer.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
VideoPlayer.prototype.getZIndex = function () {
	return this.zIndex;
};
VideoPlayer.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
VideoPlayer.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
VideoPlayer.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
VideoPlayer.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
VideoPlayer.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
VideoPlayer.prototype.getBorderColor = function () {
	return this.borderColor;
};
VideoPlayer.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
VideoPlayer.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
VideoPlayer.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
VideoPlayer.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
VideoPlayer.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
VideoPlayer.prototype.getBottom = function () {
	return this.bottom;
};
VideoPlayer.prototype.setBottom = function (property) {
	this.bottom = property;
};
VideoPlayer.prototype.getCenter = function () {
	return this.center;
};
VideoPlayer.prototype.setCenter = function (property) {
	this.center = property;
};
VideoPlayer.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
VideoPlayer.prototype.getChildren = function () {
	return this.children;
};
VideoPlayer.prototype.getHeight = function () {
	return this.height;
};
VideoPlayer.prototype.setHeight = function (property) {
	this.height = property;
};
VideoPlayer.prototype.getLayout = function () {
	return this.layout;
};
VideoPlayer.prototype.setLayout = function (property) {
	this.layout = property;
};
VideoPlayer.prototype.getLeft = function () {
	return this.left;
};
VideoPlayer.prototype.setLeft = function (property) {
	this.left = property;
};
VideoPlayer.prototype.getOpacity = function () {
	return this.opacity;
};
VideoPlayer.prototype.setOpacity = function (property) {
	this.opacity = property;
};
VideoPlayer.prototype.getRect = function () {
	return this.rect;
};
VideoPlayer.prototype.getRight = function () {
	return this.right;
};
VideoPlayer.prototype.setRight = function (property) {
	this.right = property;
};
VideoPlayer.prototype.getSize = function () {
	return this.size;
};
VideoPlayer.prototype.getTintColor = function () {
	return this.tintColor;
};
VideoPlayer.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
VideoPlayer.prototype.getTop = function () {
	return this.top;
};
VideoPlayer.prototype.setTop = function (property) {
	this.top = property;
};
VideoPlayer.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
VideoPlayer.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
VideoPlayer.prototype.getVisible = function () {
	return this.visible;
};
VideoPlayer.prototype.setVisible = function (property) {
	this.visible = property;
};
VideoPlayer.prototype.getWidth = function () {
	return this.width;
};
VideoPlayer.prototype.setWidth = function (property) {
	this.width = property;
};
VideoPlayer.prototype.getAllowsAirPlay = function () {
	return this.allowsAirPlay;
};
VideoPlayer.prototype.setAllowsAirPlay = function (property) {
	this.allowsAirPlay = property;
};
VideoPlayer.prototype.getAutoplay = function () {
	return this.autoplay;
};
VideoPlayer.prototype.setAutoplay = function (property) {
	this.autoplay = property;
};
VideoPlayer.prototype.getContentURL = function () {
	throw new Error('Ti.Media.VideoPlayer.getContentURL was deprecated, since 1.4.0');
};
VideoPlayer.prototype.setContentURL = function () {
	throw new Error('Ti.Media.VideoPlayer.setContentURL was deprecated, since 1.4.0');
};
VideoPlayer.prototype.getCurrentPlaybackTime = function () {
	return this.currentPlaybackTime;
};
VideoPlayer.prototype.setCurrentPlaybackTime = function (property) {
	this.currentPlaybackTime = property;
};
VideoPlayer.prototype.getDuration = function () {
	return this.duration;
};
VideoPlayer.prototype.setDuration = function (property) {
	this.duration = property;
};
VideoPlayer.prototype.getEndPlaybackTime = function () {
	return this.endPlaybackTime;
};
VideoPlayer.prototype.setEndPlaybackTime = function (property) {
	this.endPlaybackTime = property;
};
VideoPlayer.prototype.getFullscreen = function () {
	return this.fullscreen;
};
VideoPlayer.prototype.setFullscreen = function (property) {
	this.fullscreen = property;
};
VideoPlayer.prototype.getInitialPlaybackTime = function () {
	return this.initialPlaybackTime;
};
VideoPlayer.prototype.setInitialPlaybackTime = function (property) {
	this.initialPlaybackTime = property;
};
VideoPlayer.prototype.getLoadState = function () {
	return this.loadState;
};
VideoPlayer.prototype.setMedia = function (property) {
	this.media = property;
};
VideoPlayer.prototype.getMediaControlStyle = function () {
	return this.mediaControlStyle;
};
VideoPlayer.prototype.setMediaControlStyle = function (property) {
	this.mediaControlStyle = property;
};
VideoPlayer.prototype.getMediaTypes = function () {
	return this.mediaTypes;
};
VideoPlayer.prototype.setMediaTypes = function (property) {
	this.mediaTypes = property;
};
VideoPlayer.prototype.getMovieControlMode = function () {
	throw new Error('Ti.Media.VideoPlayer.getMovieControlMode was deprecated, since 1.8.0');
};
VideoPlayer.prototype.setMovieControlMode = function () {
	throw new Error('Ti.Media.VideoPlayer.setMovieControlMode was deprecated, since 1.8.0');
};
VideoPlayer.prototype.getNaturalSize = function () {
	return this.naturalSize;
};
VideoPlayer.prototype.setNaturalSize = function (property) {
	this.naturalSize = property;
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
VideoPlayer.prototype.getRepeatMode = function () {
	return this.repeatMode;
};
VideoPlayer.prototype.setRepeatMode = function (property) {
	this.repeatMode = property;
};
VideoPlayer.prototype.getScalingMode = function () {
	return this.scalingMode;
};
VideoPlayer.prototype.setScalingMode = function (property) {
	this.scalingMode = property;
};
VideoPlayer.prototype.getSourceType = function () {
	return this.sourceType;
};
VideoPlayer.prototype.setSourceType = function (property) {
	this.sourceType = property;
};
VideoPlayer.prototype.getUrl = function () {
	return this.url;
};
VideoPlayer.prototype.setUrl = function (property) {
	this.url = property;
};
VideoPlayer.prototype.getUseApplicationAudioSession = function () {
	throw new Error('Ti.Media.VideoPlayer.getUseApplicationAudioSession was deprecated, since 3.5.0');
};
VideoPlayer.prototype.setUseApplicationAudioSession = function () {
	throw new Error('Ti.Media.VideoPlayer.setUseApplicationAudioSession was deprecated, since 3.5.0');
};
VideoPlayer.prototype.getVolume = function () {
	return this.volume;
};
VideoPlayer.prototype.setVolume = function (property) {
	this.volume = property;
};
module.exports = function (properties) {
	return new VideoPlayer(properties);
};