$(document).ready(function(){
	
	$(document).on('click', '.accordian button', function(){ 
		$('.accordian li').find('.tab_cont').slideUp();
		$(this).closest('li').next().find('.tab_cont').stop().slideDown();
		$(this).closest('.tab_cont').css('height','auto');
	});
	
	$(document).on('click', '.back-sec', function(){ 
		$('.accordian li').find('.tab_cont').slideUp();
		$(this).closest('li').prev().find('.tab_cont').stop().slideDown();
		$(this).closest('.tab_cont').css('height','auto');
	});
	
	$(document).on('click', '.accordian li h3', function(){
		$(this).closest('.tab_cont').css('height','auto');
		$(this).closest('.tab_cont').find('.inner_tab_cont').slideUp();
		$(this).closest('li').find('.inner_tab_cont').stop().slideToggle();
	});
	
});