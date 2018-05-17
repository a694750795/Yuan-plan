$(function(){

		//获取其他页面传递过来的参数
	    function GetRequest() {  
            var url = location.search; //获取url中"?"符后的字串     
      
            var theRequest = new Object();  
            if(url.indexOf("?") != -1) {  
                var str = url.substr(1);  
                strs = str.split("&");  
                for(var i = 0; i < strs.length; i++) {  
                    theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);  
                }  
            }  
            return theRequest;      
        };  
        //获取参数    
        var Request = new Object();  
        Request = GetRequest();  
        console.log(Request);
        if(Request!=null){
        	var $span=$("<span>"+Request.mobile+"</span>");
        	$("#mobile").append($span);
        };
})