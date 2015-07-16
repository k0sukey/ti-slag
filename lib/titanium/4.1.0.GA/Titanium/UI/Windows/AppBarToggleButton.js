function AppBarToggleButton(properties) {
	properties = properties || {};
	this.checked = properties.checked || true;
	this.icon = properties.icon || 0;
	this.touchEnabled = properties.touchEnabled || true;
	return this;
}
AppBarToggleButton.prototype.addEventListener = function () {
};
AppBarToggleButton.prototype.removeEventListener = function () {
};
AppBarToggleButton.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
AppBarToggleButton.prototype.fireEvent = function () {
};
AppBarToggleButton.prototype.getChecked = function () {
	return true;
};
AppBarToggleButton.prototype.setChecked = function () {
};
AppBarToggleButton.prototype.getIcon = function () {
	return 0;
};
AppBarToggleButton.prototype.setIcon = function () {
};
AppBarToggleButton.prototype.getTouchEnabled = function () {
	return true;
};
AppBarToggleButton.prototype.setTouchEnabled = function () {
};
module.exports = function (properties) {
	return new AppBarToggleButton(properties);
};