$(function(){
	$.ajax({
		contentType:"application/json",
		type:"GET",
		url:"http://www.ftusix.com/static/data/topicList.php",
		data:{
			"type":1,
			"sort":"hot",
			"page":null,
			"index":true,
		},
		dataType:"json",
		error:function(XMLHttpRequest,textStatus){
				console.log(textStatus);
			},
		success:function(data,textStatus){
			console.log(data);

		}
	});

});