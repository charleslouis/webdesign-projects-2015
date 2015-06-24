

$('#search-submit').click(function(e) {

	e.preventDefault();

	alert($('#style-selector').val());

	var searchedStyle = $('#style-selector').val();

	$( '.concert-feed-article' ).hide();

	$( '.concert-feed-article' ).each(function( index ) {
	  
	  console.log($( this ).attr( 'data-music-style' ));
	  
	  if($( this ).attr( 'data-music-style' ) === searchedStyle){
	  	$( this ).show();
	  }
	  
	});
 });
