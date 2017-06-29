$(document).ready(function() {

// API key for rest of code

	var API_KEY = "eb7a60b05dc5c676d33e0f9d5b383737";
	var cel=false;
	var data;

	function displayTemp(fTemp,  c){
		if (c) return Math.round((fTemp - 32) * (5/9)) + " C";
		return Math.round(fTemp) + "F";
	}


	


$(function(){


// looks for location

var loc;

$.getJSON('https://ipinfo.io', function(APIdata){
  loc = APIdata.loc.split(',');

  $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat='+ loc[0] + '&lon=' + loc[1] + '&units=imperial&APPID='+ API_KEY).done(function(wd){
  	
  	data=APIdata;


  	var weather=wd.weather[0].description;
  	var location=APIdata.city + ', '+ APIdata.region;
  	var highTemp=displayTemp(wd.main.temp_max, cel);
  	var lowTemp=displayTemp(wd.main.temp_min, cel);
  	var curTemp=displayTemp(wd.main.temp, cel);
  	var wind=wd.wind.speed;
	var humidity=wd.main.humidity;

  	$('#weather').text(" " + weather);
	$('#location').text(location);
  	$('#high').text(highTemp);
  	$('#low').text(lowTemp);
  	$('#temp').text(curTemp);
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


  	$(".btn").click(function(){
  		$('')


  	})


  })

  // console.log(loc[0]+' and '+ loc[1]);

// 

 // checks user location and adds to page with city and region/state

// 

})


})
    });