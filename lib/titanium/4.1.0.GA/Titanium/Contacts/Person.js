function Person(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Contacts.Person';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.address = properties.address || {};
	this.birthday = properties.birthday || '';
	this.alternateBirthday = properties.alternateBirthday || {};
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
	this.socialProfile = properties.socialProfile || {};
	this.jobTitle = properties.jobTitle || '';
	this.kind = properties.kind || 0;
	this.lastName = properties.lastName || '';
	this.lastPhonetic = properties.lastPhonetic || '';
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
	this.suffix = properties.suffix || '';
	this.url = properties.url || {};
	return this;
}
Person.prototype.addEventListener = function () {
};
Person.prototype.removeEventListener = function () {
};
Person.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Person.prototype.fireEvent = function () {
};
Person.prototype.getBubbleParent = function () {
	return true;
};
Person.prototype.setBubbleParent = function () {
};
Person.prototype.getApiName = function () {
	return '';
};
Person.prototype.getLifecycleContainer = function () {
	return {};
};
Person.prototype.setLifecycleContainer = function () {
};
Person.prototype.getAddress = function () {
	return {};
};
Person.prototype.setAddress = function () {
};
Person.prototype.getBirthday = function () {
	return '';
};
Person.prototype.setBirthday = function () {
};
Person.prototype.getAlternateBirthday = function () {
	return {};
};
Person.prototype.setAlternateBirthday = function () {
};
Person.prototype.getCreated = function () {
	return '';
};
Person.prototype.getDate = function () {
	return {};
};
Person.prototype.setDate = function () {
};
Person.prototype.getDepartment = function () {
	return '';
};
Person.prototype.setDepartment = function () {
};
Person.prototype.getEmail = function () {
	return {};
};
Person.prototype.setEmail = function () {
};
Person.prototype.getFirstName = function () {
	return '';
};
Person.prototype.setFirstName = function () {
};
Person.prototype.getFirstPhonetic = function () {
	return '';
};
Person.prototype.setFirstPhonetic = function () {
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
Person.prototype.setImage = function () {
};
Person.prototype.getInstantMessage = function () {
	return {};
};
Person.prototype.setInstantMessage = function () {
};
Person.prototype.getSocialProfile = function () {
	return {};
};
Person.prototype.setSocialProfile = function () {
};
Person.prototype.getJobTitle = function () {
	return '';
};
Person.prototype.setJobTitle = function () {
};
Person.prototype.getKind = function () {
	return 0;
};
Person.prototype.setKind = function () {
};
Person.prototype.getLastName = function () {
	return '';
};
Person.prototype.setLastName = function () {
};
Person.prototype.getLastPhonetic = function () {
	return '';
};
Person.prototype.setLastPhonetic = function () {
};
Person.prototype.getMiddleName = function () {
	return '';
};
Person.prototype.setMiddleName = function () {
};
Person.prototype.getMiddlePhonetic = function () {
	return '';
};
Person.prototype.setMiddlePhonetic = function () {
};
Person.prototype.getModified = function () {
	return '';
};
Person.prototype.getNickname = function () {
	return '';
};
Person.prototype.setNickname = function () {
};
Person.prototype.getNote = function () {
	return '';
};
Person.prototype.setNote = function () {
};
Person.prototype.getOrganization = function () {
	return '';
};
Person.prototype.setOrganization = function () {
};
Person.prototype.getPhone = function () {
	return {};
};
Person.prototype.setPhone = function () {
};
Person.prototype.getPrefix = function () {
	return '';
};
Person.prototype.getRecordId = function () {
	return 0;
};
Person.prototype.setRecordId = function () {
};
Person.prototype.getRelatedNames = function () {
	return {};
};
Person.prototype.setRelatedNames = function () {
};
Person.prototype.getSuffix = function () {
	return '';
};
Person.prototype.getUrl = function () {
	return {};
};
Person.prototype.setUrl = function () {
};
module.exports = function (properties) {
	return new Person(properties);
};