function SystemButton(properties) {
	properties = properties || {};
	this.ACTION = properties.ACTION || 0;
	this.ACTIVITY = properties.ACTIVITY || 0;
	this.ADD = properties.ADD || 0;
	this.BOOKMARKS = properties.BOOKMARKS || 0;
	this.CAMERA = properties.CAMERA || 0;
	this.CANCEL = properties.CANCEL || 0;
	this.COMPOSE = properties.COMPOSE || 0;
	this.CONTACT_ADD = properties.CONTACT_ADD || 0;
	this.DISCLOSURE = properties.DISCLOSURE || 0;
	this.DONE = properties.DONE || 0;
	this.EDIT = properties.EDIT || 0;
	this.FAST_FORWARD = properties.FAST_FORWARD || 0;
	this.FIXED_SPACE = properties.FIXED_SPACE || 0;
	this.FLEXIBLE_SPACE = properties.FLEXIBLE_SPACE || 0;
	this.INFO_DARK = properties.INFO_DARK || 0;
	this.INFO_LIGHT = properties.INFO_LIGHT || 0;
	this.ORGANIZE = properties.ORGANIZE || 0;
	this.PAUSE = properties.PAUSE || 0;
	this.PLAY = properties.PLAY || 0;
	this.REFRESH = properties.REFRESH || 0;
	this.REPLY = properties.REPLY || 0;
	this.REWIND = properties.REWIND || 0;
	this.SAVE = properties.SAVE || 0;
	this.SPINNER = properties.SPINNER || 0;
	this.STOP = properties.STOP || 0;
	this.TRASH = properties.TRASH || 0;
	this.apiName = 'Ti.UI.iPhone.SystemButton';
	this.bubbleParent = properties.bubbleParent || true;
	return this;
}
SystemButton.prototype.addEventListener = function () {
};
SystemButton.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
SystemButton.prototype.fireEvent = function () {
};
SystemButton.prototype.getApiName = function () {
	return '';
};
SystemButton.prototype.getBubbleParent = function () {
	return true;
};
SystemButton.prototype.removeEventListener = function () {
};
SystemButton.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new SystemButton(properties);
};