function Codec(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Codec';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.CHARSET_ASCII = properties.CHARSET_ASCII || '';
	this.CHARSET_ISO_LATIN_1 = properties.CHARSET_ISO_LATIN_1 || '';
	this.CHARSET_UTF8 = properties.CHARSET_UTF8 || '';
	this.CHARSET_UTF16 = properties.CHARSET_UTF16 || '';
	this.CHARSET_UTF16BE = properties.CHARSET_UTF16BE || '';
	this.CHARSET_UTF16LE = properties.CHARSET_UTF16LE || '';
	this.TYPE_BYTE = properties.TYPE_BYTE || '';
	this.TYPE_SHORT = properties.TYPE_SHORT || '';
	this.TYPE_INT = properties.TYPE_INT || '';
	this.TYPE_FLOAT = properties.TYPE_FLOAT || '';
	this.TYPE_LONG = properties.TYPE_LONG || '';
	this.TYPE_DOUBLE = properties.TYPE_DOUBLE || '';
	this.BIG_ENDIAN = properties.BIG_ENDIAN || 0;
	this.LITTLE_ENDIAN = properties.LITTLE_ENDIAN || 0;
	return this;
}
Codec.prototype.addEventListener = function () {
};
Codec.prototype.removeEventListener = function () {
};
Codec.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Codec.prototype.fireEvent = function () {
};
Codec.prototype.getNativeByteOrder = function () {
	return 0;
};
Codec.prototype.encodeNumber = function () {
	return 0;
};
Codec.prototype.decodeNumber = function () {
	return 0;
};
Codec.prototype.encodeString = function () {
	return 0;
};
Codec.prototype.decodeString = function () {
	return '';
};
Codec.prototype.getBubbleParent = function () {
	return true;
};
Codec.prototype.setBubbleParent = function () {
};
Codec.prototype.getApiName = function () {
	return '';
};
Codec.prototype.getLifecycleContainer = function () {
	return {};
};
Codec.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Codec(properties);
};