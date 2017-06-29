$(document).ready(function() {

// API key for rest of code

	var API_KEY = "eb7a60b05dc5c676d33e0f9d5b383737";
	var wd;
	var units=false;

	// function displayTemp(fTemp,  c){
	// 	if (c) return Math.round((fTemp - 32) * (5/9)) + "C";
	// 	return Math.round(fTemp) + "F";
	// }

$(function(){


// looks for location

var loc;

$.getJSON('https://ipinfo.io', function(d){
  loc = d.loc.split(',');

  $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat='+ loc[0] + 
  	'&lon=' + loc[1] + '&units=imperial&APPID='+ API_KEY).done(function(APIdata){
  	
  	wd=APIdata;

  	var weather=wd.weather[0].description;
  	var location=d.city + ', '+ d.region;
  	var highTemp=wd.main.temp_max;
  	var lowTemp=wd.main.temp_min;
  	var curTemp=wd.main.temp;
  	var wind=wd.wind.speed;
	var humidity=wd.main.humidity;

  	$('#weather').text(" " + weather);
	$('#location').text(location);
  	$('#high').text(highTemp + "F");
  	$('#low').text(lowTemp + "F");
  	$('#temp').text(curTemp + "F");
  	$('#wind').text( wind + ' mph');
  	$('#humidity').text( humidity+ '%');

  	var icon= wd.weather[0].icon;
  	var iconSrc= "http://openweathermap.org/img/w/" + icon +".png"; 

  	$('#weather').prepend('<img src='+ iconSrc + '>');

  	var weatherID= wd.weather[0].id;

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
  	} else if (weatherID >951 && weatherID<963){
  		$('.seasons').css("display", "none");
  		$('.windy').css("display", "flex");
  	}
  })

   $('.btn').click(function(){
   

   	if (units===false){
   		units =true;

   		var highTemp=Math.round((wd.main.temp_max - 32) * (5/9)) + "C";;
  		var lowTemp=Math.round((wd.main.temp_min - 32) * (5/9)) + "C"
  		var curTemp=Math.round((wd.main.temp - 32) * (5/9)) + "C"
  		$('#high').text(highTemp);
  		$('#low').text(lowTemp);
  		$('#temp').text(curTemp);

  	} else {
  		units=false;
  		var highTemp=wd.main.temp_max;
  		var lowTemp=wd.main.temp_min;
  		var curTemp=wd.main.temp;
  		$('#high').text(highTemp);
  		$('#low').text(lowTemp);
  		$('#temp').text(curTemp);
  	}
  	console.log(units);
  	console.log(highTemp);
  	console.log(lowTemp);
  	console.log(curTemp)
  	 
  	 // Math.round((fTemp - 32) * (5/9)) + "C";
  })





})


})
    });