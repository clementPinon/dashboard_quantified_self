var resultGeoLocation = "";

var isGeoLocalized = function(){
		if(typeof(resultGeoLocation) == "object"){
			return true;
		}
		else{
			return false;
		}
};

//geoLocReady method reloaded while geolocalization is not ready
var geoLocReady = function(){
    //console.log('geoLocReady')
    if ( isGeoLocalized() == true){
              localStorage.setItem('city',resultGeoLocation.city);
              localStorage.setItem('neighborhood',resultGeoLocation.neighborhood);
              localStorage.setItem('latitude',resultGeoLocation.latitude);
              localStorage.setItem('longitude',resultGeoLocation.longitude);
         }
    else{
         setTimeout(geoLocReady,500);    
         }
};	

navigator.geolocation.getCurrentPosition(function (position){
	var latitude = position.coords.latitude.toFixed(6); //4 digits would give an accuracy within 10m
	var longitude = position.coords.longitude.toFixed(6);

	var latlong = latitude + ','+longitude;
	var yahooapi = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.placefinder%20where%20text%3D%22' + encodeURIComponent(latlong) + '%22%20and%20gflags%3D%22R%22&format=json&diagnostics=true&callback=';

	  $.getJSON(yahooapi, function(r){
		  if (r.query.count > 1) {
				 //var result = r.query.results.Result[0];
				 resultGeoLocation = r.query.results.Result[0];
			}
		  else if (r.query.count == 1){
				 //var result = r.query.results.Result;
				 resultGeoLocation = r.query.results.Result;
				 
		  }
		  else {
		  	return 0; //no location found
		  }
	  });

});
