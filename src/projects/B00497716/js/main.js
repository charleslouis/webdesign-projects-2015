


$('#search-submit-destination').click(function(e) {

	e.preventDefault();

	alert($('#destination-selector').val());

	var destinationSelector = $('#destination-selector').val();

	$('.col-lg-12 text-center destination-feed-article').hide();

	$('.col-lg-12 text-center destination-feed-article').each(function( index ) {
	  
	  console.log($( this ).attr( 'data-destination' ));
	  
	  if($(this).attr('data-destination') === destinationSelector){
	  	$(this).show();
	  }
	  
	});
 });

$('#search-submit-theme').click(function(e) {

	e.preventDefault();

	alert($('#theme-selector').val());

	var themeSelector = $('#theme-selector').val();

	$('.col-lg-12 text-center theme-feed-article').hide();

	$('.col-lg-12 text-center theme-feed-article').each(function( index ) {
	  
	  console.log($( this ).attr( 'data-theme' ));
	  
	  if($(this).attr('data-theme') === themeSelector){
	  	$(this).show();
	  }
	  
	});
 });

$('#search-submit-category').click(function(e) {

	e.preventDefault();

	alert($('#category-selector').val());

	var categorySelector = $('#category-selector').val();

	$('.col-lg-12 text-center category-feed-article').hide();

	$('.col-lg-12 text-center category-feed-article').each(function( index ) {
	  
	  console.log($( this ).attr( 'data-category' ));
	  
	  if($(this).attr('data-category') === categorySelector){
	  	$(this).show();
	  }
	  
	});
 });

