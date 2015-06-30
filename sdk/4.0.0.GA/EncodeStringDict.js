function EncodeStringDict(properties) {
	properties = properties || {};
	this.charset = properties.charset || undefined;
	this.dest = properties.dest || undefined;
	this.destPosition = properties.destPosition || undefined;
	this.source = properties.source || undefined;
	this.sourceLength = properties.sourceLength || undefined;
	this.sourcePosition = properties.sourcePosition || undefined;
	return this;
}
module.exports = function (properties) {
	return new EncodeStringDict(properties);
};