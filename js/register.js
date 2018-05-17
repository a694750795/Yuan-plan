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
		}
		else{
			$.post("http://www.ftusix.com/static/data/register.php",infos,function(data,textStatus){
				console.log(data);
			})
			
		}
	});
	$("#getBtn").click(function(){
		var obj={};
		obj["mobile"]=$("#mobile").val();
		mobile=JSON.stringify(obj);
		$.ajax({
			type:"POST",
			url:"http://www.ftusix.com/static/data/sendsms.php",
			data:mobile,
			error:function(XMLHttpRequest,textStatus){
				console.log(textStatus);
			},
			success:function(data,textStatus){
				console.log(data);
			}

		})
	})


	
});