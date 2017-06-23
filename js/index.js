$(document).ready(function() {

// API key for rest of code

var API_KEY = "eb7a60b05dc5c676d33e0f9d5b383737";


$(function(){


// looks for location

var loc;

$.getJSON('https://ipinfo.io', function(d){
  console.log(d)

  loc = d.loc.split(',');
  console.log(loc);

  $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' 
  	+ loc[0] + '&lon=' + loc[1] + '&APPID='+ API_KEY, function(wd){
  	console.log('get the yayo ', + wd);

  	
  });

  // console.log(loc[0]+' and '+ loc[1]);



 // checks user location and adds to page with city and region/state
$('#location').text(d.city + ', '+ d.region);

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


})
    });