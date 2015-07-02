function AlloyStyleDict(properties) {
	properties = properties || {};
	this.apiName = 'AlloyStyleDict';
	this.classes = properties.classes || undefined;
	this.id = properties.id || undefined;
	return this;
}
module.exports = function (properties) {
	return new AlloyStyleDict(properties);
};