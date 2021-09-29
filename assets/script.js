// displays the date in the header
var today = moment();
var formattedToday = today.format("dddd, MMMM Do");
$("#currentDay").text(formattedToday);

$(".saveBtn").on("click", function () {
    //get description and time.
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
})

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour9"));
$("#hour11 .description").val(localStorage.getItem("hour9"));
$("#hour12 .description").val(localStorage.getItem("hour9"));
$("#hour1 .description").val(localStorage.getItem("hour9"));
$("#hour2 .description").val(localStorage.getItem("hour9"));
$("#hour3 .description").val(localStorage.getItem("hour9"));
$("#hour4 .description").val(localStorage.getItem("hour9"));
$("#hour5 .description").val(localStorage.getItem("hour9"));