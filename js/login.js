$(function (){
	$(".box").focus(function(){
		$(this).parent().css("border-color","red");
	}).blur(function(){
		$(this).parent().css("border-color","#999999");
	});



	$("#btn").click(function(e){
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
			type:"POST",
			url:"http://www.ftusix.com/static/data/login.php",
			data:{
				mobile:$("#mobile").val(),
				pwd:$("#pwd").val()
			},
			dataType:"text",
			error:function(XMLHttpRequest,textStatus){
				console.log(textStatus);

			},
			success:function(data,textStatus){

				console.log(textStatus);

			}

		})

		}




		


		/*$.post("http://www.ftusix.com/static/data/login.php",{
			mobile:$("#mobile").val(),
			pwd:$("#pwd").val()
		},function(data,textStatus){
			console.log(data);
		})*/

	})
});