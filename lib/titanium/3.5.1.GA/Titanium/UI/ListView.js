var crypto = require('crypto');
function ListView(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'allowsSelection',
			'anchorPoint',
			'animatedCenter',
			'apiName',
			'backgroundColor',
			'backgroundDisabledColor',
			'backgroundDisabledImage',
			'backgroundFocusedColor',
			'backgroundFocusedImage',
			'backgroundGradient',
			'backgroundImage',
			'backgroundLeftCap',
			'backgroundRepeat',
			'backgroundTopCap',
			'borderColor',
			'borderRadius',
			'borderWidth',
			'bottom',
			'bubbleParent',
			'canScroll',
			'caseInsensitiveSearch',
			'center',
			'children',
			'clipMode',
			'defaultItemTemplate',
			'editing',
			'focusable',
			'footerDividersEnabled',
			'footerTitle',
			'footerView',
			'headerDividersEnabled',
			'headerTitle',
			'headerView',
			'height',
			'horizontalWrap',
			'keepScreenOn',
			'keepSectionsInSearch',
			'layout',
			'left',
			'opacity',
			'overrideCurrentAnimation',
			'pruneSectionsOnEdit',
			'pullBackgroundColor',
			'pullView',
			'rect',
			'refreshControl',
			'right',
			'scrollIndicatorStyle',
			'searchText',
			'searchView',
			'sectionCount',
			'sectionIndexTitles',
			'sections',
			'separatorColor',
			'separatorInsets',
			'separatorStyle',
			'showVerticalScrollIndicator',
			'size',
			'softKeyboardOnFocus',
			'style',
			'templates',
			'tintColor',
			'top',
			'touchEnabled',
			'transform',
			'viewShadowColor',
			'viewShadowOffset',
			'viewShadowRadius',
			'visible',
			'width',
			'willScrollOnStatusTap',
			'zIndex',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.accessibilityHidden = __SLAG__properties.accessibilityHidden || true;
	this.accessibilityHint = __SLAG__properties.accessibilityHint || '';
	this.accessibilityLabel = __SLAG__properties.accessibilityLabel || '';
	this.accessibilityValue = __SLAG__properties.accessibilityValue || '';
	this.allowsSelection = __SLAG__properties.allowsSelection || true;
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
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.ListView.apiName is read only property');
	}
	this.apiName = 'Ti.UI.ListView';
	this.backgroundColor = __SLAG__properties.backgroundColor || '';
	this.backgroundDisabledColor = __SLAG__properties.backgroundDisabledColor || '';
	this.backgroundDisabledImage = __SLAG__properties.backgroundDisabledImage || '';
	this.backgroundFocusedColor = __SLAG__properties.backgroundFocusedColor || '';
	this.backgroundFocusedImage = __SLAG__properties.backgroundFocusedImage || '';
	this.backgroundGradient = __SLAG__properties.backgroundGradient || {};
	this.backgroundImage = __SLAG__properties.backgroundImage || '';
	this.backgroundLeftCap = __SLAG__properties.backgroundLeftCap || 0;
	this.backgroundRepeat = __SLAG__properties.backgroundRepeat || true;
	this.backgroundTopCap = __SLAG__properties.backgroundTopCap || 0;
	this.borderColor = __SLAG__properties.borderColor || '';
	this.borderRadius = __SLAG__properties.borderRadius || 0;
	this.borderWidth = __SLAG__properties.borderWidth || 0;
	this.bottom = __SLAG__properties.bottom || 0;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.canScroll = __SLAG__properties.canScroll || true;
	this.caseInsensitiveSearch = __SLAG__properties.caseInsensitiveSearch || true;
	this.center = __SLAG__properties.center || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.children) {
		throw new Error('Ti.UI.ListView.children is read only property');
	}
	this.children = [];
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.defaultItemTemplate = __SLAG__properties.defaultItemTemplate || '';
	this.editing = __SLAG__properties.editing || true;
	this.focusable = __SLAG__properties.focusable || true;
	this.footerDividersEnabled = __SLAG__properties.footerDividersEnabled || true;
	this.footerTitle = __SLAG__properties.footerTitle || '';
	this.footerView = __SLAG__properties.footerView || {};
	this.headerDividersEnabled = __SLAG__properties.headerDividersEnabled || true;
	this.headerTitle = __SLAG__properties.headerTitle || '';
	this.headerView = __SLAG__properties.headerView || {};
	this.height = __SLAG__properties.height || 0;
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
	this.keepSectionsInSearch = __SLAG__properties.keepSectionsInSearch || true;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.opacity = __SLAG__properties.opacity || 0;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	this.pruneSectionsOnEdit = __SLAG__properties.pruneSectionsOnEdit || true;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	this.pullView = __SLAG__properties.pullView || {};
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.ListView.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.refreshControl = __SLAG__properties.refreshControl || {};
	this.right = __SLAG__properties.right || 0;
	this.scrollIndicatorStyle = __SLAG__properties.scrollIndicatorStyle || 0;
	this.searchText = __SLAG__properties.searchText || '';
	this.searchView = __SLAG__properties.searchView || {};
	if (__SLAG__properties.sectionCount) {
		throw new Error('Ti.UI.ListView.sectionCount is read only property');
	}
	this.sectionCount = 0;
	this.sectionIndexTitles = __SLAG__properties.sectionIndexTitles || [];
	this.sections = __SLAG__properties.sections || [];
	this.separatorColor = __SLAG__properties.separatorColor || '';
	this.separatorInsets = __SLAG__properties.separatorInsets || {};
	this.separatorStyle = __SLAG__properties.separatorStyle || 0;
	this.showVerticalScrollIndicator = __SLAG__properties.showVerticalScrollIndicator || true;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.ListView.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = __SLAG__properties.softKeyboardOnFocus || 0;
	this.style = __SLAG__properties.style || 0;
	this.templates = __SLAG__properties.templates || {};
	this.tintColor = __SLAG__properties.tintColor || '';
	this.top = __SLAG__properties.top || 0;
	this.touchEnabled = __SLAG__properties.touchEnabled || true;
	this.transform = __SLAG__properties.transform || {};
	this.viewShadowColor = __SLAG__properties.viewShadowColor || '';
	this.viewShadowOffset = __SLAG__properties.viewShadowOffset || {
		x: 0,
		y: 0
	};
	this.viewShadowRadius = __SLAG__properties.viewShadowRadius || 0;
	this.visible = __SLAG__properties.visible || true;
	this.width = __SLAG__properties.width || 0;
	this.willScrollOnStatusTap = __SLAG__properties.willScrollOnStatusTap || true;
	this.zIndex = __SLAG__properties.zIndex || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
ListView.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
ListView.prototype.addEventListener = function () {
};
ListView.prototype.animate = function () {
};
ListView.prototype.appendSection = function () {
};
ListView.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
ListView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
ListView.prototype.deleteSectionAt = function () {
};
ListView.prototype.deselectItem = function () {
};
ListView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.ListView.finishLayout was deprecated, since 3.0.0');
};
ListView.prototype.fireEvent = function () {
};
ListView.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
ListView.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
ListView.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
ListView.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
ListView.prototype.getAllowsSelection = function () {
	return this.allowsSelection;
};
ListView.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
ListView.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
ListView.prototype.getApiName = function () {
	return this.apiName;
};
ListView.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
ListView.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
ListView.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
ListView.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
ListView.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
ListView.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
ListView.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
ListView.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
ListView.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
ListView.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
ListView.prototype.getBorderColor = function () {
	return this.borderColor;
};
ListView.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
ListView.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
ListView.prototype.getBottom = function () {
	return this.bottom;
};
ListView.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ListView.prototype.getCanScroll = function () {
	return this.canScroll;
};
ListView.prototype.getCaseInsensitiveSearch = function () {
	return this.caseInsensitiveSearch;
};
ListView.prototype.getCenter = function () {
	return this.center;
};
ListView.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
ListView.prototype.getChildren = function () {
	return this.children;
};
ListView.prototype.getClipMode = function () {
	return this.clipMode;
};
ListView.prototype.getDefaultItemTemplate = function () {
	return this.defaultItemTemplate;
};
ListView.prototype.getEditing = function () {
	return this.editing;
};
ListView.prototype.getFocusable = function () {
	return this.focusable;
};
ListView.prototype.getFooterDividersEnabled = function () {
	return this.footerDividersEnabled;
};
ListView.prototype.getFooterTitle = function () {
	return this.footerTitle;
};
ListView.prototype.getFooterView = function () {
	return this.footerView;
};
ListView.prototype.getHeaderDividersEnabled = function () {
	return this.headerDividersEnabled;
};
ListView.prototype.getHeaderTitle = function () {
	return this.headerTitle;
};
ListView.prototype.getHeaderView = function () {
	return this.headerView;
};
ListView.prototype.getHeight = function () {
	return this.height;
};
ListView.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
ListView.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
ListView.prototype.getKeepSectionsInSearch = function () {
	return this.keepSectionsInSearch;
};
ListView.prototype.getLayout = function () {
	return this.layout;
};
ListView.prototype.getLeft = function () {
	return this.left;
};
ListView.prototype.getOpacity = function () {
	return this.opacity;
};
ListView.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
ListView.prototype.getPruneSectionsOnEdit = function () {
	return this.pruneSectionsOnEdit;
};
ListView.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
ListView.prototype.getPullView = function () {
	return this.pullView;
};
ListView.prototype.getRect = function () {
	return this.rect;
};
ListView.prototype.getRefreshControl = function () {
	return this.refreshControl;
};
ListView.prototype.getRight = function () {
	return this.right;
};
ListView.prototype.getScrollIndicatorStyle = function () {
	return this.scrollIndicatorStyle;
};
ListView.prototype.getSearchText = function () {
	return this.searchText;
};
ListView.prototype.getSearchView = function () {
	return this.searchView;
};
ListView.prototype.getSectionCount = function () {
	return this.sectionCount;
};
ListView.prototype.getSectionIndexTitles = function () {
	return this.sectionIndexTitles;
};
ListView.prototype.getSections = function () {
	return this.sections;
};
ListView.prototype.getSeparatorColor = function () {
	return this.separatorColor;
};
ListView.prototype.getSeparatorInsets = function () {
	return this.separatorInsets;
};
ListView.prototype.getSeparatorStyle = function () {
	return this.separatorStyle;
};
ListView.prototype.getShowVerticalScrollIndicator = function () {
	return this.showVerticalScrollIndicator;
};
ListView.prototype.getSize = function () {
	return this.size;
};
ListView.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
ListView.prototype.getStyle = function () {
	return this.style;
};
ListView.prototype.getTemplates = function () {
	return this.templates;
};
ListView.prototype.getTintColor = function () {
	return this.tintColor;
};
ListView.prototype.getTop = function () {
	return this.top;
};
ListView.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
ListView.prototype.getTransform = function () {
	return this.transform;
};
ListView.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
ListView.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
ListView.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
ListView.prototype.getVisible = function () {
	return this.visible;
};
ListView.prototype.getWidth = function () {
	return this.width;
};
ListView.prototype.getWillScrollOnStatusTap = function () {
	return this.willScrollOnStatusTap;
};
ListView.prototype.getZIndex = function () {
	return this.zIndex;
};
ListView.prototype.hide = function () {
};
ListView.prototype.insertSectionAt = function () {
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
ListView.prototype.removeAllChildren = function () {
};
ListView.prototype.removeEventListener = function () {
};
ListView.prototype.replaceSectionAt = function () {
};
ListView.prototype.scrollToItem = function () {
};
ListView.prototype.selectItem = function () {
};
ListView.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
ListView.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
ListView.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
ListView.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
ListView.prototype.setAllowsSelection = function (property) {
	this.allowsSelection = property;
};
ListView.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
ListView.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
ListView.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
ListView.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
ListView.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
ListView.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
ListView.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
ListView.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
ListView.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
ListView.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
ListView.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
ListView.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
ListView.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
ListView.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
ListView.prototype.setBottom = function (property) {
	this.bottom = property;
};
ListView.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
ListView.prototype.setCanScroll = function (property) {
	this.canScroll = property;
};
ListView.prototype.setCaseInsensitiveSearch = function (property) {
	this.caseInsensitiveSearch = property;
};
ListView.prototype.setCenter = function (property) {
	this.center = property;
};
ListView.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
ListView.prototype.setContentInsets = function () {
};
ListView.prototype.setDefaultItemTemplate = function (property) {
	this.defaultItemTemplate = property;
};
ListView.prototype.setEditing = function (property) {
	this.editing = property;
};
ListView.prototype.setFocusable = function (property) {
	this.focusable = property;
};
ListView.prototype.setFooterTitle = function (property) {
	this.footerTitle = property;
};
ListView.prototype.setFooterView = function (property) {
	this.footerView = property;
};
ListView.prototype.setHeaderTitle = function (property) {
	this.headerTitle = property;
};
ListView.prototype.setHeaderView = function (property) {
	this.headerView = property;
};
ListView.prototype.setHeight = function (property) {
	this.height = property;
};
ListView.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
ListView.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
ListView.prototype.setKeepSectionsInSearch = function (property) {
	this.keepSectionsInSearch = property;
};
ListView.prototype.setLayout = function (property) {
	this.layout = property;
};
ListView.prototype.setLeft = function (property) {
	this.left = property;
};
ListView.prototype.setMarker = function () {
};
ListView.prototype.setOpacity = function (property) {
	this.opacity = property;
};
ListView.prototype.setPruneSectionsOnEdit = function (property) {
	this.pruneSectionsOnEdit = property;
};
ListView.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
ListView.prototype.setPullView = function (property) {
	this.pullView = property;
};
ListView.prototype.setRefreshControl = function (property) {
	this.refreshControl = property;
};
ListView.prototype.setRight = function (property) {
	this.right = property;
};
ListView.prototype.setScrollIndicatorStyle = function (property) {
	this.scrollIndicatorStyle = property;
};
ListView.prototype.setSearchText = function (property) {
	this.searchText = property;
};
ListView.prototype.setSearchView = function (property) {
	this.searchView = property;
};
ListView.prototype.setSectionIndexTitles = function (property) {
	this.sectionIndexTitles = property;
};
ListView.prototype.setSections = function (property) {
	this.sections = property;
};
ListView.prototype.setSeparatorColor = function (property) {
	this.separatorColor = property;
};
ListView.prototype.setSeparatorInsets = function (property) {
	this.separatorInsets = property;
};
ListView.prototype.setSeparatorStyle = function (property) {
	this.separatorStyle = property;
};
ListView.prototype.setShowVerticalScrollIndicator = function (property) {
	this.showVerticalScrollIndicator = property;
};
ListView.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
ListView.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
ListView.prototype.setTop = function (property) {
	this.top = property;
};
ListView.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
ListView.prototype.setTransform = function (property) {
	this.transform = property;
};
ListView.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
ListView.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
ListView.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
ListView.prototype.setVisible = function (property) {
	this.visible = property;
};
ListView.prototype.setWidth = function (property) {
	this.width = property;
};
ListView.prototype.setWillScrollOnStatusTap = function (property) {
	this.willScrollOnStatusTap = property;
};
ListView.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
ListView.prototype.show = function () {
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
module.exports = function (properties) {
	return new ListView(properties);
};