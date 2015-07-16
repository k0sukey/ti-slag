function Route(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Map.Route';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.points = properties.points || {
		x: 0,
		y: 0
	};
	this.color = properties.color || '';
	this.width = properties.width || 0;
	this.level = properties.level || 0;
	return this;
}
Route.prototype.addEventListener = function () {
};
Route.prototype.removeEventListener = function () {
};
Route.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Route.prototype.fireEvent = function () {
};
Route.prototype.getBubbleParent = function () {
	return true;
};
Route.prototype.setBubbleParent = function () {
};
Route.prototype.getApiName = function () {
	return '';
};
Route.prototype.getLifecycleContainer = function () {
	return {};
};
Route.prototype.setLifecycleContainer = function () {
};
Route.prototype.getPoints = function () {
	return {
		x: 0,
		y: 0
	};
};
Route.prototype.setPoints = function () {
};
Route.prototype.getColor = function () {
	return '';
};
Route.prototype.setColor = function () {
};
Route.prototype.getWidth = function () {
	return 0;
};
Route.prototype.setWidth = function () {
};
Route.prototype.getLevel = function () {
	return 0;
};
Route.prototype.setLevel = function () {
};
module.exports = function (properties) {
	return new Route(properties);
};