function TableViewRow(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.TableViewRow';
	this.backgroundColor = properties.backgroundColor || undefined;
	this.backgroundDisabledColor = properties.backgroundDisabledColor || undefined;
	this.backgroundDisabledImage = properties.backgroundDisabledImage || undefined;
	this.backgroundFocusedColor = properties.backgroundFocusedColor || undefined;
	this.backgroundFocusedImage = properties.backgroundFocusedImage || undefined;
	this.backgroundGradient = properties.backgroundGradient || undefined;
	this.backgroundImage = properties.backgroundImage || undefined;
	this.backgroundLeftCap = properties.backgroundLeftCap || undefined;
	this.backgroundRepeat = properties.backgroundRepeat || undefined;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || undefined;
	this.backgroundSelectedImage = properties.backgroundSelectedImage || undefined;
	this.backgroundTopCap = properties.backgroundTopCap || undefined;
	this.borderColor = properties.borderColor || undefined;
	this.borderRadius = properties.borderRadius || undefined;
	this.borderWidth = properties.borderWidth || undefined;
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.className = properties.className || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.color = properties.color || undefined;
	this.editable = properties.editable || undefined;
	this.focusable = properties.focusable || undefined;
	this.font = properties.font || undefined;
	this.hasCheck = properties.hasCheck || undefined;
	this.hasChild = properties.hasChild || undefined;
	this.hasDetail = properties.hasDetail || undefined;
	this.height = properties.height || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.indentionLevel = properties.indentionLevel || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.leftImage = properties.leftImage || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.moveable = properties.moveable || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.right = properties.right || undefined;
	this.rightImage = properties.rightImage || undefined;
	this.selectedBackgroundColor = properties.selectedBackgroundColor || undefined;
	this.selectedBackgroundImage = properties.selectedBackgroundImage || undefined;
	this.selectedColor = properties.selectedColor || undefined;
	this.selectionStyle = properties.selectionStyle || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.title = properties.title || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;
	return this;
}
TableViewRow.prototype.add = function () {
};
TableViewRow.prototype.addEventListener = function () {
};
TableViewRow.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
TableViewRow.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
TableViewRow.prototype.finishLayout = function () {
	throw new Error('Ti.UI.TableViewRow.finishLayout was deprecated, since 3.0.0');
};
TableViewRow.prototype.fireEvent = function () {
};
TableViewRow.prototype.getAccessibilityHidden = function () {
	return true;
};
TableViewRow.prototype.getAccessibilityHint = function () {
	return '';
};
TableViewRow.prototype.getAccessibilityLabel = function () {
	return '';
};
TableViewRow.prototype.getAccessibilityValue = function () {
	return '';
};
TableViewRow.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
TableViewRow.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
TableViewRow.prototype.getApiName = function () {
	return '';
};
TableViewRow.prototype.getBackgroundColor = function () {
	return '';
};
TableViewRow.prototype.getBackgroundDisabledColor = function () {
	return '';
};
TableViewRow.prototype.getBackgroundDisabledImage = function () {
	return '';
};
TableViewRow.prototype.getBackgroundFocusedColor = function () {
	return '';
};
TableViewRow.prototype.getBackgroundFocusedImage = function () {
	return '';
};
TableViewRow.prototype.getBackgroundGradient = function () {
	return {};
};
TableViewRow.prototype.getBackgroundImage = function () {
	return '';
};
TableViewRow.prototype.getBackgroundLeftCap = function () {
	return 0;
};
TableViewRow.prototype.getBackgroundRepeat = function () {
	return true;
};
TableViewRow.prototype.getBackgroundSelectedColor = function () {
	return '';
};
TableViewRow.prototype.getBackgroundSelectedImage = function () {
	return '';
};
TableViewRow.prototype.getBackgroundTopCap = function () {
	return 0;
};
TableViewRow.prototype.getBorderColor = function () {
	return '';
};
TableViewRow.prototype.getBorderRadius = function () {
	return 0;
};
TableViewRow.prototype.getBorderWidth = function () {
	return 0;
};
TableViewRow.prototype.getBottom = function () {
	return 0;
};
TableViewRow.prototype.getBubbleParent = function () {
	return true;
};
TableViewRow.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
TableViewRow.prototype.getChildren = function () {
	return [];
};
TableViewRow.prototype.getClassName = function () {
	return '';
};
TableViewRow.prototype.getClipMode = function () {
	return 0;
};
TableViewRow.prototype.getColor = function () {
	return '';
};
TableViewRow.prototype.getEditable = function () {
	return true;
};
TableViewRow.prototype.getFocusable = function () {
	return true;
};
TableViewRow.prototype.getHasCheck = function () {
	return true;
};
TableViewRow.prototype.getHasChild = function () {
	return true;
};
TableViewRow.prototype.getHasDetail = function () {
	return true;
};
TableViewRow.prototype.getHeight = function () {
	return 0;
};
TableViewRow.prototype.getHorizontalWrap = function () {
	return true;
};
TableViewRow.prototype.getIndentionLevel = function () {
	return 0;
};
TableViewRow.prototype.getKeepScreenOn = function () {
	return true;
};
TableViewRow.prototype.getLayout = function () {
	return '';
};
TableViewRow.prototype.getLeft = function () {
	return 0;
};
TableViewRow.prototype.getLeftImage = function () {
	return '';
};
TableViewRow.prototype.getLifecycleContainer = function () {
	return {};
};
TableViewRow.prototype.getMoveable = function () {
	return true;
};
TableViewRow.prototype.getOpacity = function () {
	return 0;
};
TableViewRow.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
TableViewRow.prototype.getPullBackgroundColor = function () {
	return '';
};
TableViewRow.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
TableViewRow.prototype.getRight = function () {
	return 0;
};
TableViewRow.prototype.getRightImage = function () {
	return '';
};
TableViewRow.prototype.getSelectedBackgroundColor = function () {
	return '';
};
TableViewRow.prototype.getSelectedBackgroundImage = function () {
	return '';
};
TableViewRow.prototype.getSelectedColor = function () {
	return '';
};
TableViewRow.prototype.getSelectionStyle = function () {
	return 0;
};
TableViewRow.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
TableViewRow.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
TableViewRow.prototype.getTintColor = function () {
	return '';
};
TableViewRow.prototype.getTitle = function () {
	return '';
};
TableViewRow.prototype.getTop = function () {
	return 0;
};
TableViewRow.prototype.getTouchEnabled = function () {
	return true;
};
TableViewRow.prototype.getTransform = function () {
	return {};
};
TableViewRow.prototype.getViewShadowColor = function () {
	return '';
};
TableViewRow.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
TableViewRow.prototype.getViewShadowRadius = function () {
	return 0;
};
TableViewRow.prototype.getVisible = function () {
	return true;
};
TableViewRow.prototype.getWidth = function () {
	return 0;
};
TableViewRow.prototype.getZIndex = function () {
	return 0;
};
TableViewRow.prototype.hide = function () {
};
TableViewRow.prototype.remove = function () {
};
TableViewRow.prototype.removeAllChildren = function () {
};
TableViewRow.prototype.removeEventListener = function () {
};
TableViewRow.prototype.setAccessibilityHidden = function () {
};
TableViewRow.prototype.setAccessibilityHint = function () {
};
TableViewRow.prototype.setAccessibilityLabel = function () {
};
TableViewRow.prototype.setAccessibilityValue = function () {
};
TableViewRow.prototype.setAnchorPoint = function () {
};
TableViewRow.prototype.setBackgroundColor = function () {
};
TableViewRow.prototype.setBackgroundDisabledColor = function () {
};
TableViewRow.prototype.setBackgroundDisabledImage = function () {
};
TableViewRow.prototype.setBackgroundFocusedColor = function () {
};
TableViewRow.prototype.setBackgroundFocusedImage = function () {
};
TableViewRow.prototype.setBackgroundGradient = function () {
};
TableViewRow.prototype.setBackgroundImage = function () {
};
TableViewRow.prototype.setBackgroundLeftCap = function () {
};
TableViewRow.prototype.setBackgroundRepeat = function () {
};
TableViewRow.prototype.setBackgroundSelectedColor = function () {
};
TableViewRow.prototype.setBackgroundSelectedImage = function () {
};
TableViewRow.prototype.setBackgroundTopCap = function () {
};
TableViewRow.prototype.setBorderColor = function () {
};
TableViewRow.prototype.setBorderRadius = function () {
};
TableViewRow.prototype.setBorderWidth = function () {
};
TableViewRow.prototype.setBottom = function () {
};
TableViewRow.prototype.setBubbleParent = function () {
};
TableViewRow.prototype.setCenter = function () {
};
TableViewRow.prototype.setClassName = function () {
};
TableViewRow.prototype.setClipMode = function () {
};
TableViewRow.prototype.setColor = function () {
};
TableViewRow.prototype.setEditable = function () {
};
TableViewRow.prototype.setFocusable = function () {
};
TableViewRow.prototype.setFont = function () {
};
TableViewRow.prototype.setHasCheck = function () {
};
TableViewRow.prototype.setHasChild = function () {
};
TableViewRow.prototype.setHasDetail = function () {
};
TableViewRow.prototype.setHeight = function () {
};
TableViewRow.prototype.setHorizontalWrap = function () {
};
TableViewRow.prototype.setIndentionLevel = function () {
};
TableViewRow.prototype.setKeepScreenOn = function () {
};
TableViewRow.prototype.setLayout = function () {
};
TableViewRow.prototype.setLeft = function () {
};
TableViewRow.prototype.setLeftImage = function () {
};
TableViewRow.prototype.setLifecycleContainer = function () {
};
TableViewRow.prototype.setMoveable = function () {
};
TableViewRow.prototype.setOpacity = function () {
};
TableViewRow.prototype.setPullBackgroundColor = function () {
};
TableViewRow.prototype.setRight = function () {
};
TableViewRow.prototype.setRightImage = function () {
};
TableViewRow.prototype.setSelectedBackgroundColor = function () {
};
TableViewRow.prototype.setSelectedBackgroundImage = function () {
};
TableViewRow.prototype.setSelectedColor = function () {
};
TableViewRow.prototype.setSelectionStyle = function () {
};
TableViewRow.prototype.setSoftKeyboardOnFocus = function () {
};
TableViewRow.prototype.setTintColor = function () {
};
TableViewRow.prototype.setTitle = function () {
};
TableViewRow.prototype.setTop = function () {
};
TableViewRow.prototype.setTouchEnabled = function () {
};
TableViewRow.prototype.setTransform = function () {
};
TableViewRow.prototype.setViewShadowColor = function () {
};
TableViewRow.prototype.setViewShadowOffset = function () {
};
TableViewRow.prototype.setViewShadowRadius = function () {
};
TableViewRow.prototype.setVisible = function () {
};
TableViewRow.prototype.setWidth = function () {
};
TableViewRow.prototype.setZIndex = function () {
};
TableViewRow.prototype.show = function () {
};
TableViewRow.prototype.startLayout = function () {
	throw new Error('Ti.UI.TableViewRow.startLayout was deprecated, since 3.0.0');
};
TableViewRow.prototype.toImage = function () {
	return {};
};
TableViewRow.prototype.updateLayout = function () {
	throw new Error('Ti.UI.TableViewRow.updateLayout was deprecated, since 3.0.0');
};
module.exports = function (properties) {
	return new TableViewRow(properties);
};