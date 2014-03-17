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

/*chrome.tabs.query({currentWindow: true, active: true}, function(tab){
        alert(tab[0].url);
  });


chrome.tabs.query({currentWindow: true}, function(tab){
        alert(typeof(tab));
        alert(countProperties(tab));
        for (var index = 0; index < countProperties(tab); index ++){
     		alert(tab[index].url);   	
        }
});

*/

chrome.tabs.query({}, function(tab){
        
	// number of tabs opened
    //alert(countProperties(tab));

	// tab properties: active,favIconUrl,height,highlighted,id,incognito,index,pinned,selected,status,title,url,width,windowId		
    //alert(list(tab[0]));
    //alert(Object.keys(tab[0].object)));
    /*
    alert(tab[0].active);
    alert(tab[0].favIconUrl);
    alert(tab[0].height);
    alert(tab[0].highlighted);
    alert(tab[0].id);
    alert(tab[0].incognito);
    alert(tab[0].index);
    alert(tab[0].pinned);
    alert(tab[0].selected);
    alert(tab[0].status);
    alert(tab[0].title);
    alert(tab[0].url);
    alert(tab[0].width);
    alert(tab[0].windowId);
    */

    //for every tabs opened: display the url 
    /* 
    for (var index = 0; index < countProperties(tab); index ++){
 		alert(tab[index].url);   	
    }
    */

	
	/* Add some listeners for tab changing events. We want to update our
	*  counters when this sort of stuff happens. */
	chrome.tabs.onSelectionChanged.addListener(
		function(tabId, selectionInfo) {
			//alert(tabId);
			alert('onSelectionChangedchanged')
			//alert(tab[0].title);
			alert(tab[0].url);
			//alert(tab[0].index);
			//currentTabId = tabId;
			//updateCounter();
	});

	chrome.tabs.onUpdated.addListener(
		function(tabId, selectionInfo) {
			//alert(tabId);
			alert('onUpdated')
			//alert(tab[0].title);
			alert(tab[0].url);
			//alert(tab[0].index);
		chrome.tabs.query({}, function(tab){
			alert('numberOfTabOpened');
			alert(countProperties(tab));
		});


	});

		chrome.tabs.query({currentWindow: true, active: true}, function(tab){
			alert(tab[0].index);
			alert(tab[0].url);
			alert(tab[0].title);
		});

});

