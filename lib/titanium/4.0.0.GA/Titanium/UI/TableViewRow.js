function TableViewRow(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || true;
	this.accessibilityHint = properties.accessibilityHint || '';
	this.accessibilityLabel = properties.accessibilityLabel || '';
	this.accessibilityValue = properties.accessibilityValue || '';
	this.anchorPoint = properties.anchorPoint || {
		x: 0,
		y: 0
	};
	this.animatedCenter = properties.animatedCenter || {
		x: 0,
		y: 0
	};
	this.apiName = 'Ti.UI.TableViewRow';
	this.backgroundColor = properties.backgroundColor || '';
	this.backgroundDisabledColor = properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = properties.backgroundFocusedImage || '';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundLeftCap = properties.backgroundLeftCap || 0;
	this.backgroundRepeat = properties.backgroundRepeat || true;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = properties.backgroundSelectedImage || '';
	this.backgroundTopCap = properties.backgroundTopCap || 0;
	this.borderColor = properties.borderColor || '';
	this.borderRadius = properties.borderRadius || 0;
	this.borderWidth = properties.borderWidth || 0;
	this.bottom = properties.bottom || 0;
	this.bubbleParent = properties.bubbleParent || true;
	this.center = properties.center || {
		x: 0,
		y: 0
	};
	this.children = properties.children || [];
	this.className = properties.className || '';
	this.clipMode = properties.clipMode || 0;
	this.color = properties.color || '';
	this.editable = properties.editable || true;
	this.focusable = properties.focusable || true;
	this.font = properties.font || {};
	this.hasCheck = properties.hasCheck || true;
	this.hasChild = properties.hasChild || true;
	this.hasDetail = properties.hasDetail || true;
	this.height = properties.height || 0;
	this.horizontalWrap = properties.horizontalWrap || true;
	this.indentionLevel = properties.indentionLevel || 0;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.leftImage = properties.leftImage || '';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.moveable = properties.moveable || true;
	this.opacity = properties.opacity || 0;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = properties.right || 0;
	this.rightImage = properties.rightImage || '';
	this.selectedBackgroundColor = properties.selectedBackgroundColor || '';
	this.selectedBackgroundImage = properties.selectedBackgroundImage || '';
	this.selectedColor = properties.selectedColor || '';
	this.selectionStyle = properties.selectionStyle || 0;
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.tintColor = properties.tintColor || '';
	this.title = properties.title || '';
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.transform = properties.transform || {};
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.zIndex = properties.zIndex || 0;
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
TableViewRow.prototype.getFont = function () {
	return {};
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