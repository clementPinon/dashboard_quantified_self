//alert("dash");

var tablink = document.location.href;
var hostName = document.location.hostname;
var visitTimeStamp = new Date().getTime();
var pageScripts = document.scripts;
var sessionId = "123455" //tab.sessionId;
var regEx = 'test_chrome_extension';
var test = false;

var variableToTest_DB = "default";

//Scripts collection
/*
var s = document.scripts;
var _scripts = _scripts || [];
	for (var i = 0; i < s.length; i++){
	    _scripts.push(s[i].src)
	};
*/

var isGeoLocalized = function(){
		if(typeof(resultGeoLocation) == "object"){
			return true;
		}
		else{
			return false;
		}
};

//pool method reloaded while geolocalization is not ready
var pool = function(){
    //console.log('pool')
    if ( isGeoLocalized() == true){
              var address = 
					"Hi, there!\n\n" + 
					" How is it today in " + resultGeoLocation.city + "?\n" + 
					" It seems there's a lot of stuff going on in " +  resultGeoLocation.neighborhood +  "..." + " right?\n" + 
					" You should check out for events in " + resultGeoLocation.street + "!\n\n" +
					" Enjoy your day\n";
              
              alert(address);
         }
    else{
         setTimeout(pool,500);    
         }
};	

if(tablink.match(regEx)){
	test = true;

}


switch(test){
	case true:
		var accountID = 'UA-47883077-2';
		var ga_hit = 
			"http://www.google-analytics.com/collect?"+
			"v=1&"+ //version
			"tid=" + accountID + "&" + //webproperty ** PLEASE IF USED CHANGE WEBPROP **
			"cid="+ "UniquevisitorIdToBeFilledIn" +"&"+ // visitor Unique ID
			"t="+ "event"+ "&"+ // hit type event
			"ec="+ "visit" +"&"+ //event Cat
			"ea="+ variableToTest_DB + "&"+ // event action
			"el="+ hostName +"&"+ // event label
			"cs="+ "sourceChromeExtension_V1&"+ //campaign source
			"cm="+ "mediumChromeExtension_V1&"+ //campaign medium
			"cn="+ "mediumChromeExtension_V1&"+ // campaign name
			"cd1="+ "UniquevisitorIdToBeFilledIn" + "&" +
			"cd2=" + hostName + "&" + //custom dimension 2 : definition of the page visited by the user
			"cd3="+ "tablinkHidden"+ "&" + //custom dimension 3 : definition of the hostname visited by the user
			"cd4=" + visitTimeStamp.toString()  + "&" + // custom dimension 4 : definition of the session timestamp
			"cd5=" + "test" + "&" + //tests
			"cm1=1&" + //custom metric 1 : counter to count how many pages
			"cm2="	+ visitTimeStamp; //custom metric 2 : timestamp

		break;
	default:
		var accountID = 'UA-47883077-1';

		var ga_hit = 
			"http://www.google-analytics.com/collect?"+
			"v=1&"+ //version
			"tid=" + accountID + "&" + //webproperty ** PLEASE IF USED CHANGE WEBPROP **
			"cid="+ "UniquevisitorIdToBeFilledIn"+ "&"+ // visitor Unique ID
			"t="+ "event"+ "&"+ // hit type event
			"ec="+ "visit" +"&"+ //event Cat
			"ea="+ "pageLoad" + "&"+ // event action
			"el="+ hostName +"&"+ // event label
			"cs="+ "sourceChromeExtension_V1"+ "&"+ //campaign source
			"cm="+ "mediumChromeExtension_V1"+ "&"+ //campaign medium
			"cn="+ "mediumChromeExtension_V1"+ "&"+ // campaign name
			"cd1="+ "UniquevisitorIdToBeFilledIn" + "&" +
			"cd2=" + hostName + "&" + //custom dimension 2 : definition of the page visited by the user
			"cd3="+ "tablinkHidden"+ "&" + //custom dimension 3 : definition of the hostname visited by the user
			"cd4=" + visitTimeStamp.toString()  + "&" + // custom dimension 4 : definition of the session timestamp
			"cd5=" + "test" + "&" + //tests
			"cm1="+ "1"+ "&" + //custom metric 1 : counter to count how many pages
			"cm2="	+ visitTimeStamp; //custom metric 2 : timestamp

}



xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", ga_hit, false );
xmlHttp.send();

