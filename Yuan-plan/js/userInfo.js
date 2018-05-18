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
            var $nick=$("<input type='text' value='"+Request.nick_name+"'>");
            var $boy=$("<input type='radio' name='sex' id='boy' value='male' checked='checked'>");
            var $t_boy=$("<label for='male'>男</label>");
            var $girl=$("<input type='radio' name='sex' id='girl' value='female'>");
            var $t_girl=$("<label for='female'>女</label>");

        	$("#mobile").append($span);
            $("#nickName").append($nick);
            $("#inputSex").append($t_boy);
            $("#inputSex").append($boy);
            $("#inputSex").append($t_girl);
            $("#inputSex").append($girl);
        };
})