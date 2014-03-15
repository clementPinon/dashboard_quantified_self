//Create Cookies:
var setCookie=function(cname,cvalue,opt_expireMilliSecs,opt_domain){
                       if(cname&&cvalue){
                               if(opt_expireMilliSecs){
                                       var exdate=new Date();
                                       exdate.setTime(exdate.getTime()+opt_expireMilliSecs);
                                       document.cookie=cname+"="+cvalue+((opt_expireMilliSecs==null) ? "" : ";expires="+exdate.toUTCString())+";path=/"+(opt_domain?";domain="+opt_domain:"");
                               }else{
                                       document.cookie=cname+"="+cvalue+";path=/"+(opt_domain?";domain="+opt_domain:"");
                               }
                       }
               };

//Read Cookies:
var getCookie=function(cname){
	var dc = document.cookie, returnVal = "none";
		dc = dc.split("; ");
			for(i=0;i<dc.length;i++){
				dc[i] = dc[i].replace(/=/, '==');
				dc[i] = dc[i].split("==");
				if(dc[i][0]==cname){
					returnVal = dc[i][1];
			}
		}
	return returnVal;
};

var uniqueID = function(){
	if (getCookie('__CDext') != 'none'){
		return getCookie('__CDext')	
	}
	else{
		var customerID = Math.floor((Math.random()*10000000000)) + '.' + Math.floor((Math.random()*10000000000))
		setCookie('__CDext', customerID)
		return getCookie('__CDext')
	}
};



