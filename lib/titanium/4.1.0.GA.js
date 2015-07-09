var _ = require('lodash'),
	path = require('path');

module.exports = function(sdk, options){
	return _.extend(_.extend(require(path.join(sdk, '/Titanium'))(), {
			version: options.version
		}), {
		Accelerometer: require(path.join(sdk, 'Titanium', 'Accelerometer'))(),
		Analytics: require(path.join(sdk, 'Titanium', 'Analytics'))(),
		Android: _.extend(require(path.join(sdk, 'Titanium', 'Android'))(), {
			ActionBar: require(path.join(sdk, 'Titanium', 'Android', 'ActionBar'))(),
			Activity: require(path.join(sdk, 'Titanium', 'Android', 'Activity'))(),
			BroadcastReceiver: require(path.join(sdk, 'Titanium', 'Android', 'BroadcastReceiver'))(),
			Intent: require(path.join(sdk, 'Titanium', 'Android', 'Intent'))(),
			Menu: require(path.join(sdk, 'Titanium', 'Android', 'Menu'))(),
			MenuItem: require(path.join(sdk, 'Titanium', 'Android', 'MenuItem'))(),
			Notification: require(path.join(sdk, 'Titanium', 'Android', 'Notification'))(),
			NotificationManager: require(path.join(sdk, 'Titanium', 'Android', 'NotificationManager'))(),
			PendingIntent: require(path.join(sdk, 'Titanium', 'Android', 'PendingIntent'))(),
			R: require(path.join(sdk, 'Titanium', 'Android', 'R'))(),
			RemoteViews: require(path.join(sdk, 'Titanium', 'Android', 'RemoteViews'))(),
			Service: require(path.join(sdk, 'Titanium', 'Android', 'Service'))()
		}),
		API: require(path.join(sdk, 'Titanium', 'API'))(),
		App: _.extend(require(path.join(sdk, 'Titanium', 'App'))(), {
			Android: _.extend(require(path.join(sdk, 'Titanium', 'App', 'Android'))(), {
				R: require(path.join(sdk, 'Titanium', 'App', 'Android', 'R'))()
			}),
			iOS: _.extend(require(path.join(sdk, 'Titanium', 'App', 'iOS'))(), {
				BackgroundService: require(path.join(sdk, 'Titanium', 'App', 'iOS', 'BackgroundService'))(),
				LocalNotification: require(path.join(sdk, 'Titanium', 'App', 'iOS', 'LocalNotification'))(),
				UserDefaults: require(path.join(sdk, 'Titanium', 'App', 'iOS', 'UserDefaults'))(),
				UserNotificationAction: require(path.join(sdk, 'Titanium', 'App', 'iOS', 'UserNotificationAction'))(),
				UserNotificationCategory: require(path.join(sdk, 'Titanium', 'App', 'iOS', 'UserNotificationCategory'))()
			}),
			Properties: require(path.join(sdk, 'Titanium', 'App', 'Properties'))(),			
		}),
		Blob: require(path.join(sdk, 'Titanium', 'Blob'))(),
		BlobStream: require(path.join(sdk, 'Titanium', 'BlobStream'))(),
		Buffer: require(path.join(sdk, 'Titanium', 'Buffer'))(),
		BufferStream: require(path.join(sdk, 'Titanium', 'BufferStream'))(),
		Calendar: _.extend(require(path.join(sdk, 'Titanium', 'Calendar'))(), {
			Alert: require(path.join(sdk, 'Titanium', 'Calendar', 'Alert'))(),
			Calendar: require(path.join(sdk, 'Titanium', 'Calendar', 'Calendar'))(),
			Event: require(path.join(sdk, 'Titanium', 'Calendar', 'Event'))(),
			RecurrenceRule: require(path.join(sdk, 'Titanium', 'Calendar', 'RecurrenceRule'))(),
			Reminder: require(path.join(sdk, 'Titanium', 'Calendar', 'Reminder'))()
		}),
		Codec: require(path.join(sdk, 'Titanium', 'Codec'))(),
		Contacts: _.extend(require(path.join(sdk, 'Titanium', 'Contacts'))(), {
			Group: require(path.join(sdk, 'Titanium', 'Contacts', 'Group'))(),
			Person: require(path.join(sdk, 'Titanium', 'Contacts', 'Person'))()
		}),
		Database: _.extend(require(path.join(sdk, 'Titanium', 'Database'))(), {
			DB: require(path.join(sdk, 'Titanium', 'Database', 'DB'))(),
			ResultSet: require(path.join(sdk, 'Titanium', 'Database', 'ResultSet'))()
		}),
		Filesystem: _.extend(require(path.join(sdk, 'Titanium', 'Filesystem'))(), {
			File: require(path.join(sdk, 'Titanium', 'Filesystem', 'File'))(),
			FileStream: require(path.join(sdk, 'Titanium', 'Filesystem', 'FileStream'))()
		}),
		Geolocation: _.extend(require(path.join(sdk, 'Titanium', 'Geolocation'))(), {
			Android: _.extend(require(path.join(sdk, 'Titanium', 'Geolocation', 'Android'))(), {
				LocationProvider: require(path.join(sdk, 'Titanium', 'Geolocation', 'Android', 'LocationProvider'))(),
				LocationRule: require(path.join(sdk, 'Titanium', 'Geolocation', 'Android', 'LocationRule'))()
			}),
			MobileWeb: require(path.join(sdk, 'Titanium', 'Geolocation', 'MobileWeb'))()
		}),
		Gesture: require(path.join(sdk, 'Titanium', 'Gesture'))(),
		IOStream: require(path.join(sdk, 'Titanium', 'IOStream'))(),
		Locale: require(path.join(sdk, 'Titanium', 'Locale'))(),
		Media: _.extend(require(path.join(sdk, 'Titanium', 'Media'))(), {
			Android: require(path.join(sdk, 'Titanium', 'Media', 'Android'))(),
			AudioPlayer: require(path.join(sdk, 'Titanium', 'Media', 'AudioPlayer'))(),
			AudioRecorder: require(path.join(sdk, 'Titanium', 'Media', 'AudioRecorder'))(),
			Item: require(path.join(sdk, 'Titanium', 'Media', 'Item'))(),
			MusicPlayer: require(path.join(sdk, 'Titanium', 'Media', 'MusicPlayer'))(),
			Sound: require(path.join(sdk, 'Titanium', 'Media', 'Sound'))(),
			VideoPlayer: require(path.join(sdk, 'Titanium', 'Media', 'VideoPlayer'))()
		}),
		Network: _.extend(require(path.join(sdk, 'Titanium', 'Network'))(), {
			Socket: require(path.join(sdk, 'Titanium', 'Network', 'Socket'))()
		}),
		Platform: _.extend(require(path.join(sdk, 'Titanium', 'Platform'))(), {
			Android: require(path.join(sdk, 'Titanium', 'Platform', 'Android'))(),
			displayCaps: require(path.join(sdk, 'Titanium', 'Platform', 'DisplayCaps'))()
		}, {
			platform: options.platform
		}),
		Stream: require(path.join(sdk, 'Titanium', 'Stream'))(),
		UI: _.extend(require(path.join(sdk, 'Titanium', 'UI'))(), {
			Android: _.extend(require(path.join(sdk, 'Titanium', 'UI', 'Android'))(), {
				ProgressIndicator: require(path.join(sdk, 'Titanium', 'UI', 'Android', 'ProgressIndicator'))(),
				SearchView: require(path.join(sdk, 'Titanium', 'UI', 'Android', 'SearchView'))()
			}),
			iOS: _.extend(require(path.join(sdk, 'Titanium', 'UI', 'iOS'))(), {
				AdView: require(path.join(sdk, 'Titanium', 'UI', 'iOS', 'AdView'))(),
				AnchorAttachmentBehavior: require(path.join(sdk, 'Titanium', 'UI', 'iOS', 'AnchorAttachmentBehavior'))(),
				Animator: require(path.join(sdk, 'Titanium', 'UI', 'iOS', 'Animator'))(),
				CollisionBehavior: require(path.join(sdk, 'Titanium', 'UI', 'iOS', 'CollisionBehavior'))(),
				CoverFlowView: require(path.join(sdk, 'Titanium', 'UI', 'iOS', 'CoverFlowView'))(),
				DocumentViewer: require(path.join(sdk, 'Titanium', 'UI', 'iOS', 'DocumentViewer'))(),
				DynamicItemBehavior: require(path.join(sdk, 'Titanium', 'UI', 'iOS', 'DynamicItemBehavior'))(),
				GravityBehavior: require(path.join(sdk, 'Titanium', 'UI', 'iOS', 'GravityBehavior'))(),
				NavigationWindow: require(path.join(sdk, 'Titanium', 'UI', 'iOS', 'NavigationWindow'))(),
				PushBehavior: require(path.join(sdk, 'Titanium', 'UI', 'iOS', 'PushBehavior'))(),
				SnapBehavior: require(path.join(sdk, 'Titanium', 'UI', 'iOS', 'SnapBehavior'))(),
				SplitWindow: require(path.join(sdk, 'Titanium', 'UI', 'iOS', 'SplitWindow'))(),
				TabbedBar: require(path.join(sdk, 'Titanium', 'UI', 'iOS', 'TabbedBar'))(),
				Toolbar: require(path.join(sdk, 'Titanium', 'UI', 'iOS', 'Toolbar'))(),
				ViewAttachmentBehavior: require(path.join(sdk, 'Titanium', 'UI', 'iOS', 'ViewAttachmentBehavior'))()
			}),
			iPad: _.extend(require(path.join(sdk, 'Titanium', 'UI', 'iPad'))(), {
				Popover: require(path.join(sdk, 'Titanium', 'UI', 'iPad', 'Popover'))()
			}),
			iPhone: _.extend(require(path.join(sdk, 'Titanium', 'UI', 'iPhone'))(), {
				ActivityIndicatorStyle: require(path.join(sdk, 'Titanium', 'UI', 'iPhone', 'ActivityIndicatorStyle'))(),
				AlertDialogStyle: require(path.join(sdk, 'Titanium', 'UI', 'iPhone', 'AlertDialogStyle'))(),
				AnimationStyle: require(path.join(sdk, 'Titanium', 'UI', 'iPhone', 'AnimationStyle'))(),
				ListViewCellSelectionStyle: require(path.join(sdk, 'Titanium', 'UI', 'iPhone', 'ListViewCellSelectionStyle'))(),
				ListViewScrollPosition: require(path.join(sdk, 'Titanium', 'UI', 'iPhone', 'ListViewScrollPosition'))(),
				ListViewSeparatorStyle: require(path.join(sdk, 'Titanium', 'UI', 'iPhone', 'ListViewSeparatorStyle'))(),
				ListViewStyle: require(path.join(sdk, 'Titanium', 'UI', 'iPhone', 'ListViewStyle'))(),
				ProgressBarStyle: require(path.join(sdk, 'Titanium', 'UI', 'iPhone', 'ProgressBarStyle'))(),
				RowAnimationStyle: require(path.join(sdk, 'Titanium', 'UI', 'iPhone', 'RowAnimationStyle'))(),
				ScrollIndicatorStyle: require(path.join(sdk, 'Titanium', 'UI', 'iPhone', 'ScrollIndicatorStyle'))(),
				StatusBar: require(path.join(sdk, 'Titanium', 'UI', 'iPhone', 'StatusBar'))(),
				SystemButton: require(path.join(sdk, 'Titanium', 'UI', 'iPhone', 'SystemButton'))(),
				SystemButtonStyle: require(path.join(sdk, 'Titanium', 'UI', 'iPhone', 'SystemButtonStyle'))(),
				SystemIcon: require(path.join(sdk, 'Titanium', 'UI', 'iPhone', 'SystemIcon'))(),
				TableViewCellSelectionStyle: require(path.join(sdk, 'Titanium', 'UI', 'iPhone', 'TableViewCellSelectionStyle'))(),
				TableViewScrollPosition: require(path.join(sdk, 'Titanium', 'UI', 'iPhone', 'TableViewScrollPosition'))(),
				TableViewSeparatorStyle: require(path.join(sdk, 'Titanium', 'UI', 'iPhone', 'TableViewSeparatorStyle'))(),
				TableViewStyle: require(path.join(sdk, 'Titanium', 'UI', 'iPhone', 'TableViewStyle'))()
			}),
			MobileWeb: _.extend(require(path.join(sdk, 'Titanium', 'UI', 'MobileWeb'))(), {
				NavigationGroup: require(path.join(sdk, 'Titanium', 'UI', 'MobileWeb', 'NavigationGroup'))(),
				TableViewSeparatorStyle: require(path.join(sdk, 'Titanium', 'UI', 'MobileWeb', 'TableViewSeparatorStyle'))()
			}),
			Windows: _.extend(require(path.join(sdk, 'Titanium', 'UI', 'Windows'))(), {
				AppBarButton: require(path.join(sdk, 'Titanium', 'UI', 'Windows', 'AppBarButton'))(),
				AppBarSeparator: require(path.join(sdk, 'Titanium', 'UI', 'Windows', 'AppBarSeparator'))(),
				AppBarToggleButton: require(path.join(sdk, 'Titanium', 'UI', 'Windows', 'AppBarToggleButton'))(),
				CommandBar: require(path.join(sdk, 'Titanium', 'UI', 'Windows', 'CommandBar'))(),
				SystemIcon: require(path.join(sdk, 'Titanium', 'UI', 'Windows', 'SystemIcon'))()
			})
		}),
		Utils: require(path.join(sdk, 'Titanium', 'Utils'))(),
		XML: _.extend(require(path.join(sdk, 'Titanium', 'XML'))(), {
			Attr: require(path.join(sdk, 'Titanium', 'XML', 'Attr'))(),
			CDATASection: require(path.join(sdk, 'Titanium', 'XML', 'CDATASection'))(),
			CharacterData: require(path.join(sdk, 'Titanium', 'XML', 'CharacterData'))(),
			Comment: require(path.join(sdk, 'Titanium', 'XML', 'Comment'))(),
			Document: require(path.join(sdk, 'Titanium', 'XML', 'Document'))(),
			DocumentFragment: require(path.join(sdk, 'Titanium', 'XML', 'DocumentFragment'))(),
			DocumentType: require(path.join(sdk, 'Titanium', 'XML', 'DocumentType'))(),
			DOMImplementation: require(path.join(sdk, 'Titanium', 'XML', 'DOMImplementation'))(),
			Element: require(path.join(sdk, 'Titanium', 'XML', 'Element'))(),
			Entity: require(path.join(sdk, 'Titanium', 'XML', 'Entity'))(),
			EntityReference: require(path.join(sdk, 'Titanium', 'XML', 'EntityReference'))(),
			NamedNodeMap: require(path.join(sdk, 'Titanium', 'XML', 'NamedNodeMap'))(),
			Node: require(path.join(sdk, 'Titanium', 'XML', 'Node'))(),
			NodeList: require(path.join(sdk, 'Titanium', 'XML', 'NodeList'))(),
			Notation: require(path.join(sdk, 'Titanium', 'XML', 'Notation'))(),
			ProcessingInstruction: require(path.join(sdk, 'Titanium', 'XML', 'ProcessingInstruction'))(),
			Text: require(path.join(sdk, 'Titanium', 'XML', 'Text'))()
		}),
		Yahoo: require(path.join(sdk, 'Titanium', 'Yahoo'))()
	});
};