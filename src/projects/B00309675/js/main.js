

$('#search-submit').click(function(e) {

	e.preventDefault();

	// alert($('#style-selector').val());

	var searchedStyle = $('#style-selector').val();

	$( '.concert-feed-article' ).hide();

	$( '.concert-feed-article' ).each(function( index ) {
	  
	  console.log($( this ).attr( 'data-music-style' ));
	  
	  if( $( this ).attr( 'data-music-style' ) === searchedStyle){
	  	$( this ).show();
	  }
	  
	});
 });


$('#show-bonus-frame').click(function(event) {
	$('#bonus-frame').show();
});

$('#bonus-frame').click(function(event) {
	$(this).hide();
});

// $('html').click(function(event){
// 	$('#bonus-frame').hide();
// });

// $('#bonus-frame').click(function(event){
//     event.stopPropagation();
// });

$('.carousel').carousel()


			$(document).ready(function(){
			  $('.your-class').slick({
			    autoplay: ;
			  });
			});


$(function() {
        
     $('#post').click(function() {
            alert("test"); 
        });
    });

