/* ================================
===  BACKGROUND SLIDER        ====
================================= */
$.vegas('slideshow', {
  delay:7000,
  backgrounds:[
	{ src:'images/backgrounds/bg4.jpg', fade:1000 }
   
  ]
});
      
   
/* =================================
   LOADER                     
=================================== */
// makes sure the whole site is loaded
jQuery(window).load(function() {
        // will first fade out the loading animation
	//jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(0).fadeOut("fast");
})


/* =================================
===  Bootstrap Fix              ====
=================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}

/* =================================
===  STICKY NAV                 ====
=================================== */



/*---------------------------------------*/
    /*  SMOOTH SCROLL FRO INTERNAL #HASH LINKS
/*---------------------------------------*/
$(document).ready(function(){
    $('a[href^="#"].inpage-scroll, .inpage-scroll a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);
        $('.main-navigation a[href="' + target + '"]').addClass('active');
        $('.main-navigation a:not([href="' + target + '"])').removeClass('active');
        $('html, body').stop().animate({
            'scrollTop': ($target.offset()) ? $target.offset().top : 0
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
});



/*=================================
===  SMOOTH SCROLL             ====
=================================== */
var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';
    $('a.scrollto').bind('click.smoothscroll',function (event) {
        event.preventDefault();
        var target = this.hash;
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function () {
            window.location.hash = target;
        });
    });   


/* =================================
===  CONTACT FORM          ====
=================================== */

$("#contact-form").submit(function (e) {
    e.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };

    if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
        $.ajax({
            type: "POST",
            url: "sendmail.php",
            data: dataString,
            success: function () {
                $('.success').fadeIn(1000);
                $('.error').fadeOut(500);
            }
        });
    } else {
        $('.error').fadeIn(1000);
        $('.success').fadeOut(500);
    }

    return false;
});


/* ================================
===  PROJECT LOADING           ====
================================= */

jQuery(document).ready(function($) {
    $('.more').on('click', function(event) {
        event.preventDefault();

        var href = $(this).attr('href') + ' .single-project',
            portfolioList = $('#portfolio-list'),
            content = $('#loaded-content');

        portfolioList.animate({'marginLeft':'-120%'},{duration:400,queue:false});
        portfolioList.fadeOut(400);
        setTimeout(function(){ $('#loader').show(); },400);
        setTimeout(function(){
            content.load(href, function() {
                $('#loaded-content meta').remove();
                $('#loader').hide();
                content.fadeIn(600);
                $('#back-button').fadeIn(600);
            });
        },800);

    });

    $('#back-button').on('click', function(event) {
        event.preventDefault();

        var portfolioList = $('#portfolio-list')
            content = $('#loaded-content');

        content.fadeOut(400);
        $('#back-button').fadeOut(400);
        setTimeout(function(){
            portfolioList.animate({'marginLeft':'0'},{duration:400,queue:false});
            portfolioList.fadeIn(600);
        },800);
    });
});

/* ================================
===  PARALLAX                  ====
================================= */
$(document).ready(function(){
  var $window = $(window);
  $('div[data-type="background"], header[data-type="background"], section[data-type="background"]').each(function(){
    var $bgobj = $(this);
    $(window).scroll(function() {
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));
      var coords = '50% '+ yPos + 'px';
      $bgobj.css({ 
        backgroundPosition: coords 
      });
    });
  });
});


/* =================================
=== CUSTOM SCRIPT               ====
=================================== */

$(document).ready(function() {
	$(document).on('click','.login-btn',function(){
		$('.login-cont').show();
		$('.signup-cont').hide();
	});
	
	$(document).on('click','.open-login',function(){
		$('.login-cont').slideDown();
		$('.signup-cont').slideUp();
	});
	
	$(document).on('click','.signup-btn',function(){
		$('.signup-cont').show();
		$('.login-cont').hide();
	});
	
	$(document).on('click','.open-signup',function(){
		$('.signup-cont').slideDown();
		$('.login-cont').slideUp();
	});
	
});

/* =================================
===  WOW ANIMATION             ====
=================================== */




