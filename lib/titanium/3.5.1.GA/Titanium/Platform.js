function Platform(properties) {
	properties = properties || {};
	this.BATTERY_STATE_CHARGING = properties.BATTERY_STATE_CHARGING || undefined;
	this.BATTERY_STATE_FULL = properties.BATTERY_STATE_FULL || undefined;
	this.BATTERY_STATE_UNKNOWN = properties.BATTERY_STATE_UNKNOWN || undefined;
	this.BATTERY_STATE_UNPLUGGED = properties.BATTERY_STATE_UNPLUGGED || undefined;
	this.address = properties.address || undefined;
	this.apiName = 'Ti.Platform';
	this.architecture = properties.architecture || undefined;
	this.availableMemory = properties.availableMemory || undefined;
	this.batteryLevel = properties.batteryLevel || undefined;
	this.batteryMonitoring = properties.batteryMonitoring || undefined;
	this.batteryState = properties.batteryState || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.displayCaps = properties.displayCaps || undefined;
	this.id = properties.id || undefined;
	this.locale = properties.locale || undefined;
	this.macaddress = properties.macaddress || undefined;
	this.manufacturer = properties.manufacturer || undefined;
	this.model = properties.model || undefined;
	this.name = properties.name || undefined;
	this.netmask = properties.netmask || undefined;
	this.osname = properties.osname || undefined;
	this.ostype = properties.ostype || undefined;
	this.processorCount = properties.processorCount || undefined;
	this.runtime = properties.runtime || undefined;
	this.username = properties.username || undefined;
	this.version = properties.version || undefined;
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