function Models(properties) {
	properties = properties || {};
	return this;
}
Models.prototype.on = function () {
};
Models.prototype.off = function () {
};
Models.prototype.trigger = function () {
};
Models.prototype.bind = function () {
};
Models.prototype.unbind = function () {
};
Models.prototype.changed = function () {
};
Models.prototype._silent = function () {
};
Models.prototype._pending = function () {
};
Models.prototype.idAttribute = function () {
};
Models.prototype.initialize = function () {
};
Models.prototype.toJSON = function () {
};
Models.prototype.get = function () {
};
Models.prototype.escape = function () {
};
Models.prototype.has = function () {
};
Models.prototype.set = function () {
};
Models.prototype.unset = function () {
};
Models.prototype.clear = function () {
};
Models.prototype.fetch = function () {
};
Models.prototype.save = function () {
};
Models.prototype.destroy = function () {
};
Models.prototype.url = function () {
};
Models.prototype.parse = function () {
};
Models.prototype.clone = function () {
};
Models.prototype.isNew = function () {
};
Models.prototype.change = function () {
};
Models.prototype.hasChanged = function () {
};
Models.prototype.changedAttributes = function () {
};
Models.prototype.previous = function () {
};
Models.prototype.previousAttributes = function () {
};
Models.prototype.isValid = function () {
};
Models.prototype._validate = function () {
};
module.exports = function (properties) {
	return new Models(properties);
};