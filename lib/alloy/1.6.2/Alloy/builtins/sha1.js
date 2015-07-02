function sha1(properties) {
	properties = properties || {};
	return this;
}
sha1.prototype.b64_hmac_sha1 = function () {
	return '';
};
sha1.prototype.b64_sha1 = function () {
	return '';
};
sha1.prototype.hex_hmac_sha1 = function () {
	return '';
};
sha1.prototype.hex_sha1 = function () {
	return '';
};
sha1.prototype.str_hmac_sha1 = function () {
	return '';
};
sha1.prototype.str_sha1 = function () {
	return '';
};
module.exports = function (properties) {
	return new sha1(properties);
};