var crypto = require('crypto');
function Analytics(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'lastEvent',
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
		throw new Error('Ti.Analytics.apiName is read only property');
	}
	this.apiName = 'Ti.Analytics';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.lastEvent) {
		throw new Error('Ti.Analytics.lastEvent is read only property');
	}
	this.lastEvent = '';
	this.id = __SLAG__properties.id || '';
	return this;
}
Analytics.prototype.addEvent = function () {
	throw new Error('Ti.Analytics.addEvent was deprecated, since 2.0.0');
};
Analytics.prototype.filterEvents = function () {
};
Analytics.prototype.settingsEvent = function () {
	throw new Error('Ti.Analytics.settingsEvent was deprecated, since 2.0.0');
};
Analytics.prototype.timedEvent = function () {
	throw new Error('Ti.Analytics.timedEvent was deprecated, since 2.0.0');
};
Analytics.prototype.userEvent = function () {
	throw new Error('Ti.Analytics.userEvent was deprecated, since 2.0.0');
};
Analytics.prototype.featureEvent = function () {
};
Analytics.prototype.navEvent = function () {
};
Analytics.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Analytics.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Analytics.prototype.getApiName = function () {
	return this.apiName;
};
Analytics.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Analytics.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Analytics.prototype.getLastEvent = function () {
	return this.lastEvent;
};
module.exports = function (properties) {
	return new Analytics(properties);
};