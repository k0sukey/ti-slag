function iPhone(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iPhone';
	this.MODAL_PRESENTATION_CURRENT_CONTEXT = properties.MODAL_PRESENTATION_CURRENT_CONTEXT || 0;
	this.MODAL_PRESENTATION_FORMSHEET = properties.MODAL_PRESENTATION_FORMSHEET || 0;
	this.MODAL_PRESENTATION_FULLSCREEN = properties.MODAL_PRESENTATION_FULLSCREEN || 0;
	this.MODAL_PRESENTATION_PAGESHEET = properties.MODAL_PRESENTATION_PAGESHEET || 0;
	this.MODAL_TRANSITION_STYLE_COVER_VERTICAL = properties.MODAL_TRANSITION_STYLE_COVER_VERTICAL || 0;
	this.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE = properties.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE || 0;
	this.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL = properties.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL || 0;
	this.MODAL_TRANSITION_STYLE_PARTIAL_CURL = properties.MODAL_TRANSITION_STYLE_PARTIAL_CURL || 0;
	this.appBadge = properties.appBadge || 0;
	this.appSupportsShakeToEdit = properties.appSupportsShakeToEdit || true;
	this.statusBarHidden = properties.statusBarHidden || true;
	this.statusBarStyle = properties.statusBarStyle || 0;
	return this;
}
iPhone.prototype.addEventListener = function () {
};
iPhone.prototype.removeEventListener = function () {
};
iPhone.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
iPhone.prototype.fireEvent = function () {
};
iPhone.prototype.hideStatusBar = function () {
	throw new Error('Ti.UI.iPhone.hideStatusBar was deprecated, since 3.1.3');
};
iPhone.prototype.showStatusBar = function () {
	throw new Error('Ti.UI.iPhone.showStatusBar was deprecated, since 3.1.3');
};
iPhone.prototype.createNavigationGroup = function () {
	throw new Error('Ti.UI.iPhone.createNavigationGroup was deprecated, since 3.1.3');
};
iPhone.prototype.getBubbleParent = function () {
	return true;
};
iPhone.prototype.setBubbleParent = function () {
};
iPhone.prototype.getApiName = function () {
	return '';
};
iPhone.prototype.getAppBadge = function () {
	return 0;
};
iPhone.prototype.setAppBadge = function () {
};
iPhone.prototype.getAppSupportsShakeToEdit = function () {
	return true;
};
iPhone.prototype.setAppSupportsShakeToEdit = function () {
};
iPhone.prototype.getStatusBarHidden = function () {
	return true;
};
iPhone.prototype.getStatusBarStyle = function () {
	return 0;
};
module.exports = function (properties) {
	return new iPhone(properties);
};