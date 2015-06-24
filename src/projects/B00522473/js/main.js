$(document).ready(function(event) {
  $("#bonus-panel").hide(); 

});

$(document).ready(function(){



$(function() {
    $("#map").googleMap({
      zoom: 10, // Initial zoom level (optional)
      coords: [48.895651, 2.290569], // Map center (optional)
      type: "ROADMAP" // Map type (optional)
    });
    $("#map").addMarker({
      coords: [48.895651, 2.290569], // GPS coords
      url: 'http://www.tiloweb.com', // Link to redirect onclick (optional)
      id: 'marker1' // Unique ID for your marker
    });
  });
	




});


$('#bonus-button').click(function(event)
{   
    $("#bonus-panel").toggle();     
});



