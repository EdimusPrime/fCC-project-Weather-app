$(document).ready(function() {

// looks for location

var loc;

$.getJSON('https://ipinfo.io', function(d){
  console.log(d)

  loc = d.loc

})




// function gettingJSON(){
//         document.write("jquery loaded");
//         $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London&APPID=ee6596241130f193adf1ba90e625cc10",function(json){
//             document.write(JSON.stringify(json));
//         });
//     }

	// var weather = new XMLHttpRequest();
	// weather.open("GET", "http://api.wunderground.com/api/e4153379418334ff/conditions/q/CA/San_Francisco.json", false);
	// weather.send(null);

	// var r=JSON.parse(weather.response);
	// var weather = r.current_observation.display_location.full + "<br/>";
	// var temp= r.current_observation.temperature_string + "<br/";
	// var wind= r.current_observation.wind_string + "<br/";
	// document.getElementById("weather").innerHTML= weather;
	// document.getElementById("temp").innerHTML= temp;
	// document.getElementById("wind").innerHTML= wind;



    });