var crypto = require('crypto');
function TableView(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'accessibilityHidden',
			'accessibilityHint',
			'accessibilityLabel',
			'accessibilityValue',
			'allowsSelection',
			'allowsSelectionDuringEditing',
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
			'center',
			'children',
			'clipMode',
			'data',
			'editable',
			'editing',
			'filterAnchored',
			'filterAttribute',
			'filterCaseInsensitive',
			'focusable',
			'footerDividersEnabled',
			'footerTitle',
			'footerView',
			'headerDividersEnabled',
			'headerPullView',
			'headerTitle',
			'headerView',
			'height',
			'hideSearchOnSelection',
			'horizontalWrap',
			'index',
			'keepScreenOn',
			'layout',
			'left',
			'maxRowHeight',
			'minRowHeight',
			'moveable',
			'moving',
			'opacity',
			'overScrollMode',
			'overrideCurrentAnimation',
			'pullBackgroundColor',
			'rect',
			'refreshControl',
			'right',
			'rowHeight',
			'scrollIndicatorStyle',
			'scrollable',
			'scrollsToTop',
			'search',
			'searchAsChild',
			'searchHidden',
			'sectionCount',
			'sections',
			'separatorColor',
			'separatorInsets',
			'separatorStyle',
			'showVerticalScrollIndicator',
			'size',
			'softKeyboardOnFocus',
			'style',
			'tintColor',
			'top',
			'touchEnabled',
			'transform',
			'viewShadowColor',
			'viewShadowOffset',
			'viewShadowRadius',
			'visible',
			'width',
			'zIndex',
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
	this.accessibilityHidden = __SLAG__properties.accessibilityHidden || true;
	this.accessibilityHint = __SLAG__properties.accessibilityHint || '';
	this.accessibilityLabel = __SLAG__properties.accessibilityLabel || '';
	this.accessibilityValue = __SLAG__properties.accessibilityValue || '';
	this.allowsSelection = __SLAG__properties.allowsSelection || true;
	this.allowsSelectionDuringEditing = __SLAG__properties.allowsSelectionDuringEditing || true;
	this.anchorPoint = __SLAG__properties.anchorPoint || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.animatedCenter) {
		throw new Error('Ti.UI.TableView.animatedCenter is read only property');
	}
	this.animatedCenter = {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.TableView.apiName is read only property');
	}
	this.apiName = 'Ti.UI.TableView';
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
	this.center = __SLAG__properties.center || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.children) {
		throw new Error('Ti.UI.TableView.children is read only property');
	}
	this.children = [];
	this.clipMode = __SLAG__properties.clipMode || 0;
	this.data = __SLAG__properties.data || {};
	this.editable = __SLAG__properties.editable || true;
	this.editing = __SLAG__properties.editing || true;
	this.filterAnchored = __SLAG__properties.filterAnchored || true;
	this.filterAttribute = __SLAG__properties.filterAttribute || '';
	this.filterCaseInsensitive = __SLAG__properties.filterCaseInsensitive || true;
	this.focusable = __SLAG__properties.focusable || true;
	this.footerDividersEnabled = __SLAG__properties.footerDividersEnabled || true;
	this.footerTitle = __SLAG__properties.footerTitle || '';
	this.footerView = __SLAG__properties.footerView || {};
	this.headerDividersEnabled = __SLAG__properties.headerDividersEnabled || true;
	this.headerPullView = __SLAG__properties.headerPullView || {};
	this.headerTitle = __SLAG__properties.headerTitle || '';
	this.headerView = __SLAG__properties.headerView || {};
	this.height = __SLAG__properties.height || 0;
	this.hideSearchOnSelection = __SLAG__properties.hideSearchOnSelection || true;
	this.horizontalWrap = __SLAG__properties.horizontalWrap || true;
	this.index = __SLAG__properties.index || [];
	this.keepScreenOn = __SLAG__properties.keepScreenOn || true;
	this.layout = __SLAG__properties.layout || '';
	this.left = __SLAG__properties.left || 0;
	this.maxRowHeight = __SLAG__properties.maxRowHeight || 0;
	this.minRowHeight = __SLAG__properties.minRowHeight || 0;
	this.moveable = __SLAG__properties.moveable || true;
	this.moving = __SLAG__properties.moving || true;
	this.opacity = __SLAG__properties.opacity || 0;
	this.overScrollMode = __SLAG__properties.overScrollMode || 0;
	this.overrideCurrentAnimation = __SLAG__properties.overrideCurrentAnimation || true;
	this.pullBackgroundColor = __SLAG__properties.pullBackgroundColor || '';
	if (__SLAG__properties.rect) {
		throw new Error('Ti.UI.TableView.rect is read only property');
	}
	this.rect = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.refreshControl = __SLAG__properties.refreshControl || {};
	this.right = __SLAG__properties.right || 0;
	this.rowHeight = __SLAG__properties.rowHeight || 0;
	this.scrollIndicatorStyle = __SLAG__properties.scrollIndicatorStyle || 0;
	this.scrollable = __SLAG__properties.scrollable || true;
	this.scrollsToTop = __SLAG__properties.scrollsToTop || true;
	this.search = __SLAG__properties.search || {};
	this.searchAsChild = __SLAG__properties.searchAsChild || true;
	this.searchHidden = __SLAG__properties.searchHidden || true;
	if (__SLAG__properties.sectionCount) {
		throw new Error('Ti.UI.TableView.sectionCount is read only property');
	}
	this.sectionCount = 0;
	this.sections = __SLAG__properties.sections || [];
	this.separatorColor = __SLAG__properties.separatorColor || '';
	this.separatorInsets = __SLAG__properties.separatorInsets || {};
	this.separatorStyle = __SLAG__properties.separatorStyle || 0;
	this.showVerticalScrollIndicator = __SLAG__properties.showVerticalScrollIndicator || true;
	if (__SLAG__properties.size) {
		throw new Error('Ti.UI.TableView.size is read only property');
	}
	this.size = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.softKeyboardOnFocus = __SLAG__properties.softKeyboardOnFocus || 0;
	this.style = __SLAG__properties.style || 0;
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
	this.zIndex = __SLAG__properties.zIndex || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
TableView.prototype.add = function (params) {
	this.children.push(params);
	params.__SLAG_PARENT = this;
};
TableView.prototype.addEventListener = function () {
};
TableView.prototype.animate = function () {
};
TableView.prototype.appendRow = function () {
};
TableView.prototype.appendSection = function () {
};
TableView.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
TableView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
TableView.prototype.deleteRow = function () {
};
TableView.prototype.deleteSection = function () {
};
TableView.prototype.deselectRow = function () {
};
TableView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.TableView.finishLayout was deprecated, since 3.0.0');
};
TableView.prototype.fireEvent = function () {
};
TableView.prototype.getAccessibilityHidden = function () {
	return this.accessibilityHidden;
};
TableView.prototype.getAccessibilityHint = function () {
	return this.accessibilityHint;
};
TableView.prototype.getAccessibilityLabel = function () {
	return this.accessibilityLabel;
};
TableView.prototype.getAccessibilityValue = function () {
	return this.accessibilityValue;
};
TableView.prototype.getAllowsSelection = function () {
	return this.allowsSelection;
};
TableView.prototype.getAllowsSelectionDuringEditing = function () {
	return this.allowsSelectionDuringEditing;
};
TableView.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
TableView.prototype.getAnimatedCenter = function () {
	return this.animatedCenter;
};
TableView.prototype.getApiName = function () {
	return this.apiName;
};
TableView.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
TableView.prototype.getBackgroundDisabledColor = function () {
	return this.backgroundDisabledColor;
};
TableView.prototype.getBackgroundDisabledImage = function () {
	return this.backgroundDisabledImage;
};
TableView.prototype.getBackgroundFocusedColor = function () {
	return this.backgroundFocusedColor;
};
TableView.prototype.getBackgroundFocusedImage = function () {
	return this.backgroundFocusedImage;
};
TableView.prototype.getBackgroundGradient = function () {
	return this.backgroundGradient;
};
TableView.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
TableView.prototype.getBackgroundLeftCap = function () {
	return this.backgroundLeftCap;
};
TableView.prototype.getBackgroundRepeat = function () {
	return this.backgroundRepeat;
};
TableView.prototype.getBackgroundTopCap = function () {
	return this.backgroundTopCap;
};
TableView.prototype.getBorderColor = function () {
	return this.borderColor;
};
TableView.prototype.getBorderRadius = function () {
	return this.borderRadius;
};
TableView.prototype.getBorderWidth = function () {
	return this.borderWidth;
};
TableView.prototype.getBottom = function () {
	return this.bottom;
};
TableView.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
TableView.prototype.getCenter = function () {
	return this.center;
};
TableView.prototype.getParent = function () {
	return this.__SLAG_PARENT;
};
TableView.prototype.getChildren = function () {
	return this.children;
};
TableView.prototype.getClipMode = function () {
	return this.clipMode;
};
TableView.prototype.getData = function () {
	return this.data;
};
TableView.prototype.getEditable = function () {
	return this.editable;
};
TableView.prototype.getEditing = function () {
	return this.editing;
};
TableView.prototype.getFilterAnchored = function () {
	return this.filterAnchored;
};
TableView.prototype.getFilterAttribute = function () {
	return this.filterAttribute;
};
TableView.prototype.getFilterCaseInsensitive = function () {
	return this.filterCaseInsensitive;
};
TableView.prototype.getFocusable = function () {
	return this.focusable;
};
TableView.prototype.getFooterDividersEnabled = function () {
	return this.footerDividersEnabled;
};
TableView.prototype.getFooterTitle = function () {
	return this.footerTitle;
};
TableView.prototype.getFooterView = function () {
	return this.footerView;
};
TableView.prototype.getHeaderDividersEnabled = function () {
	return this.headerDividersEnabled;
};
TableView.prototype.getHeaderPullView = function () {
	return this.headerPullView;
};
TableView.prototype.getHeaderTitle = function () {
	return this.headerTitle;
};
TableView.prototype.getHeaderView = function () {
	return this.headerView;
};
TableView.prototype.getHeight = function () {
	return this.height;
};
TableView.prototype.getHideSearchOnSelection = function () {
	return this.hideSearchOnSelection;
};
TableView.prototype.getHorizontalWrap = function () {
	return this.horizontalWrap;
};
TableView.prototype.getIndex = function () {
	return this.index;
};
TableView.prototype.getKeepScreenOn = function () {
	return this.keepScreenOn;
};
TableView.prototype.getLayout = function () {
	return this.layout;
};
TableView.prototype.getLeft = function () {
	return this.left;
};
TableView.prototype.getMaxRowHeight = function () {
	return this.maxRowHeight;
};
TableView.prototype.getMinRowHeight = function () {
	return this.minRowHeight;
};
TableView.prototype.getMoveable = function () {
	return this.moveable;
};
TableView.prototype.getMoving = function () {
	return this.moving;
};
TableView.prototype.getOpacity = function () {
	return this.opacity;
};
TableView.prototype.getOverScrollMode = function () {
	return this.overScrollMode;
};
TableView.prototype.getOverrideCurrentAnimation = function () {
	return this.overrideCurrentAnimation;
};
TableView.prototype.getPullBackgroundColor = function () {
	return this.pullBackgroundColor;
};
TableView.prototype.getRect = function () {
	return this.rect;
};
TableView.prototype.getRefreshControl = function () {
	return this.refreshControl;
};
TableView.prototype.getRight = function () {
	return this.right;
};
TableView.prototype.getRowHeight = function () {
	return this.rowHeight;
};
TableView.prototype.getScrollIndicatorStyle = function () {
	return this.scrollIndicatorStyle;
};
TableView.prototype.getScrollable = function () {
	return this.scrollable;
};
TableView.prototype.getScrollsToTop = function () {
	return this.scrollsToTop;
};
TableView.prototype.getSearch = function () {
	return this.search;
};
TableView.prototype.getSearchAsChild = function () {
	return this.searchAsChild;
};
TableView.prototype.getSearchHidden = function () {
	return this.searchHidden;
};
TableView.prototype.getSectionCount = function () {
	return this.sectionCount;
};
TableView.prototype.getSections = function () {
	return this.sections;
};
TableView.prototype.getSeparatorColor = function () {
	return this.separatorColor;
};
TableView.prototype.getSeparatorInsets = function () {
	return this.separatorInsets;
};
TableView.prototype.getSeparatorStyle = function () {
	return this.separatorStyle;
};
TableView.prototype.getShowVerticalScrollIndicator = function () {
	return this.showVerticalScrollIndicator;
};
TableView.prototype.getSize = function () {
	return this.size;
};
TableView.prototype.getSoftKeyboardOnFocus = function () {
	return this.softKeyboardOnFocus;
};
TableView.prototype.getStyle = function () {
	return this.style;
};
TableView.prototype.getTintColor = function () {
	return this.tintColor;
};
TableView.prototype.getTop = function () {
	return this.top;
};
TableView.prototype.getTouchEnabled = function () {
	return this.touchEnabled;
};
TableView.prototype.getTransform = function () {
	return this.transform;
};
TableView.prototype.getViewShadowColor = function () {
	return this.viewShadowColor;
};
TableView.prototype.getViewShadowOffset = function () {
	return this.viewShadowOffset;
};
TableView.prototype.getViewShadowRadius = function () {
	return this.viewShadowRadius;
};
TableView.prototype.getVisible = function () {
	return this.visible;
};
TableView.prototype.getWidth = function () {
	return this.width;
};
TableView.prototype.getZIndex = function () {
	return this.zIndex;
};
TableView.prototype.hide = function () {
};
TableView.prototype.insertRowAfter = function () {
};
TableView.prototype.insertRowBefore = function () {
};
TableView.prototype.insertSectionAfter = function () {
};
TableView.prototype.insertSectionBefore = function () {
};
TableView.prototype.remove = function (params) {
	for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) {
		if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) {
			this.children.splice(__SLAG_COUNTER, 1);
			break;
		}
	}
	params.__SLAG_PARENT = undefined;
};
TableView.prototype.removeAllChildren = function () {
};
TableView.prototype.removeEventListener = function () {
};
TableView.prototype.scrollToIndex = function () {
};
TableView.prototype.scrollToTop = function () {
};
TableView.prototype.selectRow = function () {
};
TableView.prototype.setAccessibilityHidden = function (property) {
	this.accessibilityHidden = property;
};
TableView.prototype.setAccessibilityHint = function (property) {
	this.accessibilityHint = property;
};
TableView.prototype.setAccessibilityLabel = function (property) {
	this.accessibilityLabel = property;
};
TableView.prototype.setAccessibilityValue = function (property) {
	this.accessibilityValue = property;
};
TableView.prototype.setAllowsSelection = function (property) {
	this.allowsSelection = property;
};
TableView.prototype.setAllowsSelectionDuringEditing = function (property) {
	this.allowsSelectionDuringEditing = property;
};
TableView.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
TableView.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
TableView.prototype.setBackgroundDisabledColor = function (property) {
	this.backgroundDisabledColor = property;
};
TableView.prototype.setBackgroundDisabledImage = function (property) {
	this.backgroundDisabledImage = property;
};
TableView.prototype.setBackgroundFocusedColor = function (property) {
	this.backgroundFocusedColor = property;
};
TableView.prototype.setBackgroundFocusedImage = function (property) {
	this.backgroundFocusedImage = property;
};
TableView.prototype.setBackgroundGradient = function (property) {
	this.backgroundGradient = property;
};
TableView.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
TableView.prototype.setBackgroundLeftCap = function (property) {
	this.backgroundLeftCap = property;
};
TableView.prototype.setBackgroundRepeat = function (property) {
	this.backgroundRepeat = property;
};
TableView.prototype.setBackgroundTopCap = function (property) {
	this.backgroundTopCap = property;
};
TableView.prototype.setBorderColor = function (property) {
	this.borderColor = property;
};
TableView.prototype.setBorderRadius = function (property) {
	this.borderRadius = property;
};
TableView.prototype.setBorderWidth = function (property) {
	this.borderWidth = property;
};
TableView.prototype.setBottom = function (property) {
	this.bottom = property;
};
TableView.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
TableView.prototype.setCenter = function (property) {
	this.center = property;
};
TableView.prototype.setClipMode = function (property) {
	this.clipMode = property;
};
TableView.prototype.setContentInsets = function () {
};
TableView.prototype.setData = function (property) {
	this.data = property;
};
TableView.prototype.setEditable = function (property) {
	this.editable = property;
};
TableView.prototype.setEditing = function (property) {
	this.editing = property;
};
TableView.prototype.setFilterAnchored = function (property) {
	this.filterAnchored = property;
};
TableView.prototype.setFilterAttribute = function (property) {
	this.filterAttribute = property;
};
TableView.prototype.setFilterCaseInsensitive = function (property) {
	this.filterCaseInsensitive = property;
};
TableView.prototype.setFocusable = function (property) {
	this.focusable = property;
};
TableView.prototype.setFooterTitle = function (property) {
	this.footerTitle = property;
};
TableView.prototype.setFooterView = function (property) {
	this.footerView = property;
};
TableView.prototype.setHeaderPullView = function (property) {
	this.headerPullView = property;
};
TableView.prototype.setHeaderTitle = function (property) {
	this.headerTitle = property;
};
TableView.prototype.setHeaderView = function (property) {
	this.headerView = property;
};
TableView.prototype.setHeight = function (property) {
	this.height = property;
};
TableView.prototype.setHideSearchOnSelection = function (property) {
	this.hideSearchOnSelection = property;
};
TableView.prototype.setHorizontalWrap = function (property) {
	this.horizontalWrap = property;
};
TableView.prototype.setIndex = function (property) {
	this.index = property;
};
TableView.prototype.setKeepScreenOn = function (property) {
	this.keepScreenOn = property;
};
TableView.prototype.setLayout = function (property) {
	this.layout = property;
};
TableView.prototype.setLeft = function (property) {
	this.left = property;
};
TableView.prototype.setMaxRowHeight = function (property) {
	this.maxRowHeight = property;
};
TableView.prototype.setMinRowHeight = function (property) {
	this.minRowHeight = property;
};
TableView.prototype.setMoveable = function (property) {
	this.moveable = property;
};
TableView.prototype.setMoving = function (property) {
	this.moving = property;
};
TableView.prototype.setOpacity = function (property) {
	this.opacity = property;
};
TableView.prototype.setOverScrollMode = function (property) {
	this.overScrollMode = property;
};
TableView.prototype.setPullBackgroundColor = function (property) {
	this.pullBackgroundColor = property;
};
TableView.prototype.setRefreshControl = function (property) {
	this.refreshControl = property;
};
TableView.prototype.setRight = function (property) {
	this.right = property;
};
TableView.prototype.setRowHeight = function (property) {
	this.rowHeight = property;
};
TableView.prototype.setScrollIndicatorStyle = function (property) {
	this.scrollIndicatorStyle = property;
};
TableView.prototype.setScrollable = function (property) {
	this.scrollable = property;
};
TableView.prototype.setScrollsToTop = function (property) {
	this.scrollsToTop = property;
};
TableView.prototype.setSearch = function (property) {
	this.search = property;
};
TableView.prototype.setSearchAsChild = function (property) {
	this.searchAsChild = property;
};
TableView.prototype.setSearchHidden = function (property) {
	this.searchHidden = property;
};
TableView.prototype.setSections = function (property) {
	this.sections = property;
};
TableView.prototype.setSeparatorColor = function (property) {
	this.separatorColor = property;
};
TableView.prototype.setSeparatorInsets = function (property) {
	this.separatorInsets = property;
};
TableView.prototype.setSeparatorStyle = function (property) {
	this.separatorStyle = property;
};
TableView.prototype.setShowVerticalScrollIndicator = function (property) {
	this.showVerticalScrollIndicator = property;
};
TableView.prototype.setSoftKeyboardOnFocus = function (property) {
	this.softKeyboardOnFocus = property;
};
TableView.prototype.setStyle = function (property) {
	this.style = property;
};
TableView.prototype.setTintColor = function (property) {
	this.tintColor = property;
};
TableView.prototype.setTop = function (property) {
	this.top = property;
};
TableView.prototype.setTouchEnabled = function (property) {
	this.touchEnabled = property;
};
TableView.prototype.setTransform = function (property) {
	this.transform = property;
};
TableView.prototype.setViewShadowColor = function (property) {
	this.viewShadowColor = property;
};
TableView.prototype.setViewShadowOffset = function (property) {
	this.viewShadowOffset = property;
};
TableView.prototype.setViewShadowRadius = function (property) {
	this.viewShadowRadius = property;
};
TableView.prototype.setVisible = function (property) {
	this.visible = property;
};
TableView.prototype.setWidth = function (property) {
	this.width = property;
};
TableView.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
TableView.prototype.show = function () {
};
TableView.prototype.startLayout = function () {
	throw new Error('Ti.UI.TableView.startLayout was deprecated, since 3.0.0');
};
TableView.prototype.toImage = function () {
	return {};
};
TableView.prototype.updateLayout = function () {
	throw new Error('Ti.UI.TableView.updateLayout was deprecated, since 3.0.0');
};
TableView.prototype.updateRow = function () {
};
TableView.prototype.updateSection = function () {
};
module.exports = function (properties) {
	return new TableView(properties);
};