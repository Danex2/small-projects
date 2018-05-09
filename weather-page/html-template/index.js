$(document).ready(function() {
    $("button").click(function() {
        $.getJSON('https://ipapi.co/json/', function(city) {
            $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+ city.city +'")&format=json', function (data) {
                let name = document.getElementById("testname").value;
                let timeNow = moment();
                $("#result").html("<p> Hello " + name + "</p>");
                $("#time").html("<p> It is currently " + timeNow.format('LT') + "</p>");
                $("#weather-info").html("<p>There is a high of  " + data.query.results.channel.item.forecast[0].high + " F and a low of " + data.query.results.channel.item.forecast[0].low +  " F in " + city.city + "</p>");
                //console.log(data);
                //console.log(data.query.results.channel.item.forecast[0]);
            });
        });
     });
});