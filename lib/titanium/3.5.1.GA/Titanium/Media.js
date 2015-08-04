var crypto = require('crypto');
function Media(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
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
			'AUDIO_SESSION_PORT_AIRPLAY',
			'AUDIO_SESSION_PORT_BLUETOOTHA2DP',
			'AUDIO_SESSION_PORT_BLUETOOTHHFP',
			'AUDIO_SESSION_PORT_BLUETOOTHLE',
			'AUDIO_SESSION_PORT_BUILTINMIC',
			'AUDIO_SESSION_PORT_BUILTINRECEIVER',
			'AUDIO_SESSION_PORT_BUILTINSPEAKER',
			'AUDIO_SESSION_PORT_CARAUDIO',
			'AUDIO_SESSION_PORT_HDMI',
			'AUDIO_SESSION_PORT_HEADPHONES',
			'AUDIO_SESSION_PORT_HEADSETMIC',
			'AUDIO_SESSION_PORT_LINEIN',
			'AUDIO_SESSION_PORT_LINEOUT',
			'AUDIO_SESSION_PORT_USBAUDIO',
			'AUDIO_SPEAKER',
			'AUDIO_UNAVAILABLE',
			'AUDIO_UNKNOWN',
			'CAMERA_FLASH_AUTO',
			'CAMERA_FLASH_OFF',
			'CAMERA_FLASH_ON',
			'CAMERA_FRONT',
			'CAMERA_REAR',
			'DEVICE_BUSY',
			'MEDIA_TYPE_PHOTO',
			'MEDIA_TYPE_VIDEO',
			'MUSIC_MEDIA_GROUP_ALBUM',
			'MUSIC_MEDIA_GROUP_ALBUM_ARTIST',
			'MUSIC_MEDIA_GROUP_ARTIST',
			'MUSIC_MEDIA_GROUP_COMPOSER',
			'MUSIC_MEDIA_GROUP_GENRE',
			'MUSIC_MEDIA_GROUP_PLAYLIST',
			'MUSIC_MEDIA_GROUP_PODCAST_TITLE',
			'MUSIC_MEDIA_GROUP_TITLE',
			'MUSIC_MEDIA_TYPE_ALL',
			'MUSIC_MEDIA_TYPE_ANY_AUDIO',
			'MUSIC_MEDIA_TYPE_AUDIOBOOK',
			'MUSIC_MEDIA_TYPE_MUSIC',
			'MUSIC_MEDIA_TYPE_PODCAST',
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
			'apiName',
			'appMusicPlayer',
			'audioLineType',
			'audioPlaying',
			'audioSessionCategory',
			'audioSessionMode',
			'availableCameraMediaTypes',
			'availableCameras',
			'availablePhotoGalleryMediaTypes',
			'availablePhotoMediaTypes',
			'averageMicrophonePower',
			'bubbleParent',
			'cameraFlashMode',
			'canRecord',
			'currentRoute',
			'isCameraSupported',
			'peakMicrophonePower',
			'systemMusicPlayer',
			'volume',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG__properties.AUDIO_FILEFORMAT_3GP2) {
		throw new Error('Ti.Media.AUDIO_FILEFORMAT_3GP2 is read only property');
	}
	this.AUDIO_FILEFORMAT_3GP2 = 0;
	if (__SLAG__properties.AUDIO_FILEFORMAT_3GPP) {
		throw new Error('Ti.Media.AUDIO_FILEFORMAT_3GPP is read only property');
	}
	this.AUDIO_FILEFORMAT_3GPP = 0;
	if (__SLAG__properties.AUDIO_FILEFORMAT_AIFF) {
		throw new Error('Ti.Media.AUDIO_FILEFORMAT_AIFF is read only property');
	}
	this.AUDIO_FILEFORMAT_AIFF = 0;
	if (__SLAG__properties.AUDIO_FILEFORMAT_AMR) {
		throw new Error('Ti.Media.AUDIO_FILEFORMAT_AMR is read only property');
	}
	this.AUDIO_FILEFORMAT_AMR = 0;
	if (__SLAG__properties.AUDIO_FILEFORMAT_CAF) {
		throw new Error('Ti.Media.AUDIO_FILEFORMAT_CAF is read only property');
	}
	this.AUDIO_FILEFORMAT_CAF = 0;
	if (__SLAG__properties.AUDIO_FILEFORMAT_MP3) {
		throw new Error('Ti.Media.AUDIO_FILEFORMAT_MP3 is read only property');
	}
	this.AUDIO_FILEFORMAT_MP3 = 0;
	if (__SLAG__properties.AUDIO_FILEFORMAT_MP4) {
		throw new Error('Ti.Media.AUDIO_FILEFORMAT_MP4 is read only property');
	}
	this.AUDIO_FILEFORMAT_MP4 = 0;
	if (__SLAG__properties.AUDIO_FILEFORMAT_MP4A) {
		throw new Error('Ti.Media.AUDIO_FILEFORMAT_MP4A is read only property');
	}
	this.AUDIO_FILEFORMAT_MP4A = 0;
	if (__SLAG__properties.AUDIO_FILEFORMAT_WAVE) {
		throw new Error('Ti.Media.AUDIO_FILEFORMAT_WAVE is read only property');
	}
	this.AUDIO_FILEFORMAT_WAVE = 0;
	if (__SLAG__properties.AUDIO_FORMAT_AAC) {
		throw new Error('Ti.Media.AUDIO_FORMAT_AAC is read only property');
	}
	this.AUDIO_FORMAT_AAC = 0;
	if (__SLAG__properties.AUDIO_FORMAT_ALAW) {
		throw new Error('Ti.Media.AUDIO_FORMAT_ALAW is read only property');
	}
	this.AUDIO_FORMAT_ALAW = 0;
	if (__SLAG__properties.AUDIO_FORMAT_APPLE_LOSSLESS) {
		throw new Error('Ti.Media.AUDIO_FORMAT_APPLE_LOSSLESS is read only property');
	}
	this.AUDIO_FORMAT_APPLE_LOSSLESS = 0;
	if (__SLAG__properties.AUDIO_FORMAT_ILBC) {
		throw new Error('Ti.Media.AUDIO_FORMAT_ILBC is read only property');
	}
	this.AUDIO_FORMAT_ILBC = 0;
	if (__SLAG__properties.AUDIO_FORMAT_IMA4) {
		throw new Error('Ti.Media.AUDIO_FORMAT_IMA4 is read only property');
	}
	this.AUDIO_FORMAT_IMA4 = 0;
	if (__SLAG__properties.AUDIO_FORMAT_LINEAR_PCM) {
		throw new Error('Ti.Media.AUDIO_FORMAT_LINEAR_PCM is read only property');
	}
	this.AUDIO_FORMAT_LINEAR_PCM = 0;
	if (__SLAG__properties.AUDIO_FORMAT_ULAW) {
		throw new Error('Ti.Media.AUDIO_FORMAT_ULAW is read only property');
	}
	this.AUDIO_FORMAT_ULAW = 0;
	if (__SLAG__properties.AUDIO_HEADPHONES) {
		throw new Error('Ti.Media.AUDIO_HEADPHONES was deprecated, since 3.4.2');
	}
	if (__SLAG__properties.AUDIO_HEADPHONES_AND_MIC) {
		throw new Error('Ti.Media.AUDIO_HEADPHONES_AND_MIC was deprecated, since 3.4.2');
	}
	if (__SLAG__properties.AUDIO_HEADSET_INOUT) {
		throw new Error('Ti.Media.AUDIO_HEADSET_INOUT was deprecated, since 3.4.2');
	}
	if (__SLAG__properties.AUDIO_LINEOUT) {
		throw new Error('Ti.Media.AUDIO_LINEOUT was deprecated, since 3.4.2');
	}
	if (__SLAG__properties.AUDIO_MICROPHONE) {
		throw new Error('Ti.Media.AUDIO_MICROPHONE was deprecated, since 3.4.2');
	}
	if (__SLAG__properties.AUDIO_MUTED) {
		throw new Error('Ti.Media.AUDIO_MUTED was deprecated, since 3.4.2');
	}
	if (__SLAG__properties.AUDIO_RECEIVER_AND_MIC) {
		throw new Error('Ti.Media.AUDIO_RECEIVER_AND_MIC was deprecated, since 3.4.2');
	}
	if (__SLAG__properties.AUDIO_SESSION_CATEGORY_AMBIENT) {
		throw new Error('Ti.Media.AUDIO_SESSION_CATEGORY_AMBIENT is read only property');
	}
	this.AUDIO_SESSION_CATEGORY_AMBIENT = '';
	if (__SLAG__properties.AUDIO_SESSION_CATEGORY_PLAYBACK) {
		throw new Error('Ti.Media.AUDIO_SESSION_CATEGORY_PLAYBACK is read only property');
	}
	this.AUDIO_SESSION_CATEGORY_PLAYBACK = '';
	if (__SLAG__properties.AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD) {
		throw new Error('Ti.Media.AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD is read only property');
	}
	this.AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD = '';
	if (__SLAG__properties.AUDIO_SESSION_CATEGORY_RECORD) {
		throw new Error('Ti.Media.AUDIO_SESSION_CATEGORY_RECORD is read only property');
	}
	this.AUDIO_SESSION_CATEGORY_RECORD = '';
	if (__SLAG__properties.AUDIO_SESSION_CATEGORY_SOLO_AMBIENT) {
		throw new Error('Ti.Media.AUDIO_SESSION_CATEGORY_SOLO_AMBIENT is read only property');
	}
	this.AUDIO_SESSION_CATEGORY_SOLO_AMBIENT = '';
	if (__SLAG__properties.AUDIO_SESSION_MODE_AMBIENT) {
		throw new Error('Ti.Media.AUDIO_SESSION_MODE_AMBIENT was deprecated, since 3.4.2');
	}
	if (__SLAG__properties.AUDIO_SESSION_MODE_PLAYBACK) {
		throw new Error('Ti.Media.AUDIO_SESSION_MODE_PLAYBACK was deprecated, since 3.4.2');
	}
	if (__SLAG__properties.AUDIO_SESSION_MODE_PLAY_AND_RECORD) {
		throw new Error('Ti.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD was deprecated, since 3.4.2');
	}
	if (__SLAG__properties.AUDIO_SESSION_MODE_RECORD) {
		throw new Error('Ti.Media.AUDIO_SESSION_MODE_RECORD was deprecated, since 3.4.2');
	}
	if (__SLAG__properties.AUDIO_SESSION_MODE_SOLO_AMBIENT) {
		throw new Error('Ti.Media.AUDIO_SESSION_MODE_SOLO_AMBIENT was deprecated, since 3.4.2');
	}
	if (__SLAG__properties.AUDIO_SESSION_OVERRIDE_ROUTE_NONE) {
		throw new Error('Ti.Media.AUDIO_SESSION_OVERRIDE_ROUTE_NONE is read only property');
	}
	this.AUDIO_SESSION_OVERRIDE_ROUTE_NONE = 0;
	if (__SLAG__properties.AUDIO_SESSION_OVERRIDE_ROUTE_SPEAKER) {
		throw new Error('Ti.Media.AUDIO_SESSION_OVERRIDE_ROUTE_SPEAKER is read only property');
	}
	this.AUDIO_SESSION_OVERRIDE_ROUTE_SPEAKER = 0;
	if (__SLAG__properties.AUDIO_SESSION_PORT_AIRPLAY) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_AIRPLAY is read only property');
	}
	this.AUDIO_SESSION_PORT_AIRPLAY = '';
	if (__SLAG__properties.AUDIO_SESSION_PORT_BLUETOOTHA2DP) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_BLUETOOTHA2DP is read only property');
	}
	this.AUDIO_SESSION_PORT_BLUETOOTHA2DP = '';
	if (__SLAG__properties.AUDIO_SESSION_PORT_BLUETOOTHHFP) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_BLUETOOTHHFP is read only property');
	}
	this.AUDIO_SESSION_PORT_BLUETOOTHHFP = '';
	if (__SLAG__properties.AUDIO_SESSION_PORT_BLUETOOTHLE) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_BLUETOOTHLE is read only property');
	}
	this.AUDIO_SESSION_PORT_BLUETOOTHLE = '';
	if (__SLAG__properties.AUDIO_SESSION_PORT_BUILTINMIC) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_BUILTINMIC is read only property');
	}
	this.AUDIO_SESSION_PORT_BUILTINMIC = '';
	if (__SLAG__properties.AUDIO_SESSION_PORT_BUILTINRECEIVER) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_BUILTINRECEIVER is read only property');
	}
	this.AUDIO_SESSION_PORT_BUILTINRECEIVER = '';
	if (__SLAG__properties.AUDIO_SESSION_PORT_BUILTINSPEAKER) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_BUILTINSPEAKER is read only property');
	}
	this.AUDIO_SESSION_PORT_BUILTINSPEAKER = '';
	if (__SLAG__properties.AUDIO_SESSION_PORT_CARAUDIO) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_CARAUDIO is read only property');
	}
	this.AUDIO_SESSION_PORT_CARAUDIO = '';
	if (__SLAG__properties.AUDIO_SESSION_PORT_HDMI) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_HDMI is read only property');
	}
	this.AUDIO_SESSION_PORT_HDMI = '';
	if (__SLAG__properties.AUDIO_SESSION_PORT_HEADPHONES) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_HEADPHONES is read only property');
	}
	this.AUDIO_SESSION_PORT_HEADPHONES = '';
	if (__SLAG__properties.AUDIO_SESSION_PORT_HEADSETMIC) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_HEADSETMIC is read only property');
	}
	this.AUDIO_SESSION_PORT_HEADSETMIC = '';
	if (__SLAG__properties.AUDIO_SESSION_PORT_LINEIN) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_LINEIN is read only property');
	}
	this.AUDIO_SESSION_PORT_LINEIN = '';
	if (__SLAG__properties.AUDIO_SESSION_PORT_LINEOUT) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_LINEOUT is read only property');
	}
	this.AUDIO_SESSION_PORT_LINEOUT = '';
	if (__SLAG__properties.AUDIO_SESSION_PORT_USBAUDIO) {
		throw new Error('Ti.Media.AUDIO_SESSION_PORT_USBAUDIO is read only property');
	}
	this.AUDIO_SESSION_PORT_USBAUDIO = '';
	if (__SLAG__properties.AUDIO_SPEAKER) {
		throw new Error('Ti.Media.AUDIO_SPEAKER was deprecated, since 3.4.2');
	}
	if (__SLAG__properties.AUDIO_UNAVAILABLE) {
		throw new Error('Ti.Media.AUDIO_UNAVAILABLE was deprecated, since 3.4.2');
	}
	if (__SLAG__properties.AUDIO_UNKNOWN) {
		throw new Error('Ti.Media.AUDIO_UNKNOWN was deprecated, since 3.4.2');
	}
	if (__SLAG__properties.CAMERA_FLASH_AUTO) {
		throw new Error('Ti.Media.CAMERA_FLASH_AUTO is read only property');
	}
	this.CAMERA_FLASH_AUTO = 0;
	if (__SLAG__properties.CAMERA_FLASH_OFF) {
		throw new Error('Ti.Media.CAMERA_FLASH_OFF is read only property');
	}
	this.CAMERA_FLASH_OFF = 0;
	if (__SLAG__properties.CAMERA_FLASH_ON) {
		throw new Error('Ti.Media.CAMERA_FLASH_ON is read only property');
	}
	this.CAMERA_FLASH_ON = 0;
	if (__SLAG__properties.CAMERA_FRONT) {
		throw new Error('Ti.Media.CAMERA_FRONT is read only property');
	}
	this.CAMERA_FRONT = 0;
	if (__SLAG__properties.CAMERA_REAR) {
		throw new Error('Ti.Media.CAMERA_REAR is read only property');
	}
	this.CAMERA_REAR = 0;
	if (__SLAG__properties.DEVICE_BUSY) {
		throw new Error('Ti.Media.DEVICE_BUSY is read only property');
	}
	this.DEVICE_BUSY = 0;
	if (__SLAG__properties.MEDIA_TYPE_PHOTO) {
		throw new Error('Ti.Media.MEDIA_TYPE_PHOTO is read only property');
	}
	this.MEDIA_TYPE_PHOTO = '';
	if (__SLAG__properties.MEDIA_TYPE_VIDEO) {
		throw new Error('Ti.Media.MEDIA_TYPE_VIDEO is read only property');
	}
	this.MEDIA_TYPE_VIDEO = '';
	if (__SLAG__properties.MUSIC_MEDIA_GROUP_ALBUM) {
		throw new Error('Ti.Media.MUSIC_MEDIA_GROUP_ALBUM is read only property');
	}
	this.MUSIC_MEDIA_GROUP_ALBUM = 0;
	if (__SLAG__properties.MUSIC_MEDIA_GROUP_ALBUM_ARTIST) {
		throw new Error('Ti.Media.MUSIC_MEDIA_GROUP_ALBUM_ARTIST is read only property');
	}
	this.MUSIC_MEDIA_GROUP_ALBUM_ARTIST = 0;
	if (__SLAG__properties.MUSIC_MEDIA_GROUP_ARTIST) {
		throw new Error('Ti.Media.MUSIC_MEDIA_GROUP_ARTIST is read only property');
	}
	this.MUSIC_MEDIA_GROUP_ARTIST = 0;
	if (__SLAG__properties.MUSIC_MEDIA_GROUP_COMPOSER) {
		throw new Error('Ti.Media.MUSIC_MEDIA_GROUP_COMPOSER is read only property');
	}
	this.MUSIC_MEDIA_GROUP_COMPOSER = 0;
	if (__SLAG__properties.MUSIC_MEDIA_GROUP_GENRE) {
		throw new Error('Ti.Media.MUSIC_MEDIA_GROUP_GENRE is read only property');
	}
	this.MUSIC_MEDIA_GROUP_GENRE = 0;
	if (__SLAG__properties.MUSIC_MEDIA_GROUP_PLAYLIST) {
		throw new Error('Ti.Media.MUSIC_MEDIA_GROUP_PLAYLIST is read only property');
	}
	this.MUSIC_MEDIA_GROUP_PLAYLIST = 0;
	if (__SLAG__properties.MUSIC_MEDIA_GROUP_PODCAST_TITLE) {
		throw new Error('Ti.Media.MUSIC_MEDIA_GROUP_PODCAST_TITLE is read only property');
	}
	this.MUSIC_MEDIA_GROUP_PODCAST_TITLE = 0;
	if (__SLAG__properties.MUSIC_MEDIA_GROUP_TITLE) {
		throw new Error('Ti.Media.MUSIC_MEDIA_GROUP_TITLE is read only property');
	}
	this.MUSIC_MEDIA_GROUP_TITLE = 0;
	if (__SLAG__properties.MUSIC_MEDIA_TYPE_ALL) {
		throw new Error('Ti.Media.MUSIC_MEDIA_TYPE_ALL is read only property');
	}
	this.MUSIC_MEDIA_TYPE_ALL = 0;
	if (__SLAG__properties.MUSIC_MEDIA_TYPE_ANY_AUDIO) {
		throw new Error('Ti.Media.MUSIC_MEDIA_TYPE_ANY_AUDIO is read only property');
	}
	this.MUSIC_MEDIA_TYPE_ANY_AUDIO = 0;
	if (__SLAG__properties.MUSIC_MEDIA_TYPE_AUDIOBOOK) {
		throw new Error('Ti.Media.MUSIC_MEDIA_TYPE_AUDIOBOOK is read only property');
	}
	this.MUSIC_MEDIA_TYPE_AUDIOBOOK = 0;
	if (__SLAG__properties.MUSIC_MEDIA_TYPE_MUSIC) {
		throw new Error('Ti.Media.MUSIC_MEDIA_TYPE_MUSIC is read only property');
	}
	this.MUSIC_MEDIA_TYPE_MUSIC = 0;
	if (__SLAG__properties.MUSIC_MEDIA_TYPE_PODCAST) {
		throw new Error('Ti.Media.MUSIC_MEDIA_TYPE_PODCAST is read only property');
	}
	this.MUSIC_MEDIA_TYPE_PODCAST = 0;
	if (__SLAG__properties.MUSIC_PLAYER_REPEAT_ALL) {
		throw new Error('Ti.Media.MUSIC_PLAYER_REPEAT_ALL is read only property');
	}
	this.MUSIC_PLAYER_REPEAT_ALL = 0;
	if (__SLAG__properties.MUSIC_PLAYER_REPEAT_DEFAULT) {
		throw new Error('Ti.Media.MUSIC_PLAYER_REPEAT_DEFAULT is read only property');
	}
	this.MUSIC_PLAYER_REPEAT_DEFAULT = 0;
	if (__SLAG__properties.MUSIC_PLAYER_REPEAT_NONE) {
		throw new Error('Ti.Media.MUSIC_PLAYER_REPEAT_NONE is read only property');
	}
	this.MUSIC_PLAYER_REPEAT_NONE = 0;
	if (__SLAG__properties.MUSIC_PLAYER_REPEAT_ONE) {
		throw new Error('Ti.Media.MUSIC_PLAYER_REPEAT_ONE is read only property');
	}
	this.MUSIC_PLAYER_REPEAT_ONE = 0;
	if (__SLAG__properties.MUSIC_PLAYER_SHUFFLE_ALBUMS) {
		throw new Error('Ti.Media.MUSIC_PLAYER_SHUFFLE_ALBUMS is read only property');
	}
	this.MUSIC_PLAYER_SHUFFLE_ALBUMS = 0;
	if (__SLAG__properties.MUSIC_PLAYER_SHUFFLE_DEFAULT) {
		throw new Error('Ti.Media.MUSIC_PLAYER_SHUFFLE_DEFAULT is read only property');
	}
	this.MUSIC_PLAYER_SHUFFLE_DEFAULT = 0;
	if (__SLAG__properties.MUSIC_PLAYER_SHUFFLE_NONE) {
		throw new Error('Ti.Media.MUSIC_PLAYER_SHUFFLE_NONE is read only property');
	}
	this.MUSIC_PLAYER_SHUFFLE_NONE = 0;
	if (__SLAG__properties.MUSIC_PLAYER_SHUFFLE_SONGS) {
		throw new Error('Ti.Media.MUSIC_PLAYER_SHUFFLE_SONGS is read only property');
	}
	this.MUSIC_PLAYER_SHUFFLE_SONGS = 0;
	if (__SLAG__properties.MUSIC_PLAYER_STATE_INTERRUPTED) {
		throw new Error('Ti.Media.MUSIC_PLAYER_STATE_INTERRUPTED is read only property');
	}
	this.MUSIC_PLAYER_STATE_INTERRUPTED = 0;
	if (__SLAG__properties.MUSIC_PLAYER_STATE_PAUSED) {
		throw new Error('Ti.Media.MUSIC_PLAYER_STATE_PAUSED is read only property');
	}
	this.MUSIC_PLAYER_STATE_PAUSED = 0;
	if (__SLAG__properties.MUSIC_PLAYER_STATE_PLAYING) {
		throw new Error('Ti.Media.MUSIC_PLAYER_STATE_PLAYING is read only property');
	}
	this.MUSIC_PLAYER_STATE_PLAYING = 0;
	if (__SLAG__properties.MUSIC_PLAYER_STATE_SEEK_BACKWARD) {
		throw new Error('Ti.Media.MUSIC_PLAYER_STATE_SEEK_BACKWARD is read only property');
	}
	this.MUSIC_PLAYER_STATE_SEEK_BACKWARD = 0;
	if (__SLAG__properties.MUSIC_PLAYER_STATE_SEEK_FORWARD) {
		throw new Error('Ti.Media.MUSIC_PLAYER_STATE_SEEK_FORWARD is read only property');
	}
	this.MUSIC_PLAYER_STATE_SEEK_FORWARD = 0;
	if (__SLAG__properties.MUSIC_PLAYER_STATE_STOPPED) {
		throw new Error('Ti.Media.MUSIC_PLAYER_STATE_STOPPED is read only property');
	}
	this.MUSIC_PLAYER_STATE_STOPPED = 0;
	if (__SLAG__properties.NO_CAMERA) {
		throw new Error('Ti.Media.NO_CAMERA is read only property');
	}
	this.NO_CAMERA = 0;
	if (__SLAG__properties.NO_VIDEO) {
		throw new Error('Ti.Media.NO_VIDEO is read only property');
	}
	this.NO_VIDEO = 0;
	if (__SLAG__properties.QUALITY_HIGH) {
		throw new Error('Ti.Media.QUALITY_HIGH is read only property');
	}
	this.QUALITY_HIGH = 0;
	if (__SLAG__properties.QUALITY_LOW) {
		throw new Error('Ti.Media.QUALITY_LOW is read only property');
	}
	this.QUALITY_LOW = 0;
	if (__SLAG__properties.QUALITY_MEDIUM) {
		throw new Error('Ti.Media.QUALITY_MEDIUM is read only property');
	}
	this.QUALITY_MEDIUM = 0;
	if (__SLAG__properties.UNKNOWN_ERROR) {
		throw new Error('Ti.Media.UNKNOWN_ERROR is read only property');
	}
	this.UNKNOWN_ERROR = 0;
	if (__SLAG__properties.VIDEO_CONTROL_DEFAULT) {
		throw new Error('Ti.Media.VIDEO_CONTROL_DEFAULT is read only property');
	}
	this.VIDEO_CONTROL_DEFAULT = 0;
	if (__SLAG__properties.VIDEO_CONTROL_EMBEDDED) {
		throw new Error('Ti.Media.VIDEO_CONTROL_EMBEDDED is read only property');
	}
	this.VIDEO_CONTROL_EMBEDDED = 0;
	if (__SLAG__properties.VIDEO_CONTROL_FULLSCREEN) {
		throw new Error('Ti.Media.VIDEO_CONTROL_FULLSCREEN is read only property');
	}
	this.VIDEO_CONTROL_FULLSCREEN = 0;
	if (__SLAG__properties.VIDEO_CONTROL_HIDDEN) {
		throw new Error('Ti.Media.VIDEO_CONTROL_HIDDEN is read only property');
	}
	this.VIDEO_CONTROL_HIDDEN = 0;
	if (__SLAG__properties.VIDEO_CONTROL_NONE) {
		throw new Error('Ti.Media.VIDEO_CONTROL_NONE is read only property');
	}
	this.VIDEO_CONTROL_NONE = 0;
	if (__SLAG__properties.VIDEO_CONTROL_VOLUME_ONLY) {
		throw new Error('Ti.Media.VIDEO_CONTROL_VOLUME_ONLY was deprecated, since 1.8.0');
	}
	if (__SLAG__properties.VIDEO_FINISH_REASON_PLAYBACK_ENDED) {
		throw new Error('Ti.Media.VIDEO_FINISH_REASON_PLAYBACK_ENDED is read only property');
	}
	this.VIDEO_FINISH_REASON_PLAYBACK_ENDED = 0;
	if (__SLAG__properties.VIDEO_FINISH_REASON_PLAYBACK_ERROR) {
		throw new Error('Ti.Media.VIDEO_FINISH_REASON_PLAYBACK_ERROR is read only property');
	}
	this.VIDEO_FINISH_REASON_PLAYBACK_ERROR = 0;
	if (__SLAG__properties.VIDEO_FINISH_REASON_USER_EXITED) {
		throw new Error('Ti.Media.VIDEO_FINISH_REASON_USER_EXITED is read only property');
	}
	this.VIDEO_FINISH_REASON_USER_EXITED = 0;
	if (__SLAG__properties.VIDEO_LOAD_STATE_PLAYABLE) {
		throw new Error('Ti.Media.VIDEO_LOAD_STATE_PLAYABLE is read only property');
	}
	this.VIDEO_LOAD_STATE_PLAYABLE = 0;
	if (__SLAG__properties.VIDEO_LOAD_STATE_PLAYTHROUGH_OK) {
		throw new Error('Ti.Media.VIDEO_LOAD_STATE_PLAYTHROUGH_OK is read only property');
	}
	this.VIDEO_LOAD_STATE_PLAYTHROUGH_OK = 0;
	if (__SLAG__properties.VIDEO_LOAD_STATE_STALLED) {
		throw new Error('Ti.Media.VIDEO_LOAD_STATE_STALLED is read only property');
	}
	this.VIDEO_LOAD_STATE_STALLED = 0;
	if (__SLAG__properties.VIDEO_LOAD_STATE_UNKNOWN) {
		throw new Error('Ti.Media.VIDEO_LOAD_STATE_UNKNOWN is read only property');
	}
	this.VIDEO_LOAD_STATE_UNKNOWN = 0;
	if (__SLAG__properties.VIDEO_MEDIA_TYPE_AUDIO) {
		throw new Error('Ti.Media.VIDEO_MEDIA_TYPE_AUDIO is read only property');
	}
	this.VIDEO_MEDIA_TYPE_AUDIO = 0;
	if (__SLAG__properties.VIDEO_MEDIA_TYPE_NONE) {
		throw new Error('Ti.Media.VIDEO_MEDIA_TYPE_NONE is read only property');
	}
	this.VIDEO_MEDIA_TYPE_NONE = 0;
	if (__SLAG__properties.VIDEO_MEDIA_TYPE_VIDEO) {
		throw new Error('Ti.Media.VIDEO_MEDIA_TYPE_VIDEO is read only property');
	}
	this.VIDEO_MEDIA_TYPE_VIDEO = 0;
	if (__SLAG__properties.VIDEO_PLAYBACK_STATE_INTERRUPTED) {
		throw new Error('Ti.Media.VIDEO_PLAYBACK_STATE_INTERRUPTED is read only property');
	}
	this.VIDEO_PLAYBACK_STATE_INTERRUPTED = 0;
	if (__SLAG__properties.VIDEO_PLAYBACK_STATE_PAUSED) {
		throw new Error('Ti.Media.VIDEO_PLAYBACK_STATE_PAUSED is read only property');
	}
	this.VIDEO_PLAYBACK_STATE_PAUSED = 0;
	if (__SLAG__properties.VIDEO_PLAYBACK_STATE_PLAYING) {
		throw new Error('Ti.Media.VIDEO_PLAYBACK_STATE_PLAYING is read only property');
	}
	this.VIDEO_PLAYBACK_STATE_PLAYING = 0;
	if (__SLAG__properties.VIDEO_PLAYBACK_STATE_SEEKING_BACKWARD) {
		throw new Error('Ti.Media.VIDEO_PLAYBACK_STATE_SEEKING_BACKWARD is read only property');
	}
	this.VIDEO_PLAYBACK_STATE_SEEKING_BACKWARD = 0;
	if (__SLAG__properties.VIDEO_PLAYBACK_STATE_SEEKING_FORWARD) {
		throw new Error('Ti.Media.VIDEO_PLAYBACK_STATE_SEEKING_FORWARD is read only property');
	}
	this.VIDEO_PLAYBACK_STATE_SEEKING_FORWARD = 0;
	if (__SLAG__properties.VIDEO_PLAYBACK_STATE_STOPPED) {
		throw new Error('Ti.Media.VIDEO_PLAYBACK_STATE_STOPPED is read only property');
	}
	this.VIDEO_PLAYBACK_STATE_STOPPED = 0;
	if (__SLAG__properties.VIDEO_REPEAT_MODE_NONE) {
		throw new Error('Ti.Media.VIDEO_REPEAT_MODE_NONE is read only property');
	}
	this.VIDEO_REPEAT_MODE_NONE = 0;
	if (__SLAG__properties.VIDEO_REPEAT_MODE_ONE) {
		throw new Error('Ti.Media.VIDEO_REPEAT_MODE_ONE is read only property');
	}
	this.VIDEO_REPEAT_MODE_ONE = 0;
	if (__SLAG__properties.VIDEO_SCALING_ASPECT_FILL) {
		throw new Error('Ti.Media.VIDEO_SCALING_ASPECT_FILL is read only property');
	}
	this.VIDEO_SCALING_ASPECT_FILL = 0;
	if (__SLAG__properties.VIDEO_SCALING_ASPECT_FIT) {
		throw new Error('Ti.Media.VIDEO_SCALING_ASPECT_FIT is read only property');
	}
	this.VIDEO_SCALING_ASPECT_FIT = 0;
	if (__SLAG__properties.VIDEO_SCALING_MODE_FILL) {
		throw new Error('Ti.Media.VIDEO_SCALING_MODE_FILL is read only property');
	}
	this.VIDEO_SCALING_MODE_FILL = 0;
	if (__SLAG__properties.VIDEO_SCALING_NONE) {
		throw new Error('Ti.Media.VIDEO_SCALING_NONE is read only property');
	}
	this.VIDEO_SCALING_NONE = 0;
	if (__SLAG__properties.VIDEO_SOURCE_TYPE_FILE) {
		throw new Error('Ti.Media.VIDEO_SOURCE_TYPE_FILE is read only property');
	}
	this.VIDEO_SOURCE_TYPE_FILE = 0;
	if (__SLAG__properties.VIDEO_SOURCE_TYPE_STREAMING) {
		throw new Error('Ti.Media.VIDEO_SOURCE_TYPE_STREAMING is read only property');
	}
	this.VIDEO_SOURCE_TYPE_STREAMING = 0;
	if (__SLAG__properties.VIDEO_SOURCE_TYPE_UNKNOWN) {
		throw new Error('Ti.Media.VIDEO_SOURCE_TYPE_UNKNOWN is read only property');
	}
	this.VIDEO_SOURCE_TYPE_UNKNOWN = 0;
	if (__SLAG__properties.VIDEO_TIME_OPTION_EXACT) {
		throw new Error('Ti.Media.VIDEO_TIME_OPTION_EXACT is read only property');
	}
	this.VIDEO_TIME_OPTION_EXACT = 0;
	if (__SLAG__properties.VIDEO_TIME_OPTION_NEAREST_KEYFRAME) {
		throw new Error('Ti.Media.VIDEO_TIME_OPTION_NEAREST_KEYFRAME is read only property');
	}
	this.VIDEO_TIME_OPTION_NEAREST_KEYFRAME = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Media.apiName is read only property');
	}
	this.apiName = 'Ti.Media';
	if (__SLAG__properties.appMusicPlayer) {
		throw new Error('Ti.Media.appMusicPlayer is read only property');
	}
	this.appMusicPlayer = {};
	if (__SLAG__properties.audioLineType) {
		throw new Error('Ti.Media.audioLineType was deprecated, since 3.4.2');
	}
	if (__SLAG__properties.audioPlaying) {
		throw new Error('Ti.Media.audioPlaying is read only property');
	}
	this.audioPlaying = true;
	this.audioSessionCategory = __SLAG__properties.audioSessionCategory || 0;
	if (__SLAG__properties.audioSessionMode) {
		throw new Error('Ti.Media.audioSessionMode was deprecated, since 3.4.2');
	}
	this.availableCameraMediaTypes = __SLAG__properties.availableCameraMediaTypes || [];
	if (__SLAG__properties.availableCameras) {
		throw new Error('Ti.Media.availableCameras is read only property');
	}
	this.availableCameras = 0;
	this.availablePhotoGalleryMediaTypes = __SLAG__properties.availablePhotoGalleryMediaTypes || [];
	this.availablePhotoMediaTypes = __SLAG__properties.availablePhotoMediaTypes || [];
	this.averageMicrophonePower = __SLAG__properties.averageMicrophonePower || 0;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.cameraFlashMode = __SLAG__properties.cameraFlashMode || 0;
	if (__SLAG__properties.canRecord) {
		throw new Error('Ti.Media.canRecord is read only property');
	}
	this.canRecord = true;
	if (__SLAG__properties.currentRoute) {
		throw new Error('Ti.Media.currentRoute is read only property');
	}
	this.currentRoute = {};
	if (__SLAG__properties.isCameraSupported) {
		throw new Error('Ti.Media.isCameraSupported is read only property');
	}
	this.isCameraSupported = true;
	if (__SLAG__properties.peakMicrophonePower) {
		throw new Error('Ti.Media.peakMicrophonePower is read only property');
	}
	this.peakMicrophonePower = 0;
	if (__SLAG__properties.systemMusicPlayer) {
		throw new Error('Ti.Media.systemMusicPlayer is read only property');
	}
	this.systemMusicPlayer = {};
	if (__SLAG__properties.volume) {
		throw new Error('Ti.Media.volume is read only property');
	}
	this.volume = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Media.prototype.addEventListener = function () {
};
Media.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
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
	return this.apiName;
};
Media.prototype.getAppMusicPlayer = function () {
	return this.appMusicPlayer;
};
Media.prototype.getAudioLineType = function () {
	throw new Error('Ti.Media.getAudioLineType was deprecated, since 3.4.2');
};
Media.prototype.getAudioPlaying = function () {
	return this.audioPlaying;
};
Media.prototype.getAudioSessionCategory = function () {
	return this.audioSessionCategory;
};
Media.prototype.getAudioSessionMode = function () {
	throw new Error('Ti.Media.getAudioSessionMode was deprecated, since 3.4.2');
};
Media.prototype.getAvailableCameraMediaTypes = function () {
	return this.availableCameraMediaTypes;
};
Media.prototype.getAvailableCameras = function () {
	return this.availableCameras;
};
Media.prototype.getAvailablePhotoGalleryMediaTypes = function () {
	return this.availablePhotoGalleryMediaTypes;
};
Media.prototype.getAvailablePhotoMediaTypes = function () {
	return this.availablePhotoMediaTypes;
};
Media.prototype.getAverageMicrophonePower = function () {
	return this.averageMicrophonePower;
};
Media.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Media.prototype.getCameraFlashMode = function () {
	return this.cameraFlashMode;
};
Media.prototype.getCanRecord = function () {
	return this.canRecord;
};
Media.prototype.getCurrentRoute = function () {
	return this.currentRoute;
};
Media.prototype.getIsCameraSupported = function () {
	return this.isCameraSupported;
};
Media.prototype.getPeakMicrophonePower = function () {
	return this.peakMicrophonePower;
};
Media.prototype.getSystemMusicPlayer = function () {
	return this.systemMusicPlayer;
};
Media.prototype.getVolume = function () {
	return this.volume;
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
Media.prototype.setAudioSessionCategory = function (property) {
	this.audioSessionCategory = property;
};
Media.prototype.setAudioSessionMode = function () {
	throw new Error('Ti.Media.setAudioSessionMode was deprecated, since 3.4.2');
};
Media.prototype.setAvailableCameraMediaTypes = function (property) {
	this.availableCameraMediaTypes = property;
};
Media.prototype.setAvailablePhotoGalleryMediaTypes = function (property) {
	this.availablePhotoGalleryMediaTypes = property;
};
Media.prototype.setAvailablePhotoMediaTypes = function (property) {
	this.availablePhotoMediaTypes = property;
};
Media.prototype.setAverageMicrophonePower = function (property) {
	this.averageMicrophonePower = property;
};
Media.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Media.prototype.setCameraFlashMode = function (property) {
	this.cameraFlashMode = property;
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