/*
Currently, weekly-schedule.html and weekly-schedule.js are linked together; 
and profile.html and profile.js are also linked together.

Now, this is what I want to solve: profile.js can access variables in weekly-schedule.js

*/

/*
Starting from "let dayTextList = []" to "localStorage.setItem...":
In weekly-schedule.html, if #done-for-the-week-button button is clicked, then dayTextList will save Monday-Sunday texts. 
At the end, dayTextList will be saved into localStorage under the name of "dayTextListInLocalStorage". 
savedDayTextList variable will equal to dayTextListInLocalStorage. In short, savedDayTextList will have the Monday-Sunday texts.
*/
let dayTextList = [];

let savedDayTextList = JSON.parse(localStorage.getItem("dayTextListInLocalStorage"));

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

  /*
  In profile.html, if #schedule-history-update-button button is clicked, then one mondayToSundaySchedule will be created. In mondayToSundaySchedule,
  one div will be created for Monday; inside this div will have the day title "Monday" and the day text. Then another div will be created for Tuesday, 
  and the same for Wednesday, Thursday, Friday, Saturday, and Sunday.
  */
  else if (event.target.id == "schedule-history-update-button") {
    let mondayToSundaySchedule = document.createElement("div");
    mondayToSundaySchedule.style.cssText = "display: grid; grid-template-columns: 200px 200px 200px 200px; grid-template-rows: 250px 250px; column-gap: 10px; row-gap: 10px; margin-bottom: 30px;";
    document.getElementById("schedule-history-content").appendChild(mondayToSundaySchedule);

    for (let i = 0; i < savedDayTextList.length; i++) {
      let dayContainer = document.createElement("div");
      dayContainer.style.cssText = "display:flex; flex-direction: column; align-items: center; background-color: rgb(238,238,238); border-style: solid; border-color: rgb(238,238,238); border-radius: 5px;";
      mondayToSundaySchedule.appendChild(dayContainer);

      let dayTitleContainer = document.createElement("div");
      dayTitleContainer.style.cssText = "margin-top: 5px; margin-bottom: 1px;";
      dayContainer.appendChild(dayTitleContainer);

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
      dayTitleContainer.appendChild(dayTitle);

      lineBetweenTitleAndText = document.createElement("hr");
      lineBetweenTitleAndText.style.cssText = "border-color: black; width: 80%; border-width: 0.5px;"
      dayContainer.appendChild(lineBetweenTitleAndText);

      dayTextContainer = document.createElement("div");
      dayContainer.appendChild(dayTextContainer);

      dayText = document.createElement("p");
      if (i == 0) {
        dayText.innerHTML = savedDayTextList[i];
      } else if (i == 1) {
        dayText.innerHTML = savedDayTextList[i]
      } else if (i == 2) {
        dayText.innerHTML = savedDayTextList[i];
      } else if (i == 3) {
        dayText.innerHTML = savedDayTextList[i];
      } else if (i == 4) {
        dayText.innerHTML = savedDayTextList[i];
      } else if (i == 5) {
        dayText.innerHTML = savedDayTextList[i];
      } else if (i == 6) {
        dayText.innerHTML = savedDayTextList[i];
      }
      dayText.style.cssText = "width: 193px; height: 200px; border:none; resize: none; outline: none; background-color: rgb(238,238,238);";
      dayContainer.appendChild(dayText);
    }
  }
});