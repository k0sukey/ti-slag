function iPhone(properties) {
	properties = properties || {};
	this.MODAL_PRESENTATION_CURRENT_CONTEXT = properties.MODAL_PRESENTATION_CURRENT_CONTEXT || undefined;
	this.MODAL_PRESENTATION_FORMSHEET = properties.MODAL_PRESENTATION_FORMSHEET || undefined;
	this.MODAL_PRESENTATION_FULLSCREEN = properties.MODAL_PRESENTATION_FULLSCREEN || undefined;
	this.MODAL_PRESENTATION_PAGESHEET = properties.MODAL_PRESENTATION_PAGESHEET || undefined;
	this.MODAL_TRANSITION_STYLE_COVER_VERTICAL = properties.MODAL_TRANSITION_STYLE_COVER_VERTICAL || undefined;
	this.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE = properties.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE || undefined;
	this.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL = properties.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL || undefined;
	this.MODAL_TRANSITION_STYLE_PARTIAL_CURL = properties.MODAL_TRANSITION_STYLE_PARTIAL_CURL || undefined;
	this.apiName = 'Ti.UI.iPhone';
	this.appBadge = properties.appBadge || undefined;
	this.appSupportsShakeToEdit = properties.appSupportsShakeToEdit || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.statusBarHidden = properties.statusBarHidden || undefined;
	this.statusBarStyle = properties.statusBarStyle || undefined;
	return this;
}
iPhone.prototype.addEventListener = function () {
};
iPhone.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
iPhone.prototype.createNavigationGroup = function () {
	throw new Error('Ti.UI.iPhone.createNavigationGroup was deprecated, since 3.1.3');
};
iPhone.prototype.fireEvent = function () {
};
iPhone.prototype.getApiName = function () {
	return '';
};
iPhone.prototype.getAppBadge = function () {
	return 0;
};
iPhone.prototype.getAppSupportsShakeToEdit = function () {
	return true;
};
iPhone.prototype.getBubbleParent = function () {
	return true;
};
iPhone.prototype.getStatusBarHidden = function () {
	return true;
};
iPhone.prototype.getStatusBarStyle = function () {
	return 0;
};
iPhone.prototype.hideStatusBar = function () {
	throw new Error('Ti.UI.iPhone.hideStatusBar was deprecated, since 3.1.3');
};
iPhone.prototype.removeEventListener = function () {
};
iPhone.prototype.setAppBadge = function () {
};
iPhone.prototype.setAppSupportsShakeToEdit = function () {
};
iPhone.prototype.setBubbleParent = function () {
};
iPhone.prototype.showStatusBar = function () {
	throw new Error('Ti.UI.iPhone.showStatusBar was deprecated, since 3.1.3');
};
module.exports = function (properties) {
	return new iPhone(properties);
};