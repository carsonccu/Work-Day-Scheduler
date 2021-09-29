var today = moment();
// var formattedToday = today.format("dddd,MMMM Mo");
// $("currentDay").text(formattedToday);

function checkTime() {
    const todaysDate = document.querySelector("#currentDay");
    var currentTime = moment();
    todaysDate.textContent = currentTime.format("dddd, MMMM Do, YYYY");
}