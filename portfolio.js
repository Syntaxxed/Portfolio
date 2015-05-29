var main = function() {
"use strict"

 $('img.foto').click(function() {
            window.location.href = this.id + '.html';
        });

}

$(function(){
  $('.topbar').data('size','big');
});

$(window).scroll(function(){

  if($(document).scrollTop() > 0)
{
    if($('.topbar').data('size') == 'big')
    {
        $('.topbar').data('size','small');
        $('.topbar').stop().animate({
            height:'5em'
        },600);
        
        $('#logo').addClass('hidden');

        $('nav').addClass('scrollclassnav');
        $('header').addClass('center')

        /*$('nav').stop().animate({
        	width: '90em',
			height: '2.9em',
			/*float: 'none',
			fontSize: '1em',
			marginTop: '0.9em',
        }, 1000);

        $('header').stop().animate({
        	text-align: 'center'
        }, 600);*/

    }
}
else
  {
    if($('.topbar').data('size') == 'small')
      {
        $('.topbar').data('size','big');
        $('.topbar').stop().animate({
            height:'10em'
        },600);

        $('#logo').removeClass('hidden');

        $('nav').removeClass('scrollclassnav');
        $('header').removeClass('center')
      }  
  }
});


 $(".navtop").hide();  

  $(window).bind('scroll', function(){
    if($(this).scrollTop() > 200) { 
      $(".navtop").fadeIn(300);
   }

   else {
    $(".navtop").fadeOut(300);
   }

  }); 


$(document).ready(main);

/* http://stackoverflow.com/questions/8536653/onclick-on-a-image-to-navigate-to-another-page-using-javascript */