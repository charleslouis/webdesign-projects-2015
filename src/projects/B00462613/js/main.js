$(function() {
    


  

  // initialize the map 
    $("#map").googleMap({
      zoom: 10, // Initial zoom level (optional)
      coords: [49.033781, 2.076337], // Map center (optional)
      type: "ROADMAP" // Map type (optional)
    });
  

    // then bring the marker
  $("#map").addMarker({
      coords: [49.033781, 2.076337], // GPS coords
      url: 'https://www.google.fr/maps/@49.032791,2.0763247,15z?hl=fr', // Link to redirect onclick (optional)
      id: 'marker1' // Unique ID for your marker
    });


})

