var saveButton = $(".saveBtn");
var currentTime = dayjs().hour(); // sets currentTime to 24 hour clock

$(function () {
  saveButton.on("click", function (e) {
    var hourBlock = e.target.parentNode.id;

    var toDoInput = $("#" + hourBlock)
      .children(1)
      .eq(1)
      .val();

    localStorage.setItem(hourBlock, toDoInput);
  });

  $(".container-lg")
    .find("div")
    .each(function () {
      var timeBlock = $(this).attr("id");

      if (
        timeBlock < "hour-" + currentTime &&
        $(this).attr("class") == "row time-block"
      ) {
        $(this).addClass("past");
      } else if (
        timeBlock == "hour-" + currentTime &&
        $(this).attr("class") == "row time-block"
      ) {
        $(this).addClass("present");
      } else if (
        timeBlock > "hour-" + currentTime &&
        $(this).attr("class") == "row time-block"
      ) {
        $(this).addClass("future");
      }
    });

  for (var i = 9; i < 18; i++) {
    var hourId = "hour-" + i;
    var timeEl = $("#" + hourId);
    var newText = localStorage.getItem(hourId);

    timeEl.children(1).val(newText);
  }

  $("#currentDay").text(dayjs().format("MMM D, YYYY"));
});
