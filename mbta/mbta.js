// Javascript for MBTA lab

			function init()
			{

					// MBTA Red Line Stations
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

        // MBTA Orange Line Map

        // Orange Line Stations and coordinates
        var oak_grove = { lat: 42.4353430165, lng: -71.071189642 };
        var malden_center = { lat: 42.4273133438, lng: -71.073871851 };
        var wellington = { lat: 42.4042955853, lng: -71.0770046711};
        var sullivan_square = { lat: 42.3857548427, lng: -71.0770797729};
        var community_college = { lat: 42.3726383181, lng: -71.0702776909};
        var north = { lat: 42.365512, lng: -71.061423};
        var haymarket = { lat: 42.362498, lng: -71.058996};
        var state = { lat: 42.358897, lng: -71.057795};
        var chinatown = { lat: 42.352228, lng: -71.062892};
        var tufts_medical_center = { lat: 42.349873, lng: -71.063795};
        var back_bay = { lat: 42.3472772215, lng: -71.0760390759};
        var mass_ave_orange = { lat: 42.3415519196, lng: -71.0832166672};
        var ruggles = { lat: 42.3356674788, lng: -71.0905230045};
        var roxbury_crossing = { lat: 42.3315274209, lng: -71.0954046249};
        var jackson_square = { lat: 42.3227388088, lng: -71.1000823975};
        var stony_brook = { lat: 42.3192008078, lng: -71.1028289795};
        var green_street = { lat: 42.3105691548, lng: -71.107313633};
        var forest_hills = { lat: 42.300362, lng: -71.113411};





        // Orange Line Station markers
          var marker = new google.maps.Marker({
          position: oak_grove,
          icon: iconBase + 'rail.png',
          map: map
        });

  		  var marker = new google.maps.Marker({
          position: malden_center,
          icon: iconBase + 'rail.png',
          map: map
        });

  		  var marker = new google.maps.Marker({
          position: wellington,
          icon: iconBase + 'rail.png',
          map: map
        });	


  		  var marker = new google.maps.Marker({
          position: sullivan_square,
          icon: iconBase + 'rail.png',
          map: map
        });  

  		  var marker = new google.maps.Marker({
          position: community_college,
          icon: iconBase + 'rail.png',
          map: map
        }); 

  		  var marker = new google.maps.Marker({
          position: north,
          icon: iconBase + 'rail.png',
          map: map
        }); 

  		  var marker = new google.maps.Marker({
          position: haymarket,
          icon: iconBase + 'rail.png',
          map: map
        });                   		  

  		  var marker = new google.maps.Marker({
          position: state,
          icon: iconBase + 'rail.png',
          map: map
        });                   		  
  		  
  		  var marker = new google.maps.Marker({
          position: downtown_crossing,
          icon: iconBase + 'rail.png',
          map: map
        });                   		  
  		  
  		  var marker = new google.maps.Marker({
          position: chinatown,
          icon: iconBase + 'rail.png',
          map: map
        });                   		  

  		  var marker = new google.maps.Marker({
          position: tufts_medical_center,
          icon: iconBase + 'rail.png',
          map: map
        });                   		  

  		  var marker = new google.maps.Marker({
          position: back_bay,
          icon: iconBase + 'rail.png',
          map: map
        });                   		  

  		  var marker = new google.maps.Marker({
          position: mass_ave_orange,
          icon: iconBase + 'rail.png',
          map: map
        });                   		  

  		  var marker = new google.maps.Marker({
          position: ruggles,
          icon: iconBase + 'rail.png',
          map: map
        });                   		  

  		  var marker = new google.maps.Marker({
          position: roxbury_crossing,
          icon: iconBase + 'rail.png',
          map: map
        });                   		  

  		  var marker = new google.maps.Marker({
          position: jackson_square,
          icon: iconBase + 'rail.png',
          map: map
        });                   		  

  		  var marker = new google.maps.Marker({
          position: stony_brook,
          icon: iconBase + 'rail.png',
          map: map
        });                   		  

  		  var marker = new google.maps.Marker({
          position: green_street,
          icon: iconBase + 'rail.png',
          map: map
        });                   		  

  		  var marker = new google.maps.Marker({
          position: forest_hills,
          icon: iconBase + 'rail.png',
          map: map
        });                   		  

  		// Orange Line Polyline (don't forget dtcrossing)

  		   var orange_line_path = [
           { lat: 42.4353430165, lng: -71.071189642 },
         { lat: 42.4273133438, lng: -71.073871851 },
         { lat: 42.4042955853, lng: -71.0770046711},
         { lat: 42.3857548427, lng: -71.0770797729},
         { lat: 42.3726383181, lng: -71.0702776909},
         { lat: 42.365512, lng: -71.061423},
         { lat: 42.362498, lng: -71.058996},
         { lat: 42.358897, lng: -71.057795},
         { lat: 42.355518, lng: -71.060225},
         { lat: 42.352228, lng: -71.062892},
         { lat: 42.349873, lng: -71.063795},
         { lat: 42.3472772215, lng: -71.0760390759},
         { lat: 42.3415519196, lng: -71.0832166672},
         { lat: 42.3356674788, lng: -71.0905230045},
         { lat: 42.3315274209, lng: -71.0954046249},
         { lat: 42.3227388088, lng: -71.1000823975},
         { lat: 42.3192008078, lng: -71.1028289795},
         { lat: 42.3105691548, lng: -71.107313633},
         { lat: 42.300362, lng: -71.113411}

        ];
        var orange_line = new google.maps.Polyline({
          path: orange_line_path,
          geodesic: true,
          strokeColor: '#FFA500',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        orange_line.setMap(map);

        // MBTA Blue Line
        var wonderland = { lat: 42.414246, lng: -70.992144};
        var revere_beach = { lat: 42.4071633648, lng: -70.992193222};
        var beachmont = { lat: 42.3974187182, lng: -70.992193222};
        var suffolk_downs = { lat: 42.3884015915, lng: -71.0003578663};
        var orient_heights = { lat: 42.386676, lng: -71.006628};
        var wood_island = { lat: 42.380797, lng: -71.023394};
        var airport = { lat: 42.3727334327, lng: -71.035194397};
        var maverick = { lat: 42.36886, lng: -71.039926};
        var aquarium = { lat: 42.359456, lng: -71.05357};
        var government_center = { lat: 42.359297, lng: -71.059895};
        var bowdoin = { lat: 42.361457, lng: -71.062129};


        // MBTA Blue Line markers
  		  var marker = new google.maps.Marker({
          position: wonderland,
          icon: iconBase + 'rail.png',
          map: map
        });

  		  var marker = new google.maps.Marker({
          position: revere_beach,
          icon: iconBase + 'rail.png',
          map: map
        });


  		  var marker = new google.maps.Marker({
          position: beachmont,
          icon: iconBase + 'rail.png',
          map: map
        });


  		  var marker = new google.maps.Marker({
          position: suffolk_downs,
          icon: iconBase + 'rail.png',
          map: map
        });

  		  var marker = new google.maps.Marker({
          position: orient_heights,
          icon: iconBase + 'rail.png',
          map: map
        });

  		  var marker = new google.maps.Marker({
          position: wood_island,
          icon: iconBase + 'rail.png',
          map: map
        });

  		  var marker = new google.maps.Marker({
          position: airport,
          icon: iconBase + 'rail.png',
          map: map
        });

  		  var marker = new google.maps.Marker({
          position: maverick,
          icon: iconBase + 'rail.png',
          map: map
        });

  		  var marker = new google.maps.Marker({
          position: aquarium,
          icon: iconBase + 'rail.png',
          map: map
        });

  		  var marker = new google.maps.Marker({
          position: government_center,
          icon: iconBase + 'rail.png',
          map: map
        });

  		  var marker = new google.maps.Marker({
          position: bowdoin,
          icon: iconBase + 'rail.png',
          map: map
        });




  		   var blue_line_path = [
         { lat: 42.414246, lng: -70.992144},
         { lat: 42.4071633648, lng: -70.992193222},
         { lat: 42.3974187182, lng: -70.992193222},
         { lat: 42.3884015915, lng: -71.0003578663},
         { lat: 42.386676, lng: -71.006628},
         { lat: 42.380797, lng: -71.023394},
         { lat: 42.3727334327, lng: -71.035194397},
         { lat: 42.36886, lng: -71.039926},
         { lat: 42.359456, lng: -71.05357},
         { lat: 42.358897, lng: -71.057795},
         { lat: 42.359297, lng: -71.059895},
         { lat: 42.361457, lng: -71.062129}



        ];
        var blue_line = new google.maps.Polyline({
          path: blue_line_path,
          geodesic: true,
          strokeColor: '#0000FF',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        blue_line.setMap(map);



        	// Ending brace below
			}






