$(function(){
        var mobile=getCookie('mobile');
        var nick_name=getCookie('nick_name');
        var sex=getCookie('sex');
        var token=getCookie('token');
        if(mobile!=null&&nick_name!=null&&sex!=null){
            if (sex==1) {
                var checked=true;
            }else{
                var checked=false;
            }
            var $span=$("<span>"+mobile+"</span>");
            var $nick=$("<input type='text' value='"+nick_name+"' id='nick_name'>");
            var $boy=$("<input type='radio' name='sex' id='boy' value='1' checked="+checked+">");
            var $t_boy=$("<label for='male'>男</label>");
            var $girl=$("<input type='radio' name='sex' id='girl' value='0' checked="+!checked+">");
            var $t_girl=$("<label for='female'>女</label>");

            $("#mobile").append($span);
            $("#nickName").append($nick);
            $("#inputSex").append($t_boy);
            $("#inputSex").append($boy);
            $("#inputSex").append($t_girl);
            $("#inputSex").append($girl);
        };

        $("#nickName input").focus(function(){
            $(this).css("border-color","#20A0FF");
        }).blur(function(){
            $(this).css("border-color","#BFCBD9");

        });

        $("#submit").click(function(){
            var updateMes={};
            updateMes['sex']=$("#inputSex input:checked").val();
            updateMes['nick_name']=$("#nick_name").val();
            updateMes['token']=token;
            var updateMessage=JSON.stringify(updateMes);
            $.ajax({
                url:"http://www.ftusix.com/static/data/update.php",
                type:"POST",
                data:updateMessage,
                error:function(XMLHttpRequest,textStatus){
                    console.log(textStatus);
                },
                success:function(data,textStatus){
                    if (data.status==1) {
                        $("#updateSuc").fadeIn('slow');
                        setTimeout(function(){
                            $("#updateSuc").fadeOut('slow')},2000);
                    }
                    console.log(data.status);
                }
            });
            return false;


        })




})