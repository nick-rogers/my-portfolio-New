$(document).ready(function(){



// When the page is scrolled the nav bar shrinks and the contained elements shift
$(window).scroll(function(){
	var distFromTop = $(document).scrollTop();
	console.log(distFromTop);
	if(distFromTop > 5){
		$('.main').addClass('main-toggle');
		$('.main').removeClass('main');
		$('.top').addClass('top-shrink');
		$('.top').removeClass('top');
		$('.intro').fadeOut(100);
    }
    else {
    	$('.main-toggle').addClass('main');
		$('.main-toggle').removeClass('main-toggle');
		$('.top-shrink').addClass('top');
		$('.top-shrink').removeClass('top-shrink');
		$('.intro').fadeIn(300);
    }
});




// Causes hamburger icon to switch to x button, causes the menu bar to become visible 
var pageLinkOpen = false;
$('#nav-icon3').click(function(){
	$(this).toggleClass('open');
	//$('.page-link').css('display', 'block');
	if(pageLinkOpen){
		$('.page-link').fadeOut(400);
		pageLinkOpen = false;
	}
	else {
		$('.page-link').fadeIn(400);
		pageLinkOpen = true;
	}
});




});
