// Javascript for MBTA

			function init()
			{

				    var south_station = {lat: 42.352271, lng: -71.05524200000001};
       				var andrew = {lat: 42.330154, lng: -71.057655};
        			var porter_square = {lat: 42.3884, lng: -71.11914899999999};
        			var harvard_square = {lat: 42.373362, 
          			lng: -71.118956};
        			var jfk_umass = { lat:42.320685, lng: -71.052391};
        			var savin_hill = { lat: 42.31129, lng: -71.053331};
        			var park_street = { lat: 42.35639457, lng: -71.0624242};
        			var broadway = { lat: 42.342622, lng: -71.056967};
        			var north_quincy = { lat: 42.275275, lng: -71.029583};
        			var shawmut = { lat: 42.29312583, lng: -71.06573796000001};
        			var davis = { lat: 42.39674 , lng: -71.121815};
        			var alewife = { lat: 42.395428, lng: -71.142483}
        			var kendall_mit = { lat: 42.36249079, lng: -71.08617653};
        			var charles_mgh = { lat: 42.361166, lng: -71.070628};
        			var downtown_crossing = { lat: 42.355518, lng: -71.060225};
        			var quincy_center = { lat: 42.251809, 
          				lng: -71.005409};
        			var quincy_adams = { lat: 42.233391, lng: -71.007153};
        			var ashmont = { lat: 42.284652, lng: -71.06448899999999};
        			var wollaston = { lat: 42.2665139, lng: -71.0203369};
        			var fields_corner = { lat: 42.300093, 
          				lng: -71.061667};
        			var central_square = { lat: 42.365486, lng: -71.103802};
        			var braintreee = { lat: 42.2078543, lng: -71.0011385};
        			// create other vars for other stations
        			// then make markers for them
        			// eventually try to make them custom
        			// also eventually will have to change the js and css 
        			// to their own files. 


       				 // The actual initialization of the map
        			var map = new google.maps.Map(document.getElementById('map_canvas'), {
          			zoom: 11,
          			center: south_station
       				 });

        			        // creates the link since it can't easily be typed
        // in Javascript without the double slash creating 
        // a comment. 
        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

        var marker = new google.maps.Marker({
          position: south_station,
          icon: iconBase + 'rail.png',
          map: map
        });

        var marker = new google.maps.Marker({
          position: andrew,
          icon: iconBase + 'rail.png',
          map: map
        });

        var marker = new google.maps.Marker({
          position: porter_square,
          icon: iconBase + 'rail.png',
          map: map
        });

        var marker = new google.maps.Marker({
          position: harvard_square,
          icon: iconBase + 'rail.png',
          map: map
        });

        var marker = new google.maps.Marker({
          position: jfk_umass,
          icon: iconBase + 'rail.png',
          map: map
        });

        var marker = new google.maps.Marker({
          position: savin_hill,
          icon: iconBase + 'rail.png',
          map: map
        });

        var marker = new google.maps.Marker({
          position: park_street,
          icon: iconBase + 'rail.png',
          map: map
        });

        var marker = new google.maps.Marker({
          position: broadway,
          icon: iconBase + 'rail.png',
          map: map
        });

        var marker = new google.maps.Marker({
          position: north_quincy,
          icon: iconBase + 'rail.png',
          map: map
        });

        var marker = new google.maps.Marker({
          position: shawmut,
          icon: iconBase + 'rail.png',
          map: map
        });

        var marker = new google.maps.Marker({
          position: davis,
          icon: iconBase + 'rail.png',
          map: map
        });

        var marker = new google.maps.Marker({
          position: alewife,
          icon: iconBase + 'rail.png',
          map: map
        });

        var marker = new google.maps.Marker({
          position: kendall_mit,
          icon: iconBase + 'rail.png',
          map: map
        });

        var marker = new google.maps.Marker({
          position: charles_mgh,
          icon: iconBase + 'rail.png',
          map: map
        });

        var marker = new google.maps.Marker({
          position: downtown_crossing,
          icon: iconBase + 'rail.png',
          map: map
        });

        var marker = new google.maps.Marker({
          position: quincy_center,
          icon: iconBase + 'rail.png',
          map: map
        });

        var marker = new google.maps.Marker({
          position: quincy_adams,
          icon: iconBase + 'rail.png',
          map: map
        });

        var marker = new google.maps.Marker({
          position: ashmont,
          icon: iconBase + 'rail.png',
          map: map
        });

        var marker = new google.maps.Marker({
          position: wollaston,
          icon: iconBase + 'rail.png',
          map: map
        });

        var marker = new google.maps.Marker({
          position: fields_corner,
          icon: iconBase + 'rail.png',
          map: map

        });
        var marker = new google.maps.Marker({
          position: central_square,
          icon: iconBase + 'rail.png',
          map: map

        });
        var marker = new google.maps.Marker({
          position: braintreee,
          icon: iconBase + 'rail.png',
          map: map
        });

                // Now you have to think about creating the 
        // polyline!!
        // Use some of this sample code from the website.
        //
        // First Line Segment: Alewife -> Davis -> Porter ->
        // harvard -> central -> kendall -> Charles/mgh ->
        // park street -> dt crossing -> south -> broadway ->
        // andrew -> jfk/umass

         var first_segment = [
          {lat: 42.395428, lng: -71.142483},
          {lat: 42.39674, lng: -71.121815},
          {lat: 42.3884, lng: -71.11914899999999},
          {lat: 42.373362, lng: -71.118956},
          {lat: 42.365486, lng: -71.103802},
          {lat: 42.36249079, lng: -71.08617653},
          {lat: 42.361166, lng: -71.070628},
          {lat: 42.35639457, lng: -71.0624242},
          {lat: 42.355518, lng: -71.060225},
          {lat: 42.352271, lng: -71.05524200000001},
          {lat: 42.342622, lng: -71.056967},
          {lat: 42.330154, lng: -71.057655},
          {lat: 42.320685, lng: -71.052391}

        ];
        var alewife_to_jfk = new google.maps.Polyline({
          path: first_segment,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        alewife_to_jfk.setMap(map);

        // Second segment
        // Second Line Segment: jfk/umass -> north quincy ->
        // Wollaston -> Quincy Center -> Quincy Adams -> 
        // Braintree
         var second_segment = [
          {lat: 42.320685, lng: -71.052391},
          {lat: 42.275275, lng: -71.029583},
          {lat: 42.2665139, lng: -71.0203369},
          {lat: 42.251809, lng: -71.005409},
          {lat: 42.233391, lng: -71.007153},
          {lat: 42.2078543, lng: -71.0011385}

        ];

        var jfk_to_braintree = new google.maps.Polyline({
          path: second_segment,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        jfk_to_braintree.setMap(map);


        // Third Line Segment: jfk/umass -> Savin Hill -> 
        // Fields corner -> Shawmut -> Ashmont

           var third_segment = [
          {lat: 42.320685, lng: -71.052391},
          {lat: 42.31129, lng: -71.053331},
          {lat: 42.300093, lng: -71.061667},
          {lat: 42.29312583, lng: -71.06573796000001},
          {lat: 42.284652, lng: -71.06448899999999}

        ];

        var jfk_to_ashmont = new google.maps.Polyline({
          path: third_segment,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        jfk_to_ashmont.setMap(map);

			}





      
