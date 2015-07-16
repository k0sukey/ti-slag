function SystemIcon(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iPhone.SystemIcon';
	this.BOOKMARKS = properties.BOOKMARKS || 0;
	this.CONTACTS = properties.CONTACTS || 0;
	this.DOWNLOADS = properties.DOWNLOADS || 0;
	this.FAVORITES = properties.FAVORITES || 0;
	this.FEATURED = properties.FEATURED || 0;
	this.HISTORY = properties.HISTORY || 0;
	this.MORE = properties.MORE || 0;
	this.MOST_RECENT = properties.MOST_RECENT || 0;
	this.MOST_VIEWED = properties.MOST_VIEWED || 0;
	this.RECENTS = properties.RECENTS || 0;
	this.SEARCH = properties.SEARCH || 0;
	this.TOP_RATED = properties.TOP_RATED || 0;
	return this;
}
SystemIcon.prototype.addEventListener = function () {
};
SystemIcon.prototype.removeEventListener = function () {
};
SystemIcon.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
SystemIcon.prototype.fireEvent = function () {
};
SystemIcon.prototype.getBubbleParent = function () {
	return true;
};
SystemIcon.prototype.setBubbleParent = function () {
};
SystemIcon.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new SystemIcon(properties);
};