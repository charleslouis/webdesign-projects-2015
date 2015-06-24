 $(function() {
 	//Initialize the map
    $("#map").googleMap({
      zoom: 8, // Initial zoom level (optional)
      coords: [48.858051,1.767922], // Map center (optional)
      type: "ROADMAP" // Map type (optional)
    });
//then bring the marker
     $("#map").addMarker({
      coords: [48.858051,1.767922], // GPS coords
      url: 'http://www.tiloweb.com', // Link to redirect onclick (optional)
      id: 'marker1' // Unique ID for your marker
    });

     $(document).ready(function(){
  $('#carousel').slick({
    //setting-name: setting-value
  });
});
     $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

  })
