$(document).ready(function(){
      function loop() {
       $("#cloud_image").animate({top:'+=20'}, 2000);
       $("#cloud_image").animate({top:'-=20'}, 2000, loop);
   }

   loop();
})
