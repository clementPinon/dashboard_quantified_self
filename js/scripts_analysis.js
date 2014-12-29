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


//get scripts from the DOM through content script's message 
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    trackers = message;
});

//trackers.match("google");