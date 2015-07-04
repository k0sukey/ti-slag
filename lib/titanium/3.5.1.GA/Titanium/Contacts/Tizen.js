function Tizen(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Contacts.Tizen';
	return this;
}
Tizen.prototype.addEventListener = function () {
};
Tizen.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Tizen.prototype.fireEvent = function () {
};
Tizen.prototype.getAllPeople = function () {
};
Tizen.prototype.getApiName = function () {
	return '';
};
Tizen.prototype.getPeopleWithName = function () {
};
Tizen.prototype.removeEventListener = function () {
};
module.exports = function (properties) {
	return new Tizen(properties);
};