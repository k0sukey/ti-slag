var crypto = require('crypto');
function SystemIcon(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'ACCEPT',
			'ACCOUNT',
			'ADD',
			'ADDFRIEND',
			'ADMIN',
			'ALIGNCENTER',
			'ALIGNLEFT',
			'ALIGNRIGHT',
			'ALLAPPS',
			'ATTACH',
			'ATTACHCAMERA',
			'AUDIO',
			'BACK',
			'BACKTOWINDOW',
			'BLOCKCONTACT',
			'BOLD',
			'BOOKMARKS',
			'BROWSEPHOTOS',
			'BULLETS',
			'CALCULATOR',
			'CALENDAR',
			'CALENDARDAY',
			'CALENDARREPLY',
			'CALENDARWEEK',
			'CAMERA',
			'CANCEL',
			'CAPTION',
			'CELLPHONE',
			'CHARACTER',
			'CLEAR',
			'CLEARSELECTION',
			'CLOCK',
			'CLOSEDCAPTION',
			'CLOSEPANE',
			'COMMENT',
			'CONTACT',
			'CONTACT2',
			'CONTACTINFO',
			'CONTACTPRESENCE',
			'COPY',
			'CROP',
			'CUT',
			'DELETE',
			'DIRECTIONS',
			'DISABLEUPDATES',
			'DISCONNECTDRIVE',
			'DISLIKE',
			'DOCKBOTTOM',
			'DOCKLEFT',
			'DOCKRIGHT',
			'DOCUMENT',
			'DOWNLOAD',
			'EDIT',
			'EMOJI',
			'EMOJI2',
			'FAVORITE',
			'FILTER',
			'FIND',
			'FLAG',
			'FOLDER',
			'FONT',
			'FONTCOLOR',
			'FONTDECREASE',
			'FONTINCREASE',
			'FONTSIZE',
			'FORWARD',
			'FOURBARS',
			'FULLSCREEN',
			'GLOBE',
			'GO',
			'GOTOSTART',
			'GOTOTODAY',
			'HANGUP',
			'HELP',
			'HIDEBCC',
			'HIGHLIGHT',
			'HOME',
			'IMPORT',
			'IMPORTALL',
			'IMPORTANT',
			'ITALIC',
			'KEYBOARD',
			'LEAVECHAT',
			'LIBRARY',
			'LIKE',
			'LIKEDISLIKE',
			'LINK',
			'LIST',
			'MAIL',
			'MAILFILLED',
			'MAILFORWARD',
			'MAILREPLY',
			'MAILREPLYALL',
			'MANAGE',
			'MAP',
			'MAPDRIVE',
			'MAPPIN',
			'MEMO',
			'MESSAGE',
			'MICROPHONE',
			'MORE',
			'MOVETOFOLDER',
			'MUSICINFO',
			'MUTE',
			'NEWFOLDER',
			'NEWWINDOW',
			'NEXT',
			'ONEBAR',
			'OPENFILE',
			'OPENLOCAL',
			'OPENPANE',
			'OPENWITH',
			'ORIENTATION',
			'OTHERUSER',
			'OUTLINESTAR',
			'PAGE',
			'PAGE2',
			'PASTE',
			'PAUSE',
			'PEOPLE',
			'PERMISSIONS',
			'PHONE',
			'PHONEBOOK',
			'PICTURES',
			'PIN',
			'PLACEHOLDER',
			'PLAY',
			'POSTUPDATE',
			'PREVIEW',
			'PREVIEWLINK',
			'PREVIOUS',
			'PRIORITY',
			'PROTECTEDDOCUMENT',
			'READ',
			'REDO',
			'REFRESH',
			'REMOTE',
			'REMOVE',
			'RENAME',
			'REPAIR',
			'REPEATALL',
			'REPEATONE',
			'REPORTHACKED',
			'RESHARE',
			'ROTATE',
			'ROTATECAMERA',
			'SAVE',
			'SAVELOCAL',
			'SCAN',
			'SELECTALL',
			'SEND',
			'SETLOCKSCREEN',
			'SETTILE',
			'SETTING',
			'SHOP',
			'SHOWBCC',
			'SHOWRESULTS',
			'SHUFFLE',
			'SLIDESHOW',
			'SOLIDSTAR',
			'SORT',
			'STOP',
			'STOPSLIDESHOW',
			'STREET',
			'SWITCH',
			'SWITCHAPPS',
			'SYNC',
			'SYNCFOLDER',
			'TAG',
			'TARGET',
			'THREEBARS',
			'TOUCHPOINTER',
			'TRIM',
			'TWOBARS',
			'TWOPAGE',
			'UNDERLINE',
			'UNDO',
			'UNFAVORITE',
			'UNPIN',
			'UNSYNCFOLDER',
			'UP',
			'UPLOAD',
			'VIDEO',
			'VIDEOCHAT',
			'VIEW',
			'VIEWALL',
			'VOLUME',
			'WEBCAM',
			'WORLD',
			'ZEROBARS',
			'ZOOM',
			'ZOOMIN',
			'ZOOMOUT',
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
	if (__SLAG__properties.ACCEPT) {
		throw new Error('Ti.UI.Windows.SystemIcon.ACCEPT is read only property');
	}
	this.ACCEPT = 0;
	if (__SLAG__properties.ACCOUNT) {
		throw new Error('Ti.UI.Windows.SystemIcon.ACCOUNT is read only property');
	}
	this.ACCOUNT = 0;
	if (__SLAG__properties.ADD) {
		throw new Error('Ti.UI.Windows.SystemIcon.ADD is read only property');
	}
	this.ADD = 0;
	if (__SLAG__properties.ADDFRIEND) {
		throw new Error('Ti.UI.Windows.SystemIcon.ADDFRIEND is read only property');
	}
	this.ADDFRIEND = 0;
	if (__SLAG__properties.ADMIN) {
		throw new Error('Ti.UI.Windows.SystemIcon.ADMIN is read only property');
	}
	this.ADMIN = 0;
	if (__SLAG__properties.ALIGNCENTER) {
		throw new Error('Ti.UI.Windows.SystemIcon.ALIGNCENTER is read only property');
	}
	this.ALIGNCENTER = 0;
	if (__SLAG__properties.ALIGNLEFT) {
		throw new Error('Ti.UI.Windows.SystemIcon.ALIGNLEFT is read only property');
	}
	this.ALIGNLEFT = 0;
	if (__SLAG__properties.ALIGNRIGHT) {
		throw new Error('Ti.UI.Windows.SystemIcon.ALIGNRIGHT is read only property');
	}
	this.ALIGNRIGHT = 0;
	if (__SLAG__properties.ALLAPPS) {
		throw new Error('Ti.UI.Windows.SystemIcon.ALLAPPS is read only property');
	}
	this.ALLAPPS = 0;
	if (__SLAG__properties.ATTACH) {
		throw new Error('Ti.UI.Windows.SystemIcon.ATTACH is read only property');
	}
	this.ATTACH = 0;
	if (__SLAG__properties.ATTACHCAMERA) {
		throw new Error('Ti.UI.Windows.SystemIcon.ATTACHCAMERA is read only property');
	}
	this.ATTACHCAMERA = 0;
	if (__SLAG__properties.AUDIO) {
		throw new Error('Ti.UI.Windows.SystemIcon.AUDIO is read only property');
	}
	this.AUDIO = 0;
	if (__SLAG__properties.BACK) {
		throw new Error('Ti.UI.Windows.SystemIcon.BACK is read only property');
	}
	this.BACK = 0;
	if (__SLAG__properties.BACKTOWINDOW) {
		throw new Error('Ti.UI.Windows.SystemIcon.BACKTOWINDOW is read only property');
	}
	this.BACKTOWINDOW = 0;
	if (__SLAG__properties.BLOCKCONTACT) {
		throw new Error('Ti.UI.Windows.SystemIcon.BLOCKCONTACT is read only property');
	}
	this.BLOCKCONTACT = 0;
	if (__SLAG__properties.BOLD) {
		throw new Error('Ti.UI.Windows.SystemIcon.BOLD is read only property');
	}
	this.BOLD = 0;
	if (__SLAG__properties.BOOKMARKS) {
		throw new Error('Ti.UI.Windows.SystemIcon.BOOKMARKS is read only property');
	}
	this.BOOKMARKS = 0;
	if (__SLAG__properties.BROWSEPHOTOS) {
		throw new Error('Ti.UI.Windows.SystemIcon.BROWSEPHOTOS is read only property');
	}
	this.BROWSEPHOTOS = 0;
	if (__SLAG__properties.BULLETS) {
		throw new Error('Ti.UI.Windows.SystemIcon.BULLETS is read only property');
	}
	this.BULLETS = 0;
	if (__SLAG__properties.CALCULATOR) {
		throw new Error('Ti.UI.Windows.SystemIcon.CALCULATOR is read only property');
	}
	this.CALCULATOR = 0;
	if (__SLAG__properties.CALENDAR) {
		throw new Error('Ti.UI.Windows.SystemIcon.CALENDAR is read only property');
	}
	this.CALENDAR = 0;
	if (__SLAG__properties.CALENDARDAY) {
		throw new Error('Ti.UI.Windows.SystemIcon.CALENDARDAY is read only property');
	}
	this.CALENDARDAY = 0;
	if (__SLAG__properties.CALENDARREPLY) {
		throw new Error('Ti.UI.Windows.SystemIcon.CALENDARREPLY is read only property');
	}
	this.CALENDARREPLY = 0;
	if (__SLAG__properties.CALENDARWEEK) {
		throw new Error('Ti.UI.Windows.SystemIcon.CALENDARWEEK is read only property');
	}
	this.CALENDARWEEK = 0;
	if (__SLAG__properties.CAMERA) {
		throw new Error('Ti.UI.Windows.SystemIcon.CAMERA is read only property');
	}
	this.CAMERA = 0;
	if (__SLAG__properties.CANCEL) {
		throw new Error('Ti.UI.Windows.SystemIcon.CANCEL is read only property');
	}
	this.CANCEL = 0;
	if (__SLAG__properties.CAPTION) {
		throw new Error('Ti.UI.Windows.SystemIcon.CAPTION is read only property');
	}
	this.CAPTION = 0;
	if (__SLAG__properties.CELLPHONE) {
		throw new Error('Ti.UI.Windows.SystemIcon.CELLPHONE is read only property');
	}
	this.CELLPHONE = 0;
	if (__SLAG__properties.CHARACTER) {
		throw new Error('Ti.UI.Windows.SystemIcon.CHARACTER is read only property');
	}
	this.CHARACTER = 0;
	if (__SLAG__properties.CLEAR) {
		throw new Error('Ti.UI.Windows.SystemIcon.CLEAR is read only property');
	}
	this.CLEAR = 0;
	if (__SLAG__properties.CLEARSELECTION) {
		throw new Error('Ti.UI.Windows.SystemIcon.CLEARSELECTION is read only property');
	}
	this.CLEARSELECTION = 0;
	if (__SLAG__properties.CLOCK) {
		throw new Error('Ti.UI.Windows.SystemIcon.CLOCK is read only property');
	}
	this.CLOCK = 0;
	if (__SLAG__properties.CLOSEDCAPTION) {
		throw new Error('Ti.UI.Windows.SystemIcon.CLOSEDCAPTION is read only property');
	}
	this.CLOSEDCAPTION = 0;
	if (__SLAG__properties.CLOSEPANE) {
		throw new Error('Ti.UI.Windows.SystemIcon.CLOSEPANE is read only property');
	}
	this.CLOSEPANE = 0;
	if (__SLAG__properties.COMMENT) {
		throw new Error('Ti.UI.Windows.SystemIcon.COMMENT is read only property');
	}
	this.COMMENT = 0;
	if (__SLAG__properties.CONTACT) {
		throw new Error('Ti.UI.Windows.SystemIcon.CONTACT is read only property');
	}
	this.CONTACT = 0;
	if (__SLAG__properties.CONTACT2) {
		throw new Error('Ti.UI.Windows.SystemIcon.CONTACT2 is read only property');
	}
	this.CONTACT2 = 0;
	if (__SLAG__properties.CONTACTINFO) {
		throw new Error('Ti.UI.Windows.SystemIcon.CONTACTINFO is read only property');
	}
	this.CONTACTINFO = 0;
	if (__SLAG__properties.CONTACTPRESENCE) {
		throw new Error('Ti.UI.Windows.SystemIcon.CONTACTPRESENCE is read only property');
	}
	this.CONTACTPRESENCE = 0;
	if (__SLAG__properties.COPY) {
		throw new Error('Ti.UI.Windows.SystemIcon.COPY is read only property');
	}
	this.COPY = 0;
	if (__SLAG__properties.CROP) {
		throw new Error('Ti.UI.Windows.SystemIcon.CROP is read only property');
	}
	this.CROP = 0;
	if (__SLAG__properties.CUT) {
		throw new Error('Ti.UI.Windows.SystemIcon.CUT is read only property');
	}
	this.CUT = 0;
	if (__SLAG__properties.DELETE) {
		throw new Error('Ti.UI.Windows.SystemIcon.DELETE is read only property');
	}
	this.DELETE = 0;
	if (__SLAG__properties.DIRECTIONS) {
		throw new Error('Ti.UI.Windows.SystemIcon.DIRECTIONS is read only property');
	}
	this.DIRECTIONS = 0;
	if (__SLAG__properties.DISABLEUPDATES) {
		throw new Error('Ti.UI.Windows.SystemIcon.DISABLEUPDATES is read only property');
	}
	this.DISABLEUPDATES = 0;
	if (__SLAG__properties.DISCONNECTDRIVE) {
		throw new Error('Ti.UI.Windows.SystemIcon.DISCONNECTDRIVE is read only property');
	}
	this.DISCONNECTDRIVE = 0;
	if (__SLAG__properties.DISLIKE) {
		throw new Error('Ti.UI.Windows.SystemIcon.DISLIKE is read only property');
	}
	this.DISLIKE = 0;
	if (__SLAG__properties.DOCKBOTTOM) {
		throw new Error('Ti.UI.Windows.SystemIcon.DOCKBOTTOM is read only property');
	}
	this.DOCKBOTTOM = 0;
	if (__SLAG__properties.DOCKLEFT) {
		throw new Error('Ti.UI.Windows.SystemIcon.DOCKLEFT is read only property');
	}
	this.DOCKLEFT = 0;
	if (__SLAG__properties.DOCKRIGHT) {
		throw new Error('Ti.UI.Windows.SystemIcon.DOCKRIGHT is read only property');
	}
	this.DOCKRIGHT = 0;
	if (__SLAG__properties.DOCUMENT) {
		throw new Error('Ti.UI.Windows.SystemIcon.DOCUMENT is read only property');
	}
	this.DOCUMENT = 0;
	if (__SLAG__properties.DOWNLOAD) {
		throw new Error('Ti.UI.Windows.SystemIcon.DOWNLOAD is read only property');
	}
	this.DOWNLOAD = 0;
	if (__SLAG__properties.EDIT) {
		throw new Error('Ti.UI.Windows.SystemIcon.EDIT is read only property');
	}
	this.EDIT = 0;
	if (__SLAG__properties.EMOJI) {
		throw new Error('Ti.UI.Windows.SystemIcon.EMOJI is read only property');
	}
	this.EMOJI = 0;
	if (__SLAG__properties.EMOJI2) {
		throw new Error('Ti.UI.Windows.SystemIcon.EMOJI2 is read only property');
	}
	this.EMOJI2 = 0;
	if (__SLAG__properties.FAVORITE) {
		throw new Error('Ti.UI.Windows.SystemIcon.FAVORITE is read only property');
	}
	this.FAVORITE = 0;
	if (__SLAG__properties.FILTER) {
		throw new Error('Ti.UI.Windows.SystemIcon.FILTER is read only property');
	}
	this.FILTER = 0;
	if (__SLAG__properties.FIND) {
		throw new Error('Ti.UI.Windows.SystemIcon.FIND is read only property');
	}
	this.FIND = 0;
	if (__SLAG__properties.FLAG) {
		throw new Error('Ti.UI.Windows.SystemIcon.FLAG is read only property');
	}
	this.FLAG = 0;
	if (__SLAG__properties.FOLDER) {
		throw new Error('Ti.UI.Windows.SystemIcon.FOLDER is read only property');
	}
	this.FOLDER = 0;
	if (__SLAG__properties.FONT) {
		throw new Error('Ti.UI.Windows.SystemIcon.FONT is read only property');
	}
	this.FONT = 0;
	if (__SLAG__properties.FONTCOLOR) {
		throw new Error('Ti.UI.Windows.SystemIcon.FONTCOLOR is read only property');
	}
	this.FONTCOLOR = 0;
	if (__SLAG__properties.FONTDECREASE) {
		throw new Error('Ti.UI.Windows.SystemIcon.FONTDECREASE is read only property');
	}
	this.FONTDECREASE = 0;
	if (__SLAG__properties.FONTINCREASE) {
		throw new Error('Ti.UI.Windows.SystemIcon.FONTINCREASE is read only property');
	}
	this.FONTINCREASE = 0;
	if (__SLAG__properties.FONTSIZE) {
		throw new Error('Ti.UI.Windows.SystemIcon.FONTSIZE is read only property');
	}
	this.FONTSIZE = 0;
	if (__SLAG__properties.FORWARD) {
		throw new Error('Ti.UI.Windows.SystemIcon.FORWARD is read only property');
	}
	this.FORWARD = 0;
	if (__SLAG__properties.FOURBARS) {
		throw new Error('Ti.UI.Windows.SystemIcon.FOURBARS is read only property');
	}
	this.FOURBARS = 0;
	if (__SLAG__properties.FULLSCREEN) {
		throw new Error('Ti.UI.Windows.SystemIcon.FULLSCREEN is read only property');
	}
	this.FULLSCREEN = 0;
	if (__SLAG__properties.GLOBE) {
		throw new Error('Ti.UI.Windows.SystemIcon.GLOBE is read only property');
	}
	this.GLOBE = 0;
	if (__SLAG__properties.GO) {
		throw new Error('Ti.UI.Windows.SystemIcon.GO is read only property');
	}
	this.GO = 0;
	if (__SLAG__properties.GOTOSTART) {
		throw new Error('Ti.UI.Windows.SystemIcon.GOTOSTART is read only property');
	}
	this.GOTOSTART = 0;
	if (__SLAG__properties.GOTOTODAY) {
		throw new Error('Ti.UI.Windows.SystemIcon.GOTOTODAY is read only property');
	}
	this.GOTOTODAY = 0;
	if (__SLAG__properties.HANGUP) {
		throw new Error('Ti.UI.Windows.SystemIcon.HANGUP is read only property');
	}
	this.HANGUP = 0;
	if (__SLAG__properties.HELP) {
		throw new Error('Ti.UI.Windows.SystemIcon.HELP is read only property');
	}
	this.HELP = 0;
	if (__SLAG__properties.HIDEBCC) {
		throw new Error('Ti.UI.Windows.SystemIcon.HIDEBCC is read only property');
	}
	this.HIDEBCC = 0;
	if (__SLAG__properties.HIGHLIGHT) {
		throw new Error('Ti.UI.Windows.SystemIcon.HIGHLIGHT is read only property');
	}
	this.HIGHLIGHT = 0;
	if (__SLAG__properties.HOME) {
		throw new Error('Ti.UI.Windows.SystemIcon.HOME is read only property');
	}
	this.HOME = 0;
	if (__SLAG__properties.IMPORT) {
		throw new Error('Ti.UI.Windows.SystemIcon.IMPORT is read only property');
	}
	this.IMPORT = 0;
	if (__SLAG__properties.IMPORTALL) {
		throw new Error('Ti.UI.Windows.SystemIcon.IMPORTALL is read only property');
	}
	this.IMPORTALL = 0;
	if (__SLAG__properties.IMPORTANT) {
		throw new Error('Ti.UI.Windows.SystemIcon.IMPORTANT is read only property');
	}
	this.IMPORTANT = 0;
	if (__SLAG__properties.ITALIC) {
		throw new Error('Ti.UI.Windows.SystemIcon.ITALIC is read only property');
	}
	this.ITALIC = 0;
	if (__SLAG__properties.KEYBOARD) {
		throw new Error('Ti.UI.Windows.SystemIcon.KEYBOARD is read only property');
	}
	this.KEYBOARD = 0;
	if (__SLAG__properties.LEAVECHAT) {
		throw new Error('Ti.UI.Windows.SystemIcon.LEAVECHAT is read only property');
	}
	this.LEAVECHAT = 0;
	if (__SLAG__properties.LIBRARY) {
		throw new Error('Ti.UI.Windows.SystemIcon.LIBRARY is read only property');
	}
	this.LIBRARY = 0;
	if (__SLAG__properties.LIKE) {
		throw new Error('Ti.UI.Windows.SystemIcon.LIKE is read only property');
	}
	this.LIKE = 0;
	if (__SLAG__properties.LIKEDISLIKE) {
		throw new Error('Ti.UI.Windows.SystemIcon.LIKEDISLIKE is read only property');
	}
	this.LIKEDISLIKE = 0;
	if (__SLAG__properties.LINK) {
		throw new Error('Ti.UI.Windows.SystemIcon.LINK is read only property');
	}
	this.LINK = 0;
	if (__SLAG__properties.LIST) {
		throw new Error('Ti.UI.Windows.SystemIcon.LIST is read only property');
	}
	this.LIST = 0;
	if (__SLAG__properties.MAIL) {
		throw new Error('Ti.UI.Windows.SystemIcon.MAIL is read only property');
	}
	this.MAIL = 0;
	if (__SLAG__properties.MAILFILLED) {
		throw new Error('Ti.UI.Windows.SystemIcon.MAILFILLED is read only property');
	}
	this.MAILFILLED = 0;
	if (__SLAG__properties.MAILFORWARD) {
		throw new Error('Ti.UI.Windows.SystemIcon.MAILFORWARD is read only property');
	}
	this.MAILFORWARD = 0;
	if (__SLAG__properties.MAILREPLY) {
		throw new Error('Ti.UI.Windows.SystemIcon.MAILREPLY is read only property');
	}
	this.MAILREPLY = 0;
	if (__SLAG__properties.MAILREPLYALL) {
		throw new Error('Ti.UI.Windows.SystemIcon.MAILREPLYALL is read only property');
	}
	this.MAILREPLYALL = 0;
	if (__SLAG__properties.MANAGE) {
		throw new Error('Ti.UI.Windows.SystemIcon.MANAGE is read only property');
	}
	this.MANAGE = 0;
	if (__SLAG__properties.MAP) {
		throw new Error('Ti.UI.Windows.SystemIcon.MAP is read only property');
	}
	this.MAP = 0;
	if (__SLAG__properties.MAPDRIVE) {
		throw new Error('Ti.UI.Windows.SystemIcon.MAPDRIVE is read only property');
	}
	this.MAPDRIVE = 0;
	if (__SLAG__properties.MAPPIN) {
		throw new Error('Ti.UI.Windows.SystemIcon.MAPPIN is read only property');
	}
	this.MAPPIN = 0;
	if (__SLAG__properties.MEMO) {
		throw new Error('Ti.UI.Windows.SystemIcon.MEMO is read only property');
	}
	this.MEMO = 0;
	if (__SLAG__properties.MESSAGE) {
		throw new Error('Ti.UI.Windows.SystemIcon.MESSAGE is read only property');
	}
	this.MESSAGE = 0;
	if (__SLAG__properties.MICROPHONE) {
		throw new Error('Ti.UI.Windows.SystemIcon.MICROPHONE is read only property');
	}
	this.MICROPHONE = 0;
	if (__SLAG__properties.MORE) {
		throw new Error('Ti.UI.Windows.SystemIcon.MORE is read only property');
	}
	this.MORE = 0;
	if (__SLAG__properties.MOVETOFOLDER) {
		throw new Error('Ti.UI.Windows.SystemIcon.MOVETOFOLDER is read only property');
	}
	this.MOVETOFOLDER = 0;
	if (__SLAG__properties.MUSICINFO) {
		throw new Error('Ti.UI.Windows.SystemIcon.MUSICINFO is read only property');
	}
	this.MUSICINFO = 0;
	if (__SLAG__properties.MUTE) {
		throw new Error('Ti.UI.Windows.SystemIcon.MUTE is read only property');
	}
	this.MUTE = 0;
	if (__SLAG__properties.NEWFOLDER) {
		throw new Error('Ti.UI.Windows.SystemIcon.NEWFOLDER is read only property');
	}
	this.NEWFOLDER = 0;
	if (__SLAG__properties.NEWWINDOW) {
		throw new Error('Ti.UI.Windows.SystemIcon.NEWWINDOW is read only property');
	}
	this.NEWWINDOW = 0;
	if (__SLAG__properties.NEXT) {
		throw new Error('Ti.UI.Windows.SystemIcon.NEXT is read only property');
	}
	this.NEXT = 0;
	if (__SLAG__properties.ONEBAR) {
		throw new Error('Ti.UI.Windows.SystemIcon.ONEBAR is read only property');
	}
	this.ONEBAR = 0;
	if (__SLAG__properties.OPENFILE) {
		throw new Error('Ti.UI.Windows.SystemIcon.OPENFILE is read only property');
	}
	this.OPENFILE = 0;
	if (__SLAG__properties.OPENLOCAL) {
		throw new Error('Ti.UI.Windows.SystemIcon.OPENLOCAL is read only property');
	}
	this.OPENLOCAL = 0;
	if (__SLAG__properties.OPENPANE) {
		throw new Error('Ti.UI.Windows.SystemIcon.OPENPANE is read only property');
	}
	this.OPENPANE = 0;
	if (__SLAG__properties.OPENWITH) {
		throw new Error('Ti.UI.Windows.SystemIcon.OPENWITH is read only property');
	}
	this.OPENWITH = 0;
	if (__SLAG__properties.ORIENTATION) {
		throw new Error('Ti.UI.Windows.SystemIcon.ORIENTATION is read only property');
	}
	this.ORIENTATION = 0;
	if (__SLAG__properties.OTHERUSER) {
		throw new Error('Ti.UI.Windows.SystemIcon.OTHERUSER is read only property');
	}
	this.OTHERUSER = 0;
	if (__SLAG__properties.OUTLINESTAR) {
		throw new Error('Ti.UI.Windows.SystemIcon.OUTLINESTAR is read only property');
	}
	this.OUTLINESTAR = 0;
	if (__SLAG__properties.PAGE) {
		throw new Error('Ti.UI.Windows.SystemIcon.PAGE is read only property');
	}
	this.PAGE = 0;
	if (__SLAG__properties.PAGE2) {
		throw new Error('Ti.UI.Windows.SystemIcon.PAGE2 is read only property');
	}
	this.PAGE2 = 0;
	if (__SLAG__properties.PASTE) {
		throw new Error('Ti.UI.Windows.SystemIcon.PASTE is read only property');
	}
	this.PASTE = 0;
	if (__SLAG__properties.PAUSE) {
		throw new Error('Ti.UI.Windows.SystemIcon.PAUSE is read only property');
	}
	this.PAUSE = 0;
	if (__SLAG__properties.PEOPLE) {
		throw new Error('Ti.UI.Windows.SystemIcon.PEOPLE is read only property');
	}
	this.PEOPLE = 0;
	if (__SLAG__properties.PERMISSIONS) {
		throw new Error('Ti.UI.Windows.SystemIcon.PERMISSIONS is read only property');
	}
	this.PERMISSIONS = 0;
	if (__SLAG__properties.PHONE) {
		throw new Error('Ti.UI.Windows.SystemIcon.PHONE is read only property');
	}
	this.PHONE = 0;
	if (__SLAG__properties.PHONEBOOK) {
		throw new Error('Ti.UI.Windows.SystemIcon.PHONEBOOK is read only property');
	}
	this.PHONEBOOK = 0;
	if (__SLAG__properties.PICTURES) {
		throw new Error('Ti.UI.Windows.SystemIcon.PICTURES is read only property');
	}
	this.PICTURES = 0;
	if (__SLAG__properties.PIN) {
		throw new Error('Ti.UI.Windows.SystemIcon.PIN is read only property');
	}
	this.PIN = 0;
	if (__SLAG__properties.PLACEHOLDER) {
		throw new Error('Ti.UI.Windows.SystemIcon.PLACEHOLDER is read only property');
	}
	this.PLACEHOLDER = 0;
	if (__SLAG__properties.PLAY) {
		throw new Error('Ti.UI.Windows.SystemIcon.PLAY is read only property');
	}
	this.PLAY = 0;
	if (__SLAG__properties.POSTUPDATE) {
		throw new Error('Ti.UI.Windows.SystemIcon.POSTUPDATE is read only property');
	}
	this.POSTUPDATE = 0;
	if (__SLAG__properties.PREVIEW) {
		throw new Error('Ti.UI.Windows.SystemIcon.PREVIEW is read only property');
	}
	this.PREVIEW = 0;
	if (__SLAG__properties.PREVIEWLINK) {
		throw new Error('Ti.UI.Windows.SystemIcon.PREVIEWLINK is read only property');
	}
	this.PREVIEWLINK = 0;
	if (__SLAG__properties.PREVIOUS) {
		throw new Error('Ti.UI.Windows.SystemIcon.PREVIOUS is read only property');
	}
	this.PREVIOUS = 0;
	if (__SLAG__properties.PRIORITY) {
		throw new Error('Ti.UI.Windows.SystemIcon.PRIORITY is read only property');
	}
	this.PRIORITY = 0;
	if (__SLAG__properties.PROTECTEDDOCUMENT) {
		throw new Error('Ti.UI.Windows.SystemIcon.PROTECTEDDOCUMENT is read only property');
	}
	this.PROTECTEDDOCUMENT = 0;
	if (__SLAG__properties.READ) {
		throw new Error('Ti.UI.Windows.SystemIcon.READ is read only property');
	}
	this.READ = 0;
	if (__SLAG__properties.REDO) {
		throw new Error('Ti.UI.Windows.SystemIcon.REDO is read only property');
	}
	this.REDO = 0;
	if (__SLAG__properties.REFRESH) {
		throw new Error('Ti.UI.Windows.SystemIcon.REFRESH is read only property');
	}
	this.REFRESH = 0;
	if (__SLAG__properties.REMOTE) {
		throw new Error('Ti.UI.Windows.SystemIcon.REMOTE is read only property');
	}
	this.REMOTE = 0;
	if (__SLAG__properties.REMOVE) {
		throw new Error('Ti.UI.Windows.SystemIcon.REMOVE is read only property');
	}
	this.REMOVE = 0;
	if (__SLAG__properties.RENAME) {
		throw new Error('Ti.UI.Windows.SystemIcon.RENAME is read only property');
	}
	this.RENAME = 0;
	if (__SLAG__properties.REPAIR) {
		throw new Error('Ti.UI.Windows.SystemIcon.REPAIR is read only property');
	}
	this.REPAIR = 0;
	if (__SLAG__properties.REPEATALL) {
		throw new Error('Ti.UI.Windows.SystemIcon.REPEATALL is read only property');
	}
	this.REPEATALL = 0;
	if (__SLAG__properties.REPEATONE) {
		throw new Error('Ti.UI.Windows.SystemIcon.REPEATONE is read only property');
	}
	this.REPEATONE = 0;
	if (__SLAG__properties.REPORTHACKED) {
		throw new Error('Ti.UI.Windows.SystemIcon.REPORTHACKED is read only property');
	}
	this.REPORTHACKED = 0;
	if (__SLAG__properties.RESHARE) {
		throw new Error('Ti.UI.Windows.SystemIcon.RESHARE is read only property');
	}
	this.RESHARE = 0;
	if (__SLAG__properties.ROTATE) {
		throw new Error('Ti.UI.Windows.SystemIcon.ROTATE is read only property');
	}
	this.ROTATE = 0;
	if (__SLAG__properties.ROTATECAMERA) {
		throw new Error('Ti.UI.Windows.SystemIcon.ROTATECAMERA is read only property');
	}
	this.ROTATECAMERA = 0;
	if (__SLAG__properties.SAVE) {
		throw new Error('Ti.UI.Windows.SystemIcon.SAVE is read only property');
	}
	this.SAVE = 0;
	if (__SLAG__properties.SAVELOCAL) {
		throw new Error('Ti.UI.Windows.SystemIcon.SAVELOCAL is read only property');
	}
	this.SAVELOCAL = 0;
	if (__SLAG__properties.SCAN) {
		throw new Error('Ti.UI.Windows.SystemIcon.SCAN is read only property');
	}
	this.SCAN = 0;
	if (__SLAG__properties.SELECTALL) {
		throw new Error('Ti.UI.Windows.SystemIcon.SELECTALL is read only property');
	}
	this.SELECTALL = 0;
	if (__SLAG__properties.SEND) {
		throw new Error('Ti.UI.Windows.SystemIcon.SEND is read only property');
	}
	this.SEND = 0;
	if (__SLAG__properties.SETLOCKSCREEN) {
		throw new Error('Ti.UI.Windows.SystemIcon.SETLOCKSCREEN is read only property');
	}
	this.SETLOCKSCREEN = 0;
	if (__SLAG__properties.SETTILE) {
		throw new Error('Ti.UI.Windows.SystemIcon.SETTILE is read only property');
	}
	this.SETTILE = 0;
	if (__SLAG__properties.SETTING) {
		throw new Error('Ti.UI.Windows.SystemIcon.SETTING is read only property');
	}
	this.SETTING = 0;
	if (__SLAG__properties.SHOP) {
		throw new Error('Ti.UI.Windows.SystemIcon.SHOP is read only property');
	}
	this.SHOP = 0;
	if (__SLAG__properties.SHOWBCC) {
		throw new Error('Ti.UI.Windows.SystemIcon.SHOWBCC is read only property');
	}
	this.SHOWBCC = 0;
	if (__SLAG__properties.SHOWRESULTS) {
		throw new Error('Ti.UI.Windows.SystemIcon.SHOWRESULTS is read only property');
	}
	this.SHOWRESULTS = 0;
	if (__SLAG__properties.SHUFFLE) {
		throw new Error('Ti.UI.Windows.SystemIcon.SHUFFLE is read only property');
	}
	this.SHUFFLE = 0;
	if (__SLAG__properties.SLIDESHOW) {
		throw new Error('Ti.UI.Windows.SystemIcon.SLIDESHOW is read only property');
	}
	this.SLIDESHOW = 0;
	if (__SLAG__properties.SOLIDSTAR) {
		throw new Error('Ti.UI.Windows.SystemIcon.SOLIDSTAR is read only property');
	}
	this.SOLIDSTAR = 0;
	if (__SLAG__properties.SORT) {
		throw new Error('Ti.UI.Windows.SystemIcon.SORT is read only property');
	}
	this.SORT = 0;
	if (__SLAG__properties.STOP) {
		throw new Error('Ti.UI.Windows.SystemIcon.STOP is read only property');
	}
	this.STOP = 0;
	if (__SLAG__properties.STOPSLIDESHOW) {
		throw new Error('Ti.UI.Windows.SystemIcon.STOPSLIDESHOW is read only property');
	}
	this.STOPSLIDESHOW = 0;
	if (__SLAG__properties.STREET) {
		throw new Error('Ti.UI.Windows.SystemIcon.STREET is read only property');
	}
	this.STREET = 0;
	if (__SLAG__properties.SWITCH) {
		throw new Error('Ti.UI.Windows.SystemIcon.SWITCH is read only property');
	}
	this.SWITCH = 0;
	if (__SLAG__properties.SWITCHAPPS) {
		throw new Error('Ti.UI.Windows.SystemIcon.SWITCHAPPS is read only property');
	}
	this.SWITCHAPPS = 0;
	if (__SLAG__properties.SYNC) {
		throw new Error('Ti.UI.Windows.SystemIcon.SYNC is read only property');
	}
	this.SYNC = 0;
	if (__SLAG__properties.SYNCFOLDER) {
		throw new Error('Ti.UI.Windows.SystemIcon.SYNCFOLDER is read only property');
	}
	this.SYNCFOLDER = 0;
	if (__SLAG__properties.TAG) {
		throw new Error('Ti.UI.Windows.SystemIcon.TAG is read only property');
	}
	this.TAG = 0;
	if (__SLAG__properties.TARGET) {
		throw new Error('Ti.UI.Windows.SystemIcon.TARGET is read only property');
	}
	this.TARGET = 0;
	if (__SLAG__properties.THREEBARS) {
		throw new Error('Ti.UI.Windows.SystemIcon.THREEBARS is read only property');
	}
	this.THREEBARS = 0;
	if (__SLAG__properties.TOUCHPOINTER) {
		throw new Error('Ti.UI.Windows.SystemIcon.TOUCHPOINTER is read only property');
	}
	this.TOUCHPOINTER = 0;
	if (__SLAG__properties.TRIM) {
		throw new Error('Ti.UI.Windows.SystemIcon.TRIM is read only property');
	}
	this.TRIM = 0;
	if (__SLAG__properties.TWOBARS) {
		throw new Error('Ti.UI.Windows.SystemIcon.TWOBARS is read only property');
	}
	this.TWOBARS = 0;
	if (__SLAG__properties.TWOPAGE) {
		throw new Error('Ti.UI.Windows.SystemIcon.TWOPAGE is read only property');
	}
	this.TWOPAGE = 0;
	if (__SLAG__properties.UNDERLINE) {
		throw new Error('Ti.UI.Windows.SystemIcon.UNDERLINE is read only property');
	}
	this.UNDERLINE = 0;
	if (__SLAG__properties.UNDO) {
		throw new Error('Ti.UI.Windows.SystemIcon.UNDO is read only property');
	}
	this.UNDO = 0;
	if (__SLAG__properties.UNFAVORITE) {
		throw new Error('Ti.UI.Windows.SystemIcon.UNFAVORITE is read only property');
	}
	this.UNFAVORITE = 0;
	if (__SLAG__properties.UNPIN) {
		throw new Error('Ti.UI.Windows.SystemIcon.UNPIN is read only property');
	}
	this.UNPIN = 0;
	if (__SLAG__properties.UNSYNCFOLDER) {
		throw new Error('Ti.UI.Windows.SystemIcon.UNSYNCFOLDER is read only property');
	}
	this.UNSYNCFOLDER = 0;
	if (__SLAG__properties.UP) {
		throw new Error('Ti.UI.Windows.SystemIcon.UP is read only property');
	}
	this.UP = 0;
	if (__SLAG__properties.UPLOAD) {
		throw new Error('Ti.UI.Windows.SystemIcon.UPLOAD is read only property');
	}
	this.UPLOAD = 0;
	if (__SLAG__properties.VIDEO) {
		throw new Error('Ti.UI.Windows.SystemIcon.VIDEO is read only property');
	}
	this.VIDEO = 0;
	if (__SLAG__properties.VIDEOCHAT) {
		throw new Error('Ti.UI.Windows.SystemIcon.VIDEOCHAT is read only property');
	}
	this.VIDEOCHAT = 0;
	if (__SLAG__properties.VIEW) {
		throw new Error('Ti.UI.Windows.SystemIcon.VIEW is read only property');
	}
	this.VIEW = 0;
	if (__SLAG__properties.VIEWALL) {
		throw new Error('Ti.UI.Windows.SystemIcon.VIEWALL is read only property');
	}
	this.VIEWALL = 0;
	if (__SLAG__properties.VOLUME) {
		throw new Error('Ti.UI.Windows.SystemIcon.VOLUME is read only property');
	}
	this.VOLUME = 0;
	if (__SLAG__properties.WEBCAM) {
		throw new Error('Ti.UI.Windows.SystemIcon.WEBCAM is read only property');
	}
	this.WEBCAM = 0;
	if (__SLAG__properties.WORLD) {
		throw new Error('Ti.UI.Windows.SystemIcon.WORLD is read only property');
	}
	this.WORLD = 0;
	if (__SLAG__properties.ZEROBARS) {
		throw new Error('Ti.UI.Windows.SystemIcon.ZEROBARS is read only property');
	}
	this.ZEROBARS = 0;
	if (__SLAG__properties.ZOOM) {
		throw new Error('Ti.UI.Windows.SystemIcon.ZOOM is read only property');
	}
	this.ZOOM = 0;
	if (__SLAG__properties.ZOOMIN) {
		throw new Error('Ti.UI.Windows.SystemIcon.ZOOMIN is read only property');
	}
	this.ZOOMIN = 0;
	if (__SLAG__properties.ZOOMOUT) {
		throw new Error('Ti.UI.Windows.SystemIcon.ZOOMOUT is read only property');
	}
	this.ZOOMOUT = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
SystemIcon.prototype.addEventListener = function () {
};
SystemIcon.prototype.removeEventListener = function () {
};
SystemIcon.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
SystemIcon.prototype.fireEvent = function () {
};
module.exports = function (properties) {
	return new SystemIcon(properties);
};