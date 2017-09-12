$(document).ready(function() {
     //
    //  function floatClouds(){
    //    cloud.css('left', startPos);
    //    cloud.animate({left: -200}, 7000, 'linear')
    //  };
     //
    //   var screenWidth = $(document).width();
    //   var startPos = screenWidth;
    //   var cloud = $('#cloud_image')
    //   floatClouds();
    //   setInterval(function() {
    //     floatClouds();
    //   }, 9000);

        function float_across() {
          // $("").css('left', startPos);
          $("#cloud_image").css({position:'relative', left:-1200});
           $("#cloud_image").animate({left:'+=2500' }, 20000, float_across);
          //  $("#cloud_image").css({left:-1200, position:'absolute'});
          //  $("#cloud_image").animate({left:'-=2050'}, 5000, float_across);
       }

       float_across();
    });
