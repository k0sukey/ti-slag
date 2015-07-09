function CreateStreamArgs(properties) {
	properties = properties || {};
	this.source = properties.source || {};
	this.mode = properties.mode || 0;
	return this;
}
module.exports = function (properties) {
	return new CreateStreamArgs(properties);
};