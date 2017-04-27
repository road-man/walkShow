$(function(){
	var myswiper = new Swiper("#swi",{
		"direction":"vertical",
		onInit: function(swiper){
			swiperAnimateCache(swiper); 
		    swiperAnimate(swiper);
		}, 
		onSlideChangeEnd: function(swiper){ 
			swiperAnimate(swiper);
		}
	});
	
	var myswiper1 = new Swiper(".slide4",{
		onInit: function(swiper){
			swiperAnimateCache(swiper); 
		    swiperAnimate(swiper);
		}, 
		onSlideChangeEnd: function(swiper){ 
			swiperAnimate(swiper);
		}
	})

})
