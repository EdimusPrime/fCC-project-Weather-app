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

  $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat='+ loc[0] + '&lon=' + loc[1] + '&units=imperial&APPID='+ API_KEY).done(function(data){
  	$('#weather').text(" " + data.weather[0].description);
	$('#location').text(d.city + ', '+ d.region);
  	$('#high').text(data.main.temp_max);
  	$('#low').text(data.main.temp_min);
  	$('#temp').text(data.main.temp);
  	$('#wind').text(data.wind.speed + ' mph');
  	$('#humidity').text(data.main.humidity + '%');

  	var icon= data.weather[0].icon;
  	var iconSrc= "http://openweathermap.org/img/w/" + icon +".png"; 

  	$('#weather').prepend('<img src='+ iconSrc + '>');

  	var weatherID= data.weather[0].id;
  	console.log(weatherID);

  	if (weatherID >= 200 && weatherID<532 || weatherID >=960 && weatherID<963){
  		$('.seasons').css("display", "none");
  		$('.rain').css("display", "flex");
  	} else if (weatherID >= 600 && weatherID<622){
  		$('.seasons').css("display", "none");
  		$('.snow').css("display", "flex");
  	} else if (weatherID == 800 || weatherID==951){
  		$('.seasons').css("display", "none");
  		$('.sun').css({"display": "flex", "background-color": "#00BFFF"});

  	} else if (weatherID > 800 && weatherID< 806){
  		$('.seasons').css("display", "none");
  		$('.cloudy').css("display", "flex");
  	} else if (weatherID >951 && weatherID<960){
  		$('.seasons').css("display", "none");
  		$('.windy').css("display", "flex");
  	}


  })

  // console.log(loc[0]+' and '+ loc[1]);

// 

 // checks user location and adds to page with city and region/state

// 

})


})
    });