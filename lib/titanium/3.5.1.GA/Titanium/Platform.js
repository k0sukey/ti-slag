function Platform(properties) {
	properties = properties || {};
	this.BATTERY_STATE_CHARGING = properties.BATTERY_STATE_CHARGING || 0;
	this.BATTERY_STATE_FULL = properties.BATTERY_STATE_FULL || 0;
	this.BATTERY_STATE_UNKNOWN = properties.BATTERY_STATE_UNKNOWN || 0;
	this.BATTERY_STATE_UNPLUGGED = properties.BATTERY_STATE_UNPLUGGED || 0;
	this.address = properties.address || '';
	this.apiName = 'Ti.Platform';
	this.architecture = properties.architecture || '';
	this.availableMemory = properties.availableMemory || 0;
	this.batteryLevel = properties.batteryLevel || 0;
	this.batteryMonitoring = properties.batteryMonitoring || true;
	this.batteryState = properties.batteryState || 0;
	this.bubbleParent = properties.bubbleParent || true;
	this.displayCaps = properties.displayCaps || {};
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
	return this;
}
Platform.prototype.addEventListener = function () {
};
Platform.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Platform.prototype.canOpenURL = function () {
	return true;
};
Platform.prototype.createUUID = function (params) {
	var UUID = require('./Platform/UUID');
	return UUID(params);
};
Platform.prototype.fireEvent = function () {
};
Platform.prototype.getAddress = function () {
	return '';
};
Platform.prototype.getApiName = function () {
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
Platform.prototype.getBatteryState = function () {
	return 0;
};
Platform.prototype.getBubbleParent = function () {
	return true;
};
Platform.prototype.getDisplayCaps = function () {
	return {};
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
Platform.prototype.is24HourTimeFormat = function () {
	return true;
};
Platform.prototype.openURL = function () {
	return true;
};
Platform.prototype.removeEventListener = function () {
};
Platform.prototype.setBatteryMonitoring = function () {
};
Platform.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new Platform(properties);
};