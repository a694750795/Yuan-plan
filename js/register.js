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
		}
		else{
			$.post("http://www.ftusix.com/static/data/register.php",{
				"mobile":$("#mobile").val(),
				"pwd":$("#pwd1").val(),
				"sms_code":$("#put").val()
			})
			
		}
	});

	
});