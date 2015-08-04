var crypto = require('crypto');
function ListView(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'anchorPoint',
			'animatedCenter',
			'backgroundDisabledColor',
			'backgroundDisabledImage',
			'backgroundFocusedColor',
			'backgroundFocusedImage',
			'backgroundGradient',
			'backgroundImage',
			'backgroundRepeat',
			'backgroundLeftCap',
			'backgroundTopCap',
			'clipMode',
			'focusable',
			'overrideCurrentAnimation',
			'pullBackgroundColor',
			'softKeyboardOnFocus',
			'transform',
			'viewShadowRadius',
			'viewShadowColor',
			'viewShadowOffset',
			'horizontalWrap',
			'zIndex',
			'keepScreenOn',
			'backgroundColor',
			'borderColor',
			'borderRadius',
			'borderWidth',
			'bottom',
			'center',
			'children',
			'height',
			'layout',
			'left',
			'opacity',
			'rect',
			'right',
			'size',
			'tintColor',
			'top',
			'touchEnabled',
			'visible',
			'width',
			'allowsSelection',
			'canScroll',
			'editing',
			'pruneSectionsOnEdit',
			'templates',
			'separatorHeight',
			'footerDividersEnabled',
			'headerDividersEnabled',
			'pullView',
			'refreshControl',
			'keepSectionsInSearch',
			'sectionIndexTitles',
			'scrollIndicatorStyle',
			'willScrollOnStatusTap',
			'separatorInsets',
			'separatorStyle',
			'style',
			'sections',
			'footerTitle',
			'headerTitle',
			'searchText',
			'footerView',
			'headerView',
			'searchView',
			'caseInsensitiveSearch',
			'sectionCount',
			'showVerticalScrollIndicator',
			'separatorColor',
			'defaultItemTemplate',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT) {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT) {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.ListView.apiName is read only property');
	}
	this.apiName = 'Ti.UI.ListView';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.accessibilityHidden = __SLAG__properties.accessibilityHidden || true;
	this.accessibilityHint = __SLAG__properties.accessibilityHint || '';
	this.accessibilityLabel = __SLAG__properties.accessibilityLabel || '';
	this.accessibilityValue = __SLAG__properties.accessibilityValue || '';
	this.anchorPoint = __SLAG__properties.anchorPoint || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.animatedCenter) {
		throw new Error('Ti.UI.ListView.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	this.backgroundDisabledColor = __SLAG__properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = __SLAG__properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = __SLAG__properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = __SLAG__properties.backgroundFocusedImage || '';
	this.backgroundGradient = __SLAG__properties.backgroundGradient || {};
	this.backgroundImage = __SLAG__properties.backgroundImage || '';
	this.backgroundRepeat = __SLAG__properties.backgroundRepeat || true;
	this.backgroundLeftCap = __SLAG__properties.backgroundLeftCap || 0;
	this.backgroundTopCap = __SLAG__properties.backgroundTopCap || 0;
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.focusable = __SLAG__properties.focusable || true;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	this.softKeyboardOnFocus = __SLAG__properties.softKeyboardOnFocus || 0;
	this.transform = __SLAG__properties.transform || {};
	this.viewShadowRadius = __SLAG__properties.viewShadowRadius || 0;
	this.viewShadowColor = __SLAG__properties.viewShadowColor || '';
	this.viewShadowOffset = __SLAG__properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.zIndex = __SLAG__properties.zIndex || 0;
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
	this.backgroundColor = __SLAG__properties.backgroundColor || '';
	this.borderColor = __SLAG__properties.borderColor || '';
	this.borderRadius = __SLAG__properties.borderRadius || 0;
	this.borderWidth = __SLAG__properties.borderWidth || 0;
	this.bottom = __SLAG__properties.bottom || 0;
	this.center = __SLAG__properties.center || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.children) {
		throw new Error('Ti.UI.ListView.children is read only property');
	}
	this.children = [];
	this.height = __SLAG__properties.height || 0;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.ListView.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.right = __SLAG__properties.right || 0;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.ListView.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.tintColor = __SLAG__properties.tintColor || '';
	this.top = __SLAG__properties.top || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.visible = __SLAG__properties.visible || true;
	this.width = __SLAG__properties.width || 0;
	this.allowsSelection = __SLAG__properties.allowsSelection || true;
	this.canScroll = __SLAG__properties.canScroll || true;
	this.editing = __SLAG__properties.editing || true;
	this.pruneSectionsOnEdit = __SLAG__properties.pruneSectionsOnEdit || true;
	this.templates = __SLAG__properties.templates || {};
	this.separatorHeight = __SLAG__properties.separatorHeight || '';
	this.footerDividersEnabled = __SLAG__properties.footerDividersEnabled || true;
	this.headerDividersEnabled = __SLAG__properties.headerDividersEnabled || true;
	this.pullView = __SLAG__properties.pullView || {};
	this.refreshControl = __SLAG__properties.refreshControl || {};
	this.keepSectionsInSearch = __SLAG__properties.keepSectionsInSearch || true;
	this.sectionIndexTitles = __SLAG__properties.sectionIndexTitles || [];
	this.scrollIndicatorStyle = __SLAG__properties.scrollIndicatorStyle || 0;
	this.willScrollOnStatusTap = __SLAG__properties.willScrollOnStatusTap || true;
	this.separatorInsets = __SLAG__properties.separatorInsets || {};
	this.separatorStyle = __SLAG__properties.separatorStyle || 0;
	this.style = __SLAG__properties.style || 0;
	this.sections = __SLAG__properties.sections || [];
	this.footerTitle = __SLAG__properties.footerTitle || '';
	this.headerTitle = __SLAG__properties.headerTitle || '';
	this.searchText = __SLAG__properties.searchText || '';
	this.footerView = __SLAG__properties.footerView || {};
	this.headerView = __SLAG__properties.headerView || {};
	this.searchView = __SLAG__properties.searchView || {};
	this.caseInsensitiveSearch = __SLAG__properties.caseInsensitiveSearch || true;
	if (__SLAG__properties.sectionCount) {
		throw new Error('Ti.UI.ListView.sectionCount is read only property');
	}
	this.sectionCount = 0;
	this.showVerticalScrollIndicator = __SLAG__properties.showVerticalScrollIndicator || true;
	this.separatorColor = __SLAG__properties.separatorColor || '';
	this.defaultItemTemplate = __SLAG__properties.defaultItemTemplate || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
ListView.prototype.addEventListener = function () {
};
ListView.prototype.removeEventListener = function () {
};
ListView.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
ListView.prototype.fireEvent = function () {
};
ListView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.ListView.finishLayout was deprecated, since 3.0.0');
};
ListView.prototype.removeAllChildren = function () {
};
ListView.prototype.startLayout = function () {
	throw new Error('Ti.UI.ListView.startLayout was deprecated, since 3.0.0');
};
ListView.prototype.toImage = function () {
	return {};
};
ListView.prototype.updateLayout = function () {
	throw new Error('Ti.UI.ListView.updateLayout was deprecated, since 3.0.0');
};
ListView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
ListView.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
ListView.prototype.animate = function () {
};
ListView.prototype.hide = function () {
};
ListView.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
ListView.prototype.show = function () {
};
ListView.prototype.deselectItem = function () {
};
ListView.prototype.selectItem = function () {
};
ListView.prototype.setContentInsets = function () {
};
ListView.prototype.setContentOffset = function () {
};
ListView.prototype.addMarker = function () {
};
ListView.prototype.scrollToItem = function () {
};
ListView.prototype.appendSection = function () {
};
ListView.prototype.deleteSectionAt = function () {
};
ListView.prototype.insertSectionAt = function () {
};
ListView.prototype.replaceSectionAt = function () {
};
ListView.prototype.setMarker = function () {
};
ListView.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ListView.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
ListView.prototype.getApiName = function () {
	return this.apiName;
};
ListView.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
ListView.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
ListView.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
ListView.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
ListView.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
ListView.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
ListView.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
ListView.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
ListView.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
ListView.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
ListView.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
ListView.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
ListView.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
ListView.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
ListView.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
ListView.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
ListView.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
ListView.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
ListView.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
ListView.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
ListView.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
ListView.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
ListView.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
ListView.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
ListView.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
ListView.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
ListView.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
ListView.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
ListView.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
ListView.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
ListView.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
ListView.prototype.getClipMode = function () {
	return this.clipMode;
};
ListView.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
ListView.prototype.getFocusable = function () {
	return this.focusable;
};
ListView.prototype.setFocusable = function (property) {
	this.focusable = property;
};
ListView.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
ListView.prototype.setOverrideCurrentAnimation = function (property) {
	this.overrideCurrentAnimation = property;
};
ListView.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
ListView.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
ListView.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
ListView.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
ListView.prototype.getTransform = function () {
	return this.transform;
};
ListView.prototype.setTransform = function (property) {
	this.transform = property;
};
ListView.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
ListView.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
ListView.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
ListView.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
ListView.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
ListView.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
ListView.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
ListView.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
ListView.prototype.getZIndex = function () {
	return this.zIndex;
};
ListView.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
ListView.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
ListView.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
ListView.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
ListView.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
ListView.prototype.getBorderColor = function () {
	return this.borderColor;
};
ListView.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
ListView.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
ListView.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
ListView.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
ListView.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
ListView.prototype.getBottom = function () {
	return this.bottom;
};
ListView.prototype.setBottom = function (property) {
	this.bottom = property;
};
ListView.prototype.getCenter = function () {
	return this.center;
};
ListView.prototype.setCenter = function (property) {
	this.center = property;
};
ListView.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
ListView.prototype.getChildren = function () {
	return this.children;
};
ListView.prototype.getHeight = function () {
	return this.height;
};
ListView.prototype.setHeight = function (property) {
	this.height = property;
};
ListView.prototype.getLayout = function () {
	return this.layout;
};
ListView.prototype.setLayout = function (property) {
	this.layout = property;
};
ListView.prototype.getLeft = function () {
	return this.left;
};
ListView.prototype.setLeft = function (property) {
	this.left = property;
};
ListView.prototype.getOpacity = function () {
	return this.opacity;
};
ListView.prototype.setOpacity = function (property) {
	this.opacity = property;
};
ListView.prototype.getRect = function () {
	return this.rect;
};
ListView.prototype.getRight = function () {
	return this.right;
};
ListView.prototype.setRight = function (property) {
	this.right = property;
};
ListView.prototype.getSize = function () {
	return this.size;
};
ListView.prototype.getTintColor = function () {
	return this.tintColor;
};
ListView.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
ListView.prototype.getTop = function () {
	return this.top;
};
ListView.prototype.setTop = function (property) {
	this.top = property;
};
ListView.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
ListView.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
ListView.prototype.getVisible = function () {
	return this.visible;
};
ListView.prototype.setVisible = function (property) {
	this.visible = property;
};
ListView.prototype.getWidth = function () {
	return this.width;
};
ListView.prototype.setWidth = function (property) {
	this.width = property;
};
ListView.prototype.getAllowsSelection = function () {
	return this.allowsSelection;
};
ListView.prototype.setAllowsSelection = function (property) {
	this.allowsSelection = property;
};
ListView.prototype.getCanScroll = function () {
	return this.canScroll;
};
ListView.prototype.setCanScroll = function (property) {
	this.canScroll = property;
};
ListView.prototype.getEditing = function () {
	return this.editing;
};
ListView.prototype.setEditing = function (property) {
	this.editing = property;
};
ListView.prototype.getPruneSectionsOnEdit = function () {
	return this.pruneSectionsOnEdit;
};
ListView.prototype.setPruneSectionsOnEdit = function (property) {
	this.pruneSectionsOnEdit = property;
};
ListView.prototype.getTemplates = function () {
	return this.templates;
};
ListView.prototype.setTemplates = function (property) {
	this.templates = property;
};
ListView.prototype.getSeparatorHeight = function () {
	return this.separatorHeight;
};
ListView.prototype.setSeparatorHeight = function (property) {
	this.separatorHeight = property;
};
ListView.prototype.getFooterDividersEnabled = function () {
	return this.footerDividersEnabled;
};
ListView.prototype.setFooterDividersEnabled = function (property) {
	this.footerDividersEnabled = property;
};
ListView.prototype.getHeaderDividersEnabled = function () {
	return this.headerDividersEnabled;
};
ListView.prototype.setHeaderDividersEnabled = function (property) {
	this.headerDividersEnabled = property;
};
ListView.prototype.getPullView = function () {
	return this.pullView;
};
ListView.prototype.setPullView = function (property) {
	this.pullView = property;
};
ListView.prototype.getRefreshControl = function () {
	return this.refreshControl;
};
ListView.prototype.setRefreshControl = function (property) {
	this.refreshControl = property;
};
ListView.prototype.getKeepSectionsInSearch = function () {
	return this.keepSectionsInSearch;
};
ListView.prototype.setKeepSectionsInSearch = function (property) {
	this.keepSectionsInSearch = property;
};
ListView.prototype.getSectionIndexTitles = function () {
	return this.sectionIndexTitles;
};
ListView.prototype.setSectionIndexTitles = function (property) {
	this.sectionIndexTitles = property;
};
ListView.prototype.getScrollIndicatorStyle = function () {
	return this.scrollIndicatorStyle;
};
ListView.prototype.setScrollIndicatorStyle = function (property) {
	this.scrollIndicatorStyle = property;
};
ListView.prototype.getWillScrollOnStatusTap = function () {
	return this.willScrollOnStatusTap;
};
ListView.prototype.setWillScrollOnStatusTap = function (property) {
	this.willScrollOnStatusTap = property;
};
ListView.prototype.getSeparatorInsets = function () {
	return this.separatorInsets;
};
ListView.prototype.setSeparatorInsets = function (property) {
	this.separatorInsets = property;
};
ListView.prototype.getSeparatorStyle = function () {
	return this.separatorStyle;
};
ListView.prototype.setSeparatorStyle = function (property) {
	this.separatorStyle = property;
};
ListView.prototype.getStyle = function () {
	return this.style;
};
ListView.prototype.setStyle = function (property) {
	this.style = property;
};
ListView.prototype.getSections = function () {
	return this.sections;
};
ListView.prototype.setSections = function (property) {
	this.sections = property;
};
ListView.prototype.getFooterTitle = function () {
	return this.footerTitle;
};
ListView.prototype.setFooterTitle = function (property) {
	this.footerTitle = property;
};
ListView.prototype.getHeaderTitle = function () {
	return this.headerTitle;
};
ListView.prototype.setHeaderTitle = function (property) {
	this.headerTitle = property;
};
ListView.prototype.getSearchText = function () {
	return this.searchText;
};
ListView.prototype.setSearchText = function (property) {
	this.searchText = property;
};
ListView.prototype.getFooterView = function () {
	return this.footerView;
};
ListView.prototype.setFooterView = function (property) {
	this.footerView = property;
};
ListView.prototype.getHeaderView = function () {
	return this.headerView;
};
ListView.prototype.setHeaderView = function (property) {
	this.headerView = property;
};
ListView.prototype.getSearchView = function () {
	return this.searchView;
};
ListView.prototype.setSearchView = function (property) {
	this.searchView = property;
};
ListView.prototype.getCaseInsensitiveSearch = function () {
	return this.caseInsensitiveSearch;
};
ListView.prototype.setCaseInsensitiveSearch = function (property) {
	this.caseInsensitiveSearch = property;
};
ListView.prototype.getSectionCount = function () {
	return this.sectionCount;
};
ListView.prototype.getShowVerticalScrollIndicator = function () {
	return this.showVerticalScrollIndicator;
};
ListView.prototype.setShowVerticalScrollIndicator = function (property) {
	this.showVerticalScrollIndicator = property;
};
ListView.prototype.getSeparatorColor = function () {
	return this.separatorColor;
};
ListView.prototype.setSeparatorColor = function (property) {
	this.separatorColor = property;
};
ListView.prototype.getDefaultItemTemplate = function () {
	return this.defaultItemTemplate;
};
ListView.prototype.setDefaultItemTemplate = function (property) {
	this.defaultItemTemplate = property;
};
module.exports = function (properties) {
	return new ListView(properties);
};