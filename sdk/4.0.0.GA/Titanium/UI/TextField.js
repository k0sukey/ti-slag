function TextField(properties) {
	properties = properties || {};

	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Titanium.UI.TextField';
	this.appearance = properties.appearance || undefined;
	this.attributedHintText = properties.attributedHintText || undefined;
	this.attributedString = properties.attributedString || undefined;
	this.autoLink = properties.autoLink || undefined;
	this.autocapitalization = properties.autocapitalization || undefined;
	this.autocorrect = properties.autocorrect || undefined;
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
	this.borderStyle = properties.borderStyle || undefined;
	this.borderWidth = properties.borderWidth || undefined;
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.clearButtonMode = properties.clearButtonMode || undefined;
	this.clearOnEdit = properties.clearOnEdit || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.color = properties.color || undefined;
	this.editable = properties.editable || undefined;
	this.ellipsize = properties.ellipsize || undefined;
	this.enableReturnKey = properties.enableReturnKey || undefined;
	this.focusable = properties.focusable || undefined;
	this.font = properties.font || undefined;
	this.height = properties.height || undefined;
	this.hintText = properties.hintText || undefined;
	this.hintTextColor = properties.hintTextColor || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.keyboardToolbar = properties.keyboardToolbar || undefined;
	this.keyboardToolbarColor = properties.keyboardToolbarColor || undefined;
	this.keyboardToolbarHeight = properties.keyboardToolbarHeight || undefined;
	this.keyboardType = properties.keyboardType || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.leftButton = properties.leftButton || undefined;
	this.leftButtonMode = properties.leftButtonMode || undefined;
	this.leftButtonPadding = properties.leftButtonPadding || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.maxLength = properties.maxLength || undefined;
	this.minimumFontSize = properties.minimumFontSize || undefined;
	this.opacity = properties.opacity || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.paddingLeft = properties.paddingLeft || undefined;
	this.paddingRight = properties.paddingRight || undefined;
	this.passwordMask = properties.passwordMask || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.returnKeyType = properties.returnKeyType || undefined;
	this.right = properties.right || undefined;
	this.rightButton = properties.rightButton || undefined;
	this.rightButtonMode = properties.rightButtonMode || undefined;
	this.rightButtonPadding = properties.rightButtonPadding || undefined;
	this.selection = properties.selection || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.suppressReturn = properties.suppressReturn || undefined;
	this.textAlign = properties.textAlign || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.top = properties.top || undefined;
	this.touchEnabled = properties.touchEnabled || undefined;
	this.transform = properties.transform || undefined;
	this.value = properties.value || undefined;
	this.verticalAlign = properties.verticalAlign || undefined;
	this.viewShadowColor = properties.viewShadowColor || undefined;
	this.viewShadowOffset = properties.viewShadowOffset || undefined;
	this.viewShadowRadius = properties.viewShadowRadius || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;

	return this;
}

TextField.prototype.add = function(){};

TextField.prototype.addEventListener = function(){};

TextField.prototype.animate = function(){};

TextField.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

TextField.prototype.blur = function(){};

TextField.prototype.convertPointToView = function(){ return { x: 0, y: 0 }; };

TextField.prototype.finishLayout = function(){};

TextField.prototype.fireEvent = function(){};

TextField.prototype.focus = function(){};

TextField.prototype.getAccessibilityHidden = function(){ return this.accessibilityHidden; };

TextField.prototype.getAccessibilityHint = function(){ return this.accessibilityHint; };

TextField.prototype.getAccessibilityLabel = function(){ return this.accessibilityLabel; };

TextField.prototype.getAccessibilityValue = function(){ return this.accessibilityValue; };

TextField.prototype.getAnchorPoint = function(){ return this.anchorPoint; };

TextField.prototype.getAnimatedCenter = function(){ return this.animatedCenter; };

TextField.prototype.getApiName = function(){ return this.apiName; };

TextField.prototype.getAppearance = function(){ return this.appearance; };

TextField.prototype.getAttributedHintText = function(){ return this.attributedHintText; };

TextField.prototype.getAttributedString = function(){ return this.attributedString; };

TextField.prototype.getAutoLink = function(){ return this.autoLink; };

TextField.prototype.getAutocapitalization = function(){ return this.autocapitalization; };

TextField.prototype.getAutocorrect = function(){ return this.autocorrect; };

TextField.prototype.getBackgroundColor = function(){ return this.backgroundColor; };

TextField.prototype.getBackgroundDisabledColor = function(){ return this.backgroundDisabledColor; };

TextField.prototype.getBackgroundDisabledImage = function(){ return this.backgroundDisabledImage; };

TextField.prototype.getBackgroundFocusedColor = function(){ return this.backgroundFocusedColor; };

TextField.prototype.getBackgroundFocusedImage = function(){ return this.backgroundFocusedImage; };

TextField.prototype.getBackgroundGradient = function(){ return this.backgroundGradient; };

TextField.prototype.getBackgroundImage = function(){ return this.backgroundImage; };

TextField.prototype.getBackgroundLeftCap = function(){ return this.backgroundLeftCap; };

TextField.prototype.getBackgroundRepeat = function(){ return this.backgroundRepeat; };

TextField.prototype.getBackgroundSelectedColor = function(){ return this.backgroundSelectedColor; };

TextField.prototype.getBackgroundSelectedImage = function(){ return this.backgroundSelectedImage; };

TextField.prototype.getBackgroundTopCap = function(){ return this.backgroundTopCap; };

TextField.prototype.getBorderColor = function(){ return this.borderColor; };

TextField.prototype.getBorderRadius = function(){ return this.borderRadius; };

TextField.prototype.getBorderStyle = function(){ return this.borderStyle; };

TextField.prototype.getBorderWidth = function(){ return this.borderWidth; };

TextField.prototype.getBottom = function(){ return this.bottom; };

TextField.prototype.getBubbleParent = function(){ return this.bubbleParent; };

TextField.prototype.getCenter = function(){ return this.center; };

TextField.prototype.getChildren = function(){ return this.children; };

TextField.prototype.getClearButtonMode = function(){ return this.clearButtonMode; };

TextField.prototype.getClearOnEdit = function(){ return this.clearOnEdit; };

TextField.prototype.getClipMode = function(){ return this.clipMode; };

TextField.prototype.getColor = function(){ return this.color; };

TextField.prototype.getEditable = function(){ return this.editable; };

TextField.prototype.getEllipsize = function(){ return this.ellipsize; };

TextField.prototype.getEnableReturnKey = function(){ return this.enableReturnKey; };

TextField.prototype.getFocusable = function(){ return this.focusable; };

TextField.prototype.getHeight = function(){ return this.height; };

TextField.prototype.getHintText = function(){ return this.hintText; };

TextField.prototype.getHintTextColor = function(){ return this.hintTextColor; };

TextField.prototype.getHorizontalWrap = function(){ return this.horizontalWrap; };

TextField.prototype.getKeepScreenOn = function(){ return this.keepScreenOn; };

TextField.prototype.getKeyboardToolbar = function(){ return this.keyboardToolbar; };

TextField.prototype.getKeyboardToolbarColor = function(){ return this.keyboardToolbarColor; };

TextField.prototype.getKeyboardToolbarHeight = function(){ return this.keyboardToolbarHeight; };

TextField.prototype.getKeyboardType = function(){ return this.keyboardType; };

TextField.prototype.getLayout = function(){ return this.layout; };

TextField.prototype.getLeft = function(){ return this.left; };

TextField.prototype.getLeftButtonMode = function(){ return this.leftButtonMode; };

TextField.prototype.getLeftButtonPadding = function(){ return this.leftButtonPadding; };

TextField.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

TextField.prototype.getMaxLength = function(){ return this.maxLength; };

TextField.prototype.getMinimumFontSize = function(){ return this.minimumFontSize; };

TextField.prototype.getOpacity = function(){ return this.opacity; };

TextField.prototype.getOverrideCurrentAnimation = function(){ return this.overrideCurrentAnimation; };

TextField.prototype.getPaddingLeft = function(){ return this.paddingLeft; };

TextField.prototype.getPaddingRight = function(){ return this.paddingRight; };

TextField.prototype.getPasswordMask = function(){ return this.passwordMask; };

TextField.prototype.getPullBackgroundColor = function(){ return this.pullBackgroundColor; };

TextField.prototype.getRect = function(){ return this.rect; };

TextField.prototype.getReturnKeyType = function(){ return this.returnKeyType; };

TextField.prototype.getRight = function(){ return this.right; };

TextField.prototype.getRightButtonMode = function(){ return this.rightButtonMode; };

TextField.prototype.getRightButtonPadding = function(){ return this.rightButtonPadding; };

TextField.prototype.getSize = function(){ return this.size; };

TextField.prototype.getSoftKeyboardOnFocus = function(){ return this.softKeyboardOnFocus; };

TextField.prototype.getSuppressReturn = function(){ return this.suppressReturn; };

TextField.prototype.getTextAlign = function(){ return this.textAlign; };

TextField.prototype.getTintColor = function(){ return this.tintColor; };

TextField.prototype.getTop = function(){ return this.top; };

TextField.prototype.getTouchEnabled = function(){ return this.touchEnabled; };

TextField.prototype.getTransform = function(){ return this.transform; };

TextField.prototype.getValue = function(){ return this.value; };

TextField.prototype.getVerticalAlign = function(){ return this.verticalAlign; };

TextField.prototype.getViewShadowColor = function(){ return this.viewShadowColor; };

TextField.prototype.getViewShadowOffset = function(){ return this.viewShadowOffset; };

TextField.prototype.getViewShadowRadius = function(){ return this.viewShadowRadius; };

TextField.prototype.getVisible = function(){ return this.visible; };

TextField.prototype.getWidth = function(){ return this.width; };

TextField.prototype.getZIndex = function(){ return this.zIndex; };

TextField.prototype.hasText = function(){ return true; };

TextField.prototype.hide = function(){};

TextField.prototype.remove = function(){};

TextField.prototype.removeAllChildren = function(){};

TextField.prototype.removeEventListener = function(){};

TextField.prototype.setAccessibilityHidden = function(property){ this.accessibilityHidden = property; };

TextField.prototype.setAccessibilityHint = function(property){ this.accessibilityHint = property; };

TextField.prototype.setAccessibilityLabel = function(property){ this.accessibilityLabel = property; };

TextField.prototype.setAccessibilityValue = function(property){ this.accessibilityValue = property; };

TextField.prototype.setAnchorPoint = function(property){ this.anchorPoint = property; };

TextField.prototype.setAppearance = function(property){ this.appearance = property; };

TextField.prototype.setAttributedHintText = function(property){ this.attributedHintText = property; };

TextField.prototype.setAttributedString = function(property){ this.attributedString = property; };

TextField.prototype.setAutoLink = function(property){ this.autoLink = property; };

TextField.prototype.setAutocapitalization = function(property){ this.autocapitalization = property; };

TextField.prototype.setAutocorrect = function(property){ this.autocorrect = property; };

TextField.prototype.setBackgroundColor = function(property){ this.backgroundColor = property; };

TextField.prototype.setBackgroundDisabledColor = function(property){ this.backgroundDisabledColor = property; };

TextField.prototype.setBackgroundDisabledImage = function(property){ this.backgroundDisabledImage = property; };

TextField.prototype.setBackgroundFocusedColor = function(property){ this.backgroundFocusedColor = property; };

TextField.prototype.setBackgroundFocusedImage = function(property){ this.backgroundFocusedImage = property; };

TextField.prototype.setBackgroundGradient = function(property){ this.backgroundGradient = property; };

TextField.prototype.setBackgroundImage = function(property){ this.backgroundImage = property; };

TextField.prototype.setBackgroundLeftCap = function(property){ this.backgroundLeftCap = property; };

TextField.prototype.setBackgroundRepeat = function(property){ this.backgroundRepeat = property; };

TextField.prototype.setBackgroundSelectedColor = function(property){ this.backgroundSelectedColor = property; };

TextField.prototype.setBackgroundSelectedImage = function(property){ this.backgroundSelectedImage = property; };

TextField.prototype.setBackgroundTopCap = function(property){ this.backgroundTopCap = property; };

TextField.prototype.setBorderColor = function(property){ this.borderColor = property; };

TextField.prototype.setBorderRadius = function(property){ this.borderRadius = property; };

TextField.prototype.setBorderStyle = function(property){ this.borderStyle = property; };

TextField.prototype.setBorderWidth = function(property){ this.borderWidth = property; };

TextField.prototype.setBottom = function(property){ this.bottom = property; };

TextField.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

TextField.prototype.setCenter = function(property){ this.center = property; };

TextField.prototype.setClearButtonMode = function(property){ this.clearButtonMode = property; };

TextField.prototype.setClearOnEdit = function(property){ this.clearOnEdit = property; };

TextField.prototype.setClipMode = function(property){ this.clipMode = property; };

TextField.prototype.setColor = function(property){ this.color = property; };

TextField.prototype.setEditable = function(property){ this.editable = property; };

TextField.prototype.setEllipsize = function(property){ this.ellipsize = property; };

TextField.prototype.setEnableReturnKey = function(property){ this.enableReturnKey = property; };

TextField.prototype.setFocusable = function(property){ this.focusable = property; };

TextField.prototype.setFont = function(property){ this.font = property; };

TextField.prototype.setHeight = function(property){ this.height = property; };

TextField.prototype.setHintText = function(property){ this.hintText = property; };

TextField.prototype.setHintTextColor = function(property){ this.hintTextColor = property; };

TextField.prototype.setHorizontalWrap = function(property){ this.horizontalWrap = property; };

TextField.prototype.setKeepScreenOn = function(property){ this.keepScreenOn = property; };

TextField.prototype.setKeyboardToolbar = function(property){ this.keyboardToolbar = property; };

TextField.prototype.setKeyboardToolbarColor = function(property){ this.keyboardToolbarColor = property; };

TextField.prototype.setKeyboardToolbarHeight = function(property){ this.keyboardToolbarHeight = property; };

TextField.prototype.setKeyboardType = function(property){ this.keyboardType = property; };

TextField.prototype.setLayout = function(property){ this.layout = property; };

TextField.prototype.setLeft = function(property){ this.left = property; };

TextField.prototype.setLeftButton = function(property){ this.leftButton = property; };

TextField.prototype.setLeftButtonMode = function(property){ this.leftButtonMode = property; };

TextField.prototype.setLeftButtonPadding = function(property){ this.leftButtonPadding = property; };

TextField.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

TextField.prototype.setMaxLength = function(property){ this.maxLength = property; };

TextField.prototype.setMinimumFontSize = function(property){ this.minimumFontSize = property; };

TextField.prototype.setOpacity = function(property){ this.opacity = property; };

TextField.prototype.setPaddingLeft = function(property){ this.paddingLeft = property; };

TextField.prototype.setPaddingRight = function(property){ this.paddingRight = property; };

TextField.prototype.setPasswordMask = function(property){ this.passwordMask = property; };

TextField.prototype.setPullBackgroundColor = function(property){ this.pullBackgroundColor = property; };

TextField.prototype.setReturnKeyType = function(property){ this.returnKeyType = property; };

TextField.prototype.setRight = function(property){ this.right = property; };

TextField.prototype.setRightButton = function(property){ this.rightButton = property; };

TextField.prototype.setRightButtonMode = function(property){ this.rightButtonMode = property; };

TextField.prototype.setRightButtonPadding = function(property){ this.rightButtonPadding = property; };

TextField.prototype.setSelection = function(property){ this.selection = property; };

TextField.prototype.setSoftKeyboardOnFocus = function(property){ this.softKeyboardOnFocus = property; };

TextField.prototype.setSuppressReturn = function(property){ this.suppressReturn = property; };

TextField.prototype.setTextAlign = function(property){ this.textAlign = property; };

TextField.prototype.setTintColor = function(property){ this.tintColor = property; };

TextField.prototype.setTop = function(property){ this.top = property; };

TextField.prototype.setTouchEnabled = function(property){ this.touchEnabled = property; };

TextField.prototype.setTransform = function(property){ this.transform = property; };

TextField.prototype.setValue = function(property){ this.value = property; };

TextField.prototype.setVerticalAlign = function(property){ this.verticalAlign = property; };

TextField.prototype.setViewShadowColor = function(property){ this.viewShadowColor = property; };

TextField.prototype.setViewShadowOffset = function(property){ this.viewShadowOffset = property; };

TextField.prototype.setViewShadowRadius = function(property){ this.viewShadowRadius = property; };

TextField.prototype.setVisible = function(property){ this.visible = property; };

TextField.prototype.setWidth = function(property){ this.width = property; };

TextField.prototype.setZIndex = function(property){ this.zIndex = property; };

TextField.prototype.show = function(){};

TextField.prototype.startLayout = function(){};

TextField.prototype.toImage = function(){ return {}; };

TextField.prototype.updateLayout = function(){};

module.exports = function(properties){ return new TextField(properties); };