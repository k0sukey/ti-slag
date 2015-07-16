function CoreMotion(properties) {
	properties = properties || {};
	this.apiName = 'Modules.CoreMotion';
	this.ERROR_NULL = properties.ERROR_NULL || 0;
	this.ERROR_DEVICE_REQUIRES_MOVEMENT = properties.ERROR_DEVICE_REQUIRES_MOVEMENT || 0;
	this.ERROR_TRUE_NORTH_NOT_AVAILABLE = properties.ERROR_TRUE_NORTH_NOT_AVAILABLE || 0;
	this.ERROR_UNKNOWN = properties.ERROR_UNKNOWN || 0;
	this.ERROR_MOTION_ACTIVITY_NOT_AVAILABLE = properties.ERROR_MOTION_ACTIVITY_NOT_AVAILABLE || 0;
	this.ERROR_MOTION_ACTIVITY_NOT_AUTHORIZED = properties.ERROR_MOTION_ACTIVITY_NOT_AUTHORIZED || 0;
	this.ERROR_MOTION_ACTIVITY_NOT_ENTITLED = properties.ERROR_MOTION_ACTIVITY_NOT_ENTITLED || 0;
	this.ERROR_INVALID_PARAMETER = properties.ERROR_INVALID_PARAMETER || 0;
	this.ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_Z_VERTICAL = properties.ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_Z_VERTICAL || 0;
	this.ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_CORRECTED_Z_VERTICAL = properties.ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_CORRECTED_Z_VERTICAL || 0;
	this.ATTITUDE_REFERENCE_FRAME_X_MAGNETIC_NORTH_Z_VERTICAL = properties.ATTITUDE_REFERENCE_FRAME_X_MAGNETIC_NORTH_Z_VERTICAL || 0;
	this.ATTITUDE_REFERENCE_FRAME_X_TRUE_NORTH_Z_VERTICAL = properties.ATTITUDE_REFERENCE_FRAME_X_TRUE_NORTH_Z_VERTICAL || 0;
	this.MAGNETIC_FIELD_CALIBRATION_ACCURACY_UNCALIBRATED = properties.MAGNETIC_FIELD_CALIBRATION_ACCURACY_UNCALIBRATED || 0;
	this.MAGNETIC_FIELD_CALIBRATION_ACCURACY_LOW = properties.MAGNETIC_FIELD_CALIBRATION_ACCURACY_LOW || 0;
	this.MAGNETIC_FIELD_CALIBRATION_ACCURACY_MEDIUM = properties.MAGNETIC_FIELD_CALIBRATION_ACCURACY_MEDIUM || 0;
	this.MAGNETIC_FIELD_CALIBRATION_ACCURACY_HIGH = properties.MAGNETIC_FIELD_CALIBRATION_ACCURACY_HIGH || 0;
	this.MOTION_ACTIVITY_CONFIDENCE_LOW = properties.MOTION_ACTIVITY_CONFIDENCE_LOW || 0;
	this.MOTION_ACTIVITY_CONFIDENCE_MEDIUM = properties.MOTION_ACTIVITY_CONFIDENCE_MEDIUM || 0;
	this.MOTION_ACTIVITY_CONFIDENCE_HIGH = properties.MOTION_ACTIVITY_CONFIDENCE_HIGH || 0;
	return this;
}
CoreMotion.prototype.setAccelerometerUpdateInterval = function () {
};
CoreMotion.prototype.startAccelerometerUpdates = function () {
};
CoreMotion.prototype.stopAccelerometerUpdates = function () {
};
CoreMotion.prototype.isAccelerometerActive = function () {
	return true;
};
CoreMotion.prototype.isAccelerometerAvailable = function () {
	return true;
};
CoreMotion.prototype.getAccelerometerData = function () {
	return {};
};
CoreMotion.prototype.setGyroUpdateInterval = function () {
};
CoreMotion.prototype.startGyroUpdates = function () {
};
CoreMotion.prototype.stopGyroUpdates = function () {
};
CoreMotion.prototype.isGyroActive = function () {
	return true;
};
CoreMotion.prototype.isGyroAvailable = function () {
	return true;
};
CoreMotion.prototype.getGyroData = function () {
	return {};
};
CoreMotion.prototype.setMagnetometerUpdateInterval = function () {
};
CoreMotion.prototype.startMagnetometerUpdates = function () {
};
CoreMotion.prototype.stopMagnetometerUpdates = function () {
};
CoreMotion.prototype.isMagnetometerActive = function () {
	return true;
};
CoreMotion.prototype.isMagnetometerAvailable = function () {
	return true;
};
CoreMotion.prototype.getMagnetometerData = function () {
	return {};
};
CoreMotion.prototype.setShowsDeviceMovementDisplay = function () {
};
CoreMotion.prototype.setDeviceMotionUpdateInterval = function () {
};
CoreMotion.prototype.startDeviceMotionUpdatesUsingReferenceFrame = function () {
};
CoreMotion.prototype.startDeviceMotionUpdates = function () {
};
CoreMotion.prototype.stopDeviceMotionUpdates = function () {
};
CoreMotion.prototype.getAttitudeReferenceFrame = function () {
	return 0;
};
CoreMotion.prototype.availableAttitudeReferenceFrames = function () {
	return 0;
};
CoreMotion.prototype.isDeviceMotionActive = function () {
	return true;
};
CoreMotion.prototype.isDeviceMotionAvailable = function () {
	return true;
};
CoreMotion.prototype.getDeviceMotion = function () {
	return {};
};
CoreMotion.prototype.isActivityAvailable = function () {
	return true;
};
CoreMotion.prototype.startActivityUpdates = function () {
};
CoreMotion.prototype.stopActivityUpdates = function () {
};
CoreMotion.prototype.queryActivity = function () {
};
CoreMotion.prototype.isStepCountingAvailable = function () {
	return true;
};
CoreMotion.prototype.startStepCountingUpdates = function () {
};
CoreMotion.prototype.stopStepCountingUpdates = function () {
};
CoreMotion.prototype.queryStepCount = function () {
};
CoreMotion.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new CoreMotion(properties);
};