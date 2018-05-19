$(function(){
	var mobile=getCookie('mobile');
	if (mobile!=null&&mobile!='') {
		var $span=$("<span>"+mobile+"</span>");
		$("#mobile").append($span);
	};

	$(".inputMes").focus(function(){
            $(this).css("border-color","#20A0FF");
        }).blur(function(){
            $(this).css("border-color","#BFCBD9");
        });

    $("#getcode").click(function(){
    	var tx=$(".p_pwd");
    	var bool=false;
    	if (tx!=null) {
    		bool=true;
    	}

    	var newpwd=$("#newpwd input").val();
    	var enpwd=$("#ensurepwd input").val();
    	var incode=$("#incode").val();

    	var p_pwd0=$("<p class='p_pwd'>密码不能为空</p>");
    	var p_pwd1=$("<p class='p_pwd'>密码不能为空</p>");
    	var p_pwd2=$("<p class='p_pwd'>两次密码不一致</p>");
    	if(newpwd==""&&enpwd==""){
    		if (bool) {
    			tx.remove();
    		}
    		$("#newpwd").append(p_pwd0);
    		$("#ensurepwd").append(p_pwd1);
    	}else if(newpwd!=enpwd){
    		if (bool) {
    			tx.remove();
    		}
    		$("#ensurepwd").append(p_pwd2);
    	}else{
    		if (bool) {
    			tx.remove();
    		}
	    	var obj={};
	    	obj['mobile']=mobile;
	    	var mobiles=JSON.stringify(obj);
	    	$.ajax({
	    		url:"http://www.ftusix.com/static/data/sendsms.php",
	    		type:"POST",
	    		data:mobiles,
	    		error:function(XMLHttpRequest,textStatus){
					console.log(textStatus);

				},
				success:function(data,textStatus){
					console.log(data);
					code=data.data.code;
				}
	    	})
    	}

    });
    $("#submit").click(function(){
    	var newpwd=$("#newpwd input").val();
    	var enpwd=$("#ensurepwd input").val();
    	var incode=$("#incode").val();

    	var sub={};
    	sub['mobile']=mobile;
    	sub['pwd']=newpwd;
    	sub['pwd2']=enpwd;
    	sub['sms_code']=incode;
    	var subData=JSON.stringify(sub);
    	if (incode!=code) {
    		alert("验证码错误");
    	}else{
    		$.ajax({
    		url:"http://www.ftusix.com/static/data/reset.php",
    		type:"POST",
    		data:subData,
    		error:function(XMLHttpRequest,textStatus){
					console.log(textStatus);
				},
			success:function(data,textStatus){
					console.log(data);
				}
    		})
    	}
    	return false;


    })



});