/*
Currently, weekly-schedule.html and weekly-schedule.js are linked together; 
and profile.html and profile.js are also linked together.

Now, this is what I want to solve: profile.js can access variables in weekly-schedule.js

*/

/*
Starting from "let dayTextList = []" to "localStorage.setItem...":
In weekly-schedule.html, if #done-for-the-week-button button is clicked, then dayTextList will save Monday-Sunday texts. 
At the end, dayTextList will be saved into localStorage under the name of "dayTextListInLocalStorage". 
savedScheduleHistoryList variable will equal to dayTextListInLocalStorage. In short, savedScheduleHistoryList will have the Monday-Sunday texts.
*/

let weeklyScheduleList = [];

let savedScheduleHistoryList = JSON.parse(localStorage.getItem("scheduleHistoryList"));

window.addEventListener("click", function(event) {
  //if the #done-for-the-week-button button is clicked, then...
  if (event.target.id == "done-for-the-week-button") { 

      //weeklyScheduleList = [mondayText content, tuesdayText content, wednesdayText content, etc...]
      mondayText = document.getElementById("monday-text").value;
      weeklyScheduleList.push(mondayText);

      tuesdayText = document.getElementById("tuesday-text").value;
      weeklyScheduleList.push(tuesdayText);

      wednesdayText = document.getElementById("wednesday-text").value;
      weeklyScheduleList.push(wednesdayText);

      thursdayText = document.getElementById("thursday-text").value;
      weeklyScheduleList.push(thursdayText);

      fridayText = document.getElementById("friday-text").value;
      weeklyScheduleList.push(fridayText);

      saturdayText = document.getElementById("saturday-text").value;
      weeklyScheduleList.push(saturdayText);
      
      sundayText = document.getElementById("sunday-text").value;
      weeklyScheduleList.push(sundayText);

      if (localStorage.getItem("scheduleHistoryList") == null) { //if scheduleHistoryList does not exist in Local Storage, then...
        localStorage.setItem("scheduleHistoryList", JSON.stringify(weeklyScheduleList)); //create scheduleHistoryList in Local Storage, and make scheduleHistoryList equal to weeklyScheduleList
      }
      else if (localStorage.getItem("scheduleHistoryList") != null) { //if scheduleHistoryList does exist in Local Storage, then...
        let temporaryScheduleHistoryList = JSON.parse(localStorage.getItem("scheduleHistoryList")); //temporaryScheduleHistoryList = scheduleHistoryList
        
        for (let i = 0; i < weeklyScheduleList.length; i++) { //add items to the temporaryScheduleHistoryList
          temporaryScheduleHistoryList.push(weeklyScheduleList[i]);
        }
        localStorage.setItem("scheduleHistoryList", JSON.stringify(temporaryScheduleHistoryList)); //scheduleHistoryList = new temporaryScheduleHistoryList
      }
  }
});

//This function is used in the profile.html <script> section. 
function uploadScheduleHistory() {
    let numberOfWeeks = savedScheduleHistoryList.length/7;
  
    for (let week = 0; week < numberOfWeeks; week++) {
      let weeklySchedule = document.createElement("div");
      weeklySchedule.style.cssText = "display: grid; grid-template-columns: 200px 200px 200px 200px; grid-template-rows: 250px 250px; column-gap: 10px; row-gap: 10px; margin-bottom: 30px;";
      document.getElementById("schedule-history-content").appendChild(weeklySchedule);
    
      let numberOfDaysPerWeek = 7;
      for (let day = 0; day < 7; day++) {
       let dayContainer = document.createElement("div");
       dayContainer.style.cssText = "display:flex; flex-direction: column; align-items: center; background-color: rgb(238,238,238); border-style: solid; border-color: rgb(238,238,238); border-radius: 5px;";
       weeklySchedule.appendChild(dayContainer);
    
       let dayTitleContainer = document.createElement("div");
       dayTitleContainer.style.cssText = "margin-top: 5px; margin-bottom: 1px;";
       dayContainer.appendChild(dayTitleContainer);
    
       let dayTitle = document.createElement("p");
        if (day == 0) {
          dayTitle.innerHTML = "Monday";
        } else if (day == 1) {
          dayTitle.innerHTML = "Tuesday";
        } else if (day == 2) {
          dayTitle.innerHTML = "Wednesday";
        } else if (day == 3) {
          dayTitle.innerHTML = "Thursday";
        } else if (day == 4) {
          dayTitle.innerHTML = "Friday";
        } else if (day == 5) {
          dayTitle.innerHTML = "Saturday";
        } else if (day == 6) {
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
        let number = (week * numberOfDaysPerWeek);
        /*
        week = 0...
        number = 0
        0 + number = 0
        1 + number = 1
        2 + number = 2
        3 + number = 3
        4 + number = 4
        5 + number = 5
        6 + number = 6
    
        week = 1...
        number = 7
        0 + number = 7
        1 + number = 8
        2 + number = 9
        3 + number = 10
        4 + number = 11
        5 + number = 12
        6 + number = 13
    
        week = 2...
        number = 14
        0 + number = 14
        1 + number = 15
        2 + number = 16
        3 + number = 17
        4 + number = 18
        5 + number = 19
        6 + number = 20
        */
    
        if (day + number == 0 + number) {
          dayText.innerHTML = savedScheduleHistoryList[0 + number];
        } else if (day + number == 1 + number) {
          dayText.innerHTML = savedScheduleHistoryList[1 + number];
        } else if (day + number == 2 + number) {
          dayText.innerHTML = savedScheduleHistoryList[2 + number];
        } else if (day + number == 3 + number) {
          dayText.innerHTML = savedScheduleHistoryList[3 + number];
        } else if (day + number == 4 + number) {
          dayText.innerHTML = savedScheduleHistoryList[4 + number];
        } else if (day + number == 5 + number) {
          dayText.innerHTML = savedScheduleHistoryList[5 + number];
        } else if (day + number == 6 + number) {
          dayText.innerHTML = savedScheduleHistoryList[6 + number];
        }
        dayText.style.cssText = "width: 193px; height: 200px; border:none; resize: none; outline: none; background-color: rgb(238,238,238);";
        dayTextContainer.appendChild(dayText);
     }
    }
}


/*
What I Learned: 
Goal: append items to localStorage
Solution:
1) Create a localStorage.
2) Create a new variable equal to the localStorage.
3) Append to the new variable by doing this: new variable.push(...)
4) Set localStorage equal to the new variable
*/