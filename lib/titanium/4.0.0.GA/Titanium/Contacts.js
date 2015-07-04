function Contacts(properties) {
	properties = properties || {};
	this.AUTHORIZATION_AUTHORIZED = properties.AUTHORIZATION_AUTHORIZED || undefined;
	this.AUTHORIZATION_DENIED = properties.AUTHORIZATION_DENIED || undefined;
	this.AUTHORIZATION_RESTRICTED = properties.AUTHORIZATION_RESTRICTED || undefined;
	this.AUTHORIZATION_UNKNOWN = properties.AUTHORIZATION_UNKNOWN || undefined;
	this.CONTACTS_KIND_ORGANIZATION = properties.CONTACTS_KIND_ORGANIZATION || undefined;
	this.CONTACTS_KIND_PERSON = properties.CONTACTS_KIND_PERSON || undefined;
	this.CONTACTS_SORT_FIRST_NAME = properties.CONTACTS_SORT_FIRST_NAME || undefined;
	this.CONTACTS_SORT_LAST_NAME = properties.CONTACTS_SORT_LAST_NAME || undefined;
	this.apiName = 'Ti.Contacts';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.contactsAuthorization = properties.contactsAuthorization || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	return this;
}
Contacts.prototype.addEventListener = function () {
};
Contacts.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Contacts.prototype.createGroup = function (params) {
	var Group = require('./Contacts/Group');
	return Group(params);
};
Contacts.prototype.createPerson = function (params) {
	var Person = require('./Contacts/Person');
	return Person(params);
};
Contacts.prototype.fireEvent = function () {
};
Contacts.prototype.getAllGroups = function () {
	return [];
};
Contacts.prototype.getAllPeople = function () {
	return [];
};
Contacts.prototype.getApiName = function () {
	return '';
};
Contacts.prototype.getBubbleParent = function () {
	return true;
};
Contacts.prototype.getContactsAuthorization = function () {
	return 0;
};
Contacts.prototype.getGroupByID = function () {
	return {};
};
Contacts.prototype.getLifecycleContainer = function () {
	return {};
};
Contacts.prototype.getPeopleWithName = function () {
	return [];
};
Contacts.prototype.getPersonByID = function () {
	return {};
};
Contacts.prototype.removeEventListener = function () {
};
Contacts.prototype.removeGroup = function () {
};
Contacts.prototype.removePerson = function () {
};
Contacts.prototype.requestAuthorization = function () {
};
Contacts.prototype.revert = function () {
};
Contacts.prototype.save = function () {
};
Contacts.prototype.setBubbleParent = function () {
};
Contacts.prototype.setLifecycleContainer = function () {
};
Contacts.prototype.showContacts = function () {
};
module.exports = function (properties) {
	return new Contacts(properties);
};