var crypto = require('crypto');
function SystemButton(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
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
		throw new Error('Ti.UI.iPhone.SystemButton.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPhone.SystemButton';
	if (__SLAG__properties.ACTION) {
		throw new Error('Ti.UI.iPhone.SystemButton.ACTION is read only property');
	}
	this.ACTION = 0;
	if (__SLAG__properties.ACTIVITY) {
		throw new Error('Ti.UI.iPhone.SystemButton.ACTIVITY is read only property');
	}
	this.ACTIVITY = 0;
	if (__SLAG__properties.ADD) {
		throw new Error('Ti.UI.iPhone.SystemButton.ADD is read only property');
	}
	this.ADD = 0;
	if (__SLAG__properties.BOOKMARKS) {
		throw new Error('Ti.UI.iPhone.SystemButton.BOOKMARKS is read only property');
	}
	this.BOOKMARKS = 0;
	if (__SLAG__properties.CAMERA) {
		throw new Error('Ti.UI.iPhone.SystemButton.CAMERA is read only property');
	}
	this.CAMERA = 0;
	if (__SLAG__properties.CANCEL) {
		throw new Error('Ti.UI.iPhone.SystemButton.CANCEL is read only property');
	}
	this.CANCEL = 0;
	if (__SLAG__properties.COMPOSE) {
		throw new Error('Ti.UI.iPhone.SystemButton.COMPOSE is read only property');
	}
	this.COMPOSE = 0;
	if (__SLAG__properties.CONTACT_ADD) {
		throw new Error('Ti.UI.iPhone.SystemButton.CONTACT_ADD is read only property');
	}
	this.CONTACT_ADD = 0;
	if (__SLAG__properties.DISCLOSURE) {
		throw new Error('Ti.UI.iPhone.SystemButton.DISCLOSURE is read only property');
	}
	this.DISCLOSURE = 0;
	if (__SLAG__properties.DONE) {
		throw new Error('Ti.UI.iPhone.SystemButton.DONE is read only property');
	}
	this.DONE = 0;
	if (__SLAG__properties.EDIT) {
		throw new Error('Ti.UI.iPhone.SystemButton.EDIT is read only property');
	}
	this.EDIT = 0;
	if (__SLAG__properties.FAST_FORWARD) {
		throw new Error('Ti.UI.iPhone.SystemButton.FAST_FORWARD is read only property');
	}
	this.FAST_FORWARD = 0;
	if (__SLAG__properties.FIXED_SPACE) {
		throw new Error('Ti.UI.iPhone.SystemButton.FIXED_SPACE is read only property');
	}
	this.FIXED_SPACE = 0;
	if (__SLAG__properties.FLEXIBLE_SPACE) {
		throw new Error('Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE is read only property');
	}
	this.FLEXIBLE_SPACE = 0;
	if (__SLAG__properties.INFO_DARK) {
		throw new Error('Ti.UI.iPhone.SystemButton.INFO_DARK is read only property');
	}
	this.INFO_DARK = 0;
	if (__SLAG__properties.INFO_LIGHT) {
		throw new Error('Ti.UI.iPhone.SystemButton.INFO_LIGHT is read only property');
	}
	this.INFO_LIGHT = 0;
	if (__SLAG__properties.ORGANIZE) {
		throw new Error('Ti.UI.iPhone.SystemButton.ORGANIZE is read only property');
	}
	this.ORGANIZE = 0;
	if (__SLAG__properties.PAUSE) {
		throw new Error('Ti.UI.iPhone.SystemButton.PAUSE is read only property');
	}
	this.PAUSE = 0;
	if (__SLAG__properties.PLAY) {
		throw new Error('Ti.UI.iPhone.SystemButton.PLAY is read only property');
	}
	this.PLAY = 0;
	if (__SLAG__properties.REFRESH) {
		throw new Error('Ti.UI.iPhone.SystemButton.REFRESH is read only property');
	}
	this.REFRESH = 0;
	if (__SLAG__properties.REPLY) {
		throw new Error('Ti.UI.iPhone.SystemButton.REPLY is read only property');
	}
	this.REPLY = 0;
	if (__SLAG__properties.REWIND) {
		throw new Error('Ti.UI.iPhone.SystemButton.REWIND is read only property');
	}
	this.REWIND = 0;
	if (__SLAG__properties.SAVE) {
		throw new Error('Ti.UI.iPhone.SystemButton.SAVE is read only property');
	}
	this.SAVE = 0;
	if (__SLAG__properties.SPINNER) {
		throw new Error('Ti.UI.iPhone.SystemButton.SPINNER is read only property');
	}
	this.SPINNER = 0;
	if (__SLAG__properties.STOP) {
		throw new Error('Ti.UI.iPhone.SystemButton.STOP is read only property');
	}
	this.STOP = 0;
	if (__SLAG__properties.TRASH) {
		throw new Error('Ti.UI.iPhone.SystemButton.TRASH is read only property');
	}
	this.TRASH = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
SystemButton.prototype.addEventListener = function () {
};
SystemButton.prototype.removeEventListener = function () {
};
SystemButton.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
SystemButton.prototype.fireEvent = function () {
};
SystemButton.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
SystemButton.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
SystemButton.prototype.getApiName = function () {
	return this.apiName;
};
module.exports = function (properties) {
	return new SystemButton(properties);
};