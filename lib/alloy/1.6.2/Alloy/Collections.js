function Collections(properties) {
	properties = properties || {};
	return this;
}
Collections.prototype.on = function () {
};
Collections.prototype.off = function () {
};
Collections.prototype.trigger = function () {
};
Collections.prototype.bind = function () {
};
Collections.prototype.unbind = function () {
};
Collections.prototype.model = function () {
};
Collections.prototype.initialize = function () {
};
Collections.prototype.toJSON = function () {
};
Collections.prototype.add = function () {
};
Collections.prototype.remove = function () {
};
Collections.prototype.push = function () {
};
Collections.prototype.pop = function () {
};
Collections.prototype.unshift = function () {
};
Collections.prototype.shift = function () {
};
Collections.prototype.get = function () {
};
Collections.prototype.getByCid = function () {
};
Collections.prototype.at = function () {
};
Collections.prototype.where = function () {
};
Collections.prototype.sort = function () {
};
Collections.prototype.pluck = function () {
};
Collections.prototype.reset = function () {
};
Collections.prototype.fetch = function () {
};
Collections.prototype.create = function () {
};
Collections.prototype.parse = function () {
};
Collections.prototype.chain = function () {
};
Collections.prototype._reset = function () {
};
Collections.prototype._prepareModel = function () {
};
Collections.prototype._removeReference = function () {
};
Collections.prototype._onModelEvent = function () {
};
Collections.prototype.forEach = function () {
};
Collections.prototype.each = function () {
};
Collections.prototype.map = function () {
};
Collections.prototype.reduce = function () {
};
Collections.prototype.reduceRight = function () {
};
Collections.prototype.find = function () {
};
Collections.prototype.detect = function () {
};
Collections.prototype.filter = function () {
};
Collections.prototype.select = function () {
};
Collections.prototype.reject = function () {
};
Collections.prototype.every = function () {
};
Collections.prototype.all = function () {
};
Collections.prototype.some = function () {
};
Collections.prototype.any = function () {
};
Collections.prototype.include = function () {
};
Collections.prototype.contains = function () {
};
Collections.prototype.invoke = function () {
};
Collections.prototype.max = function () {
};
Collections.prototype.min = function () {
};
Collections.prototype.sortBy = function () {
};
Collections.prototype.sortedIndex = function () {
};
Collections.prototype.toArray = function () {
};
Collections.prototype.size = function () {
};
Collections.prototype.first = function () {
};
Collections.prototype.initial = function () {
};
Collections.prototype.rest = function () {
};
Collections.prototype.last = function () {
};
Collections.prototype.without = function () {
};
Collections.prototype.indexOf = function () {
};
Collections.prototype.shuffle = function () {
};
Collections.prototype.lastIndexOf = function () {
};
Collections.prototype.isEmpty = function () {
};
Collections.prototype.groupBy = function () {
};
module.exports = function (properties) {
	return new Collections(properties);
};