function NavigationGroup(properties) {
	properties = properties || {};
	this.apiName = 'Ti.UI.MobileWeb.NavigationGroup';
	this.backgroundColor = properties.backgroundColor || '';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundSelectedColor = properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = properties.backgroundSelectedImage || '';
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
	this.horizontalWrap = properties.horizontalWrap || true;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.navBarAtTop = properties.navBarAtTop || true;
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
	this.transform = properties.transform || {};
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.window = properties.window || {};
	this.zIndex = properties.zIndex || 0;
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