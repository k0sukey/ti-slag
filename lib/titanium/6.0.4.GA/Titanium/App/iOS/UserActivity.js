var crypto = require('crypto');
function UserActivity(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'activityType',
			'eligibleForPublicIndexing',
			'eligibleForSearch',
			'eligibleForHandoff',
			'expirationDate',
			'keywords',
			'needsSave',
			'requiredUserInfoKeys',
			'supported',
			'title',
			'userInfo',
			'webpageURL',
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
		throw new Error('Ti.App.iOS.UserActivity.apiName is read only property');
	}
	this.apiName = 'Ti.App.iOS.UserActivity';
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activityType = undefined;
	} else {
		this.activityType = __SLAG_PROPERTIES.activityType || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.eligibleForPublicIndexing = undefined;
	} else {
		this.eligibleForPublicIndexing = __SLAG_PROPERTIES.eligibleForPublicIndexing || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.eligibleForSearch = undefined;
	} else {
		this.eligibleForSearch = __SLAG_PROPERTIES.eligibleForSearch || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.eligibleForHandoff = undefined;
	} else {
		this.eligibleForHandoff = __SLAG_PROPERTIES.eligibleForHandoff || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.expirationDate = undefined;
	} else {
		this.expirationDate = __SLAG_PROPERTIES.expirationDate || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.keywords = undefined;
	} else {
		this.keywords = __SLAG_PROPERTIES.keywords || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.needsSave = undefined;
	} else {
		this.needsSave = __SLAG_PROPERTIES.needsSave || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.requiredUserInfoKeys = undefined;
	} else {
		this.requiredUserInfoKeys = __SLAG_PROPERTIES.requiredUserInfoKeys || '';
	}
	if (__SLAG_PROPERTIES.supported) {
		throw new Error('Ti.App.iOS.UserActivity.supported was deprecated, since 5.1.0');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.title = undefined;
	} else {
		this.title = __SLAG_PROPERTIES.title || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.userInfo = undefined;
	} else {
		this.userInfo = __SLAG_PROPERTIES.userInfo || {};
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.webpageURL = undefined;
	} else {
		this.webpageURL = __SLAG_PROPERTIES.webpageURL || '';
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
UserActivity.prototype.addEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UserActivity.prototype.removeEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UserActivity.prototype.fireEvent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UserActivity.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
UserActivity.prototype.addContentAttributeSet = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UserActivity.prototype.becomeCurrent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UserActivity.prototype.invalidate = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UserActivity.prototype.resignCurrent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
UserActivity.prototype.isSupported = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
UserActivity.prototype.getBubbleParent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
UserActivity.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
UserActivity.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
UserActivity.prototype.getActivityType = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activityType;
};
UserActivity.prototype.setActivityType = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activityType = __SLAG__PROPERTY;
};
UserActivity.prototype.getEligibleForPublicIndexing = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.eligibleForPublicIndexing;
};
UserActivity.prototype.setEligibleForPublicIndexing = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.eligibleForPublicIndexing = __SLAG__PROPERTY;
};
UserActivity.prototype.getEligibleForSearch = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.eligibleForSearch;
};
UserActivity.prototype.setEligibleForSearch = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.eligibleForSearch = __SLAG__PROPERTY;
};
UserActivity.prototype.getEligibleForHandoff = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.eligibleForHandoff;
};
UserActivity.prototype.setEligibleForHandoff = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.eligibleForHandoff = __SLAG__PROPERTY;
};
UserActivity.prototype.getExpirationDate = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.expirationDate;
};
UserActivity.prototype.setExpirationDate = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.expirationDate = __SLAG__PROPERTY;
};
UserActivity.prototype.getKeywords = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.keywords;
};
UserActivity.prototype.setKeywords = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.keywords = __SLAG__PROPERTY;
};
UserActivity.prototype.getNeedsSave = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.needsSave;
};
UserActivity.prototype.setNeedsSave = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.needsSave = __SLAG__PROPERTY;
};
UserActivity.prototype.getRequiredUserInfoKeys = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.requiredUserInfoKeys;
};
UserActivity.prototype.setRequiredUserInfoKeys = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.requiredUserInfoKeys = __SLAG__PROPERTY;
};
UserActivity.prototype.getSupported = function () {
	throw new Error('Ti.App.iOS.UserActivity.getSupported was deprecated, since 5.1.0');
};
UserActivity.prototype.setSupported = function () {
	throw new Error('Ti.App.iOS.UserActivity.setSupported was deprecated, since 5.1.0');
};
UserActivity.prototype.getTitle = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.title;
};
UserActivity.prototype.setTitle = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.title = __SLAG__PROPERTY;
};
UserActivity.prototype.getUserInfo = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.userInfo;
};
UserActivity.prototype.setUserInfo = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.userInfo = __SLAG__PROPERTY;
};
UserActivity.prototype.getWebpageURL = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.webpageURL;
};
UserActivity.prototype.setWebpageURL = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.webpageURL = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new UserActivity(properties);
};