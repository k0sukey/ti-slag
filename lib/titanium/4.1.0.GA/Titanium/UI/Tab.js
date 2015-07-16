function Tab(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.Tab';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.backgroundDisabledColor = properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = properties.backgroundFocusedImage || '';
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundSelectedColor = properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = properties.backgroundSelectedImage || '';
	this.clipMode = properties.clipMode || 0;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.backgroundColor = properties.backgroundColor || '';
	this.tintColor = properties.tintColor || '';
	this.touchEnabled = properties.touchEnabled || true;
	this.titleColor = properties.titleColor || '';
	this.activeTitleColor = properties.activeTitleColor || '';
	this.active = properties.active || true;
	this.activeIcon = properties.activeIcon || '';
	this.badge = properties.badge || '';
	this.iconIsMask = properties.iconIsMask || true;
	this.activeIconIsMask = properties.activeIconIsMask || true;
	this.titleid = properties.titleid || '';
	this.window = properties.window || {};
	this.title = properties.title || '';
	this.icon = properties.icon || '';
	return this;
}
Tab.prototype.addEventListener = function () {
};
Tab.prototype.removeEventListener = function () {
};
Tab.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Tab.prototype.fireEvent = function () {
};
Tab.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Tab.finishLayout was deprecated, since 3.0.0');
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
Tab.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
Tab.prototype.setWindow = function () {
};
Tab.prototype.open = function () {
};
Tab.prototype.close = function () {
};
Tab.prototype.getBubbleParent = function () {
	return true;
};
Tab.prototype.setBubbleParent = function () {
};
Tab.prototype.getApiName = function () {
	return '';
};
Tab.prototype.getLifecycleContainer = function () {
	return {};
};
Tab.prototype.setLifecycleContainer = function () {
};
Tab.prototype.getBackgroundDisabledColor = function () {
	return '';
};
Tab.prototype.setBackgroundDisabledColor = function () {
};
Tab.prototype.getBackgroundDisabledImage = function () {
	return '';
};
Tab.prototype.setBackgroundDisabledImage = function () {
};
Tab.prototype.getBackgroundFocusedColor = function () {
	return '';
};
Tab.prototype.setBackgroundFocusedColor = function () {
};
Tab.prototype.getBackgroundFocusedImage = function () {
	return '';
};
Tab.prototype.setBackgroundFocusedImage = function () {
};
Tab.prototype.getBackgroundImage = function () {
	return '';
};
Tab.prototype.setBackgroundImage = function () {
};
Tab.prototype.getBackgroundSelectedColor = function () {
	return '';
};
Tab.prototype.setBackgroundSelectedColor = function () {
};
Tab.prototype.getBackgroundSelectedImage = function () {
	return '';
};
Tab.prototype.setBackgroundSelectedImage = function () {
};
Tab.prototype.getClipMode = function () {
	return 0;
};
Tab.prototype.setClipMode = function () {
};
Tab.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
Tab.prototype.setOverrideCurrentAnimation = function () {
};
Tab.prototype.getPullBackgroundColor = function () {
	return '';
};
Tab.prototype.setPullBackgroundColor = function () {
};
Tab.prototype.getViewShadowRadius = function () {
	return 0;
};
Tab.prototype.setViewShadowRadius = function () {
};
Tab.prototype.getViewShadowColor = function () {
	return '';
};
Tab.prototype.setViewShadowColor = function () {
};
Tab.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
Tab.prototype.setViewShadowOffset = function () {
};
Tab.prototype.getBackgroundColor = function () {
	return '';
};
Tab.prototype.setBackgroundColor = function () {
};
Tab.prototype.getTintColor = function () {
	return '';
};
Tab.prototype.setTintColor = function () {
};
Tab.prototype.getTouchEnabled = function () {
	return true;
};
Tab.prototype.setTouchEnabled = function () {
};
Tab.prototype.getTitleColor = function () {
	return '';
};
Tab.prototype.setTitleColor = function () {
};
Tab.prototype.getActiveTitleColor = function () {
	return '';
};
Tab.prototype.setActiveTitleColor = function () {
};
Tab.prototype.getActive = function () {
	return true;
};
Tab.prototype.setActive = function () {
};
Tab.prototype.getActiveIcon = function () {
	return '';
};
Tab.prototype.setActiveIcon = function () {
};
Tab.prototype.getBadge = function () {
	return '';
};
Tab.prototype.setBadge = function () {
};
Tab.prototype.getIconIsMask = function () {
	return true;
};
Tab.prototype.setIconIsMask = function () {
};
Tab.prototype.getActiveIconIsMask = function () {
	return true;
};
Tab.prototype.setActiveIconIsMask = function () {
};
Tab.prototype.getTitleid = function () {
	return '';
};
Tab.prototype.setTitleid = function () {
};
Tab.prototype.getWindow = function () {
	return {};
};
Tab.prototype.setWindow = function () {
};
Tab.prototype.getTitle = function () {
	return '';
};
Tab.prototype.setTitle = function () {
};
Tab.prototype.getIcon = function () {
	return '';
};
Tab.prototype.setIcon = function () {
};
module.exports = function (properties) {
	return new Tab(properties);
};