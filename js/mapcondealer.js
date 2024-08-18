function initialize() {
		var myLatlng = new google.maps.LatLng(51.704969, 0.114689);
        var mapCanvas = document.getElementById('mapcondealer');
        var mapOptions = {
			disableDefaultUI: true,	
			center: myLatlng,
			zoom: 10,
			mapTypeControl: true,
			mapTypeControlOptions: {
				style: google.maps.MapTypeControlStyle.DEFAULT,
				mapTypeIds: [
						google.maps.MapTypeId.ROADMAP,
						google.maps.MapTypeId.SATELLITE
			]},
			scrollwheel: false,
			zoomControl: true,
			zoomControlOptions: {
					style: google.maps.ZoomControlStyle.LARGE
					}
			}
        var map = new google.maps.Map(mapCanvas, mapOptions)
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'CES Software Ltd.'
		});
  
        var infowindow = new google.maps.InfoWindow({
			content: '<strong>CES Software Ltd.<\/strong><br>39 Lindsey Street, Epping, CM16 6RB<br>'
			});
			google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, marker);
			});
			infowindow.open(map, marker);
      
 }	  
 
google.maps.event.addDomListener(window, 'load', initialize);
