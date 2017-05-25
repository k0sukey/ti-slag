var crypto = require('crypto');
function SearchableItemAttributeSet(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'itemContentType',
			'displayName',
			'alternateNames',
			'path',
			'contentURL',
			'thumbnailURL',
			'thumbnailData',
			'relatedUniqueIdentifier',
			'metadataModificationDate',
			'contentType',
			'contentTypeTree',
			'keywords',
			'title',
			'subject',
			'theme',
			'contentDescription',
			'identifier',
			'audiences',
			'fileSize',
			'pageCount',
			'pageWidth',
			'pageHeight',
			'securityMethod',
			'creator',
			'encodingApplications',
			'kind',
			'fontNames',
			'audioSampleRate',
			'audioChannelCount',
			'tempo',
			'keySignature',
			'timeSignature',
			'audioEncodingApplication',
			'composer',
			'lyricist',
			'album',
			'artist',
			'audioTrackNumber',
			'recordingDate',
			'musicalGenre',
			'generalMIDISequence',
			'musicalInstrumentCategory',
			'musicalInstrumentName',
			'supportsPhoneCall',
			'supportsNavigation',
			'containerTitle',
			'containerDisplayName',
			'containerIdentifier',
			'containerOrder',
			'editors',
			'participants',
			'projects',
			'downloadedDate',
			'lastUsedDate',
			'contentCreationDate',
			'contentModificationDate',
			'addedDate',
			'contentSources',
			'comment',
			'copyright',
			'duration',
			'contactKeywords',
			'codecs',
			'organizations',
			'mediaTypes',
			'version',
			'role',
			'streamable',
			'totalBitRate',
			'videoBitRate',
			'audioBitRate',
			'deliveryType',
			'languages',
			'rights',
			'publishers',
			'contributors',
			'coverage',
			'rating',
			'ratingDescription',
			'playCount',
			'information',
			'director',
			'producer',
			'genre',
			'performers',
			'originalFormat',
			'originalSource',
			'local',
			'contentRating',
			'url',
			'fullyFormattedAddress',
			'subThoroughfare',
			'thoroughfare',
			'postalCode',
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
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.App.iOS.SearchableItemAttributeSet.apiName is read only property');
	}
	this.apiName = 'Ti.App.iOS.SearchableItemAttributeSet';
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.itemContentType = undefined;
	} else {
		this.itemContentType = __SLAG_PROPERTIES.itemContentType || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.displayName = undefined;
	} else {
		this.displayName = __SLAG_PROPERTIES.displayName || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.alternateNames = undefined;
	} else {
		this.alternateNames = __SLAG_PROPERTIES.alternateNames || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.path = undefined;
	} else {
		this.path = __SLAG_PROPERTIES.path || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.contentURL = undefined;
	} else {
		this.contentURL = __SLAG_PROPERTIES.contentURL || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.thumbnailURL = undefined;
	} else {
		this.thumbnailURL = __SLAG_PROPERTIES.thumbnailURL || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.thumbnailData = undefined;
	} else {
		this.thumbnailData = __SLAG_PROPERTIES.thumbnailData || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.relatedUniqueIdentifier = undefined;
	} else {
		this.relatedUniqueIdentifier = __SLAG_PROPERTIES.relatedUniqueIdentifier || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.metadataModificationDate = undefined;
	} else {
		this.metadataModificationDate = __SLAG_PROPERTIES.metadataModificationDate || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.contentType = undefined;
	} else {
		this.contentType = __SLAG_PROPERTIES.contentType || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.contentTypeTree = undefined;
	} else {
		this.contentTypeTree = __SLAG_PROPERTIES.contentTypeTree || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.keywords = undefined;
	} else {
		this.keywords = __SLAG_PROPERTIES.keywords || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.title = undefined;
	} else {
		this.title = __SLAG_PROPERTIES.title || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.subject = undefined;
	} else {
		this.subject = __SLAG_PROPERTIES.subject || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.theme = undefined;
	} else {
		this.theme = __SLAG_PROPERTIES.theme || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.contentDescription = undefined;
	} else {
		this.contentDescription = __SLAG_PROPERTIES.contentDescription || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.identifier = undefined;
	} else {
		this.identifier = __SLAG_PROPERTIES.identifier || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.audiences = undefined;
	} else {
		this.audiences = __SLAG_PROPERTIES.audiences || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.fileSize = undefined;
	} else {
		this.fileSize = __SLAG_PROPERTIES.fileSize || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.pageCount = undefined;
	} else {
		this.pageCount = __SLAG_PROPERTIES.pageCount || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.pageWidth = undefined;
	} else {
		this.pageWidth = __SLAG_PROPERTIES.pageWidth || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.pageHeight = undefined;
	} else {
		this.pageHeight = __SLAG_PROPERTIES.pageHeight || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.securityMethod = undefined;
	} else {
		this.securityMethod = __SLAG_PROPERTIES.securityMethod || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.creator = undefined;
	} else {
		this.creator = __SLAG_PROPERTIES.creator || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.encodingApplications = undefined;
	} else {
		this.encodingApplications = __SLAG_PROPERTIES.encodingApplications || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.kind = undefined;
	} else {
		this.kind = __SLAG_PROPERTIES.kind || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.fontNames = undefined;
	} else {
		this.fontNames = __SLAG_PROPERTIES.fontNames || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.audioSampleRate = undefined;
	} else {
		this.audioSampleRate = __SLAG_PROPERTIES.audioSampleRate || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.audioChannelCount = undefined;
	} else {
		this.audioChannelCount = __SLAG_PROPERTIES.audioChannelCount || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tempo = undefined;
	} else {
		this.tempo = __SLAG_PROPERTIES.tempo || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.keySignature = undefined;
	} else {
		this.keySignature = __SLAG_PROPERTIES.keySignature || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.timeSignature = undefined;
	} else {
		this.timeSignature = __SLAG_PROPERTIES.timeSignature || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.audioEncodingApplication = undefined;
	} else {
		this.audioEncodingApplication = __SLAG_PROPERTIES.audioEncodingApplication || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.composer = undefined;
	} else {
		this.composer = __SLAG_PROPERTIES.composer || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lyricist = undefined;
	} else {
		this.lyricist = __SLAG_PROPERTIES.lyricist || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.album = undefined;
	} else {
		this.album = __SLAG_PROPERTIES.album || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.artist = undefined;
	} else {
		this.artist = __SLAG_PROPERTIES.artist || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.audioTrackNumber = undefined;
	} else {
		this.audioTrackNumber = __SLAG_PROPERTIES.audioTrackNumber || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.recordingDate = undefined;
	} else {
		this.recordingDate = __SLAG_PROPERTIES.recordingDate || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.musicalGenre = undefined;
	} else {
		this.musicalGenre = __SLAG_PROPERTIES.musicalGenre || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.generalMIDISequence = undefined;
	} else {
		this.generalMIDISequence = __SLAG_PROPERTIES.generalMIDISequence || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.musicalInstrumentCategory = undefined;
	} else {
		this.musicalInstrumentCategory = __SLAG_PROPERTIES.musicalInstrumentCategory || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.musicalInstrumentName = undefined;
	} else {
		this.musicalInstrumentName = __SLAG_PROPERTIES.musicalInstrumentName || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.supportsPhoneCall = undefined;
	} else {
		this.supportsPhoneCall = __SLAG_PROPERTIES.supportsPhoneCall || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.supportsNavigation = undefined;
	} else {
		this.supportsNavigation = __SLAG_PROPERTIES.supportsNavigation || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.containerTitle = undefined;
	} else {
		this.containerTitle = __SLAG_PROPERTIES.containerTitle || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.containerDisplayName = undefined;
	} else {
		this.containerDisplayName = __SLAG_PROPERTIES.containerDisplayName || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.containerIdentifier = undefined;
	} else {
		this.containerIdentifier = __SLAG_PROPERTIES.containerIdentifier || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.containerOrder = undefined;
	} else {
		this.containerOrder = __SLAG_PROPERTIES.containerOrder || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.editors = undefined;
	} else {
		this.editors = __SLAG_PROPERTIES.editors || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.participants = undefined;
	} else {
		this.participants = __SLAG_PROPERTIES.participants || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.projects = undefined;
	} else {
		this.projects = __SLAG_PROPERTIES.projects || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.downloadedDate = undefined;
	} else {
		this.downloadedDate = __SLAG_PROPERTIES.downloadedDate || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lastUsedDate = undefined;
	} else {
		this.lastUsedDate = __SLAG_PROPERTIES.lastUsedDate || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.contentCreationDate = undefined;
	} else {
		this.contentCreationDate = __SLAG_PROPERTIES.contentCreationDate || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.contentModificationDate = undefined;
	} else {
		this.contentModificationDate = __SLAG_PROPERTIES.contentModificationDate || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.addedDate = undefined;
	} else {
		this.addedDate = __SLAG_PROPERTIES.addedDate || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.contentSources = undefined;
	} else {
		this.contentSources = __SLAG_PROPERTIES.contentSources || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.comment = undefined;
	} else {
		this.comment = __SLAG_PROPERTIES.comment || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.copyright = undefined;
	} else {
		this.copyright = __SLAG_PROPERTIES.copyright || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.duration = undefined;
	} else {
		this.duration = __SLAG_PROPERTIES.duration || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.contactKeywords = undefined;
	} else {
		this.contactKeywords = __SLAG_PROPERTIES.contactKeywords || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.codecs = undefined;
	} else {
		this.codecs = __SLAG_PROPERTIES.codecs || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.organizations = undefined;
	} else {
		this.organizations = __SLAG_PROPERTIES.organizations || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.mediaTypes = undefined;
	} else {
		this.mediaTypes = __SLAG_PROPERTIES.mediaTypes || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.version = undefined;
	} else {
		this.version = __SLAG_PROPERTIES.version || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.role = undefined;
	} else {
		this.role = __SLAG_PROPERTIES.role || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.streamable = undefined;
	} else {
		this.streamable = __SLAG_PROPERTIES.streamable || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.totalBitRate = undefined;
	} else {
		this.totalBitRate = __SLAG_PROPERTIES.totalBitRate || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.videoBitRate = undefined;
	} else {
		this.videoBitRate = __SLAG_PROPERTIES.videoBitRate || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.audioBitRate = undefined;
	} else {
		this.audioBitRate = __SLAG_PROPERTIES.audioBitRate || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.deliveryType = undefined;
	} else {
		this.deliveryType = __SLAG_PROPERTIES.deliveryType || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.languages = undefined;
	} else {
		this.languages = __SLAG_PROPERTIES.languages || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.rights = undefined;
	} else {
		this.rights = __SLAG_PROPERTIES.rights || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.publishers = undefined;
	} else {
		this.publishers = __SLAG_PROPERTIES.publishers || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.contributors = undefined;
	} else {
		this.contributors = __SLAG_PROPERTIES.contributors || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.coverage = undefined;
	} else {
		this.coverage = __SLAG_PROPERTIES.coverage || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.rating = undefined;
	} else {
		this.rating = __SLAG_PROPERTIES.rating || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ratingDescription = undefined;
	} else {
		this.ratingDescription = __SLAG_PROPERTIES.ratingDescription || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.playCount = undefined;
	} else {
		this.playCount = __SLAG_PROPERTIES.playCount || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.information = undefined;
	} else {
		this.information = __SLAG_PROPERTIES.information || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.director = undefined;
	} else {
		this.director = __SLAG_PROPERTIES.director || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.producer = undefined;
	} else {
		this.producer = __SLAG_PROPERTIES.producer || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.genre = undefined;
	} else {
		this.genre = __SLAG_PROPERTIES.genre || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.performers = undefined;
	} else {
		this.performers = __SLAG_PROPERTIES.performers || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.originalFormat = undefined;
	} else {
		this.originalFormat = __SLAG_PROPERTIES.originalFormat || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.originalSource = undefined;
	} else {
		this.originalSource = __SLAG_PROPERTIES.originalSource || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.local = undefined;
	} else {
		this.local = __SLAG_PROPERTIES.local || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.contentRating = undefined;
	} else {
		this.contentRating = __SLAG_PROPERTIES.contentRating || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.url = undefined;
	} else {
		this.url = __SLAG_PROPERTIES.url || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.fullyFormattedAddress = undefined;
	} else {
		this.fullyFormattedAddress = __SLAG_PROPERTIES.fullyFormattedAddress || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.subThoroughfare = undefined;
	} else {
		this.subThoroughfare = __SLAG_PROPERTIES.subThoroughfare || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.thoroughfare = undefined;
	} else {
		this.thoroughfare = __SLAG_PROPERTIES.thoroughfare || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.postalCode = undefined;
	} else {
		this.postalCode = __SLAG_PROPERTIES.postalCode || '';
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
SearchableItemAttributeSet.prototype.addEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
SearchableItemAttributeSet.prototype.removeEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
SearchableItemAttributeSet.prototype.fireEvent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
SearchableItemAttributeSet.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
SearchableItemAttributeSet.prototype.getBubbleParent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
SearchableItemAttributeSet.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
SearchableItemAttributeSet.prototype.getDisplayName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.displayName;
};
SearchableItemAttributeSet.prototype.setDisplayName = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.displayName = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getAlternateNames = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.alternateNames;
};
SearchableItemAttributeSet.prototype.setAlternateNames = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.alternateNames = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getPath = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.path;
};
SearchableItemAttributeSet.prototype.setPath = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.path = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getContentURL = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.contentURL;
};
SearchableItemAttributeSet.prototype.setContentURL = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.contentURL = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getThumbnailURL = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.thumbnailURL;
};
SearchableItemAttributeSet.prototype.setThumbnailURL = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.thumbnailURL = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getThumbnailData = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.thumbnailData;
};
SearchableItemAttributeSet.prototype.setThumbnailData = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.thumbnailData = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getRelatedUniqueIdentifier = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.relatedUniqueIdentifier;
};
SearchableItemAttributeSet.prototype.setRelatedUniqueIdentifier = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.relatedUniqueIdentifier = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getMetadataModificationDate = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.metadataModificationDate;
};
SearchableItemAttributeSet.prototype.setMetadataModificationDate = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.metadataModificationDate = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getContentType = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.contentType;
};
SearchableItemAttributeSet.prototype.setContentType = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.contentType = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getContentTypeTree = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.contentTypeTree;
};
SearchableItemAttributeSet.prototype.setContentTypeTree = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.contentTypeTree = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getKeywords = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.keywords;
};
SearchableItemAttributeSet.prototype.setKeywords = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.keywords = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getTitle = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.title;
};
SearchableItemAttributeSet.prototype.setTitle = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.title = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getSubject = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.subject;
};
SearchableItemAttributeSet.prototype.setSubject = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.subject = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getTheme = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.theme;
};
SearchableItemAttributeSet.prototype.setTheme = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.theme = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getContentDescription = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.contentDescription;
};
SearchableItemAttributeSet.prototype.setContentDescription = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.contentDescription = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getIdentifier = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.identifier;
};
SearchableItemAttributeSet.prototype.setIdentifier = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.identifier = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getAudiences = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.audiences;
};
SearchableItemAttributeSet.prototype.setAudiences = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.audiences = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getFileSize = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.fileSize;
};
SearchableItemAttributeSet.prototype.setFileSize = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.fileSize = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getPageCount = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.pageCount;
};
SearchableItemAttributeSet.prototype.setPageCount = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.pageCount = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getPageWidth = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.pageWidth;
};
SearchableItemAttributeSet.prototype.setPageWidth = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.pageWidth = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getPageHeight = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.pageHeight;
};
SearchableItemAttributeSet.prototype.setPageHeight = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.pageHeight = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getSecurityMethod = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.securityMethod;
};
SearchableItemAttributeSet.prototype.setSecurityMethod = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.securityMethod = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getCreator = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.creator;
};
SearchableItemAttributeSet.prototype.setCreator = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.creator = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getEncodingApplications = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.encodingApplications;
};
SearchableItemAttributeSet.prototype.setEncodingApplications = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.encodingApplications = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getKind = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.kind;
};
SearchableItemAttributeSet.prototype.setKind = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.kind = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getFontNames = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.fontNames;
};
SearchableItemAttributeSet.prototype.setFontNames = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.fontNames = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getAudioSampleRate = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.audioSampleRate;
};
SearchableItemAttributeSet.prototype.setAudioSampleRate = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.audioSampleRate = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getAudioChannelCount = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.audioChannelCount;
};
SearchableItemAttributeSet.prototype.setAudioChannelCount = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.audioChannelCount = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getTempo = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tempo;
};
SearchableItemAttributeSet.prototype.setTempo = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tempo = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getKeySignature = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.keySignature;
};
SearchableItemAttributeSet.prototype.setKeySignature = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.keySignature = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getTimeSignature = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.timeSignature;
};
SearchableItemAttributeSet.prototype.setTimeSignature = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.timeSignature = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getAudioEncodingApplication = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.audioEncodingApplication;
};
SearchableItemAttributeSet.prototype.setAudioEncodingApplication = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.audioEncodingApplication = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getComposer = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.composer;
};
SearchableItemAttributeSet.prototype.setComposer = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.composer = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getLyricist = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lyricist;
};
SearchableItemAttributeSet.prototype.setLyricist = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lyricist = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getAlbum = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.album;
};
SearchableItemAttributeSet.prototype.setAlbum = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.album = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getArtist = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.artist;
};
SearchableItemAttributeSet.prototype.setArtist = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.artist = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getAudioTrackNumber = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.audioTrackNumber;
};
SearchableItemAttributeSet.prototype.setAudioTrackNumber = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.audioTrackNumber = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getRecordingDate = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.recordingDate;
};
SearchableItemAttributeSet.prototype.setRecordingDate = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.recordingDate = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getMusicalGenre = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.musicalGenre;
};
SearchableItemAttributeSet.prototype.setMusicalGenre = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.musicalGenre = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getGeneralMIDISequence = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.generalMIDISequence;
};
SearchableItemAttributeSet.prototype.setGeneralMIDISequence = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.generalMIDISequence = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getMusicalInstrumentCategory = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.musicalInstrumentCategory;
};
SearchableItemAttributeSet.prototype.setMusicalInstrumentCategory = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.musicalInstrumentCategory = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getMusicalInstrumentName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.musicalInstrumentName;
};
SearchableItemAttributeSet.prototype.setMusicalInstrumentName = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.musicalInstrumentName = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getSupportsPhoneCall = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.supportsPhoneCall;
};
SearchableItemAttributeSet.prototype.setSupportsPhoneCall = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.supportsPhoneCall = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getSupportsNavigation = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.supportsNavigation;
};
SearchableItemAttributeSet.prototype.setSupportsNavigation = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.supportsNavigation = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getContainerTitle = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.containerTitle;
};
SearchableItemAttributeSet.prototype.setContainerTitle = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.containerTitle = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getContainerDisplayName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.containerDisplayName;
};
SearchableItemAttributeSet.prototype.setContainerDisplayName = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.containerDisplayName = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getContainerIdentifier = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.containerIdentifier;
};
SearchableItemAttributeSet.prototype.setContainerIdentifier = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.containerIdentifier = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getContainerOrder = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.containerOrder;
};
SearchableItemAttributeSet.prototype.setContainerOrder = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.containerOrder = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getEditors = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.editors;
};
SearchableItemAttributeSet.prototype.setEditors = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.editors = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getParticipants = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.participants;
};
SearchableItemAttributeSet.prototype.setParticipants = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.participants = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getProjects = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.projects;
};
SearchableItemAttributeSet.prototype.setProjects = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.projects = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getDownloadedDate = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.downloadedDate;
};
SearchableItemAttributeSet.prototype.setDownloadedDate = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.downloadedDate = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getLastUsedDate = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lastUsedDate;
};
SearchableItemAttributeSet.prototype.setLastUsedDate = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lastUsedDate = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getContentCreationDate = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.contentCreationDate;
};
SearchableItemAttributeSet.prototype.setContentCreationDate = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.contentCreationDate = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getContentModificationDate = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.contentModificationDate;
};
SearchableItemAttributeSet.prototype.setContentModificationDate = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.contentModificationDate = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getAddedDate = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.addedDate;
};
SearchableItemAttributeSet.prototype.setAddedDate = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.addedDate = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getContentSources = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.contentSources;
};
SearchableItemAttributeSet.prototype.setContentSources = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.contentSources = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getComment = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.comment;
};
SearchableItemAttributeSet.prototype.setComment = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.comment = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getCopyright = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.copyright;
};
SearchableItemAttributeSet.prototype.setCopyright = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.copyright = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getDuration = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.duration;
};
SearchableItemAttributeSet.prototype.setDuration = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.duration = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getContactKeywords = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.contactKeywords;
};
SearchableItemAttributeSet.prototype.setContactKeywords = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.contactKeywords = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getCodecs = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.codecs;
};
SearchableItemAttributeSet.prototype.setCodecs = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.codecs = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getOrganizations = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.organizations;
};
SearchableItemAttributeSet.prototype.setOrganizations = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.organizations = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getMediaTypes = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.mediaTypes;
};
SearchableItemAttributeSet.prototype.setMediaTypes = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.mediaTypes = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getVersion = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.version;
};
SearchableItemAttributeSet.prototype.setVersion = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.version = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getRole = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.role;
};
SearchableItemAttributeSet.prototype.setRole = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.role = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getStreamable = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.streamable;
};
SearchableItemAttributeSet.prototype.setStreamable = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.streamable = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getTotalBitRate = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.totalBitRate;
};
SearchableItemAttributeSet.prototype.setTotalBitRate = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.totalBitRate = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getVideoBitRate = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.videoBitRate;
};
SearchableItemAttributeSet.prototype.setVideoBitRate = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.videoBitRate = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getAudioBitRate = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.audioBitRate;
};
SearchableItemAttributeSet.prototype.setAudioBitRate = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.audioBitRate = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getDeliveryType = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.deliveryType;
};
SearchableItemAttributeSet.prototype.setDeliveryType = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.deliveryType = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getLanguages = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.languages;
};
SearchableItemAttributeSet.prototype.setLanguages = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.languages = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getRights = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rights;
};
SearchableItemAttributeSet.prototype.setRights = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.rights = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getPublishers = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.publishers;
};
SearchableItemAttributeSet.prototype.setPublishers = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.publishers = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getContributors = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.contributors;
};
SearchableItemAttributeSet.prototype.setContributors = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.contributors = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getCoverage = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.coverage;
};
SearchableItemAttributeSet.prototype.setCoverage = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.coverage = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getRating = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rating;
};
SearchableItemAttributeSet.prototype.setRating = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.rating = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getRatingDescription = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.ratingDescription;
};
SearchableItemAttributeSet.prototype.setRatingDescription = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.ratingDescription = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getPlayCount = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.playCount;
};
SearchableItemAttributeSet.prototype.setPlayCount = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.playCount = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getInformation = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.information;
};
SearchableItemAttributeSet.prototype.setInformation = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.information = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getDirector = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.director;
};
SearchableItemAttributeSet.prototype.setDirector = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.director = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getProducer = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.producer;
};
SearchableItemAttributeSet.prototype.setProducer = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.producer = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getGenre = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.genre;
};
SearchableItemAttributeSet.prototype.setGenre = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.genre = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getPerformers = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.performers;
};
SearchableItemAttributeSet.prototype.setPerformers = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.performers = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getOriginalFormat = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.originalFormat;
};
SearchableItemAttributeSet.prototype.setOriginalFormat = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.originalFormat = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getOriginalSource = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.originalSource;
};
SearchableItemAttributeSet.prototype.setOriginalSource = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.originalSource = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getLocal = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.local;
};
SearchableItemAttributeSet.prototype.setLocal = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.local = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getContentRating = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.contentRating;
};
SearchableItemAttributeSet.prototype.setContentRating = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.contentRating = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getUrl = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.url;
};
SearchableItemAttributeSet.prototype.setUrl = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.url = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getFullyFormattedAddress = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.fullyFormattedAddress;
};
SearchableItemAttributeSet.prototype.setFullyFormattedAddress = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.fullyFormattedAddress = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getSubThoroughfare = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.subThoroughfare;
};
SearchableItemAttributeSet.prototype.setSubThoroughfare = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.subThoroughfare = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getThoroughfare = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.thoroughfare;
};
SearchableItemAttributeSet.prototype.setThoroughfare = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.thoroughfare = __SLAG__PROPERTY;
};
SearchableItemAttributeSet.prototype.getPostalCode = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.postalCode;
};
SearchableItemAttributeSet.prototype.setPostalCode = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.postalCode = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new SearchableItemAttributeSet(properties);
};