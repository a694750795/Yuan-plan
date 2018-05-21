$(function(){
	var user_id=getCookie("user_id");
	$.ajax({
		url:"http://www.ftusix.com/static/data/myColl.php",
		type:"GET",
		data:{
			"user_id":user_id,
			"page":1
			},
		error:function(XMLHttpRequest,textStatus){
				console.log(textStatus);
			},
		success:function(data,textStatus){
			console.log(data);
		}
	})

})





	
