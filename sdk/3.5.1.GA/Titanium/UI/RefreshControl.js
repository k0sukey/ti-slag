function RefreshControl(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.UI.RefreshControl';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.title = properties.title || undefined;

	return this;
}

RefreshControl.prototype.addEventListener = function(){};

RefreshControl.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

RefreshControl.prototype.beginRefreshing = function(){};

RefreshControl.prototype.endRefreshing = function(){};

RefreshControl.prototype.fireEvent = function(){};

RefreshControl.prototype.getApiName = function(){ return this.apiName; };

RefreshControl.prototype.getBubbleParent = function(){ return this.bubbleParent; };

RefreshControl.prototype.getTintColor = function(){ return this.tintColor; };

RefreshControl.prototype.getTitle = function(){ return this.title; };

RefreshControl.prototype.removeEventListener = function(){};

RefreshControl.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

RefreshControl.prototype.setTintColor = function(property){ this.tintColor = property; };

RefreshControl.prototype.setTitle = function(property){ this.title = property; };

module.exports = function(properties){ return new RefreshControl(properties); };