$(document).ready(function () {
	let tab = $('.tab');
	tab.on('click', function (event) {
		event.preventDefault();
		let activeContent = $(this).attr('href');
		$('.visible').toggleClass('visible');
		$(activeContent).toggleClass('visible');
		$('.tab-active').toggleClass('tab-active');
		$(this).toggleClass('tab-active');
	});
});