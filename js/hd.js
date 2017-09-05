// 自带的js
 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
         });
//自带的js
  
//	音乐暂定开始
   var t = 1;
   
  var v = document.getElementById("v")
  var yin = document.getElementById("yin")
  	yin.onclick = function(){
  		if (t==1){
  			v.pause();
  			t=0;
  		}
  		else if(t==0){
  			v.play();
  			t=1;
  		}
  		
  	}



//	音乐暂定结束
		

		





