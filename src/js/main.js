jQuery(document).ready(function($) {
	var slideCount = $('.slider-container').find('li').length;
	var slideWidth = $('.slider-container').find('li').width();
	var slideHeight = $('.slider-container').find('li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('.slider-container').css({ width: slideWidth, height: slideHeight });
	$('.slider-container').find('ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	$('.slider-container').find('li').last().prependTo('.slider-container ul');

	function nextSlide(){
	$('.slider-container').find('ul').animate({
            left: - slideWidth
        }, 300, function () {
            $('.slider-container').find('li:first-child').appendTo('.slider-container ul');
            $('.slider-container').find('ul').css('left', '');
        });
}

	function prevSlide(){
	$('.slider-container').find('ul').animate({
            left: + slideWidth
        }, 300, function () {
            $('.slider-container').find('li:first-child').appendTo('.slider-container ul');
            $('.slider-container').find('ul').css('left', '');
        });
}

	$('.next-slide').on('click',  function() {
		nextSlide();
  });
	$('.prev-slide').on('click',  function() {
		prevSlide();
  });

});