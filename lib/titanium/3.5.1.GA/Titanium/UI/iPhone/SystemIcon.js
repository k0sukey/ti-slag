var crypto = require('crypto');
function SystemIcon(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
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
			'apiName',
			'bubbleParent',
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
	if (__SLAG__properties.BOOKMARKS) {
		throw new Error('Ti.UI.iPhone.SystemIcon.BOOKMARKS is read only property');
	}
	this.BOOKMARKS = 0;
	if (__SLAG__properties.CONTACTS) {
		throw new Error('Ti.UI.iPhone.SystemIcon.CONTACTS is read only property');
	}
	this.CONTACTS = 0;
	if (__SLAG__properties.DOWNLOADS) {
		throw new Error('Ti.UI.iPhone.SystemIcon.DOWNLOADS is read only property');
	}
	this.DOWNLOADS = 0;
	if (__SLAG__properties.FAVORITES) {
		throw new Error('Ti.UI.iPhone.SystemIcon.FAVORITES is read only property');
	}
	this.FAVORITES = 0;
	if (__SLAG__properties.FEATURED) {
		throw new Error('Ti.UI.iPhone.SystemIcon.FEATURED is read only property');
	}
	this.FEATURED = 0;
	if (__SLAG__properties.HISTORY) {
		throw new Error('Ti.UI.iPhone.SystemIcon.HISTORY is read only property');
	}
	this.HISTORY = 0;
	if (__SLAG__properties.MORE) {
		throw new Error('Ti.UI.iPhone.SystemIcon.MORE is read only property');
	}
	this.MORE = 0;
	if (__SLAG__properties.MOST_RECENT) {
		throw new Error('Ti.UI.iPhone.SystemIcon.MOST_RECENT is read only property');
	}
	this.MOST_RECENT = 0;
	if (__SLAG__properties.MOST_VIEWED) {
		throw new Error('Ti.UI.iPhone.SystemIcon.MOST_VIEWED is read only property');
	}
	this.MOST_VIEWED = 0;
	if (__SLAG__properties.RECENTS) {
		throw new Error('Ti.UI.iPhone.SystemIcon.RECENTS is read only property');
	}
	this.RECENTS = 0;
	if (__SLAG__properties.SEARCH) {
		throw new Error('Ti.UI.iPhone.SystemIcon.SEARCH is read only property');
	}
	this.SEARCH = 0;
	if (__SLAG__properties.TOP_RATED) {
		throw new Error('Ti.UI.iPhone.SystemIcon.TOP_RATED is read only property');
	}
	this.TOP_RATED = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iPhone.SystemIcon.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPhone.SystemIcon';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
SystemIcon.prototype.addEventListener = function () {
};
SystemIcon.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
SystemIcon.prototype.fireEvent = function () {
};
SystemIcon.prototype.getApiName = function () {
	return this.apiName;
};
SystemIcon.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
SystemIcon.prototype.removeEventListener = function () {
};
SystemIcon.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new SystemIcon(properties);
};