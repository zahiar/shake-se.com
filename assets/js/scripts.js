jQuery(document).ready(function($) {
	$('.isotope').isotope({
		itemSelector: '.isotope-item',
		layoutMode: 'sloppyMasonry'
	});

	$('#requests-fulfilled-toggle').on('click', function() {
		$('#requests-fulfilled-list').toggle();
    	});

	$(".social-links").tipsy({gravity: 's'});
});