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
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour2 .description").val(localStorage.getItem("hour2"));
$("#hour3 .description").val(localStorage.getItem("hour3"));
$("#hour4 .description").val(localStorage.getItem("hour4"));
$("#hour5 .description").val(localStorage.getItem("hour5"));

// reads hours in military time
var currentTime = Number(currentDay.format("H"));

if (currentTime === 9) {
    $("#0").addClass("present");
} else if (currentTime > 9) {
    $("#0").addClass("past");
};
if (currentTime === 10) {
    $("#1").addClass("present");
} else if (currentTime > 10) {
    $("#1").addClass("past");
};
if (currentTime === 11) {
    $("#2").addClass("present");
} else if (currentTime > 11) {
    $("#2").addClass("past");
};
if (currentTime === 12) {
    $("#3").addClass("present");
} else if (currentTime > 12) {
    $("#3").addClass("past");
};
if (currentTime === 13) {
    $("#4").addClass("present");
} else if (currentTime > 13) {
    $("#4").addClass("past");
};
if (currentTime === 14) {
    $("#5").addClass("present");
} else if (currentTime > 14) {
    $("#5").addClass("past");
};
if (currentTime === 15) {
    $("#6").addClass("present");
} else if (currentTime > 15) {
    $("#6").addClass("past");
};
if (currentTime === 16) {
    $("#7").addClass("present");
} else if (currentTime > 16) {
    $("#7").addClass("past");
};
if (currentTime === 17) {
    $("#8").addClass("present");
} else if (currentTime > 17) {
    $("#8").addClass("past");
};