/*

*/
window.addEventListener("click", function(event) { //
  //if the #done-for-the-week-button button is clicked, then...
  if (event.target.id == "done-for-the-week-button") { 

      let weeklyScheduleList = [];
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

      //First If Statement Content: Create scheduleHistoryList, which is in localStorage
      //Second If Statement Content: append items to scheduleHistoryList, which is in localStorage
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

      //If the #done-for-the-week-button button is clicked, then the schedule template will be displayed in the weekly schedule.
      let savedScheduleTemplateList = JSON.parse(localStorage.getItem("scheduleTemplateList"));
      console.log(savedScheduleTemplateList[0]);
      console.log(savedScheduleTemplateList[6]);
      console.log(savedScheduleTemplateList.length);
      for (let day = 0; day < savedScheduleTemplateList.length; day++) {
        if (day == 0) {
          document.getElementById("monday-text").innerHTML = savedScheduleTemplateList[day];
        }
        else if (day == 1) {
          document.getElementById("tuesday-text").innerHTML = savedScheduleTemplateList[day];
        }
        else if (day == 2) {
          document.getElementById("wednesday-text").innerHTML = savedScheduleTemplateList[day];
        }
        else if (day == 3) {
          document.getElementById("thursday-text").innerHTML = savedScheduleTemplateList[day];
        }
        else if (day == 4) {
          document.getElementById("friday-text").innerHTML = savedScheduleTemplateList[day];
        }
        else if (day == 5) {
          document.getElementById("saturday-text").innerHTML = savedScheduleTemplateList[day];
        }
        else if (day == 6) {
          document.getElementById("sunday-text").innerHTML = savedScheduleTemplateList[day];
        }
      } 
  }
  //if the #update-schedule-template-button button is clicked, then...
  else if (event.target.id == "update-schedule-template-button") { 

    let scheduleTemplateList = [];
    //scheduleTemplateList will equal [mondayTemplate, tuesdayTemplate, wednesdayTemplate, etc...]
    let mondayTemplate = document.getElementById("schedule-template-monday-text").value;
    scheduleTemplateList.push(mondayTemplate);

    let tuesdayTemplate = document.getElementById("schedule-template-tuesday-text").value;
    scheduleTemplateList.push(tuesdayTemplate);

    let wednesdayTemplate = document.getElementById("schedule-template-wednesday-text").value;
    scheduleTemplateList.push(wednesdayTemplate);

    let thursdayTemplate = document.getElementById("schedule-template-thursday-text").value;
    scheduleTemplateList.push(thursdayTemplate);

    let fridayTemplate = document.getElementById("schedule-template-friday-text").value;
    scheduleTemplateList.push(fridayTemplate);

    let saturdayTemplate = document.getElementById("schedule-template-saturday-text").value;
    scheduleTemplateList.push(saturdayTemplate);

    let sundayTemplate = document.getElementById("schedule-template-sunday-text").value;
    scheduleTemplateList.push(sundayTemplate);


    if (localStorage.getItem("scheduleTemplateList") == null) { //if scheduleTemplateList does not exist in localStorage, then...
      localStorage.setItem("scheduleTemplateList", JSON.stringify(scheduleTemplateList)); //create scheduleTemplateList in Local Storage that is equal to scheduleTemplateList variable
    }
    else if (localStorage.getItem("scheduleTemplateList") != null){ //if scheduleTemplateList does exist in localStorage, then...
      localStorage.setItem("scheduleTemplateList", JSON.stringify(scheduleTemplateList)); //set scheduleTemplateList in Local Storage to the scheduleTemplateList variable
    }
  }
  else if (event.target.id == "edit-profile-button") {
    let editProfilePage = document.createElement("div");
    editProfilePage.style.cssText = "position: fixed; top: 0px; bottom: 0px; right: 0px; left: 0px; background-color: rgba(204,204,205,0.8);"
    document.getElementById("profile-web-page-main-body").appendChild(editProfilePage);

    let editProfilePicture = document.createElement("input")
    editProfilePicture.type = "file";
    editProfilePicture.accept = "image/*"; //image/* means any image file
    editProfilePicture.style.cssText = "position: absolute; top: 44%;"
    editProfilePage.appendChild(editProfilePicture);

    let editName = document.createElement("textarea");
    editName.style.cssText = "position: absolute; top: 48%; bottom: 48%;"
    editProfilePage.appendChild(editName);

    let editProfileDescription = document.createElement("textarea");
    editProfileDescription.style.cssText = "position: absolute; top: 54%;";
    editProfilePage.appendChild(editProfileDescription);

    let saveChangeButton = document.createElement("button");
    saveChangeButton.innerHTML = "Save Changes";
    saveChangeButton.style.cssText = "position: absolute; top: 60%;";
    editProfilePage.appendChild(saveChangeButton);
  }
});

window.addEventListener("beforeunload", function(event) { //before the website page closes...
  if ((event.target.location.href).includes("weekly-schedule.html")) {
    let thisWeekScheduleList = [];
    const daysPerWeek = 7;
    for (let day = 0; day < daysPerWeek; day++) { //thisWeekScheduleList will append monday to sunday texts.
      if (day == 0) {
        thisWeekScheduleList.push(document.getElementById("monday-text").value);
      }
      else if (day == 1) {
        thisWeekScheduleList.push(document.getElementById("tuesday-text").value)
      }
      else if (day == 2) {
        thisWeekScheduleList.push(document.getElementById("wednesday-text").value)
      }
      else if (day == 3) {
        thisWeekScheduleList.push(document.getElementById("thursday-text").value)
      }
      else if (day == 4) {
        thisWeekScheduleList.push(document.getElementById("friday-text").value)
      }
      else if (day == 5) {
        thisWeekScheduleList.push(document.getElementById("saturday-text").value)
      }
      else if (day == 6) {
        thisWeekScheduleList.push(document.getElementById("sunday-text").value)
      }
    }
  //thisWeekScheduleList in localStorage will equal to thisWeekScheduleList array variable. 
  //thisWeekScheduleList in localStorage will be used for when weekly-schedule.html page loads, then thisWeekScheduleList items will be displayed from monday to sunday texts.
    localStorage.setItem("thisWeekScheduleList", JSON.stringify(thisWeekScheduleList)); 
  }
});

window.addEventListener("load", function(event) { //when the website page is loaded, then...
  let websiteLink = event.target.location.href;
  if (websiteLink.includes("weekly-schedule.html")) {
    //When the weekly-schedule.html page loads, then thisWeekScheduleList items will be displayed from monday to sunday texts.
      let thisWeekScheduleList = JSON.parse(localStorage.getItem("thisWeekScheduleList"));
      const daysPerWeek = 7;
      for (let day = 0; day < daysPerWeek; day++) {
        if (day == 0) {
          document.getElementById("monday-text").innerHTML = thisWeekScheduleList[day];
        }
        else if (day == 1) {
          document.getElementById("tuesday-text").innerHTML = thisWeekScheduleList[day];
        }
        else if (day == 2) {
          document.getElementById("wednesday-text").innerHTML = thisWeekScheduleList[day];
        }
        else if (day == 3) {
          document.getElementById("thursday-text").innerHTML = thisWeekScheduleList[day];
        }
        else if (day == 4) {
          document.getElementById("friday-text").innerHTML = thisWeekScheduleList[day];
        }
        else if (day == 5) {
          document.getElementById("saturday-text").innerHTML = thisWeekScheduleList[day];
        }
        else if (day == 6) {
          document.getElementById("sunday-text").innerHTML = thisWeekScheduleList[day];
        }
      }
  }
  else if (websiteLink.includes("schedule-template.html")) {
      /*When schedule-template html page runs, then these lines of code will also run.
      When the page loads, savedScheduleTemplateList[i] will paste onto the day context. 
      */
      let savedScheduleTemplateList = JSON.parse(localStorage.getItem("scheduleTemplateList"));
      for (let i = 0; i < savedScheduleTemplateList.length; i++) {
        if (i == 0) {
          document.getElementById("schedule-template-monday-text").innerHTML = savedScheduleTemplateList[i];
        }
        else if (i == 1) {
          document.getElementById("schedule-template-tuesday-text").innerHTML = savedScheduleTemplateList[i];
        }
        else if (i == 2) {
          document.getElementById("schedule-template-wednesday-text").innerHTML = savedScheduleTemplateList[i];
        }
        else if (i == 3) {
          document.getElementById("schedule-template-thursday-text").innerHTML = savedScheduleTemplateList[i];
        }
        else if (i == 4) {
          document.getElementById("schedule-template-friday-text").innerHTML = savedScheduleTemplateList[i];
        }
        else if (i == 5) {
          document.getElementById("schedule-template-saturday-text").innerHTML = savedScheduleTemplateList[i];
        }
        else if (i == 6) {
          document.getElementById("schedule-template-sunday-text").innerHTML = savedScheduleTemplateList[i];
        }
      }    
  }
  else if (websiteLink.includes("profile.html")) {
    uploadScheduleHistory();
  }
});

function uploadScheduleHistory() { //this function is used in window.addEventListener("load") third if statement content
    let savedScheduleHistoryList = JSON.parse(localStorage.getItem("scheduleHistoryList"));
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

Goal: Before closing the website page, a function will run.
Solution: 
window.addEventListener("beforeunload", function(event))

Goal: When loading the website page, a function will run.
window.addEventListener("load", function(event))
*/