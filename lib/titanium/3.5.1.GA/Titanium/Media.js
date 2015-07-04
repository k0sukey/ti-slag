function Media(properties) {
	properties = properties || {};
	this.AUDIO_FILEFORMAT_3GP2 = properties.AUDIO_FILEFORMAT_3GP2 || undefined;
	this.AUDIO_FILEFORMAT_3GPP = properties.AUDIO_FILEFORMAT_3GPP || undefined;
	this.AUDIO_FILEFORMAT_AIFF = properties.AUDIO_FILEFORMAT_AIFF || undefined;
	this.AUDIO_FILEFORMAT_AMR = properties.AUDIO_FILEFORMAT_AMR || undefined;
	this.AUDIO_FILEFORMAT_CAF = properties.AUDIO_FILEFORMAT_CAF || undefined;
	this.AUDIO_FILEFORMAT_MP3 = properties.AUDIO_FILEFORMAT_MP3 || undefined;
	this.AUDIO_FILEFORMAT_MP4 = properties.AUDIO_FILEFORMAT_MP4 || undefined;
	this.AUDIO_FILEFORMAT_MP4A = properties.AUDIO_FILEFORMAT_MP4A || undefined;
	this.AUDIO_FILEFORMAT_WAVE = properties.AUDIO_FILEFORMAT_WAVE || undefined;
	this.AUDIO_FORMAT_AAC = properties.AUDIO_FORMAT_AAC || undefined;
	this.AUDIO_FORMAT_ALAW = properties.AUDIO_FORMAT_ALAW || undefined;
	this.AUDIO_FORMAT_APPLE_LOSSLESS = properties.AUDIO_FORMAT_APPLE_LOSSLESS || undefined;
	this.AUDIO_FORMAT_ILBC = properties.AUDIO_FORMAT_ILBC || undefined;
	this.AUDIO_FORMAT_IMA4 = properties.AUDIO_FORMAT_IMA4 || undefined;
	this.AUDIO_FORMAT_LINEAR_PCM = properties.AUDIO_FORMAT_LINEAR_PCM || undefined;
	this.AUDIO_FORMAT_ULAW = properties.AUDIO_FORMAT_ULAW || undefined;
	if (properties.AUDIO_HEADPHONES) {
		throw new Error('Ti.Media.AUDIO_HEADPHONES was deprecated, since 3.4.2');
	}
	if (properties.AUDIO_HEADPHONES_AND_MIC) {
		throw new Error('Ti.Media.AUDIO_HEADPHONES_AND_MIC was deprecated, since 3.4.2');
	}
	if (properties.AUDIO_HEADSET_INOUT) {
		throw new Error('Ti.Media.AUDIO_HEADSET_INOUT was deprecated, since 3.4.2');
	}
	if (properties.AUDIO_LINEOUT) {
		throw new Error('Ti.Media.AUDIO_LINEOUT was deprecated, since 3.4.2');
	}
	if (properties.AUDIO_MICROPHONE) {
		throw new Error('Ti.Media.AUDIO_MICROPHONE was deprecated, since 3.4.2');
	}
	if (properties.AUDIO_MUTED) {
		throw new Error('Ti.Media.AUDIO_MUTED was deprecated, since 3.4.2');
	}
	if (properties.AUDIO_RECEIVER_AND_MIC) {
		throw new Error('Ti.Media.AUDIO_RECEIVER_AND_MIC was deprecated, since 3.4.2');
	}
	this.AUDIO_SESSION_CATEGORY_AMBIENT = properties.AUDIO_SESSION_CATEGORY_AMBIENT || undefined;
	this.AUDIO_SESSION_CATEGORY_PLAYBACK = properties.AUDIO_SESSION_CATEGORY_PLAYBACK || undefined;
	this.AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD = properties.AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD || undefined;
	this.AUDIO_SESSION_CATEGORY_RECORD = properties.AUDIO_SESSION_CATEGORY_RECORD || undefined;
	this.AUDIO_SESSION_CATEGORY_SOLO_AMBIENT = properties.AUDIO_SESSION_CATEGORY_SOLO_AMBIENT || undefined;
	if (properties.AUDIO_SESSION_MODE_AMBIENT) {
		throw new Error('Ti.Media.AUDIO_SESSION_MODE_AMBIENT was deprecated, since 3.4.2');
	}
	if (properties.AUDIO_SESSION_MODE_PLAYBACK) {
		throw new Error('Ti.Media.AUDIO_SESSION_MODE_PLAYBACK was deprecated, since 3.4.2');
	}
	if (properties.AUDIO_SESSION_MODE_PLAY_AND_RECORD) {
		throw new Error('Ti.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD was deprecated, since 3.4.2');
	}
	if (properties.AUDIO_SESSION_MODE_RECORD) {
		throw new Error('Ti.Media.AUDIO_SESSION_MODE_RECORD was deprecated, since 3.4.2');
	}
	if (properties.AUDIO_SESSION_MODE_SOLO_AMBIENT) {
		throw new Error('Ti.Media.AUDIO_SESSION_MODE_SOLO_AMBIENT was deprecated, since 3.4.2');
	}
	this.AUDIO_SESSION_OVERRIDE_ROUTE_NONE = properties.AUDIO_SESSION_OVERRIDE_ROUTE_NONE || undefined;
	this.AUDIO_SESSION_OVERRIDE_ROUTE_SPEAKER = properties.AUDIO_SESSION_OVERRIDE_ROUTE_SPEAKER || undefined;
	this.AUDIO_SESSION_PORT_AIRPLAY = properties.AUDIO_SESSION_PORT_AIRPLAY || undefined;
	this.AUDIO_SESSION_PORT_BLUETOOTHA2DP = properties.AUDIO_SESSION_PORT_BLUETOOTHA2DP || undefined;
	this.AUDIO_SESSION_PORT_BLUETOOTHHFP = properties.AUDIO_SESSION_PORT_BLUETOOTHHFP || undefined;
	this.AUDIO_SESSION_PORT_BLUETOOTHLE = properties.AUDIO_SESSION_PORT_BLUETOOTHLE || undefined;
	this.AUDIO_SESSION_PORT_BUILTINMIC = properties.AUDIO_SESSION_PORT_BUILTINMIC || undefined;
	this.AUDIO_SESSION_PORT_BUILTINRECEIVER = properties.AUDIO_SESSION_PORT_BUILTINRECEIVER || undefined;
	this.AUDIO_SESSION_PORT_BUILTINSPEAKER = properties.AUDIO_SESSION_PORT_BUILTINSPEAKER || undefined;
	this.AUDIO_SESSION_PORT_CARAUDIO = properties.AUDIO_SESSION_PORT_CARAUDIO || undefined;
	this.AUDIO_SESSION_PORT_HDMI = properties.AUDIO_SESSION_PORT_HDMI || undefined;
	this.AUDIO_SESSION_PORT_HEADPHONES = properties.AUDIO_SESSION_PORT_HEADPHONES || undefined;
	this.AUDIO_SESSION_PORT_HEADSETMIC = properties.AUDIO_SESSION_PORT_HEADSETMIC || undefined;
	this.AUDIO_SESSION_PORT_LINEIN = properties.AUDIO_SESSION_PORT_LINEIN || undefined;
	this.AUDIO_SESSION_PORT_LINEOUT = properties.AUDIO_SESSION_PORT_LINEOUT || undefined;
	this.AUDIO_SESSION_PORT_USBAUDIO = properties.AUDIO_SESSION_PORT_USBAUDIO || undefined;
	if (properties.AUDIO_SPEAKER) {
		throw new Error('Ti.Media.AUDIO_SPEAKER was deprecated, since 3.4.2');
	}
	if (properties.AUDIO_UNAVAILABLE) {
		throw new Error('Ti.Media.AUDIO_UNAVAILABLE was deprecated, since 3.4.2');
	}
	if (properties.AUDIO_UNKNOWN) {
		throw new Error('Ti.Media.AUDIO_UNKNOWN was deprecated, since 3.4.2');
	}
	this.CAMERA_FLASH_AUTO = properties.CAMERA_FLASH_AUTO || undefined;
	this.CAMERA_FLASH_OFF = properties.CAMERA_FLASH_OFF || undefined;
	this.CAMERA_FLASH_ON = properties.CAMERA_FLASH_ON || undefined;
	this.CAMERA_FRONT = properties.CAMERA_FRONT || undefined;
	this.CAMERA_REAR = properties.CAMERA_REAR || undefined;
	this.DEVICE_BUSY = properties.DEVICE_BUSY || undefined;
	this.MEDIA_TYPE_PHOTO = properties.MEDIA_TYPE_PHOTO || undefined;
	this.MEDIA_TYPE_VIDEO = properties.MEDIA_TYPE_VIDEO || undefined;
	this.MUSIC_MEDIA_GROUP_ALBUM = properties.MUSIC_MEDIA_GROUP_ALBUM || undefined;
	this.MUSIC_MEDIA_GROUP_ALBUM_ARTIST = properties.MUSIC_MEDIA_GROUP_ALBUM_ARTIST || undefined;
	this.MUSIC_MEDIA_GROUP_ARTIST = properties.MUSIC_MEDIA_GROUP_ARTIST || undefined;
	this.MUSIC_MEDIA_GROUP_COMPOSER = properties.MUSIC_MEDIA_GROUP_COMPOSER || undefined;
	this.MUSIC_MEDIA_GROUP_GENRE = properties.MUSIC_MEDIA_GROUP_GENRE || undefined;
	this.MUSIC_MEDIA_GROUP_PLAYLIST = properties.MUSIC_MEDIA_GROUP_PLAYLIST || undefined;
	this.MUSIC_MEDIA_GROUP_PODCAST_TITLE = properties.MUSIC_MEDIA_GROUP_PODCAST_TITLE || undefined;
	this.MUSIC_MEDIA_GROUP_TITLE = properties.MUSIC_MEDIA_GROUP_TITLE || undefined;
	this.MUSIC_MEDIA_TYPE_ALL = properties.MUSIC_MEDIA_TYPE_ALL || undefined;
	this.MUSIC_MEDIA_TYPE_ANY_AUDIO = properties.MUSIC_MEDIA_TYPE_ANY_AUDIO || undefined;
	this.MUSIC_MEDIA_TYPE_AUDIOBOOK = properties.MUSIC_MEDIA_TYPE_AUDIOBOOK || undefined;
	this.MUSIC_MEDIA_TYPE_MUSIC = properties.MUSIC_MEDIA_TYPE_MUSIC || undefined;
	this.MUSIC_MEDIA_TYPE_PODCAST = properties.MUSIC_MEDIA_TYPE_PODCAST || undefined;
	this.MUSIC_PLAYER_REPEAT_ALL = properties.MUSIC_PLAYER_REPEAT_ALL || undefined;
	this.MUSIC_PLAYER_REPEAT_DEFAULT = properties.MUSIC_PLAYER_REPEAT_DEFAULT || undefined;
	this.MUSIC_PLAYER_REPEAT_NONE = properties.MUSIC_PLAYER_REPEAT_NONE || undefined;
	this.MUSIC_PLAYER_REPEAT_ONE = properties.MUSIC_PLAYER_REPEAT_ONE || undefined;
	this.MUSIC_PLAYER_SHUFFLE_ALBUMS = properties.MUSIC_PLAYER_SHUFFLE_ALBUMS || undefined;
	this.MUSIC_PLAYER_SHUFFLE_DEFAULT = properties.MUSIC_PLAYER_SHUFFLE_DEFAULT || undefined;
	this.MUSIC_PLAYER_SHUFFLE_NONE = properties.MUSIC_PLAYER_SHUFFLE_NONE || undefined;
	this.MUSIC_PLAYER_SHUFFLE_SONGS = properties.MUSIC_PLAYER_SHUFFLE_SONGS || undefined;
	this.MUSIC_PLAYER_STATE_INTERRUPTED = properties.MUSIC_PLAYER_STATE_INTERRUPTED || undefined;
	this.MUSIC_PLAYER_STATE_PAUSED = properties.MUSIC_PLAYER_STATE_PAUSED || undefined;
	this.MUSIC_PLAYER_STATE_PLAYING = properties.MUSIC_PLAYER_STATE_PLAYING || undefined;
	this.MUSIC_PLAYER_STATE_SEEK_BACKWARD = properties.MUSIC_PLAYER_STATE_SEEK_BACKWARD || undefined;
	this.MUSIC_PLAYER_STATE_SEEK_FORWARD = properties.MUSIC_PLAYER_STATE_SEEK_FORWARD || undefined;
	this.MUSIC_PLAYER_STATE_STOPPED = properties.MUSIC_PLAYER_STATE_STOPPED || undefined;
	this.NO_CAMERA = properties.NO_CAMERA || undefined;
	this.NO_VIDEO = properties.NO_VIDEO || undefined;
	this.QUALITY_HIGH = properties.QUALITY_HIGH || undefined;
	this.QUALITY_LOW = properties.QUALITY_LOW || undefined;
	this.QUALITY_MEDIUM = properties.QUALITY_MEDIUM || undefined;
	this.UNKNOWN_ERROR = properties.UNKNOWN_ERROR || undefined;
	this.VIDEO_CONTROL_DEFAULT = properties.VIDEO_CONTROL_DEFAULT || undefined;
	this.VIDEO_CONTROL_EMBEDDED = properties.VIDEO_CONTROL_EMBEDDED || undefined;
	this.VIDEO_CONTROL_FULLSCREEN = properties.VIDEO_CONTROL_FULLSCREEN || undefined;
	this.VIDEO_CONTROL_HIDDEN = properties.VIDEO_CONTROL_HIDDEN || undefined;
	this.VIDEO_CONTROL_NONE = properties.VIDEO_CONTROL_NONE || undefined;
	if (properties.VIDEO_CONTROL_VOLUME_ONLY) {
		throw new Error('Ti.Media.VIDEO_CONTROL_VOLUME_ONLY was deprecated, since 1.8.0');
	}
	this.VIDEO_FINISH_REASON_PLAYBACK_ENDED = properties.VIDEO_FINISH_REASON_PLAYBACK_ENDED || undefined;
	this.VIDEO_FINISH_REASON_PLAYBACK_ERROR = properties.VIDEO_FINISH_REASON_PLAYBACK_ERROR || undefined;
	this.VIDEO_FINISH_REASON_USER_EXITED = properties.VIDEO_FINISH_REASON_USER_EXITED || undefined;
	this.VIDEO_LOAD_STATE_PLAYABLE = properties.VIDEO_LOAD_STATE_PLAYABLE || undefined;
	this.VIDEO_LOAD_STATE_PLAYTHROUGH_OK = properties.VIDEO_LOAD_STATE_PLAYTHROUGH_OK || undefined;
	this.VIDEO_LOAD_STATE_STALLED = properties.VIDEO_LOAD_STATE_STALLED || undefined;
	this.VIDEO_LOAD_STATE_UNKNOWN = properties.VIDEO_LOAD_STATE_UNKNOWN || undefined;
	this.VIDEO_MEDIA_TYPE_AUDIO = properties.VIDEO_MEDIA_TYPE_AUDIO || undefined;
	this.VIDEO_MEDIA_TYPE_NONE = properties.VIDEO_MEDIA_TYPE_NONE || undefined;
	this.VIDEO_MEDIA_TYPE_VIDEO = properties.VIDEO_MEDIA_TYPE_VIDEO || undefined;
	this.VIDEO_PLAYBACK_STATE_INTERRUPTED = properties.VIDEO_PLAYBACK_STATE_INTERRUPTED || undefined;
	this.VIDEO_PLAYBACK_STATE_PAUSED = properties.VIDEO_PLAYBACK_STATE_PAUSED || undefined;
	this.VIDEO_PLAYBACK_STATE_PLAYING = properties.VIDEO_PLAYBACK_STATE_PLAYING || undefined;
	this.VIDEO_PLAYBACK_STATE_SEEKING_BACKWARD = properties.VIDEO_PLAYBACK_STATE_SEEKING_BACKWARD || undefined;
	this.VIDEO_PLAYBACK_STATE_SEEKING_FORWARD = properties.VIDEO_PLAYBACK_STATE_SEEKING_FORWARD || undefined;
	this.VIDEO_PLAYBACK_STATE_STOPPED = properties.VIDEO_PLAYBACK_STATE_STOPPED || undefined;
	this.VIDEO_REPEAT_MODE_NONE = properties.VIDEO_REPEAT_MODE_NONE || undefined;
	this.VIDEO_REPEAT_MODE_ONE = properties.VIDEO_REPEAT_MODE_ONE || undefined;
	this.VIDEO_SCALING_ASPECT_FILL = properties.VIDEO_SCALING_ASPECT_FILL || undefined;
	this.VIDEO_SCALING_ASPECT_FIT = properties.VIDEO_SCALING_ASPECT_FIT || undefined;
	this.VIDEO_SCALING_MODE_FILL = properties.VIDEO_SCALING_MODE_FILL || undefined;
	this.VIDEO_SCALING_NONE = properties.VIDEO_SCALING_NONE || undefined;
	this.VIDEO_SOURCE_TYPE_FILE = properties.VIDEO_SOURCE_TYPE_FILE || undefined;
	this.VIDEO_SOURCE_TYPE_STREAMING = properties.VIDEO_SOURCE_TYPE_STREAMING || undefined;
	this.VIDEO_SOURCE_TYPE_UNKNOWN = properties.VIDEO_SOURCE_TYPE_UNKNOWN || undefined;
	this.VIDEO_TIME_OPTION_EXACT = properties.VIDEO_TIME_OPTION_EXACT || undefined;
	this.VIDEO_TIME_OPTION_NEAREST_KEYFRAME = properties.VIDEO_TIME_OPTION_NEAREST_KEYFRAME || undefined;
	this.apiName = 'Ti.Media';
	this.appMusicPlayer = properties.appMusicPlayer || undefined;
	if (properties.audioLineType) {
		throw new Error('Ti.Media.audioLineType was deprecated, since 3.4.2');
	}
	this.audioPlaying = properties.audioPlaying || undefined;
	this.audioSessionCategory = properties.audioSessionCategory || undefined;
	if (properties.audioSessionMode) {
		throw new Error('Ti.Media.audioSessionMode was deprecated, since 3.4.2');
	}
	this.availableCameraMediaTypes = properties.availableCameraMediaTypes || undefined;
	this.availableCameras = properties.availableCameras || undefined;
	this.availablePhotoGalleryMediaTypes = properties.availablePhotoGalleryMediaTypes || undefined;
	this.availablePhotoMediaTypes = properties.availablePhotoMediaTypes || undefined;
	this.averageMicrophonePower = properties.averageMicrophonePower || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.cameraFlashMode = properties.cameraFlashMode || undefined;
	this.canRecord = properties.canRecord || undefined;
	this.currentRoute = properties.currentRoute || undefined;
	this.isCameraSupported = properties.isCameraSupported || undefined;
	this.peakMicrophonePower = properties.peakMicrophonePower || undefined;
	this.systemMusicPlayer = properties.systemMusicPlayer || undefined;
	this.volume = properties.volume || undefined;
	return this;
}
Media.prototype.addEventListener = function () {
};
Media.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Media.prototype.beep = function () {
};
Media.prototype.createAudioPlayer = function (params) {
	var AudioPlayer = require('./Media/AudioPlayer');
	return AudioPlayer(params);
};
Media.prototype.createAudioRecorder = function (params) {
	var AudioRecorder = require('./Media/AudioRecorder');
	return AudioRecorder(params);
};
Media.prototype.createItem = function (params) {
	var Item = require('./Media/Item');
	return Item(params);
};
Media.prototype.createMusicPlayer = function (params) {
	var MusicPlayer = require('./Media/MusicPlayer');
	return MusicPlayer(params);
};
Media.prototype.createSound = function (params) {
	var Sound = require('./Media/Sound');
	return Sound(params);
};
Media.prototype.createVideoPlayer = function (params) {
	var VideoPlayer = require('./Media/VideoPlayer');
	return VideoPlayer(params);
};
Media.prototype.fireEvent = function () {
};
Media.prototype.getApiName = function () {
	return '';
};
Media.prototype.getAppMusicPlayer = function () {
	return {};
};
Media.prototype.getAudioLineType = function () {
	throw new Error('Ti.Media.getAudioLineType was deprecated, since 3.4.2');
};
Media.prototype.getAudioPlaying = function () {
	return true;
};
Media.prototype.getAudioSessionCategory = function () {
	return 0;
};
Media.prototype.getAudioSessionMode = function () {
	throw new Error('Ti.Media.getAudioSessionMode was deprecated, since 3.4.2');
};
Media.prototype.getAvailableCameraMediaTypes = function () {
	return [];
};
Media.prototype.getAvailableCameras = function () {
	return 0;
};
Media.prototype.getAvailablePhotoGalleryMediaTypes = function () {
	return [];
};
Media.prototype.getAvailablePhotoMediaTypes = function () {
	return [];
};
Media.prototype.getAverageMicrophonePower = function () {
	return 0;
};
Media.prototype.getBubbleParent = function () {
	return true;
};
Media.prototype.getCameraFlashMode = function () {
	return 0;
};
Media.prototype.getCanRecord = function () {
	return true;
};
Media.prototype.getIsCameraSupported = function () {
	return true;
};
Media.prototype.getPeakMicrophonePower = function () {
	return 0;
};
Media.prototype.getSystemMusicPlayer = function () {
	return {};
};
Media.prototype.getVolume = function () {
	return 0;
};
Media.prototype.hideCamera = function () {
};
Media.prototype.hideMusicLibrary = function () {
};
Media.prototype.isMediaTypeSupported = function () {
	return true;
};
Media.prototype.openMusicLibrary = function () {
};
Media.prototype.openPhotoGallery = function () {
};
Media.prototype.previewImage = function () {
};
Media.prototype.queryMusicLibrary = function () {
	return [];
};
Media.prototype.removeEventListener = function () {
};
Media.prototype.requestAuthorization = function () {
};
Media.prototype.saveToPhotoGallery = function () {
};
Media.prototype.setAudioSessionCategory = function () {
};
Media.prototype.setAudioSessionMode = function () {
	throw new Error('Ti.Media.setAudioSessionMode was deprecated, since 3.4.2');
};
Media.prototype.setAvailableCameraMediaTypes = function () {
};
Media.prototype.setAvailablePhotoGalleryMediaTypes = function () {
};
Media.prototype.setAvailablePhotoMediaTypes = function () {
};
Media.prototype.setAverageMicrophonePower = function () {
};
Media.prototype.setBubbleParent = function () {
};
Media.prototype.setCameraFlashMode = function () {
};
Media.prototype.setOverrideAudioRoute = function () {
};
Media.prototype.showCamera = function () {
};
Media.prototype.startMicrophoneMonitor = function () {
};
Media.prototype.stopMicrophoneMonitor = function () {
};
Media.prototype.switchCamera = function () {
};
Media.prototype.takePicture = function () {
};
Media.prototype.takeScreenshot = function () {
};
Media.prototype.vibrate = function () {
};
module.exports = function (properties) {
	return new Media(properties);
};