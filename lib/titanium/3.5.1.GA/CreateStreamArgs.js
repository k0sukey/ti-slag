function CreateStreamArgs(properties) {
	properties = properties || {};
	this.mode = properties.mode || 0;
	this.source = properties.source || {};
	return this;
}
module.exports = function (properties) {
	return new CreateStreamArgs(properties);
};