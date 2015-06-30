function ThreeDMatrix(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.UI.iOS.3DMatrix';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.m11 = properties.m11 || undefined;
	this.m12 = properties.m12 || undefined;
	this.m13 = properties.m13 || undefined;
	this.m14 = properties.m14 || undefined;
	this.m21 = properties.m21 || undefined;
	this.m22 = properties.m22 || undefined;
	this.m23 = properties.m23 || undefined;
	this.m24 = properties.m24 || undefined;
	this.m31 = properties.m31 || undefined;
	this.m32 = properties.m32 || undefined;
	this.m33 = properties.m33 || undefined;
	this.m34 = properties.m34 || undefined;
	this.m41 = properties.m41 || undefined;
	this.m42 = properties.m42 || undefined;
	this.m43 = properties.m43 || undefined;
	this.m44 = properties.m44 || undefined;

	return this;
}

ThreeDMatrix.prototype.addEventListener = function(){};

ThreeDMatrix.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

ThreeDMatrix.prototype.fireEvent = function(){};

ThreeDMatrix.prototype.getApiName = function(){ return this.apiName; };

ThreeDMatrix.prototype.getBubbleParent = function(){ return this.bubbleParent; };

ThreeDMatrix.prototype.getM11 = function(){ return this.m11; };

ThreeDMatrix.prototype.getM12 = function(){ return this.m12; };

ThreeDMatrix.prototype.getM13 = function(){ return this.m13; };

ThreeDMatrix.prototype.getM14 = function(){ return this.m14; };

ThreeDMatrix.prototype.getM21 = function(){ return this.m21; };

ThreeDMatrix.prototype.getM22 = function(){ return this.m22; };

ThreeDMatrix.prototype.getM23 = function(){ return this.m23; };

ThreeDMatrix.prototype.getM24 = function(){ return this.m24; };

ThreeDMatrix.prototype.getM31 = function(){ return this.m31; };

ThreeDMatrix.prototype.getM32 = function(){ return this.m32; };

ThreeDMatrix.prototype.getM33 = function(){ return this.m33; };

ThreeDMatrix.prototype.getM34 = function(){ return this.m34; };

ThreeDMatrix.prototype.getM41 = function(){ return this.m41; };

ThreeDMatrix.prototype.getM42 = function(){ return this.m42; };

ThreeDMatrix.prototype.getM43 = function(){ return this.m43; };

ThreeDMatrix.prototype.getM44 = function(){ return this.m44; };

ThreeDMatrix.prototype.invert = function(){ return {}; };

ThreeDMatrix.prototype.multiply = function(){ return {}; };

ThreeDMatrix.prototype.removeEventListener = function(){};

ThreeDMatrix.prototype.rotate = function(){ return {}; };

ThreeDMatrix.prototype.scale = function(){ return {}; };

ThreeDMatrix.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

ThreeDMatrix.prototype.setM11 = function(property){ this.m11 = property; };

ThreeDMatrix.prototype.setM12 = function(property){ this.m12 = property; };

ThreeDMatrix.prototype.setM13 = function(property){ this.m13 = property; };

ThreeDMatrix.prototype.setM14 = function(property){ this.m14 = property; };

ThreeDMatrix.prototype.setM21 = function(property){ this.m21 = property; };

ThreeDMatrix.prototype.setM22 = function(property){ this.m22 = property; };

ThreeDMatrix.prototype.setM23 = function(property){ this.m23 = property; };

ThreeDMatrix.prototype.setM24 = function(property){ this.m24 = property; };

ThreeDMatrix.prototype.setM31 = function(property){ this.m31 = property; };

ThreeDMatrix.prototype.setM32 = function(property){ this.m32 = property; };

ThreeDMatrix.prototype.setM33 = function(property){ this.m33 = property; };

ThreeDMatrix.prototype.setM34 = function(property){ this.m34 = property; };

ThreeDMatrix.prototype.setM41 = function(property){ this.m41 = property; };

ThreeDMatrix.prototype.setM42 = function(property){ this.m42 = property; };

ThreeDMatrix.prototype.setM43 = function(property){ this.m43 = property; };

ThreeDMatrix.prototype.setM44 = function(property){ this.m44 = property; };

ThreeDMatrix.prototype.translate = function(){ return {}; };

module.exports = function(properties){ return new ThreeDMatrix(properties); };