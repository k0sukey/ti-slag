function Analytics(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Analytics';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lastEvent = properties.lastEvent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	return this;
}
Analytics.prototype.addEvent = function () {
	throw new Error('Ti.Analytics.addEvent was deprecated, since 2.0.0');
};
Analytics.prototype.featureEvent = function () {
};
Analytics.prototype.getApiName = function () {
	return '';
};
Analytics.prototype.getBubbleParent = function () {
	return true;
};
Analytics.prototype.getLastEvent = function () {
	return '';
};
Analytics.prototype.getLifecycleContainer = function () {
	return {};
};
Analytics.prototype.navEvent = function () {
};
Analytics.prototype.setBubbleParent = function () {
};
Analytics.prototype.setLifecycleContainer = function () {
};
Analytics.prototype.settingsEvent = function () {
	throw new Error('Ti.Analytics.settingsEvent was deprecated, since 2.0.0');
};
Analytics.prototype.timedEvent = function () {
	throw new Error('Ti.Analytics.timedEvent was deprecated, since 2.0.0');
};
Analytics.prototype.userEvent = function () {
	throw new Error('Ti.Analytics.userEvent was deprecated, since 2.0.0');
};
module.exports = function (properties) {
	return new Analytics(properties);
};