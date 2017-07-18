function calculateTime(cityName) {
  var d = new Date();
  var cityTime;
  var civilianTime;
  var portlandTime = d.getHours();
  var minutes = d.getMinutes();
  if (cityName === "Tokyo, Japan") {
    cityTime = portlandTime - 8;
  } else if (cityName === "Honolulu, Hawaii") {
    cityTime = portlandTime - 3;
  } else if (cityName === "Portland, Oregon") {
    cityTime = portlandTime;
  } else if (cityName === "Denver, Colorado") {
    cityTime = portlandTime + 1;
  } else if (cityName === "St. Louis, Missouri") {
    cityTime = portlandTime + 2;
  } else if (cityName === "New York, New York") {
    cityTime = portlandTime + 3;
  } else if (cityName === "London, England") {
    cityTime = portlandTime + 8;
  } else if (cityName === "Paris, France") {
    cityTime = portlandTime + 9;
  } else if (cityName === "Athens, Greece") {
    cityTime = portlandTime + 10;
  }
  if (cityTime < 0) {
    cityTime = 24 + cityTime;
  } else if (cityTime > 23) {
    cityTime = cityTime - 24;
  }
  if (cityTime === 0 ) {
    civilianTime = "12:" + minutes + " AM";
  } else if (cityTime >= 1 && cityTime <= 11) {
    civilianTime = cityTime +  ":" + minutes + " AM";
  } else if (cityTime === 12){
    civilianTime = "12:" + minutes + " PM";
  } else {
    civilianTime = (cityTime - 12) + ":" +  minutes + " PM";
  }
  return civilianTime;
}


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})




$(document).ready(function() {
  $("h5").click(function(event) {
    event.preventDefault();
    var cityName = $(this).text();
   var time = calculateTime(cityName);
   alert(time);
  });


});
