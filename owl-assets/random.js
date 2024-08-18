$(document).ready(function() {

  //Sort random function
  function random(owlSelector){
	owlSelector.children().sort(function(){
		return Math.round(Math.random()) - 0.5;
	}).each(function(){
	  $(this).appendTo(owlSelector);
	});
  }

  $("#owl-demo").owlCarousel({
	navigation: false,
	pagination : false,
	paginationNumbers : false,
	autoPlay: 4000,
	//Call beforeInit callback, elem parameter point to $("#owl-demo")
	beforeInit : function(elem){
	  random(elem);
	}
  });
});