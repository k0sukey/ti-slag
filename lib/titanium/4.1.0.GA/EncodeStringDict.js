function EncodeStringDict(properties) {
	properties = properties || {};
	this.source = properties.source || '';
	this.dest = properties.dest || {};
	this.destPosition = properties.destPosition || 0;
	this.sourcePosition = properties.sourcePosition || 0;
	this.sourceLength = properties.sourceLength || 0;
	this.charset = properties.charset || '';
	return this;
}
module.exports = function (properties) {
	return new EncodeStringDict(properties);
};