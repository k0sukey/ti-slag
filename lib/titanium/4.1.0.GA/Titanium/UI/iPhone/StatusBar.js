function StatusBar(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iPhone.StatusBar';
	this.ANIMATION_STYLE_NONE = properties.ANIMATION_STYLE_NONE || 0;
	this.ANIMATION_STYLE_SLIDE = properties.ANIMATION_STYLE_SLIDE || 0;
	this.ANIMATION_STYLE_FADE = properties.ANIMATION_STYLE_FADE || 0;
	this.DEFAULT = properties.DEFAULT || 0;
	this.GRAY = properties.GRAY || 0;
	this.GREY = properties.GREY || 0;
	this.LIGHT_CONTENT = properties.LIGHT_CONTENT || 0;
	this.OPAQUE_BLACK = properties.OPAQUE_BLACK || 0;
	this.TRANSLUCENT_BLACK = properties.TRANSLUCENT_BLACK || 0;
	return this;
}
StatusBar.prototype.addEventListener = function () {
};
StatusBar.prototype.removeEventListener = function () {
};
StatusBar.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
StatusBar.prototype.fireEvent = function () {
};
StatusBar.prototype.getBubbleParent = function () {
	return true;
};
StatusBar.prototype.setBubbleParent = function () {
};
StatusBar.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new StatusBar(properties);
};