function UI(properties) {
	properties = properties || {};
	this.ANIMATION_CURVE_EASE_IN = properties.ANIMATION_CURVE_EASE_IN || undefined;
	this.ANIMATION_CURVE_EASE_IN_OUT = properties.ANIMATION_CURVE_EASE_IN_OUT || undefined;
	this.ANIMATION_CURVE_EASE_OUT = properties.ANIMATION_CURVE_EASE_OUT || undefined;
	this.ANIMATION_CURVE_LINEAR = properties.ANIMATION_CURVE_LINEAR || undefined;
	this.ATTRIBUTE_BACKGROUND_COLOR = properties.ATTRIBUTE_BACKGROUND_COLOR || undefined;
	this.ATTRIBUTE_BASELINE_OFFSET = properties.ATTRIBUTE_BASELINE_OFFSET || undefined;
	this.ATTRIBUTE_EXPANSION = properties.ATTRIBUTE_EXPANSION || undefined;
	this.ATTRIBUTE_FONT = properties.ATTRIBUTE_FONT || undefined;
	this.ATTRIBUTE_FOREGROUND_COLOR = properties.ATTRIBUTE_FOREGROUND_COLOR || undefined;
	this.ATTRIBUTE_KERN = properties.ATTRIBUTE_KERN || undefined;
	this.ATTRIBUTE_LETTERPRESS_STYLE = properties.ATTRIBUTE_LETTERPRESS_STYLE || undefined;
	this.ATTRIBUTE_LIGATURE = properties.ATTRIBUTE_LIGATURE || undefined;
	this.ATTRIBUTE_LINK = properties.ATTRIBUTE_LINK || undefined;
	this.ATTRIBUTE_OBLIQUENESS = properties.ATTRIBUTE_OBLIQUENESS || undefined;
	this.ATTRIBUTE_SHADOW = properties.ATTRIBUTE_SHADOW || undefined;
	this.ATTRIBUTE_STRIKETHROUGH_COLOR = properties.ATTRIBUTE_STRIKETHROUGH_COLOR || undefined;
	this.ATTRIBUTE_STRIKETHROUGH_STYLE = properties.ATTRIBUTE_STRIKETHROUGH_STYLE || undefined;
	this.ATTRIBUTE_STROKE_COLOR = properties.ATTRIBUTE_STROKE_COLOR || undefined;
	this.ATTRIBUTE_STROKE_WIDTH = properties.ATTRIBUTE_STROKE_WIDTH || undefined;
	this.ATTRIBUTE_TEXT_EFFECT = properties.ATTRIBUTE_TEXT_EFFECT || undefined;
	this.ATTRIBUTE_UNDERLINES_STYLE = properties.ATTRIBUTE_UNDERLINES_STYLE || undefined;
	this.ATTRIBUTE_UNDERLINE_BY_WORD = properties.ATTRIBUTE_UNDERLINE_BY_WORD || undefined;
	this.ATTRIBUTE_UNDERLINE_COLOR = properties.ATTRIBUTE_UNDERLINE_COLOR || undefined;
	this.ATTRIBUTE_UNDERLINE_PATTERN_DASH = properties.ATTRIBUTE_UNDERLINE_PATTERN_DASH || undefined;
	this.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT = properties.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT || undefined;
	this.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT = properties.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT || undefined;
	this.ATTRIBUTE_UNDERLINE_PATTERN_DOT = properties.ATTRIBUTE_UNDERLINE_PATTERN_DOT || undefined;
	this.ATTRIBUTE_UNDERLINE_PATTERN_SOLID = properties.ATTRIBUTE_UNDERLINE_PATTERN_SOLID || undefined;
	this.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE = properties.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE || undefined;
	this.ATTRIBUTE_UNDERLINE_STYLE_NONE = properties.ATTRIBUTE_UNDERLINE_STYLE_NONE || undefined;
	this.ATTRIBUTE_UNDERLINE_STYLE_SINGLE = properties.ATTRIBUTE_UNDERLINE_STYLE_SINGLE || undefined;
	this.ATTRIBUTE_UNDERLINE_STYLE_THICK = properties.ATTRIBUTE_UNDERLINE_STYLE_THICK || undefined;
	this.ATTRIBUTE_WRITING_DIRECTION = properties.ATTRIBUTE_WRITING_DIRECTION || undefined;
	this.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING = properties.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING || undefined;
	this.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT = properties.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT || undefined;
	this.ATTRIBUTE_WRITING_DIRECTION_NATURAL = properties.ATTRIBUTE_WRITING_DIRECTION_NATURAL || undefined;
	this.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE = properties.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE || undefined;
	this.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT = properties.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT || undefined;
	this.AUTODETECT_ADDRESS = properties.AUTODETECT_ADDRESS || undefined;
	this.AUTODETECT_ALL = properties.AUTODETECT_ALL || undefined;
	this.AUTODETECT_CALENDAR = properties.AUTODETECT_CALENDAR || undefined;
	this.AUTODETECT_LINK = properties.AUTODETECT_LINK || undefined;
	this.AUTODETECT_NONE = properties.AUTODETECT_NONE || undefined;
	this.AUTODETECT_PHONE = properties.AUTODETECT_PHONE || undefined;
	this.AUTOLINK_ALL = properties.AUTOLINK_ALL || undefined;
	this.AUTOLINK_CALENDAR = properties.AUTOLINK_CALENDAR || undefined;
	this.AUTOLINK_EMAIL_ADDRESSES = properties.AUTOLINK_EMAIL_ADDRESSES || undefined;
	this.AUTOLINK_MAP_ADDRESSES = properties.AUTOLINK_MAP_ADDRESSES || undefined;
	this.AUTOLINK_NONE = properties.AUTOLINK_NONE || undefined;
	this.AUTOLINK_PHONE_NUMBERS = properties.AUTOLINK_PHONE_NUMBERS || undefined;
	this.AUTOLINK_URLS = properties.AUTOLINK_URLS || undefined;
	this.BLEND_MODE_CLEAR = properties.BLEND_MODE_CLEAR || undefined;
	this.BLEND_MODE_COLOR = properties.BLEND_MODE_COLOR || undefined;
	this.BLEND_MODE_COLOR_BURN = properties.BLEND_MODE_COLOR_BURN || undefined;
	this.BLEND_MODE_COLOR_DODGE = properties.BLEND_MODE_COLOR_DODGE || undefined;
	this.BLEND_MODE_COPY = properties.BLEND_MODE_COPY || undefined;
	this.BLEND_MODE_DARKEN = properties.BLEND_MODE_DARKEN || undefined;
	this.BLEND_MODE_DESTINATION_ATOP = properties.BLEND_MODE_DESTINATION_ATOP || undefined;
	this.BLEND_MODE_DESTINATION_IN = properties.BLEND_MODE_DESTINATION_IN || undefined;
	this.BLEND_MODE_DESTINATION_OUT = properties.BLEND_MODE_DESTINATION_OUT || undefined;
	this.BLEND_MODE_DESTINATION_OVER = properties.BLEND_MODE_DESTINATION_OVER || undefined;
	this.BLEND_MODE_DIFFERENCE = properties.BLEND_MODE_DIFFERENCE || undefined;
	this.BLEND_MODE_EXCLUSION = properties.BLEND_MODE_EXCLUSION || undefined;
	this.BLEND_MODE_HARD_LIGHT = properties.BLEND_MODE_HARD_LIGHT || undefined;
	this.BLEND_MODE_HUE = properties.BLEND_MODE_HUE || undefined;
	this.BLEND_MODE_LIGHTEN = properties.BLEND_MODE_LIGHTEN || undefined;
	this.BLEND_MODE_LUMINOSITY = properties.BLEND_MODE_LUMINOSITY || undefined;
	this.BLEND_MODE_MULTIPLY = properties.BLEND_MODE_MULTIPLY || undefined;
	this.BLEND_MODE_NORMAL = properties.BLEND_MODE_NORMAL || undefined;
	this.BLEND_MODE_OVERLAY = properties.BLEND_MODE_OVERLAY || undefined;
	this.BLEND_MODE_PLUS_DARKER = properties.BLEND_MODE_PLUS_DARKER || undefined;
	this.BLEND_MODE_PLUS_LIGHTER = properties.BLEND_MODE_PLUS_LIGHTER || undefined;
	this.BLEND_MODE_SATURATION = properties.BLEND_MODE_SATURATION || undefined;
	this.BLEND_MODE_SCREEN = properties.BLEND_MODE_SCREEN || undefined;
	this.BLEND_MODE_SOFT_LIGHT = properties.BLEND_MODE_SOFT_LIGHT || undefined;
	this.BLEND_MODE_SOURCE_ATOP = properties.BLEND_MODE_SOURCE_ATOP || undefined;
	this.BLEND_MODE_SOURCE_IN = properties.BLEND_MODE_SOURCE_IN || undefined;
	this.BLEND_MODE_SOURCE_OUT = properties.BLEND_MODE_SOURCE_OUT || undefined;
	this.BLEND_MODE_XOR = properties.BLEND_MODE_XOR || undefined;
	this.EXTEND_EDGE_ALL = properties.EXTEND_EDGE_ALL || undefined;
	this.EXTEND_EDGE_BOTTOM = properties.EXTEND_EDGE_BOTTOM || undefined;
	this.EXTEND_EDGE_LEFT = properties.EXTEND_EDGE_LEFT || undefined;
	this.EXTEND_EDGE_NONE = properties.EXTEND_EDGE_NONE || undefined;
	this.EXTEND_EDGE_RIGHT = properties.EXTEND_EDGE_RIGHT || undefined;
	this.EXTEND_EDGE_TOP = properties.EXTEND_EDGE_TOP || undefined;
	this.FACE_DOWN = properties.FACE_DOWN || undefined;
	this.FACE_UP = properties.FACE_UP || undefined;
	this.FILL = properties.FILL || undefined;
	this.INHERIT = properties.INHERIT || undefined;
	this.INPUT_BORDERSTYLE_BEZEL = properties.INPUT_BORDERSTYLE_BEZEL || undefined;
	this.INPUT_BORDERSTYLE_LINE = properties.INPUT_BORDERSTYLE_LINE || undefined;
	this.INPUT_BORDERSTYLE_NONE = properties.INPUT_BORDERSTYLE_NONE || undefined;
	this.INPUT_BORDERSTYLE_ROUNDED = properties.INPUT_BORDERSTYLE_ROUNDED || undefined;
	this.INPUT_BUTTONMODE_ALWAYS = properties.INPUT_BUTTONMODE_ALWAYS || undefined;
	this.INPUT_BUTTONMODE_NEVER = properties.INPUT_BUTTONMODE_NEVER || undefined;
	this.INPUT_BUTTONMODE_ONBLUR = properties.INPUT_BUTTONMODE_ONBLUR || undefined;
	this.INPUT_BUTTONMODE_ONFOCUS = properties.INPUT_BUTTONMODE_ONFOCUS || undefined;
	this.KEYBOARD_APPEARANCE_ALERT = properties.KEYBOARD_APPEARANCE_ALERT || undefined;
	this.KEYBOARD_APPEARANCE_DEFAULT = properties.KEYBOARD_APPEARANCE_DEFAULT || undefined;
	this.KEYBOARD_ASCII = properties.KEYBOARD_ASCII || undefined;
	this.KEYBOARD_DECIMAL_PAD = properties.KEYBOARD_DECIMAL_PAD || undefined;
	this.KEYBOARD_DEFAULT = properties.KEYBOARD_DEFAULT || undefined;
	this.KEYBOARD_EMAIL = properties.KEYBOARD_EMAIL || undefined;
	this.KEYBOARD_NAMEPHONE_PAD = properties.KEYBOARD_NAMEPHONE_PAD || undefined;
	this.KEYBOARD_NUMBERS_PUNCTUATION = properties.KEYBOARD_NUMBERS_PUNCTUATION || undefined;
	this.KEYBOARD_NUMBER_PAD = properties.KEYBOARD_NUMBER_PAD || undefined;
	this.KEYBOARD_PHONE_PAD = properties.KEYBOARD_PHONE_PAD || undefined;
	this.KEYBOARD_URL = properties.KEYBOARD_URL || undefined;
	this.LANDSCAPE_LEFT = properties.LANDSCAPE_LEFT || undefined;
	this.LANDSCAPE_RIGHT = properties.LANDSCAPE_RIGHT || undefined;
	this.LIST_ACCESSORY_TYPE_CHECKMARK = properties.LIST_ACCESSORY_TYPE_CHECKMARK || undefined;
	this.LIST_ACCESSORY_TYPE_DETAIL = properties.LIST_ACCESSORY_TYPE_DETAIL || undefined;
	this.LIST_ACCESSORY_TYPE_DISCLOSURE = properties.LIST_ACCESSORY_TYPE_DISCLOSURE || undefined;
	this.LIST_ACCESSORY_TYPE_NONE = properties.LIST_ACCESSORY_TYPE_NONE || undefined;
	this.LIST_ITEM_TEMPLATE_CONTACTS = properties.LIST_ITEM_TEMPLATE_CONTACTS || undefined;
	this.LIST_ITEM_TEMPLATE_DEFAULT = properties.LIST_ITEM_TEMPLATE_DEFAULT || undefined;
	this.LIST_ITEM_TEMPLATE_SETTINGS = properties.LIST_ITEM_TEMPLATE_SETTINGS || undefined;
	this.LIST_ITEM_TEMPLATE_SUBTITLE = properties.LIST_ITEM_TEMPLATE_SUBTITLE || undefined;
	this.NOTIFICATION_DURATION_LONG = properties.NOTIFICATION_DURATION_LONG || undefined;
	this.NOTIFICATION_DURATION_SHORT = properties.NOTIFICATION_DURATION_SHORT || undefined;
	this.PICKER_TYPE_COUNT_DOWN_TIMER = properties.PICKER_TYPE_COUNT_DOWN_TIMER || undefined;
	this.PICKER_TYPE_DATE = properties.PICKER_TYPE_DATE || undefined;
	this.PICKER_TYPE_DATE_AND_TIME = properties.PICKER_TYPE_DATE_AND_TIME || undefined;
	this.PICKER_TYPE_PLAIN = properties.PICKER_TYPE_PLAIN || undefined;
	this.PICKER_TYPE_TIME = properties.PICKER_TYPE_TIME || undefined;
	this.PORTRAIT = properties.PORTRAIT || undefined;
	this.RETURNKEY_DEFAULT = properties.RETURNKEY_DEFAULT || undefined;
	this.RETURNKEY_DONE = properties.RETURNKEY_DONE || undefined;
	this.RETURNKEY_EMERGENCY_CALL = properties.RETURNKEY_EMERGENCY_CALL || undefined;
	this.RETURNKEY_GO = properties.RETURNKEY_GO || undefined;
	this.RETURNKEY_GOOGLE = properties.RETURNKEY_GOOGLE || undefined;
	this.RETURNKEY_JOIN = properties.RETURNKEY_JOIN || undefined;
	this.RETURNKEY_NEXT = properties.RETURNKEY_NEXT || undefined;
	this.RETURNKEY_ROUTE = properties.RETURNKEY_ROUTE || undefined;
	this.RETURNKEY_SEARCH = properties.RETURNKEY_SEARCH || undefined;
	this.RETURNKEY_SEND = properties.RETURNKEY_SEND || undefined;
	this.RETURNKEY_YAHOO = properties.RETURNKEY_YAHOO || undefined;
	this.SIZE = properties.SIZE || undefined;
	this.TEXT_ALIGNMENT_CENTER = properties.TEXT_ALIGNMENT_CENTER || undefined;
	this.TEXT_ALIGNMENT_LEFT = properties.TEXT_ALIGNMENT_LEFT || undefined;
	this.TEXT_ALIGNMENT_RIGHT = properties.TEXT_ALIGNMENT_RIGHT || undefined;
	this.TEXT_AUTOCAPITALIZATION_ALL = properties.TEXT_AUTOCAPITALIZATION_ALL || undefined;
	this.TEXT_AUTOCAPITALIZATION_NONE = properties.TEXT_AUTOCAPITALIZATION_NONE || undefined;
	this.TEXT_AUTOCAPITALIZATION_SENTENCES = properties.TEXT_AUTOCAPITALIZATION_SENTENCES || undefined;
	this.TEXT_AUTOCAPITALIZATION_WORDS = properties.TEXT_AUTOCAPITALIZATION_WORDS || undefined;
	this.TEXT_STYLE_BODY = properties.TEXT_STYLE_BODY || undefined;
	this.TEXT_STYLE_CAPTION1 = properties.TEXT_STYLE_CAPTION1 || undefined;
	this.TEXT_STYLE_CAPTION2 = properties.TEXT_STYLE_CAPTION2 || undefined;
	this.TEXT_STYLE_FOOTNOTE = properties.TEXT_STYLE_FOOTNOTE || undefined;
	this.TEXT_STYLE_HEADLINE = properties.TEXT_STYLE_HEADLINE || undefined;
	this.TEXT_STYLE_SUBHEADLINE = properties.TEXT_STYLE_SUBHEADLINE || undefined;
	this.TEXT_VERTICAL_ALIGNMENT_BOTTOM = properties.TEXT_VERTICAL_ALIGNMENT_BOTTOM || undefined;
	this.TEXT_VERTICAL_ALIGNMENT_CENTER = properties.TEXT_VERTICAL_ALIGNMENT_CENTER || undefined;
	this.TEXT_VERTICAL_ALIGNMENT_TOP = properties.TEXT_VERTICAL_ALIGNMENT_TOP || undefined;
	this.UNIT_CM = properties.UNIT_CM || undefined;
	this.UNIT_DIP = properties.UNIT_DIP || undefined;
	this.UNIT_IN = properties.UNIT_IN || undefined;
	this.UNIT_MM = properties.UNIT_MM || undefined;
	this.UNIT_PX = properties.UNIT_PX || undefined;
	this.UNKNOWN = properties.UNKNOWN || undefined;
	this.UPSIDE_PORTRAIT = properties.UPSIDE_PORTRAIT || undefined;
	this.URL_ERROR_AUTHENTICATION = properties.URL_ERROR_AUTHENTICATION || undefined;
	this.URL_ERROR_BAD_URL = properties.URL_ERROR_BAD_URL || undefined;
	this.URL_ERROR_CONNECT = properties.URL_ERROR_CONNECT || undefined;
	this.URL_ERROR_FILE = properties.URL_ERROR_FILE || undefined;
	this.URL_ERROR_FILE_NOT_FOUND = properties.URL_ERROR_FILE_NOT_FOUND || undefined;
	this.URL_ERROR_HOST_LOOKUP = properties.URL_ERROR_HOST_LOOKUP || undefined;
	this.URL_ERROR_REDIRECT_LOOP = properties.URL_ERROR_REDIRECT_LOOP || undefined;
	this.URL_ERROR_SSL_FAILED = properties.URL_ERROR_SSL_FAILED || undefined;
	this.URL_ERROR_TIMEOUT = properties.URL_ERROR_TIMEOUT || undefined;
	this.URL_ERROR_UNKNOWN = properties.URL_ERROR_UNKNOWN || undefined;
	this.URL_ERROR_UNSUPPORTED_SCHEME = properties.URL_ERROR_UNSUPPORTED_SCHEME || undefined;
	this.apiName = 'Titanium.UI';
	this.backgroundColor = properties.backgroundColor || undefined;
	this.backgroundImage = properties.backgroundImage || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.currentTab = properties.currentTab || undefined;
	this.currentWindow = properties.currentWindow || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.orientation = properties.orientation || undefined;
	return this;
}
UI.prototype.addEventListener = function () {
};
UI.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
UI.prototype.convertUnits = function () {
	return 0;
};
UI.prototype.create2DMatrix = function (params) {
	var TwoDMatrix = require('./UI/2DMatrix');
	return TwoDMatrix(params);
};
UI.prototype.create3DMatrix = function (params) {
	var ThreeDMatrix = require('./UI/3DMatrix');
	return ThreeDMatrix(params);
};
UI.prototype.createActivityIndicator = function (params) {
	var ActivityIndicator = require('./UI/ActivityIndicator');
	return ActivityIndicator(params);
};
UI.prototype.createAlertDialog = function (params) {
	var AlertDialog = require('./UI/AlertDialog');
	return AlertDialog(params);
};
UI.prototype.createAnimation = function (params) {
	var Animation = require('./UI/Animation');
	return Animation(params);
};
UI.prototype.createAttributedString = function (params) {
	var AttributedString = require('./UI/AttributedString');
	return AttributedString(params);
};
UI.prototype.createButton = function (params) {
	var Button = require('./UI/Button');
	return Button(params);
};
UI.prototype.createButtonBar = function (params) {
	var ButtonBar = require('./UI/ButtonBar');
	return ButtonBar(params);
};
UI.prototype.createCoverFlowView = function (params) {
	var CoverFlowView = require('./UI/CoverFlowView');
	return CoverFlowView(params);
};
UI.prototype.createDashboardItem = function (params) {
	var DashboardItem = require('./UI/DashboardItem');
	return DashboardItem(params);
};
UI.prototype.createDashboardView = function (params) {
	var DashboardView = require('./UI/DashboardView');
	return DashboardView(params);
};
UI.prototype.createEmailDialog = function (params) {
	var EmailDialog = require('./UI/EmailDialog');
	return EmailDialog(params);
};
UI.prototype.createImageView = function (params) {
	var ImageView = require('./UI/ImageView');
	return ImageView(params);
};
UI.prototype.createLabel = function (params) {
	var Label = require('./UI/Label');
	return Label(params);
};
UI.prototype.createListSection = function (params) {
	var ListSection = require('./UI/ListSection');
	return ListSection(params);
};
UI.prototype.createListView = function (params) {
	var ListView = require('./UI/ListView');
	return ListView(params);
};
UI.prototype.createMaskedImage = function (params) {
	var MaskedImage = require('./UI/MaskedImage');
	return MaskedImage(params);
};
UI.prototype.createNotification = function (params) {
	var Notification = require('./UI/Notification');
	return Notification(params);
};
UI.prototype.createOptionDialog = function (params) {
	var OptionDialog = require('./UI/OptionDialog');
	return OptionDialog(params);
};
UI.prototype.createPicker = function (params) {
	var Picker = require('./UI/Picker');
	return Picker(params);
};
UI.prototype.createPickerColumn = function (params) {
	var PickerColumn = require('./UI/PickerColumn');
	return PickerColumn(params);
};
UI.prototype.createPickerRow = function (params) {
	var PickerRow = require('./UI/PickerRow');
	return PickerRow(params);
};
UI.prototype.createProgressBar = function (params) {
	var ProgressBar = require('./UI/ProgressBar');
	return ProgressBar(params);
};
UI.prototype.createRefreshControl = function (params) {
	var RefreshControl = require('./UI/RefreshControl');
	return RefreshControl(params);
};
UI.prototype.createScrollView = function (params) {
	var ScrollView = require('./UI/ScrollView');
	return ScrollView(params);
};
UI.prototype.createScrollableView = function (params) {
	var ScrollableView = require('./UI/ScrollableView');
	return ScrollableView(params);
};
UI.prototype.createSearchBar = function (params) {
	var SearchBar = require('./UI/SearchBar');
	return SearchBar(params);
};
UI.prototype.createSlider = function (params) {
	var Slider = require('./UI/Slider');
	return Slider(params);
};
UI.prototype.createSwitch = function (params) {
	var Switch = require('./UI/Switch');
	return Switch(params);
};
UI.prototype.createTab = function (params) {
	var Tab = require('./UI/Tab');
	return Tab(params);
};
UI.prototype.createTabGroup = function (params) {
	var TabGroup = require('./UI/TabGroup');
	return TabGroup(params);
};
UI.prototype.createTabbedBar = function (params) {
	var TabbedBar = require('./UI/TabbedBar');
	return TabbedBar(params);
};
UI.prototype.createTableView = function (params) {
	var TableView = require('./UI/TableView');
	return TableView(params);
};
UI.prototype.createTableViewRow = function (params) {
	var TableViewRow = require('./UI/TableViewRow');
	return TableViewRow(params);
};
UI.prototype.createTableViewSection = function (params) {
	var TableViewSection = require('./UI/TableViewSection');
	return TableViewSection(params);
};
UI.prototype.createTextArea = function (params) {
	var TextArea = require('./UI/TextArea');
	return TextArea(params);
};
UI.prototype.createTextField = function (params) {
	var TextField = require('./UI/TextField');
	return TextField(params);
};
UI.prototype.createToolbar = function (params) {
	var Toolbar = require('./UI/Toolbar');
	return Toolbar(params);
};
UI.prototype.createView = function (params) {
	var View = require('./UI/View');
	return View(params);
};
UI.prototype.createWebView = function (params) {
	var WebView = require('./UI/WebView');
	return WebView(params);
};
UI.prototype.createWindow = function (params) {
	var Window = require('./UI/Window');
	return Window(params);
};
UI.prototype.fireEvent = function () {
};
UI.prototype.getApiName = function () {
	return this.apiName;
};
UI.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
UI.prototype.getBackgroundImage = function () {
	return this.backgroundImage;
};
UI.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
UI.prototype.getCurrentTab = function () {
	return this.currentTab;
};
UI.prototype.getCurrentWindow = function () {
	return this.currentWindow;
};
UI.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
UI.prototype.getOrientation = function () {
	return this.orientation;
};
UI.prototype.removeEventListener = function () {
};
UI.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
UI.prototype.setBackgroundImage = function (property) {
	this.backgroundImage = property;
};
UI.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
UI.prototype.setCurrentTab = function (property) {
	this.currentTab = property;
};
UI.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
UI.prototype.setOrientation = function (property) {
	this.orientation = property;
};
module.exports = function (properties) {
	return new UI(properties);
};