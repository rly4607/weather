$(function() {
  var handleWeatherResponse = function(weather) {
    // "weather" is an object that holds all the information you need. Here, we
    // write it out to the console for easy viewing.
    console.log(weather);

    // We also set a window-level variable so we can use it in the console,
    // by typing "weather"
    window.weather = weather;

    // Put your code here. Don't change any other code in this file. You will be sad.
    var CurTemp = "<p>Currently " + parseInt(weather.currently.temperature) + " &#8457 / " + parseInt((weather.currently.temperature -32)*5/9) + " &#8451 </p>";
    var CurHum = "<p>" + weather.currently.summary + " with "+ weather.currently.humidity + " % Humidity</p>";
    var datetemp1 = new Date(weather.daily.data[1].time*1000);
    var datetemp2 = new Date(weather.daily.data[2].time*1000);
    var datetemp3 = new Date(weather.daily.data[3].time*1000);

    var Date1 = {month:datetemp1.getMonth()+1,day:datetemp1.getDate(),summary:weather.daily.data[1].summary,highTemp:weather.daily.data[1].temperatureMax,lowTemp:weather.daily.data[1].temperatureMin};
    var dispDate1 = "<p>" + Date1.month + "-" + Date1.day + "</p>";
    var dispDate1sum = "<p>" + Date1.summary + "</p>";
    var dispDate1hightemp = "<p>" + parseInt(Date1.highTemp) + "</p>";
    var dispDate1lowtemp = "<p>" + parseInt(Date1.lowTemp) + "</p>";

    var Date2 = {month:datetemp2.getMonth()+1,day:datetemp2.getDate(),summary:weather.daily.data[2].summary,highTemp:weather.daily.data[2].temperatureMax,lowTemp:weather.daily.data[2].temperatureMin};
    var dispDate2 = "<p>" + Date2.month + "-" + Date2.day + "</p>";
    var dispDate2sum = "<p>" + Date2.summary + "</p>";
    var dispDate2hightemp = "<p>" + parseInt(Date2.highTemp) + "</p>";
    var dispDate2lowtemp = "<p>" + parseInt(Date2.lowTemp) + "</p>";

    var Date3 = {month:datetemp3.getMonth()+1,day:datetemp3.getDate(),summary:weather.daily.data[3].summary,highTemp:weather.daily.data[3].temperatureMax,lowTemp:weather.daily.data[3].temperatureMin};
    var dispDate3 = "<p>" + Date3.month + "-" + Date3.day + "</p>";
    var dispDate3sum = "<p>" + Date3.summary + "</p>";
    var dispDate3hightemp = "<p>" + parseInt(Date3.highTemp) + "</p>";
    var dispDate3lowtemp = "<p>" + parseInt(Date3.lowTemp) + "</p>";
    //var ryan={location: {state:"Illinois", city:"Chicago"},name:"Ryan",vehicle:"bicycle",favNumbers: [12,3,24,4,0]}
    // End of your code. No, really. Don't change anything below this, or above line 11.

    // Takes the contents of the "markup" variable (which should contain HTML)
    // and write it out to the page.
    $('.weather-temp').html(CurTemp);
    $('.weather-hum').html(CurHum);

    $('.date-one').html(dispDate1);
    $('.summary-one').html(dispDate1sum);
    $('.hightemp-one').html(dispDate1hightemp);
    $('.lowtemp-one').html(dispDate1lowtemp);

    $('.date-two').html(dispDate2);
    $('.summary-two').html(dispDate2sum);
    $('.hightemp-two').html(dispDate2hightemp);
    $('.lowtemp-two').html(dispDate2lowtemp);

    $('.date-three').html(dispDate3);
    $('.summary-three').html(dispDate3sum);
    $('.hightemp-three').html(dispDate3hightemp);
    $('.lowtemp-three').html(dispDate3lowtemp);

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
