var crypto = require('crypto');
function Person(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
	this.address = __SLAG_PROPERTIES.address || {};
	this.alternateBirthday = __SLAG_PROPERTIES.alternateBirthday || {};
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Contacts.Person.apiName is read only property');
	}
	this.apiName = 'Ti.Contacts.Person';
	this.birthday = __SLAG_PROPERTIES.birthday || '';
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	if (__SLAG_PROPERTIES.created) {
		throw new Error('Ti.Contacts.Person.created is read only property');
	}
	this.created = '';
	this.date = __SLAG_PROPERTIES.date || {};
	this.department = __SLAG_PROPERTIES.department || '';
	this.email = __SLAG_PROPERTIES.email || {};
	this.firstName = __SLAG_PROPERTIES.firstName || '';
	this.firstPhonetic = __SLAG_PROPERTIES.firstPhonetic || '';
	if (__SLAG_PROPERTIES.fullName) {
		throw new Error('Ti.Contacts.Person.fullName is read only property');
	}
	this.fullName = '';
	if (__SLAG_PROPERTIES.id) {
		throw new Error('Ti.Contacts.Person.id is read only property');
	}
	this.id = 0;
	this.image = __SLAG_PROPERTIES.image || {};
	this.instantMessage = __SLAG_PROPERTIES.instantMessage || {};
	this.jobTitle = __SLAG_PROPERTIES.jobTitle || '';
	this.kind = __SLAG_PROPERTIES.kind || 0;
	this.lastName = __SLAG_PROPERTIES.lastName || '';
	this.lastPhonetic = __SLAG_PROPERTIES.lastPhonetic || '';
	this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	this.middleName = __SLAG_PROPERTIES.middleName || '';
	this.middlePhonetic = __SLAG_PROPERTIES.middlePhonetic || '';
	if (__SLAG_PROPERTIES.modified) {
		throw new Error('Ti.Contacts.Person.modified is read only property');
	}
	this.modified = '';
	this.nickname = __SLAG_PROPERTIES.nickname || '';
	this.note = __SLAG_PROPERTIES.note || '';
	this.organization = __SLAG_PROPERTIES.organization || '';
	this.phone = __SLAG_PROPERTIES.phone || {};
	if (__SLAG_PROPERTIES.prefix) {
		throw new Error('Ti.Contacts.Person.prefix is read only property');
	}
	this.prefix = '';
	this.recordId = __SLAG_PROPERTIES.recordId || 0;
	this.relatedNames = __SLAG_PROPERTIES.relatedNames || {};
	this.socialProfile = __SLAG_PROPERTIES.socialProfile || {};
	if (__SLAG_PROPERTIES.suffix) {
		throw new Error('Ti.Contacts.Person.suffix is read only property');
	}
	this.suffix = '';
	this.url = __SLAG_PROPERTIES.url || {};
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Person.prototype.addEventListener = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Person.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Person.prototype.fireEvent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Person.prototype.getAddress = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.address;
};
Person.prototype.getAlternateBirthday = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.alternateBirthday;
};
Person.prototype.getApiName = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Person.prototype.getBirthday = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.birthday;
};
Person.prototype.getBubbleParent = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Person.prototype.getCreated = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.created;
};
Person.prototype.getDate = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.date;
};
Person.prototype.getDepartment = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.department;
};
Person.prototype.getEmail = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.email;
};
Person.prototype.getFirstName = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.firstName;
};
Person.prototype.getFirstPhonetic = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.firstPhonetic;
};
Person.prototype.getFullName = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.fullName;
};
Person.prototype.getId = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.id;
};
Person.prototype.getImage = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.image;
};
Person.prototype.getInstantMessage = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.instantMessage;
};
Person.prototype.getJobTitle = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.jobTitle;
};
Person.prototype.getKind = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.kind;
};
Person.prototype.getLastName = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lastName;
};
Person.prototype.getLastPhonetic = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lastPhonetic;
};
Person.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Person.prototype.getMiddleName = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.middleName;
};
Person.prototype.getMiddlePhonetic = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.middlePhonetic;
};
Person.prototype.getModified = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.modified;
};
Person.prototype.getNickname = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.nickname;
};
Person.prototype.getNote = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.note;
};
Person.prototype.getOrganization = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.organization;
};
Person.prototype.getPhone = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.phone;
};
Person.prototype.getPrefix = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.prefix;
};
Person.prototype.getRecordId = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.recordId;
};
Person.prototype.getRelatedNames = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.relatedNames;
};
Person.prototype.getSocialProfile = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.socialProfile;
};
Person.prototype.getSuffix = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.suffix;
};
Person.prototype.getUrl = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.url;
};
Person.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Person.prototype.setAddress = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.address = __SLAG__PROPERTY;
};
Person.prototype.setAlternateBirthday = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.alternateBirthday = __SLAG__PROPERTY;
};
Person.prototype.setBirthday = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.birthday = __SLAG__PROPERTY;
};
Person.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Person.prototype.setDate = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.date = __SLAG__PROPERTY;
};
Person.prototype.setDepartment = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.department = __SLAG__PROPERTY;
};
Person.prototype.setEmail = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.email = __SLAG__PROPERTY;
};
Person.prototype.setFirstName = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.firstName = __SLAG__PROPERTY;
};
Person.prototype.setFirstPhonetic = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.firstPhonetic = __SLAG__PROPERTY;
};
Person.prototype.setImage = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.image = __SLAG__PROPERTY;
};
Person.prototype.setInstantMessage = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.instantMessage = __SLAG__PROPERTY;
};
Person.prototype.setJobTitle = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.jobTitle = __SLAG__PROPERTY;
};
Person.prototype.setKind = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.kind = __SLAG__PROPERTY;
};
Person.prototype.setLastName = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lastName = __SLAG__PROPERTY;
};
Person.prototype.setLastPhonetic = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lastPhonetic = __SLAG__PROPERTY;
};
Person.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
Person.prototype.setMiddleName = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.middleName = __SLAG__PROPERTY;
};
Person.prototype.setMiddlePhonetic = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.middlePhonetic = __SLAG__PROPERTY;
};
Person.prototype.setNickname = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.nickname = __SLAG__PROPERTY;
};
Person.prototype.setNote = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.note = __SLAG__PROPERTY;
};
Person.prototype.setOrganization = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.organization = __SLAG__PROPERTY;
};
Person.prototype.setPhone = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.phone = __SLAG__PROPERTY;
};
Person.prototype.setRecordId = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.recordId = __SLAG__PROPERTY;
};
Person.prototype.setRelatedNames = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.relatedNames = __SLAG__PROPERTY;
};
Person.prototype.setSocialProfile = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.socialProfile = __SLAG__PROPERTY;
};
Person.prototype.setUrl = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.url = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new Person(properties);
};