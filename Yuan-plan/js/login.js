$(function (){
	$(".box").focus(function(){
		$(this).parent().css("border-color","red");
	}).blur(function(){
		$(this).parent().css("border-color","#999999");
	});



	$("#btn").click(function(e){
		var obj={};
		obj["mobile"]=$("#mobile").val();
		obj["pwd"]=$("#pwd").val();
		jsons=JSON.stringify(obj);

		if ($("#mobile").val()=='') {
			$("#empho").fadeIn('slow');
			setTimeout(function(){
				$("#empho").fadeOut("slow");},2000);
		}
		else if($("#pwd").val()=='') {
			$("#empwd").fadeIn('slow');
			setTimeout(function(){
				$("#empwd").fadeOut("slow");},2000);
		}else{
			$.ajax({
			contentType:"application/json",
			type:"POST",
			url:"http://www.ftusix.com/static/data/login.php",
			data:jsons,
			dataType:"json",
			error:function(XMLHttpRequest,textStatus){
				console.log(textStatus);

			},
			success:function(data,textStatus){

				console.log(data);
				if(data.status==1){
					if ($("#autoLog").is(":checked")) {
						setCookie('mobile',data.data[0].mobile,7);
						setCookie('nick_name',data.data[0].nick_name,7);
						setCookie('sex',data.data[0].sex,7);
						setCookie('token',data.data[0].token,7);
						
					}else{
						setCookie('mobile',data.data[0].mobile);
						setCookie('nick_name',data.data[0].nick_name);
						setCookie('sex',data.data[0].sex);
						setCookie('token',data.data[0].token);
					}
					window.location.href="user/userInfo.html";
				}

			}

		})

		}

	

	});
	function setCookie(c_name,value,expiredays){
		var exdate=new Date();
		exdate.setDate(exdate.getDate()+expiredays);
		document.cookie=c_name+ "=" +escape(value)+
		((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
	}
});