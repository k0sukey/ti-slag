var crypto = require('crypto');
function Group(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
			'name',
			'recordId',
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
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Contacts.Group.apiName is read only property');
	}
	this.apiName = 'Ti.Contacts.Group';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.name = __SLAG__properties.name || '';
	this.recordId = __SLAG__properties.recordId || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Group.prototype.add = function () {
};
Group.prototype.addEventListener = function () {
};
Group.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Group.prototype.fireEvent = function () {
};
Group.prototype.getApiName = function () {
	return this.apiName;
};
Group.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Group.prototype.getName = function () {
	return this.name;
};
Group.prototype.getRecordId = function () {
	return this.recordId;
};
Group.prototype.members = function () {
	return [];
};
Group.prototype.remove = function () {
};
Group.prototype.removeEventListener = function () {
};
Group.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Group.prototype.setName = function (property) {
	this.name = property;
};
Group.prototype.setRecordId = function (property) {
	this.recordId = property;
};
Group.prototype.sortedMembers = function () {
	return [];
};
module.exports = function (properties) {
	return new Group(properties);
};