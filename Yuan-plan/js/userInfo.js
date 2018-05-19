$(function(){
        function getCookie(c_name){
            if (document.cookie.length>0){
              c_start=document.cookie.indexOf(c_name + "=");
              if (c_start!=-1){ 
                c_start=c_start + c_name.length+1 ;
                c_end=document.cookie.indexOf(";",c_start);
                if (c_end==-1) c_end=document.cookie.length;
                return unescape(document.cookie.substring(c_start,c_end));
                } 
            }
            return "";
        }
        var mobile=getCookie('mobile');
        var nick_name=getCookie('nick_name');
        var sex=getCookie('sex');
        if(mobile!=null&&nick_name!=null&&sex!=null){
            var $span=$("<span>"+mobile+"</span>");
            var $nick=$("<input type='text' value='"+nick_name+"'>");
            var $boy=$("<input type='radio' name='sex' id='boy' value='male' checked='checked'>");
            var $t_boy=$("<label for='male'>男</label>");
            var $girl=$("<input type='radio' name='sex' id='girl' value='female'>");
            var $t_girl=$("<label for='female'>女</label>");

            $("#mobile").append($span);
            $("#nickName").append($nick);
            $("#inputSex").append($t_boy);
            $("#inputSex").append($boy);
            $("#inputSex").append($t_girl);
            $("#inputSex").append($girl);
        };




})