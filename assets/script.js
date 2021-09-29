// displays the date in the header
var today = moment();
var formattedToday = today.format("dddd, MMMM Do");
$("#currentDay").text(formattedToday);
// var to format time to 24 hour 

let currentTime = moment().hour("H");
console.log()

function timeCompare() {
    var blockhour = parseInt($(this).attr("id").split("hour")[1]);
    console.log(blockhour, currentTime);
}
