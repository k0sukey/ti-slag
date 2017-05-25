var crypto = require('crypto');
function SystemButton(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'ACTION',
			'ACTIVITY',
			'ADD',
			'BOOKMARKS',
			'CAMERA',
			'CANCEL',
			'COMPOSE',
			'CONTACT_ADD',
			'DISCLOSURE',
			'DONE',
			'EDIT',
			'FAST_FORWARD',
			'FIXED_SPACE',
			'FLEXIBLE_SPACE',
			'INFO_DARK',
			'INFO_LIGHT',
			'ORGANIZE',
			'PAUSE',
			'PLAY',
			'REFRESH',
			'REPLY',
			'REWIND',
			'SAVE',
			'SPINNER',
			'STOP',
			'TRASH',
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
		throw new Error('Ti.UI.iPhone.SystemButton.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPhone.SystemButton';
	if (__SLAG_PROPERTIES.ACTION) {
		throw new Error('Ti.UI.iPhone.SystemButton.ACTION is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTION = undefined;
	} else {
		this.ACTION = 0;
	}
	if (__SLAG_PROPERTIES.ACTIVITY) {
		throw new Error('Ti.UI.iPhone.SystemButton.ACTIVITY is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTIVITY = undefined;
	} else {
		this.ACTIVITY = 0;
	}
	if (__SLAG_PROPERTIES.ADD) {
		throw new Error('Ti.UI.iPhone.SystemButton.ADD is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ADD = undefined;
	} else {
		this.ADD = 0;
	}
	if (__SLAG_PROPERTIES.BOOKMARKS) {
		throw new Error('Ti.UI.iPhone.SystemButton.BOOKMARKS is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BOOKMARKS = undefined;
	} else {
		this.BOOKMARKS = 0;
	}
	if (__SLAG_PROPERTIES.CAMERA) {
		throw new Error('Ti.UI.iPhone.SystemButton.CAMERA is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CAMERA = undefined;
	} else {
		this.CAMERA = 0;
	}
	if (__SLAG_PROPERTIES.CANCEL) {
		throw new Error('Ti.UI.iPhone.SystemButton.CANCEL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CANCEL = undefined;
	} else {
		this.CANCEL = 0;
	}
	if (__SLAG_PROPERTIES.COMPOSE) {
		throw new Error('Ti.UI.iPhone.SystemButton.COMPOSE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.COMPOSE = undefined;
	} else {
		this.COMPOSE = 0;
	}
	if (__SLAG_PROPERTIES.CONTACT_ADD) {
		throw new Error('Ti.UI.iPhone.SystemButton.CONTACT_ADD is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CONTACT_ADD = undefined;
	} else {
		this.CONTACT_ADD = 0;
	}
	if (__SLAG_PROPERTIES.DISCLOSURE) {
		throw new Error('Ti.UI.iPhone.SystemButton.DISCLOSURE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DISCLOSURE = undefined;
	} else {
		this.DISCLOSURE = 0;
	}
	if (__SLAG_PROPERTIES.DONE) {
		throw new Error('Ti.UI.iPhone.SystemButton.DONE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DONE = undefined;
	} else {
		this.DONE = 0;
	}
	if (__SLAG_PROPERTIES.EDIT) {
		throw new Error('Ti.UI.iPhone.SystemButton.EDIT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EDIT = undefined;
	} else {
		this.EDIT = 0;
	}
	if (__SLAG_PROPERTIES.FAST_FORWARD) {
		throw new Error('Ti.UI.iPhone.SystemButton.FAST_FORWARD is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FAST_FORWARD = undefined;
	} else {
		this.FAST_FORWARD = 0;
	}
	if (__SLAG_PROPERTIES.FIXED_SPACE) {
		throw new Error('Ti.UI.iPhone.SystemButton.FIXED_SPACE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FIXED_SPACE = undefined;
	} else {
		this.FIXED_SPACE = 0;
	}
	if (__SLAG_PROPERTIES.FLEXIBLE_SPACE) {
		throw new Error('Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLEXIBLE_SPACE = undefined;
	} else {
		this.FLEXIBLE_SPACE = 0;
	}
	if (__SLAG_PROPERTIES.INFO_DARK) {
		throw new Error('Ti.UI.iPhone.SystemButton.INFO_DARK is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.INFO_DARK = undefined;
	} else {
		this.INFO_DARK = 0;
	}
	if (__SLAG_PROPERTIES.INFO_LIGHT) {
		throw new Error('Ti.UI.iPhone.SystemButton.INFO_LIGHT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.INFO_LIGHT = undefined;
	} else {
		this.INFO_LIGHT = 0;
	}
	if (__SLAG_PROPERTIES.ORGANIZE) {
		throw new Error('Ti.UI.iPhone.SystemButton.ORGANIZE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ORGANIZE = undefined;
	} else {
		this.ORGANIZE = 0;
	}
	if (__SLAG_PROPERTIES.PAUSE) {
		throw new Error('Ti.UI.iPhone.SystemButton.PAUSE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PAUSE = undefined;
	} else {
		this.PAUSE = 0;
	}
	if (__SLAG_PROPERTIES.PLAY) {
		throw new Error('Ti.UI.iPhone.SystemButton.PLAY is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PLAY = undefined;
	} else {
		this.PLAY = 0;
	}
	if (__SLAG_PROPERTIES.REFRESH) {
		throw new Error('Ti.UI.iPhone.SystemButton.REFRESH is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.REFRESH = undefined;
	} else {
		this.REFRESH = 0;
	}
	if (__SLAG_PROPERTIES.REPLY) {
		throw new Error('Ti.UI.iPhone.SystemButton.REPLY is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.REPLY = undefined;
	} else {
		this.REPLY = 0;
	}
	if (__SLAG_PROPERTIES.REWIND) {
		throw new Error('Ti.UI.iPhone.SystemButton.REWIND is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.REWIND = undefined;
	} else {
		this.REWIND = 0;
	}
	if (__SLAG_PROPERTIES.SAVE) {
		throw new Error('Ti.UI.iPhone.SystemButton.SAVE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SAVE = undefined;
	} else {
		this.SAVE = 0;
	}
	if (__SLAG_PROPERTIES.SPINNER) {
		throw new Error('Ti.UI.iPhone.SystemButton.SPINNER is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SPINNER = undefined;
	} else {
		this.SPINNER = 0;
	}
	if (__SLAG_PROPERTIES.STOP) {
		throw new Error('Ti.UI.iPhone.SystemButton.STOP is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.STOP = undefined;
	} else {
		this.STOP = 0;
	}
	if (__SLAG_PROPERTIES.TRASH) {
		throw new Error('Ti.UI.iPhone.SystemButton.TRASH is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TRASH = undefined;
	} else {
		this.TRASH = 0;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
SystemButton.prototype.addEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
SystemButton.prototype.removeEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
SystemButton.prototype.fireEvent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
SystemButton.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
SystemButton.prototype.getBubbleParent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
SystemButton.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
SystemButton.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
module.exports = function (properties) {
	return new SystemButton(properties);
};