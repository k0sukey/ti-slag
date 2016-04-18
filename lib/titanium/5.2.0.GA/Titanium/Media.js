var crypto = require('crypto');
function Media(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'AUDIO_FILEFORMAT_3GP2',
			'AUDIO_FILEFORMAT_3GPP',
			'AUDIO_FILEFORMAT_AIFF',
			'AUDIO_FILEFORMAT_AMR',
			'AUDIO_FILEFORMAT_CAF',
			'AUDIO_FILEFORMAT_MP3',
			'AUDIO_FILEFORMAT_MP4',
			'AUDIO_FILEFORMAT_MP4A',
			'AUDIO_FILEFORMAT_WAVE',
			'AUDIO_FORMAT_AAC',
			'AUDIO_FORMAT_ALAW',
			'AUDIO_FORMAT_APPLE_LOSSLESS',
			'AUDIO_FORMAT_ILBC',
			'AUDIO_FORMAT_IMA4',
			'AUDIO_FORMAT_LINEAR_PCM',
			'AUDIO_FORMAT_ULAW',
			'AUDIO_HEADPHONES',
			'AUDIO_HEADPHONES_AND_MIC',
			'AUDIO_HEADSET_INOUT',
			'AUDIO_LINEOUT',
			'AUDIO_MICROPHONE',
			'AUDIO_MUTED',
			'AUDIO_RECEIVER_AND_MIC',
			'AUDIO_SESSION_CATEGORY_AMBIENT',
			'AUDIO_SESSION_CATEGORY_PLAYBACK',
			'AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD',
			'AUDIO_SESSION_CATEGORY_RECORD',
			'AUDIO_SESSION_CATEGORY_SOLO_AMBIENT',
			'AUDIO_SESSION_MODE_AMBIENT',
			'AUDIO_SESSION_MODE_PLAYBACK',
			'AUDIO_SESSION_MODE_PLAY_AND_RECORD',
			'AUDIO_SESSION_MODE_RECORD',
			'AUDIO_SESSION_MODE_SOLO_AMBIENT',
			'AUDIO_SESSION_OVERRIDE_ROUTE_NONE',
			'AUDIO_SESSION_OVERRIDE_ROUTE_SPEAKER',
			'AUDIO_SESSION_PORT_LINEIN',
			'AUDIO_SESSION_PORT_BUILTINMIC',
			'AUDIO_SESSION_PORT_HEADSETMIC',
			'AUDIO_SESSION_PORT_LINEOUT',
			'AUDIO_SESSION_PORT_HEADPHONES',
			'AUDIO_SESSION_PORT_BLUETOOTHA2DP',
			'AUDIO_SESSION_PORT_BUILTINRECEIVER',
			'AUDIO_SESSION_PORT_BUILTINSPEAKER',
			'AUDIO_SESSION_PORT_HDMI',
			'AUDIO_SESSION_PORT_AIRPLAY',
			'AUDIO_SESSION_PORT_BLUETOOTHHFP',
			'AUDIO_SESSION_PORT_USBAUDIO',
			'AUDIO_SESSION_PORT_BLUETOOTHLE',
			'AUDIO_SESSION_PORT_CARAUDIO',
			'AUDIO_SPEAKER',
			'AUDIO_UNAVAILABLE',
			'AUDIO_UNKNOWN',
			'CAMERA_FLASH_AUTO',
			'CAMERA_FLASH_OFF',
			'CAMERA_FLASH_ON',
			'CAMERA_FRONT',
			'CAMERA_REAR',
			'CAMERA_AUTHORIZATION_AUTHORIZED',
			'CAMERA_AUTHORIZATION_DENIED',
			'CAMERA_AUTHORIZATION_RESTRICTED',
			'CAMERA_AUTHORIZATION_NOT_DETERMINED',
			'CAMERA_AUTHORIZATION_UNKNOWN',
			'DEVICE_BUSY',
			'MEDIA_TYPE_PHOTO',
			'MEDIA_TYPE_LIVEPHOTO',
			'MEDIA_TYPE_VIDEO',
			'MUSIC_MEDIA_TYPE_ALL',
			'MUSIC_MEDIA_TYPE_ANY_AUDIO',
			'MUSIC_MEDIA_TYPE_AUDIOBOOK',
			'MUSIC_MEDIA_TYPE_MUSIC',
			'MUSIC_MEDIA_TYPE_PODCAST',
			'MUSIC_MEDIA_GROUP_TITLE',
			'MUSIC_MEDIA_GROUP_ALBUM',
			'MUSIC_MEDIA_GROUP_ARTIST',
			'MUSIC_MEDIA_GROUP_ALBUM_ARTIST',
			'MUSIC_MEDIA_GROUP_COMPOSER',
			'MUSIC_MEDIA_GROUP_GENRE',
			'MUSIC_MEDIA_GROUP_PLAYLIST',
			'MUSIC_MEDIA_GROUP_PODCAST_TITLE',
			'MUSIC_PLAYER_REPEAT_ALL',
			'MUSIC_PLAYER_REPEAT_DEFAULT',
			'MUSIC_PLAYER_REPEAT_NONE',
			'MUSIC_PLAYER_REPEAT_ONE',
			'MUSIC_PLAYER_SHUFFLE_ALBUMS',
			'MUSIC_PLAYER_SHUFFLE_DEFAULT',
			'MUSIC_PLAYER_SHUFFLE_NONE',
			'MUSIC_PLAYER_SHUFFLE_SONGS',
			'MUSIC_PLAYER_STATE_INTERRUPTED',
			'MUSIC_PLAYER_STATE_PAUSED',
			'MUSIC_PLAYER_STATE_PLAYING',
			'MUSIC_PLAYER_STATE_SEEK_BACKWARD',
			'MUSIC_PLAYER_STATE_SEEK_FORWARD',
			'MUSIC_PLAYER_STATE_STOPPED',
			'NO_CAMERA',
			'NO_VIDEO',
			'QUALITY_HIGH',
			'QUALITY_LOW',
			'QUALITY_MEDIUM',
			'UNKNOWN_ERROR',
			'VIDEO_CONTROL_DEFAULT',
			'VIDEO_CONTROL_EMBEDDED',
			'VIDEO_CONTROL_FULLSCREEN',
			'VIDEO_CONTROL_HIDDEN',
			'VIDEO_CONTROL_NONE',
			'VIDEO_CONTROL_VOLUME_ONLY',
			'VIDEO_FINISH_REASON_PLAYBACK_ENDED',
			'VIDEO_FINISH_REASON_PLAYBACK_ERROR',
			'VIDEO_FINISH_REASON_USER_EXITED',
			'VIDEO_LOAD_STATE_PLAYABLE',
			'VIDEO_LOAD_STATE_PLAYTHROUGH_OK',
			'VIDEO_LOAD_STATE_STALLED',
			'VIDEO_LOAD_STATE_UNKNOWN',
			'VIDEO_MEDIA_TYPE_AUDIO',
			'VIDEO_MEDIA_TYPE_NONE',
			'VIDEO_MEDIA_TYPE_VIDEO',
			'VIDEO_PLAYBACK_STATE_INTERRUPTED',
			'VIDEO_PLAYBACK_STATE_PAUSED',
			'VIDEO_PLAYBACK_STATE_PLAYING',
			'VIDEO_PLAYBACK_STATE_SEEKING_BACKWARD',
			'VIDEO_PLAYBACK_STATE_SEEKING_FORWARD',
			'VIDEO_PLAYBACK_STATE_STOPPED',
			'VIDEO_REPEAT_MODE_NONE',
			'VIDEO_REPEAT_MODE_ONE',
			'VIDEO_SCALING_ASPECT_FILL',
			'VIDEO_SCALING_ASPECT_FIT',
			'VIDEO_SCALING_MODE_FILL',
			'VIDEO_SCALING_NONE',
			'VIDEO_SOURCE_TYPE_FILE',
			'VIDEO_SOURCE_TYPE_STREAMING',
			'VIDEO_SOURCE_TYPE_UNKNOWN',
			'VIDEO_TIME_OPTION_EXACT',
			'VIDEO_TIME_OPTION_NEAREST_KEYFRAME',
			'VIDEO_TIME_OPTION_CLOSEST_SYNC',
			'VIDEO_TIME_OPTION_NEXT_SYNC',
			'VIDEO_TIME_OPTION_PREVIOUS_SYNC',
			'appMusicPlayer',
			'audioLineType',
			'audioPlaying',
			'audioSessionCategory',
			'audioSessionMode',
			'availableCameras',
			'availableCameraMediaTypes',
			'availablePhotoGalleryMediaTypes',
			'availablePhotoMediaTypes',
			'averageMicrophonePower',
			'cameraFlashMode',
			'canRecord',
			'currentRoute',
			'isCameraSupported',
			'cameraAuthorizationStatus',
			'cameraAuthorization',
			'peakMicrophonePower',
			'systemMusicPlayer',
			'volume',
			'id'
		];
	if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG_NAME in __SLAG_PROPERTIES) {
			if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) {
				throw new Error('Use user custom property ' + __SLAG_NAME);
			}
		}
	} else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG_PROPERTIES.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Media.apiName is read only property');
	}
	this.apiName = 'Ti.Media';
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if (__SLAG_PROPERTIES.AUDIO_FILEFORMAT_3GP2) {
		throw new Error('Ti.Media.AUDIO_FILEFORMAT_3GP2 is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_FILEFORMAT_3GP2 = undefined;
	} else {
		this.AUDIO_FILEFORMAT_3GP2 = 0;
	}
	if (__SLAG_PROPERTIES.AUDIO_FILEFORMAT_3GPP) {
		throw new Error('Ti.Media.AUDIO_FILEFORMAT_3GPP is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_FILEFORMAT_3GPP = undefined;
	} else {
		this.AUDIO_FILEFORMAT_3GPP = 0;
	}
	if (__SLAG_PROPERTIES.AUDIO_FILEFORMAT_AIFF) {
		throw new Error('Ti.Media.AUDIO_FILEFORMAT_AIFF is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_FILEFORMAT_AIFF = undefined;
	} else {
		this.AUDIO_FILEFORMAT_AIFF = 0;
	}
	if (__SLAG_PROPERTIES.AUDIO_FILEFORMAT_AMR) {
		throw new Error('Ti.Media.AUDIO_FILEFORMAT_AMR is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_FILEFORMAT_AMR = undefined;
	} else {
		this.AUDIO_FILEFORMAT_AMR = 0;
	}
	if (__SLAG_PROPERTIES.AUDIO_FILEFORMAT_CAF) {
		throw new Error('Ti.Media.AUDIO_FILEFORMAT_CAF is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_FILEFORMAT_CAF = undefined;
	} else {
		this.AUDIO_FILEFORMAT_CAF = 0;
	}
	if (__SLAG_PROPERTIES.AUDIO_FILEFORMAT_MP3) {
		throw new Error('Ti.Media.AUDIO_FILEFORMAT_MP3 is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_FILEFORMAT_MP3 = undefined;
	} else {
		this.AUDIO_FILEFORMAT_MP3 = 0;
	}
	if (__SLAG_PROPERTIES.AUDIO_FILEFORMAT_MP4) {
		throw new Error('Ti.Media.AUDIO_FILEFORMAT_MP4 is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_FILEFORMAT_MP4 = undefined;
	} else {
		this.AUDIO_FILEFORMAT_MP4 = 0;
	}
	if (__SLAG_PROPERTIES.AUDIO_FILEFORMAT_MP4A) {
		throw new Error('Ti.Media.AUDIO_FILEFORMAT_MP4A is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_FILEFORMAT_MP4A = undefined;
	} else {
		this.AUDIO_FILEFORMAT_MP4A = 0;
	}
	if (__SLAG_PROPERTIES.AUDIO_FILEFORMAT_WAVE) {
		throw new Error('Ti.Media.AUDIO_FILEFORMAT_WAVE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_FILEFORMAT_WAVE = undefined;
	} else {
		this.AUDIO_FILEFORMAT_WAVE = 0;
	}
	if (__SLAG_PROPERTIES.AUDIO_FORMAT_AAC) {
		throw new Error('Ti.Media.AUDIO_FORMAT_AAC is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_FORMAT_AAC = undefined;
	} else {
		this.AUDIO_FORMAT_AAC = 0;
	}
	if (__SLAG_PROPERTIES.AUDIO_FORMAT_ALAW) {
		throw new Error('Ti.Media.AUDIO_FORMAT_ALAW is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_FORMAT_ALAW = undefined;
	} else {
		this.AUDIO_FORMAT_ALAW = 0;
	}
	if (__SLAG_PROPERTIES.AUDIO_FORMAT_APPLE_LOSSLESS) {
		throw new Error('Ti.Media.AUDIO_FORMAT_APPLE_LOSSLESS is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_FORMAT_APPLE_LOSSLESS = undefined;
	} else {
		this.AUDIO_FORMAT_APPLE_LOSSLESS = 0;
	}
	if (__SLAG_PROPERTIES.AUDIO_FORMAT_ILBC) {
		throw new Error('Ti.Media.AUDIO_FORMAT_ILBC is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_FORMAT_ILBC = undefined;
	} else {
		this.AUDIO_FORMAT_ILBC = 0;
	}
	if (__SLAG_PROPERTIES.AUDIO_FORMAT_IMA4) {
		throw new Error('Ti.Media.AUDIO_FORMAT_IMA4 is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_FORMAT_IMA4 = undefined;
	} else {
		this.AUDIO_FORMAT_IMA4 = 0;
	}
	if (__SLAG_PROPERTIES.AUDIO_FORMAT_LINEAR_PCM) {
		throw new Error('Ti.Media.AUDIO_FORMAT_LINEAR_PCM is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_FORMAT_LINEAR_PCM = undefined;
	} else {
		this.AUDIO_FORMAT_LINEAR_PCM = 0;
	}
	if (__SLAG_PROPERTIES.AUDIO_FORMAT_ULAW) {
		throw new Error('Ti.Media.AUDIO_FORMAT_ULAW is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_FORMAT_ULAW = undefined;
	} else {
		this.AUDIO_FORMAT_ULAW = 0;
	}
	if (__SLAG_PROPERTIES.AUDIO_HEADPHONES) {
		throw new Error('Ti.Media.AUDIO_HEADPHONES was deprecated, since 3.4.2');
	}
	if (__SLAG_PROPERTIES.AUDIO_HEADPHONES_AND_MIC) {
		throw new Error('Ti.Media.AUDIO_HEADPHONES_AND_MIC was deprecated, since 3.4.2');
	}
	if (__SLAG_PROPERTIES.AUDIO_HEADSET_INOUT) {
		throw new Error('Ti.Media.AUDIO_HEADSET_INOUT was deprecated, since 3.4.2');
	}
	if (__SLAG_PROPERTIES.AUDIO_LINEOUT) {
		throw new Error('Ti.Media.AUDIO_LINEOUT was deprecated, since 3.4.2');
	}
	if (__SLAG_PROPERTIES.AUDIO_MICROPHONE) {
		throw new Error('Ti.Media.AUDIO_MICROPHONE was deprecated, since 3.4.2');
	}
	if (__SLAG_PROPERTIES.AUDIO_MUTED) {
		throw new Error('Ti.Media.AUDIO_MUTED was deprecated, since 3.4.2');
	}
	if (__SLAG_PROPERTIES.AUDIO_RECEIVER_AND_MIC) {
		throw new Error('Ti.Media.AUDIO_RECEIVER_AND_MIC was deprecated, since 3.4.2');
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_CATEGORY_AMBIENT) {
		throw new Error('Ti.Media.AUDIO_SESSION_CATEGORY_AMBIENT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_SESSION_CATEGORY_AMBIENT = undefined;
	} else {
		this.AUDIO_SESSION_CATEGORY_AMBIENT = '';
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_CATEGORY_PLAYBACK) {
		throw new Error('Ti.Media.AUDIO_SESSION_CATEGORY_PLAYBACK is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_SESSION_CATEGORY_PLAYBACK = undefined;
	} else {
		this.AUDIO_SESSION_CATEGORY_PLAYBACK = '';
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD) {
		throw new Error('Ti.Media.AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD = undefined;
	} else {
		this.AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD = '';
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_CATEGORY_RECORD) {
		throw new Error('Ti.Media.AUDIO_SESSION_CATEGORY_RECORD is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_SESSION_CATEGORY_RECORD = undefined;
	} else {
		this.AUDIO_SESSION_CATEGORY_RECORD = '';
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_CATEGORY_SOLO_AMBIENT) {
		throw new Error('Ti.Media.AUDIO_SESSION_CATEGORY_SOLO_AMBIENT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_SESSION_CATEGORY_SOLO_AMBIENT = undefined;
	} else {
		this.AUDIO_SESSION_CATEGORY_SOLO_AMBIENT = '';
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_MODE_AMBIENT) {
		throw new Error('Ti.Media.AUDIO_SESSION_MODE_AMBIENT was deprecated, since 3.4.2');
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_MODE_PLAYBACK) {
		throw new Error('Ti.Media.AUDIO_SESSION_MODE_PLAYBACK was deprecated, since 3.4.2');
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_MODE_PLAY_AND_RECORD) {
		throw new Error('Ti.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD was deprecated, since 3.4.2');
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_MODE_RECORD) {
		throw new Error('Ti.Media.AUDIO_SESSION_MODE_RECORD was deprecated, since 3.4.2');
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_MODE_SOLO_AMBIENT) {
		throw new Error('Ti.Media.AUDIO_SESSION_MODE_SOLO_AMBIENT was deprecated, since 3.4.2');
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_OVERRIDE_ROUTE_NONE) {
		throw new Error('Ti.Media.AUDIO_SESSION_OVERRIDE_ROUTE_NONE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_SESSION_OVERRIDE_ROUTE_NONE = undefined;
	} else {
		this.AUDIO_SESSION_OVERRIDE_ROUTE_NONE = 0;
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_OVERRIDE_ROUTE_SPEAKER) {
		throw new Error('Ti.Media.AUDIO_SESSION_OVERRIDE_ROUTE_SPEAKER is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_SESSION_OVERRIDE_ROUTE_SPEAKER = undefined;
	} else {
		this.AUDIO_SESSION_OVERRIDE_ROUTE_SPEAKER = 0;
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_PORT_LINEIN) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_LINEIN is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_SESSION_PORT_LINEIN = undefined;
	} else {
		this.AUDIO_SESSION_PORT_LINEIN = '';
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_PORT_BUILTINMIC) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_BUILTINMIC is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_SESSION_PORT_BUILTINMIC = undefined;
	} else {
		this.AUDIO_SESSION_PORT_BUILTINMIC = '';
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_PORT_HEADSETMIC) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_HEADSETMIC is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_SESSION_PORT_HEADSETMIC = undefined;
	} else {
		this.AUDIO_SESSION_PORT_HEADSETMIC = '';
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_PORT_LINEOUT) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_LINEOUT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_SESSION_PORT_LINEOUT = undefined;
	} else {
		this.AUDIO_SESSION_PORT_LINEOUT = '';
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_PORT_HEADPHONES) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_HEADPHONES is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_SESSION_PORT_HEADPHONES = undefined;
	} else {
		this.AUDIO_SESSION_PORT_HEADPHONES = '';
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_PORT_BLUETOOTHA2DP) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_BLUETOOTHA2DP is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_SESSION_PORT_BLUETOOTHA2DP = undefined;
	} else {
		this.AUDIO_SESSION_PORT_BLUETOOTHA2DP = '';
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_PORT_BUILTINRECEIVER) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_BUILTINRECEIVER is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_SESSION_PORT_BUILTINRECEIVER = undefined;
	} else {
		this.AUDIO_SESSION_PORT_BUILTINRECEIVER = '';
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_PORT_BUILTINSPEAKER) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_BUILTINSPEAKER is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_SESSION_PORT_BUILTINSPEAKER = undefined;
	} else {
		this.AUDIO_SESSION_PORT_BUILTINSPEAKER = '';
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_PORT_HDMI) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_HDMI is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_SESSION_PORT_HDMI = undefined;
	} else {
		this.AUDIO_SESSION_PORT_HDMI = '';
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_PORT_AIRPLAY) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_AIRPLAY is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_SESSION_PORT_AIRPLAY = undefined;
	} else {
		this.AUDIO_SESSION_PORT_AIRPLAY = '';
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_PORT_BLUETOOTHHFP) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_BLUETOOTHHFP is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_SESSION_PORT_BLUETOOTHHFP = undefined;
	} else {
		this.AUDIO_SESSION_PORT_BLUETOOTHHFP = '';
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_PORT_USBAUDIO) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_USBAUDIO is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_SESSION_PORT_USBAUDIO = undefined;
	} else {
		this.AUDIO_SESSION_PORT_USBAUDIO = '';
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_PORT_BLUETOOTHLE) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_BLUETOOTHLE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_SESSION_PORT_BLUETOOTHLE = undefined;
	} else {
		this.AUDIO_SESSION_PORT_BLUETOOTHLE = '';
	}
	if (__SLAG_PROPERTIES.AUDIO_SESSION_PORT_CARAUDIO) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_CARAUDIO is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.AUDIO_SESSION_PORT_CARAUDIO = undefined;
	} else {
		this.AUDIO_SESSION_PORT_CARAUDIO = '';
	}
	if (__SLAG_PROPERTIES.AUDIO_SPEAKER) {
		throw new Error('Ti.Media.AUDIO_SPEAKER was deprecated, since 3.4.2');
	}
	if (__SLAG_PROPERTIES.AUDIO_UNAVAILABLE) {
		throw new Error('Ti.Media.AUDIO_UNAVAILABLE was deprecated, since 3.4.2');
	}
	if (__SLAG_PROPERTIES.AUDIO_UNKNOWN) {
		throw new Error('Ti.Media.AUDIO_UNKNOWN was deprecated, since 3.4.2');
	}
	if (__SLAG_PROPERTIES.CAMERA_FLASH_AUTO) {
		throw new Error('Ti.Media.CAMERA_FLASH_AUTO is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CAMERA_FLASH_AUTO = undefined;
	} else {
		this.CAMERA_FLASH_AUTO = 0;
	}
	if (__SLAG_PROPERTIES.CAMERA_FLASH_OFF) {
		throw new Error('Ti.Media.CAMERA_FLASH_OFF is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CAMERA_FLASH_OFF = undefined;
	} else {
		this.CAMERA_FLASH_OFF = 0;
	}
	if (__SLAG_PROPERTIES.CAMERA_FLASH_ON) {
		throw new Error('Ti.Media.CAMERA_FLASH_ON is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CAMERA_FLASH_ON = undefined;
	} else {
		this.CAMERA_FLASH_ON = 0;
	}
	if (__SLAG_PROPERTIES.CAMERA_FRONT) {
		throw new Error('Ti.Media.CAMERA_FRONT is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CAMERA_FRONT = undefined;
	} else {
		this.CAMERA_FRONT = 0;
	}
	if (__SLAG_PROPERTIES.CAMERA_REAR) {
		throw new Error('Ti.Media.CAMERA_REAR is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CAMERA_REAR = undefined;
	} else {
		this.CAMERA_REAR = 0;
	}
	if (__SLAG_PROPERTIES.CAMERA_AUTHORIZATION_AUTHORIZED) {
		throw new Error('Ti.Media.CAMERA_AUTHORIZATION_AUTHORIZED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CAMERA_AUTHORIZATION_AUTHORIZED = undefined;
	} else {
		this.CAMERA_AUTHORIZATION_AUTHORIZED = 0;
	}
	if (__SLAG_PROPERTIES.CAMERA_AUTHORIZATION_DENIED) {
		throw new Error('Ti.Media.CAMERA_AUTHORIZATION_DENIED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CAMERA_AUTHORIZATION_DENIED = undefined;
	} else {
		this.CAMERA_AUTHORIZATION_DENIED = 0;
	}
	if (__SLAG_PROPERTIES.CAMERA_AUTHORIZATION_RESTRICTED) {
		throw new Error('Ti.Media.CAMERA_AUTHORIZATION_RESTRICTED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CAMERA_AUTHORIZATION_RESTRICTED = undefined;
	} else {
		this.CAMERA_AUTHORIZATION_RESTRICTED = 0;
	}
	if (__SLAG_PROPERTIES.CAMERA_AUTHORIZATION_NOT_DETERMINED) {
		throw new Error('Ti.Media.CAMERA_AUTHORIZATION_NOT_DETERMINED was deprecated, since 5.2.0');
	}
	if (__SLAG_PROPERTIES.CAMERA_AUTHORIZATION_UNKNOWN) {
		throw new Error('Ti.Media.CAMERA_AUTHORIZATION_UNKNOWN is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CAMERA_AUTHORIZATION_UNKNOWN = undefined;
	} else {
		this.CAMERA_AUTHORIZATION_UNKNOWN = 0;
	}
	if (__SLAG_PROPERTIES.DEVICE_BUSY) {
		throw new Error('Ti.Media.DEVICE_BUSY is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DEVICE_BUSY = undefined;
	} else {
		this.DEVICE_BUSY = 0;
	}
	if (__SLAG_PROPERTIES.MEDIA_TYPE_PHOTO) {
		throw new Error('Ti.Media.MEDIA_TYPE_PHOTO is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MEDIA_TYPE_PHOTO = undefined;
	} else {
		this.MEDIA_TYPE_PHOTO = '';
	}
	if (__SLAG_PROPERTIES.MEDIA_TYPE_LIVEPHOTO) {
		throw new Error('Ti.Media.MEDIA_TYPE_LIVEPHOTO is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MEDIA_TYPE_LIVEPHOTO = undefined;
	} else {
		this.MEDIA_TYPE_LIVEPHOTO = '';
	}
	if (__SLAG_PROPERTIES.MEDIA_TYPE_VIDEO) {
		throw new Error('Ti.Media.MEDIA_TYPE_VIDEO is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MEDIA_TYPE_VIDEO = undefined;
	} else {
		this.MEDIA_TYPE_VIDEO = '';
	}
	if (__SLAG_PROPERTIES.MUSIC_MEDIA_TYPE_ALL) {
		throw new Error('Ti.Media.MUSIC_MEDIA_TYPE_ALL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_MEDIA_TYPE_ALL = undefined;
	} else {
		this.MUSIC_MEDIA_TYPE_ALL = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_MEDIA_TYPE_ANY_AUDIO) {
		throw new Error('Ti.Media.MUSIC_MEDIA_TYPE_ANY_AUDIO is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_MEDIA_TYPE_ANY_AUDIO = undefined;
	} else {
		this.MUSIC_MEDIA_TYPE_ANY_AUDIO = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_MEDIA_TYPE_AUDIOBOOK) {
		throw new Error('Ti.Media.MUSIC_MEDIA_TYPE_AUDIOBOOK is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_MEDIA_TYPE_AUDIOBOOK = undefined;
	} else {
		this.MUSIC_MEDIA_TYPE_AUDIOBOOK = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_MEDIA_TYPE_MUSIC) {
		throw new Error('Ti.Media.MUSIC_MEDIA_TYPE_MUSIC is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_MEDIA_TYPE_MUSIC = undefined;
	} else {
		this.MUSIC_MEDIA_TYPE_MUSIC = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_MEDIA_TYPE_PODCAST) {
		throw new Error('Ti.Media.MUSIC_MEDIA_TYPE_PODCAST is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_MEDIA_TYPE_PODCAST = undefined;
	} else {
		this.MUSIC_MEDIA_TYPE_PODCAST = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_MEDIA_GROUP_TITLE) {
		throw new Error('Ti.Media.MUSIC_MEDIA_GROUP_TITLE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_MEDIA_GROUP_TITLE = undefined;
	} else {
		this.MUSIC_MEDIA_GROUP_TITLE = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_MEDIA_GROUP_ALBUM) {
		throw new Error('Ti.Media.MUSIC_MEDIA_GROUP_ALBUM is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_MEDIA_GROUP_ALBUM = undefined;
	} else {
		this.MUSIC_MEDIA_GROUP_ALBUM = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_MEDIA_GROUP_ARTIST) {
		throw new Error('Ti.Media.MUSIC_MEDIA_GROUP_ARTIST is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_MEDIA_GROUP_ARTIST = undefined;
	} else {
		this.MUSIC_MEDIA_GROUP_ARTIST = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_MEDIA_GROUP_ALBUM_ARTIST) {
		throw new Error('Ti.Media.MUSIC_MEDIA_GROUP_ALBUM_ARTIST is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_MEDIA_GROUP_ALBUM_ARTIST = undefined;
	} else {
		this.MUSIC_MEDIA_GROUP_ALBUM_ARTIST = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_MEDIA_GROUP_COMPOSER) {
		throw new Error('Ti.Media.MUSIC_MEDIA_GROUP_COMPOSER is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_MEDIA_GROUP_COMPOSER = undefined;
	} else {
		this.MUSIC_MEDIA_GROUP_COMPOSER = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_MEDIA_GROUP_GENRE) {
		throw new Error('Ti.Media.MUSIC_MEDIA_GROUP_GENRE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_MEDIA_GROUP_GENRE = undefined;
	} else {
		this.MUSIC_MEDIA_GROUP_GENRE = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_MEDIA_GROUP_PLAYLIST) {
		throw new Error('Ti.Media.MUSIC_MEDIA_GROUP_PLAYLIST is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_MEDIA_GROUP_PLAYLIST = undefined;
	} else {
		this.MUSIC_MEDIA_GROUP_PLAYLIST = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_MEDIA_GROUP_PODCAST_TITLE) {
		throw new Error('Ti.Media.MUSIC_MEDIA_GROUP_PODCAST_TITLE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_MEDIA_GROUP_PODCAST_TITLE = undefined;
	} else {
		this.MUSIC_MEDIA_GROUP_PODCAST_TITLE = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_PLAYER_REPEAT_ALL) {
		throw new Error('Ti.Media.MUSIC_PLAYER_REPEAT_ALL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_PLAYER_REPEAT_ALL = undefined;
	} else {
		this.MUSIC_PLAYER_REPEAT_ALL = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_PLAYER_REPEAT_DEFAULT) {
		throw new Error('Ti.Media.MUSIC_PLAYER_REPEAT_DEFAULT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_PLAYER_REPEAT_DEFAULT = undefined;
	} else {
		this.MUSIC_PLAYER_REPEAT_DEFAULT = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_PLAYER_REPEAT_NONE) {
		throw new Error('Ti.Media.MUSIC_PLAYER_REPEAT_NONE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_PLAYER_REPEAT_NONE = undefined;
	} else {
		this.MUSIC_PLAYER_REPEAT_NONE = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_PLAYER_REPEAT_ONE) {
		throw new Error('Ti.Media.MUSIC_PLAYER_REPEAT_ONE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_PLAYER_REPEAT_ONE = undefined;
	} else {
		this.MUSIC_PLAYER_REPEAT_ONE = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_PLAYER_SHUFFLE_ALBUMS) {
		throw new Error('Ti.Media.MUSIC_PLAYER_SHUFFLE_ALBUMS is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_PLAYER_SHUFFLE_ALBUMS = undefined;
	} else {
		this.MUSIC_PLAYER_SHUFFLE_ALBUMS = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_PLAYER_SHUFFLE_DEFAULT) {
		throw new Error('Ti.Media.MUSIC_PLAYER_SHUFFLE_DEFAULT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_PLAYER_SHUFFLE_DEFAULT = undefined;
	} else {
		this.MUSIC_PLAYER_SHUFFLE_DEFAULT = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_PLAYER_SHUFFLE_NONE) {
		throw new Error('Ti.Media.MUSIC_PLAYER_SHUFFLE_NONE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_PLAYER_SHUFFLE_NONE = undefined;
	} else {
		this.MUSIC_PLAYER_SHUFFLE_NONE = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_PLAYER_SHUFFLE_SONGS) {
		throw new Error('Ti.Media.MUSIC_PLAYER_SHUFFLE_SONGS is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_PLAYER_SHUFFLE_SONGS = undefined;
	} else {
		this.MUSIC_PLAYER_SHUFFLE_SONGS = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_PLAYER_STATE_INTERRUPTED) {
		throw new Error('Ti.Media.MUSIC_PLAYER_STATE_INTERRUPTED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_PLAYER_STATE_INTERRUPTED = undefined;
	} else {
		this.MUSIC_PLAYER_STATE_INTERRUPTED = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_PLAYER_STATE_PAUSED) {
		throw new Error('Ti.Media.MUSIC_PLAYER_STATE_PAUSED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_PLAYER_STATE_PAUSED = undefined;
	} else {
		this.MUSIC_PLAYER_STATE_PAUSED = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_PLAYER_STATE_PLAYING) {
		throw new Error('Ti.Media.MUSIC_PLAYER_STATE_PLAYING is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_PLAYER_STATE_PLAYING = undefined;
	} else {
		this.MUSIC_PLAYER_STATE_PLAYING = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_PLAYER_STATE_SEEK_BACKWARD) {
		throw new Error('Ti.Media.MUSIC_PLAYER_STATE_SEEK_BACKWARD is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_PLAYER_STATE_SEEK_BACKWARD = undefined;
	} else {
		this.MUSIC_PLAYER_STATE_SEEK_BACKWARD = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_PLAYER_STATE_SEEK_FORWARD) {
		throw new Error('Ti.Media.MUSIC_PLAYER_STATE_SEEK_FORWARD is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_PLAYER_STATE_SEEK_FORWARD = undefined;
	} else {
		this.MUSIC_PLAYER_STATE_SEEK_FORWARD = 0;
	}
	if (__SLAG_PROPERTIES.MUSIC_PLAYER_STATE_STOPPED) {
		throw new Error('Ti.Media.MUSIC_PLAYER_STATE_STOPPED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MUSIC_PLAYER_STATE_STOPPED = undefined;
	} else {
		this.MUSIC_PLAYER_STATE_STOPPED = 0;
	}
	if (__SLAG_PROPERTIES.NO_CAMERA) {
		throw new Error('Ti.Media.NO_CAMERA is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.NO_CAMERA = undefined;
	} else {
		this.NO_CAMERA = 0;
	}
	if (__SLAG_PROPERTIES.NO_VIDEO) {
		throw new Error('Ti.Media.NO_VIDEO is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.NO_VIDEO = undefined;
	} else {
		this.NO_VIDEO = 0;
	}
	if (__SLAG_PROPERTIES.QUALITY_HIGH) {
		throw new Error('Ti.Media.QUALITY_HIGH is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.QUALITY_HIGH = undefined;
	} else {
		this.QUALITY_HIGH = 0;
	}
	if (__SLAG_PROPERTIES.QUALITY_LOW) {
		throw new Error('Ti.Media.QUALITY_LOW is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.QUALITY_LOW = undefined;
	} else {
		this.QUALITY_LOW = 0;
	}
	if (__SLAG_PROPERTIES.QUALITY_MEDIUM) {
		throw new Error('Ti.Media.QUALITY_MEDIUM is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.QUALITY_MEDIUM = undefined;
	} else {
		this.QUALITY_MEDIUM = 0;
	}
	if (__SLAG_PROPERTIES.UNKNOWN_ERROR) {
		throw new Error('Ti.Media.UNKNOWN_ERROR is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.UNKNOWN_ERROR = undefined;
	} else {
		this.UNKNOWN_ERROR = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_CONTROL_DEFAULT) {
		throw new Error('Ti.Media.VIDEO_CONTROL_DEFAULT is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_CONTROL_DEFAULT = undefined;
	} else {
		this.VIDEO_CONTROL_DEFAULT = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_CONTROL_EMBEDDED) {
		throw new Error('Ti.Media.VIDEO_CONTROL_EMBEDDED is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_CONTROL_EMBEDDED = undefined;
	} else {
		this.VIDEO_CONTROL_EMBEDDED = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_CONTROL_FULLSCREEN) {
		throw new Error('Ti.Media.VIDEO_CONTROL_FULLSCREEN is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_CONTROL_FULLSCREEN = undefined;
	} else {
		this.VIDEO_CONTROL_FULLSCREEN = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_CONTROL_HIDDEN) {
		throw new Error('Ti.Media.VIDEO_CONTROL_HIDDEN is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_CONTROL_HIDDEN = undefined;
	} else {
		this.VIDEO_CONTROL_HIDDEN = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_CONTROL_NONE) {
		throw new Error('Ti.Media.VIDEO_CONTROL_NONE is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_CONTROL_NONE = undefined;
	} else {
		this.VIDEO_CONTROL_NONE = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_CONTROL_VOLUME_ONLY) {
		throw new Error('Ti.Media.VIDEO_CONTROL_VOLUME_ONLY was deprecated, since 1.8.0');
	}
	if (__SLAG_PROPERTIES.VIDEO_FINISH_REASON_PLAYBACK_ENDED) {
		throw new Error('Ti.Media.VIDEO_FINISH_REASON_PLAYBACK_ENDED is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_FINISH_REASON_PLAYBACK_ENDED = undefined;
	} else {
		this.VIDEO_FINISH_REASON_PLAYBACK_ENDED = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_FINISH_REASON_PLAYBACK_ERROR) {
		throw new Error('Ti.Media.VIDEO_FINISH_REASON_PLAYBACK_ERROR is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_FINISH_REASON_PLAYBACK_ERROR = undefined;
	} else {
		this.VIDEO_FINISH_REASON_PLAYBACK_ERROR = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_FINISH_REASON_USER_EXITED) {
		throw new Error('Ti.Media.VIDEO_FINISH_REASON_USER_EXITED is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_FINISH_REASON_USER_EXITED = undefined;
	} else {
		this.VIDEO_FINISH_REASON_USER_EXITED = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_LOAD_STATE_PLAYABLE) {
		throw new Error('Ti.Media.VIDEO_LOAD_STATE_PLAYABLE is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_LOAD_STATE_PLAYABLE = undefined;
	} else {
		this.VIDEO_LOAD_STATE_PLAYABLE = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_LOAD_STATE_PLAYTHROUGH_OK) {
		throw new Error('Ti.Media.VIDEO_LOAD_STATE_PLAYTHROUGH_OK is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_LOAD_STATE_PLAYTHROUGH_OK = undefined;
	} else {
		this.VIDEO_LOAD_STATE_PLAYTHROUGH_OK = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_LOAD_STATE_STALLED) {
		throw new Error('Ti.Media.VIDEO_LOAD_STATE_STALLED is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_LOAD_STATE_STALLED = undefined;
	} else {
		this.VIDEO_LOAD_STATE_STALLED = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_LOAD_STATE_UNKNOWN) {
		throw new Error('Ti.Media.VIDEO_LOAD_STATE_UNKNOWN is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_LOAD_STATE_UNKNOWN = undefined;
	} else {
		this.VIDEO_LOAD_STATE_UNKNOWN = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_MEDIA_TYPE_AUDIO) {
		throw new Error('Ti.Media.VIDEO_MEDIA_TYPE_AUDIO is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_MEDIA_TYPE_AUDIO = undefined;
	} else {
		this.VIDEO_MEDIA_TYPE_AUDIO = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_MEDIA_TYPE_NONE) {
		throw new Error('Ti.Media.VIDEO_MEDIA_TYPE_NONE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_MEDIA_TYPE_NONE = undefined;
	} else {
		this.VIDEO_MEDIA_TYPE_NONE = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_MEDIA_TYPE_VIDEO) {
		throw new Error('Ti.Media.VIDEO_MEDIA_TYPE_VIDEO is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_MEDIA_TYPE_VIDEO = undefined;
	} else {
		this.VIDEO_MEDIA_TYPE_VIDEO = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_PLAYBACK_STATE_INTERRUPTED) {
		throw new Error('Ti.Media.VIDEO_PLAYBACK_STATE_INTERRUPTED is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_PLAYBACK_STATE_INTERRUPTED = undefined;
	} else {
		this.VIDEO_PLAYBACK_STATE_INTERRUPTED = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_PLAYBACK_STATE_PAUSED) {
		throw new Error('Ti.Media.VIDEO_PLAYBACK_STATE_PAUSED is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_PLAYBACK_STATE_PAUSED = undefined;
	} else {
		this.VIDEO_PLAYBACK_STATE_PAUSED = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_PLAYBACK_STATE_PLAYING) {
		throw new Error('Ti.Media.VIDEO_PLAYBACK_STATE_PLAYING is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_PLAYBACK_STATE_PLAYING = undefined;
	} else {
		this.VIDEO_PLAYBACK_STATE_PLAYING = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_PLAYBACK_STATE_SEEKING_BACKWARD) {
		throw new Error('Ti.Media.VIDEO_PLAYBACK_STATE_SEEKING_BACKWARD is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_PLAYBACK_STATE_SEEKING_BACKWARD = undefined;
	} else {
		this.VIDEO_PLAYBACK_STATE_SEEKING_BACKWARD = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_PLAYBACK_STATE_SEEKING_FORWARD) {
		throw new Error('Ti.Media.VIDEO_PLAYBACK_STATE_SEEKING_FORWARD is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_PLAYBACK_STATE_SEEKING_FORWARD = undefined;
	} else {
		this.VIDEO_PLAYBACK_STATE_SEEKING_FORWARD = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_PLAYBACK_STATE_STOPPED) {
		throw new Error('Ti.Media.VIDEO_PLAYBACK_STATE_STOPPED is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_PLAYBACK_STATE_STOPPED = undefined;
	} else {
		this.VIDEO_PLAYBACK_STATE_STOPPED = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_REPEAT_MODE_NONE) {
		throw new Error('Ti.Media.VIDEO_REPEAT_MODE_NONE is read only property');
	}
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_REPEAT_MODE_NONE = undefined;
	} else {
		this.VIDEO_REPEAT_MODE_NONE = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_REPEAT_MODE_ONE) {
		throw new Error('Ti.Media.VIDEO_REPEAT_MODE_ONE is read only property');
	}
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_REPEAT_MODE_ONE = undefined;
	} else {
		this.VIDEO_REPEAT_MODE_ONE = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_SCALING_ASPECT_FILL) {
		throw new Error('Ti.Media.VIDEO_SCALING_ASPECT_FILL is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_SCALING_ASPECT_FILL = undefined;
	} else {
		this.VIDEO_SCALING_ASPECT_FILL = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_SCALING_ASPECT_FIT) {
		throw new Error('Ti.Media.VIDEO_SCALING_ASPECT_FIT is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_SCALING_ASPECT_FIT = undefined;
	} else {
		this.VIDEO_SCALING_ASPECT_FIT = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_SCALING_MODE_FILL) {
		throw new Error('Ti.Media.VIDEO_SCALING_MODE_FILL is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_SCALING_MODE_FILL = undefined;
	} else {
		this.VIDEO_SCALING_MODE_FILL = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_SCALING_NONE) {
		throw new Error('Ti.Media.VIDEO_SCALING_NONE is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_SCALING_NONE = undefined;
	} else {
		this.VIDEO_SCALING_NONE = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_SOURCE_TYPE_FILE) {
		throw new Error('Ti.Media.VIDEO_SOURCE_TYPE_FILE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_SOURCE_TYPE_FILE = undefined;
	} else {
		this.VIDEO_SOURCE_TYPE_FILE = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_SOURCE_TYPE_STREAMING) {
		throw new Error('Ti.Media.VIDEO_SOURCE_TYPE_STREAMING is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_SOURCE_TYPE_STREAMING = undefined;
	} else {
		this.VIDEO_SOURCE_TYPE_STREAMING = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_SOURCE_TYPE_UNKNOWN) {
		throw new Error('Ti.Media.VIDEO_SOURCE_TYPE_UNKNOWN is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_SOURCE_TYPE_UNKNOWN = undefined;
	} else {
		this.VIDEO_SOURCE_TYPE_UNKNOWN = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_TIME_OPTION_EXACT) {
		throw new Error('Ti.Media.VIDEO_TIME_OPTION_EXACT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_TIME_OPTION_EXACT = undefined;
	} else {
		this.VIDEO_TIME_OPTION_EXACT = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_TIME_OPTION_NEAREST_KEYFRAME) {
		throw new Error('Ti.Media.VIDEO_TIME_OPTION_NEAREST_KEYFRAME is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_TIME_OPTION_NEAREST_KEYFRAME = undefined;
	} else {
		this.VIDEO_TIME_OPTION_NEAREST_KEYFRAME = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_TIME_OPTION_CLOSEST_SYNC) {
		throw new Error('Ti.Media.VIDEO_TIME_OPTION_CLOSEST_SYNC is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_TIME_OPTION_CLOSEST_SYNC = undefined;
	} else {
		this.VIDEO_TIME_OPTION_CLOSEST_SYNC = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_TIME_OPTION_NEXT_SYNC) {
		throw new Error('Ti.Media.VIDEO_TIME_OPTION_NEXT_SYNC is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_TIME_OPTION_NEXT_SYNC = undefined;
	} else {
		this.VIDEO_TIME_OPTION_NEXT_SYNC = 0;
	}
	if (__SLAG_PROPERTIES.VIDEO_TIME_OPTION_PREVIOUS_SYNC) {
		throw new Error('Ti.Media.VIDEO_TIME_OPTION_PREVIOUS_SYNC is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.VIDEO_TIME_OPTION_PREVIOUS_SYNC = undefined;
	} else {
		this.VIDEO_TIME_OPTION_PREVIOUS_SYNC = 0;
	}
	if (__SLAG_PROPERTIES.appMusicPlayer) {
		throw new Error('Ti.Media.appMusicPlayer is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.appMusicPlayer = undefined;
	} else {
		this.appMusicPlayer = {};
	}
	if (__SLAG_PROPERTIES.audioLineType) {
		throw new Error('Ti.Media.audioLineType was deprecated, since 3.4.2');
	}
	if (__SLAG_PROPERTIES.audioPlaying) {
		throw new Error('Ti.Media.audioPlaying is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.audioPlaying = undefined;
	} else {
		this.audioPlaying = true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.audioSessionCategory = undefined;
	} else {
		this.audioSessionCategory = __SLAG_PROPERTIES.audioSessionCategory || 0;
	}
	if (__SLAG_PROPERTIES.audioSessionMode) {
		throw new Error('Ti.Media.audioSessionMode was deprecated, since 3.4.2');
	}
	if (__SLAG_PROPERTIES.availableCameras) {
		throw new Error('Ti.Media.availableCameras is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.availableCameras = undefined;
	} else {
		this.availableCameras = 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.availableCameraMediaTypes = undefined;
	} else {
		this.availableCameraMediaTypes = __SLAG_PROPERTIES.availableCameraMediaTypes || [];
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.availablePhotoGalleryMediaTypes = undefined;
	} else {
		this.availablePhotoGalleryMediaTypes = __SLAG_PROPERTIES.availablePhotoGalleryMediaTypes || [];
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.availablePhotoMediaTypes = undefined;
	} else {
		this.availablePhotoMediaTypes = __SLAG_PROPERTIES.availablePhotoMediaTypes || [];
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.averageMicrophonePower = undefined;
	} else {
		this.averageMicrophonePower = __SLAG_PROPERTIES.averageMicrophonePower || 0;
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.cameraFlashMode = undefined;
	} else {
		this.cameraFlashMode = __SLAG_PROPERTIES.cameraFlashMode || 0;
	}
	if (__SLAG_PROPERTIES.canRecord) {
		throw new Error('Ti.Media.canRecord is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.canRecord = undefined;
	} else {
		this.canRecord = true;
	}
	if (__SLAG_PROPERTIES.currentRoute) {
		throw new Error('Ti.Media.currentRoute is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.currentRoute = undefined;
	} else {
		this.currentRoute = {};
	}
	if (__SLAG_PROPERTIES.isCameraSupported) {
		throw new Error('Ti.Media.isCameraSupported is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.isCameraSupported = undefined;
	} else {
		this.isCameraSupported = true;
	}
	if (__SLAG_PROPERTIES.cameraAuthorizationStatus) {
		throw new Error('Ti.Media.cameraAuthorizationStatus was deprecated, since 5.2.0');
	}
	if (__SLAG_PROPERTIES.cameraAuthorization) {
		throw new Error('Ti.Media.cameraAuthorization is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.cameraAuthorization = undefined;
	} else {
		this.cameraAuthorization = 0;
	}
	if (__SLAG_PROPERTIES.peakMicrophonePower) {
		throw new Error('Ti.Media.peakMicrophonePower is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.peakMicrophonePower = undefined;
	} else {
		this.peakMicrophonePower = 0;
	}
	if (__SLAG_PROPERTIES.systemMusicPlayer) {
		throw new Error('Ti.Media.systemMusicPlayer is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.systemMusicPlayer = undefined;
	} else {
		this.systemMusicPlayer = {};
	}
	if (__SLAG_PROPERTIES.volume) {
		throw new Error('Ti.Media.volume is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.volume = undefined;
	} else {
		this.volume = 0;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Media.prototype.addEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Media.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Media.prototype.fireEvent = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Media.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Media.prototype.beep = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Media.prototype.hideCamera = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Media.prototype.hideMusicLibrary = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Media.prototype.isMediaTypeSupported = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Media.prototype.openMusicLibrary = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Media.prototype.openPhotoGallery = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Media.prototype.previewImage = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Media.prototype.saveToPhotoGallery = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Media.prototype.setOverrideAudioRoute = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Media.prototype.showCamera = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Media.prototype.queryMusicLibrary = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return [];
};
Media.prototype.startMicrophoneMonitor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Media.prototype.stopMicrophoneMonitor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Media.prototype.takePicture = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Media.prototype.startVideoCapture = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Media.prototype.stopVideoCapture = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Media.prototype.switchCamera = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Media.prototype.hasCameraPermissions = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Media.prototype.requestCameraPermissions = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Media.prototype.requestCameraAccess = function () {
	throw new Error('Ti.Media.requestCameraAccess was deprecated, since 5.1.0');
};
Media.prototype.takeScreenshot = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Media.prototype.vibrate = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Media.prototype.requestAuthorization = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Media.prototype.createAudioPlayer = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var AudioPlayer = require('./Media/AudioPlayer');
	return AudioPlayer(__SLAG_PROPERTY);
};
Media.prototype.createAudioRecorder = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var AudioRecorder = require('./Media/AudioRecorder');
	return AudioRecorder(__SLAG_PROPERTY);
};
Media.prototype.getBubbleParent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Media.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Media.prototype.getApiName = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Media.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Media.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
Media.prototype.getAppMusicPlayer = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.appMusicPlayer;
};
Media.prototype.getAudioLineType = function () {
	throw new Error('Ti.Media.getAudioLineType was deprecated, since 3.4.2');
};
Media.prototype.getAudioPlaying = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.audioPlaying;
};
Media.prototype.getAudioSessionCategory = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.audioSessionCategory;
};
Media.prototype.setAudioSessionCategory = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.audioSessionCategory = __SLAG__PROPERTY;
};
Media.prototype.getAudioSessionMode = function () {
	throw new Error('Ti.Media.getAudioSessionMode was deprecated, since 3.4.2');
};
Media.prototype.setAudioSessionMode = function () {
	throw new Error('Ti.Media.setAudioSessionMode was deprecated, since 3.4.2');
};
Media.prototype.getAvailableCameras = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.availableCameras;
};
Media.prototype.getAvailableCameraMediaTypes = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.availableCameraMediaTypes;
};
Media.prototype.setAvailableCameraMediaTypes = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.availableCameraMediaTypes = __SLAG__PROPERTY;
};
Media.prototype.getAvailablePhotoGalleryMediaTypes = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.availablePhotoGalleryMediaTypes;
};
Media.prototype.setAvailablePhotoGalleryMediaTypes = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.availablePhotoGalleryMediaTypes = __SLAG__PROPERTY;
};
Media.prototype.getAvailablePhotoMediaTypes = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.availablePhotoMediaTypes;
};
Media.prototype.setAvailablePhotoMediaTypes = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.availablePhotoMediaTypes = __SLAG__PROPERTY;
};
Media.prototype.getAverageMicrophonePower = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.averageMicrophonePower;
};
Media.prototype.setAverageMicrophonePower = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.averageMicrophonePower = __SLAG__PROPERTY;
};
Media.prototype.getCameraFlashMode = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.cameraFlashMode;
};
Media.prototype.setCameraFlashMode = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.cameraFlashMode = __SLAG__PROPERTY;
};
Media.prototype.getCanRecord = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.canRecord;
};
Media.prototype.getCurrentRoute = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.currentRoute;
};
Media.prototype.getIsCameraSupported = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.isCameraSupported;
};
Media.prototype.getCameraAuthorizationStatus = function () {
	throw new Error('Ti.Media.getCameraAuthorizationStatus was deprecated, since 5.2.0');
};
Media.prototype.getCameraAuthorization = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.cameraAuthorization;
};
Media.prototype.getPeakMicrophonePower = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.peakMicrophonePower;
};
Media.prototype.getSystemMusicPlayer = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.systemMusicPlayer;
};
Media.prototype.getVolume = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.volume;
};
Media.prototype.createSound = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Sound = require('./Media/Sound');
	return Sound(__SLAG_PROPERTY);
};
Media.prototype.createVideoPlayer = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var VideoPlayer = require('./Media/VideoPlayer');
	return VideoPlayer(__SLAG_PROPERTY);
};
module.exports = function (properties) {
	return new Media(properties);
};