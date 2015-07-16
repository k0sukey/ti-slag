function Contacts(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Contacts';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.CONTACTS_KIND_ORGANIZATION = properties.CONTACTS_KIND_ORGANIZATION || 0;
	this.CONTACTS_KIND_PERSON = properties.CONTACTS_KIND_PERSON || 0;
	this.CONTACTS_SORT_FIRST_NAME = properties.CONTACTS_SORT_FIRST_NAME || 0;
	this.CONTACTS_SORT_LAST_NAME = properties.CONTACTS_SORT_LAST_NAME || 0;
	this.AUTHORIZATION_AUTHORIZED = properties.AUTHORIZATION_AUTHORIZED || 0;
	this.AUTHORIZATION_DENIED = properties.AUTHORIZATION_DENIED || 0;
	this.AUTHORIZATION_RESTRICTED = properties.AUTHORIZATION_RESTRICTED || 0;
	this.AUTHORIZATION_UNKNOWN = properties.AUTHORIZATION_UNKNOWN || 0;
	this.contactsAuthorization = properties.contactsAuthorization || 0;
	return this;
}
Contacts.prototype.addEventListener = function () {
};
Contacts.prototype.removeEventListener = function () {
};
Contacts.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
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
	return true;
};
Contacts.prototype.setBubbleParent = function () {
};
Contacts.prototype.getApiName = function () {
	return '';
};
Contacts.prototype.getLifecycleContainer = function () {
	return {};
};
Contacts.prototype.setLifecycleContainer = function () {
};
Contacts.prototype.getContactsAuthorization = function () {
	return 0;
};
module.exports = function (properties) {
	return new Contacts(properties);
};