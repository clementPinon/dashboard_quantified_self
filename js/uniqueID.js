var uniqueClientID = function(){
	if (typeof(localStorage.clientID) != 'undefined'){
		return localStorage.clientID	
	}
	else{
		localStorage.setItem('clientID', Math.floor((Math.random()*10000000000)) + '.' + Math.floor((Math.random()*10000000000)));
		return localStorage.clientID
	}
};

//visitor unique ID is based at a browser level linked to the local storage
var visitorUniqueID = uniqueClientID();