$(function() {
  var handleWeatherResponse = function(weather) {
    // "weather" is an object that holds all the information you need. Here, we
    // write it out to the console for easy viewing.
    console.log(weather);

    // We also set a window-level variable so we can use it in the console,
    // by typing "weather"
    window.weather = weather;

    // Put your code here. Don't change any other code in this file. You will be sad.
    var CurTemp = "<p>Current Temperature: " + parseInt(weather.currently.temperature) + " &#8457 / " + parseInt((weather.currently.temperature -32)*5/9) + " &#8451</p>";
    var CurHum = "<p>Current Humidity: " + weather.currently.humidity + " %</p>";
    var datetemp = new Date(weather.daily.data[1].time*1000);

    var Date1 = {month:datetemp.getMonth()+1,day:datetemp.getDate(),summary:weather.daily.data[1].summary};
    var dispDate1 = "<p>" + Date1.month + "-" + Date1.day + "</p>";
    var dispDate1sum = "<p>" + Date1.summary + "</p>";
    //var ryan={location: {state:"Illinois", city:"Chicago"},name:"Ryan",vehicle:"bicycle",favNumbers: [12,3,24,4,0]}
    // End of your code. No, really. Don't change anything below this, or above line 11.

    // Takes the contents of the "markup" variable (which should contain HTML)
    // and write it out to the page.
    $('.weather-temp').html(CurTemp);
    $('.weather-hum').html(CurHum);
    $('.date-one').html(dispDate1);
    $('.summary-one').html(dispDate1sum);

  }

  // The "glue" that makes it all work. Don't really worry about this for now.
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/41.946428,-87.707409?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
