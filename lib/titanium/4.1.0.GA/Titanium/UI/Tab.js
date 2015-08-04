var crypto = require('crypto');
function Tab(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'backgroundDisabledColor',
			'backgroundDisabledImage',
			'backgroundFocusedColor',
			'backgroundFocusedImage',
			'backgroundImage',
			'backgroundSelectedColor',
			'backgroundSelectedImage',
			'clipMode',
			'overrideCurrentAnimation',
			'pullBackgroundColor',
			'viewShadowRadius',
			'viewShadowColor',
			'viewShadowOffset',
			'backgroundColor',
			'tintColor',
			'touchEnabled',
			'titleColor',
			'activeTitleColor',
			'active',
			'activeIcon',
			'badge',
			'iconIsMask',
			'activeIconIsMask',
			'titleid',
			'window',
			'title',
			'icon',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT) {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT) {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.Tab.apiName is read only property');
	}
	this.apiName = 'Ti.UI.Tab';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.backgroundDisabledColor = __SLAG__properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = __SLAG__properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = __SLAG__properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = __SLAG__properties.backgroundFocusedImage || '';
	this.backgroundImage = __SLAG__properties.backgroundImage || '';
	this.backgroundSelectedColor = __SLAG__properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = __SLAG__properties.backgroundSelectedImage || '';
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	this.viewShadowRadius = __SLAG__properties.viewShadowRadius || 0;
	this.viewShadowColor = __SLAG__properties.viewShadowColor || '';
	this.viewShadowOffset = __SLAG__properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.backgroundColor = __SLAG__properties.backgroundColor || '';
	this.tintColor = __SLAG__properties.tintColor || '';
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.titleColor = __SLAG__properties.titleColor || '';
	this.activeTitleColor = __SLAG__properties.activeTitleColor || '';
	this.active = __SLAG__properties.active || true;
	this.activeIcon = __SLAG__properties.activeIcon || '';
	this.badge = __SLAG__properties.badge || '';
	this.iconIsMask = __SLAG__properties.iconIsMask || true;
	this.activeIconIsMask = __SLAG__properties.activeIconIsMask || true;
	this.titleid = __SLAG__properties.titleid || '';
	this.window = __SLAG__properties.window || {};
	this.title = __SLAG__properties.title || '';
	this.icon = __SLAG__properties.icon || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
Tab.prototype.addEventListener = function () {
};
Tab.prototype.removeEventListener = function () {
};
Tab.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
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
Tab.prototype.setWindow = function (property) {
	this.window = property;
};
Tab.prototype.open = function () {
};
Tab.prototype.close = function () {
};
Tab.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Tab.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Tab.prototype.getApiName = function () {
	return this.apiName;
};
Tab.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Tab.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Tab.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
Tab.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
Tab.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
Tab.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
Tab.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
Tab.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
Tab.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
Tab.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
Tab.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
Tab.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
Tab.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
Tab.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
Tab.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
Tab.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
Tab.prototype.getClipMode = function () {
	return this.clipMode;
};
Tab.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
Tab.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
Tab.prototype.setOverrideCurrentAnimation = function (property) {
	this.overrideCurrentAnimation = property;
};
Tab.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
Tab.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
Tab.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
Tab.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
Tab.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
Tab.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
Tab.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
Tab.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
Tab.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
Tab.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
Tab.prototype.getTintColor = function () {
	return this.tintColor;
};
Tab.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
Tab.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
Tab.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
Tab.prototype.getTitleColor = function () {
	return this.titleColor;
};
Tab.prototype.setTitleColor = function (property) {
	this.titleColor = property;
};
Tab.prototype.getActiveTitleColor = function () {
	return this.activeTitleColor;
};
Tab.prototype.setActiveTitleColor = function (property) {
	this.activeTitleColor = property;
};
Tab.prototype.getActive = function () {
	return this.active;
};
Tab.prototype.setActive = function (property) {
	this.active = property;
};
Tab.prototype.getActiveIcon = function () {
	return this.activeIcon;
};
Tab.prototype.setActiveIcon = function (property) {
	this.activeIcon = property;
};
Tab.prototype.getBadge = function () {
	return this.badge;
};
Tab.prototype.setBadge = function (property) {
	this.badge = property;
};
Tab.prototype.getIconIsMask = function () {
	return this.iconIsMask;
};
Tab.prototype.setIconIsMask = function (property) {
	this.iconIsMask = property;
};
Tab.prototype.getActiveIconIsMask = function () {
	return this.activeIconIsMask;
};
Tab.prototype.setActiveIconIsMask = function (property) {
	this.activeIconIsMask = property;
};
Tab.prototype.getTitleid = function () {
	return this.titleid;
};
Tab.prototype.setTitleid = function (property) {
	this.titleid = property;
};
Tab.prototype.getWindow = function () {
	return this.window;
};
Tab.prototype.setWindow = function (property) {
	this.window = property;
};
Tab.prototype.getTitle = function () {
	return this.title;
};
Tab.prototype.setTitle = function (property) {
	this.title = property;
};
Tab.prototype.getIcon = function () {
	return this.icon;
};
Tab.prototype.setIcon = function (property) {
	this.icon = property;
};
module.exports = function (properties) {
	return new Tab(properties);
};