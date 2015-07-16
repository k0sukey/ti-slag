function CoreMotionReferenceFrameArgs(properties) {
	properties = properties || {};
	this.referenceFrame = properties.referenceFrame || 0;
	return this;
}
module.exports = function (properties) {
	return new CoreMotionReferenceFrameArgs(properties);
};