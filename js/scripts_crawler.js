
console.log("content script triggered");


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
	scripts = document.getElementsByTagName('script');	
	/*for (var s = 0 ; s < scripts.length ; s ++){
		console.log("ga : " + /ga\.js/.test(scripts[s].src) + " " + s);
		console.log("ua : " + /analytics\.js/.test(scripts[s].src) + " " + s);
		console.log("dc : " + /dc\.js/.test(scripts[s].src) + " " + s);
		alert('getScript triggered');
	}*/
	return scripts;
}
/*
function getLinks() {
  var links = document.querySelectorAll("a");
  var results = [];
  var seenLinks = {};
  for (var i  = 0; i < links.length; ++i) {
    var text = links[i].textContent;
    if (text.length > 100)
      text = text.substring(0, 100) + "...";
    var link = links[i].href.replace(/(.*)#?/, "$1");
    if (seenLinks[link])
      continue;
    seenLinks[link] = 1;
    results.push({ href: link, text: text });
  }
  return results;
};

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  sendResponse(getScript());
});
*/

chrome.runtime.sendMessage(
       	{title: window.document.title,
        url: window.document.location.hostname,
    	type: "scripts triggered on page"}
       	,"test"//,getScripts()
);