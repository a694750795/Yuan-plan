$(function (){
	$("input:not(#btn)").focus(function(){
		$(this).css("border-color","red");
	}).blur(function(){
		$(this).css("border-color","#999999");
	});

	$("#btn").click(function(){
		var info={}
		info["mobile"]=$("#mobile").val();
		info["pwd"]=$("#pwd1").val();
		info["sms_code"]=$("#put").val();
		infos=JSON.stringify(info);

		if ($("#mobile").val()=='') {
			$("#empho").fadeIn('slow');
			setTimeout(function(){
				$("#empho").fadeOut("slow");},2000);
		}
		else if($("#pwd1").val()=='' && $("#pwd2").val()=='') {
			$("#empwd").fadeIn('slow');
			setTimeout(function(){
				$("#empwd").fadeOut("slow");},2000);
		}else if($("#pwd1").val()!=$("#pwd2").val()){
			$("#diff").fadeIn('slow');
			setTimeout(function(){
				$("#diff").fadeOut("slow");},2000);
		}else if($("#put").val()!=code){
			$("#wrcode").fadeIn('slow');
			setTimeout(function(){
				$("#wrcode").fadeOut("slow");},2000);
		}else{
			$.post("http://www.ftusix.com/static/data/register.php",infos,function(data,textStatus){
				console.log(data);
				window.location.href="login.html";
			})
			
		}
	});
	$("#getBtn").click(function(){
		set_Time(this);
		var obj={};
		obj["mobile"]=$("#mobile").val();
		mobile=JSON.stringify(obj);

		if ($("#mobile").val()=='') {
			$("#empho").fadeIn('slow');
			setTimeout(function(){
				$("#empho").fadeOut("slow");},2000);
		}else if($("#pwd1").val()=='' && $("#pwd2").val()=='') {
			$("#empwd").fadeIn('slow');
			setTimeout(function(){
				$("#empwd").fadeOut("slow");},2000);
		}else if($("#pwd1").val()!=$("#pwd2").val()){
			$("#diff").fadeIn('slow');
			setTimeout(function(){
				$("#diff").fadeOut("slow");},2000);
		}else{
			$.ajax({
			type:"POST",
			url:"http://www.ftusix.com/static/data/sendsms.php",
			data:mobile,
			error:function(XMLHttpRequest,textStatus){
				console.log(textStatus);
			},
			success:function(data,textStatus){
				console.log(data);
				code=data.data.code;
			}

			});
		}

	});

	var count=60;
	function set_Time(obj){
		if (count>0) {
			$(obj).attr("disabled","disabled");
			$(obj).val(count+"秒后重新获取");
			$(obj).css("background-color","#999999");
			count=count-1;
			setTimeout(function(){
				set_Time(obj);
			},1000);
		}else{
			$(obj).removeAttr("disabled");
			$(obj).val("获取验证码");
			$(obj).css("background-color","#77C34B");
			count=60;
		}

	}


	
});