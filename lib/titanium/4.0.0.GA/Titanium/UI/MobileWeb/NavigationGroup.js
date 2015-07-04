function NavigationGroup(properties) {
	properties = properties || {};
	this.apiName = 'Ti.UI.MobileWeb.NavigationGroup';
	this.backgroundColor = properties.backgroundColor || undefined;
	this.backgroundGradient = properties.backgroundGradient || undefined;
	this.backgroundImage = properties.backgroundImage || undefined;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || undefined;
	this.backgroundSelectedImage = properties.backgroundSelectedImage || undefined;
	this.borderColor = properties.borderColor || undefined;
	this.borderRadius = properties.borderRadius || undefined;
	this.borderWidth = properties.borderWidth || undefined;
	this.bottom = properties.bottom || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.height = properties.height || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.navBarAtTop = properties.navBarAtTop || undefined;
	this.opacity = properties.opacity || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.size = properties.size || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.window = properties.window || undefined;
	this.zIndex = properties.zIndex || undefined;
	return this;
}
NavigationGroup.prototype.add = function () {
};
NavigationGroup.prototype.addEventListener = function () {
};
NavigationGroup.prototype.animate = function () {
};
NavigationGroup.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
NavigationGroup.prototype.close = function () {
};
NavigationGroup.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationGroup.prototype.finishLayout = function () {
	throw new Error('Ti.UI.MobileWeb.NavigationGroup.finishLayout was deprecated, since 3.0.0');
};
NavigationGroup.prototype.fireEvent = function () {
};
NavigationGroup.prototype.getApiName = function () {
	return '';
};
NavigationGroup.prototype.getBackgroundColor = function () {
	return '';
};
NavigationGroup.prototype.getBackgroundGradient = function () {
	return {};
};
NavigationGroup.prototype.getBackgroundImage = function () {
	return '';
};
NavigationGroup.prototype.getBackgroundSelectedColor = function () {
	return '';
};
NavigationGroup.prototype.getBackgroundSelectedImage = function () {
	return '';
};
NavigationGroup.prototype.getBorderColor = function () {
	return '';
};
NavigationGroup.prototype.getBorderRadius = function () {
	return 0;
};
NavigationGroup.prototype.getBorderWidth = function () {
	return 0;
};
NavigationGroup.prototype.getBottom = function () {
	return 0;
};
NavigationGroup.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationGroup.prototype.getChildren = function () {
	return [];
};
NavigationGroup.prototype.getHeight = function () {
	return 0;
};
NavigationGroup.prototype.getHorizontalWrap = function () {
	return true;
};
NavigationGroup.prototype.getLayout = function () {
	return '';
};
NavigationGroup.prototype.getLeft = function () {
	return 0;
};
NavigationGroup.prototype.getNavBarAtTop = function () {
	return true;
};
NavigationGroup.prototype.getOpacity = function () {
	return 0;
};
NavigationGroup.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
NavigationGroup.prototype.getRight = function () {
	return 0;
};
NavigationGroup.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
NavigationGroup.prototype.getTop = function () {
	return 0;
};
NavigationGroup.prototype.getTouchEnabled = function () {
	return true;
};
NavigationGroup.prototype.getTransform = function () {
	return {};
};
NavigationGroup.prototype.getVisible = function () {
	return true;
};
NavigationGroup.prototype.getWidth = function () {
	return 0;
};
NavigationGroup.prototype.getWindow = function () {
	return {};
};
NavigationGroup.prototype.getZIndex = function () {
	return 0;
};
NavigationGroup.prototype.hide = function () {
};
NavigationGroup.prototype.open = function () {
};
NavigationGroup.prototype.remove = function () {
};
NavigationGroup.prototype.removeEventListener = function () {
};
NavigationGroup.prototype.setBackgroundColor = function () {
};
NavigationGroup.prototype.setBackgroundGradient = function () {
};
NavigationGroup.prototype.setBackgroundImage = function () {
};
NavigationGroup.prototype.setBackgroundSelectedColor = function () {
};
NavigationGroup.prototype.setBackgroundSelectedImage = function () {
};
NavigationGroup.prototype.setBorderColor = function () {
};
NavigationGroup.prototype.setBorderRadius = function () {
};
NavigationGroup.prototype.setBorderWidth = function () {
};
NavigationGroup.prototype.setBottom = function () {
};
NavigationGroup.prototype.setCenter = function () {
};
NavigationGroup.prototype.setHeight = function () {
};
NavigationGroup.prototype.setHorizontalWrap = function () {
};
NavigationGroup.prototype.setLayout = function () {
};
NavigationGroup.prototype.setLeft = function () {
};
NavigationGroup.prototype.setNavBarAtTop = function () {
};
NavigationGroup.prototype.setOpacity = function () {
};
NavigationGroup.prototype.setRight = function () {
};
NavigationGroup.prototype.setTop = function () {
};
NavigationGroup.prototype.setTouchEnabled = function () {
};
NavigationGroup.prototype.setTransform = function () {
};
NavigationGroup.prototype.setVisible = function () {
};
NavigationGroup.prototype.setWidth = function () {
};
NavigationGroup.prototype.setZIndex = function () {
};
NavigationGroup.prototype.show = function () {
};
NavigationGroup.prototype.startLayout = function () {
	throw new Error('Ti.UI.MobileWeb.NavigationGroup.startLayout was deprecated, since 3.0.0');
};
NavigationGroup.prototype.updateLayout = function () {
	throw new Error('Ti.UI.MobileWeb.NavigationGroup.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new NavigationGroup(properties);
};