var crypto = require('crypto');
function CoreMotion(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Modules.CoreMotion.apiName is read only property');
	}
	this.apiName = 'Modules.CoreMotion';
	if (__SLAG_PROPERTIES.ERROR_NULL) {
		throw new Error('Modules.CoreMotion.ERROR_NULL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ERROR_NULL = undefined;
	} else {
		this.ERROR_NULL = 0;
	}
	if (__SLAG_PROPERTIES.ERROR_DEVICE_REQUIRES_MOVEMENT) {
		throw new Error('Modules.CoreMotion.ERROR_DEVICE_REQUIRES_MOVEMENT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ERROR_DEVICE_REQUIRES_MOVEMENT = undefined;
	} else {
		this.ERROR_DEVICE_REQUIRES_MOVEMENT = 0;
	}
	if (__SLAG_PROPERTIES.ERROR_TRUE_NORTH_NOT_AVAILABLE) {
		throw new Error('Modules.CoreMotion.ERROR_TRUE_NORTH_NOT_AVAILABLE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ERROR_TRUE_NORTH_NOT_AVAILABLE = undefined;
	} else {
		this.ERROR_TRUE_NORTH_NOT_AVAILABLE = 0;
	}
	if (__SLAG_PROPERTIES.ERROR_UNKNOWN) {
		throw new Error('Modules.CoreMotion.ERROR_UNKNOWN is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ERROR_UNKNOWN = undefined;
	} else {
		this.ERROR_UNKNOWN = 0;
	}
	if (__SLAG_PROPERTIES.ERROR_MOTION_ACTIVITY_NOT_AVAILABLE) {
		throw new Error('Modules.CoreMotion.ERROR_MOTION_ACTIVITY_NOT_AVAILABLE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ERROR_MOTION_ACTIVITY_NOT_AVAILABLE = undefined;
	} else {
		this.ERROR_MOTION_ACTIVITY_NOT_AVAILABLE = 0;
	}
	if (__SLAG_PROPERTIES.ERROR_MOTION_ACTIVITY_NOT_AUTHORIZED) {
		throw new Error('Modules.CoreMotion.ERROR_MOTION_ACTIVITY_NOT_AUTHORIZED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ERROR_MOTION_ACTIVITY_NOT_AUTHORIZED = undefined;
	} else {
		this.ERROR_MOTION_ACTIVITY_NOT_AUTHORIZED = 0;
	}
	if (__SLAG_PROPERTIES.ERROR_MOTION_ACTIVITY_NOT_ENTITLED) {
		throw new Error('Modules.CoreMotion.ERROR_MOTION_ACTIVITY_NOT_ENTITLED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ERROR_MOTION_ACTIVITY_NOT_ENTITLED = undefined;
	} else {
		this.ERROR_MOTION_ACTIVITY_NOT_ENTITLED = 0;
	}
	if (__SLAG_PROPERTIES.ERROR_INVALID_PARAMETER) {
		throw new Error('Modules.CoreMotion.ERROR_INVALID_PARAMETER is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ERROR_INVALID_PARAMETER = undefined;
	} else {
		this.ERROR_INVALID_PARAMETER = 0;
	}
	if (__SLAG_PROPERTIES.ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_Z_VERTICAL) {
		throw new Error('Modules.CoreMotion.ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_Z_VERTICAL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_Z_VERTICAL = undefined;
	} else {
		this.ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_Z_VERTICAL = 0;
	}
	if (__SLAG_PROPERTIES.ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_CORRECTED_Z_VERTICAL) {
		throw new Error('Modules.CoreMotion.ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_CORRECTED_Z_VERTICAL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_CORRECTED_Z_VERTICAL = undefined;
	} else {
		this.ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_CORRECTED_Z_VERTICAL = 0;
	}
	if (__SLAG_PROPERTIES.ATTITUDE_REFERENCE_FRAME_X_MAGNETIC_NORTH_Z_VERTICAL) {
		throw new Error('Modules.CoreMotion.ATTITUDE_REFERENCE_FRAME_X_MAGNETIC_NORTH_Z_VERTICAL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTITUDE_REFERENCE_FRAME_X_MAGNETIC_NORTH_Z_VERTICAL = undefined;
	} else {
		this.ATTITUDE_REFERENCE_FRAME_X_MAGNETIC_NORTH_Z_VERTICAL = 0;
	}
	if (__SLAG_PROPERTIES.ATTITUDE_REFERENCE_FRAME_X_TRUE_NORTH_Z_VERTICAL) {
		throw new Error('Modules.CoreMotion.ATTITUDE_REFERENCE_FRAME_X_TRUE_NORTH_Z_VERTICAL is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ATTITUDE_REFERENCE_FRAME_X_TRUE_NORTH_Z_VERTICAL = undefined;
	} else {
		this.ATTITUDE_REFERENCE_FRAME_X_TRUE_NORTH_Z_VERTICAL = 0;
	}
	if (__SLAG_PROPERTIES.MAGNETIC_FIELD_CALIBRATION_ACCURACY_UNCALIBRATED) {
		throw new Error('Modules.CoreMotion.MAGNETIC_FIELD_CALIBRATION_ACCURACY_UNCALIBRATED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MAGNETIC_FIELD_CALIBRATION_ACCURACY_UNCALIBRATED = undefined;
	} else {
		this.MAGNETIC_FIELD_CALIBRATION_ACCURACY_UNCALIBRATED = 0;
	}
	if (__SLAG_PROPERTIES.MAGNETIC_FIELD_CALIBRATION_ACCURACY_LOW) {
		throw new Error('Modules.CoreMotion.MAGNETIC_FIELD_CALIBRATION_ACCURACY_LOW is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MAGNETIC_FIELD_CALIBRATION_ACCURACY_LOW = undefined;
	} else {
		this.MAGNETIC_FIELD_CALIBRATION_ACCURACY_LOW = 0;
	}
	if (__SLAG_PROPERTIES.MAGNETIC_FIELD_CALIBRATION_ACCURACY_MEDIUM) {
		throw new Error('Modules.CoreMotion.MAGNETIC_FIELD_CALIBRATION_ACCURACY_MEDIUM is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MAGNETIC_FIELD_CALIBRATION_ACCURACY_MEDIUM = undefined;
	} else {
		this.MAGNETIC_FIELD_CALIBRATION_ACCURACY_MEDIUM = 0;
	}
	if (__SLAG_PROPERTIES.MAGNETIC_FIELD_CALIBRATION_ACCURACY_HIGH) {
		throw new Error('Modules.CoreMotion.MAGNETIC_FIELD_CALIBRATION_ACCURACY_HIGH is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MAGNETIC_FIELD_CALIBRATION_ACCURACY_HIGH = undefined;
	} else {
		this.MAGNETIC_FIELD_CALIBRATION_ACCURACY_HIGH = 0;
	}
	if (__SLAG_PROPERTIES.MOTION_ACTIVITY_CONFIDENCE_LOW) {
		throw new Error('Modules.CoreMotion.MOTION_ACTIVITY_CONFIDENCE_LOW is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MOTION_ACTIVITY_CONFIDENCE_LOW = undefined;
	} else {
		this.MOTION_ACTIVITY_CONFIDENCE_LOW = 0;
	}
	if (__SLAG_PROPERTIES.MOTION_ACTIVITY_CONFIDENCE_MEDIUM) {
		throw new Error('Modules.CoreMotion.MOTION_ACTIVITY_CONFIDENCE_MEDIUM is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MOTION_ACTIVITY_CONFIDENCE_MEDIUM = undefined;
	} else {
		this.MOTION_ACTIVITY_CONFIDENCE_MEDIUM = 0;
	}
	if (__SLAG_PROPERTIES.MOTION_ACTIVITY_CONFIDENCE_HIGH) {
		throw new Error('Modules.CoreMotion.MOTION_ACTIVITY_CONFIDENCE_HIGH is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MOTION_ACTIVITY_CONFIDENCE_HIGH = undefined;
	} else {
		this.MOTION_ACTIVITY_CONFIDENCE_HIGH = 0;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
CoreMotion.prototype.setAccelerometerUpdateInterval = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CoreMotion.prototype.startAccelerometerUpdates = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CoreMotion.prototype.stopAccelerometerUpdates = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CoreMotion.prototype.isAccelerometerActive = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
CoreMotion.prototype.isAccelerometerAvailable = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
CoreMotion.prototype.getAccelerometerData = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
CoreMotion.prototype.setGyroUpdateInterval = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CoreMotion.prototype.startGyroUpdates = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CoreMotion.prototype.stopGyroUpdates = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CoreMotion.prototype.isGyroActive = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
CoreMotion.prototype.isGyroAvailable = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
CoreMotion.prototype.getGyroData = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
CoreMotion.prototype.setMagnetometerUpdateInterval = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CoreMotion.prototype.startMagnetometerUpdates = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CoreMotion.prototype.stopMagnetometerUpdates = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CoreMotion.prototype.isMagnetometerActive = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
CoreMotion.prototype.isMagnetometerAvailable = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
CoreMotion.prototype.getMagnetometerData = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
CoreMotion.prototype.setShowsDeviceMovementDisplay = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CoreMotion.prototype.setDeviceMotionUpdateInterval = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CoreMotion.prototype.startDeviceMotionUpdatesUsingReferenceFrame = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CoreMotion.prototype.startDeviceMotionUpdates = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CoreMotion.prototype.stopDeviceMotionUpdates = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CoreMotion.prototype.getAttitudeReferenceFrame = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return 0;
};
CoreMotion.prototype.availableAttitudeReferenceFrames = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return 0;
};
CoreMotion.prototype.isDeviceMotionActive = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
CoreMotion.prototype.isDeviceMotionAvailable = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
CoreMotion.prototype.getDeviceMotion = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
CoreMotion.prototype.isActivityAvailable = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
CoreMotion.prototype.startActivityUpdates = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CoreMotion.prototype.stopActivityUpdates = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CoreMotion.prototype.queryActivity = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CoreMotion.prototype.isStepCountingAvailable = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
CoreMotion.prototype.startStepCountingUpdates = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CoreMotion.prototype.stopStepCountingUpdates = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CoreMotion.prototype.queryStepCount = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CoreMotion.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
module.exports = function (properties) {
	return new CoreMotion(properties);
};