function Tab(properties) {
	properties = properties || {};
	this.active = properties.active || true;
	this.activeIcon = properties.activeIcon || '';
	this.activeIconIsMask = properties.activeIconIsMask || true;
	this.apiName = 'Ti.UI.Tab';
	this.backgroundColor = properties.backgroundColor || '';
	this.backgroundDisabledColor = properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = properties.backgroundFocusedImage || '';
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundSelectedColor = properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = properties.backgroundSelectedImage || '';
	this.badge = properties.badge || '';
	this.bubbleParent = properties.bubbleParent || true;
	this.clipMode = properties.clipMode || 0;
	this.icon = properties.icon || '';
	this.iconIsmask = properties.iconIsmask || true;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.tintColor = properties.tintColor || '';
	this.title = properties.title || '';
	this.titleid = properties.titleid || '';
	this.touchEnabled = properties.touchEnabled || true;
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.window = properties.window || {};
	return this;
}
Tab.prototype.addEventListener = function () {
};
Tab.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Tab.prototype.close = function () {
};
Tab.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Tab.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Tab.finishLayout was deprecated, since 3.0.0');
};
Tab.prototype.fireEvent = function () {
};
Tab.prototype.getActive = function () {
	return true;
};
Tab.prototype.getActiveIcon = function () {
	return '';
};
Tab.prototype.getActiveIconIsMask = function () {
	return true;
};
Tab.prototype.getApiName = function () {
	return '';
};
Tab.prototype.getBackgroundColor = function () {
	return '';
};
Tab.prototype.getBackgroundDisabledColor = function () {
	return '';
};
Tab.prototype.getBackgroundDisabledImage = function () {
	return '';
};
Tab.prototype.getBackgroundFocusedColor = function () {
	return '';
};
Tab.prototype.getBackgroundFocusedImage = function () {
	return '';
};
Tab.prototype.getBackgroundImage = function () {
	return '';
};
Tab.prototype.getBackgroundSelectedColor = function () {
	return '';
};
Tab.prototype.getBackgroundSelectedImage = function () {
	return '';
};
Tab.prototype.getBadge = function () {
	return '';
};
Tab.prototype.getBubbleParent = function () {
	return true;
};
Tab.prototype.getClipMode = function () {
	return 0;
};
Tab.prototype.getIcon = function () {
	return '';
};
Tab.prototype.getIconIsmask = function () {
	return true;
};
Tab.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
Tab.prototype.getPullBackgroundColor = function () {
	return '';
};
Tab.prototype.getTintColor = function () {
	return '';
};
Tab.prototype.getTitle = function () {
	return '';
};
Tab.prototype.getTitleid = function () {
	return '';
};
Tab.prototype.getTouchEnabled = function () {
	return true;
};
Tab.prototype.getViewShadowColor = function () {
	return '';
};
Tab.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
Tab.prototype.getViewShadowRadius = function () {
	return 0;
};
Tab.prototype.getWindow = function () {
	return {};
};
Tab.prototype.open = function () {
};
Tab.prototype.removeEventListener = function () {
};
Tab.prototype.setActive = function () {
};
Tab.prototype.setActiveIcon = function () {
};
Tab.prototype.setActiveIconIsMask = function () {
};
Tab.prototype.setBackgroundColor = function () {
};
Tab.prototype.setBackgroundDisabledColor = function () {
};
Tab.prototype.setBackgroundDisabledImage = function () {
};
Tab.prototype.setBackgroundFocusedColor = function () {
};
Tab.prototype.setBackgroundFocusedImage = function () {
};
Tab.prototype.setBackgroundImage = function () {
};
Tab.prototype.setBackgroundSelectedColor = function () {
};
Tab.prototype.setBackgroundSelectedImage = function () {
};
Tab.prototype.setBadge = function () {
};
Tab.prototype.setBubbleParent = function () {
};
Tab.prototype.setClipMode = function () {
};
Tab.prototype.setIcon = function () {
};
Tab.prototype.setIconIsmask = function () {
};
Tab.prototype.setPullBackgroundColor = function () {
};
Tab.prototype.setTintColor = function () {
};
Tab.prototype.setTitle = function () {
};
Tab.prototype.setTitleid = function () {
};
Tab.prototype.setTouchEnabled = function () {
};
Tab.prototype.setViewShadowColor = function () {
};
Tab.prototype.setViewShadowOffset = function () {
};
Tab.prototype.setViewShadowRadius = function () {
};
Tab.prototype.setWindow = function () {
};
Tab.prototype.startLayout = function () {
	throw new Error('Ti.UI.Tab.startLayout was deprecated, since 3.0.0');
};
Tab.prototype.toImage = function () {
	return {};
};
Tab.prototype.updateLayout = function () {
	throw new Error('Ti.UI.Tab.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new Tab(properties);
};