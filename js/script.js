$(document).ready(function() {
	$('.glyphicon').on('click', function() {
		$(this).closest('div').find('.hidden').removeClass('hidden')
		$(this).addClass('hidden')
		$(this).closest('div').find('p').slideToggle("slow");
	});
});
