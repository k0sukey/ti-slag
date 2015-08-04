var crypto = require('crypto');
function Person(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'address',
			'alternateBirthday',
			'apiName',
			'birthday',
			'bubbleParent',
			'created',
			'date',
			'department',
			'email',
			'firstName',
			'firstPhonetic',
			'fullName',
			'id',
			'image',
			'instantMessage',
			'jobTitle',
			'kind',
			'lastName',
			'lastPhonetic',
			'lifecycleContainer',
			'middleName',
			'middlePhonetic',
			'modified',
			'nickname',
			'note',
			'organization',
			'phone',
			'prefix',
			'recordId',
			'relatedNames',
			'socialProfile',
			'suffix',
			'url',
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
	this.address = __SLAG__properties.address || {};
	this.alternateBirthday = __SLAG__properties.alternateBirthday || {};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Contacts.Person.apiName is read only property');
	}
	this.apiName = 'Ti.Contacts.Person';
	this.birthday = __SLAG__properties.birthday || '';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.created) {
		throw new Error('Ti.Contacts.Person.created is read only property');
	}
	this.created = '';
	this.date = __SLAG__properties.date || {};
	this.department = __SLAG__properties.department || '';
	this.email = __SLAG__properties.email || {};
	this.firstName = __SLAG__properties.firstName || '';
	this.firstPhonetic = __SLAG__properties.firstPhonetic || '';
	if (__SLAG__properties.fullName) {
		throw new Error('Ti.Contacts.Person.fullName is read only property');
	}
	this.fullName = '';
	if (__SLAG__properties.id) {
		throw new Error('Ti.Contacts.Person.id is read only property');
	}
	this.id = 0;
	this.image = __SLAG__properties.image || {};
	this.instantMessage = __SLAG__properties.instantMessage || {};
	this.jobTitle = __SLAG__properties.jobTitle || '';
	this.kind = __SLAG__properties.kind || 0;
	this.lastName = __SLAG__properties.lastName || '';
	this.lastPhonetic = __SLAG__properties.lastPhonetic || '';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.middleName = __SLAG__properties.middleName || '';
	this.middlePhonetic = __SLAG__properties.middlePhonetic || '';
	if (__SLAG__properties.modified) {
		throw new Error('Ti.Contacts.Person.modified is read only property');
	}
	this.modified = '';
	this.nickname = __SLAG__properties.nickname || '';
	this.note = __SLAG__properties.note || '';
	this.organization = __SLAG__properties.organization || '';
	this.phone = __SLAG__properties.phone || {};
	if (__SLAG__properties.prefix) {
		throw new Error('Ti.Contacts.Person.prefix is read only property');
	}
	this.prefix = '';
	this.recordId = __SLAG__properties.recordId || 0;
	this.relatedNames = __SLAG__properties.relatedNames || {};
	this.socialProfile = __SLAG__properties.socialProfile || {};
	if (__SLAG__properties.suffix) {
		throw new Error('Ti.Contacts.Person.suffix is read only property');
	}
	this.suffix = '';
	this.url = __SLAG__properties.url || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
Person.prototype.addEventListener = function () {
};
Person.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Person.prototype.fireEvent = function () {
};
Person.prototype.getAddress = function () {
	return this.address;
};
Person.prototype.getAlternateBirthday = function () {
	return this.alternateBirthday;
};
Person.prototype.getApiName = function () {
	return this.apiName;
};
Person.prototype.getBirthday = function () {
	return this.birthday;
};
Person.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Person.prototype.getCreated = function () {
	return this.created;
};
Person.prototype.getDate = function () {
	return this.date;
};
Person.prototype.getDepartment = function () {
	return this.department;
};
Person.prototype.getEmail = function () {
	return this.email;
};
Person.prototype.getFirstName = function () {
	return this.firstName;
};
Person.prototype.getFirstPhonetic = function () {
	return this.firstPhonetic;
};
Person.prototype.getFullName = function () {
	return this.fullName;
};
Person.prototype.getId = function () {
	return this.id;
};
Person.prototype.getImage = function () {
	return this.image;
};
Person.prototype.getInstantMessage = function () {
	return this.instantMessage;
};
Person.prototype.getJobTitle = function () {
	return this.jobTitle;
};
Person.prototype.getKind = function () {
	return this.kind;
};
Person.prototype.getLastName = function () {
	return this.lastName;
};
Person.prototype.getLastPhonetic = function () {
	return this.lastPhonetic;
};
Person.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Person.prototype.getMiddleName = function () {
	return this.middleName;
};
Person.prototype.getMiddlePhonetic = function () {
	return this.middlePhonetic;
};
Person.prototype.getModified = function () {
	return this.modified;
};
Person.prototype.getNickname = function () {
	return this.nickname;
};
Person.prototype.getNote = function () {
	return this.note;
};
Person.prototype.getOrganization = function () {
	return this.organization;
};
Person.prototype.getPhone = function () {
	return this.phone;
};
Person.prototype.getPrefix = function () {
	return this.prefix;
};
Person.prototype.getRecordId = function () {
	return this.recordId;
};
Person.prototype.getRelatedNames = function () {
	return this.relatedNames;
};
Person.prototype.getSocialProfile = function () {
	return this.socialProfile;
};
Person.prototype.getSuffix = function () {
	return this.suffix;
};
Person.prototype.getUrl = function () {
	return this.url;
};
Person.prototype.removeEventListener = function () {
};
Person.prototype.setAddress = function (property) {
	this.address = property;
};
Person.prototype.setAlternateBirthday = function (property) {
	this.alternateBirthday = property;
};
Person.prototype.setBirthday = function (property) {
	this.birthday = property;
};
Person.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Person.prototype.setDate = function (property) {
	this.date = property;
};
Person.prototype.setDepartment = function (property) {
	this.department = property;
};
Person.prototype.setEmail = function (property) {
	this.email = property;
};
Person.prototype.setFirstName = function (property) {
	this.firstName = property;
};
Person.prototype.setFirstPhonetic = function (property) {
	this.firstPhonetic = property;
};
Person.prototype.setImage = function (property) {
	this.image = property;
};
Person.prototype.setInstantMessage = function (property) {
	this.instantMessage = property;
};
Person.prototype.setJobTitle = function (property) {
	this.jobTitle = property;
};
Person.prototype.setKind = function (property) {
	this.kind = property;
};
Person.prototype.setLastName = function (property) {
	this.lastName = property;
};
Person.prototype.setLastPhonetic = function (property) {
	this.lastPhonetic = property;
};
Person.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Person.prototype.setMiddleName = function (property) {
	this.middleName = property;
};
Person.prototype.setMiddlePhonetic = function (property) {
	this.middlePhonetic = property;
};
Person.prototype.setNickname = function (property) {
	this.nickname = property;
};
Person.prototype.setNote = function (property) {
	this.note = property;
};
Person.prototype.setOrganization = function (property) {
	this.organization = property;
};
Person.prototype.setPhone = function (property) {
	this.phone = property;
};
Person.prototype.setRecordId = function (property) {
	this.recordId = property;
};
Person.prototype.setRelatedNames = function (property) {
	this.relatedNames = property;
};
Person.prototype.setSocialProfile = function (property) {
	this.socialProfile = property;
};
Person.prototype.setUrl = function (property) {
	this.url = property;
};
module.exports = function (properties) {
	return new Person(properties);
};