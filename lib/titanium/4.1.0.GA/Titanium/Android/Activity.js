var crypto = require('crypto');
function Activity(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'actionBar',
			'intent',
			'onCreate',
			'onCreateOptionsMenu',
			'onDestroy',
			'onPause',
			'onPrepareOptionsMenu',
			'onRestart',
			'onResume',
			'onStart',
			'onStop',
			'requestedOrientation',
			'id'
		];
	if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG_NAME in __SLAG_PROPERTIES) {
			if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) {
				throw new Error('Use user custom property ' + __SLAG_NAME);
			}
		}
	} else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG_PROPERTIES.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Android.Activity.apiName is read only property');
	}
	this.apiName = 'Ti.Android.Activity';
	this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	if (__SLAG_PROPERTIES.actionBar) {
		throw new Error('Ti.Android.Activity.actionBar is read only property');
	}
	this.actionBar = {};
	if (__SLAG_PROPERTIES.intent) {
		throw new Error('Ti.Android.Activity.intent is read only property');
	}
	this.intent = {};
	this.onCreate = __SLAG_PROPERTIES.onCreate || {};
	this.onCreateOptionsMenu = __SLAG_PROPERTIES.onCreateOptionsMenu || {};
	this.onDestroy = __SLAG_PROPERTIES.onDestroy || {};
	this.onPause = __SLAG_PROPERTIES.onPause || {};
	this.onPrepareOptionsMenu = __SLAG_PROPERTIES.onPrepareOptionsMenu || {};
	this.onRestart = __SLAG_PROPERTIES.onRestart || {};
	this.onResume = __SLAG_PROPERTIES.onResume || {};
	this.onStart = __SLAG_PROPERTIES.onStart || {};
	this.onStop = __SLAG_PROPERTIES.onStop || {};
	this.requestedOrientation = __SLAG_PROPERTIES.requestedOrientation || 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Activity.prototype.addEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Activity.prototype.removeEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Activity.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Activity.prototype.fireEvent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Activity.prototype.finish = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Activity.prototype.getString = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return '';
};
Activity.prototype.invalidateOptionsMenu = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Activity.prototype.setRequestedOrientation = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.requestedOrientation = __SLAG__PROPERTY;
};
Activity.prototype.setResult = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Activity.prototype.startActivity = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Activity.prototype.startActivityForResult = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Activity.prototype.openOptionsMenu = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Activity.prototype.sendBroadcast = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Activity.prototype.sendBroadcastWithPermission = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Activity.prototype.getBubbleParent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Activity.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Activity.prototype.getApiName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Activity.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Activity.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
Activity.prototype.getActionBar = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.actionBar;
};
Activity.prototype.getIntent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.intent;
};
Activity.prototype.getOnCreate = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.onCreate;
};
Activity.prototype.setOnCreate = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.onCreate = __SLAG__PROPERTY;
};
Activity.prototype.getOnCreateOptionsMenu = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.onCreateOptionsMenu;
};
Activity.prototype.setOnCreateOptionsMenu = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.onCreateOptionsMenu = __SLAG__PROPERTY;
};
Activity.prototype.getOnDestroy = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.onDestroy;
};
Activity.prototype.setOnDestroy = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.onDestroy = __SLAG__PROPERTY;
};
Activity.prototype.getOnPause = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.onPause;
};
Activity.prototype.setOnPause = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.onPause = __SLAG__PROPERTY;
};
Activity.prototype.getOnPrepareOptionsMenu = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.onPrepareOptionsMenu;
};
Activity.prototype.setOnPrepareOptionsMenu = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.onPrepareOptionsMenu = __SLAG__PROPERTY;
};
Activity.prototype.getOnRestart = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.onRestart;
};
Activity.prototype.setOnRestart = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.onRestart = __SLAG__PROPERTY;
};
Activity.prototype.getOnResume = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.onResume;
};
Activity.prototype.setOnResume = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.onResume = __SLAG__PROPERTY;
};
Activity.prototype.getOnStart = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.onStart;
};
Activity.prototype.setOnStart = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.onStart = __SLAG__PROPERTY;
};
Activity.prototype.getOnStop = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.onStop;
};
Activity.prototype.setOnStop = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.onStop = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new Activity(properties);
};