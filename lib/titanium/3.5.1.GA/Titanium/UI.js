function UI(properties) {
	properties = properties || {};
	this.ANIMATION_CURVE_EASE_IN = properties.ANIMATION_CURVE_EASE_IN || 0;
	this.ANIMATION_CURVE_EASE_IN_OUT = properties.ANIMATION_CURVE_EASE_IN_OUT || 0;
	this.ANIMATION_CURVE_EASE_OUT = properties.ANIMATION_CURVE_EASE_OUT || 0;
	this.ANIMATION_CURVE_LINEAR = properties.ANIMATION_CURVE_LINEAR || 0;
	if (properties.AUTODETECT_ADDRESS) {
		throw new Error('Ti.UI.AUTODETECT_ADDRESS was deprecated, since 1.8.0');
	}
	if (properties.AUTODETECT_ALL) {
		throw new Error('Ti.UI.AUTODETECT_ALL was deprecated, since 1.8.0');
	}
	if (properties.AUTODETECT_CALENDAR) {
		throw new Error('Ti.UI.AUTODETECT_CALENDAR was deprecated, since 1.8.0');
	}
	if (properties.AUTODETECT_LINK) {
		throw new Error('Ti.UI.AUTODETECT_LINK was deprecated, since 1.8.0');
	}
	if (properties.AUTODETECT_NONE) {
		throw new Error('Ti.UI.AUTODETECT_NONE was deprecated, since 1.8.0');
	}
	if (properties.AUTODETECT_PHONE) {
		throw new Error('Ti.UI.AUTODETECT_PHONE was deprecated, since 1.8.0');
	}
	this.AUTOLINK_ALL = properties.AUTOLINK_ALL || 0;
	this.AUTOLINK_CALENDAR = properties.AUTOLINK_CALENDAR || 0;
	this.AUTOLINK_EMAIL_ADDRESSES = properties.AUTOLINK_EMAIL_ADDRESSES || 0;
	this.AUTOLINK_MAP_ADDRESSES = properties.AUTOLINK_MAP_ADDRESSES || 0;
	this.AUTOLINK_NONE = properties.AUTOLINK_NONE || 0;
	this.AUTOLINK_PHONE_NUMBERS = properties.AUTOLINK_PHONE_NUMBERS || 0;
	this.AUTOLINK_URLS = properties.AUTOLINK_URLS || 0;
	if (properties.BLEND_MODE_CLEAR) {
		throw new Error('Ti.UI.BLEND_MODE_CLEAR was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_COLOR) {
		throw new Error('Ti.UI.BLEND_MODE_COLOR was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_COLOR_BURN) {
		throw new Error('Ti.UI.BLEND_MODE_COLOR_BURN was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_COLOR_DODGE) {
		throw new Error('Ti.UI.BLEND_MODE_COLOR_DODGE was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_COPY) {
		throw new Error('Ti.UI.BLEND_MODE_COPY was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_DARKEN) {
		throw new Error('Ti.UI.BLEND_MODE_DARKEN was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_DESTINATION_ATOP) {
		throw new Error('Ti.UI.BLEND_MODE_DESTINATION_ATOP was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_DESTINATION_IN) {
		throw new Error('Ti.UI.BLEND_MODE_DESTINATION_IN was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_DESTINATION_OUT) {
		throw new Error('Ti.UI.BLEND_MODE_DESTINATION_OUT was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_DESTINATION_OVER) {
		throw new Error('Ti.UI.BLEND_MODE_DESTINATION_OVER was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_DIFFERENCE) {
		throw new Error('Ti.UI.BLEND_MODE_DIFFERENCE was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_EXCLUSION) {
		throw new Error('Ti.UI.BLEND_MODE_EXCLUSION was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_HARD_LIGHT) {
		throw new Error('Ti.UI.BLEND_MODE_HARD_LIGHT was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_HUE) {
		throw new Error('Ti.UI.BLEND_MODE_HUE was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_LIGHTEN) {
		throw new Error('Ti.UI.BLEND_MODE_LIGHTEN was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_LUMINOSITY) {
		throw new Error('Ti.UI.BLEND_MODE_LUMINOSITY was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_MULTIPLY) {
		throw new Error('Ti.UI.BLEND_MODE_MULTIPLY was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_NORMAL) {
		throw new Error('Ti.UI.BLEND_MODE_NORMAL was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_OVERLAY) {
		throw new Error('Ti.UI.BLEND_MODE_OVERLAY was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_PLUS_DARKER) {
		throw new Error('Ti.UI.BLEND_MODE_PLUS_DARKER was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_PLUS_LIGHTER) {
		throw new Error('Ti.UI.BLEND_MODE_PLUS_LIGHTER was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_SATURATION) {
		throw new Error('Ti.UI.BLEND_MODE_SATURATION was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_SCREEN) {
		throw new Error('Ti.UI.BLEND_MODE_SCREEN was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_SOFT_LIGHT) {
		throw new Error('Ti.UI.BLEND_MODE_SOFT_LIGHT was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_SOURCE_ATOP) {
		throw new Error('Ti.UI.BLEND_MODE_SOURCE_ATOP was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_SOURCE_IN) {
		throw new Error('Ti.UI.BLEND_MODE_SOURCE_IN was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_SOURCE_OUT) {
		throw new Error('Ti.UI.BLEND_MODE_SOURCE_OUT was deprecated, since 1.8.0');
	}
	if (properties.BLEND_MODE_XOR) {
		throw new Error('Ti.UI.BLEND_MODE_XOR was deprecated, since 1.8.0');
	}
	this.EXTEND_EDGE_ALL = properties.EXTEND_EDGE_ALL || 0;
	this.EXTEND_EDGE_BOTTOM = properties.EXTEND_EDGE_BOTTOM || 0;
	this.EXTEND_EDGE_LEFT = properties.EXTEND_EDGE_LEFT || 0;
	this.EXTEND_EDGE_NONE = properties.EXTEND_EDGE_NONE || 0;
	this.EXTEND_EDGE_RIGHT = properties.EXTEND_EDGE_RIGHT || 0;
	this.EXTEND_EDGE_TOP = properties.EXTEND_EDGE_TOP || 0;
	this.FACE_DOWN = properties.FACE_DOWN || 0;
	this.FACE_UP = properties.FACE_UP || 0;
	this.FILL = properties.FILL || '';
	this.INHERIT = properties.INHERIT || '';
	this.INPUT_BORDERSTYLE_BEZEL = properties.INPUT_BORDERSTYLE_BEZEL || 0;
	this.INPUT_BORDERSTYLE_LINE = properties.INPUT_BORDERSTYLE_LINE || 0;
	this.INPUT_BORDERSTYLE_NONE = properties.INPUT_BORDERSTYLE_NONE || 0;
	this.INPUT_BORDERSTYLE_ROUNDED = properties.INPUT_BORDERSTYLE_ROUNDED || 0;
	this.INPUT_BUTTONMODE_ALWAYS = properties.INPUT_BUTTONMODE_ALWAYS || 0;
	this.INPUT_BUTTONMODE_NEVER = properties.INPUT_BUTTONMODE_NEVER || 0;
	this.INPUT_BUTTONMODE_ONBLUR = properties.INPUT_BUTTONMODE_ONBLUR || 0;
	this.INPUT_BUTTONMODE_ONFOCUS = properties.INPUT_BUTTONMODE_ONFOCUS || 0;
	this.KEYBOARD_APPEARANCE_ALERT = properties.KEYBOARD_APPEARANCE_ALERT || 0;
	this.KEYBOARD_APPEARANCE_DEFAULT = properties.KEYBOARD_APPEARANCE_DEFAULT || 0;
	this.KEYBOARD_ASCII = properties.KEYBOARD_ASCII || 0;
	this.KEYBOARD_DECIMAL_PAD = properties.KEYBOARD_DECIMAL_PAD || 0;
	this.KEYBOARD_DEFAULT = properties.KEYBOARD_DEFAULT || 0;
	this.KEYBOARD_EMAIL = properties.KEYBOARD_EMAIL || 0;
	this.KEYBOARD_NAMEPHONE_PAD = properties.KEYBOARD_NAMEPHONE_PAD || 0;
	this.KEYBOARD_NUMBERS_PUNCTUATION = properties.KEYBOARD_NUMBERS_PUNCTUATION || 0;
	this.KEYBOARD_NUMBER_PAD = properties.KEYBOARD_NUMBER_PAD || 0;
	this.KEYBOARD_PHONE_PAD = properties.KEYBOARD_PHONE_PAD || 0;
	this.KEYBOARD_URL = properties.KEYBOARD_URL || 0;
	this.LANDSCAPE_LEFT = properties.LANDSCAPE_LEFT || 0;
	this.LANDSCAPE_RIGHT = properties.LANDSCAPE_RIGHT || 0;
	this.LIST_ACCESSORY_TYPE_CHECKMARK = properties.LIST_ACCESSORY_TYPE_CHECKMARK || 0;
	this.LIST_ACCESSORY_TYPE_DETAIL = properties.LIST_ACCESSORY_TYPE_DETAIL || 0;
	this.LIST_ACCESSORY_TYPE_DISCLOSURE = properties.LIST_ACCESSORY_TYPE_DISCLOSURE || 0;
	this.LIST_ACCESSORY_TYPE_NONE = properties.LIST_ACCESSORY_TYPE_NONE || 0;
	this.LIST_ITEM_TEMPLATE_CONTACTS = properties.LIST_ITEM_TEMPLATE_CONTACTS || 0;
	this.LIST_ITEM_TEMPLATE_DEFAULT = properties.LIST_ITEM_TEMPLATE_DEFAULT || 0;
	this.LIST_ITEM_TEMPLATE_SETTINGS = properties.LIST_ITEM_TEMPLATE_SETTINGS || 0;
	this.LIST_ITEM_TEMPLATE_SUBTITLE = properties.LIST_ITEM_TEMPLATE_SUBTITLE || 0;
	this.NOTIFICATION_DURATION_LONG = properties.NOTIFICATION_DURATION_LONG || 0;
	this.NOTIFICATION_DURATION_SHORT = properties.NOTIFICATION_DURATION_SHORT || 0;
	this.PICKER_TYPE_COUNT_DOWN_TIMER = properties.PICKER_TYPE_COUNT_DOWN_TIMER || 0;
	this.PICKER_TYPE_DATE = properties.PICKER_TYPE_DATE || 0;
	this.PICKER_TYPE_DATE_AND_TIME = properties.PICKER_TYPE_DATE_AND_TIME || 0;
	this.PICKER_TYPE_PLAIN = properties.PICKER_TYPE_PLAIN || 0;
	this.PICKER_TYPE_TIME = properties.PICKER_TYPE_TIME || 0;
	this.PORTRAIT = properties.PORTRAIT || 0;
	this.RETURNKEY_DEFAULT = properties.RETURNKEY_DEFAULT || 0;
	this.RETURNKEY_DONE = properties.RETURNKEY_DONE || 0;
	this.RETURNKEY_EMERGENCY_CALL = properties.RETURNKEY_EMERGENCY_CALL || 0;
	this.RETURNKEY_GO = properties.RETURNKEY_GO || 0;
	this.RETURNKEY_GOOGLE = properties.RETURNKEY_GOOGLE || 0;
	this.RETURNKEY_JOIN = properties.RETURNKEY_JOIN || 0;
	this.RETURNKEY_NEXT = properties.RETURNKEY_NEXT || 0;
	this.RETURNKEY_ROUTE = properties.RETURNKEY_ROUTE || 0;
	this.RETURNKEY_SEARCH = properties.RETURNKEY_SEARCH || 0;
	this.RETURNKEY_SEND = properties.RETURNKEY_SEND || 0;
	this.RETURNKEY_YAHOO = properties.RETURNKEY_YAHOO || 0;
	this.SIZE = properties.SIZE || '';
	this.TEXT_ALIGNMENT_CENTER = properties.TEXT_ALIGNMENT_CENTER || 0;
	this.TEXT_ALIGNMENT_LEFT = properties.TEXT_ALIGNMENT_LEFT || 0;
	this.TEXT_ALIGNMENT_RIGHT = properties.TEXT_ALIGNMENT_RIGHT || 0;
	this.TEXT_AUTOCAPITALIZATION_ALL = properties.TEXT_AUTOCAPITALIZATION_ALL || 0;
	this.TEXT_AUTOCAPITALIZATION_NONE = properties.TEXT_AUTOCAPITALIZATION_NONE || 0;
	this.TEXT_AUTOCAPITALIZATION_SENTENCES = properties.TEXT_AUTOCAPITALIZATION_SENTENCES || 0;
	this.TEXT_AUTOCAPITALIZATION_WORDS = properties.TEXT_AUTOCAPITALIZATION_WORDS || 0;
	this.TEXT_STYLE_BODY = properties.TEXT_STYLE_BODY || '';
	this.TEXT_STYLE_CAPTION1 = properties.TEXT_STYLE_CAPTION1 || '';
	this.TEXT_STYLE_CAPTION2 = properties.TEXT_STYLE_CAPTION2 || '';
	this.TEXT_STYLE_FOOTNOTE = properties.TEXT_STYLE_FOOTNOTE || '';
	this.TEXT_STYLE_HEADLINE = properties.TEXT_STYLE_HEADLINE || '';
	this.TEXT_STYLE_SUBHEADLINE = properties.TEXT_STYLE_SUBHEADLINE || '';
	this.TEXT_VERTICAL_ALIGNMENT_BOTTOM = properties.TEXT_VERTICAL_ALIGNMENT_BOTTOM || 0;
	this.TEXT_VERTICAL_ALIGNMENT_CENTER = properties.TEXT_VERTICAL_ALIGNMENT_CENTER || 0;
	this.TEXT_VERTICAL_ALIGNMENT_TOP = properties.TEXT_VERTICAL_ALIGNMENT_TOP || 0;
	this.UNIT_CM = properties.UNIT_CM || '';
	this.UNIT_DIP = properties.UNIT_DIP || '';
	this.UNIT_IN = properties.UNIT_IN || '';
	this.UNIT_MM = properties.UNIT_MM || '';
	this.UNIT_PX = properties.UNIT_PX || '';
	this.UNKNOWN = properties.UNKNOWN || 0;
	this.UPSIDE_PORTRAIT = properties.UPSIDE_PORTRAIT || 0;
	this.URL_ERROR_AUTHENTICATION = properties.URL_ERROR_AUTHENTICATION || 0;
	this.URL_ERROR_BAD_URL = properties.URL_ERROR_BAD_URL || 0;
	this.URL_ERROR_CONNECT = properties.URL_ERROR_CONNECT || 0;
	this.URL_ERROR_FILE = properties.URL_ERROR_FILE || 0;
	this.URL_ERROR_FILE_NOT_FOUND = properties.URL_ERROR_FILE_NOT_FOUND || 0;
	this.URL_ERROR_HOST_LOOKUP = properties.URL_ERROR_HOST_LOOKUP || 0;
	this.URL_ERROR_REDIRECT_LOOP = properties.URL_ERROR_REDIRECT_LOOP || 0;
	this.URL_ERROR_SSL_FAILED = properties.URL_ERROR_SSL_FAILED || 0;
	this.URL_ERROR_TIMEOUT = properties.URL_ERROR_TIMEOUT || 0;
	this.URL_ERROR_UNKNOWN = properties.URL_ERROR_UNKNOWN || 0;
	this.URL_ERROR_UNSUPPORTED_SCHEME = properties.URL_ERROR_UNSUPPORTED_SCHEME || 0;
	this.apiName = 'Ti.UI';
	this.backgroundColor = properties.backgroundColor || '';
	this.backgroundImage = properties.backgroundImage || '';
	this.bubbleParent = properties.bubbleParent || true;
	this.currentTab = properties.currentTab || {};
	this.currentWindow = properties.currentWindow || {};
	if (properties.orientation) {
		throw new Error('Ti.UI.orientation was deprecated, since 1.7.2');
	}
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
UI.prototype.createButton = function (params) {
	var Button = require('./UI/Button');
	return Button(params);
};
UI.prototype.createButtonBar = function (params) {
	var ButtonBar = require('./UI/ButtonBar');
	return ButtonBar(params);
};
UI.prototype.createCoverFlowView = function () {
	throw new Error('Ti.UI.createCoverFlowView was deprecated, since 1.8.0');
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
UI.prototype.createSMSDialog = function (params) {
	var SMSDialog = require('./UI/SMSDialog');
	return SMSDialog(params);
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
UI.prototype.createTabbedBar = function () {
	throw new Error('Ti.UI.createTabbedBar was deprecated, since 1.8.0');
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
UI.prototype.createToolbar = function () {
	throw new Error('Ti.UI.createToolbar was deprecated, since 1.8.0');
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
	return '';
};
UI.prototype.getBackgroundColor = function () {
	return '';
};
UI.prototype.getBackgroundImage = function () {
	return '';
};
UI.prototype.getBubbleParent = function () {
	return true;
};
UI.prototype.getCurrentTab = function () {
	return {};
};
UI.prototype.getCurrentWindow = function () {
	return {};
};
UI.prototype.getOrientation = function () {
	throw new Error('Ti.UI.getOrientation was deprecated, since 1.7.2');
};
UI.prototype.removeEventListener = function () {
};
UI.prototype.setBackgroundColor = function () {
};
UI.prototype.setBackgroundImage = function () {
};
UI.prototype.setBubbleParent = function () {
};
UI.prototype.setCurrentTab = function () {
};
UI.prototype.setOrientation = function () {
	throw new Error('Ti.UI.setOrientation was deprecated, since 1.7.2');
};
module.exports = function (properties) {
	return new UI(properties);
};