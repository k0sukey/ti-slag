function SystemIcon(properties) {
	properties = properties || {};
	this.BOOKMARKS = properties.BOOKMARKS || undefined;
	this.CONTACTS = properties.CONTACTS || undefined;
	this.DOWNLOADS = properties.DOWNLOADS || undefined;
	this.FAVORITES = properties.FAVORITES || undefined;
	this.FEATURED = properties.FEATURED || undefined;
	this.HISTORY = properties.HISTORY || undefined;
	this.MORE = properties.MORE || undefined;
	this.MOST_RECENT = properties.MOST_RECENT || undefined;
	this.MOST_VIEWED = properties.MOST_VIEWED || undefined;
	this.RECENTS = properties.RECENTS || undefined;
	this.SEARCH = properties.SEARCH || undefined;
	this.TOP_RATED = properties.TOP_RATED || undefined;
	this.apiName = 'Ti.UI.iPhone.SystemIcon';
	this.bubbleParent = properties.bubbleParent || undefined;
	return this;
}
SystemIcon.prototype.addEventListener = function () {
};
SystemIcon.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
SystemIcon.prototype.fireEvent = function () {
};
SystemIcon.prototype.getApiName = function () {
	return '';
};
SystemIcon.prototype.getBubbleParent = function () {
	return true;
};
SystemIcon.prototype.removeEventListener = function () {
};
SystemIcon.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new SystemIcon(properties);
};