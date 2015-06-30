function Platform(properties) {
	properties = properties || {};
	this.BATTERY_STATE_CHARGING = properties.BATTERY_STATE_CHARGING || undefined;
	this.BATTERY_STATE_FULL = properties.BATTERY_STATE_FULL || undefined;
	this.BATTERY_STATE_UNKNOWN = properties.BATTERY_STATE_UNKNOWN || undefined;
	this.BATTERY_STATE_UNPLUGGED = properties.BATTERY_STATE_UNPLUGGED || undefined;
	this.address = properties.address || undefined;
	this.apiName = 'Titanium.Platform';
	this.architecture = properties.architecture || undefined;
	this.availableMemory = properties.availableMemory || undefined;
	this.batteryLevel = properties.batteryLevel || undefined;
	this.batteryMonitoring = properties.batteryMonitoring || undefined;
	this.batteryState = properties.batteryState || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.displayCaps = properties.displayCaps || undefined;
	this.id = properties.id || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
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
	return this.address;
};
Platform.prototype.getApiName = function () {
	return this.apiName;
};
Platform.prototype.getArchitecture = function () {
	return this.architecture;
};
Platform.prototype.getAvailableMemory = function () {
	return this.availableMemory;
};
Platform.prototype.getBatteryLevel = function () {
	return this.batteryLevel;
};
Platform.prototype.getBatteryMonitoring = function () {
	return this.batteryMonitoring;
};
Platform.prototype.getBatteryState = function () {
	return this.batteryState;
};
Platform.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Platform.prototype.getDisplayCaps = function () {
	return this.displayCaps;
};
Platform.prototype.getId = function () {
	return this.id;
};
Platform.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Platform.prototype.getLocale = function () {
	return this.locale;
};
Platform.prototype.getMacaddress = function () {
	return this.macaddress;
};
Platform.prototype.getManufacturer = function () {
	return this.manufacturer;
};
Platform.prototype.getModel = function () {
	return this.model;
};
Platform.prototype.getName = function () {
	return this.name;
};
Platform.prototype.getNetmask = function () {
	return this.netmask;
};
Platform.prototype.getOsname = function () {
	return this.osname;
};
Platform.prototype.getOstype = function () {
	return this.ostype;
};
Platform.prototype.getProcessorCount = function () {
	return this.processorCount;
};
Platform.prototype.getRuntime = function () {
	return this.runtime;
};
Platform.prototype.getUsername = function () {
	return this.username;
};
Platform.prototype.getVersion = function () {
	return this.version;
};
Platform.prototype.is24HourTimeFormat = function () {
	return true;
};
Platform.prototype.openURL = function () {
	return true;
};
Platform.prototype.removeEventListener = function () {
};
Platform.prototype.setBatteryMonitoring = function (property) {
	this.batteryMonitoring = property;
};
Platform.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Platform.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new Platform(properties);
};