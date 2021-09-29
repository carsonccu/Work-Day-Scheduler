// displays the date in the header
var today = moment();
var formattedToday = today.format("dddd, MMMM Do");
$("#currentDay").text(formattedToday);

$(".saveBtn").on("click", function () {
    console.log(description);
    var text = $(description).siblings(".description").val();
    localStorage.setItem(time, text)
})