$(document).ready(function(){
  console.log('ready and loaded');
  $(document).on("click","#home_link, #about_link, #testimonials_link,"+
   "#contact_link", function(){
    // console.log($(this).attr("id"));
    var elemId = $(this).attr("id");
    console.log(elemId);
    if(elemId === "home_link"){
      $("body").animate(
        {scrollTop: $("#cloud").offset().top - 100},
        1000
      );
    } else if(elemId === "about_link"){
      $("body").animate(
        {scrollTop: $("#about").offset().top - 100},
        1000
      );
    } else if(elemId === "testimonials_link"){
      $("body").animate(
        {scrollTop: $("#testimonials").offset().top - 100},
        1000
      );
    } else if(elemId === "contact_link"){
      $("body").animate(
        {scrollTop: $("#footer").offset().top - 100},
        1000
      );
    } else{
      console.log("id not recognized");
    }
  });
});
