//method to count the number of properties in an object
function countProperties(obj) {
    var count = 0;

    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            ++count;
    }

    return count;
}


//method to list the properties of an object
var list = function(obj) {
  var properties = [];
  for(var prop in obj) {
    properties.push(prop);
  }
  return properties;
};

//method to get domain out of tab url
var getDomain = function (data) {
  var a = document.createElement('a');
  a.href = data;
  return a.hostname;
}

/* NOTE:
The geolocation function works properly with the background.js
We should work on having it triggered only once per day or only once the browser is being opened.
geoLocReady will update the local storage with city and neighborhood attributes
*/   

geoLocReady();


/* Add some listeners for tab changing events. We want to update our
* counters when a new tab is selected. */
chrome.tabs.onSelectionChanged.addListener(
	function(tabId, selectionInfo) {
		//alert('onSelectionChanged');
		chrome.tabs.query({currentWindow: true, active: true}, function(tab){
			//alert(tab[0].url);
			var hostName = getDomain(tab[0].url);
			var pageTitle = tab[0].title;
		});
});

/* Add some listeners for tab changing events. We want to update our
* counters when a new tab is updated (reloaded for instance of new url entered). */
chrome.tabs.onUpdated.addListener(
	function(tabId, selectionInfo) {
		//alert('onUpdated');
		chrome.tabs.query({currentWindow: true, active: true}, function(tab){
			//alert(tab[0].url);
			var hostName = getDomain(tab[0].url);
			var pageTitle = tab[0].title;
			//Get some info about the environment, every time the user loads a page it counts the total number of tabs opened
			chrome.tabs.query({}, function(tab){
				//alert('numberOfTabOpened');
				//alert(countProperties(tab));
				// number of tab opened need to be a global variable
				numberOfTabOpened = countProperties(tab);
				//alert(numberOfTabOpened);
			    
			    //for every tabs opened: display the url 
			    /* 
			    for (var index = 0; index < countProperties(tab); index ++){
			 		alert(tab[index].url);   	
			    }
			    */
			});
			var visitTimeStamp = new Date().getTime();

			var ga_hit = 
				"http://www.google-analytics.com/collect?"+
				"v=1&"+ //version
				"tid=" + accountID + "&" + //webproperty 
				"cid="+ visitorUniqueID + "&"+ // visitor Unique ID
				"t="+ "event"+ "&"+ // hit type event
				"ec="+ "visit" + "&"+ //event Cat
				"ea="+ "pageLoad_background.js" + "&"+ // event action
				"el="+ hostName +"&"+ // event label
				"cs="+ "sourceChromeExtension_V1"+ "&"+ //campaign source
				"cm="+ "mediumChromeExtension_V1"+ "&"+ //campaign medium
				"cn="+ "mediumChromeExtension_V1"+ "&"+ //campaign name
				"cd1="+ visitorUniqueID + "&" +
				"cd2=" + hostName + "&" + //custom dimension 2 : definition of the hostname visited by the user
				"cd3="+ localStorage.city + "&" + //custom dimension 3 : definition of the hostname visited by the user
				"cd4=" + localStorage.neighborhood + "&" + // custom dimension 4 : definition of the session timestamp
				"cd5=" + visitTimeStamp.toString() + "&" + //tests
				"cd6=" + localStorage.latitude + "&" + //latitude
				"cd7=" + localStorage.longitude + "&" + //longitude
				"cm1="+ "1"+ "&" + //custom metric 1 : counter to count how many pages
				"cm2="	+ visitTimeStamp + "&" + //custom metric 2 : timestamp
				"cm3="+ numberOfTabOpened ; 

				xmlHttp = new XMLHttpRequest();
				xmlHttp.open( "GET", ga_hit, false );
				xmlHttp.send();

		});
});

//Get some info with regards to the opened and active tab
/* 
chrome.tabs.query({currentWindow: true, active: true}, function(tab){
	alert(tab[0].index);
	alert(tab[0].url);
	alert(tab[0].title);
});
*/
