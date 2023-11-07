const timeOfDay = ["9","10","11","12","13","14","15", "16", "17", "18", "19"];

function updateDateTime() {
  const time = new Date();
  const currentDateTime = time.toLocaleString();
  document.querySelector('#datetime').textContent = currentDateTime;
  const currentHour = time.getHours();
  timeOfDay.forEach(hourOfDay => {
    // console.log(hourOfDay);
    if (currentHour==hourOfDay) {
      $(`#hour-${hourOfDay}`).css("background-color", "red");
      // console.log(`hour-${hourOfDay}`);
    }
    if (currentHour > hourOfDay) {
      // console.log("thisIsThePastHours");
      // console.log(hour);
      $("#hour-" + hourOfDay).css("background-color", "gray");
      // console.log(`hour-${hourOfDay}`);
    }
    if (currentHour < hourOfDay) {
      $(`#hour-${hourOfDay}`).css("background-color", "green");
    }
  })
      }

      setInterval(updateDateTime, 1000);

      const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("dayOfTheWeek").innerHTML = day;

const element = document.getElementById("b1");
element.addEventListener("click", myFunction);
console.log(element);

function myFunction() {
  document.getElementById("b1").innerHTML = "Saved";
}

function createItem() {
  localStorage.setItem("b1", Date.now());
}

function readValue() {
  var x = localStorage.getItem("b1");
  document.getElementById("b1").innerHTML = x;
}

var saveButtons = $(".saveBtn")
saveButtons.on("click", function (event) {
  console.log(event.target);
 var note = $(this).siblings(".description").val();
 var timeOfNote = $(this).siblings(".hour").text();
 console.log(timeOfNote);
 localStorage.setItem(timeOfNote, note)
})

var timeBlocks = $(".time-block")
timeBlocks.each(function () {
  console.log($(this));
})

