var crypto = require('crypto');
function Event(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbles',
			'cancelBubble',
			'source',
			'type',
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
	if (__SLAG__properties.bubbles) {
		throw new Error('Ti.Event.bubbles is read only property');
	}
	this.bubbles = true;
	this.cancelBubble = __SLAG__properties.cancelBubble || true;
	if (__SLAG__properties.source) {
		throw new Error('Ti.Event.source is read only property');
	}
	this.source = {};
	if (__SLAG__properties.type) {
		throw new Error('Ti.Event.type is read only property');
	}
	this.type = '';
	this.id = __SLAG__properties.id || '';
	return this;
}
module.exports = function (properties) {
	return new Event(properties);
};