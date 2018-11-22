//Weather API
function getWeather() {
  $('.weatherResponse').html('');
  var cityName = $('#cityName').val();
  var apiCall =
  'http://api.openweathermap.org/data/2.5/weather?q=' + cityName +  '&APPID=af57a5a7a1791d91d543776cc69d920b&units=imperial';

  $.getJSON(apiCall, weatherCallback);
  function weatherCallback(weatherData) {
  var cityName = weatherData.name;
  var country = weatherData.sys.country;
  var temp = Math.round(weatherData.main.temp);
  var description = weatherData.weather[0].description;
  $('.weatherResponse').append(cityName + " , " + country +  + temp + " ° " + description);
  $('.weatherCityName').append(cityName);
  $('.weatherCountry').append(country);
  $('.weatherTemp').append(temp +"°");
  $('.weatherDescription').append(description);
  }
}

//jQuery to Hide title
$("input").on("click", function() {
  $(".title").hide();
});



$("input").on("click", function() {
 $('.weatherCityName, .weatherCountry, .weatherTemp, .weatherDescription').html('');

 $(document).keypress(function(event){
     var keycode = (event.keyCode ? event.keyCode : event.which);
     if(keycode == '13'){
        $('.weatherCityName, .weatherCountry, .weatherTemp, .weatherDescription').html('');
     }
 });


 $('input:text').focus(
     function(){
         $(this).val('');
     });
});

//Raises/Lowers Search/Button
$("input").on("click", function() {
  $('#search').css("bottom","300px")
});

$("h3").on("click", function() {
  $('#search').css("bottom","25px")
});

$(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        $('#search').css("bottom","25px");
    }
});

//close keyboard on mobile
$(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        document.activeElement.blur();
    }
});




//Get Weather Command
$("h3").on("click", function(){
    getWeather();
});

$(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        getWeather();
    }
});
