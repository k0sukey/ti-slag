function StatusBar(properties) {
	properties = properties || {};
	this.ANIMATION_STYLE_FADE = properties.ANIMATION_STYLE_FADE || undefined;
	this.ANIMATION_STYLE_NONE = properties.ANIMATION_STYLE_NONE || undefined;
	this.ANIMATION_STYLE_SLIDE = properties.ANIMATION_STYLE_SLIDE || undefined;
	this.DEFAULT = properties.DEFAULT || undefined;
	this.GRAY = properties.GRAY || undefined;
	this.GREY = properties.GREY || undefined;
	this.LIGHT_CONTENT = properties.LIGHT_CONTENT || undefined;
	this.OPAQUE_BLACK = properties.OPAQUE_BLACK || undefined;
	this.TRANSLUCENT_BLACK = properties.TRANSLUCENT_BLACK || undefined;
	this.apiName = 'Ti.UI.iPhone.StatusBar';
	this.bubbleParent = properties.bubbleParent || undefined;
	return this;
}
StatusBar.prototype.addEventListener = function () {
};
StatusBar.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
StatusBar.prototype.fireEvent = function () {
};
StatusBar.prototype.getApiName = function () {
	return '';
};
StatusBar.prototype.getBubbleParent = function () {
	return true;
};
StatusBar.prototype.removeEventListener = function () {
};
StatusBar.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new StatusBar(properties);
};