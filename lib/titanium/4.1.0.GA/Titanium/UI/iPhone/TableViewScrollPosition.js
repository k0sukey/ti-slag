var crypto = require('crypto');
function TableViewScrollPosition(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'BOTTOM',
			'MIDDLE',
			'NONE',
			'TOP',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iPhone.TableViewScrollPosition.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPhone.TableViewScrollPosition';
	if (__SLAG__properties.BOTTOM) {
		throw new Error('Ti.UI.iPhone.TableViewScrollPosition.BOTTOM is read only property');
	}
	this.BOTTOM = 0;
	if (__SLAG__properties.MIDDLE) {
		throw new Error('Ti.UI.iPhone.TableViewScrollPosition.MIDDLE is read only property');
	}
	this.MIDDLE = 0;
	if (__SLAG__properties.NONE) {
		throw new Error('Ti.UI.iPhone.TableViewScrollPosition.NONE is read only property');
	}
	this.NONE = 0;
	if (__SLAG__properties.TOP) {
		throw new Error('Ti.UI.iPhone.TableViewScrollPosition.TOP is read only property');
	}
	this.TOP = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
TableViewScrollPosition.prototype.addEventListener = function () {
};
TableViewScrollPosition.prototype.removeEventListener = function () {
};
TableViewScrollPosition.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
TableViewScrollPosition.prototype.fireEvent = function () {
};
TableViewScrollPosition.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
TableViewScrollPosition.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
TableViewScrollPosition.prototype.getApiName = function () {
	return this.apiName;
};
module.exports = function (properties) {
	return new TableViewScrollPosition(properties);
};