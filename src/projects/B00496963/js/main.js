
//You can find plugins here
//http://plugins.jquery.com/?s=gallery

// Map jquery comes from here:
// http://tilotiti.github.io/jQuery-Google-Map/

$(function() {
    $("#map").googleMap({
      zoom: 10,
      coords: [49.033554, 2.076819], // Map center (optional)
      type: "ROADMAP" // Map type (optional)
    });
 

$("#map").addMarker({
      coords: [49.033554, 2.076819], // GPS coords
      url: 'https://www.google.fr/maps/place/ESSEC+Business+School/@49.0332639,2.0762889,17z/data=!3m1!4b1!4m2!3m1!1s0x47e6f53ae44bd367:0xa3f3ee2330ea2664', // Link to redirect onclick (optional)
      id: 'marker1' // Unique ID for your marker
    });


$(document).ready(function(){
  $('#carousel').slick({
    autoplay: true,
    autoplaySpeed: 3000
  });
});

(function($) {
    $.fn.infiniteScroll = function(options) {
        $(window).scroll(function() {
            if (($(window).scrollTop() > $(document).height() - $(window).height() - $('#footer').height() - 20) && ($(window).scrollTop() < $(document).height() - $(window).height() - $('#footer').height() + 20) && !$(".infos").length) {
                $('#feed').append(options.displayLoading);
            }
        });
    };
})(jQuery);

})