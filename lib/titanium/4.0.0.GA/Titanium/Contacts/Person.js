function Person(properties) {
	properties = properties || {};
	this.address = properties.address || undefined;
	this.alternateBirthday = properties.alternateBirthday || undefined;
	this.apiName = 'Titanium.Contacts.Person';
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
Person.prototype.getDepartment = function () {
	return this.department;
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
Person.prototype.getPrefix = function () {
	return this.prefix;
};
Person.prototype.getRecordId = function () {
	return this.recordId;
};
Person.prototype.getSuffix = function () {
	return this.suffix;
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