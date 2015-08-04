var crypto = require('crypto');
function iPad(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'POPOVER_ARROW_DIRECTION_ANY',
			'POPOVER_ARROW_DIRECTION_DOWN',
			'POPOVER_ARROW_DIRECTION_LEFT',
			'POPOVER_ARROW_DIRECTION_RIGHT',
			'POPOVER_ARROW_DIRECTION_UNKNOWN',
			'POPOVER_ARROW_DIRECTION_UP',
			'apiName',
			'bubbleParent',
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
	if (__SLAG__properties.POPOVER_ARROW_DIRECTION_ANY) {
		throw new Error('Ti.UI.iPad.POPOVER_ARROW_DIRECTION_ANY is read only property');
	}
	this.POPOVER_ARROW_DIRECTION_ANY = 0;
	if (__SLAG__properties.POPOVER_ARROW_DIRECTION_DOWN) {
		throw new Error('Ti.UI.iPad.POPOVER_ARROW_DIRECTION_DOWN is read only property');
	}
	this.POPOVER_ARROW_DIRECTION_DOWN = 0;
	if (__SLAG__properties.POPOVER_ARROW_DIRECTION_LEFT) {
		throw new Error('Ti.UI.iPad.POPOVER_ARROW_DIRECTION_LEFT is read only property');
	}
	this.POPOVER_ARROW_DIRECTION_LEFT = 0;
	if (__SLAG__properties.POPOVER_ARROW_DIRECTION_RIGHT) {
		throw new Error('Ti.UI.iPad.POPOVER_ARROW_DIRECTION_RIGHT is read only property');
	}
	this.POPOVER_ARROW_DIRECTION_RIGHT = 0;
	if (__SLAG__properties.POPOVER_ARROW_DIRECTION_UNKNOWN) {
		throw new Error('Ti.UI.iPad.POPOVER_ARROW_DIRECTION_UNKNOWN is read only property');
	}
	this.POPOVER_ARROW_DIRECTION_UNKNOWN = 0;
	if (__SLAG__properties.POPOVER_ARROW_DIRECTION_UP) {
		throw new Error('Ti.UI.iPad.POPOVER_ARROW_DIRECTION_UP is read only property');
	}
	this.POPOVER_ARROW_DIRECTION_UP = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iPad.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPad';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
iPad.prototype.addEventListener = function () {
};
iPad.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
iPad.prototype.createDocumentViewer = function () {
	throw new Error('Ti.UI.iPad.createDocumentViewer was deprecated, since 3.0.0');
};
iPad.prototype.createPopover = function (params) {
	var Popover = require('./iPad/Popover');
	return Popover(params);
};
iPad.prototype.createSplitWindow = function (params) {
	var SplitWindow = require('./iPad/SplitWindow');
	return SplitWindow(params);
};
iPad.prototype.fireEvent = function () {
};
iPad.prototype.getApiName = function () {
	return this.apiName;
};
iPad.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
iPad.prototype.removeEventListener = function () {
};
iPad.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new iPad(properties);
};