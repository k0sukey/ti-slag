var crypto = require('crypto');
function Contacts(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'CONTACTS_KIND_ORGANIZATION',
			'CONTACTS_KIND_PERSON',
			'CONTACTS_SORT_FIRST_NAME',
			'CONTACTS_SORT_LAST_NAME',
			'AUTHORIZATION_AUTHORIZED',
			'AUTHORIZATION_DENIED',
			'AUTHORIZATION_RESTRICTED',
			'AUTHORIZATION_UNKNOWN',
			'contactsAuthorization',
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
		throw new Error('Ti.Contacts.apiName is read only property');
	}
	this.apiName = 'Ti.Contacts';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.CONTACTS_KIND_ORGANIZATION) {
		throw new Error('Ti.Contacts.CONTACTS_KIND_ORGANIZATION is read only property');
	}
	this.CONTACTS_KIND_ORGANIZATION = 0;
	if (__SLAG__properties.CONTACTS_KIND_PERSON) {
		throw new Error('Ti.Contacts.CONTACTS_KIND_PERSON is read only property');
	}
	this.CONTACTS_KIND_PERSON = 0;
	if (__SLAG__properties.CONTACTS_SORT_FIRST_NAME) {
		throw new Error('Ti.Contacts.CONTACTS_SORT_FIRST_NAME is read only property');
	}
	this.CONTACTS_SORT_FIRST_NAME = 0;
	if (__SLAG__properties.CONTACTS_SORT_LAST_NAME) {
		throw new Error('Ti.Contacts.CONTACTS_SORT_LAST_NAME is read only property');
	}
	this.CONTACTS_SORT_LAST_NAME = 0;
	if (__SLAG__properties.AUTHORIZATION_AUTHORIZED) {
		throw new Error('Ti.Contacts.AUTHORIZATION_AUTHORIZED is read only property');
	}
	this.AUTHORIZATION_AUTHORIZED = 0;
	if (__SLAG__properties.AUTHORIZATION_DENIED) {
		throw new Error('Ti.Contacts.AUTHORIZATION_DENIED is read only property');
	}
	this.AUTHORIZATION_DENIED = 0;
	if (__SLAG__properties.AUTHORIZATION_RESTRICTED) {
		throw new Error('Ti.Contacts.AUTHORIZATION_RESTRICTED is read only property');
	}
	this.AUTHORIZATION_RESTRICTED = 0;
	if (__SLAG__properties.AUTHORIZATION_UNKNOWN) {
		throw new Error('Ti.Contacts.AUTHORIZATION_UNKNOWN is read only property');
	}
	this.AUTHORIZATION_UNKNOWN = 0;
	if (__SLAG__properties.contactsAuthorization) {
		throw new Error('Ti.Contacts.contactsAuthorization is read only property');
	}
	this.contactsAuthorization = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Contacts.prototype.addEventListener = function () {
};
Contacts.prototype.removeEventListener = function () {
};
Contacts.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Contacts.prototype.fireEvent = function () {
};
Contacts.prototype.createGroup = function (params) {
	var Group = require('./Contacts/Group');
	return Group(params);
};
Contacts.prototype.createPerson = function (params) {
	var Person = require('./Contacts/Person');
	return Person(params);
};
Contacts.prototype.getAllGroups = function () {
	return [];
};
Contacts.prototype.getAllPeople = function () {
	return [];
};
Contacts.prototype.getGroupByID = function () {
	return {};
};
Contacts.prototype.getPeopleWithName = function () {
	return [];
};
Contacts.prototype.getPersonByID = function () {
	return {};
};
Contacts.prototype.removeGroup = function () {
};
Contacts.prototype.removePerson = function () {
};
Contacts.prototype.revert = function () {
};
Contacts.prototype.save = function () {
};
Contacts.prototype.showContacts = function () {
};
Contacts.prototype.requestAuthorization = function () {
};
Contacts.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Contacts.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Contacts.prototype.getApiName = function () {
	return this.apiName;
};
Contacts.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Contacts.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Contacts.prototype.getContactsAuthorization = function () {
	return this.contactsAuthorization;
};
module.exports = function (properties) {
	return new Contacts(properties);
};