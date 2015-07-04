function TableView(properties) {
	properties = properties || {};
	this.accessibilityHidden = properties.accessibilityHidden || undefined;
	this.accessibilityHint = properties.accessibilityHint || undefined;
	this.accessibilityLabel = properties.accessibilityLabel || undefined;
	this.accessibilityValue = properties.accessibilityValue || undefined;
	this.allowsSelection = properties.allowsSelection || undefined;
	this.allowsSelectionDuringEditing = properties.allowsSelectionDuringEditing || undefined;
	this.anchorPoint = properties.anchorPoint || undefined;
	this.animatedCenter = properties.animatedCenter || undefined;
	this.apiName = 'Ti.UI.TableView';
	this.backgroundColor = properties.backgroundColor || undefined;
	this.backgroundDisabledColor = properties.backgroundDisabledColor || undefined;
	this.backgroundDisabledImage = properties.backgroundDisabledImage || undefined;
	this.backgroundFocusedColor = properties.backgroundFocusedColor || undefined;
	this.backgroundFocusedImage = properties.backgroundFocusedImage || undefined;
	this.backgroundGradient = properties.backgroundGradient || undefined;
	this.backgroundImage = properties.backgroundImage || undefined;
	this.backgroundLeftCap = properties.backgroundLeftCap || undefined;
	this.backgroundRepeat = properties.backgroundRepeat || undefined;
	this.backgroundTopCap = properties.backgroundTopCap || undefined;
	this.borderColor = properties.borderColor || undefined;
	this.borderRadius = properties.borderRadius || undefined;
	this.borderWidth = properties.borderWidth || undefined;
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.center = properties.center || undefined;
	this.children = properties.children || undefined;
	this.clipMode = properties.clipMode || undefined;
	this.data = properties.data || undefined;
	this.editable = properties.editable || undefined;
	this.editing = properties.editing || undefined;
	this.filterAnchored = properties.filterAnchored || undefined;
	this.filterAttribute = properties.filterAttribute || undefined;
	this.filterCaseInsensitive = properties.filterCaseInsensitive || undefined;
	this.focusable = properties.focusable || undefined;
	this.footerDividersEnabled = properties.footerDividersEnabled || undefined;
	this.footerTitle = properties.footerTitle || undefined;
	this.footerView = properties.footerView || undefined;
	this.headerDividersEnabled = properties.headerDividersEnabled || undefined;
	this.headerPullView = properties.headerPullView || undefined;
	this.headerTitle = properties.headerTitle || undefined;
	this.headerView = properties.headerView || undefined;
	this.height = properties.height || undefined;
	this.hideSearchOnSelection = properties.hideSearchOnSelection || undefined;
	this.horizontalWrap = properties.horizontalWrap || undefined;
	this.index = properties.index || undefined;
	this.keepScreenOn = properties.keepScreenOn || undefined;
	this.layout = properties.layout || undefined;
	this.left = properties.left || undefined;
	this.maxRowHeight = properties.maxRowHeight || undefined;
	this.minRowHeight = properties.minRowHeight || undefined;
	this.moveable = properties.moveable || undefined;
	this.moving = properties.moving || undefined;
	this.opacity = properties.opacity || undefined;
	this.overScrollMode = properties.overScrollMode || undefined;
	this.overrideCurrentAnimation = properties.overrideCurrentAnimation || undefined;
	this.pullBackgroundColor = properties.pullBackgroundColor || undefined;
	this.rect = properties.rect || undefined;
	this.refreshControl = properties.refreshControl || undefined;
	this.right = properties.right || undefined;
	this.rowHeight = properties.rowHeight || undefined;
	this.scrollIndicatorStyle = properties.scrollIndicatorStyle || undefined;
	this.scrollable = properties.scrollable || undefined;
	this.scrollsToTop = properties.scrollsToTop || undefined;
	this.search = properties.search || undefined;
	this.searchAsChild = properties.searchAsChild || undefined;
	this.searchHidden = properties.searchHidden || undefined;
	this.sectionCount = properties.sectionCount || undefined;
	this.sections = properties.sections || undefined;
	this.separatorColor = properties.separatorColor || undefined;
	this.separatorInsets = properties.separatorInsets || undefined;
	this.separatorStyle = properties.separatorStyle || undefined;
	this.showVerticalScrollIndicator = properties.showVerticalScrollIndicator || undefined;
	this.size = properties.size || undefined;
	this.softKeyboardOnFocus = properties.softKeyboardOnFocus || undefined;
	this.style = properties.style || undefined;
	this.tintColor = properties.tintColor || undefined;
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
TableView.prototype.add = function () {
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
	for (var key in params) {
		this[key] = params[key];
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
	return true;
};
TableView.prototype.getAccessibilityHint = function () {
	return '';
};
TableView.prototype.getAccessibilityLabel = function () {
	return '';
};
TableView.prototype.getAccessibilityValue = function () {
	return '';
};
TableView.prototype.getAllowsSelection = function () {
	return true;
};
TableView.prototype.getAllowsSelectionDuringEditing = function () {
	return true;
};
TableView.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
TableView.prototype.getAnimatedCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
TableView.prototype.getApiName = function () {
	return '';
};
TableView.prototype.getBackgroundColor = function () {
	return '';
};
TableView.prototype.getBackgroundDisabledColor = function () {
	return '';
};
TableView.prototype.getBackgroundDisabledImage = function () {
	return '';
};
TableView.prototype.getBackgroundFocusedColor = function () {
	return '';
};
TableView.prototype.getBackgroundFocusedImage = function () {
	return '';
};
TableView.prototype.getBackgroundGradient = function () {
	return {};
};
TableView.prototype.getBackgroundImage = function () {
	return '';
};
TableView.prototype.getBackgroundLeftCap = function () {
	return 0;
};
TableView.prototype.getBackgroundRepeat = function () {
	return true;
};
TableView.prototype.getBackgroundTopCap = function () {
	return 0;
};
TableView.prototype.getBorderColor = function () {
	return '';
};
TableView.prototype.getBorderRadius = function () {
	return 0;
};
TableView.prototype.getBorderWidth = function () {
	return 0;
};
TableView.prototype.getBottom = function () {
	return 0;
};
TableView.prototype.getBubbleParent = function () {
	return true;
};
TableView.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
TableView.prototype.getChildren = function () {
	return [];
};
TableView.prototype.getClipMode = function () {
	return 0;
};
TableView.prototype.getEditable = function () {
	return true;
};
TableView.prototype.getEditing = function () {
	return true;
};
TableView.prototype.getFilterAnchored = function () {
	return true;
};
TableView.prototype.getFilterAttribute = function () {
	return '';
};
TableView.prototype.getFilterCaseInsensitive = function () {
	return true;
};
TableView.prototype.getFocusable = function () {
	return true;
};
TableView.prototype.getFooterDividersEnabled = function () {
	return true;
};
TableView.prototype.getFooterTitle = function () {
	return '';
};
TableView.prototype.getFooterView = function () {
	return {};
};
TableView.prototype.getHeaderDividersEnabled = function () {
	return true;
};
TableView.prototype.getHeaderPullView = function () {
	return {};
};
TableView.prototype.getHeaderTitle = function () {
	return '';
};
TableView.prototype.getHeaderView = function () {
	return {};
};
TableView.prototype.getHeight = function () {
	return 0;
};
TableView.prototype.getHideSearchOnSelection = function () {
	return true;
};
TableView.prototype.getHorizontalWrap = function () {
	return true;
};
TableView.prototype.getIndex = function () {
	return [];
};
TableView.prototype.getKeepScreenOn = function () {
	return true;
};
TableView.prototype.getLayout = function () {
	return '';
};
TableView.prototype.getLeft = function () {
	return 0;
};
TableView.prototype.getMaxRowHeight = function () {
	return 0;
};
TableView.prototype.getMinRowHeight = function () {
	return 0;
};
TableView.prototype.getMoveable = function () {
	return true;
};
TableView.prototype.getMoving = function () {
	return true;
};
TableView.prototype.getOpacity = function () {
	return 0;
};
TableView.prototype.getOverScrollMode = function () {
	return 0;
};
TableView.prototype.getOverrideCurrentAnimation = function () {
	return true;
};
TableView.prototype.getPullBackgroundColor = function () {
	return '';
};
TableView.prototype.getRect = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
TableView.prototype.getRefreshControl = function () {
	return {};
};
TableView.prototype.getRight = function () {
	return 0;
};
TableView.prototype.getRowHeight = function () {
	return 0;
};
TableView.prototype.getScrollIndicatorStyle = function () {
	return 0;
};
TableView.prototype.getScrollable = function () {
	return true;
};
TableView.prototype.getScrollsToTop = function () {
	return true;
};
TableView.prototype.getSearch = function () {
	return {};
};
TableView.prototype.getSearchAsChild = function () {
	return true;
};
TableView.prototype.getSearchHidden = function () {
	return true;
};
TableView.prototype.getSectionCount = function () {
	return 0;
};
TableView.prototype.getSections = function () {
	return [];
};
TableView.prototype.getSeparatorColor = function () {
	return '';
};
TableView.prototype.getSeparatorStyle = function () {
	return 0;
};
TableView.prototype.getShowVerticalScrollIndicator = function () {
	return true;
};
TableView.prototype.getSize = function () {
	return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
};
TableView.prototype.getSoftKeyboardOnFocus = function () {
	return 0;
};
TableView.prototype.getStyle = function () {
	return 0;
};
TableView.prototype.getTintColor = function () {
	return '';
};
TableView.prototype.getTop = function () {
	return 0;
};
TableView.prototype.getTouchEnabled = function () {
	return true;
};
TableView.prototype.getTransform = function () {
	return {};
};
TableView.prototype.getViewShadowColor = function () {
	return '';
};
TableView.prototype.getViewShadowOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
TableView.prototype.getViewShadowRadius = function () {
	return 0;
};
TableView.prototype.getVisible = function () {
	return true;
};
TableView.prototype.getWidth = function () {
	return 0;
};
TableView.prototype.getZIndex = function () {
	return 0;
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
TableView.prototype.remove = function () {
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
TableView.prototype.setAccessibilityHidden = function () {
};
TableView.prototype.setAccessibilityHint = function () {
};
TableView.prototype.setAccessibilityLabel = function () {
};
TableView.prototype.setAccessibilityValue = function () {
};
TableView.prototype.setAllowsSelection = function () {
};
TableView.prototype.setAllowsSelectionDuringEditing = function () {
};
TableView.prototype.setAnchorPoint = function () {
};
TableView.prototype.setBackgroundColor = function () {
};
TableView.prototype.setBackgroundDisabledColor = function () {
};
TableView.prototype.setBackgroundDisabledImage = function () {
};
TableView.prototype.setBackgroundFocusedColor = function () {
};
TableView.prototype.setBackgroundFocusedImage = function () {
};
TableView.prototype.setBackgroundGradient = function () {
};
TableView.prototype.setBackgroundImage = function () {
};
TableView.prototype.setBackgroundLeftCap = function () {
};
TableView.prototype.setBackgroundRepeat = function () {
};
TableView.prototype.setBackgroundTopCap = function () {
};
TableView.prototype.setBorderColor = function () {
};
TableView.prototype.setBorderRadius = function () {
};
TableView.prototype.setBorderWidth = function () {
};
TableView.prototype.setBottom = function () {
};
TableView.prototype.setBubbleParent = function () {
};
TableView.prototype.setCenter = function () {
};
TableView.prototype.setClipMode = function () {
};
TableView.prototype.setContentInsets = function () {
};
TableView.prototype.setData = function () {
};
TableView.prototype.setEditable = function () {
};
TableView.prototype.setEditing = function () {
};
TableView.prototype.setFilterAnchored = function () {
};
TableView.prototype.setFilterAttribute = function () {
};
TableView.prototype.setFilterCaseInsensitive = function () {
};
TableView.prototype.setFocusable = function () {
};
TableView.prototype.setFooterTitle = function () {
};
TableView.prototype.setFooterView = function () {
};
TableView.prototype.setHeaderPullView = function () {
};
TableView.prototype.setHeaderTitle = function () {
};
TableView.prototype.setHeaderView = function () {
};
TableView.prototype.setHeight = function () {
};
TableView.prototype.setHideSearchOnSelection = function () {
};
TableView.prototype.setHorizontalWrap = function () {
};
TableView.prototype.setIndex = function () {
};
TableView.prototype.setKeepScreenOn = function () {
};
TableView.prototype.setLayout = function () {
};
TableView.prototype.setLeft = function () {
};
TableView.prototype.setMaxRowHeight = function () {
};
TableView.prototype.setMinRowHeight = function () {
};
TableView.prototype.setMoveable = function () {
};
TableView.prototype.setMoving = function () {
};
TableView.prototype.setOpacity = function () {
};
TableView.prototype.setOverScrollMode = function () {
};
TableView.prototype.setPullBackgroundColor = function () {
};
TableView.prototype.setRefreshControl = function () {
};
TableView.prototype.setRight = function () {
};
TableView.prototype.setRowHeight = function () {
};
TableView.prototype.setScrollIndicatorStyle = function () {
};
TableView.prototype.setScrollable = function () {
};
TableView.prototype.setScrollsToTop = function () {
};
TableView.prototype.setSearch = function () {
};
TableView.prototype.setSearchAsChild = function () {
};
TableView.prototype.setSearchHidden = function () {
};
TableView.prototype.setSections = function () {
};
TableView.prototype.setSeparatorColor = function () {
};
TableView.prototype.setSeparatorInsets = function () {
};
TableView.prototype.setSeparatorStyle = function () {
};
TableView.prototype.setShowVerticalScrollIndicator = function () {
};
TableView.prototype.setSoftKeyboardOnFocus = function () {
};
TableView.prototype.setStyle = function () {
};
TableView.prototype.setTintColor = function () {
};
TableView.prototype.setTop = function () {
};
TableView.prototype.setTouchEnabled = function () {
};
TableView.prototype.setTransform = function () {
};
TableView.prototype.setViewShadowColor = function () {
};
TableView.prototype.setViewShadowOffset = function () {
};
TableView.prototype.setViewShadowRadius = function () {
};
TableView.prototype.setVisible = function () {
};
TableView.prototype.setWidth = function () {
};
TableView.prototype.setZIndex = function () {
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