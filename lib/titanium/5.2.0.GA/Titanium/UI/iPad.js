var crypto = require('crypto');
function iPad(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'POPOVER_ARROW_DIRECTION_ANY',
			'POPOVER_ARROW_DIRECTION_DOWN',
			'POPOVER_ARROW_DIRECTION_LEFT',
			'POPOVER_ARROW_DIRECTION_RIGHT',
			'POPOVER_ARROW_DIRECTION_UNKNOWN',
			'POPOVER_ARROW_DIRECTION_UP',
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
		throw new Error('Ti.UI.iPad.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPad';
	if (__SLAG_PROPERTIES.POPOVER_ARROW_DIRECTION_ANY) {
		throw new Error('Ti.UI.iPad.POPOVER_ARROW_DIRECTION_ANY is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.POPOVER_ARROW_DIRECTION_ANY = undefined;
	} else {
		this.POPOVER_ARROW_DIRECTION_ANY = 0;
	}
	if (__SLAG_PROPERTIES.POPOVER_ARROW_DIRECTION_DOWN) {
		throw new Error('Ti.UI.iPad.POPOVER_ARROW_DIRECTION_DOWN is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.POPOVER_ARROW_DIRECTION_DOWN = undefined;
	} else {
		this.POPOVER_ARROW_DIRECTION_DOWN = 0;
	}
	if (__SLAG_PROPERTIES.POPOVER_ARROW_DIRECTION_LEFT) {
		throw new Error('Ti.UI.iPad.POPOVER_ARROW_DIRECTION_LEFT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.POPOVER_ARROW_DIRECTION_LEFT = undefined;
	} else {
		this.POPOVER_ARROW_DIRECTION_LEFT = 0;
	}
	if (__SLAG_PROPERTIES.POPOVER_ARROW_DIRECTION_RIGHT) {
		throw new Error('Ti.UI.iPad.POPOVER_ARROW_DIRECTION_RIGHT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.POPOVER_ARROW_DIRECTION_RIGHT = undefined;
	} else {
		this.POPOVER_ARROW_DIRECTION_RIGHT = 0;
	}
	if (__SLAG_PROPERTIES.POPOVER_ARROW_DIRECTION_UNKNOWN) {
		throw new Error('Ti.UI.iPad.POPOVER_ARROW_DIRECTION_UNKNOWN is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.POPOVER_ARROW_DIRECTION_UNKNOWN = undefined;
	} else {
		this.POPOVER_ARROW_DIRECTION_UNKNOWN = 0;
	}
	if (__SLAG_PROPERTIES.POPOVER_ARROW_DIRECTION_UP) {
		throw new Error('Ti.UI.iPad.POPOVER_ARROW_DIRECTION_UP is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.POPOVER_ARROW_DIRECTION_UP = undefined;
	} else {
		this.POPOVER_ARROW_DIRECTION_UP = 0;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
iPad.prototype.addEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
iPad.prototype.removeEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
iPad.prototype.fireEvent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
iPad.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
iPad.prototype.createDocumentViewer = function () {
	throw new Error('Ti.UI.iPad.createDocumentViewer was deprecated, since 3.0.0');
};
iPad.prototype.createPopover = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Popover = require('./iPad/Popover');
	return Popover(__SLAG_PROPERTY);
};
iPad.prototype.createSplitWindow = function () {
	throw new Error('Ti.UI.iPad.createSplitWindow was deprecated, since 3.6.0');
};
iPad.prototype.getBubbleParent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
iPad.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
iPad.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
module.exports = function (properties) {
	return new iPad(properties);
};