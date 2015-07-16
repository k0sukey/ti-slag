function TableViewRow(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.TableViewRow';
	this.lifecycleContainer = properties.lifecycleContainer || {};
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
	this.backgroundDisabledColor = properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = properties.backgroundFocusedImage || '';
	this.backgroundGradient = properties.backgroundGradient || {};
	this.backgroundImage = properties.backgroundImage || '';
	this.backgroundRepeat = properties.backgroundRepeat || true;
	this.backgroundLeftCap = properties.backgroundLeftCap || 0;
	this.backgroundSelectedColor = properties.backgroundSelectedColor || '';
	this.backgroundSelectedImage = properties.backgroundSelectedImage || '';
	this.backgroundTopCap = properties.backgroundTopCap || 0;
	this.clipMode = properties.clipMode || 0;
	this.focusable = properties.focusable || true;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = properties.pullBackgroundColor || '';
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || 0;
	this.transform = properties.transform || {};
	this.viewShadowRadius = properties.viewShadowRadius || 0;
	this.viewShadowColor = properties.viewShadowColor || '';
	this.viewShadowOffset = properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.horizontalWrap = properties.horizontalWrap || true;
	this.zIndex = properties.zIndex || 0;
	this.keepScreenOn = properties.keepScreenOn || true;
	this.backgroundColor = properties.backgroundColor || '';
	this.borderColor = properties.borderColor || '';
	this.borderRadius = properties.borderRadius || 0;
	this.borderWidth = properties.borderWidth || 0;
	this.bottom = properties.bottom || 0;
	this.center = properties.center || {
		x: 0,
		y: 0
	};
	this.children = properties.children || [];
	this.height = properties.height || 0;
	this.layout = properties.layout || '';
	this.left = properties.left || 0;
	this.opacity = properties.opacity || 0;
	this.rect = properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = properties.right || 0;
	this.size = properties.size || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.tintColor = properties.tintColor || '';
	this.top = properties.top || 0;
	this.touchEnabled = properties.touchEnabled || true;
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.className = properties.className || '';
	this.editable = properties.editable || true;
	this.hasDetail = properties.hasDetail || true;
	this.indentionLevel = properties.indentionLevel || 0;
	this.leftImage = properties.leftImage || '';
	this.moveable = properties.moveable || true;
	this.rightImage = properties.rightImage || '';
	this.selectedBackgroundColor = properties.selectedBackgroundColor || '';
	this.selectedBackgroundImage = properties.selectedBackgroundImage || '';
	this.selectedColor = properties.selectedColor || '';
	this.selectionStyle = properties.selectionStyle || 0;
	this.color = properties.color || '';
	this.font = properties.font || {};
	this.hasCheck = properties.hasCheck || true;
	this.hasChild = properties.hasChild || true;
	this.title = properties.title || '';
	return this;
}
TableViewRow.prototype.addEventListener = function () {
};
TableViewRow.prototype.removeEventListener = function () {
};
TableViewRow.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
TableViewRow.prototype.fireEvent = function () {
};
TableViewRow.prototype.finishLayout = function () {
	throw new Error('Ti.UI.TableViewRow.finishLayout was deprecated, since 3.0.0');
};
TableViewRow.prototype.removeAllChildren = function () {
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
TableViewRow.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
TableViewRow.prototype.add = function () {
};
TableViewRow.prototype.hide = function () {
};
TableViewRow.prototype.remove = function () {
};
TableViewRow.prototype.show = function () {
};
TableViewRow.prototype.getBubbleParent = function () {
	return true;
};
TableViewRow.prototype.setBubbleParent = function () {
};
TableViewRow.prototype.getApiName = function () {
	return '';
};
TableViewRow.prototype.getLifecycleContainer = function () {
	return {};
};
TableViewRow.prototype.setLifecycleContainer = function () {
};
TableViewRow.prototype.getAccessibilityHidden = function () {
	return true;
};
TableViewRow.prototype.setAccessibilityHidden = function () {
};
TableViewRow.prototype.getAccessibilityHint = function () {
	return '';
};
TableViewRow.prototype.setAccessibilityHint = function () {
};
TableViewRow.prototype.getAccessibilityLabel = function () {
	return '';
};
TableViewRow.prototype.setAccessibilityLabel = function () {
};
TableViewRow.prototype.getAccessibilityValue = function () {
	return '';
};
TableViewRow.prototype.setAccessibilityValue = function () {
};
TableViewRow.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
TableViewRow.prototype.setAnchorPoint = function () {
};
TableViewRow.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
TableViewRow.prototype.getBackgroundDisabledColor = function () {
	return '';
};
TableViewRow.prototype.setBackgroundDisabledColor = function () {
};
TableViewRow.prototype.getBackgroundDisabledImage = function () {
	return '';
};
TableViewRow.prototype.setBackgroundDisabledImage = function () {
};
TableViewRow.prototype.getBackgroundFocusedColor = function () {
	return '';
};
TableViewRow.prototype.setBackgroundFocusedColor = function () {
};
TableViewRow.prototype.getBackgroundFocusedImage = function () {
	return '';
};
TableViewRow.prototype.setBackgroundFocusedImage = function () {
};
TableViewRow.prototype.getBackgroundGradient = function () {
	return {};
};
TableViewRow.prototype.setBackgroundGradient = function () {
};
TableViewRow.prototype.getBackgroundImage = function () {
	return '';
};
TableViewRow.prototype.setBackgroundImage = function () {
};
TableViewRow.prototype.getBackgroundRepeat = function () {
	return true;
};
TableViewRow.prototype.setBackgroundRepeat = function () {
};
TableViewRow.prototype.getBackgroundLeftCap = function () {
	return 0;
};
TableViewRow.prototype.setBackgroundLeftCap = function () {
};
TableViewRow.prototype.getBackgroundSelectedColor = function () {
	return '';
};
TableViewRow.prototype.setBackgroundSelectedColor = function () {
};
TableViewRow.prototype.getBackgroundSelectedImage = function () {
	return '';
};
TableViewRow.prototype.setBackgroundSelectedImage = function () {
};
TableViewRow.prototype.getBackgroundTopCap = function () {
	return 0;
};
TableViewRow.prototype.setBackgroundTopCap = function () {
};
TableViewRow.prototype.getClipMode = function () {
	return 0;
};
TableViewRow.prototype.setClipMode = function () {
};
TableViewRow.prototype.getFocusable = function () {
	return true;
};
TableViewRow.prototype.setFocusable = function () {
};
TableViewRow.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
TableViewRow.prototype.setOverrideCurrentAnimation = function () {
};
TableViewRow.prototype.getPullBackgroundColor = function () {
	return '';
};
TableViewRow.prototype.setPullBackgroundColor = function () {
};
TableViewRow.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
TableViewRow.prototype.setSoftKeyboardOnFocus = function () {
};
TableViewRow.prototype.getTransform = function () {
	return {};
};
TableViewRow.prototype.setTransform = function () {
};
TableViewRow.prototype.getViewShadowRadius = function () {
	return 0;
};
TableViewRow.prototype.setViewShadowRadius = function () {
};
TableViewRow.prototype.getViewShadowColor = function () {
	return '';
};
TableViewRow.prototype.setViewShadowColor = function () {
};
TableViewRow.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
TableViewRow.prototype.setViewShadowOffset = function () {
};
TableViewRow.prototype.getHorizontalWrap = function () {
	return true;
};
TableViewRow.prototype.setHorizontalWrap = function () {
};
TableViewRow.prototype.getZIndex = function () {
	return 0;
};
TableViewRow.prototype.setZIndex = function () {
};
TableViewRow.prototype.getKeepScreenOn = function () {
	return true;
};
TableViewRow.prototype.setKeepScreenOn = function () {
};
TableViewRow.prototype.getBackgroundColor = function () {
	return '';
};
TableViewRow.prototype.setBackgroundColor = function () {
};
TableViewRow.prototype.getBorderColor = function () {
	return '';
};
TableViewRow.prototype.setBorderColor = function () {
};
TableViewRow.prototype.getBorderRadius = function () {
	return 0;
};
TableViewRow.prototype.setBorderRadius = function () {
};
TableViewRow.prototype.getBorderWidth = function () {
	return 0;
};
TableViewRow.prototype.setBorderWidth = function () {
};
TableViewRow.prototype.getBottom = function () {
	return '';
};
TableViewRow.prototype.setBottom = function () {
};
TableViewRow.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
TableViewRow.prototype.setCenter = function () {
};
TableViewRow.prototype.getChildren = function () {
	return [];
};
TableViewRow.prototype.getHeight = function () {
	return '';
};
TableViewRow.prototype.setHeight = function () {
};
TableViewRow.prototype.getLayout = function () {
	return '';
};
TableViewRow.prototype.setLayout = function () {
};
TableViewRow.prototype.getLeft = function () {
	return '';
};
TableViewRow.prototype.setLeft = function () {
};
TableViewRow.prototype.getOpacity = function () {
	return 0;
};
TableViewRow.prototype.setOpacity = function () {
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
	return '';
};
TableViewRow.prototype.setRight = function () {
};
TableViewRow.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
TableViewRow.prototype.getTintColor = function () {
	return '';
};
TableViewRow.prototype.setTintColor = function () {
};
TableViewRow.prototype.getTop = function () {
	return '';
};
TableViewRow.prototype.setTop = function () {
};
TableViewRow.prototype.getTouchEnabled = function () {
	return true;
};
TableViewRow.prototype.setTouchEnabled = function () {
};
TableViewRow.prototype.getVisible = function () {
	return true;
};
TableViewRow.prototype.setVisible = function () {
};
TableViewRow.prototype.getWidth = function () {
	return '';
};
TableViewRow.prototype.setWidth = function () {
};
TableViewRow.prototype.getClassName = function () {
	return '';
};
TableViewRow.prototype.setClassName = function () {
};
TableViewRow.prototype.getEditable = function () {
	return true;
};
TableViewRow.prototype.setEditable = function () {
};
TableViewRow.prototype.getHasDetail = function () {
	return true;
};
TableViewRow.prototype.setHasDetail = function () {
};
TableViewRow.prototype.getIndentionLevel = function () {
	return 0;
};
TableViewRow.prototype.setIndentionLevel = function () {
};
TableViewRow.prototype.getLeftImage = function () {
	return '';
};
TableViewRow.prototype.setLeftImage = function () {
};
TableViewRow.prototype.getMoveable = function () {
	return true;
};
TableViewRow.prototype.setMoveable = function () {
};
TableViewRow.prototype.getRightImage = function () {
	return '';
};
TableViewRow.prototype.setRightImage = function () {
};
TableViewRow.prototype.getSelectedBackgroundColor = function () {
	return '';
};
TableViewRow.prototype.setSelectedBackgroundColor = function () {
};
TableViewRow.prototype.getSelectedBackgroundImage = function () {
	return '';
};
TableViewRow.prototype.setSelectedBackgroundImage = function () {
};
TableViewRow.prototype.getSelectedColor = function () {
	return '';
};
TableViewRow.prototype.setSelectedColor = function () {
};
TableViewRow.prototype.getSelectionStyle = function () {
	return 0;
};
TableViewRow.prototype.setSelectionStyle = function () {
};
TableViewRow.prototype.getColor = function () {
	return '';
};
TableViewRow.prototype.setColor = function () {
};
TableViewRow.prototype.getFont = function () {
	return {};
};
TableViewRow.prototype.setFont = function () {
};
TableViewRow.prototype.getHasCheck = function () {
	return true;
};
TableViewRow.prototype.setHasCheck = function () {
};
TableViewRow.prototype.getHasChild = function () {
	return true;
};
TableViewRow.prototype.setHasChild = function () {
};
TableViewRow.prototype.getTitle = function () {
	return '';
};
TableViewRow.prototype.setTitle = function () {
};
module.exports = function (properties) {
	return new TableViewRow(properties);
};