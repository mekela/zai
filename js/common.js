$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		margin: 10,
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

	/*--------------------------       arr top         --------------------------*/
	$('#top').on('click',function(){
		$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top},800);
		return false;
	});
	$(window).scroll(function(event) {
		var top = $(document).scrollTop();
		if (top > 400) {
			$('#top').show();
		} 
		else {
			$('#top').hide();
		}
	});

	
	//bxslider
	$('.bxslider').bxSlider({
	  nextSelector: '#slider-next',
	  prevSelector: '#slider-prev',
	  nextText: 'Onward →',
	  prevText: '← Go back'
	});
});