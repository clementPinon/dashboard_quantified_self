//analysing which scripts are used on the page
//http://stackoverflow.com/questions/15718066/chrome-runtime-sendmessage-not-working-as-expected

if (!chrome.runtime) {
    // Chrome 20-21
    chrome.runtime = chrome.extension;
} else if(!chrome.runtime.onMessage) {
    // Chrome 22-25
    chrome.runtime.onMessage = chrome.extension.onMessage;
    chrome.runtime.sendMessage = chrome.extension.sendMessage;
    chrome.runtime.onConnect = chrome.extension.onConnect;
    chrome.runtime.connect = chrome.extension.connect;
}

//custom dimension default values
cd10 = "not quantified";
cd11 = "not tracked with ga";
cd12 = "no criteo tag";

//get scripts from the DOM through content script's message 
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    t = message; //message has to be a string, we passed the tracker after we applied a toString() method

	    if (t.match("quant.js")){
			cd10 = "quantcast quantified";
		};

		if (t.match("analytics.js")){
			if (t.match("dc.js")){
				cd11 = "universal analytics with demographics";
			}
			else{
				cd11 = "universal analytics without demographics";	
			}
		};

		if (t.match("ga.js")){
				cd11 = "google analytics without demographics";
		};

		if (t.match("dc.js")){
				cd11 = "google analytics with demographics";
		};

		if (t.match("criteo|ld.js")){
				cd12 = "criteo";
		}


});


