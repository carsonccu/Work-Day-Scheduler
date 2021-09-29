// displays the date in the header
var today = moment();
var formattedToday = today.format("dddd, MMMM Mo");
$("#currentDay").text(formattedToday);

var currentTime = moment().format("H");