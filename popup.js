chrome.browserAction.setIcon({path:"dash.png"});
chrome.tabs.query({active: true, currentWindow: true, lastFocusedWindow: true}, function (Tab) {
      var tablink = Tab[0].url;
      var tabId = Tab[0].id;
      var tabTitle = Tab[0].title;
      
    //var tablink = document.location.href;
    //var hostName = document.location.hostname;
    var visitTimeStamp = new Date().getTime();

        var sessionId = "123455" //tab.sessionId;


        var ga_hit = 
          "http://www.google-analytics.com/collect?"+
          "v=1&"+ //version
          "tid=UA-47883077-1&"+ //webproperty
          "cid=UniquevisitorIdToBeFilledIn&"+ // visitor Unique ID
          "t=event&"+ // hit type event
          "ec="+ "visit" +"&"+ //event Cat
          "ea="+ "add_to_favorites" + "&"+ // event action
          "el="+ tablink +"&"+ // event label
          "cs=sourceChromeExtension_V1&"+ //campaign source
          "cm=mediumChromeExtension_V1&"+ //campaign medium
          "cn=mediumChromeExtension_V1&"+ // campaign name
          "cd1=UniquevisitorIdToBeFilledIn" + "&" +
          "cd2=hostName" + "&" + //custom dimension 2 : definition of the page visited by the user
          "cd3=" + tablink + "&" + //custom dimension 3 : definition of the hostname visited by the user
          "cd4=" + visitTimeStamp.toString()  + "&" + // custom dimension 4 : definition of the session timestamp
          "cd5=" + "test" + "&" + //tests
          "cm1=1&" + //custom metric 1 : counter to count how many pages
          "cm2="  + visitTimeStamp; //custom metric 2 : timestamp


      xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", ga_hit, false );
      xmlHttp.send();
      
chrome.browserAction.setIcon({path:"dash_clicked.png", tabId: tabId});

}); 


