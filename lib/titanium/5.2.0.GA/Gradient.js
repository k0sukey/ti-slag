var crypto = require('crypto');
function Gradient(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'type',
			'startPoint',
			'endPoint',
			'startRadius',
			'endRadius',
			'colors',
			'backfillStart',
			'backfillEnd',
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
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.type = undefined;
	} else {
		this.type = __SLAG_PROPERTIES.type || '';
	}
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.startPoint = undefined;
	} else {
		this.startPoint = __SLAG_PROPERTIES.startPoint || {
			x: 0,
			y: 0
		};
	}
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.endPoint = undefined;
	} else {
		this.endPoint = __SLAG_PROPERTIES.endPoint || {
			x: 0,
			y: 0
		};
	}
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.startRadius = undefined;
	} else {
		this.startRadius = __SLAG_PROPERTIES.startRadius || 0;
	}
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.endRadius = undefined;
	} else {
		this.endRadius = __SLAG_PROPERTIES.endRadius || 0;
	}
	if ([
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.colors = undefined;
	} else {
		this.colors = __SLAG_PROPERTIES.colors || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.backfillStart = undefined;
	} else {
		this.backfillStart = __SLAG_PROPERTIES.backfillStart || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.backfillEnd = undefined;
	} else {
		this.backfillEnd = __SLAG_PROPERTIES.backfillEnd || true;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new Gradient(properties);
};