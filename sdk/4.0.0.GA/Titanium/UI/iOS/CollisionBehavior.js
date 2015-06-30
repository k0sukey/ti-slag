function CollisionBehavior(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.UI.iOS.CollisionBehavior';
	this.boundaryIdentifiers = properties.boundaryIdentifiers || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.collisionMode = properties.collisionMode || undefined;
	this.items = properties.items || undefined;
	this.referenceInsets = properties.referenceInsets || undefined;
	this.treatReferenceAsBoundary = properties.treatReferenceAsBoundary || undefined;

	return this;
}

CollisionBehavior.prototype.addBoundary = function(){};

CollisionBehavior.prototype.addEventListener = function(){};

CollisionBehavior.prototype.addItem = function(){};

CollisionBehavior.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

CollisionBehavior.prototype.fireEvent = function(){};

CollisionBehavior.prototype.getApiName = function(){ return this.apiName; };

CollisionBehavior.prototype.getBoundaryIdentifiers = function(){ return this.boundaryIdentifiers; };

CollisionBehavior.prototype.getBubbleParent = function(){ return this.bubbleParent; };

CollisionBehavior.prototype.getCollisionMode = function(){ return this.collisionMode; };

CollisionBehavior.prototype.getItems = function(){ return this.items; };

CollisionBehavior.prototype.getTreatReferenceAsBoundary = function(){ return this.treatReferenceAsBoundary; };

CollisionBehavior.prototype.removeAllBoundaries = function(){};

CollisionBehavior.prototype.removeBoundary = function(){};

CollisionBehavior.prototype.removeEventListener = function(){};

CollisionBehavior.prototype.removeItem = function(){};

CollisionBehavior.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

CollisionBehavior.prototype.setCollisionMode = function(property){ this.collisionMode = property; };

CollisionBehavior.prototype.setReferenceInsets = function(property){ this.referenceInsets = property; };

CollisionBehavior.prototype.setTreatReferenceAsBoundary = function(property){ this.treatReferenceAsBoundary = property; };

module.exports = function(properties){ return new CollisionBehavior(properties); };