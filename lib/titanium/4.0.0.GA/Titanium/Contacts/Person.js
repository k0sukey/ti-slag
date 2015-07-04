function Person(properties) {
	properties = properties || {};
	this.address = properties.address || undefined;
	this.alternateBirthday = properties.alternateBirthday || undefined;
	this.apiName = 'Ti.Contacts.Person';
	this.birthday = properties.birthday || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.created = properties.created || undefined;
	this.date = properties.date || undefined;
	this.department = properties.department || undefined;
	this.email = properties.email || undefined;
	this.firstName = properties.firstName || undefined;
	this.firstPhonetic = properties.firstPhonetic || undefined;
	this.fullName = properties.fullName || undefined;
	this.id = properties.id || undefined;
	this.image = properties.image || undefined;
	this.instantMessage = properties.instantMessage || undefined;
	this.jobTitle = properties.jobTitle || undefined;
	this.kind = properties.kind || undefined;
	this.lastName = properties.lastName || undefined;
	this.lastPhonetic = properties.lastPhonetic || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.middleName = properties.middleName || undefined;
	this.middlePhonetic = properties.middlePhonetic || undefined;
	this.modified = properties.modified || undefined;
	this.nickname = properties.nickname || undefined;
	this.note = properties.note || undefined;
	this.organization = properties.organization || undefined;
	this.phone = properties.phone || undefined;
	this.prefix = properties.prefix || undefined;
	this.recordId = properties.recordId || undefined;
	this.relatedNames = properties.relatedNames || undefined;
	this.socialProfile = properties.socialProfile || undefined;
	this.suffix = properties.suffix || undefined;
	this.url = properties.url || undefined;
	return this;
}
Person.prototype.addEventListener = function () {
};
Person.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Person.prototype.fireEvent = function () {
};
Person.prototype.getApiName = function () {
	return '';
};
Person.prototype.getBirthday = function () {
	return '';
};
Person.prototype.getBubbleParent = function () {
	return true;
};
Person.prototype.getCreated = function () {
	return '';
};
Person.prototype.getDepartment = function () {
	return '';
};
Person.prototype.getFirstName = function () {
	return '';
};
Person.prototype.getFirstPhonetic = function () {
	return '';
};
Person.prototype.getFullName = function () {
	return '';
};
Person.prototype.getId = function () {
	return 0;
};
Person.prototype.getImage = function () {
	return {};
};
Person.prototype.getJobTitle = function () {
	return '';
};
Person.prototype.getKind = function () {
	return 0;
};
Person.prototype.getLastName = function () {
	return '';
};
Person.prototype.getLastPhonetic = function () {
	return '';
};
Person.prototype.getLifecycleContainer = function () {
	return {};
};
Person.prototype.getMiddleName = function () {
	return '';
};
Person.prototype.getMiddlePhonetic = function () {
	return '';
};
Person.prototype.getModified = function () {
	return '';
};
Person.prototype.getNickname = function () {
	return '';
};
Person.prototype.getNote = function () {
	return '';
};
Person.prototype.getOrganization = function () {
	return '';
};
Person.prototype.getPrefix = function () {
	return '';
};
Person.prototype.getRecordId = function () {
	return 0;
};
Person.prototype.getSuffix = function () {
	return '';
};
Person.prototype.removeEventListener = function () {
};
Person.prototype.setAddress = function () {
};
Person.prototype.setAlternateBirthday = function () {
};
Person.prototype.setBirthday = function () {
};
Person.prototype.setBubbleParent = function () {
};
Person.prototype.setDate = function () {
};
Person.prototype.setDepartment = function () {
};
Person.prototype.setEmail = function () {
};
Person.prototype.setFirstName = function () {
};
Person.prototype.setFirstPhonetic = function () {
};
Person.prototype.setImage = function () {
};
Person.prototype.setInstantMessage = function () {
};
Person.prototype.setJobTitle = function () {
};
Person.prototype.setKind = function () {
};
Person.prototype.setLastName = function () {
};
Person.prototype.setLastPhonetic = function () {
};
Person.prototype.setLifecycleContainer = function () {
};
Person.prototype.setMiddleName = function () {
};
Person.prototype.setMiddlePhonetic = function () {
};
Person.prototype.setNickname = function () {
};
Person.prototype.setNote = function () {
};
Person.prototype.setOrganization = function () {
};
Person.prototype.setPhone = function () {
};
Person.prototype.setRecordId = function () {
};
Person.prototype.setRelatedNames = function () {
};
Person.prototype.setSocialProfile = function () {
};
Person.prototype.setUrl = function () {
};
module.exports = function (properties) {
	return new Person(properties);
};