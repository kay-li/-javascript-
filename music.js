$(function(){
    /*音乐*/
	var audio = $('#car_audio');

	//解决iOS微信自动播放问题
	function audioAutoPlay(id){  
	    var audio = document.getElementById(id),  
	        play = function(){  
	            audio.play();  
	            document.removeEventListener("touchstart",play, false);  
	        };  
	    audio.play();  
	    document.addEventListener("WeixinJSBridgeReady", function () {  
	        play();  
	    }, false);  
	    document.addEventListener('YixinJSBridgeReady', function() {  
	        play();  
	    }, false);  
	    document.addEventListener("touchstart",play, false);  
	} 
	audioAutoPlay('car_audio');  
	
	
	$('.music-icon').click(function(){
		if($(this).hasClass('change')){
			$(this).removeClass('change');
			audio[0].pause();
		}else{
			$(this).addClass('change');
			audio[0].play();
		}
	});
   
})   

