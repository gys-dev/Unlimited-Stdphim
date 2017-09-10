var warningId = 'notification.thongbao';
 chrome.notifications.create(warningId, {
      iconUrl: chrome.runtime.getURL('images/icon-48.png'),
      title: 'Untimate Studyphim',
      type: 'progress',
      message: 'Extension đã được click hoạt',
      buttons: [{ title: 'xem tác giả' }],
      isClickable: false,
      priority: 2,
    }, function() {});

 chrome.notifications.onClicked.addListener(function(warningId, byUser) {
         chrome.tabs.create({url: "https://www.facebook.com/Tranducy1999"});
		//alert(link.hostname);
    });
	