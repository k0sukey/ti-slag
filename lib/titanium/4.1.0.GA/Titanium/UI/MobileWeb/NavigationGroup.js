function NavigationGroup(properties) {
	properties = properties || {};
	this.apiName = 'Ti.UI.MobileWeb.NavigationGroup';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundSelectedColor = properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = properties.backgroundSelectedImage || '';
	this.transform = properties.transform || {};
	this.horizontalWrap = properties.horizontalWrap || true;
	this.zIndex = properties.zIndex || 0;
	this.backgroundColor = properties.backgroundColor || '';
	this.borderColor = properties.borderColor || '';
	this.borderRadius = properties.borderRadius || 0;
	this.borderWidth = properties.borderWidth || 0;
	this.bottom = properties.bottom || 0;
	this.center = properties.center || {
		x: 0,
		y: 0
	};
	this.children = properties.children || [];
	this.height = properties.height || 0;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.opacity = properties.opacity || 0;
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = properties.right || 0;
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.window = properties.window || {};
	this.navBarAtTop = properties.navBarAtTop || true;
	return this;
}
NavigationGroup.prototype.addEventListener = function () {
};
NavigationGroup.prototype.removeEventListener = function () {
};
NavigationGroup.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
NavigationGroup.prototype.fireEvent = function () {
};
NavigationGroup.prototype.finishLayout = function () {
	throw new Error('Ti.UI.MobileWeb.NavigationGroup.finishLayout was deprecated, since 3.0.0');
};
NavigationGroup.prototype.startLayout = function () {
	throw new Error('Ti.UI.MobileWeb.NavigationGroup.startLayout was deprecated, since 3.0.0');
};
NavigationGroup.prototype.updateLayout = function () {
	throw new Error('Ti.UI.MobileWeb.NavigationGroup.updateLayout was deprecated, since 3.0.0');
};
NavigationGroup.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationGroup.prototype.add = function () {
};
NavigationGroup.prototype.animate = function () {
};
NavigationGroup.prototype.hide = function () {
};
NavigationGroup.prototype.remove = function () {
};
NavigationGroup.prototype.show = function () {
};
NavigationGroup.prototype.close = function () {
};
NavigationGroup.prototype.open = function () {
};
NavigationGroup.prototype.getApiName = function () {
	return '';
};
NavigationGroup.prototype.getBackgroundGradient = function () {
	return {};
};
NavigationGroup.prototype.setBackgroundGradient = function () {
};
NavigationGroup.prototype.getBackgroundImage = function () {
	return '';
};
NavigationGroup.prototype.setBackgroundImage = function () {
};
NavigationGroup.prototype.getBackgroundSelectedColor = function () {
	return '';
};
NavigationGroup.prototype.setBackgroundSelectedColor = function () {
};
NavigationGroup.prototype.getBackgroundSelectedImage = function () {
	return '';
};
NavigationGroup.prototype.setBackgroundSelectedImage = function () {
};
NavigationGroup.prototype.getTransform = function () {
	return {};
};
NavigationGroup.prototype.setTransform = function () {
};
NavigationGroup.prototype.getHorizontalWrap = function () {
	return true;
};
NavigationGroup.prototype.setHorizontalWrap = function () {
};
NavigationGroup.prototype.getZIndex = function () {
	return 0;
};
NavigationGroup.prototype.setZIndex = function () {
};
NavigationGroup.prototype.getBackgroundColor = function () {
	return '';
};
NavigationGroup.prototype.setBackgroundColor = function () {
};
NavigationGroup.prototype.getBorderColor = function () {
	return '';
};
NavigationGroup.prototype.setBorderColor = function () {
};
NavigationGroup.prototype.getBorderRadius = function () {
	return 0;
};
NavigationGroup.prototype.setBorderRadius = function () {
};
NavigationGroup.prototype.getBorderWidth = function () {
	return 0;
};
NavigationGroup.prototype.setBorderWidth = function () {
};
NavigationGroup.prototype.getBottom = function () {
	return '';
};
NavigationGroup.prototype.setBottom = function () {
};
NavigationGroup.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
NavigationGroup.prototype.setCenter = function () {
};
NavigationGroup.prototype.getChildren = function () {
	return [];
};
NavigationGroup.prototype.getHeight = function () {
	return '';
};
NavigationGroup.prototype.setHeight = function () {
};
NavigationGroup.prototype.getLayout = function () {
	return '';
};
NavigationGroup.prototype.setLayout = function () {
};
NavigationGroup.prototype.getLeft = function () {
	return '';
};
NavigationGroup.prototype.setLeft = function () {
};
NavigationGroup.prototype.getOpacity = function () {
	return 0;
};
NavigationGroup.prototype.setOpacity = function () {
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
	return '';
};
NavigationGroup.prototype.setRight = function () {
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
	return '';
};
NavigationGroup.prototype.setTop = function () {
};
NavigationGroup.prototype.getTouchEnabled = function () {
	return true;
};
NavigationGroup.prototype.setTouchEnabled = function () {
};
NavigationGroup.prototype.getVisible = function () {
	return true;
};
NavigationGroup.prototype.setVisible = function () {
};
NavigationGroup.prototype.getWidth = function () {
	return '';
};
NavigationGroup.prototype.setWidth = function () {
};
NavigationGroup.prototype.getWindow = function () {
	return {};
};
NavigationGroup.prototype.setWindow = function () {
};
NavigationGroup.prototype.getNavBarAtTop = function () {
	return true;
};
NavigationGroup.prototype.setNavBarAtTop = function () {
};
module.exports = function (properties) {
	return new NavigationGroup(properties);
};