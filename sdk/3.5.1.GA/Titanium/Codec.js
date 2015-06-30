function Codec(properties) {
	properties = properties || {};
	this.BIG_ENDIAN = properties.BIG_ENDIAN || undefined;
	this.CHARSET_ASCII = properties.CHARSET_ASCII || undefined;
	this.CHARSET_ISO_LATIN_1 = properties.CHARSET_ISO_LATIN_1 || undefined;
	this.CHARSET_UTF16 = properties.CHARSET_UTF16 || undefined;
	this.CHARSET_UTF16BE = properties.CHARSET_UTF16BE || undefined;
	this.CHARSET_UTF16LE = properties.CHARSET_UTF16LE || undefined;
	this.CHARSET_UTF8 = properties.CHARSET_UTF8 || undefined;
	this.LITTLE_ENDIAN = properties.LITTLE_ENDIAN || undefined;
	this.TYPE_BYTE = properties.TYPE_BYTE || undefined;
	this.TYPE_DOUBLE = properties.TYPE_DOUBLE || undefined;
	this.TYPE_FLOAT = properties.TYPE_FLOAT || undefined;
	this.TYPE_INT = properties.TYPE_INT || undefined;
	this.TYPE_LONG = properties.TYPE_LONG || undefined;
	this.TYPE_SHORT = properties.TYPE_SHORT || undefined;
	this.apiName = 'Titanium.Codec';
	this.bubbleParent = properties.bubbleParent || undefined;
	return this;
}
Codec.prototype.addEventListener = function () {
};
Codec.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Codec.prototype.decodeNumber = function () {
	return 0;
};
Codec.prototype.decodeString = function () {
	return '';
};
Codec.prototype.encodeNumber = function () {
	return 0;
};
Codec.prototype.encodeString = function () {
	return 0;
};
Codec.prototype.fireEvent = function () {
};
Codec.prototype.getApiName = function () {
	return this.apiName;
};
Codec.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Codec.prototype.getNativeByteOrder = function () {
	return 0;
};
Codec.prototype.removeEventListener = function () {
};
Codec.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new Codec(properties);
};