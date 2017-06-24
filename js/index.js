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

  $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat='+ loc[0] + '&lon=' + loc[1] + '&APPID='+ API_KEY).done(function(data){
  	// console.log('get the yayo ', + weather);
  	$('#weather').text(data.weather[0].description);
	$('#location').text(d.city + ', '+ d.region);
  	$('#temp').text(data.main.temp);
  	$('#wind').text(data.wind.speed);
  	$('#humidity').text(data.main.humidity);

  })

  // console.log(loc[0]+' and '+ loc[1]);

// 

 // checks user location and adds to page with city and region/state

// 

})


})
    });