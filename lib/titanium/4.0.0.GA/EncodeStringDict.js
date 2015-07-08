function EncodeStringDict(properties) {
	properties = properties || {};
	this.charset = properties.charset || '';
	this.dest = properties.dest || {};
	this.destPosition = properties.destPosition || 0;
	this.source = properties.source || '';
	this.sourceLength = properties.sourceLength || 0;
	this.sourcePosition = properties.sourcePosition || 0;
	return this;
}
module.exports = function (properties) {
	return new EncodeStringDict(properties);
};