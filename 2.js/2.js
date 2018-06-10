var i=1;
var list=document.getElementsByTagName("li");  
        //轮播函数  
       function xiaopin(){  
            if(i>4){  
               i=i%5;  
           }  
           for(var m=0;m<list.length;m++){  
               if(list[m].style.backgroundColor=="green"){  
                    list[m].style.backgroundColor="black";  
                }  
                list[i].style.backgroundColor="green";  
            }  
            document.getElementById("img").src="imgs/"+i+".png";  
          i++;  
       }  
       //设置并开启一个定时器  
       var a=setInterval(xiaopin, 2000);  
        //鼠标摸进去事件  
        function mousemove(obj){  
            for(var m=0;m<list.length;m++){  
                if(list[m].style.backgroundColor=="green"){  
                    list[m].style.backgroundColor="black";  
                    document.getElementById("img").src="imgs/"+m+".png";  
                    i=m+1;  
                }  
            }  
            obj.style.backgroundColor="green";  
            clearInterval(a);  
       }  
        //鼠标摸出来时间  
        function mouseout(obj){  
            setTimeout(function(){  
 
           }, 2000);  
           a=setInterval(xiaopin, 2000);  
       }  
  
 

