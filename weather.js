$(function() {



//  console.log(icons)

  var handleWeatherResponse = function(weather) {
    // "weather" is an object that holds all the information you need. Here, we
    // write it out to the console for easy viewing.
    console.log(weather);

    // We also set a window-level variable so we can use it in the console,
    // by typing "weather"

    window.weather = weather;

    // Let's get that data!

    var days = [];
    var dayIcons = [0,0,0,0];

    for (i=0; i<5; i++) {
  //    console.log(Math.round(weather.daily.data[i+1].temperatureMax));
      var datetemp = new Date(weather.daily.data[i+1].time*1000);
      days[i] = {month:datetemp.getMonth()+1,day:datetemp.getDate(),summary:weather.daily.data[i+1].summary,highTemp:Math.round(weather.daily.data[i+1].temperatureMax),lowTemp:Math.round(weather.daily.data[i+1].temperatureMin),icon:weather.daily.data[i].icon};
      console.log(days[i].icon);

	  }



    // Put your code here. Don't change any other code in this file. You will be sad.
    var CurTemp = "<p>Currently " + Math.round(weather.currently.temperature) + " &#8457 / " + Math.round((weather.currently.temperature -32)*5/9) + " &#8451</p>";// + city + ", " + state + "</p>";
    var CurHum = "<p>" + weather.currently.summary + " with "+ Math.round((weather.currently.humidity)*100) + " % Humidity</p>";

    var dispDate1 = "<p>" + days[0].month + "-" + days[0].day + "</p>";
    var dispDate1sum = "<p>" + days[0].summary + "</p>";
    var dispDate1hightemp = "<p>" + days[0].highTemp + "</p>";
    var dispDate1lowtemp = "<p>" + days[0].lowTemp + "</p>";

    var dispDate2 = "<p>" + days[1].month + "-" + days[1].day + "</p>";
    var dispDate2sum = "<p>" + days[1].summary + "</p>";
    var dispDate2hightemp = "<p>" + days[1].highTemp + "</p>";
    var dispDate2lowtemp = "<p>" + days[1].lowTemp + "</p>";

    var dispDate3 = "<p>" + days[2].month + "-" + days[2].day + "</p>";
    var dispDate3sum = "<p>" + days[2].summary + "</p>";
    var dispDate3hightemp = "<p>" + days[2].highTemp + "</p>";
    var dispDate3lowtemp = "<p>" + days[2].lowTemp + "</p>";

    var dispDate4 = "<p>" + days[3].month + "-" + days[3].day + "</p>";
    var dispDate4sum = "<p>" + days[3].summary + "</p>";
    var dispDate4hightemp = "<p>" + days[3].highTemp + "</p>";
    var dispDate4lowtemp = "<p>" + days[3].lowTemp + "</p>";
    //var ryan={location: {state:"Illinois", city:"Chicago"},name:"Ryan",vehicle:"bicycle",favNumbers: [12,3,24,4,0]}
    // End of your code. No, really. Don't change anything below this, or above line 11.

    // Takes the contents of the "markup" variable (which should contain HTML)
    // and write it out to the page.
    $('.weather-temp').html(CurTemp);
    $('.weather-hum').html(CurHum);

//    var temp = "<canvas id='" + days[1].icon + "' width='32' height='32'></canvas>"
//    var temp = "<canvas id='clear-day' width='32' height='32'></canvas>"
//    console.log(temp)

    $('.icon-one').html("<canvas id='" + days[1].icon + "' width='32' height='32'></canvas>");
//<canvas id="clear-day" width="32" height="32"></canvas>
    $('.date-one').html(dispDate1);
    $('.summary-one').html(dispDate1sum);
    $('.hightemp-one').html(dispDate1hightemp);
    $('.lowtemp-one').html(dispDate1lowtemp);

    $('.icon-two').html("<canvas id='" + days[2].icon + "' width='32' height='32'></canvas>")
    $('.date-two').html(dispDate2);
    $('.summary-two').html(dispDate2sum);
    $('.hightemp-two').html(dispDate2hightemp);
    $('.lowtemp-two').html(dispDate2lowtemp);

    $('.icon-three').html("<canvas id='" + days[3].icon + "' width='32' height='32'></canvas>")
    $('.date-three').html(dispDate3);
    $('.summary-three').html(dispDate3sum);
    $('.hightemp-three').html(dispDate3hightemp);
    $('.lowtemp-three').html(dispDate3lowtemp);

    $('.icon-four').html("<canvas id='" + days[4].icon + "' width='32' height='32'></canvas>")
    $('.date-four').html(dispDate4);
    $('.summary-four').html(dispDate4sum);
    $('.hightemp-four').html(dispDate4hightemp);
    $('.lowtemp-four').html(dispDate4lowtemp);

    var icons = new Skycons(),
        list  = [
          "clear-day", "clear-night", "partly-cloudy-day",
          "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
          "fog"
        ],
        i;
    icons.color = "white"
    for(i = list.length; i--; )
      icons.set(list[i], list[i]);

    icons.play();
  }

  // The "glue" that makes it all work. Don't really worry about this for now.
//  $(window).load(function(event){
//  $('a.get-the-weather').on('click', function(event) {
    //alert("pageload event fired!");
  event.preventDefault();

//  var mylocation;
  $.getJSON('https://freegeoip.net/json/')
     .done (function(location)
     {
       var userLat = location.latitude;
       var userLong = location.longitude;
       var city = location.city;
       var state = location.region_code;
       mylocation = location.city;
       console.log(city,state);
      // $('.locationInfo').html("Current location is " + city + ", " + state + ".")
       var newurl = "https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/" + userLat + "," + userLong + "?callback=?";

       $.ajax({
         type: 'GET',
         url: newurl,
         dataType: 'jsonp',
         contentType: "application/json",
         success: handleWeatherResponse

       });

     });

//  console.log("This is my " + mylocation)
//  });
});
