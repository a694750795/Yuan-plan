//获取cookie中的数据
function getCookie(c_name){
            if (document.cookie.length>0){
              c_start=document.cookie.indexOf(c_name + "=");  
              /*document.cookie.indexOf(c_name+ "=")是取得这个cookie名在整个cookie中的位置
              （加“=”号：取cookie名加上等于号的位置，比方整个cookie是"user=tony;passwd=user123"，
              这时候查找名为user的cookie值的时候，是查找"user="的位置；如果不要等于号，就会找到其它位置的"user"，
              比如后面密码里面也有user字符，但并不是cookie中cookie名都是唯一的，所以加上等于号就不会出错。 ）*/

              if (c_start!=-1){ 
                c_start=c_start + c_name.length+1 ;
                /*c_start= c_start + c_name.length + 1是用先前取得的位置加上cookie名的长度再加1，
                就是把位置确定在这个cookie名的“=”符号的后面。*/

                c_end=document.cookie.indexOf(";",c_start);
                /*c_end= document.cookie.indexof(";", c_start)是从上一步的位置开始查找的，直到";"的位置。*/

                if (c_end==-1) c_end=document.cookie.length;
                return unescape(document.cookie.substring(c_start,c_end));
                /*document.cookie.substring(c_start,c_end)就是取该cookie名的等号后面到分号前面的字符串，即对应的cookie的值。*/
                } 
            }
            return "";
        }