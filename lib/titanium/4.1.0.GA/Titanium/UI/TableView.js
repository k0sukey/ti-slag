function TableView(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.TableView';
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
	this.allowsSelection = properties.allowsSelection || true;
	this.allowsSelectionDuringEditing = properties.allowsSelectionDuringEditing || true;
	this.editable = properties.editable || true;
	this.editing = properties.editing || true;
	this.footerDividersEnabled = properties.footerDividersEnabled || true;
	this.headerPullView = properties.headerPullView || {};
	this.refreshControl = properties.refreshControl || {};
	this.hideSearchOnSelection = properties.hideSearchOnSelection || true;
	this.headerDividersEnabled = properties.headerDividersEnabled || true;
	this.index = properties.index || [];
	this.moveable = properties.moveable || true;
	this.moving = properties.moving || true;
	this.overScrollMode = properties.overScrollMode || 0;
	this.scrollable = properties.scrollable || true;
	this.scrollIndicatorStyle = properties.scrollIndicatorStyle || 0;
	this.scrollsToTop = properties.scrollsToTop || true;
	this.searchAsChild = properties.searchAsChild || true;
	this.searchHidden = properties.searchHidden || true;
	this.separatorInsets = properties.separatorInsets || {};
	this.separatorStyle = properties.separatorStyle || 0;
	this.showVerticalScrollIndicator = properties.showVerticalScrollIndicator || true;
	this.style = properties.style || 0;
	this.data = properties.data || {};
	this.filterAttribute = properties.filterAttribute || '';
	this.filterAnchored = properties.filterAnchored || true;
	this.filterCaseInsensitive = properties.filterCaseInsensitive || true;
	this.footerTitle = properties.footerTitle || '';
	this.footerView = properties.footerView || {};
	this.headerTitle = properties.headerTitle || '';
	this.headerView = properties.headerView || {};
	this.maxRowHeight = properties.maxRowHeight || 0;
	this.minRowHeight = properties.minRowHeight || 0;
	this.rowHeight = properties.rowHeight || 0;
	this.search = properties.search || {};
	this.sectionCount = properties.sectionCount || 0;
	this.sections = properties.sections || [];
	this.separatorColor = properties.separatorColor || '';
	return this;
}
TableView.prototype.addEventListener = function () {
};
TableView.prototype.removeEventListener = function () {
};
TableView.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
TableView.prototype.fireEvent = function () {
};
TableView.prototype.finishLayout = function () {
	throw new Error('Ti.UI.TableView.finishLayout was deprecated, since 3.0.0');
};
TableView.prototype.removeAllChildren = function () {
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
TableView.prototype.convertPointToView = function () {
	return {
		x: 0,
		y: 0
	};
};
TableView.prototype.add = function () {
};
TableView.prototype.animate = function () {
};
TableView.prototype.hide = function () {
};
TableView.prototype.remove = function () {
};
TableView.prototype.show = function () {
};
TableView.prototype.deselectRow = function () {
};
TableView.prototype.setContentInsets = function () {
};
TableView.prototype.setContentOffset = function () {
};
TableView.prototype.setHeaderPullView = function () {
};
TableView.prototype.setData = function () {
};
TableView.prototype.appendRow = function () {
};
TableView.prototype.appendSection = function () {
};
TableView.prototype.deleteRow = function () {
};
TableView.prototype.deleteSection = function () {
};
TableView.prototype.insertRowAfter = function () {
};
TableView.prototype.insertSectionAfter = function () {
};
TableView.prototype.insertRowBefore = function () {
};
TableView.prototype.insertSectionBefore = function () {
};
TableView.prototype.scrollToIndex = function () {
};
TableView.prototype.scrollToTop = function () {
};
TableView.prototype.selectRow = function () {
};
TableView.prototype.updateRow = function () {
};
TableView.prototype.updateSection = function () {
};
TableView.prototype.getBubbleParent = function () {
	return true;
};
TableView.prototype.setBubbleParent = function () {
};
TableView.prototype.getApiName = function () {
	return '';
};
TableView.prototype.getLifecycleContainer = function () {
	return {};
};
TableView.prototype.setLifecycleContainer = function () {
};
TableView.prototype.getAccessibilityHidden = function () {
	return true;
};
TableView.prototype.setAccessibilityHidden = function () {
};
TableView.prototype.getAccessibilityHint = function () {
	return '';
};
TableView.prototype.setAccessibilityHint = function () {
};
TableView.prototype.getAccessibilityLabel = function () {
	return '';
};
TableView.prototype.setAccessibilityLabel = function () {
};
TableView.prototype.getAccessibilityValue = function () {
	return '';
};
TableView.prototype.setAccessibilityValue = function () {
};
TableView.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
TableView.prototype.setAnchorPoint = function () {
};
TableView.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
TableView.prototype.getBackgroundDisabledColor = function () {
	return '';
};
TableView.prototype.setBackgroundDisabledColor = function () {
};
TableView.prototype.getBackgroundDisabledImage = function () {
	return '';
};
TableView.prototype.setBackgroundDisabledImage = function () {
};
TableView.prototype.getBackgroundFocusedColor = function () {
	return '';
};
TableView.prototype.setBackgroundFocusedColor = function () {
};
TableView.prototype.getBackgroundFocusedImage = function () {
	return '';
};
TableView.prototype.setBackgroundFocusedImage = function () {
};
TableView.prototype.getBackgroundGradient = function () {
	return {};
};
TableView.prototype.setBackgroundGradient = function () {
};
TableView.prototype.getBackgroundImage = function () {
	return '';
};
TableView.prototype.setBackgroundImage = function () {
};
TableView.prototype.getBackgroundRepeat = function () {
	return true;
};
TableView.prototype.setBackgroundRepeat = function () {
};
TableView.prototype.getBackgroundLeftCap = function () {
	return 0;
};
TableView.prototype.setBackgroundLeftCap = function () {
};
TableView.prototype.getBackgroundTopCap = function () {
	return 0;
};
TableView.prototype.setBackgroundTopCap = function () {
};
TableView.prototype.getClipMode = function () {
	return 0;
};
TableView.prototype.setClipMode = function () {
};
TableView.prototype.getFocusable = function () {
	return true;
};
TableView.prototype.setFocusable = function () {
};
TableView.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
TableView.prototype.setOverrideCurrentAnimation = function () {
};
TableView.prototype.getPullBackgroundColor = function () {
	return '';
};
TableView.prototype.setPullBackgroundColor = function () {
};
TableView.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
TableView.prototype.setSoftKeyboardOnFocus = function () {
};
TableView.prototype.getTransform = function () {
	return {};
};
TableView.prototype.setTransform = function () {
};
TableView.prototype.getViewShadowRadius = function () {
	return 0;
};
TableView.prototype.setViewShadowRadius = function () {
};
TableView.prototype.getViewShadowColor = function () {
	return '';
};
TableView.prototype.setViewShadowColor = function () {
};
TableView.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
TableView.prototype.setViewShadowOffset = function () {
};
TableView.prototype.getHorizontalWrap = function () {
	return true;
};
TableView.prototype.setHorizontalWrap = function () {
};
TableView.prototype.getZIndex = function () {
	return 0;
};
TableView.prototype.setZIndex = function () {
};
TableView.prototype.getKeepScreenOn = function () {
	return true;
};
TableView.prototype.setKeepScreenOn = function () {
};
TableView.prototype.getBackgroundColor = function () {
	return '';
};
TableView.prototype.setBackgroundColor = function () {
};
TableView.prototype.getBorderColor = function () {
	return '';
};
TableView.prototype.setBorderColor = function () {
};
TableView.prototype.getBorderRadius = function () {
	return 0;
};
TableView.prototype.setBorderRadius = function () {
};
TableView.prototype.getBorderWidth = function () {
	return 0;
};
TableView.prototype.setBorderWidth = function () {
};
TableView.prototype.getBottom = function () {
	return '';
};
TableView.prototype.setBottom = function () {
};
TableView.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
TableView.prototype.setCenter = function () {
};
TableView.prototype.getChildren = function () {
	return [];
};
TableView.prototype.getHeight = function () {
	return '';
};
TableView.prototype.setHeight = function () {
};
TableView.prototype.getLayout = function () {
	return '';
};
TableView.prototype.setLayout = function () {
};
TableView.prototype.getLeft = function () {
	return '';
};
TableView.prototype.setLeft = function () {
};
TableView.prototype.getOpacity = function () {
	return 0;
};
TableView.prototype.setOpacity = function () {
};
TableView.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
TableView.prototype.getRight = function () {
	return '';
};
TableView.prototype.setRight = function () {
};
TableView.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
TableView.prototype.getTintColor = function () {
	return '';
};
TableView.prototype.setTintColor = function () {
};
TableView.prototype.getTop = function () {
	return '';
};
TableView.prototype.setTop = function () {
};
TableView.prototype.getTouchEnabled = function () {
	return true;
};
TableView.prototype.setTouchEnabled = function () {
};
TableView.prototype.getVisible = function () {
	return true;
};
TableView.prototype.setVisible = function () {
};
TableView.prototype.getWidth = function () {
	return '';
};
TableView.prototype.setWidth = function () {
};
TableView.prototype.getAllowsSelection = function () {
	return true;
};
TableView.prototype.setAllowsSelection = function () {
};
TableView.prototype.getAllowsSelectionDuringEditing = function () {
	return true;
};
TableView.prototype.setAllowsSelectionDuringEditing = function () {
};
TableView.prototype.getEditable = function () {
	return true;
};
TableView.prototype.setEditable = function () {
};
TableView.prototype.getEditing = function () {
	return true;
};
TableView.prototype.setEditing = function () {
};
TableView.prototype.getFooterDividersEnabled = function () {
	return true;
};
TableView.prototype.setFooterDividersEnabled = function () {
};
TableView.prototype.getHeaderPullView = function () {
	return {};
};
TableView.prototype.setHeaderPullView = function () {
};
TableView.prototype.getRefreshControl = function () {
	return {};
};
TableView.prototype.setRefreshControl = function () {
};
TableView.prototype.getHideSearchOnSelection = function () {
	return true;
};
TableView.prototype.setHideSearchOnSelection = function () {
};
TableView.prototype.getHeaderDividersEnabled = function () {
	return true;
};
TableView.prototype.setHeaderDividersEnabled = function () {
};
TableView.prototype.getIndex = function () {
	return [];
};
TableView.prototype.setIndex = function () {
};
TableView.prototype.getMoveable = function () {
	return true;
};
TableView.prototype.setMoveable = function () {
};
TableView.prototype.getMoving = function () {
	return true;
};
TableView.prototype.setMoving = function () {
};
TableView.prototype.getOverScrollMode = function () {
	return 0;
};
TableView.prototype.setOverScrollMode = function () {
};
TableView.prototype.getScrollable = function () {
	return true;
};
TableView.prototype.setScrollable = function () {
};
TableView.prototype.getScrollIndicatorStyle = function () {
	return 0;
};
TableView.prototype.setScrollIndicatorStyle = function () {
};
TableView.prototype.getScrollsToTop = function () {
	return true;
};
TableView.prototype.setScrollsToTop = function () {
};
TableView.prototype.getSearchAsChild = function () {
	return true;
};
TableView.prototype.setSearchAsChild = function () {
};
TableView.prototype.getSearchHidden = function () {
	return true;
};
TableView.prototype.setSearchHidden = function () {
};
TableView.prototype.getSeparatorInsets = function () {
	return {};
};
TableView.prototype.setSeparatorInsets = function () {
};
TableView.prototype.getSeparatorStyle = function () {
	return 0;
};
TableView.prototype.setSeparatorStyle = function () {
};
TableView.prototype.getShowVerticalScrollIndicator = function () {
	return true;
};
TableView.prototype.setShowVerticalScrollIndicator = function () {
};
TableView.prototype.getStyle = function () {
	return 0;
};
TableView.prototype.setStyle = function () {
};
TableView.prototype.getData = function () {
	return [];
};
TableView.prototype.setData = function () {
};
TableView.prototype.getFilterAttribute = function () {
	return '';
};
TableView.prototype.setFilterAttribute = function () {
};
TableView.prototype.getFilterAnchored = function () {
	return true;
};
TableView.prototype.setFilterAnchored = function () {
};
TableView.prototype.getFilterCaseInsensitive = function () {
	return true;
};
TableView.prototype.setFilterCaseInsensitive = function () {
};
TableView.prototype.getFooterTitle = function () {
	return '';
};
TableView.prototype.setFooterTitle = function () {
};
TableView.prototype.getFooterView = function () {
	return {};
};
TableView.prototype.setFooterView = function () {
};
TableView.prototype.getHeaderTitle = function () {
	return '';
};
TableView.prototype.setHeaderTitle = function () {
};
TableView.prototype.getHeaderView = function () {
	return {};
};
TableView.prototype.setHeaderView = function () {
};
TableView.prototype.getMaxRowHeight = function () {
	return 0;
};
TableView.prototype.setMaxRowHeight = function () {
};
TableView.prototype.getMinRowHeight = function () {
	return 0;
};
TableView.prototype.setMinRowHeight = function () {
};
TableView.prototype.getRowHeight = function () {
	return 0;
};
TableView.prototype.setRowHeight = function () {
};
TableView.prototype.getSearch = function () {
	return {};
};
TableView.prototype.setSearch = function () {
};
TableView.prototype.getSectionCount = function () {
	return 0;
};
TableView.prototype.getSections = function () {
	return [];
};
TableView.prototype.setSections = function () {
};
TableView.prototype.getSeparatorColor = function () {
	return '';
};
TableView.prototype.setSeparatorColor = function () {
};
module.exports = function (properties) {
	return new TableView(properties);
};