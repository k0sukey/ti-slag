var crypto = require('crypto');
function Calendar(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
			'hidden',
			'id',
			'name',
			'selected',
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
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Calendar.Calendar.apiName is read only property');
	}
	this.apiName = 'Ti.Calendar.Calendar';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.hidden) {
		throw new Error('Ti.Calendar.Calendar.hidden is read only property');
	}
	this.hidden = true;
	if (__SLAG__properties.id) {
		throw new Error('Ti.Calendar.Calendar.id is read only property');
	}
	this.id = '';
	if (__SLAG__properties.name) {
		throw new Error('Ti.Calendar.Calendar.name is read only property');
	}
	this.name = '';
	if (__SLAG__properties.selected) {
		throw new Error('Ti.Calendar.Calendar.selected is read only property');
	}
	this.selected = true;
	this.id = __SLAG__properties.id || '';
	return this;
}
Calendar.prototype.addEventListener = function () {
};
Calendar.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Calendar.prototype.createEvent = function (params) {
	var Event = require('./Calendar/Event');
	return Event(params);
};
Calendar.prototype.fireEvent = function () {
};
Calendar.prototype.getApiName = function () {
	return this.apiName;
};
Calendar.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Calendar.prototype.getEventById = function () {
	return {};
};
Calendar.prototype.getEventsBetweenDates = function () {
	return [];
};
Calendar.prototype.getEventsInDate = function () {
	return [];
};
Calendar.prototype.getEventsInMonth = function () {
	return [];
};
Calendar.prototype.getEventsInYear = function () {
	return [];
};
Calendar.prototype.getHidden = function () {
	return this.hidden;
};
Calendar.prototype.getId = function () {
	return this.id;
};
Calendar.prototype.getName = function () {
	return this.name;
};
Calendar.prototype.getSelected = function () {
	return this.selected;
};
Calendar.prototype.removeEventListener = function () {
};
Calendar.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new Calendar(properties);
};