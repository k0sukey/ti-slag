var crypto = require('crypto');
function CoreMotion(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'ERROR_NULL',
			'ERROR_DEVICE_REQUIRES_MOVEMENT',
			'ERROR_TRUE_NORTH_NOT_AVAILABLE',
			'ERROR_UNKNOWN',
			'ERROR_MOTION_ACTIVITY_NOT_AVAILABLE',
			'ERROR_MOTION_ACTIVITY_NOT_AUTHORIZED',
			'ERROR_MOTION_ACTIVITY_NOT_ENTITLED',
			'ERROR_INVALID_PARAMETER',
			'ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_Z_VERTICAL',
			'ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_CORRECTED_Z_VERTICAL',
			'ATTITUDE_REFERENCE_FRAME_X_MAGNETIC_NORTH_Z_VERTICAL',
			'ATTITUDE_REFERENCE_FRAME_X_TRUE_NORTH_Z_VERTICAL',
			'MAGNETIC_FIELD_CALIBRATION_ACCURACY_UNCALIBRATED',
			'MAGNETIC_FIELD_CALIBRATION_ACCURACY_LOW',
			'MAGNETIC_FIELD_CALIBRATION_ACCURACY_MEDIUM',
			'MAGNETIC_FIELD_CALIBRATION_ACCURACY_HIGH',
			'MOTION_ACTIVITY_CONFIDENCE_LOW',
			'MOTION_ACTIVITY_CONFIDENCE_MEDIUM',
			'MOTION_ACTIVITY_CONFIDENCE_HIGH',
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
		throw new Error('Modules.CoreMotion.apiName is read only property');
	}
	this.apiName = 'Modules.CoreMotion';
	if (__SLAG__properties.ERROR_NULL) {
		throw new Error('Modules.CoreMotion.ERROR_NULL is read only property');
	}
	this.ERROR_NULL = 0;
	if (__SLAG__properties.ERROR_DEVICE_REQUIRES_MOVEMENT) {
		throw new Error('Modules.CoreMotion.ERROR_DEVICE_REQUIRES_MOVEMENT is read only property');
	}
	this.ERROR_DEVICE_REQUIRES_MOVEMENT = 0;
	if (__SLAG__properties.ERROR_TRUE_NORTH_NOT_AVAILABLE) {
		throw new Error('Modules.CoreMotion.ERROR_TRUE_NORTH_NOT_AVAILABLE is read only property');
	}
	this.ERROR_TRUE_NORTH_NOT_AVAILABLE = 0;
	if (__SLAG__properties.ERROR_UNKNOWN) {
		throw new Error('Modules.CoreMotion.ERROR_UNKNOWN is read only property');
	}
	this.ERROR_UNKNOWN = 0;
	if (__SLAG__properties.ERROR_MOTION_ACTIVITY_NOT_AVAILABLE) {
		throw new Error('Modules.CoreMotion.ERROR_MOTION_ACTIVITY_NOT_AVAILABLE is read only property');
	}
	this.ERROR_MOTION_ACTIVITY_NOT_AVAILABLE = 0;
	if (__SLAG__properties.ERROR_MOTION_ACTIVITY_NOT_AUTHORIZED) {
		throw new Error('Modules.CoreMotion.ERROR_MOTION_ACTIVITY_NOT_AUTHORIZED is read only property');
	}
	this.ERROR_MOTION_ACTIVITY_NOT_AUTHORIZED = 0;
	if (__SLAG__properties.ERROR_MOTION_ACTIVITY_NOT_ENTITLED) {
		throw new Error('Modules.CoreMotion.ERROR_MOTION_ACTIVITY_NOT_ENTITLED is read only property');
	}
	this.ERROR_MOTION_ACTIVITY_NOT_ENTITLED = 0;
	if (__SLAG__properties.ERROR_INVALID_PARAMETER) {
		throw new Error('Modules.CoreMotion.ERROR_INVALID_PARAMETER is read only property');
	}
	this.ERROR_INVALID_PARAMETER = 0;
	if (__SLAG__properties.ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_Z_VERTICAL) {
		throw new Error('Modules.CoreMotion.ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_Z_VERTICAL is read only property');
	}
	this.ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_Z_VERTICAL = 0;
	if (__SLAG__properties.ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_CORRECTED_Z_VERTICAL) {
		throw new Error('Modules.CoreMotion.ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_CORRECTED_Z_VERTICAL is read only property');
	}
	this.ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_CORRECTED_Z_VERTICAL = 0;
	if (__SLAG__properties.ATTITUDE_REFERENCE_FRAME_X_MAGNETIC_NORTH_Z_VERTICAL) {
		throw new Error('Modules.CoreMotion.ATTITUDE_REFERENCE_FRAME_X_MAGNETIC_NORTH_Z_VERTICAL is read only property');
	}
	this.ATTITUDE_REFERENCE_FRAME_X_MAGNETIC_NORTH_Z_VERTICAL = 0;
	if (__SLAG__properties.ATTITUDE_REFERENCE_FRAME_X_TRUE_NORTH_Z_VERTICAL) {
		throw new Error('Modules.CoreMotion.ATTITUDE_REFERENCE_FRAME_X_TRUE_NORTH_Z_VERTICAL is read only property');
	}
	this.ATTITUDE_REFERENCE_FRAME_X_TRUE_NORTH_Z_VERTICAL = 0;
	if (__SLAG__properties.MAGNETIC_FIELD_CALIBRATION_ACCURACY_UNCALIBRATED) {
		throw new Error('Modules.CoreMotion.MAGNETIC_FIELD_CALIBRATION_ACCURACY_UNCALIBRATED is read only property');
	}
	this.MAGNETIC_FIELD_CALIBRATION_ACCURACY_UNCALIBRATED = 0;
	if (__SLAG__properties.MAGNETIC_FIELD_CALIBRATION_ACCURACY_LOW) {
		throw new Error('Modules.CoreMotion.MAGNETIC_FIELD_CALIBRATION_ACCURACY_LOW is read only property');
	}
	this.MAGNETIC_FIELD_CALIBRATION_ACCURACY_LOW = 0;
	if (__SLAG__properties.MAGNETIC_FIELD_CALIBRATION_ACCURACY_MEDIUM) {
		throw new Error('Modules.CoreMotion.MAGNETIC_FIELD_CALIBRATION_ACCURACY_MEDIUM is read only property');
	}
	this.MAGNETIC_FIELD_CALIBRATION_ACCURACY_MEDIUM = 0;
	if (__SLAG__properties.MAGNETIC_FIELD_CALIBRATION_ACCURACY_HIGH) {
		throw new Error('Modules.CoreMotion.MAGNETIC_FIELD_CALIBRATION_ACCURACY_HIGH is read only property');
	}
	this.MAGNETIC_FIELD_CALIBRATION_ACCURACY_HIGH = 0;
	if (__SLAG__properties.MOTION_ACTIVITY_CONFIDENCE_LOW) {
		throw new Error('Modules.CoreMotion.MOTION_ACTIVITY_CONFIDENCE_LOW is read only property');
	}
	this.MOTION_ACTIVITY_CONFIDENCE_LOW = 0;
	if (__SLAG__properties.MOTION_ACTIVITY_CONFIDENCE_MEDIUM) {
		throw new Error('Modules.CoreMotion.MOTION_ACTIVITY_CONFIDENCE_MEDIUM is read only property');
	}
	this.MOTION_ACTIVITY_CONFIDENCE_MEDIUM = 0;
	if (__SLAG__properties.MOTION_ACTIVITY_CONFIDENCE_HIGH) {
		throw new Error('Modules.CoreMotion.MOTION_ACTIVITY_CONFIDENCE_HIGH is read only property');
	}
	this.MOTION_ACTIVITY_CONFIDENCE_HIGH = 0;
	this.id = __SLAG__properties.id || '';
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
	return this.apiName;
};
module.exports = function (properties) {
	return new CoreMotion(properties);
};