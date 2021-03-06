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


function getScripts(){
	//scripts = document.getElementsByTagName('script');	
    scripts = document.scripts ;
    trackers = [];
    for (var d = 0; d < scripts.length; d++){
        if (scripts[d].src.length > 0){
            trackers.push(scripts[d].src);
            //console.log("script " + d + ": " + scripts[d].src);
        }
        else{
            trackers.push(scripts[d].text);
            //console.log("script " + d + ": " + scripts[d].text.toString());          
        }

    }
	return trackers.toString();
}

chrome.runtime.sendMessage(
    getScripts()
);
