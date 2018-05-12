$(function (){
	$("input:not(#btn)").focus(function(){
		$(this).css("border-color","red");
	}).blur(function(){
		$(this).css("border-color","#999999");
	});
	$("#getBtn").click(function(){
		$.post("http://www.ftusix.com/static/data/sendsms.php",{
			"mobile":$("#mobile").val()
		})
	});
	$("#btn").click(function(){
		if($("#pwd1").val()==$("#pwd2").val()){
			$.post("http://www.ftusix.com/static/data/register.php",{
				"mobile":$("#mobile").val(),
				"pwd":$("#pwd1").val(),
				"sms_code":$("#put").val()

			})
		}else{
			alert("两次密码不一致！");
		}
	})
	
});