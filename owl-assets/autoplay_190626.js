$(document).ready(function() {
  $("#owl-modules").owlCarousel({
	autoPlay: 2000,
	items : 4,
	pagination: false,
	navigation: true,
	navigationText: [
        "&#10094;",
        "&#10095;"
        ],
	itemsDesktop : [1199,3],
	itemsDesktopSmall : [979,3]
  });

});