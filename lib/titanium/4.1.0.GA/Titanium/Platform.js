function Platform(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Platform';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.address = properties.address || '';
	this.architecture = properties.architecture || '';
	this.availableMemory = properties.availableMemory || 0;
	this.batteryLevel = properties.batteryLevel || 0;
	this.batteryMonitoring = properties.batteryMonitoring || true;
	this.batteryState = properties.batteryState || 0;
	this.id = properties.id || '';
	this.locale = properties.locale || '';
	this.macaddress = properties.macaddress || '';
	this.manufacturer = properties.manufacturer || '';
	this.model = properties.model || '';
	this.name = properties.name || '';
	this.netmask = properties.netmask || '';
	this.osname = properties.osname || '';
	this.ostype = properties.ostype || '';
	this.processorCount = properties.processorCount || 0;
	this.runtime = properties.runtime || '';
	this.username = properties.username || '';
	this.version = properties.version || '';
	this.displayCaps = properties.displayCaps || {};
	this.BATTERY_STATE_CHARGING = properties.BATTERY_STATE_CHARGING || 0;
	this.BATTERY_STATE_FULL = properties.BATTERY_STATE_FULL || 0;
	this.BATTERY_STATE_UNKNOWN = properties.BATTERY_STATE_UNKNOWN || 0;
	this.BATTERY_STATE_UNPLUGGED = properties.BATTERY_STATE_UNPLUGGED || 0;
	return this;
}
Platform.prototype.addEventListener = function () {
};
Platform.prototype.removeEventListener = function () {
};
Platform.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Platform.prototype.fireEvent = function () {
};
Platform.prototype.createUUID = function (params) {
	var UUID = require('./Platform/UUID');
	return UUID(params);
};
Platform.prototype.canOpenURL = function () {
	return true;
};
Platform.prototype.openURL = function () {
	return true;
};
Platform.prototype.is24HourTimeFormat = function () {
	return true;
};
Platform.prototype.getBubbleParent = function () {
	return true;
};
Platform.prototype.setBubbleParent = function () {
};
Platform.prototype.getApiName = function () {
	return '';
};
Platform.prototype.getLifecycleContainer = function () {
	return {};
};
Platform.prototype.setLifecycleContainer = function () {
};
Platform.prototype.getAddress = function () {
	return '';
};
Platform.prototype.getArchitecture = function () {
	return '';
};
Platform.prototype.getAvailableMemory = function () {
	return 0;
};
Platform.prototype.getBatteryLevel = function () {
	return 0;
};
Platform.prototype.getBatteryMonitoring = function () {
	return true;
};
Platform.prototype.setBatteryMonitoring = function () {
};
Platform.prototype.getBatteryState = function () {
	return 0;
};
Platform.prototype.getId = function () {
	return '';
};
Platform.prototype.getLocale = function () {
	return '';
};
Platform.prototype.getMacaddress = function () {
	return '';
};
Platform.prototype.getManufacturer = function () {
	return '';
};
Platform.prototype.getModel = function () {
	return '';
};
Platform.prototype.getName = function () {
	return '';
};
Platform.prototype.getNetmask = function () {
	return '';
};
Platform.prototype.getOsname = function () {
	return '';
};
Platform.prototype.getOstype = function () {
	return '';
};
Platform.prototype.getProcessorCount = function () {
	return 0;
};
Platform.prototype.getRuntime = function () {
	return '';
};
Platform.prototype.getUsername = function () {
	return '';
};
Platform.prototype.getVersion = function () {
	return '';
};
Platform.prototype.getDisplayCaps = function () {
	return {};
};
module.exports = function (properties) {
	return new Platform(properties);
};