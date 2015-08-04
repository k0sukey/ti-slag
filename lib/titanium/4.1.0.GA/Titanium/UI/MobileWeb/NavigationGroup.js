var crypto = require('crypto');
function NavigationGroup(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'backgroundGradient',
			'backgroundImage',
			'backgroundSelectedColor',
			'backgroundSelectedImage',
			'transform',
			'horizontalWrap',
			'zIndex',
			'backgroundColor',
			'borderColor',
			'borderRadius',
			'borderWidth',
			'bottom',
			'center',
			'children',
			'height',
			'layout',
			'left',
			'opacity',
			'rect',
			'right',
			'size',
			'top',
			'touchEnabled',
			'visible',
			'width',
			'window',
			'navBarAtTop',
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
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.MobileWeb.NavigationGroup.apiName is read only property');
	}
	this.apiName = 'Ti.UI.MobileWeb.NavigationGroup';
	this.backgroundGradient = __SLAG__properties.backgroundGradient || {};
	this.backgroundImage = __SLAG__properties.backgroundImage || '';
	this.backgroundSelectedColor = __SLAG__properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = __SLAG__properties.backgroundSelectedImage || '';
	this.transform = __SLAG__properties.transform || {};
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.zIndex = __SLAG__properties.zIndex || 0;
	this.backgroundColor = __SLAG__properties.backgroundColor || '';
	this.borderColor = __SLAG__properties.borderColor || '';
	this.borderRadius = __SLAG__properties.borderRadius || 0;
	this.borderWidth = __SLAG__properties.borderWidth || 0;
	this.bottom = __SLAG__properties.bottom || 0;
	this.center = __SLAG__properties.center || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.children) {
		throw new Error('Ti.UI.MobileWeb.NavigationGroup.children is read only property');
	}
	this.children = [];
	this.height = __SLAG__properties.height || 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.MobileWeb.NavigationGroup.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.MobileWeb.NavigationGroup.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.top = __SLAG__properties.top || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.visible = __SLAG__properties.visible || true;
	this.width = __SLAG__properties.width || 0;
	this.window = __SLAG__properties.window || {};
	this.navBarAtTop = __SLAG__properties.navBarAtTop || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
NavigationGroup.prototype.addEventListener = function () {
};
NavigationGroup.prototype.removeEventListener = function () {
};
NavigationGroup.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
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
NavigationGroup.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
NavigationGroup.prototype.animate = function () {
};
NavigationGroup.prototype.hide = function () {
};
NavigationGroup.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
NavigationGroup.prototype.show = function () {
};
NavigationGroup.prototype.close = function () {
};
NavigationGroup.prototype.open = function () {
};
NavigationGroup.prototype.getApiName = function () {
	return this.apiName;
};
NavigationGroup.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
NavigationGroup.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
NavigationGroup.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
NavigationGroup.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
NavigationGroup.prototype.getBackgroundSelectedColor = function () {
	return this.backgroundSelectedColor;
};
NavigationGroup.prototype.setBackgroundSelectedColor = function (property) {
	this.backgroundSelectedColor = property;
};
NavigationGroup.prototype.getBackgroundSelectedImage = function () {
	return this.backgroundSelectedImage;
};
NavigationGroup.prototype.setBackgroundSelectedImage = function (property) {
	this.backgroundSelectedImage = property;
};
NavigationGroup.prototype.getTransform = function () {
	return this.transform;
};
NavigationGroup.prototype.setTransform = function (property) {
	this.transform = property;
};
NavigationGroup.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
NavigationGroup.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
NavigationGroup.prototype.getZIndex = function () {
	return this.zIndex;
};
NavigationGroup.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
NavigationGroup.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
NavigationGroup.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
NavigationGroup.prototype.getBorderColor = function () {
	return this.borderColor;
};
NavigationGroup.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
NavigationGroup.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
NavigationGroup.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
NavigationGroup.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
NavigationGroup.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
NavigationGroup.prototype.getBottom = function () {
	return this.bottom;
};
NavigationGroup.prototype.setBottom = function (property) {
	this.bottom = property;
};
NavigationGroup.prototype.getCenter = function () {
	return this.center;
};
NavigationGroup.prototype.setCenter = function (property) {
	this.center = property;
};
NavigationGroup.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
NavigationGroup.prototype.getChildren = function () {
	return this.children;
};
NavigationGroup.prototype.getHeight = function () {
	return this.height;
};
NavigationGroup.prototype.setHeight = function (property) {
	this.height = property;
};
NavigationGroup.prototype.getLayout = function () {
	return this.layout;
};
NavigationGroup.prototype.setLayout = function (property) {
	this.layout = property;
};
NavigationGroup.prototype.getLeft = function () {
	return this.left;
};
NavigationGroup.prototype.setLeft = function (property) {
	this.left = property;
};
NavigationGroup.prototype.getOpacity = function () {
	return this.opacity;
};
NavigationGroup.prototype.setOpacity = function (property) {
	this.opacity = property;
};
NavigationGroup.prototype.getRect = function () {
	return this.rect;
};
NavigationGroup.prototype.getRight = function () {
	return this.right;
};
NavigationGroup.prototype.setRight = function (property) {
	this.right = property;
};
NavigationGroup.prototype.getSize = function () {
	return this.size;
};
NavigationGroup.prototype.getTop = function () {
	return this.top;
};
NavigationGroup.prototype.setTop = function (property) {
	this.top = property;
};
NavigationGroup.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
NavigationGroup.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
NavigationGroup.prototype.getVisible = function () {
	return this.visible;
};
NavigationGroup.prototype.setVisible = function (property) {
	this.visible = property;
};
NavigationGroup.prototype.getWidth = function () {
	return this.width;
};
NavigationGroup.prototype.setWidth = function (property) {
	this.width = property;
};
NavigationGroup.prototype.getWindow = function () {
	return this.window;
};
NavigationGroup.prototype.setWindow = function (property) {
	this.window = property;
};
NavigationGroup.prototype.getNavBarAtTop = function () {
	return this.navBarAtTop;
};
NavigationGroup.prototype.setNavBarAtTop = function (property) {
	this.navBarAtTop = property;
};
module.exports = function (properties) {
	return new NavigationGroup(properties);
};