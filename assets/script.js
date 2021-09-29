// displays the date in the header
var today = moment();
var formattedToday = today.format("dddd, MMMM Mo");
$("#currentDay").text(formattedToday);
// var to format time to 24 hour 
var currentTime = moment().format("H");
var textbox = $(".col-md-10 description");
