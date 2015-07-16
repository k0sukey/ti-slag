function CoreMotionActivity(properties) {
	properties = properties || {};
	this.stationary = properties.stationary || true;
	this.walking = properties.walking || true;
	this.running = properties.running || true;
	this.automotive = properties.automotive || true;
	this.unknown = properties.unknown || true;
	this.startDate = properties.startDate || new Date();
	this.confidence = properties.confidence || 0;
	return this;
}
module.exports = function (properties) {
	return new CoreMotionActivity(properties);
};