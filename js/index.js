console.log("Welcome to WebDev");

$(document).ready(function(){
    $('.bxslider').bxSlider({
      pager: false,
      auto: true,
      speed: 9000,
      pause: 10000,
    });
  });
  
  jQuery(document).ready(function($){
    $(".back").click(function(){
        $('body,html').animate({
            scrollTop:0
        },'700')
    })
});