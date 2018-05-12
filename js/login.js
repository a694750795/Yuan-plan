$(function (){
	$(".box").focus(function(){
		$(this).parent().css("border-color","red");
	}).blur(function(){
		$(this).parent().css("border-color","#999999");
	});
	$("#btn").click(function(e){
		$.post("http://www.ftusix.com/static/data/login.php",{
			mobile:$("#mobile").val(),
			pwd:$("#pwd").val()
		},function(data,textStatus){
			console.log(data);
		})

	})
});