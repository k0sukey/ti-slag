function Person(properties) {
	properties = properties || {};
	this.address = properties.address || {};
	this.alternateBirthday = properties.alternateBirthday || {};
	this.apiName = 'Ti.Contacts.Person';
	this.birthday = properties.birthday || '';
	this.bubbleParent = properties.bubbleParent || true;
	this.created = properties.created || '';
	this.date = properties.date || {};
	this.department = properties.department || '';
	this.email = properties.email || {};
	this.firstName = properties.firstName || '';
	this.firstPhonetic = properties.firstPhonetic || '';
	this.fullName = properties.fullName || '';
	this.id = properties.id || 0;
	this.image = properties.image || {};
	this.instantMessage = properties.instantMessage || {};
	this.jobTitle = properties.jobTitle || '';
	this.kind = properties.kind || 0;
	this.lastName = properties.lastName || '';
	this.lastPhonetic = properties.lastPhonetic || '';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.middleName = properties.middleName || '';
	this.middlePhonetic = properties.middlePhonetic || '';
	this.modified = properties.modified || '';
	this.nickname = properties.nickname || '';
	this.note = properties.note || '';
	this.organization = properties.organization || '';
	this.phone = properties.phone || {};
	this.prefix = properties.prefix || '';
	this.recordId = properties.recordId || 0;
	this.relatedNames = properties.relatedNames || {};
	this.socialProfile = properties.socialProfile || {};
	this.suffix = properties.suffix || '';
	this.url = properties.url || {};
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
Person.prototype.getAddress = function () {
	return {};
};
Person.prototype.getAlternateBirthday = function () {
	return {};
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
Person.prototype.getDate = function () {
	return {};
};
Person.prototype.getDepartment = function () {
	return '';
};
Person.prototype.getEmail = function () {
	return {};
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
Person.prototype.getInstantMessage = function () {
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
Person.prototype.getPhone = function () {
	return {};
};
Person.prototype.getPrefix = function () {
	return '';
};
Person.prototype.getRecordId = function () {
	return 0;
};
Person.prototype.getRelatedNames = function () {
	return {};
};
Person.prototype.getSocialProfile = function () {
	return {};
};
Person.prototype.getSuffix = function () {
	return '';
};
Person.prototype.getUrl = function () {
	return {};
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