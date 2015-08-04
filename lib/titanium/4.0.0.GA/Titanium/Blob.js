var crypto = require('crypto');
function Blob(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
			'file',
			'height',
			'length',
			'lifecycleContainer',
			'mimeType',
			'nativePath',
			'size',
			'text',
			'width',
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
		throw new Error('Ti.Blob.apiName is read only property');
	}
	this.apiName = 'Ti.Blob';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.file) {
		throw new Error('Ti.Blob.file is read only property');
	}
	this.file = {};
	if (__SLAG__properties.height) {
		throw new Error('Ti.Blob.height is read only property');
	}
	this.height = 0;
	if (__SLAG__properties.length) {
		throw new Error('Ti.Blob.length is read only property');
	}
	this.length = 0;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.mimeType) {
		throw new Error('Ti.Blob.mimeType is read only property');
	}
	this.mimeType = '';
	if (__SLAG__properties.nativePath) {
		throw new Error('Ti.Blob.nativePath is read only property');
	}
	this.nativePath = '';
	if (__SLAG__properties.size) {
		throw new Error('Ti.Blob.size is read only property');
	}
	this.size = 0;
	if (__SLAG__properties.text) {
		throw new Error('Ti.Blob.text is read only property');
	}
	this.text = '';
	if (__SLAG__properties.width) {
		throw new Error('Ti.Blob.width is read only property');
	}
	this.width = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Blob.prototype.addEventListener = function () {
};
Blob.prototype.append = function () {
};
Blob.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Blob.prototype.fireEvent = function () {
};
Blob.prototype.getApiName = function () {
	return this.apiName;
};
Blob.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Blob.prototype.getFile = function () {
	return this.file;
};
Blob.prototype.getHeight = function () {
	return this.height;
};
Blob.prototype.getLength = function () {
	return this.length;
};
Blob.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Blob.prototype.getMimeType = function () {
	return this.mimeType;
};
Blob.prototype.getNativePath = function () {
	return this.nativePath;
};
Blob.prototype.getSize = function () {
	return this.size;
};
Blob.prototype.getText = function () {
	return this.text;
};
Blob.prototype.getWidth = function () {
	return this.width;
};
Blob.prototype.imageAsCropped = function () {
	return {};
};
Blob.prototype.imageAsResized = function () {
	return {};
};
Blob.prototype.imageAsThumbnail = function () {
	return {};
};
Blob.prototype.imageWithAlpha = function () {
	return {};
};
Blob.prototype.imageWithRoundedCorner = function () {
	return {};
};
Blob.prototype.imageWithTransparentBorder = function () {
	return {};
};
Blob.prototype.removeEventListener = function () {
};
Blob.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Blob.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Blob.prototype.toString = function () {
	return '';
};
module.exports = function (properties) {
	return new Blob(properties);
};