var crypto = require('crypto');
function SystemIcon(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'BOOKMARKS',
			'CONTACTS',
			'DOWNLOADS',
			'FAVORITES',
			'FEATURED',
			'HISTORY',
			'MORE',
			'MOST_RECENT',
			'MOST_VIEWED',
			'RECENTS',
			'SEARCH',
			'TOP_RATED',
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
		throw new Error('Ti.UI.iPhone.SystemIcon.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPhone.SystemIcon';
	if (__SLAG_PROPERTIES.BOOKMARKS) {
		throw new Error('Ti.UI.iPhone.SystemIcon.BOOKMARKS is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BOOKMARKS = undefined;
	} else {
		this.BOOKMARKS = 0;
	}
	if (__SLAG_PROPERTIES.CONTACTS) {
		throw new Error('Ti.UI.iPhone.SystemIcon.CONTACTS is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CONTACTS = undefined;
	} else {
		this.CONTACTS = 0;
	}
	if (__SLAG_PROPERTIES.DOWNLOADS) {
		throw new Error('Ti.UI.iPhone.SystemIcon.DOWNLOADS is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DOWNLOADS = undefined;
	} else {
		this.DOWNLOADS = 0;
	}
	if (__SLAG_PROPERTIES.FAVORITES) {
		throw new Error('Ti.UI.iPhone.SystemIcon.FAVORITES is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FAVORITES = undefined;
	} else {
		this.FAVORITES = 0;
	}
	if (__SLAG_PROPERTIES.FEATURED) {
		throw new Error('Ti.UI.iPhone.SystemIcon.FEATURED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FEATURED = undefined;
	} else {
		this.FEATURED = 0;
	}
	if (__SLAG_PROPERTIES.HISTORY) {
		throw new Error('Ti.UI.iPhone.SystemIcon.HISTORY is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.HISTORY = undefined;
	} else {
		this.HISTORY = 0;
	}
	if (__SLAG_PROPERTIES.MORE) {
		throw new Error('Ti.UI.iPhone.SystemIcon.MORE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MORE = undefined;
	} else {
		this.MORE = 0;
	}
	if (__SLAG_PROPERTIES.MOST_RECENT) {
		throw new Error('Ti.UI.iPhone.SystemIcon.MOST_RECENT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MOST_RECENT = undefined;
	} else {
		this.MOST_RECENT = 0;
	}
	if (__SLAG_PROPERTIES.MOST_VIEWED) {
		throw new Error('Ti.UI.iPhone.SystemIcon.MOST_VIEWED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MOST_VIEWED = undefined;
	} else {
		this.MOST_VIEWED = 0;
	}
	if (__SLAG_PROPERTIES.RECENTS) {
		throw new Error('Ti.UI.iPhone.SystemIcon.RECENTS is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.RECENTS = undefined;
	} else {
		this.RECENTS = 0;
	}
	if (__SLAG_PROPERTIES.SEARCH) {
		throw new Error('Ti.UI.iPhone.SystemIcon.SEARCH is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SEARCH = undefined;
	} else {
		this.SEARCH = 0;
	}
	if (__SLAG_PROPERTIES.TOP_RATED) {
		throw new Error('Ti.UI.iPhone.SystemIcon.TOP_RATED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TOP_RATED = undefined;
	} else {
		this.TOP_RATED = 0;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
SystemIcon.prototype.addEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
SystemIcon.prototype.removeEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
SystemIcon.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
SystemIcon.prototype.fireEvent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
SystemIcon.prototype.getBubbleParent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
SystemIcon.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
SystemIcon.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
module.exports = function (properties) {
	return new SystemIcon(properties);
};