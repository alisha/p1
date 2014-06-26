$(document).ready(function() {
	/* Toggle text */
	$('.glyphicon').on('click', function() {
		//Hide the plus sign and show the minus sign
		$(this).closest('div').find('.hidden').removeClass('hidden');
		$(this).addClass('hidden');
		
		//If showing text, show div's color and keep the color
		if ($(this).hasClass('glyphicon-plus')) {
			$(this).closest('div').removeClass('unselected');
			$(this).closest('div').addClass('keepcolor');
		} else {
			$(this).closest('div').removeClass('keepcolor');
			$(this).closest('div').addClass('unselected');
		}

		//Toggle the answer
		$(this).closest('div').find('p').slideToggle();
	});

	/* Highlight question when you mouse over it */
	$('.question').on('mouseenter', function() {
		$(this).removeClass('unselected');
	})

	/* Unhighlight question when you are not mousing over it or viewing the answer */
	$('.question').on('mouseleave', function() {
		if (!($(this).hasClass('keepcolor'))) {
			$(this).addClass('unselected');
		}
	})
});
