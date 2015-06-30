function TwoDMatrix(properties) {
	properties = properties || {};

	this.a = properties.a || undefined;
	this.apiName = 'Titanium.UI.2DMatrix';
	this.b = properties.b || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.c = properties.c || undefined;
	this.d = properties.d || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.tx = properties.tx || undefined;
	this.ty = properties.ty || undefined;

	return this;
}

TwoDMatrix.prototype.addEventListener = function(){};

TwoDMatrix.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

TwoDMatrix.prototype.fireEvent = function(){};

TwoDMatrix.prototype.getA = function(){ return this.a; };

TwoDMatrix.prototype.getApiName = function(){ return this.apiName; };

TwoDMatrix.prototype.getB = function(){ return this.b; };

TwoDMatrix.prototype.getBubbleParent = function(){ return this.bubbleParent; };

TwoDMatrix.prototype.getC = function(){ return this.c; };

TwoDMatrix.prototype.getD = function(){ return this.d; };

TwoDMatrix.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

TwoDMatrix.prototype.getTx = function(){ return this.tx; };

TwoDMatrix.prototype.getTy = function(){ return this.ty; };

TwoDMatrix.prototype.invert = function(){ return {}; };

TwoDMatrix.prototype.multiply = function(){ return {}; };

TwoDMatrix.prototype.removeEventListener = function(){};

TwoDMatrix.prototype.rotate = function(){ return {}; };

TwoDMatrix.prototype.scale = function(){ return {}; };

TwoDMatrix.prototype.setA = function(property){ this.a = property; };

TwoDMatrix.prototype.setB = function(property){ this.b = property; };

TwoDMatrix.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

TwoDMatrix.prototype.setC = function(property){ this.c = property; };

TwoDMatrix.prototype.setD = function(property){ this.d = property; };

TwoDMatrix.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

TwoDMatrix.prototype.setTx = function(property){ this.tx = property; };

TwoDMatrix.prototype.setTy = function(property){ this.ty = property; };

TwoDMatrix.prototype.translate = function(){ return {}; };

module.exports = function(properties){ return new TwoDMatrix(properties); };