var crypto = require('crypto');
function Contacts(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Contacts.apiName is read only property');
	}
	this.apiName = 'Ti.Contacts';
	this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	if (__SLAG_PROPERTIES.CONTACTS_KIND_ORGANIZATION) {
		throw new Error('Ti.Contacts.CONTACTS_KIND_ORGANIZATION is read only property');
	}
	this.CONTACTS_KIND_ORGANIZATION = 0;
	if (__SLAG_PROPERTIES.CONTACTS_KIND_PERSON) {
		throw new Error('Ti.Contacts.CONTACTS_KIND_PERSON is read only property');
	}
	this.CONTACTS_KIND_PERSON = 0;
	if (__SLAG_PROPERTIES.CONTACTS_SORT_FIRST_NAME) {
		throw new Error('Ti.Contacts.CONTACTS_SORT_FIRST_NAME is read only property');
	}
	this.CONTACTS_SORT_FIRST_NAME = 0;
	if (__SLAG_PROPERTIES.CONTACTS_SORT_LAST_NAME) {
		throw new Error('Ti.Contacts.CONTACTS_SORT_LAST_NAME is read only property');
	}
	this.CONTACTS_SORT_LAST_NAME = 0;
	if (__SLAG_PROPERTIES.AUTHORIZATION_AUTHORIZED) {
		throw new Error('Ti.Contacts.AUTHORIZATION_AUTHORIZED is read only property');
	}
	this.AUTHORIZATION_AUTHORIZED = 0;
	if (__SLAG_PROPERTIES.AUTHORIZATION_DENIED) {
		throw new Error('Ti.Contacts.AUTHORIZATION_DENIED is read only property');
	}
	this.AUTHORIZATION_DENIED = 0;
	if (__SLAG_PROPERTIES.AUTHORIZATION_RESTRICTED) {
		throw new Error('Ti.Contacts.AUTHORIZATION_RESTRICTED is read only property');
	}
	this.AUTHORIZATION_RESTRICTED = 0;
	if (__SLAG_PROPERTIES.AUTHORIZATION_UNKNOWN) {
		throw new Error('Ti.Contacts.AUTHORIZATION_UNKNOWN is read only property');
	}
	this.AUTHORIZATION_UNKNOWN = 0;
	if (__SLAG_PROPERTIES.contactsAuthorization) {
		throw new Error('Ti.Contacts.contactsAuthorization is read only property');
	}
	this.contactsAuthorization = 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Contacts.prototype.addEventListener = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Contacts.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Contacts.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Contacts.prototype.fireEvent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Contacts.prototype.createGroup = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Group = require('./Contacts/Group');
	return Group(__SLAG_PROPERTY);
};
Contacts.prototype.createPerson = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Person = require('./Contacts/Person');
	return Person(__SLAG_PROPERTY);
};
Contacts.prototype.getAllGroups = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return [];
};
Contacts.prototype.getAllPeople = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return [];
};
Contacts.prototype.getGroupByID = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Contacts.prototype.getPeopleWithName = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return [];
};
Contacts.prototype.getPersonByID = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Contacts.prototype.removeGroup = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Contacts.prototype.removePerson = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Contacts.prototype.revert = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Contacts.prototype.save = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Contacts.prototype.showContacts = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Contacts.prototype.requestAuthorization = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Contacts.prototype.getBubbleParent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Contacts.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Contacts.prototype.getApiName = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Contacts.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Contacts.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
Contacts.prototype.getContactsAuthorization = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.contactsAuthorization;
};
module.exports = function (properties) {
	return new Contacts(properties);
};