function animation(properties) {
	properties = properties || {};
	this.HORIZONTAL = properties.HORIZONTAL || undefined;
	this.VERTICAL = properties.VERTICAL || undefined;
	return this;
}
animation.prototype.chainAnimate = function () {
};
animation.prototype.crossFade = function () {
};
animation.prototype.fadeAndRemove = function () {
};
animation.prototype.fadeIn = function () {
};
animation.prototype.fadeOut = function () {
};
animation.prototype.flash = function () {
};
animation.prototype.flip = function () {
};
animation.prototype.flipHorizontal = function () {
};
animation.prototype.flipVertical = function () {
};
animation.prototype.popIn = function () {
};
animation.prototype.shake = function () {
};
module.exports = function (properties) {
	return new animation(properties);
};