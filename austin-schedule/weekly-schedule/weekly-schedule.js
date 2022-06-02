/*
Currently, weekly-schedule.html and weekly-schedule.js are linked together; 
and profile.html and profile.js are also linked together.

Now, this is what I want to solve: profile.js can access variables in weekly-schedule.js

*/


let dayTextList = [];

const savedDayTextList = localStorage.getItem("dayTextListInLocalStorage");

window.addEventListener("click", function(event) {
if (event.target.id == "done-for-the-week-button") {
    mondayText = document.getElementById("monday-text").value;
    dayTextList.push(mondayText);

    tuesdayText = document.getElementById("tuesday-text").value;
    dayTextList.push(tuesdayText);

    wednesdayText = document.getElementById("wednesday-text").value;
    dayTextList.push(wednesdayText);

    thursdayText = document.getElementById("thursday-text").value;
    dayTextList.push(thursdayText);

    fridayText = document.getElementById("friday-text").value;
    dayTextList.push(fridayText);

    saturdayText = document.getElementById("saturday-text").value;
    dayTextList.push(saturdayText);
    
    sundayText = document.getElementById("sunday-text").value;
    dayTextList.push(sundayText);

    localStorage.setItem("dayTextListInLocalStorage",JSON.stringify(dayTextList));
  }
  else if (event.target.id == "schedule-history-update-button") {
    let mainBodyRightSide = document.createElement("div");
    mainBodyRightSide.style.cssText = "display: grid; grid-template-columns: 200px 200px 200px 200px; grid-template-rows: 250px 250px; column-gap: 10px; row-gap: 10px;";
    document.getElementById("schedule-history-content").appendChild(mainBodyRightSide);

    for (let i = 0; i < 7; i++) {
      let dayContainer = document.createElement("div");
      dayContainer.style.cssText = "display:flex; flex-direction: column; align-items: center; background-color: rgb(238,238,238); border-style: solid; border-color: rgb(238,238,238); border-radius: 5px;";
      mainBodyRightSide.appendChild(dayContainer);

      let dayTitle = document.createElement("p");
      if (i == 0) {
        dayTitle.innerHTML = "Monday";
      } else if (i == 1) {
        dayTitle.innerHTML = "Tuesday";
      } else if (i == 2) {
        dayTitle.innerHTML = "Wednesday";
      } else if (i == 3) {
        dayTitle.innerHTML = "Thursday";
      } else if (i == 4) {
        dayTitle.innerHTML = "Friday";
      } else if (i == 5) {
        dayTitle.innerHTML = "Saturday";
      } else if (i == 6) {
        dayTitle.innerHTML = "Sunday";
      }
      dayTitle.style.cssText = "font-weight: bold; color: black;";
      dayContainer.appendChild(dayTitle);
    }

  }
});

/*
      <div id="main-body-right-side">
        <div id="monday" class="day-container">
          <div class="day-title-container">
            <p class="day-title">Monday</p>
          </div>
          <hr class="line-between-title-and-text">
          <div>
            <textarea class="day-text" id="monday-text"></textarea>
          </div>
        </div>

        <div id="tuesday" class="day-container">
          <div class="day-title-container">
            <p class="day-title">Tuesday</p>
          </div>
          <hr class="line-between-title-and-text">
          <div>
            <textarea class="day-text" id="tuesday-text"></textarea>
          </div>
        </div>

        <div id="wednesday" class="day-container">
          <div class="day-title-container">
            <p class="day-title">Wednesday</p>
          </div>
          <hr class="line-between-title-and-text">
          <div>
            <textarea class="day-text" id="wednesday-text"></textarea>
          </div>
        </div>

        <div id="thursday" class="day-container">
          <div class="day-title-container">
            <p class="day-title">Thursday</p>
          </div>
          <hr class="line-between-title-and-text">
          <div>
            <textarea class="day-text" id="thursday-text"></textarea>
          </div>
        </div>

        <div id="friday" class="day-container">
          <div class="day-title-container">
            <p class="day-title">Friday</p>
          </div>
          <hr class="line-between-title-and-text">
          <div>
            <textarea class="day-text" id="friday-text"></textarea>
          </div>
        </div>

        <div id="saturday" class="day-container">
          <div class="day-title-container">
            <p class="day-title">Saturday</p>
          </div>
          <hr class="line-between-title-and-text">
          <div>
            <textarea class="day-text" id="saturday-text"></textarea>
          </div>
        </div>

        <div id="sunday" class="day-container">
          <div class="day-title-container">
            <p class="day-title">Sunday</p>
          </div>
          <hr class="line-between-title-and-text">
          <div>
            <textarea class="day-text" id="sunday-text"></textarea>
          </div>
        </div>
*/

